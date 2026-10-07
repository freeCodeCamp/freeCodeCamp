'use strict';

/** @typedef {`$${import('.').InternalSlot}`} SaltedInternalSlot */
/** @typedef {{ [k in SaltedInternalSlot]?: unknown }} SlotsObject */

var hasOwn = require('hasown');
/** @type {import('side-channel').Channel<object, SlotsObject>} */
var channel = require('side-channel')();

var $TypeError = require('es-errors/type');

/** @type {import('.')} */
var SLOT = {
	assert: function (O, slot) {
		if (!O || (typeof O !== 'object' && typeof O !== 'function')) {
			throw new $TypeError('`O` is not an object');
		}
		if (typeof slot !== 'string') {
			throw new $TypeError('`slot` must be a string');
		}
		channel.assert(O);
		if (!SLOT.has(O, slot)) {
			throw new $TypeError('`' + slot + '` is not present on `O`');
		}
	},
	get: function (O, slot) {
		if (!O || (typeof O !== 'object' && typeof O !== 'function')) {
			throw new $TypeError('`O` is not an object');
		}
		if (typeof slot !== 'string') {
			throw new $TypeError('`slot` must be a string');
		}
		var slots = channel.get(O);
		// eslint-disable-next-line no-extra-parens
		return slots && slots[/** @type {SaltedInternalSlot} */ ('$' + slot)];
	},
	has: function (O, slot) {
		if (!O || (typeof O !== 'object' && typeof O !== 'function')) {
			throw new $TypeError('`O` is not an object');
		}
		if (typeof slot !== 'string') {
			throw new $TypeError('`slot` must be a string');
		}
		var slots = channel.get(O);
		// eslint-disable-next-line no-extra-parens
		return !!slots && hasOwn(slots, /** @type {SaltedInternalSlot} */ ('$' + slot));
	},
	set: function (O, slot, V) {
		if (!O || (typeof O !== 'object' && typeof O !== 'function')) {
			throw new $TypeError('`O` is not an object');
		}
		if (typeof slot !== 'string') {
			throw new $TypeError('`slot` must be a string');
		}
		var slots = channel.get(O);
		if (!slots) {
			slots = {};
			channel.set(O, slots);
		}
		// eslint-disable-next-line no-extra-parens
		slots[/** @type {SaltedInternalSlot} */ ('$' + slot)] = V;
	}
};

if (Object.freeze) {
	Object.freeze(SLOT);
}

module.exports = SLOT;
