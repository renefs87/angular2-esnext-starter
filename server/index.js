'use strict';
let koa = require('koa');
let staticServe = require('koa-static');
let bodyParser = require('koa-bodyparser');
let config = require('./config');
let router = require('./router');
let fs = require('fs');
let http = require('http');
let https = require('https');

let enforceHttps = require('koa-sslify');

let app = koa();

app.use(staticServe(config.staticPath));

app.use(bodyParser());
app.use(router.routes());

// SSL options
var options = {
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.crt')
};

// app.use(enforceHttps());

http.createServer(app.callback()).listen(config.port);
https.createServer(options, app.callback()).listen(config.sslPort);

// app.listen(config.port);
// console.log(`Listening on port ${config.port}`);
