'use strict';


window.onerror = function(error, url, lineNumber, column, errorObj) {
	console.log('Error FECSS: ' + url + ':' + lineNumber + ':' + column + ': ' + JSON.stringify(error) + '\n' + JSON.stringify(errorObj));
	return;
}


function fecss_ScreenJS(){var e=this;e.screen={w:0,h:0,type:"xs",orientation:"portrait"},e.__resizefunctions={xs:{default:[],portrait:[],landscape:[]},sm:{default:[],portrait:[],landscape:[]},md:{default:[],portrait:[],landscape:[]},lg:{default:[],portrait:[],landscape:[]}},e.isXS=function(){return e.screen.w<768},e.isSM=function(){return e.screen.w<992&&e.screen.w>767},e.isMD=function(){return e.screen.w<1200&&e.screen.w>991},e.isLG=function(){return e.screen.w>1199},e.screenIs=function(){var n="noname";return e.isXS()?n="xs":e.isSM()?n="sm":e.isMD()?n="md":e.isLG()&&(n="lg"),n},e.isPortrait=function(){return e.screen.h>e.screen.w},e.isLandscape=function(){return e.screen.w>e.screen.h},e.orientationIs=function(){var n="noname";return e.isPortrait()?n="portrait":e.isLandscape()&&(n="landscape"),n},e.is=function(n){return n==e.screenIs()||n==e.orientationIs()},e.onResize=function(n,r){if(n.type){var t=e.__resizefunctions[n.type];n.orientation?t[n.orientation].push(r):t.default.push(r)}},e.resizeCall=function(n){if(n.type){if(e.__resizefunctions[n.type].default)for(var r=0;r<e.__resizefunctions[n.type].default.length;r++){var t=e.__resizefunctions[n.type].default[r];t(n)}if(e.__resizefunctions[n.type][n.orientation])for(var r=0;r<e.__resizefunctions[n.type][n.orientation].length;r++){var t=e.__resizefunctions[n.type][n.orientation][r];t(n)}}},e.setScreen=function(){return e.screen.w=$(window).outerWidth(!0),e.screen.h=$(window).outerHeight(!0),e.screen.type=e.screenIs(),e.screen.orientation=e.orientationIs(),e.resizeCall(e.screen),console.log(e.screen),e.screen}}var screenJS=new fecss_ScreenJS;$(window).on("resize",function(){screenJS.setScreen()}),function(e){var n=jQuery.fn.addClass,r=jQuery.fn.removeClass,t=jQuery.fn.toggleClass;e.fn.addClass=function(){var r=n.apply(this,arguments);return e(this).trigger("changeClass",["add"]),r},e.fn.removeClass=function(){var n=r.apply(this,arguments);return e(this).trigger("changeClass",["remove"]),n},e.fn.toggleClass=function(){var n=t.apply(this,arguments);return e(this).trigger("changeClass",["toggle"]),n}}(jQuery);
!function(){"use strict";$(window).load(function(){$("[data-toggle-nav]").click(function(){var a=$(this).data("toggle-nav");$(a).toggleClass("open-sidebar")}),$("[data-collapse-nav]").click(function(){var a=$(this).data("collapse-nav");$(a).toggleClass("open-scroll-sidebar")})})}();
!function(){"use strict";$(window).load(function(){$("[data-toggle-rnav]").click(function(){var t=$(this).data("toggle-rnav");$(t).toggleClass("open"),$(".navbar-site").toggleClass("navbar-site-right-open")})})}();


