'use strict';
$(function() { 
	
	$('.slick-center').each(function(_index, _item){
		
		var slider = $(this);
		var uid = slider.attr('data-uid');
		
		slider.slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true,
			draggable: false,
			swipe: false,
			//fade: true,
			asNavFor: '.slick-nav[data-uid="' + uid + '"]',
			variableWidth: true,
			centerMode: true,
			prevArrow: '<button type="button" class="slick-prev"><svg class="icon-svg icon-owl-prev" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/wp-content/themes/azbnbasetheme2/img/svg/sprite.svg#owl-prev-400"></use></svg></button>',
			nextArrow: '<button type="button" class="slick-next"><svg class="icon-svg icon-owl-next" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/wp-content/themes/azbnbasetheme2/img/svg/sprite.svg#owl-next-400"></use></svg></button>'
		});
		$('.slick-nav[data-uid="' + uid + '"]').slick({
			slidesToShow: 5,
			slidesToScroll: 1,
			asNavFor: '.slick-center[data-uid="' + uid + '"]',
			arrows: false,
			centerMode: true,
			focusOnSelect: true,
			draggable: false,
			swipe: false,
		});
		
	});
	
	/*
	$('.slick-center').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		draggable: false,
		swipe: false,
		//fade: true,
		asNavFor: '.slick-nav',
		variableWidth: true,
		centerMode: true,
		prevArrow: '<button type="button" class="slick-prev"><svg class="icon-svg icon-owl-prev" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/wp-content/themes/azbnbasetheme2/img/svg/sprite.svg#owl-prev-400"></use></svg></button>',
		nextArrow: '<button type="button" class="slick-next"><svg class="icon-svg icon-owl-next" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/wp-content/themes/azbnbasetheme2/img/svg/sprite.svg#owl-next-400"></use></svg></button>'
	});
	$('.slick-nav').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		asNavFor: '.slick-center',
		arrows: false,
		centerMode: true,
		focusOnSelect: true,
		draggable: false,
		swipe: false,
	});
	*/
}); 