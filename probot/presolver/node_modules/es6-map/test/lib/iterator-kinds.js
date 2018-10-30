'use strict';

module.exports = function (t, a) {
	a.deep(t, { key: true, value: true, 'key+value': true });
};
