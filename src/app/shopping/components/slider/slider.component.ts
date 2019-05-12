  import {Component, Input, ElementRef, AfterContentInit} from '@angular/core';
    declare var jQuery: any;

    @Component({
        selector: 'app-slider',
        templateUrl: './slider.component.html',
	 	styleUrls: ['./slider.component.css']
    })

    export class SliderComponent implements AfterContentInit {
        @Input() options: any;
        $element: any;

        @Input() isLoad = false;
        defaultOptions: any = {
            dots: false,
            arrows: true,
            infinite: true,
            speed: 400,
            appendArrows: jQuery('.slider-products .slider__actions'),
	  		prevArrow: '.slider__prev',
	  		nextArrow: '.slider__next',
            slidesToShow: 1,
            slidesToScroll: 1
        };

        constructor(private el: ElementRef) {
        }

        ngAfterContentInit(): void {
            for (const key in this.options) {
                if (key) {
                    this.defaultOptions[key] = this.options[key];
                }
            }
            this.$element = jQuery(".slider-products .slider__slides").slick(this.defaultOptions);
        }
    }