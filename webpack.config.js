var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index_bundle.js'
  },
  plugins: [new HtmlWebpackPlugin()],
  devServer: {
    serveIndex: true,
    index: 'index.html',
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  }
};