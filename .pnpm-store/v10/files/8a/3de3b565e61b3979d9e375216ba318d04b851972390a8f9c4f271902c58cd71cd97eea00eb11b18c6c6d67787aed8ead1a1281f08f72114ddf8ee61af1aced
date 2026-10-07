'use strict';

module.exports = function (fromEntries, t) {
	var a = {};
	var b = {};
	var c = {};
	var entries = [['a', a], ['b', b], ['c', c]];
	var obj = { a: a, b: b, c: c };

	t.deepEqual(fromEntries(entries), obj, 'entries -> obj');

	t['throws'](function () { fromEntries(); }, 'entries throws on absent iterable');
	t['throws'](function () { fromEntries(undefined); }, 'entries throws on undefined');
	t['throws'](function () { fromEntries(null); }, 'entries throws on null');

	t.deepEqual(fromEntries([['foo', 1], ['foo', 2]]), { foo: 2 }, 'works with a duplicate key');
};
