const map4 = L.map('mapparkeerplaats1').setView([51.0565942,3.7262392,17.5], 17);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 17,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map4);

const markerIcon4 = L.icon({
    iconUrl: `../assets/images/bless-transp.png`,
    iconSize: [31, 46], 
    iconAnchor: [15.5, 42], 
    popupAnchor: [0, -45] 
  });


const parkingpopup4 = L.popup().setContent("Vrijdagmarkt, 9000 Gent ");
const parkingMarker4 = L.marker([51.0565942,3.7262392,17.5], {
  icon: markerIcon4
}).bindPopup(parkingpopup4).addTo(map4);
