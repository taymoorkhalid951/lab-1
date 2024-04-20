// Get DOM elements
const userValueInput = document.getElementById('userValue');
const fromUnitSelect = document.getElementById('fromUnit');
const toUnitSelect = document.getElementById('toUnit');
const convertButton = document.getElementById('btn');
const resultParagraph = document.getElementById('result');

// Define conversion rates (for demonstration purposes)
const conversionRates = {
    // Define conversion rates for different units
    // This is just an example, you should replace these with actual conversion rates
    'meter': {
        'meter': 1,
        'centimeter': 100,
        'kilometer': 0.001,
    },
    'centimeter': {
        'meter': 0.01,
        'centimeter': 1,
        'kilometer': 0.00001,
    },
    'kilometer': {
        'meter': 1000,
        'centimeter': 100000,
        'kilometer': 1,
    },
    'kilogram': {
        'kilogram': 1,
        'gram': 1000,
        'pound': 2.20462,
    },
    'gram': {
        'kilogram': 0.001,
        'gram': 1,
        'pound': 0.00220462,
    },
    'pound': {
        'kilogram': 0.453592,
        'gram': 453.592,
        'pound': 1,
    }
};

// Populate select options
function populateSelectOptions() {
    // Clear existing options
    fromUnitSelect.innerHTML = '';
    toUnitSelect.innerHTML = '';
    
    // Get units from conversionRates object
    const units = Object.keys(conversionRates);
    
    // Populate select options
    units.forEach(unit => {
        const option1 = document.createElement('option');
        option1.value = unit;
        option1.textContent = unit;
        
        const option2 = document.createElement('option');
        option2.value = unit;
        option2.textContent = unit;
        
        fromUnitSelect.appendChild(option1);
        toUnitSelect.appendChild(option2);
    });
}

// Convert function
function convert() {
    const fromUnit = fromUnitSelect.value;
    const toUnit = toUnitSelect.value;
    const inputValue = parseFloat(userValueInput.value);
    
    // Check if the conversion is possible
    if (!(fromUnit in conversionRates) || !(toUnit in conversionRates[fromUnit])) {
        resultParagraph.textContent = 'Conversion not possible';
        return;
    }
    
    // Perform conversion
    const conversionRate = conversionRates[fromUnit][toUnit];
    const result = inputValue * conversionRate;
    
    // Display result
    resultParagraph.textContent = `${inputValue} ${fromUnit} = ${result} ${toUnit}`;
}

// Event listeners
convertButton.addEventListener('click', convert);

// Initialize
populateSelectOptions();
