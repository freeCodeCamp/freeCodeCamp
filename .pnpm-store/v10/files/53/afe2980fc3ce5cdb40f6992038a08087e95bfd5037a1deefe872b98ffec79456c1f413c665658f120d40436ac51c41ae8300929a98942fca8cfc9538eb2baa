'use strict';
var $ = require('../internals/export');
var MapHelpers = require('../internals/map-helpers');
var createCollectionOf = require('../internals/collection-of');

// `Map.of` method
// https://tc39.github.io/proposal-setmap-offrom/#sec-map.of
$({ target: 'Map', stat: true, forced: true }, {
  of: createCollectionOf(MapHelpers.Map, MapHelpers.set, true)
});
