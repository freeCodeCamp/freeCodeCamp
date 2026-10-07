'use strict';

/* eslint no-magic-numbers: 1 */

var test = require('tape');
var isCallable = require('../');
var hasToStringTag = require('has-tostringtag/shams')();
var v = require('es-value-fixtures');
var forEach = require('for-each');
var inspect = require('object-inspect');
var typedArrayNames = require('available-typed-arrays')();
var generators = require('make-generator-function')();
var arrows = require('make-arrow-function').list();
var asyncs = require('make-async-function').list();
var weirdlyCommentedArrowFn;
try {
	/* eslint-disable no-new-func */
	weirdlyCommentedArrowFn = Function('return cl/*/**/=>/**/ass - 1;')();
	/* eslint-enable no-new-func */
} catch (e) { /**/ }

var isIE68 = !(0 in [undefined]);
var isFirefox = typeof window !== 'undefined' && ('netscape' in window) && (/ rv:/).test(navigator.userAgent);
var fnToStringCoerces;
try {
	Function.prototype.toString.call(v.uncoercibleFnObject);
	fnToStringCoerces = true;
} catch (e) {
	fnToStringCoerces = false;
}

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

var proxy;
if (typeof Proxy === 'function') {
	try {
		proxy = new Proxy(function () {}, {});
		// for coverage
		proxy();
		String(proxy);
	} catch (_) {
		// Older engines throw a `TypeError` when `Function.prototype.toString` is called on a Proxy object.
		proxy = null;
	}
}

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
var hasDetectableClasses = classConstructor && Function.prototype.toString.call(classConstructor) === 'class Foo {}';

var commentedClass = invokeFunction('"use strict"; return class/*kkk*/\n//blah\n Bar\n//blah\n {}');
var commentedClassOneLine = invokeFunction('"use strict"; return class/**/A{}');
var classAnonymous = invokeFunction('"use strict"; return class{}');
var classAnonymousCommentedOneLine = invokeFunction('"use strict"; return class/*/*/{}');

test('not callables', function (t) {
	t.notOk(isCallable(), 'implicit undefined is not callable');

	forEach(v.nonFunctions.concat([
		Object(42),
		Object('foo'),
		NaN,
		[],
		/a/g,
		new RegExp('a', 'g'),
		new Date()
	]), function (nonFunction) {
		if (fnToStringCoerces && nonFunction === v.coercibleFnObject) {
			t.comment('FF 3.6 has a Function toString that coerces its receiver, so this test is skipped');
			return;
		}
		if (nonFunction != null) { // eslint-disable-line eqeqeq
			if (isFirefox) {
			// Firefox 3 throws some kind of *object* here instead of a proper error
				t['throws'](
					function () { Function.prototype.toString.call(nonFunction); },
					inspect(nonFunction) + ' can not be used with Function toString'
				);
			} else {
				t['throws'](
					function () { Function.prototype.toString.call(nonFunction); },
					TypeError,
					inspect(nonFunction) + ' can not be used with Function toString'
				);
			}
		}
		t.equal(isCallable(nonFunction), false, inspect(nonFunction) + ' is not callable');
	});

	t.test('non-function with function in its [[Prototype]] chain', function (st) {
		var Foo = function Bar() {};
		Foo.prototype = noop;
		st.equal(isCallable(Foo), true, 'sanity check: Foo is callable');
		st.equal(isCallable(new Foo()), false, 'instance of Foo is not callable');
		st.end();
	});

	t.end();
});

test('@@toStringTag', { skip: !hasToStringTag }, function (t) {
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

test('Functions', function (t) {
	t.ok(isCallable(noop), 'function is callable');
	t.ok(isCallable(classFake), 'function with name containing "class" is callable');
	t.ok(isCallable(returnClass), 'function with string " class " is callable');
	t.ok(isCallable(isCallable), 'isCallable is callable');
	t.end();
});

test('Typed Arrays', { skip: typedArrayNames.length === 0 }, function (st) {
	forEach(typedArrayNames, function (typedArray) {
		st.ok(isCallable(global[typedArray]), typedArray + ' is callable');
	});
	st.end();
});

test('Generators', { skip: generators.length === 0 }, function (t) {
	forEach(generators, function (genFn) {
		t.ok(isCallable(genFn), 'generator function ' + genFn + ' is callable');
	});
	t.end();
});

test('Arrow functions', { skip: arrows.length === 0 }, function (t) {
	forEach(arrows, function (arrowFn) {
		t.ok(isCallable(arrowFn), 'arrow function ' + arrowFn + ' is callable');
	});
	t.ok(isCallable(weirdlyCommentedArrowFn), 'weirdly commented arrow functions are callable');
	t.end();
});

test('"Class" constructors', {
	skip: !classConstructor || !commentedClass || !commentedClassOneLine || !classAnonymous, todo: !hasDetectableClasses
}, function (t) {
	if (!hasDetectableClasses) {
		t.comment('WARNING: This engine does not support detectable classes');
	}
	t.notOk(isCallable(classConstructor), 'class constructors are not callable');
	t.notOk(isCallable(commentedClass), 'class constructors with comments in the signature are not callable');
	t.notOk(isCallable(commentedClassOneLine), 'one-line class constructors with comments in the signature are not callable');
	t.notOk(isCallable(classAnonymous), 'anonymous class constructors are not callable');
	t.notOk(isCallable(classAnonymousCommentedOneLine), 'anonymous one-line class constructors with comments in the signature are not callable');
	t.end();
});

test('`async function`s', { skip: asyncs.length === 0 }, function (t) {
	forEach(asyncs, function (asyncFn) {
		t.ok(isCallable(asyncFn), '`async function` ' + asyncFn + ' is callable');
	});
	t.end();
});

test('proxies of functions', { skip: !proxy }, function (t) {
	t.equal(isCallable(proxy), true, 'proxies of functions are callable');
	t.end();
});

test('throwing functions', function (t) {
	t.plan(1);

	var thrower = function (a) { return a.b; };
	t.ok(isCallable(thrower), 'a function that throws is callable');
});

test('DOM', function (t) {
	/* eslint-env browser */

	t.test('document.all', { skip: typeof document !== 'object' }, function (st) {
		st.notOk(isCallable(document), 'document is not callable');

		var all = document.all;
		var isFF3 = !isIE68 && Object.prototype.toString(all) === Object.prototype.toString.call(document.all); // this test is true in IE 6-8 also
		var expected = false;
		if (!isFF3) {
			try {
				expected = document.all('') == null; // eslint-disable-line eqeqeq
			} catch (e) { /**/ }
		}
		st.equal(isCallable(document.all), expected, 'document.all is ' + (isFF3 ? 'not ' : '') + 'callable');

		st.end();
	});

	forEach([
		'HTMLElement',
		'HTMLAnchorElement'
	], function (name) {
		var constructor = global[name];

		t.test(name, { skip: !constructor }, function (st) {
			st.match(typeof constructor, /^(?:function|object)$/, name + ' is a function or object');

			var callable = isCallable(constructor);
			st.equal(typeof callable, 'boolean');

			if (callable) {
				st.doesNotThrow(
					function () { Function.prototype.toString.call(constructor); },
					'anything this library claims is callable should be accepted by Function toString'
				);
			} else {
				st['throws'](
					function () { Function.prototype.toString.call(constructor); },
					TypeError,
					'anything this library claims is not callable should not be accepted by Function toString'
				);
			}

			st.end();
		});
	});

	t.end();
});
