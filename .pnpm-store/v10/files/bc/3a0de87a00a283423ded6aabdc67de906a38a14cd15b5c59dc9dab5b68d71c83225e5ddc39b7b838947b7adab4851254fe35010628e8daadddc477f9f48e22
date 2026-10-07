'use strict';
require('../modules/es.array.iterator');
var DOMIterables = require('../internals/dom-iterables');
var globalThis = require('../internals/global-this');
var setToStringTag = require('../internals/set-to-string-tag');
var Iterators = require('../internals/iterators');

for (var COLLECTION_NAME in DOMIterables) {
  setToStringTag(globalThis[COLLECTION_NAME], COLLECTION_NAME);
  Iterators[COLLECTION_NAME] = Iterators.Array;
}
