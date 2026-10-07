'use strict';
var $ = require('../internals/export');
var getCompositeKeyNode = require('../internals/composite-key');
var getBuiltIn = require('../internals/get-built-in');
var apply = require('../internals/function-apply');

// https://github.com/tc39/proposal-richer-keys/tree/master/compositeKey
$({ global: true, forced: true }, {
  compositeSymbol: function compositeSymbol() {
    if (arguments.length === 1 && typeof arguments[0] == 'string') return getBuiltIn('Symbol')['for'](arguments[0]);
    return apply(getCompositeKeyNode, null, arguments).get('symbol', getBuiltIn('Symbol'));
  }
});
