const apiUrl = 'https://data.stad.gent/api/explore/v2.1/catalog/datasets/bezetting-parkeergarages-real-time/records?limit=20&refine=name%3ASint-Pietersplein';

fetch(apiUrl)
    .then(function(response) {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Er is een fout opgetreden bij het ophalen van de gegevens.');
        }
    })
    .then(function(data) {
        const place = data[0] 
        console.log(place.totalcapacity)
        console.log(place.availablecapacity)
       
        const ulElement1 = document.getElementById('mijnLijst1');
        ulElement1.innerHTML += `<li class="list-group-item">capaciteit :</li>
        <li class="list-group-item">${place.totalcapacity}</li>`;
      
        const ulElement2 = document.getElementById('mijnLijst2');
        ulElement2.innerHTML += `<li class="list-group-item">beschikbaar :</li>
        <li class="list-group-item">${place.availablecapacity}</li>`;
    })

