var h_window = $(window).height(), 
	w_window = $(window).width(),

	h_navbar = $('.navbar-site').outerHeight(true),
	h_header = $('.header-site').outerHeight(true),
	w_news_preview = $('.news-item__preview').outerWidth(true),
	h_news_block = $('.news-block').outerHeight(true),
	h_footer = $('.footer-site').outerHeight(true),
	h_content_index = h_window - h_navbar,
	h_content_scroller = h_window - h_news_block, 
	h_content_scroller_sm = h_window - h_news_block - h_navbar - h_footer - 70, 
	h_content = h_window - h_navbar - h_footer;

if (device.tablet()) {
	$('.content-site').css("min-height", h_content_scroller_sm);
	$("._msp__block .scroller").mCustomScrollbar();
	$('.error-page-content').css("min-height", h_content);
}
if (device.mobile()) {
	$('._isb__carousel').removeAttr('data-ride');
	$('._isb__carousel').carousel('pause');
}
if (device.mobile() || device.tablet()) {
	$('.navbar').addClass('navbar-fixed-top');
} else {
	$('.content-block').css("min-height", h_content);
	$(".scroller").mCustomScrollbar();
}
$(".navbar-fixed-top").autoHidingNavbar();
$(".map-google-block").css("height", h_window);
$(".map-google-block").css("width", w_window);
//$('.news-item__preview a').css("height", w_news_preview);