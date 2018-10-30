'use strict';
const lazy = (mod, fn, id) => mod === undefined ? fn(id) : mod;

module.exports = fn => {
	return id => {
		let mod;

		return function () {
			if (arguments.length === 0) {
				mod = lazy(mod, fn, id);
				return mod;
			}

			const ret = {};

			[].forEach.call(arguments, prop => {
				Object.defineProperty(ret, prop, {
					get: () => {
						mod = lazy(mod, fn, id);
						if (typeof mod[prop] === 'function') {
							return function () {
								return mod[prop].apply(mod, arguments);
							};
						}

						return mod[prop];
					}
				});
			});

			return ret;
		};
	};
};

module.exports.proxy = fn => {
	return id => {
		let mod;

		const handler = {
			get: (target, property) => {
				mod = lazy(mod, fn, id);
				return Reflect.get(mod, property);
			},
			apply: (target, thisArg, argumentsList) => {
				mod = lazy(mod, fn, id);
				return Reflect.apply(mod, thisArg, argumentsList);
			}
		};

		return new Proxy(() => {}, handler);
	};
};
