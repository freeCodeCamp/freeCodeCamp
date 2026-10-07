/* jscs:disable requireUseStrict */
/* eslint strict: 0, max-statements: 0 */

module.exports = function (theGlobal, t) {
	t.equal(typeof theGlobal, 'object', 'is an object');

	t.test('built-in globals', function (st) {
		st.equal(theGlobal.Math, Math, 'Math is on the global');
		st.equal(theGlobal.JSON, JSON, 'JSON is on the global');
		st.equal(theGlobal.String, String, 'String is on the global');
		st.equal(theGlobal.Array, Array, 'Array is on the global');
		st.equal(theGlobal.Number, Number, 'Number is on the global');
		st.equal(theGlobal.Boolean, Boolean, 'Boolean is on the global');
		st.equal(theGlobal.Object, Object, 'Object is on the global');
		st.equal(theGlobal.Function, Function, 'Function is on the global');
		st.equal(theGlobal.Date, Date, 'Date is on the global');
		st.equal(theGlobal.RegExp, RegExp, 'RegExp is on the global');

		if (typeof Symbol === 'undefined') {
			st.comment('# SKIP Symbol is not supported');
		} else {
			st.equal(theGlobal.Symbol, Symbol, 'Symbol is on the global');
		}
		st.end();
	});

	t.test('custom property', function (st) {
		var key = 'random_custom_key_' + new Date().getTime();
		var semaphore = {};
		/* eslint no-eval: 1 */
		eval(key + ' = semaphore;');
		st.equal(theGlobal[key], semaphore, 'global variable ends up on the global object');
		delete theGlobal[key]; // eslint-disable-line no-param-reassign
		st.end();
	});
};
