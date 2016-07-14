'use strict';
let webpack = require('webpack');
let config = require('./webpack');
let private_config = require('./environments/test').client;

config.plugins = [
  new webpack.DefinePlugin({
    ENVIRONMENT: JSON.stringify('test'),
    PRIVATE_CONFIG: JSON.stringify(private_config)
  })
];
config.devtool = 'inline-cheap-source-map';

module.exports = config;
