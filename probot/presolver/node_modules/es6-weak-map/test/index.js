'use strict';

module.exports = function (T, a) {
	var x = {};
	a((new T([[x, 'foo']])).get(x), 'foo');
};
