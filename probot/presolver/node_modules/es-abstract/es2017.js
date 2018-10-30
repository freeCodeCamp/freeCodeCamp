'use strict';

var ES2016 = require('./es2016');
var assign = require('./helpers/assign');

var ES2017 = assign(assign({}, ES2016), {
	ToIndex: function ToIndex(value) {
		if (typeof value === 'undefined') {
			return 0;
		}
		var integerIndex = this.ToInteger(value);
		if (integerIndex < 0) {
			throw new RangeError('index must be >= 0');
		}
		var index = this.ToLength(integerIndex);
		if (!this.SameValueZero(integerIndex, index)) {
			throw new RangeError('index must be >= 0 and < 2 ** 53 - 1');
		}
		return index;
	}
});

delete ES2017.EnumerableOwnNames; // replaced with EnumerableOwnProperties

module.exports = ES2017;
