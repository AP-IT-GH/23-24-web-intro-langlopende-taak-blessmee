const map5 = L.map('mapparkeerplaats1').setView([51.0654918,3.7326393,18.75], 17);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 17,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map5);

const markerIcon5 = L.icon({
    iconUrl: `../assets/images/bless-transp.png`,
    iconSize: [31, 46], 
    iconAnchor: [15.5, 42], 
    popupAnchor: [0, -45] 
  });


const parkingpopup5 = L.popup().setContent("Dok-Noord 7, 9000 Gent ");
const parkingMarker5 = L.marker([51.0654918,3.7326393,18.75], {
  icon: markerIcon5
}).bindPopup(parkingpopup5).addTo(map5);
