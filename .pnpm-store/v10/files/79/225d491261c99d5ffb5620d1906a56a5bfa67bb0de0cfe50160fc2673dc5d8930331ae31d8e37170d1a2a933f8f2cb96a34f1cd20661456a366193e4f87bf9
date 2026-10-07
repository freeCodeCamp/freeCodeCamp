'use strict';

var $TypeError = require('es-errors/type');

// var OrdinaryObjectCreate = require('es-abstract/2024/OrdinaryObjectCreate');
var Type = require('es-abstract/2024/Type');

// https://tc39.es/proposal-joint-iteration/#sec-getoptionsobject

module.exports = function GetOptionsObject(options) {
	if (typeof options === 'undefined') { // step 1
		// return OrdinaryObjectCreate(null); // step 1.a
		return { __proto__: null }; // step 1.a
	}
	if (Type(options) === 'Object') { // step 2
		return options; // step 2.a
	}

	throw new $TypeError('`options` must be an Object or undefined'); // step 3
};
