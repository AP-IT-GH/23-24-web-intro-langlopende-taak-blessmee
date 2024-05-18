const map6 = L.map('mapparkeerplaats1').setView([51.0488007,3.7231242,18.25], 17);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 17,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map6);

const markerIcon6 = L.icon({
    iconUrl: `../assets/images/bless-transp.png`,
    iconSize: [31, 46], 
    iconAnchor: [15.5, 42], 
    popupAnchor: [0, -45] 
  });


const parkingpopup6 = L.popup().setContent("Savaanstraat 13, 9000 Gent");
const parkingMarker6 = L.marker([51.0488007,3.7231242,18.25], {
  icon: markerIcon6
}).bindPopup(parkingpopup6).addTo(map6);
