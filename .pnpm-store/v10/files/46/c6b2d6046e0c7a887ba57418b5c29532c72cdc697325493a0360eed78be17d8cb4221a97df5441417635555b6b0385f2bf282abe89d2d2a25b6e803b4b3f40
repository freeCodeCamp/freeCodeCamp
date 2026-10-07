import * as tinyspy from 'tinyspy';

const mocks = new Set();
function isMockFunction(fn) {
	return typeof fn === "function" && "_isMockFunction" in fn && fn._isMockFunction;
}
function spyOn(obj, method, accessType) {
	const dictionary = {
		get: "getter",
		set: "setter"
	};
	const objMethod = accessType ? { [dictionary[accessType]]: method } : method;
	let state;
	const descriptor = getDescriptor(obj, method);
	const fn = descriptor && descriptor[accessType || "value"];
	// inherit implementations if it was already mocked
	if (isMockFunction(fn)) {
		state = fn.mock._state();
	}
	try {
		const stub = tinyspy.internalSpyOn(obj, objMethod);
		const spy = enhanceSpy(stub);
		if (state) {
			spy.mock._state(state);
		}
		return spy;
	} catch (error) {
		if (error instanceof TypeError && Symbol.toStringTag && obj[Symbol.toStringTag] === "Module" && (error.message.includes("Cannot redefine property") || error.message.includes("Cannot replace module namespace") || error.message.includes("can't redefine non-configurable property"))) {
			throw new TypeError(`Cannot spy on export "${String(objMethod)}". Module namespace is not configurable in ESM. See: https://vitest.dev/guide/browser/#limitations`, { cause: error });
		}
		throw error;
	}
}
let callOrder = 0;
function enhanceSpy(spy) {
	const stub = spy;
	let implementation;
	let onceImplementations = [];
	let implementationChangedTemporarily = false;
	let instances = [];
	let contexts = [];
	let invocations = [];
	const state = tinyspy.getInternalState(spy);
	const mockContext = {
		get calls() {
			return state.calls;
		},
		get contexts() {
			return contexts;
		},
		get instances() {
			return instances;
		},
		get invocationCallOrder() {
			return invocations;
		},
		get results() {
			return state.results.map(([callType, value]) => {
				const type = callType === "error" ? "throw" : "return";
				return {
					type,
					value
				};
			});
		},
		get settledResults() {
			return state.resolves.map(([callType, value]) => {
				const type = callType === "error" ? "rejected" : "fulfilled";
				return {
					type,
					value
				};
			});
		},
		get lastCall() {
			return state.calls[state.calls.length - 1];
		},
		_state(state) {
			if (state) {
				implementation = state.implementation;
				onceImplementations = state.onceImplementations;
				implementationChangedTemporarily = state.implementationChangedTemporarily;
			}
			return {
				implementation,
				onceImplementations,
				implementationChangedTemporarily
			};
		}
	};
	function mockCall(...args) {
		instances.push(this);
		contexts.push(this);
		invocations.push(++callOrder);
		const impl = implementationChangedTemporarily ? implementation : onceImplementations.shift() || implementation || state.getOriginal() || (() => {});
		return impl.apply(this, args);
	}
	let name = stub.name;
	stub.getMockName = () => name || "vi.fn()";
	stub.mockName = (n) => {
		name = n;
		return stub;
	};
	stub.mockClear = () => {
		state.reset();
		instances = [];
		contexts = [];
		invocations = [];
		return stub;
	};
	stub.mockReset = () => {
		stub.mockClear();
		implementation = undefined;
		onceImplementations = [];
		return stub;
	};
	stub.mockRestore = () => {
		stub.mockReset();
		state.restore();
		return stub;
	};
	if (Symbol.dispose) {
		stub[Symbol.dispose] = () => stub.mockRestore();
	}
	stub.getMockImplementation = () => implementationChangedTemporarily ? implementation : onceImplementations.at(0) || implementation;
	stub.mockImplementation = (fn) => {
		implementation = fn;
		state.willCall(mockCall);
		return stub;
	};
	stub.mockImplementationOnce = (fn) => {
		onceImplementations.push(fn);
		return stub;
	};
	function withImplementation(fn, cb) {
		const originalImplementation = implementation;
		implementation = fn;
		state.willCall(mockCall);
		implementationChangedTemporarily = true;
		const reset = () => {
			implementation = originalImplementation;
			implementationChangedTemporarily = false;
		};
		const result = cb();
		if (typeof result === "object" && result && typeof result.then === "function") {
			return result.then(() => {
				reset();
				return stub;
			});
		}
		reset();
		return stub;
	}
	stub.withImplementation = withImplementation;
	stub.mockReturnThis = () => stub.mockImplementation(function() {
		return this;
	});
	stub.mockReturnValue = (val) => stub.mockImplementation(() => val);
	stub.mockReturnValueOnce = (val) => stub.mockImplementationOnce(() => val);
	stub.mockResolvedValue = (val) => stub.mockImplementation(() => Promise.resolve(val));
	stub.mockResolvedValueOnce = (val) => stub.mockImplementationOnce(() => Promise.resolve(val));
	stub.mockRejectedValue = (val) => stub.mockImplementation(() => Promise.reject(val));
	stub.mockRejectedValueOnce = (val) => stub.mockImplementationOnce(() => Promise.reject(val));
	Object.defineProperty(stub, "mock", { get: () => mockContext });
	state.willCall(mockCall);
	mocks.add(stub);
	return stub;
}
function fn(implementation) {
	const enhancedSpy = enhanceSpy(tinyspy.internalSpyOn({ spy: implementation || function() {} }, "spy"));
	if (implementation) {
		enhancedSpy.mockImplementation(implementation);
	}
	return enhancedSpy;
}
function getDescriptor(obj, method) {
	const objDescriptor = Object.getOwnPropertyDescriptor(obj, method);
	if (objDescriptor) {
		return objDescriptor;
	}
	let currentProto = Object.getPrototypeOf(obj);
	while (currentProto !== null) {
		const descriptor = Object.getOwnPropertyDescriptor(currentProto, method);
		if (descriptor) {
			return descriptor;
		}
		currentProto = Object.getPrototypeOf(currentProto);
	}
}

export { fn, isMockFunction, mocks, spyOn };
