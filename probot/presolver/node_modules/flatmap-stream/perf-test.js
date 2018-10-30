var es = require('event-stream');
var fms = require('./index.js');
var data = require('./test/data.js');

var startTime = Date.now();
es.readArray(data)
.pipe(fms(function(data, callback) {
  callback(null, data);
}))
.pipe(es.writeArray(function(err, out) {
  var endTime = Date.now();
  console.log(endTime - startTime);
}));