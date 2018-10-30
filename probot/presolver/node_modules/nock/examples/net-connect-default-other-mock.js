/*
Default net connect.
Mock the different hostname:port.
Result: Nock allows request to proceed.
*/

var log = require('./_log');

var events = ['socket', 'response', 'end', 'data', 'error'];

var nock = require('../');

nock('http://someotherservice.com').get('/').reply(200, 'whaaa');

var http = require('http');
var req = http.get('http://www.google.com/', function(res) {
  console.log('request result: res.statusCode = %j', res.statusCode);
  events.forEach(log(res, 'res'));
});

events.forEach(log(req, 'req'));
