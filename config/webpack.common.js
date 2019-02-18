const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: {
    app: path.resolve(__dirname, '../src/index.js')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{ loader: 'babel-loader' }]
      },
      {
        test: /\.(png|jpg|jpeg|svg)$/,
        exclude: /node_modules/,
        use: [{ loader: 'file-loader' }]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      root: path.resolve(__dirname, '../')
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/index.html'),
      favicon: path.resolve(__dirname, '../assets/favicon.ico')
    }),
    new Dotenv()
  ],
  node: {
    fs: 'empty'
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/'
  }
};
