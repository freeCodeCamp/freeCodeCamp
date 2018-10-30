
var inspect = require('util').inspect

if(!module.parent) {
  var map = require('..')             //load map-stream
  var es = require('event-stream')    //load event-stream
  es.pipe(                            //pipe joins streams together
    process.openStdin(),              //open stdin
    es.split(),                       //split stream to break on newlines
    map(function (data, callback) {   //turn this async function into a stream
      var j
      try {
        j = JSON.parse(data)          //try to parse input into json
      } catch (err) {
        return callback(null, data)   //if it fails just pass it anyway
      }
      callback(null, inspect(j))      //render it nicely
    }),
    process.stdout                    // pipe it to stdout !
    )
  }

// run this
//
// curl -sS registry.npmjs.org/event-stream | node pretty.js
//
