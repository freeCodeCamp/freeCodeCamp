var test = require('tape');
var isArguments = require('../isArguments');

test('is.arguments', function (t) {
	t.notOk(isArguments([]), 'array is not arguments');
	(function () { t.ok(isArguments(arguments), 'arguments is arguments'); }());
	(function () { t.notOk(isArguments(Array.prototype.slice.call(arguments)), 'sliced arguments is not arguments'); }());
	t.end();
});

