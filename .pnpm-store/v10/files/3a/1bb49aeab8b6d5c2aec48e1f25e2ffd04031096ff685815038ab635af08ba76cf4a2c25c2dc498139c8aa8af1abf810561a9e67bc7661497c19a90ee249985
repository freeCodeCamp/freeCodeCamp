'use strict';
var $ = require('../internals/export');
var WeakMapHelpers = require('../internals/weak-map-helpers');
var createCollectionOf = require('../internals/collection-of');

// `WeakMap.of` method
// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.of
$({ target: 'WeakMap', stat: true, forced: true }, {
  of: createCollectionOf(WeakMapHelpers.WeakMap, WeakMapHelpers.set, true)
});
