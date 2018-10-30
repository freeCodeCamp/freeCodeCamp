/*
Default net connect.
No mock.
Result: Nock allows request to proceed.
*/

var log = require('./_log');

var events = ['socket', 'response', 'end', 'data', 'error'];

var http = require('http');
console.log('making request...')
var req = http.get('http://www.google.com/', function(res) {
  console.log('request result: res.statusCode = %j', res.statusCode);
  events.forEach(log(res, 'res'));
});

events.forEach(log(req, 'req'));
