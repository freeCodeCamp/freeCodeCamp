/*
Default net connect.
Mock the same hostname:port, different path.
Result: Nock does not allow request to proceed.
*/

var log = require('./_log');

var events = ['socket', 'response', 'end', 'data', 'error'];

var nock = require('../');

nock('http://example.com').get('/path').reply(200, 'whaaa');

var http = require('http');
var req = http.get('http://example.com/other-path');

req.once('error', function(err) {
  console.log(err.stack);
});

events.forEach(log(req, 'req'));
