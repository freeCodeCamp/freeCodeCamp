'use strict';

var gOPD = require('gopd');
var bind = require('function-bind');

var unbound = gOPD && gOPD(function () {}, 'length');
// @ts-expect-error ts(2555) TS is overly strict with .call
var bound = gOPD && gOPD(bind.call(function () {}), 'length');

var functionsHaveConfigurableLengths = !!(unbound && unbound.configurable);

var functionsHaveWritableLengths = !!(unbound && unbound.writable);

var boundFnsHaveConfigurableLengths = !!(bound && bound.configurable);

var boundFnsHaveWritableLengths = !!(bound && bound.writable);

/** @type {import('./env')} */
module.exports = {
	__proto__: null,
	boundFnsHaveConfigurableLengths: boundFnsHaveConfigurableLengths,
	boundFnsHaveWritableLengths: boundFnsHaveWritableLengths,
	functionsHaveConfigurableLengths: functionsHaveConfigurableLengths,
	functionsHaveWritableLengths: functionsHaveWritableLengths
};
