'use strict';
var $ = require('../internals/export');
var anObject = require('../internals/an-object');
var createProperty = require('../internals/create-property');
var iterate = require('../internals/iterate');
var getIteratorDirect = require('../internals/get-iterator-direct');

// `Iterator.prototype.toArray` method
// https://tc39.es/ecma262/#sec-iterator.prototype.toarray
$({ target: 'Iterator', proto: true, real: true }, {
  toArray: function toArray() {
    var result = [];
    var index = 0;
    iterate(getIteratorDirect(anObject(this)), function (element) {
      createProperty(result, index++, element);
    }, { IS_RECORD: true });
    return result;
  }
});
