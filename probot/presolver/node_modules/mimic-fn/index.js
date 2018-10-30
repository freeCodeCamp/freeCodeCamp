'use strict';
module.exports = (to, from) => {
	// TODO: use `Reflect.ownKeys()` when targeting Node.js 6
	for (const prop of Object.getOwnPropertyNames(from).concat(Object.getOwnPropertySymbols(from))) {
		Object.defineProperty(to, prop, Object.getOwnPropertyDescriptor(from, prop));
	}

	return to;
};
