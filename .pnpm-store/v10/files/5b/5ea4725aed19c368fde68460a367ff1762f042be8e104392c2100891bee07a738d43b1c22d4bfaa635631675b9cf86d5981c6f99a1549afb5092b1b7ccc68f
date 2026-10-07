'use strict';

var $floor = require('math-intrinsics/floor');

// https://runestone.academy/ns/books/published/pythonds/BasicDS/ConvertingDecimalNumberstoBinaryNumbers.html#:~:text=The%20Divide%20by%202%20algorithm,have%20a%20remainder%20of%200

module.exports = function intToBinaryString(x) {
	var str = '';
	var y;

	while (x > 0) {
		y = x / 2;
		x = $floor(y); // eslint-disable-line no-param-reassign
		if (y === x) {
			str = '0' + str;
		} else {
			str = '1' + str;
		}
	}
	return str;
};
