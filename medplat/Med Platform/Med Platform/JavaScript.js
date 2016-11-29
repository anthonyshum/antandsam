var william_harvey = {
    lat: 51.143183,
    lng: 0.915349
};
var chaucer = {
    lat: 51.261797,
    lng: 1.087446
};
var kims = {
    lat: 51.286869,
    lng: 0.556317
};

function initMap() {
    var myLatLng = {
        lat: -25.363,
        lng: 131.044
    };
    var map1 = new google.maps.Map(document.getElementById('william_harvey'), {
        zoom: 14,
        center: william_harvey
    });
    var marker1 = new google.maps.Marker({
        position: william_harvey,
        map: map1,
        title: 'Hello World!'
    });
    var map2 = new google.maps.Map(document.getElementById('chaucer'), {
        zoom: 14,
        center: chaucer
    });
    var marker2 = new google.maps.Marker({
        position: chaucer,
        map: map2,
        title: 'Hello World!'
    });
    var map3 = new google.maps.Map(document.getElementById('kims'), {
        zoom: 14,
        center: kims
    });
    var marker2 = new google.maps.Marker({
        position: kims,
        map: map3,
        title: 'Hello World!'
    });

}
google.maps.event.addDomListener(window, 'load', initMap);