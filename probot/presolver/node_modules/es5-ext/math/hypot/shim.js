// Thanks for hints: https://github.com/paulmillr/es6-shim

"use strict";

var some = Array.prototype.some
  , abs = Math.abs
  , sqrt = Math.sqrt
  , compare = function (val1, val2) {
	return val2 - val1;
}
  , divide = function (value) {
	return value / this;
}
  , add = function (sum, number) {
	return sum + number * number;
};

// eslint-disable-next-line no-unused-vars
module.exports = function (val1, val2 /*, …valn*/) {
	var result, numbers;
	if (!arguments.length) return 0;
	some.call(arguments, function (val) {
		if (isNaN(val)) {
			result = NaN;
			return false;
		}
		if (!isFinite(val)) {
			result = Infinity;
			return true;
		}
		if (result !== undefined) return false;
		val = Number(val);
		if (val === 0) return false;
		if (numbers) numbers.push(abs(val));
		else numbers = [abs(val)];
		return false;
	});
	if (result !== undefined) return result;
	if (!numbers) return 0;

	numbers.sort(compare);
	return numbers[0] * sqrt(numbers.map(divide, numbers[0]).reduce(add, 0));
};
