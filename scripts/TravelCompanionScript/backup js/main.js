//set up the map
const mymap = L.map('mapid').setView([42.01667, 24.86667], 13);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
	maxZoom: 18,
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
		'<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
		'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	id: 'mapbox.streets',
}).addTo(mymap);

const mbAttr = 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
			'<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
			'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		mbUrl = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';
        const grayscale   = L.tileLayer(mbUrl, {id: 'mapbox.light', attribution: mbAttr}),
        streets  = L.tileLayer(mbUrl, {id: 'mapbox.streets',   attribution: mbAttr}),
        fortress = L.layerGroup(),
        monastery = L.layerGroup(),
        museum = L.layerGroup();
        
        const baseLayers = {
            "Grayscale": grayscale,
            "Streets": streets
        };
        let overlays = {
            "fortress": fortress,
            "monastery": monastery,
            "museum": museum
        };
// function that creates markers 
function marker(lat, lng, layer, popupText, opened){
	const marker = L.marker([lat, lng]).addTo(layer);
	if (popupText) {
		if (opened)	marker.bindPopup(popupText).openPopup();
		else marker.bindPopup(popupText);
	}
}
// function that creates circles
function circle(lat, lng, popupText, opened){
	const circle = L.circle([lat, lng], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 300
	}).addTo(mymap);
	if (popupText) circle.bindPopup(popupText);
}
// function that creates popups
function popup(lat, lng, popupText){
	const popup = L.popup()
    .setLatLng([lat, lng])
    .setContent(popupText)
    .openOn(mymap);
}
// icons
const LeafIcon = L.Icon.extend({
    options: {
        iconSize:     [38, 95],
        shadowSize:   [0, 0],
        iconAnchor:   [22, 94],
        shadowAnchor: [4, 62],
        popupAnchor:  [-3, -76]
    }
});

const filterButtons = document.querySelectorAll('.buttons button');

function filterDestinations() {
    const category = this.dataset.category;
    // reverse the  display value of the current category, 
    displayCategory[category] = !displayCategory[category];
    // then call again the setupDestinatons function to add/remove them from the map
    setupDestinations();
}

filterButtons.forEach(button => button.addEventListener('click', filterDestinations));





