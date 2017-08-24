document.addEventListener("DOMContentLoaded", function() {
  var container = document.getElementById("map");
  mapboxgl.accessToken = 'pk.eyJ1Ijoib2xpc3RpayIsImEiOiJjaW03a2lvd2MwMDBsdzhtNTZzeG9pYzFsIn0.EnuMVTEKyFfJN6XZhtLmIA';

  var map = new mapboxgl.Map({
    container: 'map',
    hash: true,
    style: container.dataset.styleUrl,
    center: [45.677, 10.038],
    zoom: 6.54
  });
});
