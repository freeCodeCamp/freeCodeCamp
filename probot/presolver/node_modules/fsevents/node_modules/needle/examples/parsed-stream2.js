//////////////////////////////////////////
// This example illustrates a more complex
// example of parsing a JSON stream.
//////////////////////////////////////////

var needle     = require('./../'),
    JSONStream = require('JSONStream');

var url  = 'http://jsonplaceholder.typicode.com/db';

// Initialize our GET request with our default (JSON) 
// parsers disabled.

var json = new needle.get(url, {parse: false})
    // And now interpret the stream as JSON, returning only the
    // title of all the posts.
    .pipe(new JSONStream.parse('posts.*.title'));

json.on('data', function (obj) {
  console.log('got title: \'' + obj + '\'');
})
