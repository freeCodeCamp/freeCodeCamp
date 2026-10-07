import { equals, iterableEquality, subsetEquality, JestExtend, JestChaiExpect, JestAsymmetricMatchers, GLOBAL_EXPECT, ASYMMETRIC_MATCHERS_OBJECT, getState, setState, addCustomEqualityTesters, customMatchers } from '@vitest/expect';
import { getCurrentTest } from '@vitest/runner';
import { getNames, getTestName } from '@vitest/runner/utils';
import * as chai$1 from 'chai';
import { g as getWorkerState, a as getCurrentEnvironment, i as isChildProcess, w as waitForImportsToResolve, r as resetModules } from './utils.XdZDrNZV.js';
import { getSafeTimers, assertTypes, createSimpleStackTrace } from '@vitest/utils';
import { g as getDefaultExportFromCjs, c as commonjsGlobal } from './_commonjsHelpers.BFTU3MAI.js';
import { stripSnapshotIndentation, addSerializer, SnapshotClient } from '@vitest/snapshot';
import '@vitest/utils/error';
import { fn, spyOn, mocks, isMockFunction } from '@vitest/spy';
import { parseSingleStack } from '@vitest/utils/source-map';
import { R as RealDate, r as resetDate, m as mockDate } from './date.Bq6ZW5rf.js';

// these matchers are not supported because they don't make sense with poll
const unsupported = [
	"matchSnapshot",
	"toMatchSnapshot",
	"toMatchInlineSnapshot",
	"toThrowErrorMatchingSnapshot",
	"toThrowErrorMatchingInlineSnapshot",
	"throws",
	"Throw",
	"throw",
	"toThrow",
	"toThrowError"
];
function createExpectPoll(expect) {
	return function poll(fn, options = {}) {
		const state = getWorkerState();
		const defaults = state.config.expect?.poll ?? {};
		const { interval = defaults.interval ?? 50, timeout = defaults.timeout ?? 1e3, message } = options;
		// @ts-expect-error private poll access
		const assertion = expect(null, message).withContext({ poll: true });
		fn = fn.bind(assertion);
		const test = chai$1.util.flag(assertion, "vitest-test");
		if (!test) throw new Error("expect.poll() must be called inside a test");
		const proxy = new Proxy(assertion, { get(target, key, receiver) {
			const assertionFunction = Reflect.get(target, key, receiver);
			if (typeof assertionFunction !== "function") return assertionFunction instanceof chai$1.Assertion ? proxy : assertionFunction;
			if (key === "assert") return assertionFunction;
			if (typeof key === "string" && unsupported.includes(key)) throw new SyntaxError(`expect.poll() is not supported in combination with .${key}(). Use vi.waitFor() if your assertion condition is unstable.`);
			return function(...args) {
				const STACK_TRACE_ERROR = new Error("STACK_TRACE_ERROR");
				const promise = () => new Promise((resolve, reject) => {
					let intervalId;
					let timeoutId;
					let lastError;
					const { setTimeout, clearTimeout } = getSafeTimers();
					const check = async () => {
						try {
							chai$1.util.flag(assertion, "_name", key);
							const obj = await fn();
							chai$1.util.flag(assertion, "object", obj);
							resolve(await assertionFunction.call(assertion, ...args));
							clearTimeout(intervalId);
							clearTimeout(timeoutId);
						} catch (err) {
							lastError = err;
							if (!chai$1.util.flag(assertion, "_isLastPollAttempt")) intervalId = setTimeout(check, interval);
						}
					};
					timeoutId = setTimeout(() => {
						clearTimeout(intervalId);
						chai$1.util.flag(assertion, "_isLastPollAttempt", true);
						const rejectWithCause = (cause) => {
							reject(copyStackTrace$1(new Error("Matcher did not succeed in time.", { cause }), STACK_TRACE_ERROR));
						};
						check().then(() => rejectWithCause(lastError)).catch((e) => rejectWithCause(e));
					}, timeout);
					check();
				});
				let awaited = false;
				test.onFinished ??= [];
				test.onFinished.push(() => {
					if (!awaited) {
						const negated = chai$1.util.flag(assertion, "negate") ? "not." : "";
						const name = chai$1.util.flag(assertion, "_poll.element") ? "element(locator)" : "poll(assertion)";
						const assertionString = `expect.${name}.${negated}${String(key)}()`;
						const error = new Error(`${assertionString} was not awaited. This assertion is asynchronous and must be awaited; otherwise, it is not executed to avoid unhandled rejections:\n\nawait ${assertionString}\n`);
						throw copyStackTrace$1(error, STACK_TRACE_ERROR);
					}
				});
				let resultPromise;
				// only .then is enough to check awaited, but we type this as `Promise<void>` in global types
				// so let's follow it
				return {
					then(onFulfilled, onRejected) {
						awaited = true;
						return (resultPromise ||= promise()).then(onFulfilled, onRejected);
					},
					catch(onRejected) {
						return (resultPromise ||= promise()).catch(onRejected);
					},
					finally(onFinally) {
						return (resultPromise ||= promise()).finally(onFinally);
					},
					[Symbol.toStringTag]: "Promise"
				};
			};
		} });
		return proxy;
	};
}
function copyStackTrace$1(target, source) {
	if (source.stack !== void 0) target.stack = source.stack.replace(source.message, target.message);
	return target;
}

