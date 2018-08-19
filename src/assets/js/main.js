$(function() {
	$('.slider-products .slider__slides').slick({
	  infinite: true,
	  slidesToShow: 1,
	  autoplay: true,
	  centerMode: false,
	  dots: false,
	  appendArrows: $('.slider-products .slider__actions'),
	  prevArrow: '.slider__prev',
	  nextArrow: '.slider__next',
 	  autoplaySpeed: 5000,
	  slidesToScroll: 1
	});
});