'use strict';
var defineBuiltIn = require('../internals/define-built-in');
var uncurryThis = require('../internals/function-uncurry-this');
var toString = require('../internals/to-string');
var validateArgumentsLength = require('../internals/validate-arguments-length');

var $URLSearchParams = URLSearchParams;
var URLSearchParamsPrototype = $URLSearchParams.prototype;
var append = uncurryThis(URLSearchParamsPrototype.append);
var $delete = uncurryThis(URLSearchParamsPrototype['delete']);
var forEach = uncurryThis(URLSearchParamsPrototype.forEach);
var push = uncurryThis([].push);
var params = new $URLSearchParams('a=1&a=2&b=3');

params['delete']('a', 1);
// `undefined` case is a Chromium 117 bug
// https://bugs.chromium.org/p/v8/issues/detail?id=14222
params['delete']('b', undefined);

if (params + '' !== 'a=2') {
  defineBuiltIn(URLSearchParamsPrototype, 'delete', function (name /* , value */) {
    var length = arguments.length;
    var $value = length < 2 ? undefined : arguments[1];
    if (length && $value === undefined) return $delete(this, name);
    var entries = [];
    forEach(this, function (v, k) { // also validates `this`
      push(entries, { key: k, value: v });
    });
    validateArgumentsLength(length, 1);
    var key = toString(name);
    var value = toString($value);
    var index = 0;
    var entriesLength = entries.length;
    var entry;
    while (index < entriesLength) {
      entry = entries[index];
      $delete(this, entry.key);
      index++;
    }
    index = 0;
    while (index < entriesLength) {
      entry = entries[index++];
      if (!(entry.key === key && entry.value === value)) append(this, entry.key, entry.value);
    }
  }, { enumerable: true, unsafe: true });
}
