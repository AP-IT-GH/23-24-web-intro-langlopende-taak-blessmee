// Vervang 'URL_VAN_API' door de daadwerkelijke URL van de API die je wilt aanroepen
const apiUrl = 'https://data.stad.gent/api/explore/v2.1/catalog/datasets/bezetting-parkeergarages-real-time/records?limit=20&refine=name%3ASint-Pietersplein';

// Voer het GET-verzoek uit naar de API
fetch(apiUrl)
    .then(function(response) {
        // Controleer of het antwoord geldig is
        if (response.ok) {
            // Als het antwoord geldig is, zet het om naar JSON
            return response.json();
        } else {
            // Als er een fout optreedt, gooi een error
            throw new Error('Er is een fout opgetreden bij het ophalen van de gegevens.');
        }
    })
    .then(function(data) {
        // Data bevat nu de JSON-response van de API
        // Hieronder kun je de gewenste elementen uit de data halen en ze in het HTML-formaat invoegen

        // Voorbeeld: haal twee elementen op uit de data
        const capaciteit1 = data.totalcapacity; // Vervang 'capaciteit' door de daadwerkelijke naam van het capaciteitselement
        const beschikbaar1 = data.availablecapacity; // Vervang 'beschikbaar' door de daadwerkelijke naam van het beschikbaarheidselement

        // Selecteer het element waarin je de gegevens wilt invoegen
        const capaciteitElement = document.getElementById('capaciteit');
        const beschikbaarElement = document.getElementById('beschikbaar');

        // Voeg de opgehaalde elementen toe aan het HTML-formaat
        capaciteitElement.innerHTML = capaciteit1;
        beschikbaarElement.innerHTML = beschikbaar1;

        // Je kunt hier ook verdere bewerkingen doen met de opgehaalde elementen
    })
    .catch(function(error) {
        // Vang eventuele fouten op en toon ze in de console
        console.error('Er is een fout opgetreden:', error);
    });

