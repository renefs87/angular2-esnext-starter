'use strict';
let miniLr = require('mini-lr');
let config = require('./config').liveReload;
let liveReload;
let fs = require('fs');
let http = require('http');
let https = require('https');

module.exports = function() {
  return function() {

    var options = {
      key: fs.readFileSync('server.key'),
      cert: fs.readFileSync('server.crt')
    };

    liveReload = miniLr(options);

    liveReload.listen(config.port);
  }
};

module.exports.notifyChanged = function (files) {
  liveReload.changed({
    body: {
      files: files
    }
  });
};
