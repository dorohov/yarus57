'use strict';


    function initGmap() {
        var coord, coord_marker, zoom_map;
        if(device.mobile()){
          zoom_map = 17;
        }else{
          zoom_map = 18;
        }
        coord = {lat: 52.9739808, lng: 36.058946};
        coord_marker = {lat: 52.974208, lng: 36.058997}; 

        var mapOptions = {
            zoom: zoom_map,
            center: new google.maps.LatLng(coord.lat, coord.lng),
            styles: [
              {
                "featureType": "landscape.man_made",
                "elementType": "geometry.fill",
                "stylers": [
                  {
                    "color": "#ebe3cd"
                  }
                ]
              },
              {
                "featureType": "landscape.man_made",
                "elementType": "geometry.stroke",
                "stylers": [
                  {
                    "color": "#dfd2ae"
                  }
                ]
              },
              {
                "featureType": "poi",
                "elementType": "geometry.fill",
                "stylers": [
                  {
                    "color": "#dfd2ae"
                  }
                ]
              },
              {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#a79893"
                  }
                ]
              },
              {
                "featureType": "road",
                "elementType": "geometry.fill",
                "stylers": [
                  {
                    "color": "#f5f1e6"
                  }
                ]
              },
              {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#f5f1e6"
                  }
                ]
              },
              {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [
                  {
                    "color": "#f5f1e6"
                  }
                ]
              },
              {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#a79893"
                  }
                ]
              }
            ]
             
        };
        var mapElement = document.getElementById('map-google');
        var map = new google.maps.Map(mapElement, mapOptions);
        var image = 'img/default/icon-map.png';
        var marker = new google.maps.Marker({
            position: coord_marker,
            map: map,
            icon: image
        });

        $(window).resize(function() {
          google.maps.event.trigger(map, "resize");
          map.setCenter(coord);
        });
    };
$(function () {
  //google.maps.event.addDomListener(window, 'load', initGmap);
  $(document.body).on('shown.bs.modal', '.modal', {}, function(event){
      event.preventDefault();
      
      $(window).trigger('resize');      
  });
  
});
