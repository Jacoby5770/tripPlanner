console.log("Hello from Javascript");

const mapboxbl = require("mapbox-gl");

mapboxbl.accessToken = 'pk.eyJ1IjoiamFjb2J5NTc3MCIsImEiOiJjamltNTBhcW4wMGZmM3dydGwwZ2lhNGhlIn0.F7JAtWl9iM_ZCXiREWJptA'

const map = new mapboxbl.Map({
    container: "map",
    center: [-74.009, 40.705],
    zoom: 12,
    style: "mapbox://styles/mapbox/streets-v10"
});

const marker = document.createElement("div")
marker.style.height = "32px"
marker.style.width = "39px"
marker.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)"
new mapboxgl.Marker(marker).setLngLat([-74.009151, 40.705086]).addTo(map);
