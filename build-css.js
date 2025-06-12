// build-css.js
// Script to process Tailwind CSS directives via PostCSS
const fs = require('fs');
const path = require('path');
const postcss = require('postcss');
const tailwind = require('@tailwindcss/postcss');
const autoprefixer = require('autoprefixer');

(async () => {
  try {
    const inputPath = path.resolve(__dirname, 'styles.css');
    const outputPath = path.resolve(__dirname, 'styles.css');
    const css = fs.readFileSync(inputPath, 'utf8');
    const result = await postcss([tailwind(), autoprefixer])
      .process(css, { from: inputPath, to: outputPath });
    fs.writeFileSync(outputPath, result.css);
    console.log('Tailwind CSS built successfully.');
  } catch (err) {
    console.error('Error building Tailwind CSS:', err);
    process.exit(1);
  }
})();
