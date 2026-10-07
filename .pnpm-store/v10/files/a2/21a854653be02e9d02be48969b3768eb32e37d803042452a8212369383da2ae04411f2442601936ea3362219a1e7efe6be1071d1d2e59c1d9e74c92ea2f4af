'use strict';

var callBind = require('call-bind-apply-helpers');
var gOPD = require('gopd');
var $TypeError = require('es-errors/type');

/** @type {{ __proto__?: object | null }} */
var obj = {};
try {
	obj.__proto__ = null; // eslint-disable-line no-proto
} catch (e) {
	if (!e || typeof e !== 'object' || !('code' in e) || e.code !== 'ERR_PROTO_ACCESS') {
		throw e;
	}
}

var hasProtoMutator = !('toString' in obj);

// eslint-disable-next-line no-extra-parens
var desc = gOPD && gOPD(Object.prototype, /** @type {keyof typeof Object.prototype} */ ('__proto__'));

/** @type {import('./set')} */
module.exports = hasProtoMutator && (
// eslint-disable-next-line no-extra-parens
	(!!desc && typeof desc.set === 'function' && /** @type {import('./set')} */ (callBind([desc.set])))
	|| /** @type {import('./set')} */ function setDunder(object, proto) {
		// this is node v0.10 or older, which doesn't have Object.setPrototypeOf and has undeniable __proto__
		if (object == null) { // eslint-disable-line eqeqeq
			throw new $TypeError('set Object.prototype.__proto__ called on null or undefined');
		}
		// eslint-disable-next-line no-proto, no-param-reassign, no-extra-parens
		/** @type {{ __proto__?: object | null }} */ (object).__proto__ = proto;
		return proto;
	}
);
