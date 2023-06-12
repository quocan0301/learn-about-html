var gpsText = document.getElementById("demoGoogleMapText");
function initMap() {

}
function getLocationGoogle() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPositionGoogle, showErrorGoogle);
  }
  else { gpsText.innerHTML = "Geolocation is not supported by this browser."; }
}

function showPositionGoogle(position) {
  var lat = position.coords.latitude;
  var lon = position.coords.longitude;
  var latlon = new google.maps.LatLng(lat, lon)
  var mapholder = document.getElementById('demoGoogleMap')
  mapholder.style.height = '400px';
  mapholder.style.width = '100%';

  var myOptions = {
    center: latlon, zoom: 14,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    mapTypeControl: false,
    navigationControlOptions: { style: google.maps.NavigationControlStyle.SMALL }
  };
  var map = new google.maps.Map(document.getElementById("demoGoogleMap"), myOptions);
  var marker = new google.maps.Marker({ position: latlon, map: map, title: "You are here!" });
}

function showErrorGoogle(error) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      gpsText.innerHTML = "User denied the request for Geolocation."
      break;
    case error.POSITION_UNAVAILABLE:
      gpsText.innerHTML = "Location information is unavailable."
      break;
    case error.TIMEOUT:
      gpsText.innerHTML = "The request to get user location timed out."
      break;
    case error.UNKNOWN_ERROR:
      gpsText.innerHTML = "An unknown error occurred."
      break;
  }
}