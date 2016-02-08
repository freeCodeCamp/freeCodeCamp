// this ensures node understands the future
require('babel-register');

var startTime = Date.now();
var timeoutHandler;
// this is where server starts booting up
var app = require('./server');
console.log('waiting for db to connect');


var onConnect = function() {
  console.log('db connected in %s ms', Date.now() - startTime);
  if (timeoutHandler) {
    clearTimeout(timeoutHandler);
  }
  app.start();
};

var timeoutHandler = setTimeout(function() {
  var message =
    'db did not after  ' +
    (Date.now() - startTime) +
    ' ms connect crashing hard';

  console.log(message);
  // purposely shutdown server
  // pm2 should restart this in production
  throw new Error(message);
}, 15000);

app.dataSources.db.on('connected', onConnect);
