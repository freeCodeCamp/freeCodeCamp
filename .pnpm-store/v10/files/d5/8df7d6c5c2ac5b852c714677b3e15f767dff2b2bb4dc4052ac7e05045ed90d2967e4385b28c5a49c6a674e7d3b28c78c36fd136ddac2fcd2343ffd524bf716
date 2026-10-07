'use strict';
var $ = require('../internals/export');
var aWeakMap = require('../internals/a-weak-map');
var remove = require('../internals/weak-map-helpers').remove;

// `WeakMap.prototype.deleteAll` method
// https://github.com/tc39/proposal-collection-methods
$({ target: 'WeakMap', proto: true, real: true, forced: true }, {
  deleteAll: function deleteAll(/* ...elements */) {
    var collection = aWeakMap(this);
    var allDeleted = true;
    var wasDeleted;
    for (var k = 0, len = arguments.length; k < len; k++) {
      wasDeleted = remove(collection, arguments[k]);
      allDeleted = allDeleted && wasDeleted;
    } return !!allDeleted;
  }
});
