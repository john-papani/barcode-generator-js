# Barcode Generator Project

This project generates barcode images (as `.jpg` files) for a list of numbers using the `JsBarcode` library in Node.js. Each barcode is saved with the number as the file name.

## Features

- Generate barcodes using different formats (e.g., `CODE128`, `CODE39`, `EAN13`).
- Save barcodes as `.jpg` files.
- Customizable barcode size, format, and display options.

## Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v12 or later)
- npm (Node package manager, installed with Node.js)

## Getting Started

Follow the steps below to set up and run the project:

### 1. Clone the Repository

You can clone the repository using:

```bash
git clone https://github.com/john-papani/barcode-generator-js.git
cd barcode-generator-js
```

Alternatively, you can create a new project folder manually if you’re not using Git.

### 2. Install Dependencies

In the project directory, run the following command to install the required dependencies:

```bash
npm install
```

This will install:

- `jsbarcode` for generating barcodes.
- `canvas` for drawing barcodes on a canvas and saving them as images.

### 3. Usage

You can modify the list of numbers inside `generateBarcodes.js` to customize which barcodes are generated. By default, it looks like this:

```javascript
const numbers = ['123456789012', '987654321098', '567890123456'];
```

After modifying, run the script to generate barcodes:

```bash
node generateBarcodes.js
```

The generated barcodes will be saved as `.jpg` files in the project directory with the corresponding barcode number as the file name, e.g., `123456789012.jpg`.

### 4. Modify Barcode Settings

You can customize the barcode format, size, and display options in the `JsBarcode` options section of the code:

```javascript
JsBarcode(canvas, number, {
    format: "CODE128", // Other formats: CODE39, EAN13, etc.
    displayValue: true,  // Show the number below the barcode
    width: 2,           // Adjust barcode width
    height: 100         // Adjust barcode height
});
```

### 5. Running the Project

To run the project, simply use the following command:

```bash
node generateBarcodes.js
```

## Example Output

For a number like `123456789012`, the generated file will be named `123456789012.jpg` and contain the barcode image corresponding to that number.

## Dependencies

- **[JsBarcode](https://github.com/lindell/JsBarcode)** - A powerful barcode generator for JavaScript.
- **[canvas](https://github.com/Automattic/node-canvas)** - A Node.js package for drawing graphics on a canvas.
