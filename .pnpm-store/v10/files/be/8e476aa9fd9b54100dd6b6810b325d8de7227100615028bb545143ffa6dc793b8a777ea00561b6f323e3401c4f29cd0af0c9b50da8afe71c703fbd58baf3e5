'use strict';
var $ = require('../internals/export');
var call = require('../internals/function-call');
var toObject = require('../internals/to-object');
var toPrimitive = require('../internals/to-primitive');
var toISOString = require('../internals/date-to-iso-string');
var classof = require('../internals/classof-raw');
var fails = require('../internals/fails');

var FORCED = fails(function () {
  return new Date(NaN).toJSON() !== null
    || call(Date.prototype.toJSON, { toISOString: function () { return 1; } }) !== 1;
});

// `Date.prototype.toJSON` method
// https://tc39.es/ecma262/#sec-date.prototype.tojson
$({ target: 'Date', proto: true, forced: FORCED }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  toJSON: function toJSON(key) {
    var O = toObject(this);
    var pv = toPrimitive(O, 'number');
    return typeof pv == 'number' && !isFinite(pv) ? null :
      (!('toISOString' in O) && classof(O) === 'Date') ? call(toISOString, O) : O.toISOString();
  }
});