$(function() {
	
	/*
	Создание триггеров на элементы, в основном, на body
	*/
	$(document.body).on("fecss.default",null,{},function(o){console.log("body trigger:fecss.default")}),$(document.body).on("fecss.init",null,{},function(o){console.log("body trigger:fecss.init");var e=(new Date).getTime();$(document.body).attr("data-created_at",e)}),$(document.body).on("fecss.window.unload",null,{},function(o,e){console.log("body trigger:fecss.window.unload: "+JSON.stringify(e))}),$(document.body).on("fecss.ajax.success",null,{},function(o){console.log("body trigger:fecss.ajax.success")}),$(document.body).on("fecss.keydown",null,{},function(o,e){console.log("body trigger:fecss.keydown: "+JSON.stringify(e))}),$(document.body).on("DOMSubtreeModified",null,{},function(o,e){}),$(document.body).on("wheel mousewheel DOMMouseScroll MozMousePixelScroll",function(o){-o.originalEvent.deltaY||o.originalEvent.detail||o.originalEvent.wheelDelta});
	
	
	/*
	Событие смены класса body
	*/
	$(document.body).on('changeClass', null, {} ,function(event, event_action){
		// event_action = add || remove || toggle
		
		$(function(){});
	});
	
	
	/*
	События смены класса у любого элемента
	*/
		
	
	
	/*
	Основная логика сайта
	*/
	$(function(){var e="noname-browser",o=navigator.userAgent.toLowerCase();o.indexOf("msie")!=-1&&(e="msie"),o.indexOf("trident")!=-1&&(e="msie"),o.indexOf("konqueror")!=-1&&(e="konqueror"),o.indexOf("firefox")!=-1&&(e="firefox"),o.indexOf("safari")!=-1&&(e="safari"),o.indexOf("chrome")!=-1&&(e="chrome"),o.indexOf("chromium")!=-1&&(e="chromium"),o.indexOf("opera")!=-1&&(e="opera"),o.indexOf("yabrowser")!=-1&&(e="yabrowser"),$("html").eq(0).addClass(e)}),$(function(){$(document.body).on("keydown",function(e){e.stopPropagation(),$(document.body).trigger("fecss.keydown",[{alt:e.altKey,ctrl:e.ctrlKey,shift:e.shiftKey,meta:e.metaKey,key:e.which,liter:String.fromCharCode(e.which)}])})}),$(function(){});
$(document.body).on("click.fecss.go-to-top",".go-to-top",function(o){o.preventDefault(),$("html, body").animate({scrollTop:0},777)});
$("._czr__block-hover").on("mousemove",function(o){$(this).closest(".block-item").addClass("onhover")}),$("._czr__block-hover").on("mouseout",function(o){$(this).closest(".block-item").removeClass("onhover")});
$("img").addClass("img-responsive"),$(".text-block ul").addClass("ul-site");var url=window.location.pathname;$('.navbar-nav a[href="'+url+'"]').parent().addClass("active"),$('.navbar-nav__razdel a[href="'+url+'"]').parent().addClass("active"),$('.navbar-nav-services a[href="'+url+'"]').parent().addClass("active"),$("._ipc__slider-carousel .item").eq(0).addClass("active"),$("._isb__carousel").carousel({interval:4e3,pause:!1}),$(".text-block table").addClass("table table-striped"),$(".text-block table.table-striped").wrap('<div class="table-responsive"></div>'),$(".text-block img").parent().addClass("_tb__img"),$(".fancybox").fancybox({prevEffect:"none",nextEffect:"none"}),$(".fancybox-buttons").fancybox({openEffect:"none",closeEffect:"none",closeBtn:!1,helpers:{title:{type:"inside"},buttons:{}},afterLoad:function(){this.title=this.title}}),$("form.form-site").validationEngine("attach",{promptPosition:"bottomLeft"}),retinajs(),$("._iabb__owl").owlCarousel({margin:0,loop:!0,items:1,navText:[],autoplay:!0,smartSpeed:850,autoplayTimeout:1e4,nav:!0,dots:!1}),$("._bipc__owl").owlCarousel({margin:0,navText:[],nav:!0,dots:!1,responsive:{0:{items:1},750:{items:2},1025:{items:3}}}),$("._wipc__owl").owlCarousel({margin:0,navText:[],nav:!0,dots:!1,items:1});

!function(){var a=$("#carousel-example-generic");a.on("slid.bs.carousel",function(c){var i=a.find(".item.active"),o=i.attr("data-class-color")||"";a.find("._isp__heading-block").attr("data-class-color",o)})}();
	
	
	/*
	Событие смены размера экрана, генерация этого события
	*/
	$(window).on('resize',function(event){
		$(function(){var s={xs:{min:0,max:768},sm:{min:767,max:992},md:{min:991,max:1200},lg:{min:1199,max:1e4}},w={xs:{min:0,max:361},sm:{min:360,max:769},md:{min:768,max:961},lg:{min:960,max:1e4}},i="window-width",d="window-height",h=$(window).outerWidth(!0),m=$(window).outerHeight(!0),a=$("html body").eq(0);h<s.xs.max&&(a.hasClass("window-width-sm")&&a.removeClass("window-width-sm"),a.hasClass("window-width-md")&&a.removeClass("window-width-md"),a.hasClass("window-width-lg")&&a.removeClass("window-width-lg"),i="window-width-xs"),h>s.sm.min&&h<s.sm.max&&(a.hasClass("window-width-xs")&&a.removeClass("window-width-xs"),a.hasClass("window-width-md")&&a.removeClass("window-width-md"),a.hasClass("window-width-lg")&&a.removeClass("window-width-lg"),i="window-width-sm"),h>s.md.min&&h<s.md.max&&(a.hasClass("window-width-xs")&&a.removeClass("window-width-xs"),a.hasClass("window-width-sm")&&a.removeClass("window-width-sm"),a.hasClass("window-width-lg")&&a.removeClass("window-width-lg"),i="window-width-md"),h>s.lg.min&&(a.hasClass("window-width-xs")&&a.removeClass("window-width-xs"),a.hasClass("window-width-sm")&&a.removeClass("window-width-sm"),a.hasClass("window-width-md")&&a.removeClass("window-width-md"),i="window-width-lg"),m<w.xs.max&&(a.hasClass("window-height-sm")&&a.removeClass("window-height-sm"),a.hasClass("window-height-md")&&a.removeClass("window-height-md"),a.hasClass("window-height-lg")&&a.removeClass("window-height-lg"),d="window-height-xs"),m>w.sm.min&&m<w.sm.max&&(a.hasClass("window-height-xs")&&a.removeClass("window-height-xs"),a.hasClass("window-height-md")&&a.removeClass("window-height-md"),a.hasClass("window-height-lg")&&a.removeClass("window-height-lg"),d="window-height-sm"),m>w.md.min&&m<w.md.max&&(a.hasClass("window-height-xs")&&a.removeClass("window-height-xs"),a.hasClass("window-height-sm")&&a.removeClass("window-height-sm"),a.hasClass("window-height-lg")&&a.removeClass("window-height-lg"),d="window-height-md"),m>w.lg.min&&(a.hasClass("window-height-xs")&&a.removeClass("window-height-xs"),a.hasClass("window-height-sm")&&a.removeClass("window-height-sm"),a.hasClass("window-height-md")&&a.removeClass("window-height-md"),d="window-height-lg"),$("html body").eq(0).addClass(i).addClass(d)});
var h_window=$(window).height(),w_window=$(window).width(),h_navbar=$(".navbar-site").outerHeight(!0),h_header=$(".header-site").outerHeight(!0),w_news_preview=$(".news-item__preview").outerWidth(!0),h_news_block=$(".news-block").outerHeight(!0),h_footer=$(".footer-site").outerHeight(!0),h_content_index=h_window-h_navbar,h_content_scroller=h_window-h_news_block,h_content_scroller_sm=h_window-h_news_block-h_navbar-h_footer-70,h_content=h_window-h_navbar-h_footer;device.tablet()&&($(".content-site").css("min-height",h_content_scroller_sm),$("._msp__block .scroller").mCustomScrollbar(),$(".error-page-content").css("min-height",h_content)),device.mobile()&&($("._isb__carousel").removeAttr("data-ride"),$("._isb__carousel").carousel("pause")),device.mobile()||device.tablet()?$(".navbar").addClass("navbar-fixed-top"):($(".content-block").css("min-height",h_content),$(".scroller").mCustomScrollbar()),$(".navbar-fixed-top").autoHidingNavbar(),$(".map-google-block").css("height",h_window),$(".map-google-block").css("width",w_window);
	}).trigger('resize');
	
	
	/*
	Событие скроллинга экрана, генерация этого события
	*/
	$(window).on('scroll',function(event){
		$(function(){var a=$(document).scrollTop(),o=$(".go-to-top");o.hasClass("active")?a<200&&o.removeClass("active"):a>200&&o.addClass("active")});
var topPos=$(document).scrollTop(),snb=$(".navbar-site.index");snb.hasClass("scroll-sidebar")?topPos<500&&snb.removeClass("scroll-sidebar"):topPos>500&&snb.addClass("scroll-sidebar"),snb.hasClass("opacity")?topPos<200&&snb.removeClass("opacity"):topPos>200&&snb.addClass("opacity"),snb.hasClass("fixed")?topPos<400&&snb.removeClass("fixed"):topPos>400&&snb.addClass("fixed");

	}).trigger('scroll');
	
	
	/*
	Событие ухода со страницы
	*/
	window.onbeforeunload = function(event) {
		//alert(event.target.URL);
		$('body').trigger('fecss.window.unload', [event]);
		return;//return false;
	}
	
	
	/*
	Событие инициализации fecss
	*/
	$(document.body).trigger('fecss.init');
	
	
});