function commonjsRequire(path) {
	throw new Error('Could not dynamically require "' + path + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}

var chaiSubset$1 = {exports: {}};

var chaiSubset = chaiSubset$1.exports;

var hasRequiredChaiSubset;

function requireChaiSubset () {
	if (hasRequiredChaiSubset) return chaiSubset$1.exports;
	hasRequiredChaiSubset = 1;
	(function (module, exports) {
		(function() {
			(function(chaiSubset) {
				if (typeof commonjsRequire === 'function' && 'object' === 'object' && 'object' === 'object') {
					return module.exports = chaiSubset;
				} else {
					return chai.use(chaiSubset);
				}
			})(function(chai, utils) {
				var Assertion = chai.Assertion;
				var assertionPrototype = Assertion.prototype;

				Assertion.addMethod('containSubset', function (expected) {
					var actual = utils.flag(this, 'object');
					var showDiff = chai.config.showDiff;

					assertionPrototype.assert.call(this,
						compare(expected, actual),
						'expected #{act} to contain subset #{exp}',
						'expected #{act} to not contain subset #{exp}',
						expected,
						actual,
						showDiff
					);
				});

				chai.assert.containSubset = function(val, exp, msg) {
					new chai.Assertion(val, msg).to.be.containSubset(exp);
				};

				function compare(expected, actual) {
					if (expected === actual) {
						return true;
					}
					if (typeof(actual) !== typeof(expected)) {
						return false;
					}
					if (typeof(expected) !== 'object' || expected === null) {
						return expected === actual;
					}
					if (!!expected && !actual) {
						return false;
					}

					if (Array.isArray(expected)) {
						if (typeof(actual.length) !== 'number') {
							return false;
						}
						var aa = Array.prototype.slice.call(actual);
						return expected.every(function (exp) {
							return aa.some(function (act) {
								return compare(exp, act);
							});
						});
					}

					if (expected instanceof Date) {
						if (actual instanceof Date) {
							return expected.getTime() === actual.getTime();
						} else {
							return false;
						}
					}

					return Object.keys(expected).every(function (key) {
						var eo = expected[key];
						var ao = actual[key];
						if (typeof(eo) === 'object' && eo !== null && ao !== null) {
							return compare(eo, ao);
						}
						if (typeof(eo) === 'function') {
							return eo(ao);
						}
						return ao === eo;
					});
				}
			});

		}).call(chaiSubset); 
	} (chaiSubset$1));
	return chaiSubset$1.exports;
}

var chaiSubsetExports = requireChaiSubset();
var Subset = /*@__PURE__*/getDefaultExportFromCjs(chaiSubsetExports);

function createAssertionMessage(util, assertion, hasArgs) {
	const not = util.flag(assertion, "negate") ? "not." : "";
	const name = `${util.flag(assertion, "_name")}(${"expected" })`;
	const promiseName = util.flag(assertion, "promise");
	const promise = promiseName ? `.${promiseName}` : "";
	return `expect(actual)${promise}.${not}${name}`;
}
function recordAsyncExpect(_test, promise, assertion, error) {
	const test = _test;
	// record promise for test, that resolves before test ends
	if (test && promise instanceof Promise) {
		// if promise is explicitly awaited, remove it from the list
		promise = promise.finally(() => {
			if (!test.promises) return;
			const index = test.promises.indexOf(promise);
			if (index !== -1) test.promises.splice(index, 1);
		});
		// record promise
		if (!test.promises) test.promises = [];
		test.promises.push(promise);
		let resolved = false;
		test.onFinished ??= [];
		test.onFinished.push(() => {
			if (!resolved) {
				const processor = globalThis.__vitest_worker__?.onFilterStackTrace || ((s) => s || "");
				const stack = processor(error.stack);
				console.warn([
					`Promise returned by \`${assertion}\` was not awaited. `,
					"Vitest currently auto-awaits hanging assertions at the end of the test, but this will cause the test to fail in Vitest 3. ",
					"Please remember to await the assertion.\n",
					stack
				].join(""));
			}
		});
		return {
			then(onFulfilled, onRejected) {
				resolved = true;
				return promise.then(onFulfilled, onRejected);
			},
			catch(onRejected) {
				return promise.catch(onRejected);
			},
			finally(onFinally) {
				return promise.finally(onFinally);
			},
			[Symbol.toStringTag]: "Promise"
		};
	}
	return promise;
}

let _client;
function getSnapshotClient() {
	if (!_client) _client = new SnapshotClient({ isEqual: (received, expected) => {
		return equals(received, expected, [iterableEquality, subsetEquality]);
	} });
	return _client;
}
function getError(expected, promise) {
	if (typeof expected !== "function") {
		if (!promise) throw new Error(`expected must be a function, received ${typeof expected}`);
		// when "promised", it receives thrown error
		return expected;
	}
	try {
		expected();
	} catch (e) {
		return e;
	}
	throw new Error("snapshot function didn't throw");
}
function getTestNames(test) {
	return {
		filepath: test.file.filepath,
		name: getNames(test).slice(1).join(" > "),
		testId: test.id
	};
}
const SnapshotPlugin = (chai, utils) => {
	function getTest(assertionName, obj) {
		const test = utils.flag(obj, "vitest-test");
		if (!test) throw new Error(`'${assertionName}' cannot be used without test context`);
		return test;
	}
	for (const key of ["matchSnapshot", "toMatchSnapshot"]) utils.addMethod(chai.Assertion.prototype, key, function(properties, message) {
		utils.flag(this, "_name", key);
		const isNot = utils.flag(this, "negate");
		if (isNot) throw new Error(`${key} cannot be used with "not"`);
		const expected = utils.flag(this, "object");
		const test = getTest(key, this);
		if (typeof properties === "string" && typeof message === "undefined") {
			message = properties;
			properties = void 0;
		}
		const errorMessage = utils.flag(this, "message");
		getSnapshotClient().assert({
			received: expected,
			message,
			isInline: false,
			properties,
			errorMessage,
			...getTestNames(test)
		});
	});
	utils.addMethod(chai.Assertion.prototype, "toMatchFileSnapshot", function(file, message) {
		utils.flag(this, "_name", "toMatchFileSnapshot");
		const isNot = utils.flag(this, "negate");
		if (isNot) throw new Error("toMatchFileSnapshot cannot be used with \"not\"");
		const error = new Error("resolves");
		const expected = utils.flag(this, "object");
		const test = getTest("toMatchFileSnapshot", this);
		const errorMessage = utils.flag(this, "message");
		const promise = getSnapshotClient().assertRaw({
			received: expected,
			message,
			isInline: false,
			rawSnapshot: { file },
			errorMessage,
			...getTestNames(test)
		});
		return recordAsyncExpect(test, promise, createAssertionMessage(utils, this), error);
	});
	utils.addMethod(chai.Assertion.prototype, "toMatchInlineSnapshot", function __INLINE_SNAPSHOT__(properties, inlineSnapshot, message) {
		utils.flag(this, "_name", "toMatchInlineSnapshot");
		const isNot = utils.flag(this, "negate");
		if (isNot) throw new Error("toMatchInlineSnapshot cannot be used with \"not\"");
		const test = getTest("toMatchInlineSnapshot", this);
		const isInsideEach = test.each || test.suite?.each;
		if (isInsideEach) throw new Error("InlineSnapshot cannot be used inside of test.each or describe.each");
		const expected = utils.flag(this, "object");
		const error = utils.flag(this, "error");
		if (typeof properties === "string") {
			message = inlineSnapshot;
			inlineSnapshot = properties;
			properties = void 0;
		}
		if (inlineSnapshot) inlineSnapshot = stripSnapshotIndentation(inlineSnapshot);
		const errorMessage = utils.flag(this, "message");
		getSnapshotClient().assert({
			received: expected,
			message,
			isInline: true,
			properties,
			inlineSnapshot,
			error,
			errorMessage,
			...getTestNames(test)
		});
	});
	utils.addMethod(chai.Assertion.prototype, "toThrowErrorMatchingSnapshot", function(message) {
		utils.flag(this, "_name", "toThrowErrorMatchingSnapshot");
		const isNot = utils.flag(this, "negate");
		if (isNot) throw new Error("toThrowErrorMatchingSnapshot cannot be used with \"not\"");
		const expected = utils.flag(this, "object");
		const test = getTest("toThrowErrorMatchingSnapshot", this);
		const promise = utils.flag(this, "promise");
		const errorMessage = utils.flag(this, "message");
		getSnapshotClient().assert({
			received: getError(expected, promise),
			message,
			errorMessage,
			...getTestNames(test)
		});
	});
	utils.addMethod(chai.Assertion.prototype, "toThrowErrorMatchingInlineSnapshot", function __INLINE_SNAPSHOT__(inlineSnapshot, message) {
		const isNot = utils.flag(this, "negate");
		if (isNot) throw new Error("toThrowErrorMatchingInlineSnapshot cannot be used with \"not\"");
		const test = getTest("toThrowErrorMatchingInlineSnapshot", this);
		const isInsideEach = test.each || test.suite?.each;
		if (isInsideEach) throw new Error("InlineSnapshot cannot be used inside of test.each or describe.each");
		const expected = utils.flag(this, "object");
		const error = utils.flag(this, "error");
		const promise = utils.flag(this, "promise");
		const errorMessage = utils.flag(this, "message");
		if (inlineSnapshot) inlineSnapshot = stripSnapshotIndentation(inlineSnapshot);
		getSnapshotClient().assert({
			received: getError(expected, promise),
			message,
			inlineSnapshot,
			isInline: true,
			error,
			errorMessage,
			...getTestNames(test)
		});
	});
	utils.addMethod(chai.expect, "addSnapshotSerializer", addSerializer);
};

chai$1.use(JestExtend);
chai$1.use(JestChaiExpect);
chai$1.use(Subset);
chai$1.use(SnapshotPlugin);
chai$1.use(JestAsymmetricMatchers);

function createExpect(test) {
	const expect = (value, message) => {
		const { assertionCalls } = getState(expect);
		setState({ assertionCalls: assertionCalls + 1 }, expect);
		const assert = chai$1.expect(value, message);
		const _test = test || getCurrentTest();
		if (_test)
 // @ts-expect-error internal
		return assert.withTest(_test);
		else return assert;
	};
	Object.assign(expect, chai$1.expect);
	Object.assign(expect, globalThis[ASYMMETRIC_MATCHERS_OBJECT]);
	expect.getState = () => getState(expect);
	expect.setState = (state) => setState(state, expect);
	// @ts-expect-error global is not typed
	const globalState = getState(globalThis[GLOBAL_EXPECT]) || {};
	setState({
		...globalState,
		assertionCalls: 0,
		isExpectingAssertions: false,
		isExpectingAssertionsError: null,
		expectedAssertionsNumber: null,
		expectedAssertionsNumberErrorGen: null,
		environment: getCurrentEnvironment(),
		get testPath() {
			return getWorkerState().filepath;
		},
		currentTestName: test ? getTestName(test) : globalState.currentTestName
	}, expect);
	// @ts-expect-error untyped
	expect.extend = (matchers) => chai$1.expect.extend(expect, matchers);
	expect.addEqualityTesters = (customTesters) => addCustomEqualityTesters(customTesters);
	expect.soft = (...args) => {
		// @ts-expect-error private soft access
		return expect(...args).withContext({ soft: true });
	};
	expect.poll = createExpectPoll(expect);
	expect.unreachable = (message) => {
		chai$1.assert.fail(`expected${message ? ` "${message}" ` : " "}not to be reached`);
	};
	function assertions(expected) {
		const errorGen = () => new Error(`expected number of assertions to be ${expected}, but got ${expect.getState().assertionCalls}`);
		if (Error.captureStackTrace) Error.captureStackTrace(errorGen(), assertions);
		expect.setState({
			expectedAssertionsNumber: expected,
			expectedAssertionsNumberErrorGen: errorGen
		});
	}
	function hasAssertions() {
		const error = new Error("expected any number of assertion, but got none");
		if (Error.captureStackTrace) Error.captureStackTrace(error, hasAssertions);
		expect.setState({
			isExpectingAssertions: true,
			isExpectingAssertionsError: error
		});
	}
	chai$1.util.addMethod(expect, "assertions", assertions);
	chai$1.util.addMethod(expect, "hasAssertions", hasAssertions);
	expect.extend(customMatchers);
	return expect;
}
const globalExpect = createExpect();
Object.defineProperty(globalThis, GLOBAL_EXPECT, {
	value: globalExpect,
	writable: true,
	configurable: true
});

/**
* Gives access to injected context provided from the main thread.
* This usually returns a value provided by `globalSetup` or an external library.
*/
function inject(key) {
	const workerState = getWorkerState();
	return workerState.providedContext[key];
}

var fakeTimersSrc = {};

var global;
var hasRequiredGlobal;

function requireGlobal () {
	if (hasRequiredGlobal) return global;
	hasRequiredGlobal = 1;

	/**
	 * A reference to the global object
	 * @type {object} globalObject
	 */
	var globalObject;

	/* istanbul ignore else */
	if (typeof commonjsGlobal !== "undefined") {
	    // Node
	    globalObject = commonjsGlobal;
	} else if (typeof window !== "undefined") {
	    // Browser
	    globalObject = window;
	} else {
	    // WebWorker
	    globalObject = self;
	}

	global = globalObject;
	return global;
}

var throwsOnProto_1;
var hasRequiredThrowsOnProto;

function requireThrowsOnProto () {
	if (hasRequiredThrowsOnProto) return throwsOnProto_1;
	hasRequiredThrowsOnProto = 1;

	/**
	 * Is true when the environment causes an error to be thrown for accessing the
	 * __proto__ property.
	 * This is necessary in order to support `node --disable-proto=throw`.
	 *
	 * See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/proto
	 * @type {boolean}
	 */
	let throwsOnProto;
	try {
	    const object = {};
	    // eslint-disable-next-line no-proto, no-unused-expressions
	    object.__proto__;
	    throwsOnProto = false;
	} catch (_) {
	    // This branch is covered when tests are run with `--disable-proto=throw`,
	    // however we can test both branches at the same time, so this is ignored
	    /* istanbul ignore next */
	    throwsOnProto = true;
	}

	throwsOnProto_1 = throwsOnProto;
	return throwsOnProto_1;
}

var copyPrototypeMethods;
var hasRequiredCopyPrototypeMethods;

function requireCopyPrototypeMethods () {
	if (hasRequiredCopyPrototypeMethods) return copyPrototypeMethods;
	hasRequiredCopyPrototypeMethods = 1;

	var call = Function.call;
	var throwsOnProto = requireThrowsOnProto();

	var disallowedProperties = [
	    // ignore size because it throws from Map
	    "size",
	    "caller",
	    "callee",
	    "arguments",
	];

	// This branch is covered when tests are run with `--disable-proto=throw`,
	// however we can test both branches at the same time, so this is ignored
	/* istanbul ignore next */
	if (throwsOnProto) {
	    disallowedProperties.push("__proto__");
	}

	copyPrototypeMethods = function copyPrototypeMethods(prototype) {
	    // eslint-disable-next-line @sinonjs/no-prototype-methods/no-prototype-methods
	    return Object.getOwnPropertyNames(prototype).reduce(function (
	        result,
	        name
	    ) {
	        if (disallowedProperties.includes(name)) {
	            return result;
	        }

	        if (typeof prototype[name] !== "function") {
	            return result;
	        }

	        result[name] = call.bind(prototype[name]);

	        return result;
	    },
	    Object.create(null));
	};
	return copyPrototypeMethods;
}

var array;
var hasRequiredArray;

function requireArray () {
	if (hasRequiredArray) return array;
	hasRequiredArray = 1;

	var copyPrototype = requireCopyPrototypeMethods();

	array = copyPrototype(Array.prototype);
	return array;
}

var calledInOrder_1;
var hasRequiredCalledInOrder;

function requireCalledInOrder () {
	if (hasRequiredCalledInOrder) return calledInOrder_1;
	hasRequiredCalledInOrder = 1;

	var every = requireArray().every;

	/**
	 * @private
	 */
	function hasCallsLeft(callMap, spy) {
	    if (callMap[spy.id] === undefined) {
	        callMap[spy.id] = 0;
	    }

	    return callMap[spy.id] < spy.callCount;
	}

	/**
	 * @private
	 */
	function checkAdjacentCalls(callMap, spy, index, spies) {
	    var calledBeforeNext = true;

	    if (index !== spies.length - 1) {
	        calledBeforeNext = spy.calledBefore(spies[index + 1]);
	    }

	    if (hasCallsLeft(callMap, spy) && calledBeforeNext) {
	        callMap[spy.id] += 1;
	        return true;
	    }

	    return false;
	}

	/**
	 * A Sinon proxy object (fake, spy, stub)
	 * @typedef {object} SinonProxy
	 * @property {Function} calledBefore - A method that determines if this proxy was called before another one
	 * @property {string} id - Some id
	 * @property {number} callCount - Number of times this proxy has been called
	 */

	/**
	 * Returns true when the spies have been called in the order they were supplied in
	 * @param  {SinonProxy[] | SinonProxy} spies An array of proxies, or several proxies as arguments
	 * @returns {boolean} true when spies are called in order, false otherwise
	 */
	function calledInOrder(spies) {
	    var callMap = {};
	    // eslint-disable-next-line no-underscore-dangle
	    var _spies = arguments.length > 1 ? arguments : spies;

	    return every(_spies, checkAdjacentCalls.bind(null, callMap));
	}

	calledInOrder_1 = calledInOrder;
	return calledInOrder_1;
}

var className_1;
var hasRequiredClassName;

function requireClassName () {
	if (hasRequiredClassName) return className_1;
	hasRequiredClassName = 1;

	/**
	 * Returns a display name for a value from a constructor
	 * @param  {object} value A value to examine
	 * @returns {(string|null)} A string or null
	 */
	function className(value) {
	    const name = value.constructor && value.constructor.name;
	    return name || null;
	}

	className_1 = className;
	return className_1;
}

var deprecated = {};

/* eslint-disable no-console */

var hasRequiredDeprecated;

function requireDeprecated () {
	if (hasRequiredDeprecated) return deprecated;
	hasRequiredDeprecated = 1;
	(function (exports) {

		/**
		 * Returns a function that will invoke the supplied function and print a
		 * deprecation warning to the console each time it is called.
		 * @param  {Function} func
		 * @param  {string} msg
		 * @returns {Function}
		 */
		exports.wrap = function (func, msg) {
		    var wrapped = function () {
		        exports.printWarning(msg);
		        return func.apply(this, arguments);
		    };
		    if (func.prototype) {
		        wrapped.prototype = func.prototype;
		    }
		    return wrapped;
		};

		/**
		 * Returns a string which can be supplied to `wrap()` to notify the user that a
		 * particular part of the sinon API has been deprecated.
		 * @param  {string} packageName
		 * @param  {string} funcName
		 * @returns {string}
		 */
		exports.defaultMsg = function (packageName, funcName) {
		    return `${packageName}.${funcName} is deprecated and will be removed from the public API in a future version of ${packageName}.`;
		};

		/**
		 * Prints a warning on the console, when it exists
		 * @param  {string} msg
		 * @returns {undefined}
		 */
		exports.printWarning = function (msg) {
		    /* istanbul ignore next */
		    if (typeof process === "object" && process.emitWarning) {
		        // Emit Warnings in Node
		        process.emitWarning(msg);
		    } else if (console.info) {
		        console.info(msg);
		    } else {
		        console.log(msg);
		    }
		}; 
	} (deprecated));
	return deprecated;
}

var every;
var hasRequiredEvery;

function requireEvery () {
	if (hasRequiredEvery) return every;
	hasRequiredEvery = 1;

	/**
	 * Returns true when fn returns true for all members of obj.
	 * This is an every implementation that works for all iterables
	 * @param  {object}   obj
	 * @param  {Function} fn
	 * @returns {boolean}
	 */
	every = function every(obj, fn) {
	    var pass = true;

	    try {
	        // eslint-disable-next-line @sinonjs/no-prototype-methods/no-prototype-methods
	        obj.forEach(function () {
	            if (!fn.apply(this, arguments)) {
	                // Throwing an error is the only way to break `forEach`
	                throw new Error();
	            }
	        });
	    } catch (e) {
	        pass = false;
	    }

	    return pass;
	};
	return every;
}

var functionName;
var hasRequiredFunctionName;

function requireFunctionName () {
	if (hasRequiredFunctionName) return functionName;
	hasRequiredFunctionName = 1;

	/**
	 * Returns a display name for a function
	 * @param  {Function} func
	 * @returns {string}
	 */
	functionName = function functionName(func) {
	    if (!func) {
	        return "";
	    }

	    try {
	        return (
	            func.displayName ||
	            func.name ||
	            // Use function decomposition as a last resort to get function
	            // name. Does not rely on function decomposition to work - if it
	            // doesn't debugging will be slightly less informative
	            // (i.e. toString will say 'spy' rather than 'myFunc').
	            (String(func).match(/function ([^\s(]+)/) || [])[1]
	        );
	    } catch (e) {
	        // Stringify may fail and we might get an exception, as a last-last
	        // resort fall back to empty string.
	        return "";
	    }
	};
	return functionName;
}

var orderByFirstCall_1;
var hasRequiredOrderByFirstCall;

function requireOrderByFirstCall () {
	if (hasRequiredOrderByFirstCall) return orderByFirstCall_1;
	hasRequiredOrderByFirstCall = 1;

	var sort = requireArray().sort;
	var slice = requireArray().slice;

	/**
	 * @private
	 */
	function comparator(a, b) {
	    // uuid, won't ever be equal
	    var aCall = a.getCall(0);
	    var bCall = b.getCall(0);
	    var aId = (aCall && aCall.callId) || -1;
	    var bId = (bCall && bCall.callId) || -1;

	    return aId < bId ? -1 : 1;
	}

	/**
	 * A Sinon proxy object (fake, spy, stub)
	 * @typedef {object} SinonProxy
	 * @property {Function} getCall - A method that can return the first call
	 */

	/**
	 * Sorts an array of SinonProxy instances (fake, spy, stub) by their first call
	 * @param  {SinonProxy[] | SinonProxy} spies
	 * @returns {SinonProxy[]}
	 */
	function orderByFirstCall(spies) {
	    return sort(slice(spies), comparator);
	}

	orderByFirstCall_1 = orderByFirstCall;
	return orderByFirstCall_1;
}

var _function;
var hasRequired_function;

function require_function () {
	if (hasRequired_function) return _function;
	hasRequired_function = 1;

	var copyPrototype = requireCopyPrototypeMethods();

	_function = copyPrototype(Function.prototype);
	return _function;
}

var map;
var hasRequiredMap;

function requireMap () {
	if (hasRequiredMap) return map;
	hasRequiredMap = 1;

	var copyPrototype = requireCopyPrototypeMethods();

	map = copyPrototype(Map.prototype);
	return map;
}

var object;
var hasRequiredObject;

function requireObject () {
	if (hasRequiredObject) return object;
	hasRequiredObject = 1;

	var copyPrototype = requireCopyPrototypeMethods();

	object = copyPrototype(Object.prototype);
	return object;
}

var set;
var hasRequiredSet;

function requireSet () {
	if (hasRequiredSet) return set;
	hasRequiredSet = 1;

	var copyPrototype = requireCopyPrototypeMethods();

	set = copyPrototype(Set.prototype);
	return set;
}

var string;
var hasRequiredString;

function requireString () {
	if (hasRequiredString) return string;
	hasRequiredString = 1;

	var copyPrototype = requireCopyPrototypeMethods();

	string = copyPrototype(String.prototype);
	return string;
}

var prototypes;
var hasRequiredPrototypes;

function requirePrototypes () {
	if (hasRequiredPrototypes) return prototypes;
	hasRequiredPrototypes = 1;

	prototypes = {
	    array: requireArray(),
	    function: require_function(),
	    map: requireMap(),
	    object: requireObject(),
	    set: requireSet(),
	    string: requireString(),
	};
	return prototypes;
}

var typeDetect$1 = {exports: {}};

var typeDetect = typeDetect$1.exports;

var hasRequiredTypeDetect;

function requireTypeDetect () {
	if (hasRequiredTypeDetect) return typeDetect$1.exports;
	hasRequiredTypeDetect = 1;
	(function (module, exports) {
		(function (global, factory) {
			module.exports = factory() ;
		}(typeDetect, (function () {
		/* !
		 * type-detect
		 * Copyright(c) 2013 jake luer <jake@alogicalparadox.com>
		 * MIT Licensed
		 */
		var promiseExists = typeof Promise === 'function';

		/* eslint-disable no-undef */
		var globalObject = typeof self === 'object' ? self : commonjsGlobal; // eslint-disable-line id-blacklist

		var symbolExists = typeof Symbol !== 'undefined';
		var mapExists = typeof Map !== 'undefined';
		var setExists = typeof Set !== 'undefined';
		var weakMapExists = typeof WeakMap !== 'undefined';
		var weakSetExists = typeof WeakSet !== 'undefined';
		var dataViewExists = typeof DataView !== 'undefined';
		var symbolIteratorExists = symbolExists && typeof Symbol.iterator !== 'undefined';
		var symbolToStringTagExists = symbolExists && typeof Symbol.toStringTag !== 'undefined';
		var setEntriesExists = setExists && typeof Set.prototype.entries === 'function';
		var mapEntriesExists = mapExists && typeof Map.prototype.entries === 'function';
		var setIteratorPrototype = setEntriesExists && Object.getPrototypeOf(new Set().entries());
		var mapIteratorPrototype = mapEntriesExists && Object.getPrototypeOf(new Map().entries());
		var arrayIteratorExists = symbolIteratorExists && typeof Array.prototype[Symbol.iterator] === 'function';
		var arrayIteratorPrototype = arrayIteratorExists && Object.getPrototypeOf([][Symbol.iterator]());
		var stringIteratorExists = symbolIteratorExists && typeof String.prototype[Symbol.iterator] === 'function';
		var stringIteratorPrototype = stringIteratorExists && Object.getPrototypeOf(''[Symbol.iterator]());
		var toStringLeftSliceLength = 8;
		var toStringRightSliceLength = -1;
		/**
		 * ### typeOf (obj)
		 *
		 * Uses `Object.prototype.toString` to determine the type of an object,
		 * normalising behaviour across engine versions & well optimised.
		 *
		 * @param {Mixed} object
		 * @return {String} object type
		 * @api public
		 */
		function typeDetect(obj) {
		  /* ! Speed optimisation
		   * Pre:
		   *   string literal     x 3,039,035 ops/sec ±1.62% (78 runs sampled)
		   *   boolean literal    x 1,424,138 ops/sec ±4.54% (75 runs sampled)
		   *   number literal     x 1,653,153 ops/sec ±1.91% (82 runs sampled)
		   *   undefined          x 9,978,660 ops/sec ±1.92% (75 runs sampled)
		   *   function           x 2,556,769 ops/sec ±1.73% (77 runs sampled)
		   * Post:
		   *   string literal     x 38,564,796 ops/sec ±1.15% (79 runs sampled)
		   *   boolean literal    x 31,148,940 ops/sec ±1.10% (79 runs sampled)
		   *   number literal     x 32,679,330 ops/sec ±1.90% (78 runs sampled)
		   *   undefined          x 32,363,368 ops/sec ±1.07% (82 runs sampled)
		   *   function           x 31,296,870 ops/sec ±0.96% (83 runs sampled)
		   */
		  var typeofObj = typeof obj;
		  if (typeofObj !== 'object') {
		    return typeofObj;
		  }

		  /* ! Speed optimisation
		   * Pre:
		   *   null               x 28,645,765 ops/sec ±1.17% (82 runs sampled)
		   * Post:
		   *   null               x 36,428,962 ops/sec ±1.37% (84 runs sampled)
		   */
		  if (obj === null) {
		    return 'null';
		  }

		  /* ! Spec Conformance
		   * Test: `Object.prototype.toString.call(window)``
		   *  - Node === "[object global]"
		   *  - Chrome === "[object global]"
		   *  - Firefox === "[object Window]"
		   *  - PhantomJS === "[object Window]"
		   *  - Safari === "[object Window]"
		   *  - IE 11 === "[object Window]"
		   *  - IE Edge === "[object Window]"
		   * Test: `Object.prototype.toString.call(this)``
		   *  - Chrome Worker === "[object global]"
		   *  - Firefox Worker === "[object DedicatedWorkerGlobalScope]"
		   *  - Safari Worker === "[object DedicatedWorkerGlobalScope]"
		   *  - IE 11 Worker === "[object WorkerGlobalScope]"
		   *  - IE Edge Worker === "[object WorkerGlobalScope]"
		   */
		  if (obj === globalObject) {
		    return 'global';
		  }

		  /* ! Speed optimisation
		   * Pre:
		   *   array literal      x 2,888,352 ops/sec ±0.67% (82 runs sampled)
		   * Post:
		   *   array literal      x 22,479,650 ops/sec ±0.96% (81 runs sampled)
		   */
		  if (
		    Array.isArray(obj) &&
		    (symbolToStringTagExists === false || !(Symbol.toStringTag in obj))
		  ) {
		    return 'Array';
		  }

		  // Not caching existence of `window` and related properties due to potential
		  // for `window` to be unset before tests in quasi-browser environments.
		  if (typeof window === 'object' && window !== null) {
		    /* ! Spec Conformance
		     * (https://html.spec.whatwg.org/multipage/browsers.html#location)
		     * WhatWG HTML$7.7.3 - The `Location` interface
		     * Test: `Object.prototype.toString.call(window.location)``
		     *  - IE <=11 === "[object Object]"
		     *  - IE Edge <=13 === "[object Object]"
		     */
		    if (typeof window.location === 'object' && obj === window.location) {
		      return 'Location';
		    }

		    /* ! Spec Conformance
		     * (https://html.spec.whatwg.org/#document)
		     * WhatWG HTML$3.1.1 - The `Document` object
		     * Note: Most browsers currently adher to the W3C DOM Level 2 spec
		     *       (https://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-26809268)
		     *       which suggests that browsers should use HTMLTableCellElement for
		     *       both TD and TH elements. WhatWG separates these.
		     *       WhatWG HTML states:
		     *         > For historical reasons, Window objects must also have a
		     *         > writable, configurable, non-enumerable property named
		     *         > HTMLDocument whose value is the Document interface object.
		     * Test: `Object.prototype.toString.call(document)``
		     *  - Chrome === "[object HTMLDocument]"
		     *  - Firefox === "[object HTMLDocument]"
		     *  - Safari === "[object HTMLDocument]"
		     *  - IE <=10 === "[object Document]"
		     *  - IE 11 === "[object HTMLDocument]"
		     *  - IE Edge <=13 === "[object HTMLDocument]"
		     */
		    if (typeof window.document === 'object' && obj === window.document) {
		      return 'Document';
		    }

		    if (typeof window.navigator === 'object') {
		      /* ! Spec Conformance
		       * (https://html.spec.whatwg.org/multipage/webappapis.html#mimetypearray)
		       * WhatWG HTML$8.6.1.5 - Plugins - Interface MimeTypeArray
		       * Test: `Object.prototype.toString.call(navigator.mimeTypes)``
		       *  - IE <=10 === "[object MSMimeTypesCollection]"
		       */
		      if (typeof window.navigator.mimeTypes === 'object' &&
		          obj === window.navigator.mimeTypes) {
		        return 'MimeTypeArray';
		      }

		      /* ! Spec Conformance
		       * (https://html.spec.whatwg.org/multipage/webappapis.html#pluginarray)
		       * WhatWG HTML$8.6.1.5 - Plugins - Interface PluginArray
		       * Test: `Object.prototype.toString.call(navigator.plugins)``
		       *  - IE <=10 === "[object MSPluginsCollection]"
		       */
		      if (typeof window.navigator.plugins === 'object' &&
		          obj === window.navigator.plugins) {
		        return 'PluginArray';
		      }
		    }

		    if ((typeof window.HTMLElement === 'function' ||
		        typeof window.HTMLElement === 'object') &&
		        obj instanceof window.HTMLElement) {
		      /* ! Spec Conformance
		      * (https://html.spec.whatwg.org/multipage/webappapis.html#pluginarray)
		      * WhatWG HTML$4.4.4 - The `blockquote` element - Interface `HTMLQuoteElement`
		      * Test: `Object.prototype.toString.call(document.createElement('blockquote'))``
		      *  - IE <=10 === "[object HTMLBlockElement]"
		      */
		      if (obj.tagName === 'BLOCKQUOTE') {
		        return 'HTMLQuoteElement';
		      }

		      /* ! Spec Conformance
		       * (https://html.spec.whatwg.org/#htmltabledatacellelement)
		       * WhatWG HTML$4.9.9 - The `td` element - Interface `HTMLTableDataCellElement`
		       * Note: Most browsers currently adher to the W3C DOM Level 2 spec
		       *       (https://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-82915075)
		       *       which suggests that browsers should use HTMLTableCellElement for
		       *       both TD and TH elements. WhatWG separates these.
		       * Test: Object.prototype.toString.call(document.createElement('td'))
		       *  - Chrome === "[object HTMLTableCellElement]"
		       *  - Firefox === "[object HTMLTableCellElement]"
		       *  - Safari === "[object HTMLTableCellElement]"
		       */
		      if (obj.tagName === 'TD') {
		        return 'HTMLTableDataCellElement';
		      }

		      /* ! Spec Conformance
		       * (https://html.spec.whatwg.org/#htmltableheadercellelement)
		       * WhatWG HTML$4.9.9 - The `td` element - Interface `HTMLTableHeaderCellElement`
		       * Note: Most browsers currently adher to the W3C DOM Level 2 spec
		       *       (https://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-82915075)
		       *       which suggests that browsers should use HTMLTableCellElement for
		       *       both TD and TH elements. WhatWG separates these.
		       * Test: Object.prototype.toString.call(document.createElement('th'))
		       *  - Chrome === "[object HTMLTableCellElement]"
		       *  - Firefox === "[object HTMLTableCellElement]"
		       *  - Safari === "[object HTMLTableCellElement]"
		       */
		      if (obj.tagName === 'TH') {
		        return 'HTMLTableHeaderCellElement';
		      }
		    }
		  }

		  /* ! Speed optimisation
		  * Pre:
		  *   Float64Array       x 625,644 ops/sec ±1.58% (80 runs sampled)
		  *   Float32Array       x 1,279,852 ops/sec ±2.91% (77 runs sampled)
		  *   Uint32Array        x 1,178,185 ops/sec ±1.95% (83 runs sampled)
		  *   Uint16Array        x 1,008,380 ops/sec ±2.25% (80 runs sampled)
		  *   Uint8Array         x 1,128,040 ops/sec ±2.11% (81 runs sampled)
		  *   Int32Array         x 1,170,119 ops/sec ±2.88% (80 runs sampled)
		  *   Int16Array         x 1,176,348 ops/sec ±5.79% (86 runs sampled)
		  *   Int8Array          x 1,058,707 ops/sec ±4.94% (77 runs sampled)
		  *   Uint8ClampedArray  x 1,110,633 ops/sec ±4.20% (80 runs sampled)
		  * Post:
		  *   Float64Array       x 7,105,671 ops/sec ±13.47% (64 runs sampled)
		  *   Float32Array       x 5,887,912 ops/sec ±1.46% (82 runs sampled)
		  *   Uint32Array        x 6,491,661 ops/sec ±1.76% (79 runs sampled)
		  *   Uint16Array        x 6,559,795 ops/sec ±1.67% (82 runs sampled)
		  *   Uint8Array         x 6,463,966 ops/sec ±1.43% (85 runs sampled)
		  *   Int32Array         x 5,641,841 ops/sec ±3.49% (81 runs sampled)
		  *   Int16Array         x 6,583,511 ops/sec ±1.98% (80 runs sampled)
		  *   Int8Array          x 6,606,078 ops/sec ±1.74% (81 runs sampled)
		  *   Uint8ClampedArray  x 6,602,224 ops/sec ±1.77% (83 runs sampled)
		  */
		  var stringTag = (symbolToStringTagExists && obj[Symbol.toStringTag]);
		  if (typeof stringTag === 'string') {
		    return stringTag;
		  }

		  var objPrototype = Object.getPrototypeOf(obj);
		  /* ! Speed optimisation
		  * Pre:
		  *   regex literal      x 1,772,385 ops/sec ±1.85% (77 runs sampled)
		  *   regex constructor  x 2,143,634 ops/sec ±2.46% (78 runs sampled)
		  * Post:
		  *   regex literal      x 3,928,009 ops/sec ±0.65% (78 runs sampled)
		  *   regex constructor  x 3,931,108 ops/sec ±0.58% (84 runs sampled)
		  */
		  if (objPrototype === RegExp.prototype) {
		    return 'RegExp';
		  }

		  /* ! Speed optimisation
		  * Pre:
		  *   date               x 2,130,074 ops/sec ±4.42% (68 runs sampled)
		  * Post:
		  *   date               x 3,953,779 ops/sec ±1.35% (77 runs sampled)
		  */
		  if (objPrototype === Date.prototype) {
		    return 'Date';
		  }

		  /* ! Spec Conformance
		   * (http://www.ecma-international.org/ecma-262/6.0/index.html#sec-promise.prototype-@@tostringtag)
		   * ES6$25.4.5.4 - Promise.prototype[@@toStringTag] should be "Promise":
		   * Test: `Object.prototype.toString.call(Promise.resolve())``
		   *  - Chrome <=47 === "[object Object]"
		   *  - Edge <=20 === "[object Object]"
		   *  - Firefox 29-Latest === "[object Promise]"
		   *  - Safari 7.1-Latest === "[object Promise]"
		   */
		  if (promiseExists && objPrototype === Promise.prototype) {
		    return 'Promise';
		  }

		  /* ! Speed optimisation
		  * Pre:
		  *   set                x 2,222,186 ops/sec ±1.31% (82 runs sampled)
		  * Post:
		  *   set                x 4,545,879 ops/sec ±1.13% (83 runs sampled)
		  */
		  if (setExists && objPrototype === Set.prototype) {
		    return 'Set';
		  }

		  /* ! Speed optimisation
		  * Pre:
		  *   map                x 2,396,842 ops/sec ±1.59% (81 runs sampled)
		  * Post:
		  *   map                x 4,183,945 ops/sec ±6.59% (82 runs sampled)
		  */
		  if (mapExists && objPrototype === Map.prototype) {
		    return 'Map';
		  }

		  /* ! Speed optimisation
		  * Pre:
		  *   weakset            x 1,323,220 ops/sec ±2.17% (76 runs sampled)
		  * Post:
		  *   weakset            x 4,237,510 ops/sec ±2.01% (77 runs sampled)
		  */
		  if (weakSetExists && objPrototype === WeakSet.prototype) {
		    return 'WeakSet';
		  }

		  /* ! Speed optimisation
		  * Pre:
		  *   weakmap            x 1,500,260 ops/sec ±2.02% (78 runs sampled)
		  * Post:
		  *   weakmap            x 3,881,384 ops/sec ±1.45% (82 runs sampled)
		  */
		  if (weakMapExists && objPrototype === WeakMap.prototype) {
		    return 'WeakMap';
		  }

		  /* ! Spec Conformance
		   * (http://www.ecma-international.org/ecma-262/6.0/index.html#sec-dataview.prototype-@@tostringtag)
		   * ES6$24.2.4.21 - DataView.prototype[@@toStringTag] should be "DataView":
		   * Test: `Object.prototype.toString.call(new DataView(new ArrayBuffer(1)))``
		   *  - Edge <=13 === "[object Object]"
		   */
		  if (dataViewExists && objPrototype === DataView.prototype) {
		    return 'DataView';
		  }

		  /* ! Spec Conformance
		   * (http://www.ecma-international.org/ecma-262/6.0/index.html#sec-%mapiteratorprototype%-@@tostringtag)
		   * ES6$23.1.5.2.2 - %MapIteratorPrototype%[@@toStringTag] should be "Map Iterator":
		   * Test: `Object.prototype.toString.call(new Map().entries())``
		   *  - Edge <=13 === "[object Object]"
		   */
		  if (mapExists && objPrototype === mapIteratorPrototype) {
		    return 'Map Iterator';
		  }

		  /* ! Spec Conformance
		   * (http://www.ecma-international.org/ecma-262/6.0/index.html#sec-%setiteratorprototype%-@@tostringtag)
		   * ES6$23.2.5.2.2 - %SetIteratorPrototype%[@@toStringTag] should be "Set Iterator":
		   * Test: `Object.prototype.toString.call(new Set().entries())``
		   *  - Edge <=13 === "[object Object]"
		   */
		  if (setExists && objPrototype === setIteratorPrototype) {
		    return 'Set Iterator';
		  }

		  /* ! Spec Conformance
		   * (http://www.ecma-international.org/ecma-262/6.0/index.html#sec-%arrayiteratorprototype%-@@tostringtag)
		   * ES6$22.1.5.2.2 - %ArrayIteratorPrototype%[@@toStringTag] should be "Array Iterator":
		   * Test: `Object.prototype.toString.call([][Symbol.iterator]())``
		   *  - Edge <=13 === "[object Object]"
		   */
		  if (arrayIteratorExists && objPrototype === arrayIteratorPrototype) {
		    return 'Array Iterator';
		  }

		  /* ! Spec Conformance
		   * (http://www.ecma-international.org/ecma-262/6.0/index.html#sec-%stringiteratorprototype%-@@tostringtag)
		   * ES6$21.1.5.2.2 - %StringIteratorPrototype%[@@toStringTag] should be "String Iterator":
		   * Test: `Object.prototype.toString.call(''[Symbol.iterator]())``
		   *  - Edge <=13 === "[object Object]"
		   */
		  if (stringIteratorExists && objPrototype === stringIteratorPrototype) {
		    return 'String Iterator';
		  }

		  /* ! Speed optimisation
		  * Pre:
		  *   object from null   x 2,424,320 ops/sec ±1.67% (76 runs sampled)
		  * Post:
		  *   object from null   x 5,838,000 ops/sec ±0.99% (84 runs sampled)
		  */
		  if (objPrototype === null) {
		    return 'Object';
		  }

		  return Object
		    .prototype
		    .toString
		    .call(obj)
		    .slice(toStringLeftSliceLength, toStringRightSliceLength);
		}

		return typeDetect;

		}))); 
	} (typeDetect$1));
	return typeDetect$1.exports;
}

var typeOf;
var hasRequiredTypeOf;

function requireTypeOf () {
	if (hasRequiredTypeOf) return typeOf;
	hasRequiredTypeOf = 1;

	var type = requireTypeDetect();

	/**
	 * Returns the lower-case result of running type from type-detect on the value
	 * @param  {*} value
	 * @returns {string}
	 */
	typeOf = function typeOf(value) {
	    return type(value).toLowerCase();
	};
	return typeOf;
}

var valueToString_1;
var hasRequiredValueToString;

function requireValueToString () {
	if (hasRequiredValueToString) return valueToString_1;
	hasRequiredValueToString = 1;

	/**
	 * Returns a string representation of the value
	 * @param  {*} value
	 * @returns {string}
	 */
	function valueToString(value) {
	    if (value && value.toString) {
	        // eslint-disable-next-line @sinonjs/no-prototype-methods/no-prototype-methods
	        return value.toString();
	    }
	    return String(value);
	}

	valueToString_1 = valueToString;
	return valueToString_1;
}

var lib;
var hasRequiredLib;

function requireLib () {
	if (hasRequiredLib) return lib;
	hasRequiredLib = 1;

	lib = {
	    global: requireGlobal(),
	    calledInOrder: requireCalledInOrder(),
	    className: requireClassName(),
	    deprecated: requireDeprecated(),
	    every: requireEvery(),
	    functionName: requireFunctionName(),
	    orderByFirstCall: requireOrderByFirstCall(),
	    prototypes: requirePrototypes(),
	    typeOf: requireTypeOf(),
	    valueToString: requireValueToString(),
	};
	return lib;
}

var hasRequiredFakeTimersSrc;

function requireFakeTimersSrc () {
	if (hasRequiredFakeTimersSrc) return fakeTimersSrc;
	hasRequiredFakeTimersSrc = 1;

	const globalObject = requireLib().global;
	let timersModule, timersPromisesModule;
	if (typeof __vitest_required__ !== 'undefined') {
	    try {
	        timersModule = __vitest_required__.timers;
	    } catch (e) {
	        // ignored
	    }
	    try {
	        timersPromisesModule = __vitest_required__.timersPromises;
	    } catch (e) {
	        // ignored
	    }
	}

	/**
	 * @typedef {object} IdleDeadline
	 * @property {boolean} didTimeout - whether or not the callback was called before reaching the optional timeout
	 * @property {function():number} timeRemaining - a floating-point value providing an estimate of the number of milliseconds remaining in the current idle period
	 */

	/**
	 * Queues a function to be called during a browser's idle periods
	 * @callback RequestIdleCallback
	 * @param {function(IdleDeadline)} callback
	 * @param {{timeout: number}} options - an options object
	 * @returns {number} the id
	 */

	/**
	 * @callback NextTick
	 * @param {VoidVarArgsFunc} callback - the callback to run
	 * @param {...*} args - optional arguments to call the callback with
	 * @returns {void}
	 */

	/**
	 * @callback SetImmediate
	 * @param {VoidVarArgsFunc} callback - the callback to run
	 * @param {...*} args - optional arguments to call the callback with
	 * @returns {NodeImmediate}
	 */

	/**
	 * @callback VoidVarArgsFunc
	 * @param {...*} callback - the callback to run
	 * @returns {void}
	 */

	/**
	 * @typedef RequestAnimationFrame
	 * @property {function(number):void} requestAnimationFrame
	 * @returns {number} - the id
	 */

	/**
	 * @typedef Performance
	 * @property {function(): number} now
	 */

	/* eslint-disable jsdoc/require-property-description */
	/**
	 * @typedef {object} Clock
	 * @property {number} now - the current time
	 * @property {Date} Date - the Date constructor
	 * @property {number} loopLimit - the maximum number of timers before assuming an infinite loop
	 * @property {RequestIdleCallback} requestIdleCallback
	 * @property {function(number):void} cancelIdleCallback
	 * @property {setTimeout} setTimeout
	 * @property {clearTimeout} clearTimeout
	 * @property {NextTick} nextTick
	 * @property {queueMicrotask} queueMicrotask
	 * @property {setInterval} setInterval
	 * @property {clearInterval} clearInterval
	 * @property {SetImmediate} setImmediate
	 * @property {function(NodeImmediate):void} clearImmediate
	 * @property {function():number} countTimers
	 * @property {RequestAnimationFrame} requestAnimationFrame
	 * @property {function(number):void} cancelAnimationFrame
	 * @property {function():void} runMicrotasks
	 * @property {function(string | number): number} tick
	 * @property {function(string | number): Promise<number>} tickAsync
	 * @property {function(): number} next
	 * @property {function(): Promise<number>} nextAsync
	 * @property {function(): number} runAll
	 * @property {function(): number} runToFrame
	 * @property {function(): Promise<number>} runAllAsync
	 * @property {function(): number} runToLast
	 * @property {function(): Promise<number>} runToLastAsync
	 * @property {function(): void} reset
	 * @property {function(number | Date): void} setSystemTime
	 * @property {function(number): void} jump
	 * @property {Performance} performance
	 * @property {function(number[]): number[]} hrtime - process.hrtime (legacy)
	 * @property {function(): void} uninstall Uninstall the clock.
	 * @property {Function[]} methods - the methods that are faked
	 * @property {boolean} [shouldClearNativeTimers] inherited from config
	 * @property {{methodName:string, original:any}[] | undefined} timersModuleMethods
	 * @property {{methodName:string, original:any}[] | undefined} timersPromisesModuleMethods
	 * @property {Map<function(): void, AbortSignal>} abortListenerMap
	 */
	/* eslint-enable jsdoc/require-property-description */

	/**
	 * Configuration object for the `install` method.
	 * @typedef {object} Config
	 * @property {number|Date} [now] a number (in milliseconds) or a Date object (default epoch)
	 * @property {string[]} [toFake] names of the methods that should be faked.
	 * @property {number} [loopLimit] the maximum number of timers that will be run when calling runAll()
	 * @property {boolean} [shouldAdvanceTime] tells FakeTimers to increment mocked time automatically (default false)
	 * @property {number} [advanceTimeDelta] increment mocked time every <<advanceTimeDelta>> ms (default: 20ms)
	 * @property {boolean} [shouldClearNativeTimers] forwards clear timer calls to native functions if they are not fakes (default: false)
	 * @property {boolean} [ignoreMissingTimers] default is false, meaning asking to fake timers that are not present will throw an error
	 */

	/* eslint-disable jsdoc/require-property-description */
	/**
	 * The internal structure to describe a scheduled fake timer
	 * @typedef {object} Timer
	 * @property {Function} func
	 * @property {*[]} args
	 * @property {number} delay
	 * @property {number} callAt
	 * @property {number} createdAt
	 * @property {boolean} immediate
	 * @property {number} id
	 * @property {Error} [error]
	 */

	/**
	 * A Node timer
	 * @typedef {object} NodeImmediate
	 * @property {function(): boolean} hasRef
	 * @property {function(): NodeImmediate} ref
	 * @property {function(): NodeImmediate} unref
	 */
	/* eslint-enable jsdoc/require-property-description */

	/* eslint-disable complexity */

	/**
	 * Mocks available features in the specified global namespace.
	 * @param {*} _global Namespace to mock (e.g. `window`)
	 * @returns {FakeTimers}
	 */
	function withGlobal(_global) {
	    const maxTimeout = Math.pow(2, 31) - 1; //see https://heycam.github.io/webidl/#abstract-opdef-converttoint
	    const idCounterStart = 1e12; // arbitrarily large number to avoid collisions with native timer IDs
	    const NOOP = function () {
	        return undefined;
	    };
	    const NOOP_ARRAY = function () {
	        return [];
	    };
	    const isPresent = {};
	    let timeoutResult,
	        addTimerReturnsObject = false;

	    if (_global.setTimeout) {
	        isPresent.setTimeout = true;
	        timeoutResult = _global.setTimeout(NOOP, 0);
	        addTimerReturnsObject = typeof timeoutResult === "object";
	    }
	    isPresent.clearTimeout = Boolean(_global.clearTimeout);
	    isPresent.setInterval = Boolean(_global.setInterval);
	    isPresent.clearInterval = Boolean(_global.clearInterval);
	    isPresent.hrtime =
	        _global.process && typeof _global.process.hrtime === "function";
	    isPresent.hrtimeBigint =
	        isPresent.hrtime && typeof _global.process.hrtime.bigint === "function";
	    isPresent.nextTick =
	        _global.process && typeof _global.process.nextTick === "function";
	    const utilPromisify = _global.process && _global.__vitest_required__ && _global.__vitest_required__.util.promisify;
	    isPresent.performance =
	        _global.performance && typeof _global.performance.now === "function";
	    const hasPerformancePrototype =
	        _global.Performance &&
	        (typeof _global.Performance).match(/^(function|object)$/);
	    const hasPerformanceConstructorPrototype =
	        _global.performance &&
	        _global.performance.constructor &&
	        _global.performance.constructor.prototype;
	    isPresent.queueMicrotask = _global.hasOwnProperty("queueMicrotask");
	    isPresent.requestAnimationFrame =
	        _global.requestAnimationFrame &&
	        typeof _global.requestAnimationFrame === "function";
	    isPresent.cancelAnimationFrame =
	        _global.cancelAnimationFrame &&
	        typeof _global.cancelAnimationFrame === "function";
	    isPresent.requestIdleCallback =
	        _global.requestIdleCallback &&
	        typeof _global.requestIdleCallback === "function";
	    isPresent.cancelIdleCallbackPresent =
	        _global.cancelIdleCallback &&
	        typeof _global.cancelIdleCallback === "function";
	    isPresent.setImmediate =
	        _global.setImmediate && typeof _global.setImmediate === "function";
	    isPresent.clearImmediate =
	        _global.clearImmediate && typeof _global.clearImmediate === "function";
	    isPresent.Intl = _global.Intl && typeof _global.Intl === "object";

	    if (_global.clearTimeout) {
	        _global.clearTimeout(timeoutResult);
	    }

	    const NativeDate = _global.Date;
	    const NativeIntl = isPresent.Intl
	        ? Object.defineProperties(
	              Object.create(null),
	              Object.getOwnPropertyDescriptors(_global.Intl),
	          )
	        : undefined;
	    let uniqueTimerId = idCounterStart;

	    if (NativeDate === undefined) {
	        throw new Error(
	            "The global scope doesn't have a `Date` object" +
	                " (see https://github.com/sinonjs/sinon/issues/1852#issuecomment-419622780)",
	        );
	    }
	    isPresent.Date = true;

	    /**
	     * The PerformanceEntry object encapsulates a single performance metric
	     * that is part of the browser's performance timeline.
	     *
	     * This is an object returned by the `mark` and `measure` methods on the Performance prototype
	     */
	    class FakePerformanceEntry {
	        constructor(name, entryType, startTime, duration) {
	            this.name = name;
	            this.entryType = entryType;
	            this.startTime = startTime;
	            this.duration = duration;
	        }

	        toJSON() {
	            return JSON.stringify({ ...this });
	        }
	    }

	    /**
	     * @param {number} num
	     * @returns {boolean}
	     */
	    function isNumberFinite(num) {
	        if (Number.isFinite) {
	            return Number.isFinite(num);
	        }

	        return isFinite(num);
	    }

	    let isNearInfiniteLimit = false;

	    /**
	     * @param {Clock} clock
	     * @param {number} i
	     */
	    function checkIsNearInfiniteLimit(clock, i) {
	        if (clock.loopLimit && i === clock.loopLimit - 1) {
	            isNearInfiniteLimit = true;
	        }
	    }

	    /**
	     *
	     */
	    function resetIsNearInfiniteLimit() {
	        isNearInfiniteLimit = false;
	    }

	    /**
	     * Parse strings like "01:10:00" (meaning 1 hour, 10 minutes, 0 seconds) into
	     * number of milliseconds. This is used to support human-readable strings passed
	     * to clock.tick()
	     * @param {string} str
	     * @returns {number}
	     */
	    function parseTime(str) {
	        if (!str) {
	            return 0;
	        }

	        const strings = str.split(":");
	        const l = strings.length;
	        let i = l;
	        let ms = 0;
	        let parsed;

	        if (l > 3 || !/^(\d\d:){0,2}\d\d?$/.test(str)) {
	            throw new Error(
	                "tick only understands numbers, 'm:s' and 'h:m:s'. Each part must be two digits",
	            );
	        }

	        while (i--) {
	            parsed = parseInt(strings[i], 10);

	            if (parsed >= 60) {
	                throw new Error(`Invalid time ${str}`);
	            }

	            ms += parsed * Math.pow(60, l - i - 1);
	        }

	        return ms * 1000;
	    }

	    /**
	     * Get the decimal part of the millisecond value as nanoseconds
	     * @param {number} msFloat the number of milliseconds
	     * @returns {number} an integer number of nanoseconds in the range [0,1e6)
	     *
	     * Example: nanoRemainer(123.456789) -> 456789
	     */
	    function nanoRemainder(msFloat) {
	        const modulo = 1e6;
	        const remainder = (msFloat * 1e6) % modulo;
	        const positiveRemainder =
	            remainder < 0 ? remainder + modulo : remainder;

	        return Math.floor(positiveRemainder);
	    }

	    /**
	     * Used to grok the `now` parameter to createClock.
	     * @param {Date|number} epoch the system time
	     * @returns {number}
	     */
	    function getEpoch(epoch) {
	        if (!epoch) {
	            return 0;
	        }
	        if (typeof epoch.getTime === "function") {
	            return epoch.getTime();
	        }
	        if (typeof epoch === "number") {
	            return epoch;
	        }
	        throw new TypeError("now should be milliseconds since UNIX epoch");
	    }

	    /**
	     * @param {number} from
	     * @param {number} to
	     * @param {Timer} timer
	     * @returns {boolean}
	     */
	    function inRange(from, to, timer) {
	        return timer && timer.callAt >= from && timer.callAt <= to;
	    }

	    /**
	     * @param {Clock} clock
	     * @param {Timer} job
	     */
	    function getInfiniteLoopError(clock, job) {
	        const infiniteLoopError = new Error(
	            `Aborting after running ${clock.loopLimit} timers, assuming an infinite loop!`,
	        );

	        if (!job.error) {
	            return infiniteLoopError;
	        }

	        // pattern never matched in Node
	        const computedTargetPattern = /target\.*[<|(|[].*?[>|\]|)]\s*/;
	        let clockMethodPattern = new RegExp(
	            String(Object.keys(clock).join("|")),
	        );

	        if (addTimerReturnsObject) {
	            // node.js environment
	            clockMethodPattern = new RegExp(
	                `\\s+at (Object\\.)?(?:${Object.keys(clock).join("|")})\\s+`,
	            );
	        }

	        let matchedLineIndex = -1;
	        job.error.stack.split("\n").some(function (line, i) {
	            // If we've matched a computed target line (e.g. setTimeout) then we
	            // don't need to look any further. Return true to stop iterating.
	            const matchedComputedTarget = line.match(computedTargetPattern);
	            /* istanbul ignore if */
	            if (matchedComputedTarget) {
	                matchedLineIndex = i;
	                return true;
	            }

	            // If we've matched a clock method line, then there may still be
	            // others further down the trace. Return false to keep iterating.
	            const matchedClockMethod = line.match(clockMethodPattern);
	            if (matchedClockMethod) {
	                matchedLineIndex = i;
	                return false;
	            }

	            // If we haven't matched anything on this line, but we matched
	            // previously and set the matched line index, then we can stop.
	            // If we haven't matched previously, then we should keep iterating.
	            return matchedLineIndex >= 0;
	        });

	        const stack = `${infiniteLoopError}\n${job.type || "Microtask"} - ${
	            job.func.name || "anonymous"
	        }\n${job.error.stack
	            .split("\n")
	            .slice(matchedLineIndex + 1)
	            .join("\n")}`;

	        try {
	            Object.defineProperty(infiniteLoopError, "stack", {
	                value: stack,
	            });
	        } catch (e) {
	            // noop
	        }

	        return infiniteLoopError;
	    }

	    //eslint-disable-next-line jsdoc/require-jsdoc
	    function createDate() {
	        class ClockDate extends NativeDate {
	            /**
	             * @param {number} year
	             * @param {number} month
	             * @param {number} date
	             * @param {number} hour
	             * @param {number} minute
	             * @param {number} second
	             * @param {number} ms
	             * @returns void
	             */
	            // eslint-disable-next-line no-unused-vars
	            constructor(year, month, date, hour, minute, second, ms) {
	                // Defensive and verbose to avoid potential harm in passing
	                // explicit undefined when user does not pass argument
	                if (arguments.length === 0) {
	                    super(ClockDate.clock.now);
	                } else {
	                    super(...arguments);
	                }

	                // ensures identity checks using the constructor prop still works
	                // this should have no other functional effect
	                Object.defineProperty(this, "constructor", {
	                    value: NativeDate,
	                    enumerable: false,
	                });
	            }

	            static [Symbol.hasInstance](instance) {
	                return instance instanceof NativeDate;
	            }
	        }

	        ClockDate.isFake = true;

	        if (NativeDate.now) {
	            ClockDate.now = function now() {
	                return ClockDate.clock.now;
	            };
	        }

	        if (NativeDate.toSource) {
	            ClockDate.toSource = function toSource() {
	                return NativeDate.toSource();
	            };
	        }

	        ClockDate.toString = function toString() {
	            return NativeDate.toString();
	        };

	        // noinspection UnnecessaryLocalVariableJS
	        /**
	         * A normal Class constructor cannot be called without `new`, but Date can, so we need
	         * to wrap it in a Proxy in order to ensure this functionality of Date is kept intact
	         * @type {ClockDate}
	         */
	        const ClockDateProxy = new Proxy(ClockDate, {
	            // handler for [[Call]] invocations (i.e. not using `new`)
	            apply() {
	                // the Date constructor called as a function, ref Ecma-262 Edition 5.1, section 15.9.2.
	                // This remains so in the 10th edition of 2019 as well.
	                if (this instanceof ClockDate) {
	                    throw new TypeError(
	                        "A Proxy should only capture `new` calls with the `construct` handler. This is not supposed to be possible, so check the logic.",
	                    );
	                }

	                return new NativeDate(ClockDate.clock.now).toString();
	            },
	        });

	        return ClockDateProxy;
	    }

	    /**
	     * Mirror Intl by default on our fake implementation
	     *
	     * Most of the properties are the original native ones,
	     * but we need to take control of those that have a
	     * dependency on the current clock.
	     * @returns {object} the partly fake Intl implementation
	     */
	    function createIntl() {
	        const ClockIntl = {};
	        /*
	         * All properties of Intl are non-enumerable, so we need
	         * to do a bit of work to get them out.
	         */
	        Object.getOwnPropertyNames(NativeIntl).forEach(
	            (property) => (ClockIntl[property] = NativeIntl[property]),
	        );

	        ClockIntl.DateTimeFormat = function (...args) {
	            const realFormatter = new NativeIntl.DateTimeFormat(...args);
	            const formatter = {};

	            ["formatRange", "formatRangeToParts", "resolvedOptions"].forEach(
	                (method) => {
	                    formatter[method] =
	                        realFormatter[method].bind(realFormatter);
	                },
	            );

	            ["format", "formatToParts"].forEach((method) => {
	                formatter[method] = function (date) {
	                    return realFormatter[method](date || ClockIntl.clock.now);
	                };
	            });

	            return formatter;
	        };

	        ClockIntl.DateTimeFormat.prototype = Object.create(
	            NativeIntl.DateTimeFormat.prototype,
	        );

	        ClockIntl.DateTimeFormat.supportedLocalesOf =
	            NativeIntl.DateTimeFormat.supportedLocalesOf;

	        return ClockIntl;
	    }

	    //eslint-disable-next-line jsdoc/require-jsdoc
	    function enqueueJob(clock, job) {
	        // enqueues a microtick-deferred task - ecma262/#sec-enqueuejob
	        if (!clock.jobs) {
	            clock.jobs = [];
	        }
	        clock.jobs.push(job);
	    }

	    //eslint-disable-next-line jsdoc/require-jsdoc
	    function runJobs(clock) {
	        // runs all microtick-deferred tasks - ecma262/#sec-runjobs
	        if (!clock.jobs) {
	            return;
	        }
	        for (let i = 0; i < clock.jobs.length; i++) {
	            const job = clock.jobs[i];
	            job.func.apply(null, job.args);

	            checkIsNearInfiniteLimit(clock, i);
	            if (clock.loopLimit && i > clock.loopLimit) {
	                throw getInfiniteLoopError(clock, job);
	            }
	        }
	        resetIsNearInfiniteLimit();
	        clock.jobs = [];
	    }

	    /**
	     * @param {Clock} clock
	     * @param {Timer} timer
	     * @returns {number} id of the created timer
	     */
	    function addTimer(clock, timer) {
	        if (timer.func === undefined) {
	            throw new Error("Callback must be provided to timer calls");
	        }

	        if (addTimerReturnsObject) {
	            // Node.js environment
	            if (typeof timer.func !== "function") {
	                throw new TypeError(
	                    `[ERR_INVALID_CALLBACK]: Callback must be a function. Received ${
	                        timer.func
	                    } of type ${typeof timer.func}`,
	                );
	            }
	        }

	        if (isNearInfiniteLimit) {
	            timer.error = new Error();
	        }

	        timer.type = timer.immediate ? "Immediate" : "Timeout";

	        if (timer.hasOwnProperty("delay")) {
	            if (typeof timer.delay !== "number") {
	                timer.delay = parseInt(timer.delay, 10);
	            }

	            if (!isNumberFinite(timer.delay)) {
	                timer.delay = 0;
	            }
	            timer.delay = timer.delay > maxTimeout ? 1 : timer.delay;
	            timer.delay = Math.max(0, timer.delay);
	        }

	        if (timer.hasOwnProperty("interval")) {
	            timer.type = "Interval";
	            timer.interval = timer.interval > maxTimeout ? 1 : timer.interval;
	        }

	        if (timer.hasOwnProperty("animation")) {
	            timer.type = "AnimationFrame";
	            timer.animation = true;
	        }

	        if (timer.hasOwnProperty("idleCallback")) {
	            timer.type = "IdleCallback";
	            timer.idleCallback = true;
	        }

	        if (!clock.timers) {
	            clock.timers = {};
	        }

	        timer.id = uniqueTimerId++;
	        timer.createdAt = clock.now;
	        timer.callAt =
	            clock.now + (parseInt(timer.delay) || (clock.duringTick ? 1 : 0));

	        clock.timers[timer.id] = timer;

	        if (addTimerReturnsObject) {
	            const res = {
	                refed: true,
	                ref: function () {
	                    this.refed = true;
	                    return res;
	                },
	                unref: function () {
	                    this.refed = false;
	                    return res;
	                },
	                hasRef: function () {
	                    return this.refed;
	                },
	                refresh: function () {
	                    timer.callAt =
	                        clock.now +
	                        (parseInt(timer.delay) || (clock.duringTick ? 1 : 0));

	                    // it _might_ have been removed, but if not the assignment is perfectly fine
	                    clock.timers[timer.id] = timer;

	                    return res;
	                },
	                [Symbol.toPrimitive]: function () {
	                    return timer.id;
	                },
	            };
	            return res;
	        }

	        return timer.id;
	    }

	    /* eslint consistent-return: "off" */
	    /**
	     * Timer comparitor
	     * @param {Timer} a
	     * @param {Timer} b
	     * @returns {number}
	     */
	    function compareTimers(a, b) {
	        // Sort first by absolute timing
	        if (a.callAt < b.callAt) {
	            return -1;
	        }
	        if (a.callAt > b.callAt) {
	            return 1;
	        }

	        // Sort next by immediate, immediate timers take precedence
	        if (a.immediate && !b.immediate) {
	            return -1;
	        }
	        if (!a.immediate && b.immediate) {
	            return 1;
	        }

	        // Sort next by creation time, earlier-created timers take precedence
	        if (a.createdAt < b.createdAt) {
	            return -1;
	        }
	        if (a.createdAt > b.createdAt) {
	            return 1;
	        }

	        // Sort next by id, lower-id timers take precedence
	        if (a.id < b.id) {
	            return -1;
	        }
	        if (a.id > b.id) {
	            return 1;
	        }

	        // As timer ids are unique, no fallback `0` is necessary
	    }

	    /**
	     * @param {Clock} clock
	     * @param {number} from
	     * @param {number} to
	     * @returns {Timer}
	     */
	    function firstTimerInRange(clock, from, to) {
	        const timers = clock.timers;
	        let timer = null;
	        let id, isInRange;

	        for (id in timers) {
	            if (timers.hasOwnProperty(id)) {
	                isInRange = inRange(from, to, timers[id]);

	                if (
	                    isInRange &&
	                    (!timer || compareTimers(timer, timers[id]) === 1)
	                ) {
	                    timer = timers[id];
	                }
	            }
	        }

	        return timer;
	    }

	    /**
	     * @param {Clock} clock
	     * @returns {Timer}
	     */
	    function firstTimer(clock) {
	        const timers = clock.timers;
	        let timer = null;
	        let id;

	        for (id in timers) {
	            if (timers.hasOwnProperty(id)) {
	                if (!timer || compareTimers(timer, timers[id]) === 1) {
	                    timer = timers[id];
	                }
	            }
	        }

	        return timer;
	    }

	    /**
	     * @param {Clock} clock
	     * @returns {Timer}
	     */
	    function lastTimer(clock) {
	        const timers = clock.timers;
	        let timer = null;
	        let id;

	        for (id in timers) {
	            if (timers.hasOwnProperty(id)) {
	                if (!timer || compareTimers(timer, timers[id]) === -1) {
	                    timer = timers[id];
	                }
	            }
	        }

	        return timer;
	    }

	    /**
	     * @param {Clock} clock
	     * @param {Timer} timer
	     */
	    function callTimer(clock, timer) {
	        if (typeof timer.interval === "number") {
	            clock.timers[timer.id].callAt += timer.interval;
	        } else {
	            delete clock.timers[timer.id];
	        }

	        if (typeof timer.func === "function") {
	            timer.func.apply(null, timer.args);
	        } else {
	            /* eslint no-eval: "off" */
	            const eval2 = eval;
	            (function () {
	                eval2(timer.func);
	            })();
	        }
	    }

	    /**
	     * Gets clear handler name for a given timer type
	     * @param {string} ttype
	     */
	    function getClearHandler(ttype) {
	        if (ttype === "IdleCallback" || ttype === "AnimationFrame") {
	            return `cancel${ttype}`;
	        }
	        return `clear${ttype}`;
	    }

	    /**
	     * Gets schedule handler name for a given timer type
	     * @param {string} ttype
	     */
	    function getScheduleHandler(ttype) {
	        if (ttype === "IdleCallback" || ttype === "AnimationFrame") {
	            return `request${ttype}`;
	        }
	        return `set${ttype}`;
	    }

	    /**
	     * Creates an anonymous function to warn only once
	     */
	    function createWarnOnce() {
	        let calls = 0;
	        return function (msg) {
	            // eslint-disable-next-line
	            !calls++ && console.warn(msg);
	        };
	    }
	    const warnOnce = createWarnOnce();

	    /**
	     * @param {Clock} clock
	     * @param {number} timerId
	     * @param {string} ttype
	     */
	    function clearTimer(clock, timerId, ttype) {
	        if (!timerId) {
	            // null appears to be allowed in most browsers, and appears to be
	            // relied upon by some libraries, like Bootstrap carousel
	            return;
	        }

	        if (!clock.timers) {
	            clock.timers = {};
	        }

	        // in Node, the ID is stored as the primitive value for `Timeout` objects
	        // for `Immediate` objects, no ID exists, so it gets coerced to NaN
	        const id = Number(timerId);

	        if (Number.isNaN(id) || id < idCounterStart) {
	            const handlerName = getClearHandler(ttype);

	            if (clock.shouldClearNativeTimers === true) {
	                const nativeHandler = clock[`_${handlerName}`];
	                return typeof nativeHandler === "function"
	                    ? nativeHandler(timerId)
	                    : undefined;
	            }
	            warnOnce(
	                `FakeTimers: ${handlerName} was invoked to clear a native timer instead of one created by this library.` +
	                    "\nTo automatically clean-up native timers, use `shouldClearNativeTimers`.",
	            );
	        }

	        if (clock.timers.hasOwnProperty(id)) {
	            // check that the ID matches a timer of the correct type
	            const timer = clock.timers[id];
	            if (
	                timer.type === ttype ||
	                (timer.type === "Timeout" && ttype === "Interval") ||
	                (timer.type === "Interval" && ttype === "Timeout")
	            ) {
	                delete clock.timers[id];
	            } else {
	                const clear = getClearHandler(ttype);
	                const schedule = getScheduleHandler(timer.type);
	                throw new Error(
	                    `Cannot clear timer: timer created with ${schedule}() but cleared with ${clear}()`,
	                );
	            }
	        }
	    }

	    /**
	     * @param {Clock} clock
	     * @param {Config} config
	     * @returns {Timer[]}
	     */
	    function uninstall(clock, config) {
	        let method, i, l;
	        const installedHrTime = "_hrtime";
	        const installedNextTick = "_nextTick";

	        for (i = 0, l = clock.methods.length; i < l; i++) {
	            method = clock.methods[i];
	            if (method === "hrtime" && _global.process) {
	                _global.process.hrtime = clock[installedHrTime];
	            } else if (method === "nextTick" && _global.process) {
	                _global.process.nextTick = clock[installedNextTick];
	            } else if (method === "performance") {
	                const originalPerfDescriptor = Object.getOwnPropertyDescriptor(
	                    clock,
	                    `_${method}`,
	                );
	                if (
	                    originalPerfDescriptor &&
	                    originalPerfDescriptor.get &&
	                    !originalPerfDescriptor.set
	                ) {
	                    Object.defineProperty(
	                        _global,
	                        method,
	                        originalPerfDescriptor,
	                    );
	                } else if (originalPerfDescriptor.configurable) {
	                    _global[method] = clock[`_${method}`];
	                }
	            } else {
	                if (_global[method] && _global[method].hadOwnProperty) {
	                    _global[method] = clock[`_${method}`];
	                } else {
	                    try {
	                        delete _global[method];
	                    } catch (ignore) {
	                        /* eslint no-empty: "off" */
	                    }
	                }
	            }
	            if (clock.timersModuleMethods !== undefined) {
	                for (let j = 0; j < clock.timersModuleMethods.length; j++) {
	                    const entry = clock.timersModuleMethods[j];
	                    timersModule[entry.methodName] = entry.original;
	                }
	            }
	            if (clock.timersPromisesModuleMethods !== undefined) {
	                for (
	                    let j = 0;
	                    j < clock.timersPromisesModuleMethods.length;
	                    j++
	                ) {
	                    const entry = clock.timersPromisesModuleMethods[j];
	                    timersPromisesModule[entry.methodName] = entry.original;
	                }
	            }
	        }

	        if (config.shouldAdvanceTime === true) {
	            _global.clearInterval(clock.attachedInterval);
	        }

	        // Prevent multiple executions which will completely remove these props
	        clock.methods = [];

	        for (const [listener, signal] of clock.abortListenerMap.entries()) {
	            signal.removeEventListener("abort", listener);
	            clock.abortListenerMap.delete(listener);
	        }

	        // return pending timers, to enable checking what timers remained on uninstall
	        if (!clock.timers) {
	            return [];
	        }
	        return Object.keys(clock.timers).map(function mapper(key) {
	            return clock.timers[key];
	        });
	    }

	    /**
	     * @param {object} target the target containing the method to replace
	     * @param {string} method the keyname of the method on the target
	     * @param {Clock} clock
	     */
	    function hijackMethod(target, method, clock) {
	        clock[method].hadOwnProperty = Object.prototype.hasOwnProperty.call(
	            target,
	            method,
	        );
	        clock[`_${method}`] = target[method];

	        if (method === "Date") {
	            target[method] = clock[method];
	        } else if (method === "Intl") {
	            target[method] = clock[method];
	        } else if (method === "performance") {
	            const originalPerfDescriptor = Object.getOwnPropertyDescriptor(
	                target,
	                method,
	            );
	            // JSDOM has a read only performance field so we have to save/copy it differently
	            if (
	                originalPerfDescriptor &&
	                originalPerfDescriptor.get &&
	                !originalPerfDescriptor.set
	            ) {
	                Object.defineProperty(
	                    clock,
	                    `_${method}`,
	                    originalPerfDescriptor,
	                );

	                const perfDescriptor = Object.getOwnPropertyDescriptor(
	                    clock,
	                    method,
	                );
	                Object.defineProperty(target, method, perfDescriptor);
	            } else {
	                target[method] = clock[method];
	            }
	        } else {
	            target[method] = function () {
	                return clock[method].apply(clock, arguments);
	            };

	            Object.defineProperties(
	                target[method],
	                Object.getOwnPropertyDescriptors(clock[method]),
	            );
	        }

	        target[method].clock = clock;
	    }

	    /**
	     * @param {Clock} clock
	     * @param {number} advanceTimeDelta
	     */
	    function doIntervalTick(clock, advanceTimeDelta) {
	        clock.tick(advanceTimeDelta);
	    }

	    /**
	     * @typedef {object} Timers
	     * @property {setTimeout} setTimeout
	     * @property {clearTimeout} clearTimeout
	     * @property {setInterval} setInterval
	     * @property {clearInterval} clearInterval
	     * @property {Date} Date
	     * @property {Intl} Intl
	     * @property {SetImmediate=} setImmediate
	     * @property {function(NodeImmediate): void=} clearImmediate
	     * @property {function(number[]):number[]=} hrtime
	     * @property {NextTick=} nextTick
	     * @property {Performance=} performance
	     * @property {RequestAnimationFrame=} requestAnimationFrame
	     * @property {boolean=} queueMicrotask
	     * @property {function(number): void=} cancelAnimationFrame
	     * @property {RequestIdleCallback=} requestIdleCallback
	     * @property {function(number): void=} cancelIdleCallback
	     */

	    /** @type {Timers} */
	    const timers = {
	        setTimeout: _global.setTimeout,
	        clearTimeout: _global.clearTimeout,
	        setInterval: _global.setInterval,
	        clearInterval: _global.clearInterval,
	        Date: _global.Date,
	    };

	    if (isPresent.setImmediate) {
	        timers.setImmediate = _global.setImmediate;
	    }

	    if (isPresent.clearImmediate) {
	        timers.clearImmediate = _global.clearImmediate;
	    }

	    if (isPresent.hrtime) {
	        timers.hrtime = _global.process.hrtime;
	    }

	    if (isPresent.nextTick) {
	        timers.nextTick = _global.process.nextTick;
	    }

	    if (isPresent.performance) {
	        timers.performance = _global.performance;
	    }

	    if (isPresent.requestAnimationFrame) {
	        timers.requestAnimationFrame = _global.requestAnimationFrame;
	    }

	    if (isPresent.queueMicrotask) {
	        timers.queueMicrotask = _global.queueMicrotask;
	    }

	    if (isPresent.cancelAnimationFrame) {
	        timers.cancelAnimationFrame = _global.cancelAnimationFrame;
	    }

	    if (isPresent.requestIdleCallback) {
	        timers.requestIdleCallback = _global.requestIdleCallback;
	    }

	    if (isPresent.cancelIdleCallback) {
	        timers.cancelIdleCallback = _global.cancelIdleCallback;
	    }

	    if (isPresent.Intl) {
	        timers.Intl = NativeIntl;
	    }

	    const originalSetTimeout = _global.setImmediate || _global.setTimeout;

	    /**
	     * @param {Date|number} [start] the system time - non-integer values are floored
	     * @param {number} [loopLimit] maximum number of timers that will be run when calling runAll()
	     * @returns {Clock}
	     */
	    function createClock(start, loopLimit) {
	        // eslint-disable-next-line no-param-reassign
	        start = Math.floor(getEpoch(start));
	        // eslint-disable-next-line no-param-reassign
	        loopLimit = loopLimit || 1000;
	        let nanos = 0;
	        const adjustedSystemTime = [0, 0]; // [millis, nanoremainder]

	        const clock = {
	            now: start,
	            Date: createDate(),
	            loopLimit: loopLimit,
	        };

	        clock.Date.clock = clock;

	        //eslint-disable-next-line jsdoc/require-jsdoc
	        function getTimeToNextFrame() {
	            return 16 - ((clock.now - start) % 16);
	        }

	        //eslint-disable-next-line jsdoc/require-jsdoc
	        function hrtime(prev) {
	            const millisSinceStart = clock.now - adjustedSystemTime[0] - start;
	            const secsSinceStart = Math.floor(millisSinceStart / 1000);
	            const remainderInNanos =
	                (millisSinceStart - secsSinceStart * 1e3) * 1e6 +
	                nanos -
	                adjustedSystemTime[1];

	            if (Array.isArray(prev)) {
	                if (prev[1] > 1e9) {
	                    throw new TypeError(
	                        "Number of nanoseconds can't exceed a billion",
	                    );
	                }

	                const oldSecs = prev[0];
	                let nanoDiff = remainderInNanos - prev[1];
	                let secDiff = secsSinceStart - oldSecs;

	                if (nanoDiff < 0) {
	                    nanoDiff += 1e9;
	                    secDiff -= 1;
	                }

	                return [secDiff, nanoDiff];
	            }
	            return [secsSinceStart, remainderInNanos];
	        }

	        /**
	         * A high resolution timestamp in milliseconds.
	         * @typedef {number} DOMHighResTimeStamp
	         */

	        /**
	         * performance.now()
	         * @returns {DOMHighResTimeStamp}
	         */
	        function fakePerformanceNow() {
	            const hrt = hrtime();
	            const millis = hrt[0] * 1000 + hrt[1] / 1e6;
	            return millis;
	        }

	        if (isPresent.hrtimeBigint) {
	            hrtime.bigint = function () {
	                const parts = hrtime();
	                return BigInt(parts[0]) * BigInt(1e9) + BigInt(parts[1]); // eslint-disable-line
	            };
	        }

	        if (isPresent.Intl) {
	            clock.Intl = createIntl();
	            clock.Intl.clock = clock;
	        }

	        clock.requestIdleCallback = function requestIdleCallback(
	            func,
	            timeout,
	        ) {
	            let timeToNextIdlePeriod = 0;

	            if (clock.countTimers() > 0) {
	                timeToNextIdlePeriod = 50; // const for now
	            }

	            const result = addTimer(clock, {
	                func: func,
	                args: Array.prototype.slice.call(arguments, 2),
	                delay:
	                    typeof timeout === "undefined"
	                        ? timeToNextIdlePeriod
	                        : Math.min(timeout, timeToNextIdlePeriod),
	                idleCallback: true,
	            });

	            return Number(result);
	        };

	        clock.cancelIdleCallback = function cancelIdleCallback(timerId) {
	            return clearTimer(clock, timerId, "IdleCallback");
	        };

	        clock.setTimeout = function setTimeout(func, timeout) {
	            return addTimer(clock, {
	                func: func,
	                args: Array.prototype.slice.call(arguments, 2),
	                delay: timeout,
	            });
	        };
	        if (typeof _global.Promise !== "undefined" && utilPromisify) {
	            clock.setTimeout[utilPromisify.custom] =
	                function promisifiedSetTimeout(timeout, arg) {
	                    return new _global.Promise(function setTimeoutExecutor(
	                        resolve,
	                    ) {
	                        addTimer(clock, {
	                            func: resolve,
	                            args: [arg],
	                            delay: timeout,
	                        });
	                    });
	                };
	        }

	        clock.clearTimeout = function clearTimeout(timerId) {
	            return clearTimer(clock, timerId, "Timeout");
	        };

	        clock.nextTick = function nextTick(func) {
	            return enqueueJob(clock, {
	                func: func,
	                args: Array.prototype.slice.call(arguments, 1),
	                error: isNearInfiniteLimit ? new Error() : null,
	            });
	        };

	        clock.queueMicrotask = function queueMicrotask(func) {
	            return clock.nextTick(func); // explicitly drop additional arguments
	        };

	        clock.setInterval = function setInterval(func, timeout) {
	            // eslint-disable-next-line no-param-reassign
	            timeout = parseInt(timeout, 10);
	            return addTimer(clock, {
	                func: func,
	                args: Array.prototype.slice.call(arguments, 2),
	                delay: timeout,
	                interval: timeout,
	            });
	        };

	        clock.clearInterval = function clearInterval(timerId) {
	            return clearTimer(clock, timerId, "Interval");
	        };

	        if (isPresent.setImmediate) {
	            clock.setImmediate = function setImmediate(func) {
	                return addTimer(clock, {
	                    func: func,
	                    args: Array.prototype.slice.call(arguments, 1),
	                    immediate: true,
	                });
	            };

	            if (typeof _global.Promise !== "undefined" && utilPromisify) {
	                clock.setImmediate[utilPromisify.custom] =
	                    function promisifiedSetImmediate(arg) {
	                        return new _global.Promise(
	                            function setImmediateExecutor(resolve) {
	                                addTimer(clock, {
	                                    func: resolve,
	                                    args: [arg],
	                                    immediate: true,
	                                });
	                            },
	                        );
	                    };
	            }

	            clock.clearImmediate = function clearImmediate(timerId) {
	                return clearTimer(clock, timerId, "Immediate");
	            };
	        }

	        clock.countTimers = function countTimers() {
	            return (
	                Object.keys(clock.timers || {}).length +
	                (clock.jobs || []).length
	            );
	        };

	        clock.requestAnimationFrame = function requestAnimationFrame(func) {
	            const result = addTimer(clock, {
	                func: func,
	                delay: getTimeToNextFrame(),
	                get args() {
	                    return [fakePerformanceNow()];
	                },
	                animation: true,
	            });

	            return Number(result);
	        };

	        clock.cancelAnimationFrame = function cancelAnimationFrame(timerId) {
	            return clearTimer(clock, timerId, "AnimationFrame");
	        };

	        clock.runMicrotasks = function runMicrotasks() {
	            runJobs(clock);
	        };

	        /**
	         * @param {number|string} tickValue milliseconds or a string parseable by parseTime
	         * @param {boolean} isAsync
	         * @param {Function} resolve
	         * @param {Function} reject
	         * @returns {number|undefined} will return the new `now` value or nothing for async
	         */
	        function doTick(tickValue, isAsync, resolve, reject) {
	            const msFloat =
	                typeof tickValue === "number"
	                    ? tickValue
	                    : parseTime(tickValue);
	            const ms = Math.floor(msFloat);
	            const remainder = nanoRemainder(msFloat);
	            let nanosTotal = nanos + remainder;
	            let tickTo = clock.now + ms;

	            if (msFloat < 0) {
	                throw new TypeError("Negative ticks are not supported");
	            }

	            // adjust for positive overflow
	            if (nanosTotal >= 1e6) {
	                tickTo += 1;
	                nanosTotal -= 1e6;
	            }

	            nanos = nanosTotal;
	            let tickFrom = clock.now;
	            let previous = clock.now;
	            // ESLint fails to detect this correctly
	            /* eslint-disable prefer-const */
	            let timer,
	                firstException,
	                oldNow,
	                nextPromiseTick,
	                compensationCheck,
	                postTimerCall;
	            /* eslint-enable prefer-const */

	            clock.duringTick = true;

	            // perform microtasks
	            oldNow = clock.now;
	            runJobs(clock);
	            if (oldNow !== clock.now) {
	                // compensate for any setSystemTime() call during microtask callback
	                tickFrom += clock.now - oldNow;
	                tickTo += clock.now - oldNow;
	            }

	            //eslint-disable-next-line jsdoc/require-jsdoc
	            function doTickInner() {
	                // perform each timer in the requested range
	                timer = firstTimerInRange(clock, tickFrom, tickTo);
	                // eslint-disable-next-line no-unmodified-loop-condition
	                while (timer && tickFrom <= tickTo) {
	                    if (clock.timers[timer.id]) {
	                        tickFrom = timer.callAt;
	                        clock.now = timer.callAt;
	                        oldNow = clock.now;
	                        try {
	                            runJobs(clock);
	                            callTimer(clock, timer);
	                        } catch (e) {
	                            firstException = firstException || e;
	                        }

	                        if (isAsync) {
	                            // finish up after native setImmediate callback to allow
	                            // all native es6 promises to process their callbacks after
	                            // each timer fires.
	                            originalSetTimeout(nextPromiseTick);
	                            return;
	                        }

	                        compensationCheck();
	                    }

	                    postTimerCall();
	                }

	                // perform process.nextTick()s again
	                oldNow = clock.now;
	                runJobs(clock);
	                if (oldNow !== clock.now) {
	                    // compensate for any setSystemTime() call during process.nextTick() callback
	                    tickFrom += clock.now - oldNow;
	                    tickTo += clock.now - oldNow;
	                }
	                clock.duringTick = false;

	                // corner case: during runJobs new timers were scheduled which could be in the range [clock.now, tickTo]
	                timer = firstTimerInRange(clock, tickFrom, tickTo);
	                if (timer) {
	                    try {
	                        clock.tick(tickTo - clock.now); // do it all again - for the remainder of the requested range
	                    } catch (e) {
	                        firstException = firstException || e;
	                    }
	                } else {
	                    // no timers remaining in the requested range: move the clock all the way to the end
	                    clock.now = tickTo;

	                    // update nanos
	                    nanos = nanosTotal;
	                }
	                if (firstException) {
	                    throw firstException;
	                }

	                if (isAsync) {
	                    resolve(clock.now);
	                } else {
	                    return clock.now;
	                }
	            }

	            nextPromiseTick =
	                isAsync &&
	                function () {
	                    try {
	                        compensationCheck();
	                        postTimerCall();
	                        doTickInner();
	                    } catch (e) {
	                        reject(e);
	                    }
	                };

	            compensationCheck = function () {
	                // compensate for any setSystemTime() call during timer callback
	                if (oldNow !== clock.now) {
	                    tickFrom += clock.now - oldNow;
	                    tickTo += clock.now - oldNow;
	                    previous += clock.now - oldNow;
	                }
	            };

	            postTimerCall = function () {
	                timer = firstTimerInRange(clock, previous, tickTo);
	                previous = tickFrom;
	            };

	            return doTickInner();
	        }

	        /**
	         * @param {string|number} tickValue number of milliseconds or a human-readable value like "01:11:15"
	         * @returns {number} will return the new `now` value
	         */
	        clock.tick = function tick(tickValue) {
	            return doTick(tickValue, false);
	        };

	        if (typeof _global.Promise !== "undefined") {
	            /**
	             * @param {string|number} tickValue number of milliseconds or a human-readable value like "01:11:15"
	             * @returns {Promise}
	             */
	            clock.tickAsync = function tickAsync(tickValue) {
	                return new _global.Promise(function (resolve, reject) {
	                    originalSetTimeout(function () {
	                        try {
	                            doTick(tickValue, true, resolve, reject);
	                        } catch (e) {
	                            reject(e);
	                        }
	                    });
	                });
	            };
	        }

	        clock.next = function next() {
	            runJobs(clock);
	            const timer = firstTimer(clock);
	            if (!timer) {
	                return clock.now;
	            }

	            clock.duringTick = true;
	            try {
	                clock.now = timer.callAt;
	                callTimer(clock, timer);
	                runJobs(clock);
	                return clock.now;
	            } finally {
	                clock.duringTick = false;
	            }
	        };

	        if (typeof _global.Promise !== "undefined") {
	            clock.nextAsync = function nextAsync() {
	                return new _global.Promise(function (resolve, reject) {
	                    originalSetTimeout(function () {
	                        try {
	                            const timer = firstTimer(clock);
	                            if (!timer) {
	                                resolve(clock.now);
	                                return;
	                            }

	                            let err;
	                            clock.duringTick = true;
	                            clock.now = timer.callAt;
	                            try {
	                                callTimer(clock, timer);
	                            } catch (e) {
	                                err = e;
	                            }
	                            clock.duringTick = false;

	                            originalSetTimeout(function () {
	                                if (err) {
	                                    reject(err);
	                                } else {
	                                    resolve(clock.now);
	                                }
	                            });
	                        } catch (e) {
	                            reject(e);
	                        }
	                    });
	                });
	            };
	        }

	        clock.runAll = function runAll() {
	            let numTimers, i;
	            runJobs(clock);
	            for (i = 0; i < clock.loopLimit; i++) {
	                if (!clock.timers) {
	                    resetIsNearInfiniteLimit();
	                    return clock.now;
	                }

	                numTimers = Object.keys(clock.timers).length;
	                if (numTimers === 0) {
	                    resetIsNearInfiniteLimit();
	                    return clock.now;
	                }

	                clock.next();
	                checkIsNearInfiniteLimit(clock, i);
	            }

	            const excessJob = firstTimer(clock);
	            throw getInfiniteLoopError(clock, excessJob);
	        };

	        clock.runToFrame = function runToFrame() {
	            return clock.tick(getTimeToNextFrame());
	        };

	        if (typeof _global.Promise !== "undefined") {
	            clock.runAllAsync = function runAllAsync() {
	                return new _global.Promise(function (resolve, reject) {
	                    let i = 0;
	                    /**
	                     *
	                     */
	                    function doRun() {
	                        originalSetTimeout(function () {
	                            try {
	                                runJobs(clock);

	                                let numTimers;
	                                if (i < clock.loopLimit) {
	                                    if (!clock.timers) {
	                                        resetIsNearInfiniteLimit();
	                                        resolve(clock.now);
	                                        return;
	                                    }

	                                    numTimers = Object.keys(
	                                        clock.timers,
	                                    ).length;
	                                    if (numTimers === 0) {
	                                        resetIsNearInfiniteLimit();
	                                        resolve(clock.now);
	                                        return;
	                                    }

	                                    clock.next();

	                                    i++;

	                                    doRun();
	                                    checkIsNearInfiniteLimit(clock, i);
	                                    return;
	                                }

	                                const excessJob = firstTimer(clock);
	                                reject(getInfiniteLoopError(clock, excessJob));
	                            } catch (e) {
	                                reject(e);
	                            }
	                        });
	                    }
	                    doRun();
	                });
	            };
	        }

	        clock.runToLast = function runToLast() {
	            const timer = lastTimer(clock);
	            if (!timer) {
	                runJobs(clock);
	                return clock.now;
	            }

	            return clock.tick(timer.callAt - clock.now);
	        };

	        if (typeof _global.Promise !== "undefined") {
	            clock.runToLastAsync = function runToLastAsync() {
	                return new _global.Promise(function (resolve, reject) {
	                    originalSetTimeout(function () {
	                        try {
	                            const timer = lastTimer(clock);
	                            if (!timer) {
	                                runJobs(clock);
	                                resolve(clock.now);
	                            }

	                            resolve(clock.tickAsync(timer.callAt - clock.now));
	                        } catch (e) {
	                            reject(e);
	                        }
	                    });
	                });
	            };
	        }

	        clock.reset = function reset() {
	            nanos = 0;
	            clock.timers = {};
	            clock.jobs = [];
	            clock.now = start;
	        };

	        clock.setSystemTime = function setSystemTime(systemTime) {
	            // determine time difference
	            const newNow = getEpoch(systemTime);
	            const difference = newNow - clock.now;
	            let id, timer;

	            adjustedSystemTime[0] = adjustedSystemTime[0] + difference;
	            adjustedSystemTime[1] = adjustedSystemTime[1] + nanos;
	            // update 'system clock'
	            clock.now = newNow;
	            nanos = 0;

	            // update timers and intervals to keep them stable
	            for (id in clock.timers) {
	                if (clock.timers.hasOwnProperty(id)) {
	                    timer = clock.timers[id];
	                    timer.createdAt += difference;
	                    timer.callAt += difference;
	                }
	            }
	        };

	        /**
	         * @param {string|number} tickValue number of milliseconds or a human-readable value like "01:11:15"
	         * @returns {number} will return the new `now` value
	         */
	        clock.jump = function jump(tickValue) {
	            const msFloat =
	                typeof tickValue === "number"
	                    ? tickValue
	                    : parseTime(tickValue);
	            const ms = Math.floor(msFloat);

	            for (const timer of Object.values(clock.timers)) {
	                if (clock.now + ms > timer.callAt) {
	                    timer.callAt = clock.now + ms;
	                }
	            }
	            clock.tick(ms);
	        };

	        if (isPresent.performance) {
	            clock.performance = Object.create(null);
	            clock.performance.now = fakePerformanceNow;
	        }

	        if (isPresent.hrtime) {
	            clock.hrtime = hrtime;
	        }

	        return clock;
	    }

	    /* eslint-disable complexity */

	    /**
	     * @param {Config=} [config] Optional config
	     * @returns {Clock}
	     */
	    function install(config) {
	        if (
	            arguments.length > 1 ||
	            config instanceof Date ||
	            Array.isArray(config) ||
	            typeof config === "number"
	        ) {
	            throw new TypeError(
	                `FakeTimers.install called with ${String(
	                    config,
	                )} install requires an object parameter`,
	            );
	        }

	        if (_global.Date.isFake === true) {
	            // Timers are already faked; this is a problem.
	            // Make the user reset timers before continuing.
	            throw new TypeError(
	                "Can't install fake timers twice on the same global object.",
	            );
	        }

	        // eslint-disable-next-line no-param-reassign
	        config = typeof config !== "undefined" ? config : {};
	        config.shouldAdvanceTime = config.shouldAdvanceTime || false;
	        config.advanceTimeDelta = config.advanceTimeDelta || 20;
	        config.shouldClearNativeTimers =
	            config.shouldClearNativeTimers || false;

	        if (config.target) {
	            throw new TypeError(
	                "config.target is no longer supported. Use `withGlobal(target)` instead.",
	            );
	        }

	        /**
	         * @param {string} timer/object the name of the thing that is not present
	         * @param timer
	         */
	        function handleMissingTimer(timer) {
	            if (config.ignoreMissingTimers) {
	                return;
	            }

	            throw new ReferenceError(
	                `non-existent timers and/or objects cannot be faked: '${timer}'`,
	            );
	        }

	        let i, l;
	        const clock = createClock(config.now, config.loopLimit);
	        clock.shouldClearNativeTimers = config.shouldClearNativeTimers;

	        clock.uninstall = function () {
	            return uninstall(clock, config);
	        };

	        clock.abortListenerMap = new Map();

	        clock.methods = config.toFake || [];

	        if (clock.methods.length === 0) {
	            clock.methods = Object.keys(timers);
	        }

	        if (config.shouldAdvanceTime === true) {
	            const intervalTick = doIntervalTick.bind(
	                null,
	                clock,
	                config.advanceTimeDelta,
	            );
	            const intervalId = _global.setInterval(
	                intervalTick,
	                config.advanceTimeDelta,
	            );
	            clock.attachedInterval = intervalId;
	        }

	        if (clock.methods.includes("performance")) {
	            const proto = (() => {
	                if (hasPerformanceConstructorPrototype) {
	                    return _global.performance.constructor.prototype;
	                }
	                if (hasPerformancePrototype) {
	                    return _global.Performance.prototype;
	                }
	            })();
	            if (proto) {
	                Object.getOwnPropertyNames(proto).forEach(function (name) {
	                    if (name !== "now") {
	                        clock.performance[name] =
	                            name.indexOf("getEntries") === 0
	                                ? NOOP_ARRAY
	                                : NOOP;
	                    }
	                });
	                // ensure `mark` returns a value that is valid
	                clock.performance.mark = (name) =>
	                    new FakePerformanceEntry(name, "mark", 0, 0);
	                clock.performance.measure = (name) =>
	                    new FakePerformanceEntry(name, "measure", 0, 100);
	                // `timeOrigin` should return the time of when the Window session started
	                // (or the Worker was installed)
	                clock.performance.timeOrigin = getEpoch(config.now);
	            } else if ((config.toFake || []).includes("performance")) {
	                return handleMissingTimer("performance");
	            }
	        }
	        if (_global === globalObject && timersModule) {
	            clock.timersModuleMethods = [];
	        }
	        if (_global === globalObject && timersPromisesModule) {
	            clock.timersPromisesModuleMethods = [];
	        }
	        for (i = 0, l = clock.methods.length; i < l; i++) {
	            const nameOfMethodToReplace = clock.methods[i];

	            if (!isPresent[nameOfMethodToReplace]) {
	                handleMissingTimer(nameOfMethodToReplace);
	                // eslint-disable-next-line
	                continue;
	            }

	            if (nameOfMethodToReplace === "hrtime") {
	                if (
	                    _global.process &&
	                    typeof _global.process.hrtime === "function"
	                ) {
	                    hijackMethod(_global.process, nameOfMethodToReplace, clock);
	                }
	            } else if (nameOfMethodToReplace === "nextTick") {
	                if (
	                    _global.process &&
	                    typeof _global.process.nextTick === "function"
	                ) {
	                    hijackMethod(_global.process, nameOfMethodToReplace, clock);
	                }
	            } else {
	                hijackMethod(_global, nameOfMethodToReplace, clock);
	            }
	            if (
	                clock.timersModuleMethods !== undefined &&
	                timersModule[nameOfMethodToReplace]
	            ) {
	                const original = timersModule[nameOfMethodToReplace];
	                clock.timersModuleMethods.push({
	                    methodName: nameOfMethodToReplace,
	                    original: original,
	                });
	                timersModule[nameOfMethodToReplace] =
	                    _global[nameOfMethodToReplace];
	            }
	            if (clock.timersPromisesModuleMethods !== undefined) {
	                if (nameOfMethodToReplace === "setTimeout") {
	                    clock.timersPromisesModuleMethods.push({
	                        methodName: "setTimeout",
	                        original: timersPromisesModule.setTimeout,
	                    });

	                    timersPromisesModule.setTimeout = (
	                        delay,
	                        value,
	                        options = {},
	                    ) =>
	                        new Promise((resolve, reject) => {
	                            const abort = () => {
	                                options.signal.removeEventListener(
	                                    "abort",
	                                    abort,
	                                );
	                                clock.abortListenerMap.delete(abort);

	                                // This is safe, there is no code path that leads to this function
	                                // being invoked before handle has been assigned.
	                                // eslint-disable-next-line no-use-before-define
	                                clock.clearTimeout(handle);
	                                reject(options.signal.reason);
	                            };

	                            const handle = clock.setTimeout(() => {
	                                if (options.signal) {
	                                    options.signal.removeEventListener(
	                                        "abort",
	                                        abort,
	                                    );
	                                    clock.abortListenerMap.delete(abort);
	                                }

	                                resolve(value);
	                            }, delay);

	                            if (options.signal) {
	                                if (options.signal.aborted) {
	                                    abort();
	                                } else {
	                                    options.signal.addEventListener(
	                                        "abort",
	                                        abort,
	                                    );
	                                    clock.abortListenerMap.set(
	                                        abort,
	                                        options.signal,
	                                    );
	                                }
	                            }
	                        });
	                } else if (nameOfMethodToReplace === "setImmediate") {
	                    clock.timersPromisesModuleMethods.push({
	                        methodName: "setImmediate",
	                        original: timersPromisesModule.setImmediate,
	                    });

	                    timersPromisesModule.setImmediate = (value, options = {}) =>
	                        new Promise((resolve, reject) => {
	                            const abort = () => {
	                                options.signal.removeEventListener(
	                                    "abort",
	                                    abort,
	                                );
	                                clock.abortListenerMap.delete(abort);

	                                // This is safe, there is no code path that leads to this function
	                                // being invoked before handle has been assigned.
	                                // eslint-disable-next-line no-use-before-define
	                                clock.clearImmediate(handle);
	                                reject(options.signal.reason);
	                            };

	                            const handle = clock.setImmediate(() => {
	                                if (options.signal) {
	                                    options.signal.removeEventListener(
	                                        "abort",
	                                        abort,
	                                    );
	                                    clock.abortListenerMap.delete(abort);
	                                }

	                                resolve(value);
	                            });

	                            if (options.signal) {
	                                if (options.signal.aborted) {
	                                    abort();
	                                } else {
	                                    options.signal.addEventListener(
	                                        "abort",
	                                        abort,
	                                    );
	                                    clock.abortListenerMap.set(
	                                        abort,
	                                        options.signal,
	                                    );
	                                }
	                            }
	                        });
	                } else if (nameOfMethodToReplace === "setInterval") {
	                    clock.timersPromisesModuleMethods.push({
	                        methodName: "setInterval",
	                        original: timersPromisesModule.setInterval,
	                    });

	                    timersPromisesModule.setInterval = (
	                        delay,
	                        value,
	                        options = {},
	                    ) => ({
	                        [Symbol.asyncIterator]: () => {
	                            const createResolvable = () => {
	                                let resolve, reject;
	                                const promise = new Promise((res, rej) => {
	                                    resolve = res;
	                                    reject = rej;
	                                });
	                                promise.resolve = resolve;
	                                promise.reject = reject;
	                                return promise;
	                            };

	                            let done = false;
	                            let hasThrown = false;
	                            let returnCall;
	                            let nextAvailable = 0;
	                            const nextQueue = [];

	                            const handle = clock.setInterval(() => {
	                                if (nextQueue.length > 0) {
	                                    nextQueue.shift().resolve();
	                                } else {
	                                    nextAvailable++;
	                                }
	                            }, delay);

	                            const abort = () => {
	                                options.signal.removeEventListener(
	                                    "abort",
	                                    abort,
	                                );
	                                clock.abortListenerMap.delete(abort);

	                                clock.clearInterval(handle);
	                                done = true;
	                                for (const resolvable of nextQueue) {
	                                    resolvable.resolve();
	                                }
	                            };

	                            if (options.signal) {
	                                if (options.signal.aborted) {
	                                    done = true;
	                                } else {
	                                    options.signal.addEventListener(
	                                        "abort",
	                                        abort,
	                                    );
	                                    clock.abortListenerMap.set(
	                                        abort,
	                                        options.signal,
	                                    );
	                                }
	                            }

	                            return {
	                                next: async () => {
	                                    if (options.signal?.aborted && !hasThrown) {
	                                        hasThrown = true;
	                                        throw options.signal.reason;
	                                    }

	                                    if (done) {
	                                        return { done: true, value: undefined };
	                                    }

	                                    if (nextAvailable > 0) {
	                                        nextAvailable--;
	                                        return { done: false, value: value };
	                                    }

	                                    const resolvable = createResolvable();
	                                    nextQueue.push(resolvable);

	                                    await resolvable;

	                                    if (returnCall && nextQueue.length === 0) {
	                                        returnCall.resolve();
	                                    }

	                                    if (options.signal?.aborted && !hasThrown) {
	                                        hasThrown = true;
	                                        throw options.signal.reason;
	                                    }

	                                    if (done) {
	                                        return { done: true, value: undefined };
	                                    }

	                                    return { done: false, value: value };
	                                },
	                                return: async () => {
	                                    if (done) {
	                                        return { done: true, value: undefined };
	                                    }

	                                    if (nextQueue.length > 0) {
	                                        returnCall = createResolvable();
	                                        await returnCall;
	                                    }

	                                    clock.clearInterval(handle);
	                                    done = true;

	                                    if (options.signal) {
	                                        options.signal.removeEventListener(
	                                            "abort",
	                                            abort,
	                                        );
	                                        clock.abortListenerMap.delete(abort);
	                                    }

	                                    return { done: true, value: undefined };
	                                },
	                            };
	                        },
	                    });
	                }
	            }
	        }

	        return clock;
	    }

	    /* eslint-enable complexity */

	    return {
	        timers: timers,
	        createClock: createClock,
	        install: install,
	        withGlobal: withGlobal,
	    };
	}

	/**
	 * @typedef {object} FakeTimers
	 * @property {Timers} timers
	 * @property {createClock} createClock
	 * @property {Function} install
	 * @property {withGlobal} withGlobal
	 */

	/* eslint-enable complexity */

	/** @type {FakeTimers} */
	const defaultImplementation = withGlobal(globalObject);

	fakeTimersSrc.timers = defaultImplementation.timers;
	fakeTimersSrc.createClock = defaultImplementation.createClock;
	fakeTimersSrc.install = defaultImplementation.install;
	fakeTimersSrc.withGlobal = withGlobal;
	return fakeTimersSrc;
}

var fakeTimersSrcExports = requireFakeTimersSrc();

class FakeTimers {
	_global;
	_clock;
	// | _fakingTime | _fakingDate |
	// +-------------+-------------+
	// | false       | falsy       | initial
	// | false       | truthy     | vi.setSystemTime called first (for mocking only Date without fake timers)
	// | true        | falsy       | vi.useFakeTimers called first
	// | true        | truthy     | unreachable
	_fakingTime;
	_fakingDate;
	_fakeTimers;
	_userConfig;
	_now = RealDate.now;
	constructor({ global, config }) {
		this._userConfig = config;
		this._fakingDate = null;
		this._fakingTime = false;
		this._fakeTimers = fakeTimersSrcExports.withGlobal(global);
		this._global = global;
	}
	clearAllTimers() {
		if (this._fakingTime) this._clock.reset();
	}
	dispose() {
		this.useRealTimers();
	}
	runAllTimers() {
		if (this._checkFakeTimers()) this._clock.runAll();
	}
	async runAllTimersAsync() {
		if (this._checkFakeTimers()) await this._clock.runAllAsync();
	}
	runOnlyPendingTimers() {
		if (this._checkFakeTimers()) this._clock.runToLast();
	}
	async runOnlyPendingTimersAsync() {
		if (this._checkFakeTimers()) await this._clock.runToLastAsync();
	}
	advanceTimersToNextTimer(steps = 1) {
		if (this._checkFakeTimers()) for (let i = steps; i > 0; i--) {
			this._clock.next();
			// Fire all timers at this point: https://github.com/sinonjs/fake-timers/issues/250
			this._clock.tick(0);
			if (this._clock.countTimers() === 0) break;
		}
	}
	async advanceTimersToNextTimerAsync(steps = 1) {
		if (this._checkFakeTimers()) for (let i = steps; i > 0; i--) {
			await this._clock.nextAsync();
			// Fire all timers at this point: https://github.com/sinonjs/fake-timers/issues/250
			this._clock.tick(0);
			if (this._clock.countTimers() === 0) break;
		}
	}
	advanceTimersByTime(msToRun) {
		if (this._checkFakeTimers()) this._clock.tick(msToRun);
	}
	async advanceTimersByTimeAsync(msToRun) {
		if (this._checkFakeTimers()) await this._clock.tickAsync(msToRun);
	}
	advanceTimersToNextFrame() {
		if (this._checkFakeTimers()) this._clock.runToFrame();
	}
	runAllTicks() {
		if (this._checkFakeTimers())
 // @ts-expect-error method not exposed
		this._clock.runMicrotasks();
	}
	useRealTimers() {
		if (this._fakingDate) {
			resetDate();
			this._fakingDate = null;
		}
		if (this._fakingTime) {
			this._clock.uninstall();
			this._fakingTime = false;
		}
	}
	useFakeTimers() {
		if (this._fakingDate) throw new Error("\"setSystemTime\" was called already and date was mocked. Reset timers using `vi.useRealTimers()` if you want to use fake timers again.");
		if (!this._fakingTime) {
			const toFake = Object.keys(this._fakeTimers.timers).filter((timer) => timer !== "nextTick" && timer !== "queueMicrotask");
			if (this._userConfig?.toFake?.includes("nextTick") && isChildProcess()) throw new Error("process.nextTick cannot be mocked inside child_process");
			this._clock = this._fakeTimers.install({
				now: Date.now(),
				...this._userConfig,
				toFake: this._userConfig?.toFake || toFake,
				ignoreMissingTimers: true
			});
			this._fakingTime = true;
		}
	}
	reset() {
		if (this._checkFakeTimers()) {
			const { now } = this._clock;
			this._clock.reset();
			this._clock.setSystemTime(now);
		}
	}
	setSystemTime(now) {
		const date = typeof now === "undefined" || now instanceof Date ? now : new Date(now);
		if (this._fakingTime) this._clock.setSystemTime(date);
		else {
			this._fakingDate = date ?? new Date(this.getRealSystemTime());
			mockDate(this._fakingDate);
		}
	}
	getMockedSystemTime() {
		return this._fakingTime ? new Date(this._clock.now) : this._fakingDate;
	}
	getRealSystemTime() {
		return this._now();
	}
	getTimerCount() {
		if (this._checkFakeTimers()) return this._clock.countTimers();
		return 0;
	}
	configure(config) {
		this._userConfig = config;
	}
	isFakeTimers() {
		return this._fakingTime;
	}
	_checkFakeTimers() {
		if (!this._fakingTime) throw new Error("Timers are not mocked. Try calling \"vi.useFakeTimers()\" first.");
		return this._fakingTime;
	}
}

function copyStackTrace(target, source) {
	if (source.stack !== void 0) target.stack = source.stack.replace(source.message, target.message);
	return target;
}
function waitFor(callback, options = {}) {
	const { setTimeout, setInterval, clearTimeout, clearInterval } = getSafeTimers();
	const { interval = 50, timeout = 1e3 } = typeof options === "number" ? { timeout: options } : options;
	const STACK_TRACE_ERROR = new Error("STACK_TRACE_ERROR");
	return new Promise((resolve, reject) => {
		let lastError;
		let promiseStatus = "idle";
		let timeoutId;
		let intervalId;
		const onResolve = (result) => {
			if (timeoutId) clearTimeout(timeoutId);
			if (intervalId) clearInterval(intervalId);
			resolve(result);
		};
		const handleTimeout = () => {
			if (intervalId) clearInterval(intervalId);
			let error = lastError;
			if (!error) error = copyStackTrace(new Error("Timed out in waitFor!"), STACK_TRACE_ERROR);
			reject(error);
		};
		const checkCallback = () => {
			if (vi.isFakeTimers()) vi.advanceTimersByTime(interval);
			if (promiseStatus === "pending") return;
			try {
				const result = callback();
				if (result !== null && typeof result === "object" && typeof result.then === "function") {
					const thenable = result;
					promiseStatus = "pending";
					thenable.then((resolvedValue) => {
						promiseStatus = "resolved";
						onResolve(resolvedValue);
					}, (rejectedValue) => {
						promiseStatus = "rejected";
						lastError = rejectedValue;
					});
				} else {
					onResolve(result);
					return true;
				}
			} catch (error) {
				lastError = error;
			}
		};
		if (checkCallback() === true) return;
		timeoutId = setTimeout(handleTimeout, timeout);
		intervalId = setInterval(checkCallback, interval);
	});
}
function waitUntil(callback, options = {}) {
	const { setTimeout, setInterval, clearTimeout, clearInterval } = getSafeTimers();
	const { interval = 50, timeout = 1e3 } = typeof options === "number" ? { timeout: options } : options;
	const STACK_TRACE_ERROR = new Error("STACK_TRACE_ERROR");
	return new Promise((resolve, reject) => {
		let promiseStatus = "idle";
		let timeoutId;
		let intervalId;
		const onReject = (error) => {
			if (intervalId) clearInterval(intervalId);
			if (!error) error = copyStackTrace(new Error("Timed out in waitUntil!"), STACK_TRACE_ERROR);
			reject(error);
		};
		const onResolve = (result) => {
			if (!result) return;
			if (timeoutId) clearTimeout(timeoutId);
			if (intervalId) clearInterval(intervalId);
			resolve(result);
			return true;
		};
		const checkCallback = () => {
			if (vi.isFakeTimers()) vi.advanceTimersByTime(interval);
			if (promiseStatus === "pending") return;
			try {
				const result = callback();
				if (result !== null && typeof result === "object" && typeof result.then === "function") {
					const thenable = result;
					promiseStatus = "pending";
					thenable.then((resolvedValue) => {
						promiseStatus = "resolved";
						onResolve(resolvedValue);
					}, (rejectedValue) => {
						promiseStatus = "rejected";
						onReject(rejectedValue);
					});
				} else return onResolve(result);
			} catch (error) {
				onReject(error);
			}
		};
		if (checkCallback() === true) return;
		timeoutId = setTimeout(onReject, timeout);
		intervalId = setInterval(checkCallback, interval);
	});
}

function createVitest() {
	let _config = null;
	const workerState = getWorkerState();
	let _timers;
	const timers = () => _timers ||= new FakeTimers({
		global: globalThis,
		config: workerState.config.fakeTimers
	});
	const _stubsGlobal = /* @__PURE__ */ new Map();
	const _stubsEnv = /* @__PURE__ */ new Map();
	const _envBooleans = [
		"PROD",
		"DEV",
		"SSR"
	];
	const utils = {
		useFakeTimers(config) {
			if (isChildProcess()) {
				if (config?.toFake?.includes("nextTick") || workerState.config?.fakeTimers?.toFake?.includes("nextTick")) throw new Error("vi.useFakeTimers({ toFake: [\"nextTick\"] }) is not supported in node:child_process. Use --pool=threads if mocking nextTick is required.");
			}
			if (config) timers().configure({
				...workerState.config.fakeTimers,
				...config
			});
			else timers().configure(workerState.config.fakeTimers);
			timers().useFakeTimers();
			return utils;
		},
		isFakeTimers() {
			return timers().isFakeTimers();
		},
		useRealTimers() {
			timers().useRealTimers();
			return utils;
		},
		runOnlyPendingTimers() {
			timers().runOnlyPendingTimers();
			return utils;
		},
		async runOnlyPendingTimersAsync() {
			await timers().runOnlyPendingTimersAsync();
			return utils;
		},
		runAllTimers() {
			timers().runAllTimers();
			return utils;
		},
		async runAllTimersAsync() {
			await timers().runAllTimersAsync();
			return utils;
		},
		runAllTicks() {
			timers().runAllTicks();
			return utils;
		},
		advanceTimersByTime(ms) {
			timers().advanceTimersByTime(ms);
			return utils;
		},
		async advanceTimersByTimeAsync(ms) {
			await timers().advanceTimersByTimeAsync(ms);
			return utils;
		},
		advanceTimersToNextTimer() {
			timers().advanceTimersToNextTimer();
			return utils;
		},
		async advanceTimersToNextTimerAsync() {
			await timers().advanceTimersToNextTimerAsync();
			return utils;
		},
		advanceTimersToNextFrame() {
			timers().advanceTimersToNextFrame();
			return utils;
		},
		getTimerCount() {
			return timers().getTimerCount();
		},
		setSystemTime(time) {
			timers().setSystemTime(time);
			return utils;
		},
		getMockedSystemTime() {
			return timers().getMockedSystemTime();
		},
		getRealSystemTime() {
			return timers().getRealSystemTime();
		},
		clearAllTimers() {
			timers().clearAllTimers();
			return utils;
		},
		spyOn,
		fn,
		waitFor,
		waitUntil,
		hoisted(factory) {
			assertTypes(factory, "\"vi.hoisted\" factory", ["function"]);
			return factory();
		},
		mock(path, factory) {
			if (typeof path !== "string") throw new TypeError(`vi.mock() expects a string path, but received a ${typeof path}`);
			const importer = getImporter("mock");
			_mocker().queueMock(path, importer, typeof factory === "function" ? () => factory(() => _mocker().importActual(path, importer, _mocker().getMockContext().callstack)) : factory);
		},
		unmock(path) {
			if (typeof path !== "string") throw new TypeError(`vi.unmock() expects a string path, but received a ${typeof path}`);
			_mocker().queueUnmock(path, getImporter("unmock"));
		},
		doMock(path, factory) {
			if (typeof path !== "string") throw new TypeError(`vi.doMock() expects a string path, but received a ${typeof path}`);
			const importer = getImporter("doMock");
			_mocker().queueMock(path, importer, typeof factory === "function" ? () => factory(() => _mocker().importActual(path, importer, _mocker().getMockContext().callstack)) : factory);
		},
		doUnmock(path) {
			if (typeof path !== "string") throw new TypeError(`vi.doUnmock() expects a string path, but received a ${typeof path}`);
			_mocker().queueUnmock(path, getImporter("doUnmock"));
		},
		async importActual(path) {
			return _mocker().importActual(path, getImporter("importActual"), _mocker().getMockContext().callstack);
		},
		async importMock(path) {
			return _mocker().importMock(path, getImporter("importMock"));
		},
		mockObject(value) {
			return _mocker().mockObject({ value }).value;
		},
		mocked(item, _options = {}) {
			return item;
		},
		isMockFunction(fn) {
			return isMockFunction(fn);
		},
		clearAllMocks() {
			[...mocks].reverse().forEach((spy) => spy.mockClear());
			return utils;
		},
		resetAllMocks() {
			[...mocks].reverse().forEach((spy) => spy.mockReset());
			return utils;
		},
		restoreAllMocks() {
			[...mocks].reverse().forEach((spy) => spy.mockRestore());
			return utils;
		},
		stubGlobal(name, value) {
			if (!_stubsGlobal.has(name)) _stubsGlobal.set(name, Object.getOwnPropertyDescriptor(globalThis, name));
			Object.defineProperty(globalThis, name, {
				value,
				writable: true,
				configurable: true,
				enumerable: true
			});
			return utils;
		},
		stubEnv(name, value) {
			if (!_stubsEnv.has(name)) _stubsEnv.set(name, process.env[name]);
			if (_envBooleans.includes(name)) process.env[name] = value ? "1" : "";
			else if (value === void 0) delete process.env[name];
			else process.env[name] = String(value);
			return utils;
		},
		unstubAllGlobals() {
			_stubsGlobal.forEach((original, name) => {
				if (!original) Reflect.deleteProperty(globalThis, name);
				else Object.defineProperty(globalThis, name, original);
			});
			_stubsGlobal.clear();
			return utils;
		},
		unstubAllEnvs() {
			_stubsEnv.forEach((original, name) => {
				if (original === void 0) delete process.env[name];
				else process.env[name] = original;
			});
			_stubsEnv.clear();
			return utils;
		},
		resetModules() {
			resetModules(workerState.moduleCache);
			return utils;
		},
		async dynamicImportSettled() {
			return waitForImportsToResolve();
		},
		setConfig(config) {
			if (!_config) _config = { ...workerState.config };
			Object.assign(workerState.config, config);
		},
		resetConfig() {
			if (_config) Object.assign(workerState.config, _config);
		}
	};
	return utils;
}
const vitest = createVitest();
const vi = vitest;
function _mocker() {
	// @ts-expect-error injected by vite-nide
	return typeof __vitest_mocker__ !== "undefined" ? __vitest_mocker__ : new Proxy({}, { get(_, name) {
		throw new Error(`Vitest mocker was not initialized in this environment. vi.${String(name)}() is forbidden.`);
	} });
}
function getImporter(name) {
	const stackTrace = createSimpleStackTrace({ stackTraceLimit: 5 });
	const stackArray = stackTrace.split("\n");
	// if there is no message in a stack trace, use the item - 1
	const importerStackIndex = stackArray.findIndex((stack) => {
		return stack.includes(` at Object.${name}`) || stack.includes(`${name}@`);
	});
	const stack = parseSingleStack(stackArray[importerStackIndex + 1]);
	return stack?.file || "";
}

export { globalExpect as a, vitest as b, createExpect as c, getSnapshotClient as g, inject as i, vi as v };
