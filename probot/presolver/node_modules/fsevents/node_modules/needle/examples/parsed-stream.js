//////////////////////////////////////////
// This example demonstrates what happends
// when you use the built-in JSON parser.
//////////////////////////////////////////

var fs     = require('fs'),
    stream = require('stream'),
    needle = require('./../');

var url    = 'http://ip.jsontest.com/',
    resp   = needle.get(url, { parse: true });

resp.on('readable', function(obj) {
  var chunk;

  while (chunk = this.read()) {
    console.log('root = ', chunk);
  }
});

resp.on('done', function() {
  console.log('Done.');
});
