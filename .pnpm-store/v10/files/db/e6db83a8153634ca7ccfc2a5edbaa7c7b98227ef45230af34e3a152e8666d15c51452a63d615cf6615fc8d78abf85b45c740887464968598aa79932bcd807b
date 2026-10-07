export { A as AutomockedModule, b as AutospiedModule, a as ManualMockedModule, M as MockerRegistry, R as RedirectedModule } from './chunk-registry.js';

function mockObject(options, object, mockExports = {}) {
	const finalizers = new Array();
	const refs = new RefTracker();
	const define = (container, key, value) => {
		try {
			container[key] = value;
			return true;
		} catch {
			return false;
		}
	};
	const createMock = (currentValue) => {
		if (!options.createMockInstance) {
			throw new Error("[@vitest/mocker] `createMockInstance` is not defined. This is a Vitest error. Please open a new issue with reproduction.");
		}
		const createMockInstance = options.createMockInstance;
		const prototypeMembers = currentValue.prototype ? collectFunctionProperties(currentValue.prototype) : [];
		return createMockInstance({
			name: currentValue.name,
			prototypeMembers,
			originalImplementation: options.type === "autospy" ? currentValue : undefined,
			keepMembersImplementation: options.type === "autospy"
		});
	};
	const mockPropertiesOf = (container, newContainer) => {
		const containerType = getType(container);
		const isModule = containerType === "Module" || !!container.__esModule;
		for (const { key: property, descriptor } of getAllMockableProperties(container, isModule, options.globalConstructors)) {
			// Modules define their exports as getters. We want to process those.
			if (!isModule && descriptor.get) {
				try {
					if (options.type === "autospy") {
						Object.defineProperty(newContainer, property, descriptor);
					} else {
						Object.defineProperty(newContainer, property, {
							configurable: descriptor.configurable,
							enumerable: descriptor.enumerable,
							get: () => {},
							set: descriptor.set ? () => {} : undefined
						});
					}
				} catch {}
				continue;
			}
			// Skip special read-only props, we don't want to mess with those.
			if (isReadonlyProp(container[property], property)) {
				continue;
			}
			const value = container[property];
			// Special handling of references we've seen before to prevent infinite
			// recursion in circular objects.
			const refId = refs.getId(value);
			if (refId !== undefined) {
				finalizers.push(() => define(newContainer, property, refs.getMockedValue(refId)));
				continue;
			}
			const type = getType(value);
			if (Array.isArray(value)) {
				if (options.type === "automock") {
					define(newContainer, property, []);
				} else {
					const array = value.map((value) => {
						if (value && typeof value === "object") {
							const newObject = {};
							mockPropertiesOf(value, newObject);
							return newObject;
						}
						if (typeof value === "function") {
							return createMock(value);
						}
						return value;
					});
					define(newContainer, property, array);
				}
				continue;
			}
			const isFunction = type.includes("Function") && typeof value === "function";
			if ((!isFunction || value._isMockFunction) && type !== "Object" && type !== "Module") {
				define(newContainer, property, value);
				continue;
			}
			if (options.type === "autospy" && type === "Module") {
				// Replace with clean object to recursively autospy exported module objects:
				//   export * as ns from "./ns"
				// or
				//   import * as ns from "./ns"
				//   export { ns }
				const exports$1 = Object.create(null);
				Object.defineProperty(exports$1, Symbol.toStringTag, {
					value: "Module",
					configurable: true,
					writable: true
				});
				try {
					newContainer[property] = exports$1;
				} catch {
					continue;
				}
			} else if (!define(newContainer, property, isFunction || options.type === "autospy" ? value : {})) {
				continue;
			}
			if (isFunction) {
				const mock = createMock(newContainer[property]);
				newContainer[property] = mock;
			}
			refs.track(value, newContainer[property]);
			mockPropertiesOf(value, newContainer[property]);
		}
	};
	const mockedObject = mockExports;
	mockPropertiesOf(object, mockedObject);
	// Plug together refs
	for (const finalizer of finalizers) {
		finalizer();
	}
	return mockedObject;
}
class RefTracker {
	idMap = new Map();
	mockedValueMap = new Map();
	getId(value) {
		return this.idMap.get(value);
	}
	getMockedValue(id) {
		return this.mockedValueMap.get(id);
	}
	track(originalValue, mockedValue) {
		const newId = this.idMap.size;
		this.idMap.set(originalValue, newId);
		this.mockedValueMap.set(newId, mockedValue);
		return newId;
	}
}
function getType(value) {
	return Object.prototype.toString.apply(value).slice(8, -1);
}
function isReadonlyProp(object, prop) {
	if (prop === "arguments" || prop === "caller" || prop === "callee" || prop === "name" || prop === "length") {
		const typeName = getType(object);
		return typeName === "Function" || typeName === "AsyncFunction" || typeName === "GeneratorFunction" || typeName === "AsyncGeneratorFunction";
	}
	if (prop === "source" || prop === "global" || prop === "ignoreCase" || prop === "multiline") {
		return getType(object) === "RegExp";
	}
	return false;
}
function getAllMockableProperties(obj, isModule, constructors) {
	const { Map, Object, Function, RegExp, Array } = constructors;
	const allProps = new Map();
	let curr = obj;
	do {
		// we don't need properties from these
		if (curr === Object.prototype || curr === Function.prototype || curr === RegExp.prototype) {
			break;
		}
		collectOwnProperties(curr, (key) => {
			const descriptor = Object.getOwnPropertyDescriptor(curr, key);
			if (descriptor) {
				allProps.set(key, {
					key,
					descriptor
				});
			}
		});
	} while (curr = Object.getPrototypeOf(curr));
	// default is not specified in ownKeys, if module is interoped
	if (isModule && !allProps.has("default") && "default" in obj) {
		const descriptor = Object.getOwnPropertyDescriptor(obj, "default");
		if (descriptor) {
			allProps.set("default", {
				key: "default",
				descriptor
			});
		}
	}
	return Array.from(allProps.values());
}
function collectOwnProperties(obj, collector) {
	const collect = typeof collector === "function" ? collector : (key) => collector.add(key);
	Object.getOwnPropertyNames(obj).forEach(collect);
	Object.getOwnPropertySymbols(obj).forEach(collect);
}
function collectFunctionProperties(prototype) {
	const properties = new Set();
	collectOwnProperties(prototype, (prop) => {
		const descriptor = Object.getOwnPropertyDescriptor(prototype, prop);
		if (!descriptor || descriptor.get) {
			return;
		}
		const type = getType(descriptor.value);
		if (type.includes("Function") && !isReadonlyProp(descriptor.value, prop)) {
			properties.add(prop);
		}
	});
	return Array.from(properties);
}

export { mockObject };
