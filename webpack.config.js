const HtmlPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/app',
  output: {
    filename: 'app.js',
    path: path.resolve('public')
  },
  devtool: 'source-map',
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  },
  devServer: {
    port: 8000,
    open: true
  },
  plugins: [
    new HtmlPlugin({
      template: 'src/index.html'
    })
  ]
};
