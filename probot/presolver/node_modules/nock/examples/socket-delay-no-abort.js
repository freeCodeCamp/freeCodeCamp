var http = require('http');
var nock = require('../');
var log = require('./_log');
var events = ['socket', 'response', 'end', 'data', 'timeout', 'error'];

nock('http://delayconnection.com').
  get('/').
  socketDelay(2000).
  reply(200, 'hey');

var req = http.get('http://delayconnection.com', function(res) {
  events.forEach(log(res, 'res'));
});

events.forEach(log(req, 'req'));
