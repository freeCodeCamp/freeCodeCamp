'use strict';
var $ = require('../internals/export');
var WeakSetHelpers = require('../internals/weak-set-helpers');
var createCollectionFrom = require('../internals/collection-from');

// `WeakSet.from` method
// https://tc39.github.io/proposal-setmap-offrom/#sec-weakset.from
$({ target: 'WeakSet', stat: true, forced: true }, {
  from: createCollectionFrom(WeakSetHelpers.WeakSet, WeakSetHelpers.add, false)
});
