document.addEventListener('DOMContentLoaded', function() {
    // Haal de producten op uit het JSON-bestand
    fetch('products.json')
      .then(response => response.json())
      .then(data => {
        // Selecteer de div waarin de producten worden toegevoegd
        const productenLijst = document.getElementById('productenlijst');
  
        // Loop door elk product in de JSON-data
        data.forEach(product => {
          // Maak een nieuw div-element aan voor elk product
          const productDiv = document.createElement('div');
          productDiv.classList.add('col-md-6', 'col-lg-4', 'mb-4');
  
          // Voeg de productinformatie toe aan het div-element
          productDiv.innerHTML = `
            <div class="card" style="height: 100%;">
              <img src="images/${getImageFileName(product.naam)}" class="card-img-top" alt="${product.naam}">
              <div class="card-body">
                <h5 class="card-title">${product.naam}</h5>
                <p class="card-text">Prijs: €${product.prijs.toFixed(2)} | Aantal: ${product.aantal}</p>
                <button class="btn btn-primary" onclick="addToCart(${product.id})">Add to cart</button>
              </div>
            </div>
          `;
  
          // Voeg het div-element toe aan de rij
          productenLijst.appendChild(productDiv);
        });
      })
      .catch(error => console.error('Fout bij het ophalen van de JSON-gegevens:', error));
  
    // Functie om product aan winkelwagen toe te voegen
    window.addToCart = function(productId) {
      // Hier kun je de logica toevoegen om het product aan de winkelwagen toe te voegen
      console.log(`Product ${productId} toegevoegd aan winkelwagen`);
    };
  
    // Functie om het juiste bestandsnaam voor de afbeelding te genereren
    function getImageFileName(productName) {
      const imageNameMap = {
        "Pokémon TCG Scarlet & Violet Paradox Rift booster": "paradox-rift.jpeg",
        "Pokémon TCG Scarlet & Violet Paldean Fates booster": "paldean-fates.jpeg",
        "Pokémon TCG Scarlet & Violet Lost Origin booster": "lost-origins.jpeg",
        "Pokémon TCG Scarlet & Violet Silver Tempest booster": "silver-tempest.jpeg",
        "Pokémon TCG Scarlet & Violet Astral Radiance booster": "astral-radiance.jpeg",
        "Pokémon TCG Scarlet & Violet Brilliant Stars booster": "brilliant-stars.jpeg"
      };
  
      return imageNameMap[productName];
    }
  });
  