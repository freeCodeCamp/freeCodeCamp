'use strict';
var $ = require('../internals/export');
var WeakMapHelpers = require('../internals/weak-map-helpers');
var createCollectionFrom = require('../internals/collection-from');

// `WeakMap.from` method
// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.from
$({ target: 'WeakMap', stat: true, forced: true }, {
  from: createCollectionFrom(WeakMapHelpers.WeakMap, WeakMapHelpers.set, true)
});
