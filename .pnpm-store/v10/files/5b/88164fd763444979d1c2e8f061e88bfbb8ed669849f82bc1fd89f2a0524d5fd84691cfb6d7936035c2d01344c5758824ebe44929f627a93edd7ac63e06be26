'use strict';

var functionsHaveNames = require('functions-have-names')();
var arrows = require('make-arrow-function').list();
var generators = require('make-generator-function')();
var asyncs = require('make-async-function').list();
var IsCallable = require('is-callable');
var forEach = require('for-each');

var foo = Object(function foo() {});
var anon = Object(function () {});
var evalled = Object(Function()); // eslint-disable-line no-new-func

module.exports = function (getName, t) {
	t.test('functions', function (st) {
		if (functionsHaveNames) {
			st.equal(getName(foo), foo.name, 'foo has name "foo"');
			st.equal(getName(anon), anon.name, 'anonymous function has name of empty string');
			st.equal(getName(evalled), evalled.name, 'eval-d function has name "anonymous" (or empty string)');
		}
		st.equal(getName(foo), 'foo', 'foo has name "foo"');
		st.equal(getName(anon), '', 'anonymous function has name of empty string');
		var evalledName = getName(evalled);
		st.equal(evalledName === 'anonymous' || evalledName === '', true, 'eval-d function has name "anonymous" (or empty string');
		st.end();
	});

	t.test('arrow functions', { skip: arrows.length === 0 }, function (st) {
		st.equal(true, functionsHaveNames, 'functions have names in any env with arrow functions');
		forEach(arrows, function (arrowFn) {
			st.equal(getName(arrowFn), arrowFn.name, 'arrow function name matches for ' + arrowFn);
		});
		st.end();
	});

	t.test('generators', { skip: generators.length === 0 }, function (st) {
		st.equal(true, functionsHaveNames, 'functions have names in any env with generator functions');
		forEach(generators, function (genFn) {
			st.equal(getName(genFn), genFn.name, 'generator function name matches for ' + genFn);
		});
		st.end();
	});

	t.test('asyncs', { skip: asyncs.length === 0 }, function (st) {
		st.equal(true, functionsHaveNames, 'functions have names in any env with async functions');
		forEach(asyncs, function (asyncFn) {
			st.equal(getName(asyncFn), asyncFn.name, 'async function name matches for ' + asyncFn);
		});
		st.end();
	});

	t.test('Function.prototype.name', function (st) {
		st.equal(getName(function before() {}), 'before', 'function prior to accessing Function.prototype has the right name');
		var protoName = getName(Function.prototype);
		// on <= node v2.5, this is "Empty"; on Opera 12.1, "Function.prototype" - otherwise, the empty string
		st.equal(protoName === '' || protoName === 'Empty' || protoName === 'Function.prototype', true, 'Function.prototype has the right name');
		st.equal(getName(function after() {}), 'after', 'function after accessing Function.prototype has the right name');

		st.end();
	});

	t.test('DOM', function (st) {
		/* eslint-env browser */

		st.test('document.all', { skip: typeof document !== 'object' }, function (s2t) {
			s2t['throws'](
				function () { getName(document.all); },
				TypeError,
				'a document.all has no name'
			);

			s2t.end();
		});

		forEach([
			'HTMLElement',
			'HTMLAnchorElement'
		], function (name) {
			var constructor = global[name];

			st.test(name, { skip: !constructor }, function (s2t) {
				s2t.match(typeof constructor, /^(?:function|object)$/, name + ' is a function or an object');

				if (IsCallable(constructor)) {
					try {
						s2t.equal(getName(constructor), name, name + ' has the right name');
					} catch (e) {
						s2t.fail(e);
					}
				} else {
					s2t['throws'](
						function () { getName(constructor); },
						TypeError,
						name + ' is not callable'
					);
				}

				s2t.end();
			});
		});

		st.end();
	});
};
