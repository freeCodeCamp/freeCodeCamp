'use strict';

var test = require('tape');

var callBound = require('../callBound');

test('callBound', function (t) {
	// static primitive
	t.equal(callBound('Array.length'), Array.length, 'Array.length yields itself');
	t.equal(callBound('%Array.length%'), Array.length, '%Array.length% yields itself');

	// static non-function object
	t.equal(callBound('Array.prototype'), Array.prototype, 'Array.prototype yields itself');
	t.equal(callBound('%Array.prototype%'), Array.prototype, '%Array.prototype% yields itself');
	t.equal(callBound('Array.constructor'), Array.constructor, 'Array.constructor yields itself');
	t.equal(callBound('%Array.constructor%'), Array.constructor, '%Array.constructor% yields itself');

	// static function
	t.equal(callBound('Date.parse'), Date.parse, 'Date.parse yields itself');
	t.equal(callBound('%Date.parse%'), Date.parse, '%Date.parse% yields itself');

	// prototype primitive
	t.equal(callBound('Error.prototype.message'), Error.prototype.message, 'Error.prototype.message yields itself');
	t.equal(callBound('%Error.prototype.message%'), Error.prototype.message, '%Error.prototype.message% yields itself');

	// prototype function
	t.notEqual(callBound('Object.prototype.toString'), Object.prototype.toString, 'Object.prototype.toString does not yield itself');
	t.notEqual(callBound('%Object.prototype.toString%'), Object.prototype.toString, '%Object.prototype.toString% does not yield itself');
	t.equal(callBound('Object.prototype.toString')(true), Object.prototype.toString.call(true), 'call-bound Object.prototype.toString calls into the original');
	t.equal(callBound('%Object.prototype.toString%')(true), Object.prototype.toString.call(true), 'call-bound %Object.prototype.toString% calls into the original');

	t['throws'](
		function () { callBound('does not exist'); },
		SyntaxError,
		'nonexistent intrinsic throws'
	);
	t['throws'](
		function () { callBound('does not exist', true); },
		SyntaxError,
		'allowMissing arg still throws for unknown intrinsic'
	);

	t.test('real but absent intrinsic', { skip: typeof WeakRef !== 'undefined' }, function (st) {
		st['throws'](
			function () { callBound('WeakRef'); },
			TypeError,
			'real but absent intrinsic throws'
		);
		st.equal(callBound('WeakRef', true), undefined, 'allowMissing arg avoids exception');
		st.end();
	});

	t.end();
});
