'use strict';

var es = require('../')
  , it = require('it-is')

exports ['flatmap'] = function (test) {
  es.readArray([[1], [1, 2], [1, 2, 3]])
    .pipe(es.flatmap(function(e, cb) {
      cb(null, e + 1)
    }))
    .pipe(es.writeArray(function(error, array) {
      test.deepEqual([2, 2, 3, 2, 3, 4], array)
      test.end()
    }))
}

require('./helper')(module)
