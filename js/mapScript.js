

const map1 = L.map('magosMap').setView([51.055513, 3.712287], 17);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 17,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map1);

//var circle = L.circle([51.055513, 3.712287], {
//    color: 'red',
//    fillColor: '#f03',
//    fillOpacity: 0.5,
//    radius: 30
//}).addTo(map);

//L.marker([51.055513, 3.712287], {icon: magosIcon}).addTo(map);
// circle.bindPopup("<b>Magos parking listings</b><br>Hoogstraat 108").openPopup();


const markerIcon1 = L.icon({
    iconUrl: `../assets/images/bless-transp.png`,
    iconSize: [31, 46], 
    iconAnchor: [15.5, 42], 
    popupAnchor: [0, -45] 
  });


const parkingpopup1 = L.popup().setContent("");
const parkingMarker1 = L.marker([51.055513, 3.712287], {
  icon: markerIcon1
}).bindPopup(parkingpopup1).addTo(map1);

