$('img').addClass('img-responsive');
$('.text-block ul').addClass('ul-site');
var url = window.location.pathname;
$('.navbar-nav a[href="'+url+'"]').parent().addClass('active'); 
$('.navbar-nav__razdel a[href="'+url+'"]').parent().addClass('active'); 
$('.navbar-nav-services a[href="'+url+'"]').parent().addClass('active'); 
$('._ipc__slider-carousel .item').eq(0).addClass('active');
$('._isb__carousel').carousel({
	interval: 4000,
	pause: false
});

$('.text-block table').addClass('table table-striped');
$('.text-block table.table-striped').wrap('<div class="table-responsive"></div>');
$('.text-block img').parent().addClass('_tb__img'); 
$('.fancybox').fancybox({
	prevEffect : 'none',
	nextEffect : 'none',
});
// конструкция для активации fancybox <a class="fancybox-buttons" data-fancybox-group="button" href="" data-title=""><img src="" alt="" /></a>
$('.fancybox-buttons').fancybox({
	openEffect  : 'none',
	closeEffect : 'none',
	padding: 0,
	prevEffect : 'none',
	nextEffect : 'none',
	//closeBtn  : false,
	/*helpers : {
		title : {
			type : 'inside'
		},
		buttons	: {}
	},*/
	afterLoad : function() {
		this.title = this.title;
	}
});
$("form.form-site").validationEngine(
	'attach', {
		promptPosition : "bottomLeft"
	}
);
retinajs();
$('._iabb__owl').owlCarousel({
	margin: 0,
	loop: true,
	items:1,	
	navText: [],
	autoplay:true,
	smartSpeed: 850,
	autoplayTimeout:10000,
	nav: true,
	dots: false		
});	
$('._bipc__owl').owlCarousel({
	margin: 0,
	navText: [],
	nav: true,
	dots: false	,
	responsive : {
		0: {items:1},
		750: {items:2},
		1025: {
			items: 3
		}
	}	
});	
$('._wipc__owl').owlCarousel({
	margin: 0,
	navText:[],
	nav: true,
	dots: false	,
	items:1
});	