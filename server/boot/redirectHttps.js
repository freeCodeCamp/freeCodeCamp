var path = require('path');
var loopback = require('loopback');
var express = require('express');

var port = 1337;

// this will listen to traffic on port 1337
// The purpose is to redirect any user who is direct to https
// instead of http by mistake. Our nginx proxy server will listen
// for https traffic and serve from this port on this server.
// the view being send will have a short timeout and a redirect
module.exports = function(loopbackApp) {
  var app = express();
  app.set('view engine', 'jade');
  // views in ../views'
  app.set('views', path.join(__dirname, '..'));

  // server static files
  app.use(loopback.static(path.join(
    __dirname,
    '../',
    '../public'
  )));

  // all traffic will be redirected on page load;
  app.use(function(req, res) {
    return res.render('views/redirect-https');
  });

  loopbackApp.once('started', function() {
    app.listen(port, function() {
      console.log('https redirect lisenting on port %s', port);
    });
  });
};
