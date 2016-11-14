$('._czr__block-hover').on('mousemove', function(event){
	$(this).closest(".block-item").addClass('onhover');	
});
$('._czr__block-hover').on('mouseout', function(event){
	$(this).closest(".block-item").removeClass('onhover');	
});