function isMockFunction(fn) {
	return typeof fn === "function" && "_isMockFunction" in fn && fn._isMockFunction === true;
}
const MOCK_RESTORE = new Set();
// Jest keeps the state in a separate WeakMap which is good for memory,
// but it makes the state slower to access and return different values
// if you stored it before calling `mockClear` where it will be recreated
const REGISTERED_MOCKS = new Set();
const MOCK_CONFIGS = new WeakMap();
function createMockInstance(options = {}) {
	const { originalImplementation, restore, mockImplementation, resetToMockImplementation, resetToMockName } = options;
	if (restore) {
		MOCK_RESTORE.add(restore);
	}
	const config = getDefaultConfig(originalImplementation);
	const state = getDefaultState();
	const mock = createMock({
		config,
		state,
		...options
	});
	const mockLength = (mockImplementation || originalImplementation)?.length ?? 0;
	Object.defineProperty(mock, "length", {
		writable: true,
		enumerable: false,
		value: mockLength,
		configurable: true
	});
	// inherit the default name so it appears in snapshots and logs
	// this is used by `vi.spyOn()` for better debugging.
	// when `vi.fn()` is called, we just use the default string
	if (resetToMockName) {
		config.mockName = mock.name || "vi.fn()";
	}
	MOCK_CONFIGS.set(mock, config);
	REGISTERED_MOCKS.add(mock);
	mock._isMockFunction = true;
	mock.getMockImplementation = () => {
		// Jest only returns `config.mockImplementation` here,
		// but we think it makes sense to return what the next function will be called
		return config.onceMockImplementations[0] || config.mockImplementation;
	};
	Object.defineProperty(mock, "mock", {
		configurable: false,
		enumerable: true,
		writable: false,
		value: state
	});
	mock.mockImplementation = function mockImplementation(implementation) {
		config.mockImplementation = implementation;
		return mock;
	};
	mock.mockImplementationOnce = function mockImplementationOnce(implementation) {
		config.onceMockImplementations.push(implementation);
		return mock;
	};
	mock.withImplementation = function withImplementation(implementation, callback) {
		const previousImplementation = config.mockImplementation;
		const previousOnceImplementations = config.onceMockImplementations;
		const reset = () => {
			config.mockImplementation = previousImplementation;
			config.onceMockImplementations = previousOnceImplementations;
		};
		config.mockImplementation = implementation;
		config.onceMockImplementations = [];
		const returnValue = callback();
		if (typeof returnValue === "object" && typeof returnValue?.then === "function") {
			return returnValue.then(() => {
				reset();
				return mock;
			});
		} else {
			reset();
		}
		return mock;
	};
	mock.mockReturnThis = function mockReturnThis() {
		return mock.mockImplementation(function() {
			return this;
		});
	};
	mock.mockReturnValue = function mockReturnValue(value) {
		return mock.mockImplementation(function() {
			if (new.target) {
				throwConstructorError("mockReturnValue");
			}
			return value;
		});
	};
	mock.mockReturnValueOnce = function mockReturnValueOnce(value) {
		return mock.mockImplementationOnce(function() {
			if (new.target) {
				throwConstructorError("mockReturnValueOnce");
			}
			return value;
		});
	};
	mock.mockThrow = function mockThrow(value) {
		// eslint-disable-next-line prefer-arrow-callback
		return mock.mockImplementation(function() {
			throw value;
		});
	};
	mock.mockThrowOnce = function mockThrowOnce(value) {
		// eslint-disable-next-line prefer-arrow-callback
		return mock.mockImplementationOnce(function() {
			throw value;
		});
	};
	mock.mockResolvedValue = function mockResolvedValue(value) {
		return mock.mockImplementation(function() {
			if (new.target) {
				throwConstructorError("mockResolvedValue");
			}
			return Promise.resolve(value);
		});
	};
	mock.mockResolvedValueOnce = function mockResolvedValueOnce(value) {
		return mock.mockImplementationOnce(function() {
			if (new.target) {
				throwConstructorError("mockResolvedValueOnce");
			}
			return Promise.resolve(value);
		});
	};
	mock.mockRejectedValue = function mockRejectedValue(value) {
		return mock.mockImplementation(function() {
			if (new.target) {
				throwConstructorError("mockRejectedValue");
			}
			return Promise.reject(value);
		});
	};
	mock.mockRejectedValueOnce = function mockRejectedValueOnce(value) {
		return mock.mockImplementationOnce(function() {
			if (new.target) {
				throwConstructorError("mockRejectedValueOnce");
			}
			return Promise.reject(value);
		});
	};
	mock.mockClear = function mockClear() {
		state.calls = [];
		state.contexts = [];
		state.instances = [];
		state.invocationCallOrder = [];
		state.results = [];
		state.settledResults = [];
		return mock;
	};
	mock.mockReset = function mockReset() {
		mock.mockClear();
		config.mockImplementation = resetToMockImplementation ? mockImplementation : undefined;
		config.mockName = resetToMockName ? mock.name || "vi.fn()" : "vi.fn()";
		config.onceMockImplementations = [];
		return mock;
	};
	mock.mockRestore = function mockRestore() {
		mock.mockReset();
		return restore?.();
	};
	mock.mockName = function mockName(name) {
		if (typeof name === "string") {
			config.mockName = name;
		}
		return mock;
	};
	mock.getMockName = function getMockName() {
		return config.mockName || "vi.fn()";
	};
	if (Symbol.dispose) {
		mock[Symbol.dispose] = () => mock.mockRestore();
	}
	if (mockImplementation) {
		mock.mockImplementation(mockImplementation);
	}
	return mock;
}
function fn(originalImplementation) {
	// if the function is already a mock, just return the same function,
	// similarly to how vi.spyOn() works
	if (originalImplementation != null && isMockFunction(originalImplementation)) {
		return originalImplementation;
	}
	return createMockInstance({
		mockImplementation: originalImplementation,
		resetToMockImplementation: true
	});
}
function spyOn(object, key, accessor) {
	assert(object != null, "The vi.spyOn() function could not find an object to spy upon. The first argument must be defined.");
	assert(typeof object === "object" || typeof object === "function", "Vitest cannot spy on a primitive value.");
	const [originalDescriptorObject, originalDescriptor] = getDescriptor(object, key) || [];
	assert(originalDescriptor || key in object, `The property "${String(key)}" is not defined on the ${typeof object}.`);
	let accessType = accessor || "value";
	let ssr = false;
	// vite ssr support - actual function is stored inside a getter
	if (accessType === "value" && originalDescriptor && originalDescriptor.value == null && originalDescriptor.get) {
		accessType = "get";
		ssr = true;
	}
	let original;
	if (originalDescriptor) {
		original = originalDescriptor[accessType];
		// weird Proxy edge case where descriptor's value is undefined,
		// but there's still a value on the object when called
		// https://github.com/vitest-dev/vitest/issues/9439
		if (original == null && accessType === "value") {
			original = object[key];
		}
	} else if (accessType !== "value") {
		original = () => object[key];
	} else {
		original = object[key];
	}
	const originalImplementation = ssr && original ? original() : original;
	const originalType = typeof originalImplementation;
	assert(
		// allow only functions
		originalType === "function" || accessType !== "value" && original == null,
		`vi.spyOn() can only spy on a function. Received ${originalType}.`
	);
	if (isMockFunction(originalImplementation)) {
		return originalImplementation;
	}
	const reassign = (cb) => {
		const { value, ...desc } = originalDescriptor || {
			configurable: true,
			writable: true
		};
		if (accessType !== "value") {
			delete desc.writable;
		}
		desc[accessType] = cb;
		Object.defineProperty(object, key, desc);
	};
	const restore = () => {
		// if method is defined on the prototype, we can just remove it from
		// the current object instead of redefining a copy of it
		if (originalDescriptorObject !== object) {
			Reflect.deleteProperty(object, key);
		} else if (originalDescriptor && !original) {
			Object.defineProperty(object, key, originalDescriptor);
		} else {
			reassign(original);
		}
	};
	const mock = createMockInstance({
		restore,
		originalImplementation,
		resetToMockName: true
	});
	try {
		reassign(ssr ? () => mock : mock);
	} catch (error) {
		if (error instanceof TypeError && Symbol.toStringTag && object[Symbol.toStringTag] === "Module" && (error.message.includes("Cannot redefine property") || error.message.includes("Cannot replace module namespace") || error.message.includes("can't redefine non-configurable property"))) {
			throw new TypeError(`Cannot spy on export "${String(key)}". Module namespace is not configurable in ESM. See: https://vitest.dev/guide/browser/#limitations`, { cause: error });
		}
		throw error;
	}
	return mock;
}
function getDescriptor(obj, method) {
	const objDescriptor = Object.getOwnPropertyDescriptor(obj, method);
	if (objDescriptor) {
		return [obj, objDescriptor];
	}
	let currentProto = Object.getPrototypeOf(obj);
	while (currentProto !== null) {
		const descriptor = Object.getOwnPropertyDescriptor(currentProto, method);
		if (descriptor) {
			return [currentProto, descriptor];
		}
		currentProto = Object.getPrototypeOf(currentProto);
	}
}
function assert(condition, message) {
	if (!condition) {
		throw new Error(message);
	}
}
let invocationCallCounter = 1;
function createMock({ state, config, name: mockName, prototypeState, prototypeConfig, keepMembersImplementation, mockImplementation, prototypeMembers = [] }) {
	const original = config.mockOriginal;
	const pseudoOriginal = mockImplementation;
	const name = mockName || original?.name || "Mock";
	const namedObject = { [name]: (function(...args) {
		registerCalls(args, state, prototypeState);
		registerInvocationOrder(invocationCallCounter++, state, prototypeState);
		const result = {
			type: "incomplete",
			value: undefined
		};
		const settledResult = {
			type: "incomplete",
			value: undefined
		};
		registerResult(result, state, prototypeState);
		registerSettledResult(settledResult, state, prototypeState);
		const context = new.target ? undefined : this;
		const [instanceIndex, instancePrototypeIndex] = registerInstance(context, state, prototypeState);
		const [contextIndex, contextPrototypeIndex] = registerContext(context, state, prototypeState);
		const implementation = config.onceMockImplementations.shift() || config.mockImplementation || prototypeConfig?.onceMockImplementations.shift() || prototypeConfig?.mockImplementation || original || function() {};
		let returnValue;
		let thrownValue;
		let didThrow = false;
		try {
			if (new.target) {
				returnValue = Reflect.construct(implementation, args, new.target);
				// jest calls this before the implementation, but we have to resolve this _after_
				// because we cannot do it before the `Reflect.construct` called the custom implementation.
				// fortunately, the constructor is always an empty function because `prototypeMethods`
				// are only used by the automocker, so this doesn't matter
				for (const prop of prototypeMembers) {
					const prototypeMock = returnValue[prop];
					// the method was overridden because of inheritance, ignore it
					// eslint-disable-next-line ts/no-use-before-define
					if (prototypeMock !== mock.prototype[prop]) {
						continue;
					}
					const isMock = isMockFunction(prototypeMock);
					const prototypeState = isMock ? prototypeMock.mock : undefined;
					const prototypeConfig = isMock ? MOCK_CONFIGS.get(prototypeMock) : undefined;
					returnValue[prop] = createMockInstance({
						originalImplementation: keepMembersImplementation ? prototypeConfig?.mockOriginal : undefined,
						prototypeState,
						prototypeConfig,
						keepMembersImplementation
					});
				}
			} else {
				returnValue = implementation.apply(this, args);
			}
		} catch (error) {
			thrownValue = error;
			didThrow = true;
			if (error instanceof TypeError && error.message.includes("is not a constructor")) {
				console.warn(`[vitest] The ${namedObject[name].getMockName()} mock did not use 'function' or 'class' in its implementation, see https://vitest.dev/api/vi#vi-spyon for examples.`);
			}
			throw error;
		} finally {
			if (didThrow) {
				result.type = "throw";
				result.value = thrownValue;
				settledResult.type = "rejected";
				settledResult.value = thrownValue;
			} else {
				result.type = "return";
				result.value = returnValue;
				if (new.target) {
					state.contexts[contextIndex - 1] = returnValue;
					state.instances[instanceIndex - 1] = returnValue;
					if (contextPrototypeIndex != null && prototypeState) {
						prototypeState.contexts[contextPrototypeIndex - 1] = returnValue;
					}
					if (instancePrototypeIndex != null && prototypeState) {
						prototypeState.instances[instancePrototypeIndex - 1] = returnValue;
					}
				}
				if (returnValue instanceof Promise) {
					returnValue.then((settledValue) => {
						settledResult.type = "fulfilled";
						settledResult.value = settledValue;
					}, (rejectedValue) => {
						settledResult.type = "rejected";
						settledResult.value = rejectedValue;
					});
				} else {
					settledResult.type = "fulfilled";
					settledResult.value = returnValue;
				}
			}
		}
		return returnValue;
	}) };
	const mock = namedObject[name];
	const copyPropertiesFrom = original || pseudoOriginal;
	if (copyPropertiesFrom) {
		copyOriginalStaticProperties(mock, copyPropertiesFrom);
	}
	return mock;
}
function registerCalls(args, state, prototypeState) {
	state.calls.push(args);
	prototypeState?.calls.push(args);
}
function registerInvocationOrder(order, state, prototypeState) {
	state.invocationCallOrder.push(order);
	prototypeState?.invocationCallOrder.push(order);
}
function registerResult(result, state, prototypeState) {
	state.results.push(result);
	prototypeState?.results.push(result);
}
function registerSettledResult(result, state, prototypeState) {
	state.settledResults.push(result);
	prototypeState?.settledResults.push(result);
}
function registerInstance(instance, state, prototypeState) {
	const instanceIndex = state.instances.push(instance);
	const instancePrototypeIndex = prototypeState?.instances.push(instance);
	return [instanceIndex, instancePrototypeIndex];
}
function registerContext(context, state, prototypeState) {
	const contextIndex = state.contexts.push(context);
	const contextPrototypeIndex = prototypeState?.contexts.push(context);
	return [contextIndex, contextPrototypeIndex];
}
function copyOriginalStaticProperties(mock, original) {
	const { properties, descriptors } = getAllProperties(original);
	for (const key of properties) {
		const descriptor = descriptors[key];
		const mockDescriptor = getDescriptor(mock, key);
		if (mockDescriptor) {
			continue;
		}
		Object.defineProperty(mock, key, descriptor);
	}
}
const ignoreProperties = new Set([
	"length",
	"name",
	"prototype",
	Symbol.for("nodejs.util.promisify.custom")
]);
function getAllProperties(original) {
	const properties = new Set();
	const descriptors = {};
	while (original && original !== Object.prototype && original !== Function.prototype) {
		const ownProperties = [...Object.getOwnPropertyNames(original), ...Object.getOwnPropertySymbols(original)];
		for (const prop of ownProperties) {
			if (descriptors[prop] || ignoreProperties.has(prop)) {
				continue;
			}
			properties.add(prop);
			descriptors[prop] = Object.getOwnPropertyDescriptor(original, prop);
		}
		original = Object.getPrototypeOf(original);
	}
	return {
		properties,
		descriptors
	};
}
function getDefaultConfig(original) {
	return {
		mockImplementation: undefined,
		mockOriginal: original,
		mockName: "vi.fn()",
		onceMockImplementations: []
	};
}
function getDefaultState() {
	const state = {
		calls: [],
		contexts: [],
		instances: [],
		invocationCallOrder: [],
		settledResults: [],
		results: [],
		get lastCall() {
			return state.calls.at(-1);
		}
	};
	return state;
}
function restoreAllMocks() {
	for (const restore of MOCK_RESTORE) {
		restore();
	}
	MOCK_RESTORE.clear();
}
function clearAllMocks() {
	REGISTERED_MOCKS.forEach((mock) => mock.mockClear());
}
function resetAllMocks() {
	REGISTERED_MOCKS.forEach((mock) => mock.mockReset());
}
function throwConstructorError(shorthand) {
	throw new TypeError(`Cannot use \`${shorthand}\` when called with \`new\`. Use \`mockImplementation\` with a \`class\` keyword instead. See https://vitest.dev/api/mock#class-support for more information.`);
}

export { clearAllMocks, createMockInstance, fn, isMockFunction, resetAllMocks, restoreAllMocks, spyOn };
