'use strict';

module.exports = function (T, a) {
	a((new T([['raz', 1], ['dwa', 2]])).size, 2);
};
