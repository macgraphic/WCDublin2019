const path = require('path');
const loaders = require('./loaders');
const plugins = require('./plugins');

module.exports = {
  entry: ["./src/app.js"],
  module: {
    rules: [
      loaders.JSLoader
    ]
  },
  output: {
    path: path.resolve(__dirname, "../"),
    filename: "./dublin.js"
  },
  module: {
    rules: [
      loaders.CSSLoader,
    ]
  },
  plugins: [
    plugins.StyleLintPlugin,
    plugins.MiniCssExtractPlugin,
  ],
};
