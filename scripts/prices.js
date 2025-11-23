// Wait for pakketten to be available and DOM to be ready
(function() {
    function initializePrices() {
        // Check if pakketten is loaded
        if (typeof pakketten === 'undefined') {
            // Wait a bit and try again
            setTimeout(initializePrices, 50);
            return;
        }
        
        // Check if we're on the prices page
        if (!document.getElementById('showSmallPrices')) {
            return; // Not on prices page, exit gracefully
        }

    // Filter packages by size
    const smallPrices = pakketten.filter(pakket => pakket.size === "Klein");
    const mediumPrices = pakketten.filter(pakket => pakket.size === "Middel");
    const largePrices = pakketten.filter(pakket => pakket.size === "Groot");
    
    // Get DOM elements
    const buttonSmall = document.getElementById('showSmallPrices');
    const buttonMedium = document.getElementById('showMiddlePrices');
    const buttonLarge = document.getElementById('showLargePrices');
    const priceSizeTitle = document.getElementById('priceSizeTitle');
    const pricesizeDiv = document.getElementById('pricesize');

    // Check if required elements exist
    if (!buttonSmall || !buttonMedium || !buttonLarge || !priceSizeTitle || !pricesizeDiv) {
        console.error('Missing elements:');
        console.error('buttonSmall:', buttonSmall);
        console.error('buttonMedium:', buttonMedium);
        console.error('buttonLarge:', buttonLarge);
        console.error('priceSizeTitle:', priceSizeTitle);
        console.error('pricesizeDiv:', pricesizeDiv);
        return;
    }

    console.log('All elements found successfully!');

    // Add event listeners with null checks
    if (buttonSmall) {
        buttonSmall.addEventListener('click', () => {
            console.log('Small button clicked!');
            console.log('Small prices:', smallPrices);

            // Clear existing content first
            pricesizeDiv.innerHTML = '';
            console.log('Content cleared');

            // Set flex direction to column to stack sections vertically
            pricesizeDiv.style.flexDirection = 'column';
            console.log('Flex direction set to column');

            // Create a "Back" button
            const backButton = document.createElement('button');
            backButton.className='laser-glow horizontal red from-right back-button';
            backButton.textContent = 'TERUG';
            backButton.addEventListener('click', () => {
                // Logic to go back to the previous view or reset the content
                location.reload(); // Simple way to reset the page
            });
            pricesizeDiv.appendChild(backButton);

            // Create Interior section
            const interiorSection = document.createElement('div');
            interiorSection.className = 'package-section';
            
            const interiorContainer = document.createElement('div');
            interiorContainer.className = 'packages-container';
            interiorContainer.style.display = 'flex';
            interiorContainer.style.flexDirection = 'row';
            interiorContainer.style.gap = '20px';

            // Add Interior packages
            smallPrices.forEach(pakket => {
                if (pakket.type === 'Interior') {
                    const pakketDiv = document.createElement('div');
                    pakketDiv.className = 'window align-left';
                    pakketDiv.innerHTML = `
                        <h2>${pakket.quality}</h2>
                        <p>Duur: ${pakket.length}</p>
                        <p class="align-center">${pakket.description}</p>
                        <ul class="width-100">${pakket.points.map(point => `<li>${point}</li>`).join('')}</ul>
                        <p class="text-bigger">Prijs: €${pakket.price}</p>
                    `;
                    interiorContainer.appendChild(pakketDiv);
                }
            });
            
            interiorSection.appendChild(interiorContainer);

            // Create Exterior section
            const exteriorSection = document.createElement('div');
            exteriorSection.className = 'package-section';
            
            const exteriorContainer = document.createElement('div');
            exteriorContainer.className = 'packages-container';
            exteriorContainer.style.display = 'flex';
            exteriorContainer.style.flexDirection = 'row';
            exteriorContainer.style.gap = '20px';

            // Add Exterior packages
            smallPrices.forEach(pakket => {
                if (pakket.type === 'Exterior') {
                    const pakketDiv = document.createElement('div');
                    pakketDiv.className = 'window';
                    pakketDiv.innerHTML = `
                        <h2>${pakket.quality}</h2>
                        <p>Duur: ${pakket.length}</p>
                        <p class="align-center">${pakket.description}</p>
                        <ul class="width-100 align-left">${pakket.points.map(point => `<li>${point}</li>`).join('')}</ul>
                        <p class="text-bigger">Prijs: €${pakket.price}</p>
                    `;
                    exteriorContainer.appendChild(pakketDiv);
                }
            });
            
            exteriorSection.appendChild(exteriorContainer);

            // Add both sections to the main container
            pricesizeDiv.appendChild(interiorSection);
            pricesizeDiv.appendChild(exteriorSection);

            // Hide buttons and update title
            buttonSmall.style.display = 'none';
            buttonMedium.style.display = 'none';
            buttonLarge.style.display = 'none';
            priceSizeTitle.textContent = 'Kies uw pakket(ten)!';
        });
    }

    if (buttonMedium) {
        buttonMedium.addEventListener('click', () => {
            console.log('Medium prices:', mediumPrices);

            // Clear existing content first
            pricesizeDiv.innerHTML = '';

            // Set flex direction to column to stack sections vertically
            pricesizeDiv.style.flexDirection = 'column';

            // Create a "Back" button
            const backButton = document.createElement('button');
            backButton.className='laser-glow horizontal red from-right back-button';
            backButton.textContent = 'TERUG';
            backButton.addEventListener('click', () => {
                // Logic to go back to the previous view or reset the content
                location.reload(); // Simple way to reset the page
            });
            pricesizeDiv.appendChild(backButton);


            // Create Interior section
            const interiorSection = document.createElement('div');
            interiorSection.className = 'package-section';
            
            const interiorContainer = document.createElement('div');
            interiorContainer.className = 'packages-container';
            interiorContainer.style.display = 'flex';
            interiorContainer.style.flexDirection = 'row';
            interiorContainer.style.alignItems = 'start';
            interiorContainer.style.gap = '20px';

            // Add Interior packages
            mediumPrices.forEach(pakket => {
                if (pakket.type === 'Interior') {
                    const pakketDiv = document.createElement('div');
                    pakketDiv.className = 'window align-left';
                    pakketDiv.innerHTML = `
                        <h2>${pakket.quality}</h2>
                        <p>Duur: ${pakket.length}</p>
                        <p class="align-center">${pakket.description}</p>
                        <ul class="width-100 align-left">${pakket.points.map(point => `<li>${point}</li>`).join('')}</ul>
                        <p class="text-bigger">Prijs: €${pakket.price}</p>
                    `;
                    interiorContainer.appendChild(pakketDiv);
                }
            });
            
            interiorSection.appendChild(interiorContainer);

            // Create Exterior section
            const exteriorSection = document.createElement('div');
            exteriorSection.className = 'package-section';
            
            const exteriorContainer = document.createElement('div');
            exteriorContainer.className = 'packages-container';
            exteriorContainer.style.display = 'flex';
            exteriorContainer.style.flexDirection = 'row';
            exteriorContainer.style.gap = '20px';

            // Add Exterior packages
            mediumPrices.forEach(pakket => {
                if (pakket.type === 'Exterior') {
                    const pakketDiv = document.createElement('div');
                    pakketDiv.className = 'window align-left';
                    pakketDiv.innerHTML = `
                        <h2>${pakket.quality}</h2>
                        <p>Duur: ${pakket.length}</p>
                        <p class="align-center">${pakket.description}</p>
                        <ul class="width-100">${pakket.points.map(point => `<li>${point}</li>`).join('')}</ul>
                        <p class="text-bigger">Prijs: €${pakket.price}</p>
                    `;
                    exteriorContainer.appendChild(pakketDiv);
                }
            });
            
            exteriorSection.appendChild(exteriorContainer);

            // Add both sections to the main container
            pricesizeDiv.appendChild(interiorSection);
            pricesizeDiv.appendChild(exteriorSection);

            // Hide buttons and update title
            buttonSmall.style.display = 'none';
            buttonMedium.style.display = 'none';
            buttonLarge.style.display = 'none';
            priceSizeTitle.textContent = 'Kies uw pakket(ten)!';
        });
    }

    if (buttonLarge) {
        buttonLarge.addEventListener('click', () => {
            console.log('Large prices:', largePrices);

            // Clear existing content first
            pricesizeDiv.innerHTML = '';

            // Set flex direction to column to stack sections vertically
            pricesizeDiv.style.flexDirection = 'column';

            // Create a "Back" button
            const backButton = document.createElement('button');
            backButton.className='laser-glow horizontal red from-right back-button';
            backButton.textContent = 'TERUG';
            backButton.addEventListener('click', () => {
                // Logic to go back to the previous view or reset the content
                location.reload(); // Simple way to reset the page
            });
            pricesizeDiv.appendChild(backButton);

            // Create Interior section
            const interiorSection = document.createElement('div');
            interiorSection.className = 'package-section';
            
            const interiorContainer = document.createElement('div');
            interiorContainer.className = 'packages-container';
            interiorContainer.style.display = 'flex';
            interiorContainer.style.flexDirection = 'row';
            interiorContainer.style.gap = '20px';

            // Add Interior packages
            largePrices.forEach(pakket => {
                if (pakket.type === 'Interior') {
                    const pakketDiv = document.createElement('div');
                    pakketDiv.className = 'window align-left';
                    pakketDiv.innerHTML = `
                        <h2>${pakket.quality}</h2>
                        <p>Duur: ${pakket.length}</p>
                        <p class="align-center">${pakket.description}</p>
                        <ul class="width-100 align-left">${pakket.points.map(point => `<li>${point}</li>`).join('')}</ul>
                        <p class="text-bigger">Prijs: €${pakket.price}</p>
                    `;
                    interiorContainer.appendChild(pakketDiv);
                }
            });
            
            interiorSection.appendChild(interiorContainer);

            // Create Exterior section
            const exteriorSection = document.createElement('div');
            exteriorSection.className = 'package-section';
            
            const exteriorContainer = document.createElement('div');
            exteriorContainer.className = 'packages-container';
            exteriorContainer.style.display = 'flex';
            exteriorContainer.style.flexDirection = 'row';
            exteriorContainer.style.gap = '20px';

            // Add Exterior packages
            largePrices.forEach(pakket => {
                if (pakket.type === 'Exterior') {
                    const pakketDiv = document.createElement('div');
                    pakketDiv.className = 'window align-left';
                    pakketDiv.innerHTML = `
                        <h2>${pakket.quality}</h2>
                        <p>Duur: ${pakket.length}</p>
                        <p class="align-center">${pakket.description}</p>
                        <ul class="width-100 align-left">${pakket.points.map(point => `<li>${point}</li>`).join('')}</ul>
                        <p class="text-bigger">Prijs: €${pakket.price}</p>
                    `;
                    exteriorContainer.appendChild(pakketDiv);
                }
            });
            
            exteriorSection.appendChild(exteriorContainer);

            // Add both sections to the main container
            pricesizeDiv.appendChild(interiorSection);
            pricesizeDiv.appendChild(exteriorSection);

            // Hide buttons and update title
            buttonSmall.style.display = 'none';
            buttonMedium.style.display = 'none';
            buttonLarge.style.display = 'none';
            priceSizeTitle.textContent = 'Kies uw pakket(ten)!';
        });
    }
    
    } // Close initializePrices function
    
    // Start the initialization process
    initializePrices();
})();