const map3 = L.map('mapparkeerplaats1').setView([51.0424221,3.7258331,17], 17);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 17,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map3);

const markerIcon3 = L.icon({
    iconUrl: `../assets/images/bless-transp.png`,
    iconSize: [31, 46], 
    iconAnchor: [15.5, 42], 
    popupAnchor: [0, -45] 
  });


const parkingpopup3 = L.popup().setContent("Sint-Pietersplein 65, 9000 Gent ");
const parkingMarker3 = L.marker([51.0424221,3.7258331,17], {
  icon: markerIcon3
}).bindPopup(parkingpopup3).addTo(map3);
