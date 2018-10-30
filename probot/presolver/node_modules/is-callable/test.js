'use strict';

/* eslint no-magic-numbers: 1 */

var test = require('tape');
var isCallable = require('./');
var hasSymbols = typeof Symbol === 'function' && typeof Symbol('foo') === 'symbol';
var genFn = require('make-generator-function');
var arrowFn = require('make-arrow-function')();
var weirdlyCommentedArrowFn;
var asyncFn;
var asyncArrowFn;
try {
	/* eslint no-new-func: 0 */
	weirdlyCommentedArrowFn = Function('return cl/*/**/=>/**/ass - 1;')();
	asyncFn = Function('return async function foo() {};')();
	asyncArrowFn = Function('return async () => {};')();
} catch (e) { /**/ }
var forEach = require('foreach');

var noop = function () {};
var classFake = function classFake() { }; // eslint-disable-line func-name-matching
var returnClass = function () { return ' class '; };
var return3 = function () { return 3; };
/* for coverage */
noop();
classFake();
returnClass();
return3();
/* end for coverage */

var invokeFunction = function invokeFunctionString(str) {
	var result;
	try {
		/* eslint-disable no-new-func */
		var fn = Function(str);
		/* eslint-enable no-new-func */
		result = fn();
	} catch (e) {}
	return result;
};

var classConstructor = invokeFunction('"use strict"; return class Foo {}');

var commentedClass = invokeFunction('"use strict"; return class/*kkk*/\n//blah\n Bar\n//blah\n {}');
var commentedClassOneLine = invokeFunction('"use strict"; return class/**/A{}');
var classAnonymous = invokeFunction('"use strict"; return class{}');
var classAnonymousCommentedOneLine = invokeFunction('"use strict"; return class/*/*/{}');

test('not callables', function (t) {
	t.test('non-number/string primitives', function (st) {
		st.notOk(isCallable(), 'undefined is not callable');
		st.notOk(isCallable(null), 'null is not callable');
		st.notOk(isCallable(false), 'false is not callable');
		st.notOk(isCallable(true), 'true is not callable');
		st.end();
	});

	t.notOk(isCallable([]), 'array is not callable');
	t.notOk(isCallable({}), 'object is not callable');
	t.notOk(isCallable(/a/g), 'regex literal is not callable');
	t.notOk(isCallable(new RegExp('a', 'g')), 'regex object is not callable');
	t.notOk(isCallable(new Date()), 'new Date() is not callable');

	t.test('numbers', function (st) {
		st.notOk(isCallable(42), 'number is not callable');
		st.notOk(isCallable(Object(42)), 'number object is not callable');
		st.notOk(isCallable(NaN), 'NaN is not callable');
		st.notOk(isCallable(Infinity), 'Infinity is not callable');
		st.end();
	});

	t.test('strings', function (st) {
		st.notOk(isCallable('foo'), 'string primitive is not callable');
		st.notOk(isCallable(Object('foo')), 'string object is not callable');
		st.end();
	});

	t.test('non-function with function in its [[Prototype]] chain', function (st) {
		var Foo = function Bar() {};
		Foo.prototype = noop;
		st.equal(true, isCallable(Foo), 'sanity check: Foo is callable');
		st.equal(false, isCallable(new Foo()), 'instance of Foo is not callable');
		st.end();
	});

	t.end();
});

test('@@toStringTag', { skip: !hasSymbols || !Symbol.toStringTag }, function (t) {
	var fakeFunction = {
		toString: function () { return String(return3); },
		valueOf: return3
	};
	fakeFunction[Symbol.toStringTag] = 'Function';
	t.equal(String(fakeFunction), String(return3));
	t.equal(Number(fakeFunction), return3());
	t.notOk(isCallable(fakeFunction), 'fake Function with @@toStringTag "Function" is not callable');
	t.end();
});

var typedArrayNames = [
	'Int8Array',
	'Uint8Array',
	'Uint8ClampedArray',
	'Int16Array',
	'Uint16Array',
	'Int32Array',
	'Uint32Array',
	'Float32Array',
	'Float64Array'
];

test('Functions', function (t) {
	t.ok(isCallable(noop), 'function is callable');
	t.ok(isCallable(classFake), 'function with name containing "class" is callable');
	t.ok(isCallable(returnClass), 'function with string " class " is callable');
	t.ok(isCallable(isCallable), 'isCallable is callable');
	t.end();
});

test('Typed Arrays', function (st) {
	forEach(typedArrayNames, function (typedArray) {
		/* istanbul ignore if : covered in node 0.6 */
		if (typeof global[typedArray] === 'undefined') {
			st.comment('# SKIP typed array "' + typedArray + '" not supported');
		} else {
			st.ok(isCallable(global[typedArray]), typedArray + ' is callable');
		}
	});
	st.end();
});

test('Generators', { skip: !genFn }, function (t) {
	t.ok(isCallable(genFn), 'generator function is callable');
	t.end();
});

test('Arrow functions', { skip: !arrowFn }, function (t) {
	t.ok(isCallable(arrowFn), 'arrow function is callable');
	t.ok(isCallable(weirdlyCommentedArrowFn), 'weirdly commented arrow functions are callable');
	t.end();
});

test('"Class" constructors', { skip: !classConstructor || !commentedClass || !commentedClassOneLine || !classAnonymous }, function (t) {
	t.notOk(isCallable(classConstructor), 'class constructors are not callable');
	t.notOk(isCallable(commentedClass), 'class constructors with comments in the signature are not callable');
	t.notOk(isCallable(commentedClassOneLine), 'one-line class constructors with comments in the signature are not callable');
	t.notOk(isCallable(classAnonymous), 'anonymous class constructors are not callable');
	t.notOk(isCallable(classAnonymousCommentedOneLine), 'anonymous one-line class constructors with comments in the signature are not callable');
	t.end();
});

test('`async function`s', { skip: !asyncFn }, function (t) {
	t.ok(isCallable(asyncFn), '`async function`s are callable');
	t.ok(isCallable(asyncArrowFn), '`async` arrow functions are callable');
	t.end();
});
