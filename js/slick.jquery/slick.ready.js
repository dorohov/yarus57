"use strict";$(function(){$(".slick-center").each(function(s,e){var t=$(this),i=t.attr("data-uid");t.slick({slidesToShow:1,slidesToScroll:0,arrows:!0,draggable:!1,swipe:!1,asNavFor:'.slick-nav[data-uid="'+i+'"]',variableWidth:!0,centerMode:!0,prevArrow:'<button type="button" class="slick-prev"><svg class="icon-svg icon-owl-prev" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/wp-content/themes/azbnbasetheme2/img/svg/sprite.svg#owl-prev-400"></use></svg></button>',nextArrow:'<button type="button" class="slick-next"><svg class="icon-svg icon-owl-next" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/wp-content/themes/azbnbasetheme2/img/svg/sprite.svg#owl-next-400"></use></svg></button>'}),$('.slick-nav[data-uid="'+i+'"]').slick({slidesToShow:5,slidesToScroll:0,asNavFor:'.slick-center[data-uid="'+i+'"]',arrows:!1,centerMode:!0,focusOnSelect:!0,draggable:!1,swipe:!1})})});