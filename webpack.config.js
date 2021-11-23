const path = require('path');

const outputPath = path.resolve(__dirname, 'dist')

module.export = { 
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: outputPath 
  }
}



