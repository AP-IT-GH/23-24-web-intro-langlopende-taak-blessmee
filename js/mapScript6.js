const map7 = L.map('mapparkeerplaats1').setView([51.0363381,3.7386391,18.75], 17);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 17,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map7);

const markerIcon7 = L.icon({
    iconUrl: `../assets/images/bless-transp.png`,
    iconSize: [31, 46], 
    iconAnchor: [15.5, 42], 
    popupAnchor: [0, -45] 
  });


const parkingpopup7 = L.popup().setContent("Hundelgemsesteenweg 2B, 9050 Gent");
const parkingMarker7 = L.marker([51.0363381,3.7386391,18.75], {
  icon: markerIcon7
}).bindPopup(parkingpopup7).addTo(map7);
