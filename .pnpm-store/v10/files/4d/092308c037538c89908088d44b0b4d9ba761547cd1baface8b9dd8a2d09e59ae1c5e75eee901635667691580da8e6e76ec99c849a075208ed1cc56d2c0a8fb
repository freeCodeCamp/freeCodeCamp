'use strict';

var value = require('es5-ext/object/valid-object')

  , hasOwnProperty = Object.prototype.hasOwnProperty;

module.exports = function (emitter/*, type*/) {
	var type = arguments[1], data;

	value(emitter);

	if (type !== undefined) {
		data = hasOwnProperty.call(emitter, '__ee__') && emitter.__ee__;
		if (!data) return;
		if (data[type]) delete data[type];
		return;
	}
	if (hasOwnProperty.call(emitter, '__ee__')) delete emitter.__ee__;
};
