const map2 = L.map('mapparkeerplaats1').setView([51.0369969,3.7051323,14], 17);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 17,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map2);

const markerIcon2 = L.icon({
    iconUrl: `../assets/images/bless-transp.png`,
    iconSize: [31, 46], 
    iconAnchor: [15.5, 42], 
    popupAnchor: [0, -45] 
  });


const parkingpopup2 = L.popup().setContent("Sint-Denijslaan, 9000 Gent ");
const parkingMarker2 = L.marker([51.0369969,3.7051323,14], {
  icon: markerIcon2
}).bindPopup(parkingpopup2).addTo(map2);
