
var inspect = require('util').inspect
var es = require('..')

es.pipe(                                    //pipe joins streams together
  process.openStdin(),                      //open stdin
  es.split(null, null, {trailing: false}),  //split stream to break on newlines
  es.map(function (data, callback) {        //turn this async function into a stream
    var obj = JSON.parse(data)              //parse input into json
    callback(null, inspect(obj) + '\n')            //render it nicely
  }),
  process.stdout                    // pipe it to stdout !
)

// cat data | node pretty.js
// { foo: 1 }
// { foo: 2 }
// { foo: 3, bar: 'test' }