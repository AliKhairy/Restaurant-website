function initMap() {
    var restaurantLocation = { lat: 53.716321 , lng: 2.106732 }; // Replace with your restaurant's coordinates
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: restaurantLocation
    });

    var restaurantMarker = new google.maps.Marker({
        position: restaurantLocation,
        map: map,
        title: 'Camel\'s Deserty'
    });

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            function(position) {
                var userLocation = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };

                var userMarker = new google.maps.Marker({
                    position: userLocation,
                    map: map,
                    title: 'Your Location',
                    icon: {
                        path: google.maps.SymbolPath.CIRCLE,
                        scale: 8,
                        fillColor: '#0000FF',
                        fillOpacity: 0.8,
                        strokeColor: '#0000FF',
                        strokeWeight: 2
                    }
                });

                map.setCenter(userLocation);
            },
            function() {
                alert('Error: The Geolocation service failed.');
            }
        );
    } else {
        alert('Error: Your browser doesn\'t support geolocation.');
    }
}

initMap();