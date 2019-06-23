//set up the map
var mymap = L.map('mapid').setView([42.01667, 24.86667], 13);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
	maxZoom: 18,
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
		'<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
		'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	id: 'mapbox.streets',
}).addTo(mymap);

var mbAttr = 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
			'<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
			'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		mbUrl = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';
        var grayscale   = L.tileLayer(mbUrl, {id: 'mapbox.light', attribution: mbAttr}),
        streets  = L.tileLayer(mbUrl, {id: 'mapbox.streets',   attribution: mbAttr}),
        fortress = L.layerGroup(),
        monastery = L.layerGroup(),
        museum = L.layerGroup();
        
        var baseLayers = {
            "Grayscale": grayscale,
            "Streets": streets
        };
        var overlays = {
            "fortress": fortress,
            "monastery": monastery,
            "museum": museum
        };
// function that creates markers 
function marker(lat, lng, layer, popupText, opened){
	var marker = L.marker([lat, lng]).addTo(layer);
	if (popupText) {
		if (opened)	marker.bindPopup(popupText).openPopup();
		else marker.bindPopup(popupText);
	}
}
// function that creates circles
function circle(lat, lng, popupText, opened){
	var circle = L.circle([lat, lng], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 300
	}).addTo(mymap);
	if (popupText) circle.bindPopup(popupText);
}
// function that creates popups
function popup(lat, lng, popupText){
	var popup = L.popup()
    .setLatLng([lat, lng])
    .setContent(popupText)
    .openOn(mymap);
}
// icons
var LeafIcon = L.Icon.extend({
    options: {
        iconSize:     [38, 95],
        shadowSize:   [0, 0],
        iconAnchor:   [22, 94],
        shadowAnchor: [4, 62],
        popupAnchor:  [-3, -76]
    }
});

$.noConflict();
jQuery(document).ready(function($){
    let clickedButtons = 0;
    $('.layer-button').on('click', function(){
        clickedButtons++;
        let currentLayer = $(this).attr('id');
        let keys = Object.keys(overlays);
        if (clickedButtons === 4){
           for (let i of keys){
              if (currentLayer !== i){
                  overlays[i].remove();
              }
           }
        }
        else{
            if (!(mymap.hasLayer(overlays[currentLayer]))){
                mymap.addLayer(overlays[currentLayer]);
            }
            else {
                overlays[currentLayer].remove();
            }
        }
    });
    $('.layer-button').each(function(){
      $(this).trigger('click');
    })
});