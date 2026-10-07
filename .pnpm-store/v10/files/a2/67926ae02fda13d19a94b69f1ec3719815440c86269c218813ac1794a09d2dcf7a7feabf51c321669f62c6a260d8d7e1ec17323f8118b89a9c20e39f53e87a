'use strict';

module.exports = function quote(xs) {
	return xs.map(function (s) {
		if (s && typeof s === 'object') {
			return s.op.replace(/(.)/g, '\\$1');
		}
		if ((/["\s]/).test(s) && !(/'/).test(s)) {
			return "'" + s.replace(/(['\\])/g, '\\$1') + "'";
		}
		if ((/["'\s]/).test(s)) {
			return '"' + s.replace(/(["\\$`!])/g, '\\$1') + '"';
		}
		return String(s).replace(/([A-Za-z]:)?([#!"$&'()*,:;<=>?@[\\\]^`{|}])/g, '$1\\$2');
	}).join(' ');
};
