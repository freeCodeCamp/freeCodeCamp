'use strict';
var $ = require('../internals/export');
var union = require('../internals/set-union');
var setMethodGetKeysBeforeCloning = require('../internals/set-method-get-keys-before-cloning-detection');
var setMethodAcceptSetLike = require('../internals/set-method-accept-set-like');

var FORCED = !setMethodAcceptSetLike('union') || !setMethodGetKeysBeforeCloning('union');

// `Set.prototype.union` method
// https://tc39.es/ecma262/#sec-set.prototype.union
$({ target: 'Set', proto: true, real: true, forced: FORCED }, {
  union: union
});
