/*
Disabled net connect.
Mock the different hostname:port.
Result: Nock does not allow request to proceed.
*/

var log = require('./_log');

var events = ['socket', 'response', 'end', 'data', 'error'];

var nock = require('../');

nock.disableNetConnect();

nock('http://someotherservice.com').get('/').reply(200, 'whaaa');

var http = require('http');
var req = http.get('http://www.google.com/');

req.once('error', function(err) {
  console.log(err.stack);
});

events.forEach(log(req, 'req'));
