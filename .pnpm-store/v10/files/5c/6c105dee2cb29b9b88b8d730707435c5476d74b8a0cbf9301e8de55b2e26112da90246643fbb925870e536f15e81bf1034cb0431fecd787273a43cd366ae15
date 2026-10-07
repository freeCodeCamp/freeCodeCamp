'use strict';

var hasPropertyDescriptors = require('has-property-descriptors');

var $defineProperty = require('es-define-property');

var hasArrayLengthDefineBug = hasPropertyDescriptors.hasArrayLengthDefineBug();

// eslint-disable-next-line global-require
var isArray = hasArrayLengthDefineBug && require('../helpers/IsArray');

var callBound = require('call-bound');

var $isEnumerable = callBound('Object.prototype.propertyIsEnumerable');

// eslint-disable-next-line max-params
module.exports = function DefineOwnProperty(IsDataDescriptor, SameValue, FromPropertyDescriptor, O, P, desc) {
	if (!$defineProperty) {
		if (!IsDataDescriptor(desc)) {
			// ES3 does not support getters/setters
			return false;
		}
		if (!desc['[[Configurable]]'] || !desc['[[Writable]]']) {
			return false;
		}

		// fallback for ES3
		if (P in O && $isEnumerable(O, P) !== !!desc['[[Enumerable]]']) {
			// a non-enumerable existing property
			return false;
		}

		// property does not exist at all, or exists but is enumerable
		var V = desc['[[Value]]'];
		// eslint-disable-next-line no-param-reassign
		O[P] = V; // will use [[Define]]
		return SameValue(O[P], V);
	}
	if (
		hasArrayLengthDefineBug
		&& P === 'length'
		&& '[[Value]]' in desc
		&& isArray(O)
		&& O.length !== desc['[[Value]]']
	) {
		// eslint-disable-next-line no-param-reassign
		O.length = desc['[[Value]]'];
		return O.length === desc['[[Value]]'];
	}

	$defineProperty(O, P, FromPropertyDescriptor(desc));
	return true;
};
