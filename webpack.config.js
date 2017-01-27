import webpack from 'webpack';
import path from 'path';

export default {
  entry: "./public/js/app.js",
  debug: true,
  noInfo: false,
  output: {
    path: __dirname + "/public",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'
      }
    ]
  }
};
