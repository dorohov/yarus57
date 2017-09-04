function initMap() {     
	var coordMapOfficeOne = {lat: 52.9739808, lng: 36.058946},
		zoomMapOfficeOne = 17,
		styleMapOfficeOne = [{"featureType": "landscape.man_made","elementType": "geometry.fill","stylers": [{"color": "#ebe3cd"}]},{"featureType": "landscape.man_made","elementType": "geometry.stroke","stylers": [{"color": "#dfd2ae"}]},{"featureType": "poi","elementType": "geometry.fill","stylers": [{"color": "#dfd2ae"}]},{"featureType": "poi","elementType": "labels.text.fill","stylers": [{"color": "#a79893"}]},{"featureType": "road","elementType": "geometry.fill","stylers": [{"color": "#f5f1e6"}]},{"featureType": "road.highway","elementType": "geometry","stylers": [{"color": "#f5f1e6"}]},{"featureType": "road.highway","elementType": "geometry.fill","stylers": [{"color": "#f5f1e6"}]},{"featureType": "road.local","elementType": "labels.text.fill","stylers": [{"color": "#a79893"}]}],
		optionsMapOfficeOne = {
			zoom: zoomMapOfficeOne,
			center: new google.maps.LatLng(coordMapOfficeOne.lat, coordMapOfficeOne.lng),
			//scrollwheel: false,	
			//styles: styleMapOfficeOne
		},
		idOfficeOne = document.getElementById('map-google'),
		mapOfficeOne = new google.maps.Map(idOfficeOne, optionsMapOfficeOne),		
		//iconOfficeOne = '/img/default/icon-map.png',
		iconOfficeOne = {        
	        path: "M187.6,0.1C90.7,3.5,10.2,79.1,0.9,175.6c-1.9,19.3-0.8,38,2.6,55.9c0,0,0.3,2.1,1.3,6.1 c3,13.4,7.5,26.4,13.1,38.6c19.5,46.2,64.6,123.5,165.8,207.6c6.2,5.2,15.3,5.2,21.6,0c101.2-84,146.3-161.3,165.9-207.7 c5.7-12.2,10.1-25.1,13.1-38.6c0.9-3.9,1.3-6.1,1.3-6.1c2.3-12,3.5-24.3,3.5-36.9C389.1,84.7,298.2-3.8,187.6,0.1z M194.6,336.9  c-79,0-143-64-143-143s64-143,143-143s143,64,143,143S273.5,336.9,194.6,336.9z M198.8,43.1c-1.5-0.1-3-0.1-4.6-0.1v0  C110.8,43,43,110.8,43,194.1c0,83.3,67.8,151.1,151.2,151.1s151.2-67.8,151.2-151.1C345.4,112.3,280,45.6,198.8,43.1z M194.2,337.1  c-78.9,0-143-64.1-143-143c0-78.8,64.2-143,143-143s143,64.1,143,143C337.2,273,273,337.1,194.2,337.1z M194.2,56.5  c-75.9,0-137.6,61.7-137.6,137.6c0,75.9,61.7,137.6,137.6,137.6c75.9,0,137.6-61.7,137.6-137.6C331.8,118.2,270.1,56.5,194.2,56.5z M149.6,110.7c0-24.5,20.1-44.6,44.6-44.7v0c33.1,0,60.1,27.3,60.1,60.9h0c0,2.6-0.2,5.2-0.6,7.8c-4.5,31.4-51.5,27.5-51.5-4.3 c0-4.4-3.6-8-8-8c-4.4,0-8,3.6-8,8v55.8h-36.6V110.7z M66,194.1c0-6.1,0.5-12.1,1.3-18c11,12.6,25.8,21.2,42.4,24.5l-35,39.7 C69.1,226,66,210.4,66,194.1z M118.1,297.2c-9.8-7.3-18.6-15.9-26-25.7c-6.3-8.3-6-19.9,0.9-27.8l25.1-28.4V297.2z M118.1,185.8 c-8.6-0.9-16.8-3.6-24.1-7.9c-15.6-9.1-20.9-29.4-12.2-45.2c9-16.3,21.4-30.5,36.3-41.5V185.8z M194.2,322.3c-0.2,0-0.3,0-0.5,0 c-24.5-0.1-44.1-20.5-44.1-45v-75.1h37.1c4.2,38,36.5,68.1,75.6,68.1h35C273.9,301.8,236.4,322.3,194.2,322.3z M262.3,254.2 c-30.5,0-55.6-23.2-59.5-52.6c37.7-4.2,67.1-36.1,67.5-74.7h0.1c0-16.8-5.4-32.4-14.5-45.1c19.1,10.5,35.2,25.8,46.8,44.2h-16.2 c1,7.8,5.1,14.8,11.5,19.5c12.8,9.4,21.8,23.7,24.1,40.2c0.2,2.8,0.3,5.6,0.3,8.4c0,0.4,0,0.8,0,1.3 C322,228.1,294.9,254.2,262.3,254.2z",
	        fillColor: '#c68a50',
	        strokeColor: '#000000',
	        fillOpacity: 1,
	        //anchor: new google.maps.Point(200,350),
	        anchor: new google.maps.Point(145,480),
	        strokeWeight: 0,
	        scale: 0.25
	    },
	    iconCoordOfficeOne = {lat: 52.974208, lng: 36.058997}, 
	    OfficeOne = new google.maps.Marker({
			position: iconCoordOfficeOne,
			map: mapOfficeOne,
			icon: iconOfficeOne
		});

        $(window).on('resize', function() {
			google.maps.event.trigger(mapOfficeOne, "resize");
			mapOfficeOne.setCenter(coordMapOfficeOne);
        });
};
$(function () {
	$(document.body).on('shown.bs.modal', '.modal', {}, function(event){
		event.preventDefault();
		$(window).trigger('resize');      
	});  
});