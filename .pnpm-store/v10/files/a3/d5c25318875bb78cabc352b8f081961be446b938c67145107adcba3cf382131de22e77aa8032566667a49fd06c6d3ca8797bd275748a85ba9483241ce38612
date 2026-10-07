'use strict';

var isEmpty = require('es5-ext/object/is-empty')
  , value   = require('es5-ext/object/valid-value')

  , hasOwnProperty = Object.prototype.hasOwnProperty;

module.exports = function (obj/*, type*/) {
	var type;
	value(obj);
	type = arguments[1];
	if (arguments.length > 1) {
		return hasOwnProperty.call(obj, '__ee__') && Boolean(obj.__ee__[type]);
	}
	return obj.hasOwnProperty('__ee__') && !isEmpty(obj.__ee__);
};
