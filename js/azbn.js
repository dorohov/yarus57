$(function(){

	(function(){
		
		$(document.body).on('click.azbn', '.azbn-order-service', {}, function(event){
			
			var btn = $(this);
			var title = btn.attr('data-service-title') || '';
			
			$('input[name="f[Вид услуги]"]').val(title);
			
		});
		
	})();
	
	(function(){
		
		/*
		$('.azbn-jqfeShowMoreBtn-btn')
			.jqfeShowMoreBtn({
				container:'.azbn-jqfeShowMoreBtn-container',
				items:'.azbn-jqfeShowMoreBtn-item',
				display:'block',
				count:6,
				css_hidden:{
					opacity:0,
				},
				css_visible:{
					opacity:1,
				},
				animation_time:700,
			})
			.trigger('click')
		;
		*/
		
	})();
	
	(function(){
		
		//$('.azbn-valid-form').validationEngine();
		var form = $('.azbn-valid-form');
		
		form.find('.azbn-step .btn-site.btn-calc').addClass('azbn-hidden');
		
	})();

});