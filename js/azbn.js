$(function(){

	(function(){
		
		$(document.body).on('click.azbn', '.azbn-order-service', {}, function(event){
			
			var btn = $(this);
			var title = btn.attr('data-service-title') || '';
			
			$('input[name="f[Вид услуги]"]').val(title);
			
		});
		
	})();
	
	(function(){
		
		$('[data-masked="phone"]').mask('+7 (999) 999-9999');
		
	})();
	
	(function(){
		
		
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
		
		
	})();
	
	(function(){
		
		//$('.azbn-valid-form').validationEngine();
		var form = $('.azbn-valid-form');
		
		form.find('.azbn-step .btn-site.btn-calc').addClass('azbn-hidden');
		
		form.find('.azbn-step').each(function(index){
			
			var block = $(this);
			
			var step = parseInt(block.attr('data-azbn-step') || 0);
			
			switch(step) {
				
				case 1: {
					
					block.find('input[type="radio"]').on('click.azbn', function(event){
						
						var input = block.find('input.calc-input');
						
						input.attr('data-azbn-valid', 1);
						
						var val = parseInt(input.val() || 0);
						
						if(val && parseInt(input.attr('data-azbn-valid'))) {
							block.find('.btn-site.btn-calc').removeClass('azbn-hidden');
						}
						
					});
					
					block.find('input.calc-input').on('keyup.azbn', function(event){
						
						var input = $(this);
						var val = parseInt(input.val() || 0);
						
						if(val && parseInt(input.attr('data-azbn-valid'))) {
							block.find('.btn-site.btn-calc').removeClass('azbn-hidden');
						}
						
					});
					
				}
				break;
				
				case 2: {
					
					block.find('input[type="radio"]').on('click.azbn', function(event){
						
						block.find('.btn-site.btn-calc').removeClass('azbn-hidden');
						
					});
					
				}
				break;
				
				case 3: {
					
					block.find('input.calc-input.tel').on('keyup.azbn', function(event){
						
						var input = $(this);
						var val = (input.val() || 0);
						
						if(val != '' && val.length > 8) {
							block.find('.btn-site.btn-calc').removeClass('azbn-hidden');
						} else {
							block.find('.btn-site.btn-calc').addClass('azbn-hidden');
						}
						
					});
					
				}
				break;
				
				default: {
					
				}
				break;
				
			}
			
		});
		
	})();

});