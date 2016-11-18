(function(){
	
	var block = $('#carousel-example-generic');
	
	block.on('slid.bs.carousel', function(event){
		
		var item = block.find('.item.active');
		var class_color = item.attr('data-class-color') || '';
		
		block.find('._isp__heading-block').attr('data-class-color', class_color);
		
	});
	
})();