var path = require('path');

module.exports = {
  devtool: 'inline-source-map',
  entry: './client',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/public/js'),
    publicPath: 'public/'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: [
          path.join(__dirname, 'client/'),
          path.join(__dirname, 'common/')
        ],
        loaders: [
          'babel-loader'
        ]
      },
      {
        test: /\.json$/,
        loaders: [
          'json-loader'
        ]
      }
    ]
  },
  plugins: []
};
