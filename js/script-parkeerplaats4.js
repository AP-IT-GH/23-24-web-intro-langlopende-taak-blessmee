// maak connectie met API
fetch('https://data.stad.gent/api/explore/v2.1/catalog/datasets/bezetting-parkeergarages-real-time/records?limit=1&refine=name%3AVrijdagmarkt')
    .then(function (response) {
        // nakijken of de API-call een antwoord terugstuurt
        if (response.ok) {
            // als de status "ok" (=200) is, dan wordt het antwoord omgezet in JSON
            return response.json();
        } else {
            // als de status niet "ok" is, geef dan de status terug en annuleer het uitvoeren
            return Promise.reject(response.status);
        }
    })


    .then(function (response) {
        console.log(response);
        let html = '<section class="row">';

        // gegevens van de parking...in HTML
        for (let i = 0; i < response.results.length; i++) {
            const parking = response.results[i];
            html += 
                    `<ul class="list-group list-group-horizontal-sm" ><li class="list-group-item">capaciteit :</li>
        <li class="list-group-item">${parking.totalcapacity}</li></ul>
        <ul class="list-group list-group-horizontal-sm" ><li class="list-group-item">beschikbaar :</li>
        <li class="list-group-item">${parking.availablecapacity}</li></ul>` ;
        }
        html += ' </section>';

        /*document.body.insertAdjacentHTML('beforeend', html);*/
        document.getElementById("parking3").innerHTML = html;
    })