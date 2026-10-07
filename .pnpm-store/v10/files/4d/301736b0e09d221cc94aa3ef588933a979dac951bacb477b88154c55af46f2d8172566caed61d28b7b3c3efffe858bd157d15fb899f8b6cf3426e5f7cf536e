'use strict';

// Gets all non-builtin properties up the prototype chain
const getAllProperties = object => {
	const properties = new Set();

	do {
		for (const key of Reflect.ownKeys(object)) {
			properties.add([object, key]);
		}
	} while ((object = Reflect.getPrototypeOf(object)) && object !== Object.prototype);

	return properties;
};

module.exports = (self, {include, exclude} = {}) => {
	const filter = key => {
		const match = pattern => typeof pattern === 'string' ? key === pattern : pattern.test(key);

		if (include) {
			return include.some(match);
		}

		if (exclude) {
			return !exclude.some(match);
		}

		return true;
	};

	for (const [object, key] of getAllProperties(self.constructor.prototype)) {
		if (key === 'constructor' || !filter(key)) {
			continue;
		}

		const descriptor = Reflect.getOwnPropertyDescriptor(object, key);
		if (descriptor && typeof descriptor.value === 'function') {
			self[key] = self[key].bind(self);
		}
	}

	return self;
};
