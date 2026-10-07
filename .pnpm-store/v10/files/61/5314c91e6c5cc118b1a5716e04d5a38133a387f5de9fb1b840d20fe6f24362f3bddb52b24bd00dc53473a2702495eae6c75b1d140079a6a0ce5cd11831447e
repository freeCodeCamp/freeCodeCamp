'use strict';
// TODO: remove from `core-js@4`
var $ = require('../internals/export');
var upsert = require('../internals/map-upsert');

// `Map.prototype.upsert` method (replaced by `Map.prototype.emplace`)
// https://github.com/thumbsupep/proposal-upsert
$({ target: 'Map', proto: true, real: true, forced: true }, {
  upsert: upsert
});
