var assert = require('tap');

var t = require('./lib/util');

assert.equal(t.isArray([]), true);
assert.equal(t.isArray({}), false);

assert.equal(t.isBoolean(null), false);
assert.equal(t.isBoolean(true), true);
assert.equal(t.isBoolean(false), true);

assert.equal(t.isNull(null), true);
assert.equal(t.isNull(undefined), false);
assert.equal(t.isNull(false), false);
assert.equal(t.isNull(), false);

assert.equal(t.isNullOrUndefined(null), true);
assert.equal(t.isNullOrUndefined(undefined), true);
assert.equal(t.isNullOrUndefined(false), false);
assert.equal(t.isNullOrUndefined(), true);

assert.equal(t.isNumber(null), false);
assert.equal(t.isNumber('1'), false);
assert.equal(t.isNumber(1), true);

assert.equal(t.isString(null), false);
assert.equal(t.isString('1'), true);
assert.equal(t.isString(1), false);

assert.equal(t.isSymbol(null), false);
assert.equal(t.isSymbol('1'), false);
assert.equal(t.isSymbol(1), false);
assert.equal(t.isSymbol(Symbol()), true);

assert.equal(t.isUndefined(null), false);
assert.equal(t.isUndefined(undefined), true);
assert.equal(t.isUndefined(false), false);
assert.equal(t.isUndefined(), true);

assert.equal(t.isRegExp(null), false);
assert.equal(t.isRegExp('1'), false);
assert.equal(t.isRegExp(new RegExp()), true);

assert.equal(t.isObject({}), true);
assert.equal(t.isObject([]), true);
assert.equal(t.isObject(new RegExp()), true);
assert.equal(t.isObject(new Date()), true);

assert.equal(t.isDate(null), false);
assert.equal(t.isDate('1'), false);
assert.equal(t.isDate(new Date()), true);

assert.equal(t.isError(null), false);
assert.equal(t.isError({ err: true }), false);
assert.equal(t.isError(new Error()), true);

assert.equal(t.isFunction(null), false);
assert.equal(t.isFunction({ }), false);
assert.equal(t.isFunction(function() {}), true);

assert.equal(t.isPrimitive(null), true);
assert.equal(t.isPrimitive(''), true);
assert.equal(t.isPrimitive(0), true);
assert.equal(t.isPrimitive(new Date()), false);

assert.equal(t.isBuffer(null), false);
assert.equal(t.isBuffer({}), false);
assert.equal(t.isBuffer(new Buffer(0)), true);
