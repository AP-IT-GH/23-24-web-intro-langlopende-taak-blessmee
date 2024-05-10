

let map = L.map('magosMap').setView([51.055513, 3.712287], 17);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 17,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);



//let bounds = [[51.23041, 4.4155], [51.22991, 4.41675]];
// kleur de rechthoek in met de rode AP-kleur
//L.rectangle(bounds, {color: "#e60005", weight: 1}).addTo(map);
// plaats een marker met als tekst "AP-Hogeschool" en eronder "Ellermanstraat 33"
//let magosMarker = L.marker([51.055513, 3.712287]).addTo(map);
//magosMarker.bindPopup("<b>Magos parking listings</b><br>Hoogstraat 108").openPopup();

var circle = L.circle([51.055513, 3.712287], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 30
}).addTo(map);
circle.bindPopup("<b>Magos parking listings</b><br>Hoogstraat 108").openPopup();