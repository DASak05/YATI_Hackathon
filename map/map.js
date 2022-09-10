x= navigator.geolocation;

x.getcurrentPosition(success , failure);

function success(position){
    var mylat = position.coords.latitude ;
    var mylong = position.coords.longitude ;
    
    var coords = new google.maps.LatLng(mylat , mylong);

    var mapOption = {
        zoom : 10 ,
        center : coords ,
        mapTypeId : google.maps.mapTypeId.ROADMAP
    }

    var map = new google.maps.Map(document.getElementById("map"), mapOption);
    var marker = new google.maps.Marker({
        map:map,
        position:coords
    });
}

function failure(){}

