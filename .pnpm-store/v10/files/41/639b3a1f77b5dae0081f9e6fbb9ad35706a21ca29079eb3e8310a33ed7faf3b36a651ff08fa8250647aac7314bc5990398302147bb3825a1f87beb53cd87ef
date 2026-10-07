'use strict';
// TODO: Remove from `core-js@4`
var $ = require('../internals/export');
var uncurryThis = require('../internals/function-uncurry-this');

var $Date = Date;
var thisTimeValue = uncurryThis($Date.prototype.getTime);

// `Date.now` method
// https://tc39.es/ecma262/#sec-date.now
$({ target: 'Date', stat: true }, {
  now: function now() {
    return thisTimeValue(new $Date());
  }
});
