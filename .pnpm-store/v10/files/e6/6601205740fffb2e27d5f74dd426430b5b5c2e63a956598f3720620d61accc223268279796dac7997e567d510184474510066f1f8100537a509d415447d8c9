'use strict';
var $ = require('../internals/export');
var createProperty = require('../internals/create-property');
var getBuiltIn = require('../internals/get-built-in');
var uncurryThis = require('../internals/function-uncurry-this');
var aCallable = require('../internals/a-callable');
var requireObjectCoercible = require('../internals/require-object-coercible');
var toPropertyKey = require('../internals/to-property-key');
var iterate = require('../internals/iterate');
var fails = require('../internals/fails');

// eslint-disable-next-line es/no-object-groupby -- testing
var nativeGroupBy = Object.groupBy;
var create = getBuiltIn('Object', 'create');
var push = uncurryThis([].push);

// https://bugs.webkit.org/show_bug.cgi?id=271524
var DOES_NOT_WORK_WITH_PRIMITIVES = !nativeGroupBy || fails(function () {
  return nativeGroupBy('ab', function (it) {
    return it;
  }).a.length !== 1;
});

// `Object.groupBy` method
// https://tc39.es/ecma262/#sec-object.groupby
$({ target: 'Object', stat: true, forced: DOES_NOT_WORK_WITH_PRIMITIVES }, {
  groupBy: function groupBy(items, callbackfn) {
    requireObjectCoercible(items);
    aCallable(callbackfn);
    var obj = create(null);
    var k = 0;
    iterate(items, function (value) {
      var key = toPropertyKey(callbackfn(value, k++));
      // in some IE versions, `hasOwnProperty` returns incorrect result on integer keys
      // but since it's a `null` prototype object, we can safely use `in`
      if (key in obj) push(obj[key], value);
      else createProperty(obj, key, [value]);
    });
    return obj;
  }
});
