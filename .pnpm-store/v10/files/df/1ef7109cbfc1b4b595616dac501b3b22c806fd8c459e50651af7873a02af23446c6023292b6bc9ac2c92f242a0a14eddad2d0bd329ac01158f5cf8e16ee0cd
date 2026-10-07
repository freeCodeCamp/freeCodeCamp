'use strict';
var $ = require('../internals/export');
var WeakSetHelpers = require('../internals/weak-set-helpers');
var createCollectionOf = require('../internals/collection-of');

// `WeakSet.of` method
// https://tc39.github.io/proposal-setmap-offrom/#sec-weakset.of
$({ target: 'WeakSet', stat: true, forced: true }, {
  of: createCollectionOf(WeakSetHelpers.WeakSet, WeakSetHelpers.add, false)
});
