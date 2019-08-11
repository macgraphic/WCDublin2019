# WCDublin2019
Theme styles for WCDublin, using Campsite 2017 parent theme

## Features

The theme is using webpack to bundle the files:
  - postCSS to build the sass files
  - postcss-preset-env to create the polyfil
  - cssnano for compression
  - autoprefixer to generate the prefixer for IE 11
  - And the plugins minifyCSS and StyleLint for code validation
    - code validation just build valid code to build it pay attention to the logs

## Runnig the project

To run the project first you will need to install ```$ npm install``` the node modules, you can use yarn or npm for it. After installed you can work on develop mode ```$ npm run watch``` or creating the production code with ```$ npm run build ```

### Instalation
  - ```$ npm install```

### Working with watch mode
  - ```$ npm run watch```

### Build production code version
  - ```$ npm run build ```

### build just with sass
  - ```$ npm run sass```
