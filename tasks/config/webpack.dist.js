'use strict';
let webpack = require('webpack');
let config = require('./webpack');
let private_config = require('./environments/production').client;

config.devtool = 'source-map';
config.plugins = [
  new webpack.optimize.CommonsChunkPlugin(
    'vendor', 'vendor.js'
  ),
  new webpack.DefinePlugin({
    ENVIRONMENT: JSON.stringify('production'),
    PRIVATE_CONFIG: JSON.stringify(private_config)
  }),
  new webpack.optimize.UglifyJsPlugin({
    minimize: true,
    mangle: false,
    comments: false
  })
];

module.exports = config;
