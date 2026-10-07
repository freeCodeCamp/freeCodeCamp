'use strict';
var $ = require('../internals/export');
var uncurryThis = require('../internals/function-uncurry-this');
var aSet = require('../internals/a-set');
var iterate = require('../internals/set-iterate');
var toString = require('../internals/to-string');

var arrayJoin = uncurryThis([].join);
var push = uncurryThis([].push);

// `Set.prototype.join` method
// https://github.com/tc39/proposal-collection-methods
$({ target: 'Set', proto: true, real: true, forced: true }, {
  join: function join(separator) {
    var set = aSet(this);
    var sep = separator === undefined ? ',' : toString(separator);
    var array = [];
    iterate(set, function (value) {
      push(array, value);
    });
    return arrayJoin(array, sep);
  }
});
