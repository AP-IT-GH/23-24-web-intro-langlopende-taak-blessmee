

// maak connectie met API
fetch('https://data.stad.gent/api/explore/v2.1/catalog/datasets/bezetting-parkeergarages-real-time/records?limit=1&refine=name%3ASint-Pietersplein')
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
        let html = '<section class="row"><table class="table"><tbody>';

        // gegevens van de parking...in HTML
        for (let i = 0; i < response.results.length; i++) {
            const parking = response.results[i];
            html += `<thead>${parking.name}</thead>
                    <tr>
                        <th scope="row">capaciteit</th>
                        <td>${parking.totalcapacity}</td>
                    </tr>
                    <tr>
                        <th scope="row">beschikbaar</th>
                        <td>${parking.availablecapacity}</td>
                    </tr>
                    <tr>
                        <th scope="row">type</th>
                        <td>${parking.type}</td>
                    </tr>
                    <tr>
                        <th scope="row">openingsuren</th>
                        <td>${parking.openingtimesdescription}</td>
                    </tr>
                    <tr>
                        <th scope="row">categorie</th>
                        <td>${parking.categorie}</td>
                    </tr>
            `;
        }
        html += ' </tbody></table></section>';

        /*document.body.insertAdjacentHTML('beforeend', html);*/
        document.getElementById("parking1").innerHTML = html;
    })