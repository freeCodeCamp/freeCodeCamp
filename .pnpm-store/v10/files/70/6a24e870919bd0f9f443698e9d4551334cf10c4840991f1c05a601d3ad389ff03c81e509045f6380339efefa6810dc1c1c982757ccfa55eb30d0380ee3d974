'use strict';
// TODO: remove from `core-js@4`
var $ = require('../internals/export');
var upsert = require('../internals/map-upsert');

// `WeakMap.prototype.upsert` method (replaced by `WeakMap.prototype.emplace`)
// https://github.com/tc39/proposal-upsert
$({ target: 'WeakMap', proto: true, real: true, forced: true }, {
  upsert: upsert
});
