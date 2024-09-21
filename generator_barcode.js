const { createCanvas } = require('canvas');
const JsBarcode = require('jsbarcode');
const fs = require('fs');

// List of numbers
const numbers = ['123456789012', '987654321098', '567890123456'];

// Function to generate barcodes and save them as .jpg files
function generateBarcodes(numbers) {
    numbers.forEach((number) => {
        // Create a canvas
        const canvas = createCanvas();
        
        // Generate the barcode
        JsBarcode(canvas, number, {
            format: "CODE128", // You can use other formats such as CODE39, EAN13, etc.
            displayValue: true,
            width: 2,
            height: 100,
        });
        
        // Convert the canvas to a buffer
        const buffer = canvas.toBuffer('image/jpeg');
        
        // Save the buffer to a .jpg file
        fs.writeFileSync(`./images/${number}.jpg`, buffer);

        console.log(`Barcode for ${number} saved as ${number}.jpg`);
    });
}

// Generate barcodes for the list of numbers
generateBarcodes(numbers);
