$(function () {



	$('.header__menu').on('click', function () {
		$('.header__nav').toggleClass('_active')
		$('body').toggleClass('_lock')
		$('.header').toggleClass('_active')
	});


	$('.pref__blur').on('click', function () {
		$(this).toggleClass('show');
	});

	$('.reviews-slider__thumb').slick({
		asNavFor: '.reviews-slider__big',
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: false,
		focusOnSelect: true,
		mobileFirst: true,
		draggable: false,
	});

	$('.reviews-slider__big').slick({
		asNavFor: '.reviews-slider__thumb',
		arrows: false,
		draggable: false,
	});


	$('.services-tabs__top-item').on('click', function (e) {
		e.preventDefault();
		$('.services-tabs__top-item').removeClass('services-tabs__top-item--active');
		$(this).addClass('services-tabs__top-item--active');

		$('.services-tabs__content-item').removeClass('services-tabs__content-item--active');
		$($(this).attr('href')).addClass('services-tabs__content-item--active');
	});


});