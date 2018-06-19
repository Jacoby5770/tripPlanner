
function buildMarker(type, coord) {

    const marker = document.createElement("div")
    marker.style.height = "32px"
    marker.style.width = "39px"

    if(type === 'activity') {
        marker.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)"
        new mapboxgl.Marker(marker).setLngLat(coord).addTo(map);
    } else if(type === 'hotel') {
        marker.style.backgroundImage = "url(http://i.imgur.com/D9574Cu.png)"
        new mapboxgl.Marker(marker).setLngLat(coord).addTo(map);
    } else if(type === 'restaurant') {
        marker.style.backgroundImage = "url(http://i.imgur.com/cqR6pUI.png)"
        new mapboxgl.Marker(marker).setLngLat(coord).addTo(map);
    }

    return marker;
}