

function myMap() {
    
    var ucb = new google.maps.LatLng(-17.371794, -66.143639);

    const map = document.getElementById("googleMap");

    let mapProp= {
        center: ucb,
        zoom:17,
    };

    let myMap = new google.maps.Map(map, mapProp);

    let marker = new google.maps.Marker({position:ucb});
    marker.setMap(myMap);
}