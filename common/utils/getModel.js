var loopback = require('loopback');
module.exports = function(modelName) {
  var app;
  if (loopback.isBrowser) {
    app = require('lb');
  } else {
    app = require('../../server/server.js');
  }
  return app.models[modelName];
};
