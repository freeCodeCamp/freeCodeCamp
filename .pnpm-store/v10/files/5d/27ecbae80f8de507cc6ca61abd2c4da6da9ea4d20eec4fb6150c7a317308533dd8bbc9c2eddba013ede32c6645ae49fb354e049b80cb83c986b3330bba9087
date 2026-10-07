'use strict';
var $ = require('../internals/export');
var SetHelpers = require('../internals/set-helpers');
var createCollectionFrom = require('../internals/collection-from');

// `Set.from` method
// https://tc39.github.io/proposal-setmap-offrom/#sec-set.from
$({ target: 'Set', stat: true, forced: true }, {
  from: createCollectionFrom(SetHelpers.Set, SetHelpers.add, false)
});
