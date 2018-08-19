$(function() {
	$('.slider-products .slider__slides').slick({
	  infinite: true,
	  slidesToShow: 1,
	  autoplay: true,
	  centerMode: true,
	  dots: false,
	  appendArrows: $('.slider-products .slider__actions'),
	  prevArrow: '.slider__prev',
	  nextArrow: '.slider__next',
	  variableWidth: true,
 	  autoplaySpeed: 2000,
	  slidesToScroll: 1
	});
});