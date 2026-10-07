'use strict';
// TODO: remove from `core-js@4`
var $ = require('../internals/export');
var upsert = require('../internals/map-upsert');

// `Map.prototype.updateOrInsert` method (replaced by `Map.prototype.emplace`)
// https://github.com/thumbsupep/proposal-upsert
$({ target: 'Map', proto: true, real: true, name: 'upsert', forced: true }, {
  updateOrInsert: upsert
});
