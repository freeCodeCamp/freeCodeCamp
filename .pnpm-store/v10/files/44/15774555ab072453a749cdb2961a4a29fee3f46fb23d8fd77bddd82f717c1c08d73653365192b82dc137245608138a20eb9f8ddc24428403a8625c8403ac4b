'use strict';

var GetIntrinsic = require('get-intrinsic');

var $Array = GetIntrinsic('%Array%');

// eslint-disable-next-line global-require
var toStr = !$Array.isArray && require('call-bound')('Object.prototype.toString');

module.exports = $Array.isArray || function IsArray(argument) {
	return toStr(argument) === '[object Array]';
};
