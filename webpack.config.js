const webpack = require('webpack');

module.exports = {
  entry: './main.js',
  devServer: {
    inline: true
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: '.',
    filename: 'dist.js'
  },
  module: {
    loaders: [
    {
      test: /\.jsx?$/,
      exclude: /(node_modules)/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015']
      }
    },
    {
      test: /\.scss$/,
      loaders: ['style', 'css', 'sass']
    }
    ]
  }
};
