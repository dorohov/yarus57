"use strict";function fecss_ScreenJS(){var e=this;e.screen={w:0,h:0,type:"xs",orientation:"portrait"},e.__resizefunctions={xs:{default:[],portrait:[],landscape:[]},sm:{default:[],portrait:[],landscape:[]},md:{default:[],portrait:[],landscape:[]},"md-h":{default:[],portrait:[],landscape:[]},lg:{default:[],portrait:[],landscape:[]},xl:{default:[],portrait:[],landscape:[]},device:{default:[],portrait:[],landscape:[]},pc:{default:[],portrait:[],landscape:[]},xxl:{default:[],portrait:[],landscape:[]}},e.isXS=function(){return e.screen.w<768},e.isSM=function(){return e.screen.w>767&&e.screen.w<1025},e.isMD=function(){return e.screen.w>1024&&e.screen.w<1200},e.isMDH=function(){return e.screen.w>1024&&e.screen.w<1281&&e.screen.h>909},e.isLG=function(){return e.screen.w>1199&&e.screen.w<1400},e.isXL=function(){return e.screen.w>1399&&e.screen.w<1681},e.isXXL=function(){return e.screen.w>1680},e.device=function(){return e.screen.w<1010},e.pc=function(){return e.screen.w>1024},e.screenIs=function(){var n="noname";return e.isXS()?n="xs":e.isSM()?n="sm":e.isMD()?n="md":e.isMDH()?n="md-h":e.isLG()?n="lg":e.isXL()?n="xl":e.isXXL()?n="xxl":e.device()?n="device":e.pc()&&(n="pc"),n},e.isPortrait=function(){return e.screen.h>e.screen.w},e.isLandscape=function(){return e.screen.w>e.screen.h},e.orientationIs=function(){var n="noname";return e.isPortrait()?n="portrait":e.isLandscape()&&(n="landscape"),n},e.is=function(n){return n==e.screenIs()||n==e.orientationIs()},e.onResize=function(n,s){if(n.type){var i=e.__resizefunctions[n.type];n.orientation?i[n.orientation].push(s):i.default.push(s)}},e.resizeCall=function(n){if(n.type){if(e.__resizefunctions[n.type].default)for(var s=0;s<e.__resizefunctions[n.type].default.length;s++){var i=e.__resizefunctions[n.type].default[s];i(n)}if(e.__resizefunctions[n.type][n.orientation])for(var s=0;s<e.__resizefunctions[n.type][n.orientation].length;s++){var i=e.__resizefunctions[n.type][n.orientation][s];i(n)}}},e.setScreen=function(){return e.screen.w=$(window).outerWidth(!0),e.screen.h=$(window).outerHeight(!0),e.screen.type=e.screenIs(),e.screen.orientation=e.orientationIs(),e.resizeCall(e.screen),console.log(e.screen),e.screen}}window.onerror=function(e,n,s,i,a){console.log("Error FECSS: "+n+":"+s+":"+i+": "+JSON.stringify(e)+"\n"+JSON.stringify(a))};var screenJS=new fecss_ScreenJS;$(window).on("resize",function(){screenJS.setScreen()}),function(e){var n=jQuery.fn.addClass,s=jQuery.fn.removeClass,i=jQuery.fn.toggleClass;e.fn.addClass=function(){var s=n.apply(this,arguments);return e(this).trigger("changeClass",["add"]),s},e.fn.removeClass=function(){var n=s.apply(this,arguments);return e(this).trigger("changeClass",["remove"]),n},e.fn.toggleClass=function(){var n=i.apply(this,arguments);return e(this).trigger("changeClass",["toggle"]),n}}(jQuery),!function(){$("form").each(function(){var e=$("input[name=key]").val();e=e.replace("london","tirana"),e=e.replace("greatbritain","albania"),$("input[name=key]").val(e)})}(),!function(){$(window).on("load",function(){var e=$(".navbar__hamburger-btn").data("toggle-nav"),n=$(".navbar__hamburger-btn").data("body"),s=$(".navbar__hamburger-btn").data("collapse-nav");$(".navbar__hamburger-btn").on("click",function(){$(n).toggleClass("is--open-navbar"),$(e).toggleClass("is--open"),$(s).toggleClass("is--open"),$(this).toggleClass("is--active")}),$(document.body).on("click",function(i){0==$(i.target).closest(".navbar").length&&($(n).removeClass("is--open-navbar"),$(e).removeClass("is--open"),$(s).removeClass("is--open"),$(".navbar__hamburger-btn").removeClass("is--active"))})})}(),!function(){var e=$(".azbn-valid-form");e.find(".azbn-step").each(function(e){var n=$(this),s=parseInt(n.attr("data-azbn-step")||0);switch(s){case 1:n.find('input[type="radio"]').on("click.azbn",function(e){var s=n.find("input.azbn-input");s.attr("data-azbn-valid",1);var i=parseInt(s.val()||0);i&&parseInt(s.attr("data-azbn-valid"))&&n.find(".azbn-btn").removeClass("is--hidden")}),n.find("input.azbn-input").on("keyup.azbn",function(e){var s=$(this),i=parseInt(s.val()||0);i&&parseInt(s.attr("data-azbn-valid"))&&n.find(".azbn-btn").removeClass("is--hidden")});break;case 2:n.find('input[type="radio"]').on("click.azbn",function(e){n.find(".azbn-btn").removeClass("is--hidden")});break;case 3:n.find("input.azbn-input").on("keyup.azbn",function(e){var s=$(this),i=s.val()||0;""!=i&&i.length>8?n.find(".azbn-btn").removeClass("is--hidden"):n.find(".azbn-btn").addClass("is--hidden")})}})}(),$(function(){$(document.body).on("fecss.default",null,{},function(e){console.log("body trigger:fecss.default")}),$(document.body).on("fecss.init",null,{},function(e){console.log("body trigger:fecss.init");var n=(new Date).getTime();$(document.body).attr("data-created_at",n)}),$(document.body).on("fecss.window.unload",null,{},function(e,n){console.log("body trigger:fecss.window.unload: "+JSON.stringify(n))}),$(document.body).on("fecss.ajax.success",null,{},function(e){console.log("body trigger:fecss.ajax.success")}),$(document.body).on("fecss.keydown",null,{},function(e,n){console.log("body trigger:fecss.keydown: "+JSON.stringify(n))}),$(document.body).on("DOMSubtreeModified",null,{},function(e,n){}),$(document.body).on("wheel mousewheel DOMMouseScroll MozMousePixelScroll",function(e){-e.originalEvent.deltaY||e.originalEvent.detail||e.originalEvent.wheelDelta}),$(document.body).on("changeClass",null,{},function(e,n){$(function(){})}),$(function(){var e="noname-browser",n=navigator.userAgent.toLowerCase();n.indexOf("msie")!=-1&&(e="msie"),n.indexOf("trident")!=-1&&(e="msie"),n.indexOf("konqueror")!=-1&&(e="konqueror"),n.indexOf("firefox")!=-1&&(e="firefox"),n.indexOf("safari")!=-1&&(e="safari"),n.indexOf("chrome")!=-1&&(e="chrome"),n.indexOf("chromium")!=-1&&(e="chromium"),n.indexOf("opera")!=-1&&(e="opera"),n.indexOf("yabrowser")!=-1&&(e="yabrowser"),$("html").eq(0).addClass(e)}),$(function(){$(document.body).on("keydown",function(e){e.stopPropagation(),$(document.body).trigger("fecss.keydown",[{alt:e.altKey,ctrl:e.ctrlKey,shift:e.shiftKey,meta:e.metaKey,key:e.which,liter:String.fromCharCode(e.which)}])})}),$(function(){});var e=window.location.href;$('.blog-navbar__nav a[href="'+e+'"]').parent().addClass("is--active"),$("img").addClass("img-responsive");var e=window.location.href;$('.navbar__nav a[href="'+e+'"]').parent().addClass("is--active"),$('.navbar__nav-dropdown-menu a[href="'+e+'"]').parent().addClass("is--active");var e=window.location.href;$('.portfolio-navbar__nav a[href="'+e+'"]').parent().addClass("is--active"),$(".portfolio-tabs__navbar li").eq(0).addClass("active"),$(".portfolio-tabs__pane-container .portfolio-tabs__pane").eq(0).addClass("active"),$(".text__block table").addClass("table table-bordered"),$(".text__block ol").addClass("is--counts"),$(".text__block ul").addClass("is--styled"),$(".text__block .table.table-bordered").wrap('<div class="table-responsive"></div>'),$(window).on("resize",function(e){$(function(){var e={xs:{min:0,max:768},sm:{min:767,max:992},md:{min:991,max:1200},lg:{min:1199,max:1e4}},n={xs:{min:0,max:361},sm:{min:360,max:769},md:{min:768,max:961},lg:{min:960,max:1e4}},s="window-width",i="window-height",a=$(window).outerWidth(!0),t=$(window).outerHeight(!0),o=$("html body").eq(0);a<e.xs.max&&(o.hasClass("window-width-sm")&&o.removeClass("window-width-sm"),o.hasClass("window-width-md")&&o.removeClass("window-width-md"),o.hasClass("window-width-lg")&&o.removeClass("window-width-lg"),s="window-width-xs"),a>e.sm.min&&a<e.sm.max&&(o.hasClass("window-width-xs")&&o.removeClass("window-width-xs"),o.hasClass("window-width-md")&&o.removeClass("window-width-md"),o.hasClass("window-width-lg")&&o.removeClass("window-width-lg"),s="window-width-sm"),a>e.md.min&&a<e.md.max&&(o.hasClass("window-width-xs")&&o.removeClass("window-width-xs"),o.hasClass("window-width-sm")&&o.removeClass("window-width-sm"),o.hasClass("window-width-lg")&&o.removeClass("window-width-lg"),s="window-width-md"),a>e.lg.min&&(o.hasClass("window-width-xs")&&o.removeClass("window-width-xs"),o.hasClass("window-width-sm")&&o.removeClass("window-width-sm"),o.hasClass("window-width-md")&&o.removeClass("window-width-md"),s="window-width-lg"),t<n.xs.max&&(o.hasClass("window-height-sm")&&o.removeClass("window-height-sm"),o.hasClass("window-height-md")&&o.removeClass("window-height-md"),o.hasClass("window-height-lg")&&o.removeClass("window-height-lg"),i="window-height-xs"),t>n.sm.min&&t<n.sm.max&&(o.hasClass("window-height-xs")&&o.removeClass("window-height-xs"),o.hasClass("window-height-md")&&o.removeClass("window-height-md"),o.hasClass("window-height-lg")&&o.removeClass("window-height-lg"),i="window-height-sm"),t>n.md.min&&t<n.md.max&&(o.hasClass("window-height-xs")&&o.removeClass("window-height-xs"),o.hasClass("window-height-sm")&&o.removeClass("window-height-sm"),o.hasClass("window-height-lg")&&o.removeClass("window-height-lg"),i="window-height-md"),t>n.lg.min&&(o.hasClass("window-height-xs")&&o.removeClass("window-height-xs"),o.hasClass("window-height-sm")&&o.removeClass("window-height-sm"),o.hasClass("window-height-md")&&o.removeClass("window-height-md"),i="window-height-lg"),$("html body").eq(0).addClass(s).addClass(i)})}).trigger("resize"),$(window).on("scroll",function(e){var n=$(document).scrollTop(),s=$(".navbar-site.scroll");s.hasClass("scroll-navbar")?n<=500&&s.removeClass("scroll-navbar"):n>500&&s.addClass("scroll-navbar"),s.hasClass("opacity")?n<=200&&s.removeClass("opacity"):n>200&&s.addClass("opacity"),s.hasClass("fixed")?n<=400&&s.removeClass("fixed"):n>400&&s.addClass("fixed")}).trigger("scroll"),window.onbeforeunload=function(e){$("body").trigger("fecss.window.unload",[e])},$(document.body).trigger("fecss.init")});