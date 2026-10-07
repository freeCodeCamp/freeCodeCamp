'use strict';

module.exports = function(repeat, t) {
	t.test('cast count argument', function(st) {
		st.equal(repeat('abc'), '');
		st.equal(repeat('abc', undefined), '');
		st.equal(repeat('abc', null), '');
		st.equal(repeat('abc', false), '');
		st.equal(repeat('abc', NaN), '');
		st.equal(repeat('abc', 'abc'), '');
		st.end();
	});

	t.test('invalid numeric count', function(st) {
		st['throws'](function() { repeat('abc', -Infinity); }, RangeError);
		st['throws'](function() { repeat('abc', -1); }, RangeError);
		st['throws'](function() { repeat('abc', +Infinity); }, RangeError);
		st.end();
	});

	t.test('valid numeric count', function(st) {
		st.equal(repeat('abc', -0), '');
		st.equal(repeat('abc', +0), '');
		st.equal(repeat('abc', 1), 'abc');
		st.equal(repeat('abc', 2), 'abcabc');
		st.equal(repeat('abc', 3), 'abcabcabc');
		st.equal(repeat('abc', 4), 'abcabcabcabc');
		st.end();
	});

	t.test('nullish this object', function(st) {
		st['throws'](function() { repeat(undefined); }, TypeError);
		st['throws'](function() { repeat(undefined, 4); }, TypeError);
		st['throws'](function() { repeat(null); }, TypeError);
		st['throws'](function() { repeat(null, 4); }, TypeError);
		st.end();
	});

	t.test('cast this object', function(st) {
		st.equal(repeat(42, 4), '42424242');
		st.equal(repeat({ 'toString': function() { return 'abc'; } }, 2), 'abcabc');
		st.end();
	});
};
