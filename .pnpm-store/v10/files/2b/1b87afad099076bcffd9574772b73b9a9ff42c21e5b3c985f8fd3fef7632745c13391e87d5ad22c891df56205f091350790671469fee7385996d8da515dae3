import { isObject, createDefer, toArray, isNegativeNaN, format, objectAttr, objDisplay, getSafeTimers, shuffle, assertTypes } from '@vitest/utils';
import { parseSingleStack } from '@vitest/utils/source-map';
import { processError } from '@vitest/utils/error';
import { stripLiteral } from 'strip-literal';
import { relative } from 'pathe';

class PendingError extends Error {
	code = "VITEST_PENDING";
	taskId;
	constructor(message, task, note) {
		super(message);
		this.message = message;
		this.note = note;
		this.taskId = task.id;
	}
}
class TestRunAbortError extends Error {
	name = "TestRunAbortError";
	reason;
	constructor(message, reason) {
		super(message);
		this.reason = reason;
	}
}

// use WeakMap here to make the Test and Suite object serializable
const fnMap = new WeakMap();
const testFixtureMap = new WeakMap();
const hooksMap = new WeakMap();
function setFn(key, fn) {
	fnMap.set(key, fn);
}
function getFn(key) {
	return fnMap.get(key);
}
function setTestFixture(key, fixture) {
	testFixtureMap.set(key, fixture);
}
function getTestFixture(key) {
	return testFixtureMap.get(key);
}
function setHooks(key, hooks) {
	hooksMap.set(key, hooks);
}
function getHooks(key) {
	return hooksMap.get(key);
}

async function runSetupFiles(config, files, runner) {
	if (config.sequence.setupFiles === "parallel") {
		await Promise.all(files.map(async (fsPath) => {
			await runner.importFile(fsPath, "setup");
		}));
	} else {
		for (const fsPath of files) {
			await runner.importFile(fsPath, "setup");
		}
	}
}

function mergeScopedFixtures(testFixtures, scopedFixtures) {
	const scopedFixturesMap = scopedFixtures.reduce((map, fixture) => {
		map[fixture.prop] = fixture;
		return map;
	}, {});
	const newFixtures = {};
	testFixtures.forEach((fixture) => {
		const useFixture = scopedFixturesMap[fixture.prop] || { ...fixture };
		newFixtures[useFixture.prop] = useFixture;
	});
	for (const fixtureKep in newFixtures) {
		var _fixture$deps;
		const fixture = newFixtures[fixtureKep];
		// if the fixture was define before the scope, then its dep
		// will reference the original fixture instead of the scope
		fixture.deps = (_fixture$deps = fixture.deps) === null || _fixture$deps === void 0 ? void 0 : _fixture$deps.map((dep) => newFixtures[dep.prop]);
	}
	return Object.values(newFixtures);
}
function mergeContextFixtures(fixtures, context, runner) {
	const fixtureOptionKeys = [
		"auto",
		"injected",
		"scope"
	];
	const fixtureArray = Object.entries(fixtures).map(([prop, value]) => {
		const fixtureItem = { value };
		if (Array.isArray(value) && value.length >= 2 && isObject(value[1]) && Object.keys(value[1]).some((key) => fixtureOptionKeys.includes(key))) {
			var _runner$injectValue;
			// fixture with options
			Object.assign(fixtureItem, value[1]);
			const userValue = value[0];
			fixtureItem.value = fixtureItem.injected ? ((_runner$injectValue = runner.injectValue) === null || _runner$injectValue === void 0 ? void 0 : _runner$injectValue.call(runner, prop)) ?? userValue : userValue;
		}
		fixtureItem.scope = fixtureItem.scope || "test";
		if (fixtureItem.scope === "worker" && !runner.getWorkerContext) {
			fixtureItem.scope = "file";
		}
		fixtureItem.prop = prop;
		fixtureItem.isFn = typeof fixtureItem.value === "function";
		return fixtureItem;
	});
	if (Array.isArray(context.fixtures)) {
		context.fixtures = context.fixtures.concat(fixtureArray);
	} else {
		context.fixtures = fixtureArray;
	}
	// Update dependencies of fixture functions
	fixtureArray.forEach((fixture) => {
		if (fixture.isFn) {
			const usedProps = getUsedProps(fixture.value);
			if (usedProps.length) {
				fixture.deps = context.fixtures.filter(({ prop }) => prop !== fixture.prop && usedProps.includes(prop));
			}
			// test can access anything, so we ignore it
			if (fixture.scope !== "test") {
				var _fixture$deps2;
				(_fixture$deps2 = fixture.deps) === null || _fixture$deps2 === void 0 ? void 0 : _fixture$deps2.forEach((dep) => {
					if (!dep.isFn) {
						// non fn fixtures are always resolved and available to anyone
						return;
					}
					// worker scope can only import from worker scope
					if (fixture.scope === "worker" && dep.scope === "worker") {
						return;
					}
					// file scope an import from file and worker scopes
					if (fixture.scope === "file" && dep.scope !== "test") {
						return;
					}
					throw new SyntaxError(`cannot use the ${dep.scope} fixture "${dep.prop}" inside the ${fixture.scope} fixture "${fixture.prop}"`);
				});
			}
		}
	});
	return context;
}
const fixtureValueMaps = new Map();
const cleanupFnArrayMap = new Map();
async function callFixtureCleanup(context) {
	const cleanupFnArray = cleanupFnArrayMap.get(context) ?? [];
	for (const cleanup of cleanupFnArray.reverse()) {
		await cleanup();
	}
	cleanupFnArrayMap.delete(context);
}
function withFixtures(runner, fn, testContext) {
	return (hookContext) => {
		const context = hookContext || testContext;
		if (!context) {
			return fn({});
		}
		const fixtures = getTestFixture(context);
		if (!(fixtures === null || fixtures === void 0 ? void 0 : fixtures.length)) {
			return fn(context);
		}
		const usedProps = getUsedProps(fn);
		const hasAutoFixture = fixtures.some(({ auto }) => auto);
		if (!usedProps.length && !hasAutoFixture) {
			return fn(context);
		}
		if (!fixtureValueMaps.get(context)) {
			fixtureValueMaps.set(context, new Map());
		}
		const fixtureValueMap = fixtureValueMaps.get(context);
		if (!cleanupFnArrayMap.has(context)) {
			cleanupFnArrayMap.set(context, []);
		}
		const cleanupFnArray = cleanupFnArrayMap.get(context);
		const usedFixtures = fixtures.filter(({ prop, auto }) => auto || usedProps.includes(prop));
		const pendingFixtures = resolveDeps(usedFixtures);
		if (!pendingFixtures.length) {
			return fn(context);
		}
		async function resolveFixtures() {
			for (const fixture of pendingFixtures) {
				// fixture could be already initialized during "before" hook
				if (fixtureValueMap.has(fixture)) {
					continue;
				}
				const resolvedValue = await resolveFixtureValue(runner, fixture, context, cleanupFnArray);
				context[fixture.prop] = resolvedValue;
				fixtureValueMap.set(fixture, resolvedValue);
				if (fixture.scope === "test") {
					cleanupFnArray.unshift(() => {
						fixtureValueMap.delete(fixture);
					});
				}
			}
		}
		return resolveFixtures().then(() => fn(context));
	};
}
const globalFixturePromise = new WeakMap();
function resolveFixtureValue(runner, fixture, context, cleanupFnArray) {
	var _runner$getWorkerCont;
	const fileContext = getFileContext(context.task.file);
	const workerContext = (_runner$getWorkerCont = runner.getWorkerContext) === null || _runner$getWorkerCont === void 0 ? void 0 : _runner$getWorkerCont.call(runner);
	if (!fixture.isFn) {
		var _fixture$prop;
		fileContext[_fixture$prop = fixture.prop] ?? (fileContext[_fixture$prop] = fixture.value);
		if (workerContext) {
			var _fixture$prop2;
			workerContext[_fixture$prop2 = fixture.prop] ?? (workerContext[_fixture$prop2] = fixture.value);
		}
		return fixture.value;
	}
	if (fixture.scope === "test") {
		return resolveFixtureFunction(fixture.value, context, cleanupFnArray);
	}
	// in case the test runs in parallel
	if (globalFixturePromise.has(fixture)) {
		return globalFixturePromise.get(fixture);
	}
	let fixtureContext;
	if (fixture.scope === "worker") {
		if (!workerContext) {
			throw new TypeError("[@vitest/runner] The worker context is not available in the current test runner. Please, provide the `getWorkerContext` method when initiating the runner.");
		}
		fixtureContext = workerContext;
	} else {
		fixtureContext = fileContext;
	}
	if (fixture.prop in fixtureContext) {
		return fixtureContext[fixture.prop];
	}
	if (!cleanupFnArrayMap.has(fixtureContext)) {
		cleanupFnArrayMap.set(fixtureContext, []);
	}
	const cleanupFnFileArray = cleanupFnArrayMap.get(fixtureContext);
	const promise = resolveFixtureFunction(fixture.value, fixtureContext, cleanupFnFileArray).then((value) => {
		fixtureContext[fixture.prop] = value;
		globalFixturePromise.delete(fixture);
		return value;
	});
	globalFixturePromise.set(fixture, promise);
	return promise;
}
async function resolveFixtureFunction(fixtureFn, context, cleanupFnArray) {
	// wait for `use` call to extract fixture value
	const useFnArgPromise = createDefer();
	let isUseFnArgResolved = false;
	const fixtureReturn = fixtureFn(context, async (useFnArg) => {
		// extract `use` argument
		isUseFnArgResolved = true;
		useFnArgPromise.resolve(useFnArg);
		// suspend fixture teardown by holding off `useReturnPromise` resolution until cleanup
		const useReturnPromise = createDefer();
		cleanupFnArray.push(async () => {
			// start teardown by resolving `use` Promise
			useReturnPromise.resolve();
			// wait for finishing teardown
			await fixtureReturn;
		});
		await useReturnPromise;
	}).catch((e) => {
		// treat fixture setup error as test failure
		if (!isUseFnArgResolved) {
			useFnArgPromise.reject(e);
			return;
		}
		// otherwise re-throw to avoid silencing error during cleanup
		throw e;
	});
	return useFnArgPromise;
}
function resolveDeps(fixtures, depSet = new Set(), pendingFixtures = []) {
	fixtures.forEach((fixture) => {
		if (pendingFixtures.includes(fixture)) {
			return;
		}
		if (!fixture.isFn || !fixture.deps) {
			pendingFixtures.push(fixture);
			return;
		}
		if (depSet.has(fixture)) {
			throw new Error(`Circular fixture dependency detected: ${fixture.prop} <- ${[...depSet].reverse().map((d) => d.prop).join(" <- ")}`);
		}
		depSet.add(fixture);
		resolveDeps(fixture.deps, depSet, pendingFixtures);
		pendingFixtures.push(fixture);
		depSet.clear();
	});
	return pendingFixtures;
}
function getUsedProps(fn) {
	let fnString = stripLiteral(fn.toString());
	// match lowered async function and strip it off
	// example code on esbuild-try https://esbuild.github.io/try/#YgAwLjI0LjAALS1zdXBwb3J0ZWQ6YXN5bmMtYXdhaXQ9ZmFsc2UAZQBlbnRyeS50cwBjb25zdCBvID0gewogIGYxOiBhc3luYyAoKSA9PiB7fSwKICBmMjogYXN5bmMgKGEpID0+IHt9LAogIGYzOiBhc3luYyAoYSwgYikgPT4ge30sCiAgZjQ6IGFzeW5jIGZ1bmN0aW9uKGEpIHt9LAogIGY1OiBhc3luYyBmdW5jdGlvbiBmZihhKSB7fSwKICBhc3luYyBmNihhKSB7fSwKCiAgZzE6IGFzeW5jICgpID0+IHt9LAogIGcyOiBhc3luYyAoeyBhIH0pID0+IHt9LAogIGczOiBhc3luYyAoeyBhIH0sIGIpID0+IHt9LAogIGc0OiBhc3luYyBmdW5jdGlvbiAoeyBhIH0pIHt9LAogIGc1OiBhc3luYyBmdW5jdGlvbiBnZyh7IGEgfSkge30sCiAgYXN5bmMgZzYoeyBhIH0pIHt9LAoKICBoMTogYXN5bmMgKCkgPT4ge30sCiAgLy8gY29tbWVudCBiZXR3ZWVuCiAgaDI6IGFzeW5jIChhKSA9PiB7fSwKfQ
	//   __async(this, null, function*
	//   __async(this, arguments, function*
	//   __async(this, [_0, _1], function*
	if (/__async\((?:this|null), (?:null|arguments|\[[_0-9, ]*\]), function\*/.test(fnString)) {
		fnString = fnString.split(/__async\((?:this|null),/)[1];
	}
	const match = fnString.match(/[^(]*\(([^)]*)/);
	if (!match) {
		return [];
	}
	const args = splitByComma(match[1]);
	if (!args.length) {
		return [];
	}
	let first = args[0];
	if ("__VITEST_FIXTURE_INDEX__" in fn) {
		first = args[fn.__VITEST_FIXTURE_INDEX__];
		if (!first) {
			return [];
		}
	}
	if (!(first.startsWith("{") && first.endsWith("}"))) {
		throw new Error(`The first argument inside a fixture must use object destructuring pattern, e.g. ({ test } => {}). Instead, received "${first}".`);
	}
	const _first = first.slice(1, -1).replace(/\s/g, "");
	const props = splitByComma(_first).map((prop) => {
		return prop.replace(/:.*|=.*/g, "");
	});
	const last = props.at(-1);
	if (last && last.startsWith("...")) {
		throw new Error(`Rest parameters are not supported in fixtures, received "${last}".`);
	}
	return props;
}
function splitByComma(s) {
	const result = [];
	const stack = [];
	let start = 0;
	for (let i = 0; i < s.length; i++) {
		if (s[i] === "{" || s[i] === "[") {
			stack.push(s[i] === "{" ? "}" : "]");
		} else if (s[i] === stack[stack.length - 1]) {
			stack.pop();
		} else if (!stack.length && s[i] === ",") {
			const token = s.substring(start, i).trim();
			if (token) {
				result.push(token);
			}
			start = i + 1;
		}
	}
	const lastToken = s.substring(start).trim();
	if (lastToken) {
		result.push(lastToken);
	}
	return result;
}

let _test;
function setCurrentTest(test) {
	_test = test;
}
function getCurrentTest() {
	return _test;
}
const tests = [];
function addRunningTest(test) {
	tests.push(test);
	return () => {
		tests.splice(tests.indexOf(test));
	};
}
function getRunningTests() {
	return tests;
}

function createChainable(keys, fn) {
	function create(context) {
		const chain = function(...args) {
			return fn.apply(context, args);
		};
		Object.assign(chain, fn);
		chain.withContext = () => chain.bind(context);
		chain.setContext = (key, value) => {
			context[key] = value;
		};
		chain.mergeContext = (ctx) => {
			Object.assign(context, ctx);
		};
		for (const key of keys) {
			Object.defineProperty(chain, key, { get() {
				return create({
					...context,
					[key]: true
				});
			} });
		}
		return chain;
	}
	const chain = create({});
	chain.fn = fn;
	return chain;
}

/**
* Creates a suite of tests, allowing for grouping and hierarchical organization of tests.
* Suites can contain both tests and other suites, enabling complex test structures.
*
* @param {string} name - The name of the suite, used for identification and reporting.
* @param {Function} fn - A function that defines the tests and suites within this suite.
* @example
* ```ts
* // Define a suite with two tests
* suite('Math operations', () => {
*   test('should add two numbers', () => {
*     expect(add(1, 2)).toBe(3);
*   });
*
*   test('should subtract two numbers', () => {
*     expect(subtract(5, 2)).toBe(3);
*   });
* });
* ```
* @example
* ```ts
* // Define nested suites
* suite('String operations', () => {
*   suite('Trimming', () => {
*     test('should trim whitespace from start and end', () => {
*       expect('  hello  '.trim()).toBe('hello');
*     });
*   });
*
*   suite('Concatenation', () => {
*     test('should concatenate two strings', () => {
*       expect('hello' + ' ' + 'world').toBe('hello world');
*     });
*   });
* });
* ```
*/
const suite = createSuite();
/**
* Defines a test case with a given name and test function. The test function can optionally be configured with test options.
*
* @param {string | Function} name - The name of the test or a function that will be used as a test name.
* @param {TestOptions | TestFunction} [optionsOrFn] - Optional. The test options or the test function if no explicit name is provided.
* @param {number | TestOptions | TestFunction} [optionsOrTest] - Optional. The test function or options, depending on the previous parameters.
* @throws {Error} If called inside another test function.
* @example
* ```ts
* // Define a simple test
* test('should add two numbers', () => {
*   expect(add(1, 2)).toBe(3);
* });
* ```
* @example
* ```ts
* // Define a test with options
* test('should subtract two numbers', { retry: 3 }, () => {
*   expect(subtract(5, 2)).toBe(3);
* });
* ```
*/
const test = createTest(function(name, optionsOrFn, optionsOrTest) {
	if (getCurrentTest()) {
		throw new Error("Calling the test function inside another test function is not allowed. Please put it inside \"describe\" or \"suite\" so it can be properly collected.");
	}
	getCurrentSuite().test.fn.call(this, formatName(name), optionsOrFn, optionsOrTest);
});
/**
* Creates a suite of tests, allowing for grouping and hierarchical organization of tests.
* Suites can contain both tests and other suites, enabling complex test structures.
*
* @param {string} name - The name of the suite, used for identification and reporting.
* @param {Function} fn - A function that defines the tests and suites within this suite.
* @example
* ```ts
* // Define a suite with two tests
* describe('Math operations', () => {
*   test('should add two numbers', () => {
*     expect(add(1, 2)).toBe(3);
*   });
*
*   test('should subtract two numbers', () => {
*     expect(subtract(5, 2)).toBe(3);
*   });
* });
* ```
* @example
* ```ts
* // Define nested suites
* describe('String operations', () => {
*   describe('Trimming', () => {
*     test('should trim whitespace from start and end', () => {
*       expect('  hello  '.trim()).toBe('hello');
*     });
*   });
*
*   describe('Concatenation', () => {
*     test('should concatenate two strings', () => {
*       expect('hello' + ' ' + 'world').toBe('hello world');
*     });
*   });
* });
* ```
*/
const describe = suite;
/**
* Defines a test case with a given name and test function. The test function can optionally be configured with test options.
*
* @param {string | Function} name - The name of the test or a function that will be used as a test name.
* @param {TestOptions | TestFunction} [optionsOrFn] - Optional. The test options or the test function if no explicit name is provided.
* @param {number | TestOptions | TestFunction} [optionsOrTest] - Optional. The test function or options, depending on the previous parameters.
* @throws {Error} If called inside another test function.
* @example
* ```ts
* // Define a simple test
* it('adds two numbers', () => {
*   expect(add(1, 2)).toBe(3);
* });
* ```
* @example
* ```ts
* // Define a test with options
* it('subtracts two numbers', { retry: 3 }, () => {
*   expect(subtract(5, 2)).toBe(3);
* });
* ```
*/
const it = test;
let runner;
let defaultSuite;
let currentTestFilepath;
function assert(condition, message) {
	if (!condition) {
		throw new Error(`Vitest failed to find ${message}. This is a bug in Vitest. Please, open an issue with reproduction.`);
	}
}
function getDefaultSuite() {
	assert(defaultSuite, "the default suite");
	return defaultSuite;
}
function getTestFilepath() {
	return currentTestFilepath;
}
function getRunner() {
	assert(runner, "the runner");
	return runner;
}
function createDefaultSuite(runner) {
	const config = runner.config.sequence;
	const collector = suite("", { concurrent: config.concurrent }, () => {});
	// no parent suite for top-level tests
	delete collector.suite;
	return collector;
}
function clearCollectorContext(filepath, currentRunner) {
	if (!defaultSuite) {
		defaultSuite = createDefaultSuite(currentRunner);
	}
	runner = currentRunner;
	currentTestFilepath = filepath;
	collectorContext.tasks.length = 0;
	defaultSuite.clear();
	collectorContext.currentSuite = defaultSuite;
}
function getCurrentSuite() {
	const currentSuite = collectorContext.currentSuite || defaultSuite;
	assert(currentSuite, "the current suite");
	return currentSuite;
}
function createSuiteHooks() {
	return {
		beforeAll: [],
		afterAll: [],
		beforeEach: [],
		afterEach: []
	};
}
function parseArguments(optionsOrFn, optionsOrTest) {
	let options = {};
	let fn = () => {};
	// it('', () => {}, { retry: 2 })
	if (typeof optionsOrTest === "object") {
		// it('', { retry: 2 }, { retry: 3 })
		if (typeof optionsOrFn === "object") {
			throw new TypeError("Cannot use two objects as arguments. Please provide options and a function callback in that order.");
		}
		console.warn("Using an object as a third argument is deprecated. Vitest 4 will throw an error if the third argument is not a timeout number. Please use the second argument for options. See more at https://vitest.dev/guide/migration");
		options = optionsOrTest;
	} else if (typeof optionsOrTest === "number") {
		options = { timeout: optionsOrTest };
	} else if (typeof optionsOrFn === "object") {
		options = optionsOrFn;
	}
	if (typeof optionsOrFn === "function") {
		if (typeof optionsOrTest === "function") {
			throw new TypeError("Cannot use two functions as arguments. Please use the second argument for options.");
		}
		fn = optionsOrFn;
	} else if (typeof optionsOrTest === "function") {
		fn = optionsOrTest;
	}
	return {
		options,
		handler: fn
	};
}
// implementations
function createSuiteCollector(name, factory = () => {}, mode, each, suiteOptions, parentCollectorFixtures) {
	const tasks = [];
	let suite;
	initSuite(true);
	const task = function(name = "", options = {}) {
		var _collectorContext$cur;
		const timeout = (options === null || options === void 0 ? void 0 : options.timeout) ?? runner.config.testTimeout;
		const task = {
			id: "",
			name,
			suite: (_collectorContext$cur = collectorContext.currentSuite) === null || _collectorContext$cur === void 0 ? void 0 : _collectorContext$cur.suite,
			each: options.each,
			fails: options.fails,
			context: undefined,
			type: "test",
			file: undefined,
			timeout,
			retry: options.retry ?? runner.config.retry,
			repeats: options.repeats,
			mode: options.only ? "only" : options.skip ? "skip" : options.todo ? "todo" : "run",
			meta: options.meta ?? Object.create(null),
			annotations: []
		};
		const handler = options.handler;
		if (options.concurrent || !options.sequential && runner.config.sequence.concurrent) {
			task.concurrent = true;
		}
		task.shuffle = suiteOptions === null || suiteOptions === void 0 ? void 0 : suiteOptions.shuffle;
		const context = createTestContext(task, runner);
		// create test context
		Object.defineProperty(task, "context", {
			value: context,
			enumerable: false
		});
		setTestFixture(context, options.fixtures);
		// custom can be called from any place, let's assume the limit is 15 stacks
		const limit = Error.stackTraceLimit;
		Error.stackTraceLimit = 15;
		const stackTraceError = new Error("STACK_TRACE_ERROR");
		Error.stackTraceLimit = limit;
		if (handler) {
			setFn(task, withTimeout(withAwaitAsyncAssertions(withFixtures(runner, handler, context), task), timeout, false, stackTraceError, (_, error) => abortIfTimeout([context], error)));
		}
		if (runner.config.includeTaskLocation) {
			const error = stackTraceError.stack;
			const stack = findTestFileStackTrace(error);
			if (stack) {
				task.location = stack;
			}
		}
		tasks.push(task);
		return task;
	};
	const test = createTest(function(name, optionsOrFn, optionsOrTest) {
		let { options, handler } = parseArguments(optionsOrFn, optionsOrTest);
		// inherit repeats, retry, timeout from suite
		if (typeof suiteOptions === "object") {
			options = Object.assign({}, suiteOptions, options);
		}
		// inherit concurrent / sequential from suite
		options.concurrent = this.concurrent || !this.sequential && (options === null || options === void 0 ? void 0 : options.concurrent);
		options.sequential = this.sequential || !this.concurrent && (options === null || options === void 0 ? void 0 : options.sequential);
		const test = task(formatName(name), {
			...this,
			...options,
			handler
		});
		test.type = "test";
	});
	let collectorFixtures = parentCollectorFixtures;
	const collector = {
		type: "collector",
		name,
		mode,
		suite,
		options: suiteOptions,
		test,
		tasks,
		collect,
		task,
		clear,
		on: addHook,
		fixtures() {
			return collectorFixtures;
		},
		scoped(fixtures) {
			const parsed = mergeContextFixtures(fixtures, { fixtures: collectorFixtures }, runner);
			if (parsed.fixtures) {
				collectorFixtures = parsed.fixtures;
			}
		}
	};
	function addHook(name, ...fn) {
		getHooks(suite)[name].push(...fn);
	}
	function initSuite(includeLocation) {
		var _collectorContext$cur2;
		if (typeof suiteOptions === "number") {
			suiteOptions = { timeout: suiteOptions };
		}
		suite = {
			id: "",
			type: "suite",
			name,
			suite: (_collectorContext$cur2 = collectorContext.currentSuite) === null || _collectorContext$cur2 === void 0 ? void 0 : _collectorContext$cur2.suite,
			mode,
			each,
			file: undefined,
			shuffle: suiteOptions === null || suiteOptions === void 0 ? void 0 : suiteOptions.shuffle,
			tasks: [],
			meta: Object.create(null),
			concurrent: suiteOptions === null || suiteOptions === void 0 ? void 0 : suiteOptions.concurrent
		};
		if (runner && includeLocation && runner.config.includeTaskLocation) {
			const limit = Error.stackTraceLimit;
			Error.stackTraceLimit = 15;
			const error = new Error("stacktrace").stack;
			Error.stackTraceLimit = limit;
			const stack = findTestFileStackTrace(error);
			if (stack) {
				suite.location = stack;
			}
		}
		setHooks(suite, createSuiteHooks());
	}
	function clear() {
		tasks.length = 0;
		initSuite(false);
	}
	async function collect(file) {
		if (!file) {
			throw new TypeError("File is required to collect tasks.");
		}
		if (factory) {
			await runWithSuite(collector, () => factory(test));
		}
		const allChildren = [];
		for (const i of tasks) {
			allChildren.push(i.type === "collector" ? await i.collect(file) : i);
		}
		suite.file = file;
		suite.tasks = allChildren;
		allChildren.forEach((task) => {
			task.file = file;
		});
		return suite;
	}
	collectTask(collector);
	return collector;
}
function withAwaitAsyncAssertions(fn, task) {
	return async (...args) => {
		const fnResult = await fn(...args);
		// some async expect will be added to this array, in case user forget to await them
		if (task.promises) {
			const result = await Promise.allSettled(task.promises);
			const errors = result.map((r) => r.status === "rejected" ? r.reason : undefined).filter(Boolean);
			if (errors.length) {
				throw errors;
			}
		}
		return fnResult;
	};
}
function createSuite() {
	function suiteFn(name, factoryOrOptions, optionsOrFactory) {
		var _currentSuite$options;
		const mode = this.only ? "only" : this.skip ? "skip" : this.todo ? "todo" : "run";
		const currentSuite = collectorContext.currentSuite || defaultSuite;
		let { options, handler: factory } = parseArguments(factoryOrOptions, optionsOrFactory);
		const isConcurrentSpecified = options.concurrent || this.concurrent || options.sequential === false;
		const isSequentialSpecified = options.sequential || this.sequential || options.concurrent === false;
		// inherit options from current suite
		options = {
			...currentSuite === null || currentSuite === void 0 ? void 0 : currentSuite.options,
			...options,
			shuffle: this.shuffle ?? options.shuffle ?? (currentSuite === null || currentSuite === void 0 || (_currentSuite$options = currentSuite.options) === null || _currentSuite$options === void 0 ? void 0 : _currentSuite$options.shuffle) ?? (runner === null || runner === void 0 ? void 0 : runner.config.sequence.shuffle)
		};
		// inherit concurrent / sequential from suite
		const isConcurrent = isConcurrentSpecified || options.concurrent && !isSequentialSpecified;
		const isSequential = isSequentialSpecified || options.sequential && !isConcurrentSpecified;
		options.concurrent = isConcurrent && !isSequential;
		options.sequential = isSequential && !isConcurrent;
		return createSuiteCollector(formatName(name), factory, mode, this.each, options, currentSuite === null || currentSuite === void 0 ? void 0 : currentSuite.fixtures());
	}
	suiteFn.each = function(cases, ...args) {
		const suite = this.withContext();
		this.setContext("each", true);
		if (Array.isArray(cases) && args.length) {
			cases = formatTemplateString(cases, args);
		}
		return (name, optionsOrFn, fnOrOptions) => {
			const _name = formatName(name);
			const arrayOnlyCases = cases.every(Array.isArray);
			const { options, handler } = parseArguments(optionsOrFn, fnOrOptions);
			const fnFirst = typeof optionsOrFn === "function" && typeof fnOrOptions === "object";
			cases.forEach((i, idx) => {
				const items = Array.isArray(i) ? i : [i];
				if (fnFirst) {
					if (arrayOnlyCases) {
						suite(formatTitle(_name, items, idx), () => handler(...items), options);
					} else {
						suite(formatTitle(_name, items, idx), () => handler(i), options);
					}
				} else {
					if (arrayOnlyCases) {
						suite(formatTitle(_name, items, idx), options, () => handler(...items));
					} else {
						suite(formatTitle(_name, items, idx), options, () => handler(i));
					}
				}
			});
			this.setContext("each", undefined);
		};
	};
	suiteFn.for = function(cases, ...args) {
		if (Array.isArray(cases) && args.length) {
			cases = formatTemplateString(cases, args);
		}
		return (name, optionsOrFn, fnOrOptions) => {
			const name_ = formatName(name);
			const { options, handler } = parseArguments(optionsOrFn, fnOrOptions);
			cases.forEach((item, idx) => {
				suite(formatTitle(name_, toArray(item), idx), options, () => handler(item));
			});
		};
	};
	suiteFn.skipIf = (condition) => condition ? suite.skip : suite;
	suiteFn.runIf = (condition) => condition ? suite : suite.skip;
	return createChainable([
		"concurrent",
		"sequential",
		"shuffle",
		"skip",
		"only",
		"todo"
	], suiteFn);
}
function createTaskCollector(fn, context) {
	const taskFn = fn;
	taskFn.each = function(cases, ...args) {
		const test = this.withContext();
		this.setContext("each", true);
		if (Array.isArray(cases) && args.length) {
			cases = formatTemplateString(cases, args);
		}
		return (name, optionsOrFn, fnOrOptions) => {
			const _name = formatName(name);
			const arrayOnlyCases = cases.every(Array.isArray);
			const { options, handler } = parseArguments(optionsOrFn, fnOrOptions);
			const fnFirst = typeof optionsOrFn === "function" && typeof fnOrOptions === "object";
			cases.forEach((i, idx) => {
				const items = Array.isArray(i) ? i : [i];
				if (fnFirst) {
					if (arrayOnlyCases) {
						test(formatTitle(_name, items, idx), () => handler(...items), options);
					} else {
						test(formatTitle(_name, items, idx), () => handler(i), options);
					}
				} else {
					if (arrayOnlyCases) {
						test(formatTitle(_name, items, idx), options, () => handler(...items));
					} else {
						test(formatTitle(_name, items, idx), options, () => handler(i));
					}
				}
			});
			this.setContext("each", undefined);
		};
	};
	taskFn.for = function(cases, ...args) {
		const test = this.withContext();
		if (Array.isArray(cases) && args.length) {
			cases = formatTemplateString(cases, args);
		}
		return (name, optionsOrFn, fnOrOptions) => {
			const _name = formatName(name);
			const { options, handler } = parseArguments(optionsOrFn, fnOrOptions);
			cases.forEach((item, idx) => {
				// monkey-patch handler to allow parsing fixture
				const handlerWrapper = (ctx) => handler(item, ctx);
				handlerWrapper.__VITEST_FIXTURE_INDEX__ = 1;
				handlerWrapper.toString = () => handler.toString();
				test(formatTitle(_name, toArray(item), idx), options, handlerWrapper);
			});
		};
	};
	taskFn.skipIf = function(condition) {
		return condition ? this.skip : this;
	};
	taskFn.runIf = function(condition) {
		return condition ? this : this.skip;
	};
	taskFn.scoped = function(fixtures) {
		const collector = getCurrentSuite();
		collector.scoped(fixtures);
	};
	taskFn.extend = function(fixtures) {
		const _context = mergeContextFixtures(fixtures, context || {}, runner);
		const originalWrapper = fn;
		return createTest(function(name, optionsOrFn, optionsOrTest) {
			const collector = getCurrentSuite();
			const scopedFixtures = collector.fixtures();
			const context = { ...this };
			if (scopedFixtures) {
				context.fixtures = mergeScopedFixtures(context.fixtures || [], scopedFixtures);
			}
			const { handler, options } = parseArguments(optionsOrFn, optionsOrTest);
			const timeout = options.timeout ?? (runner === null || runner === void 0 ? void 0 : runner.config.testTimeout);
			originalWrapper.call(context, formatName(name), handler, timeout);
		}, _context);
	};
	const _test = createChainable([
		"concurrent",
		"sequential",
		"skip",
		"only",
		"todo",
		"fails"
	], taskFn);
	if (context) {
		_test.mergeContext(context);
	}
	return _test;
}
function createTest(fn, context) {
	return createTaskCollector(fn, context);
}
function formatName(name) {
	return typeof name === "string" ? name : typeof name === "function" ? name.name || "<anonymous>" : String(name);
}
function formatTitle(template, items, idx) {
	if (template.includes("%#") || template.includes("%$")) {
		// '%#' match index of the test case
		template = template.replace(/%%/g, "__vitest_escaped_%__").replace(/%#/g, `${idx}`).replace(/%\$/g, `${idx + 1}`).replace(/__vitest_escaped_%__/g, "%%");
	}
	const count = template.split("%").length - 1;
	if (template.includes("%f")) {
		const placeholders = template.match(/%f/g) || [];
		placeholders.forEach((_, i) => {
			if (isNegativeNaN(items[i]) || Object.is(items[i], -0)) {
				// Replace the i-th occurrence of '%f' with '-%f'
				let occurrence = 0;
				template = template.replace(/%f/g, (match) => {
					occurrence++;
					return occurrence === i + 1 ? "-%f" : match;
				});
			}
		});
	}
	let formatted = format(template, ...items.slice(0, count));
	const isObjectItem = isObject(items[0]);
	formatted = formatted.replace(/\$([$\w.]+)/g, (_, key) => {
		var _runner$config;
		const isArrayKey = /^\d+$/.test(key);
		if (!isObjectItem && !isArrayKey) {
			return `$${key}`;
		}
		const arrayElement = isArrayKey ? objectAttr(items, key) : undefined;
		const value = isObjectItem ? objectAttr(items[0], key, arrayElement) : arrayElement;
		return objDisplay(value, { truncate: runner === null || runner === void 0 || (_runner$config = runner.config) === null || _runner$config === void 0 || (_runner$config = _runner$config.chaiConfig) === null || _runner$config === void 0 ? void 0 : _runner$config.truncateThreshold });
	});
	return formatted;
}
function formatTemplateString(cases, args) {
	const header = cases.join("").trim().replace(/ /g, "").split("\n").map((i) => i.split("|"))[0];
	const res = [];
	for (let i = 0; i < Math.floor(args.length / header.length); i++) {
		const oneCase = {};
		for (let j = 0; j < header.length; j++) {
			oneCase[header[j]] = args[i * header.length + j];
		}
		res.push(oneCase);
	}
	return res;
}
function findTestFileStackTrace(error) {
	const testFilePath = getTestFilepath();
	// first line is the error message
	const lines = error.split("\n").slice(1);
	for (const line of lines) {
		const stack = parseSingleStack(line);
		if (stack && stack.file === testFilePath) {
			return {
				line: stack.line,
				column: stack.column
			};
		}
	}
}

/**
* If any tasks been marked as `only`, mark all other tasks as `skip`.
*/
function interpretTaskModes(file, namePattern, testLocations, onlyMode, parentIsOnly, allowOnly) {
	const matchedLocations = [];
	const traverseSuite = (suite, parentIsOnly, parentMatchedWithLocation) => {
		const suiteIsOnly = parentIsOnly || suite.mode === "only";
		suite.tasks.forEach((t) => {
			// Check if either the parent suite or the task itself are marked as included
			const includeTask = suiteIsOnly || t.mode === "only";
			if (onlyMode) {
				if (t.type === "suite" && (includeTask || someTasksAreOnly(t))) {
					// Don't skip this suite
					if (t.mode === "only") {
						checkAllowOnly(t, allowOnly);
						t.mode = "run";
					}
				} else if (t.mode === "run" && !includeTask) {
					t.mode = "skip";
				} else if (t.mode === "only") {
					checkAllowOnly(t, allowOnly);
					t.mode = "run";
				}
			}
			let hasLocationMatch = parentMatchedWithLocation;
			// Match test location against provided locations, only run if present
			// in `testLocations`. Note: if `includeTaskLocations` is not enabled,
			// all test will be skipped.
			if (testLocations !== undefined && testLocations.length !== 0) {
				if (t.location && (testLocations === null || testLocations === void 0 ? void 0 : testLocations.includes(t.location.line))) {
					t.mode = "run";
					matchedLocations.push(t.location.line);
					hasLocationMatch = true;
				} else if (parentMatchedWithLocation) {
					t.mode = "run";
				} else if (t.type === "test") {
					t.mode = "skip";
				}
			}
			if (t.type === "test") {
				if (namePattern && !getTaskFullName(t).match(namePattern)) {
					t.mode = "skip";
				}
			} else if (t.type === "suite") {
				if (t.mode === "skip") {
					skipAllTasks(t);
				} else if (t.mode === "todo") {
					todoAllTasks(t);
				} else {
					traverseSuite(t, includeTask, hasLocationMatch);
				}
			}
		});
		// if all subtasks are skipped, mark as skip
		if (suite.mode === "run" || suite.mode === "queued") {
			if (suite.tasks.length && suite.tasks.every((i) => i.mode !== "run" && i.mode !== "queued")) {
				suite.mode = "skip";
			}
		}
	};
	traverseSuite(file, parentIsOnly, false);
	const nonMatching = testLocations === null || testLocations === void 0 ? void 0 : testLocations.filter((loc) => !matchedLocations.includes(loc));
	if (nonMatching && nonMatching.length !== 0) {
		const message = nonMatching.length === 1 ? `line ${nonMatching[0]}` : `lines ${nonMatching.join(", ")}`;
		if (file.result === undefined) {
			file.result = {
				state: "fail",
				errors: []
			};
		}
		if (file.result.errors === undefined) {
			file.result.errors = [];
		}
		file.result.errors.push(processError(new Error(`No test found in ${file.name} in ${message}`)));
	}
}
function getTaskFullName(task) {
	return `${task.suite ? `${getTaskFullName(task.suite)} ` : ""}${task.name}`;
}
function someTasksAreOnly(suite) {
	return suite.tasks.some((t) => t.mode === "only" || t.type === "suite" && someTasksAreOnly(t));
}
function skipAllTasks(suite) {
	suite.tasks.forEach((t) => {
		if (t.mode === "run" || t.mode === "queued") {
			t.mode = "skip";
			if (t.type === "suite") {
				skipAllTasks(t);
			}
		}
	});
}
function todoAllTasks(suite) {
	suite.tasks.forEach((t) => {
		if (t.mode === "run" || t.mode === "queued") {
			t.mode = "todo";
			if (t.type === "suite") {
				todoAllTasks(t);
			}
		}
	});
}
function checkAllowOnly(task, allowOnly) {
	if (allowOnly) {
		return;
	}
	const error = processError(new Error("[Vitest] Unexpected .only modifier. Remove it or pass --allowOnly argument to bypass this error"));
	task.result = {
		state: "fail",
		errors: [error]
	};
}
function generateHash(str) {
	let hash = 0;
	if (str.length === 0) {
		return `${hash}`;
	}
	for (let i = 0; i < str.length; i++) {
		const char = str.charCodeAt(i);
		hash = (hash << 5) - hash + char;
		hash = hash & hash;
	}
	return `${hash}`;
}
function calculateSuiteHash(parent) {
	parent.tasks.forEach((t, idx) => {
		t.id = `${parent.id}_${idx}`;
		if (t.type === "suite") {
			calculateSuiteHash(t);
		}
	});
}
function createFileTask(filepath, root, projectName, pool) {
	const path = relative(root, filepath);
	const file = {
		id: generateFileHash(path, projectName),
		name: path,
		type: "suite",
		mode: "queued",
		filepath,
		tasks: [],
		meta: Object.create(null),
		projectName,
		file: undefined,
		pool
	};
	file.file = file;
	setFileContext(file, Object.create(null));
	return file;
}
/**
* Generate a unique ID for a file based on its path and project name
* @param file File relative to the root of the project to keep ID the same between different machines
* @param projectName The name of the test project
*/
function generateFileHash(file, projectName) {
	return generateHash(`${file}${projectName || ""}`);
}

const now$2 = globalThis.performance ? globalThis.performance.now.bind(globalThis.performance) : Date.now;
async function collectTests(specs, runner) {
	const files = [];
	const config = runner.config;
	for (const spec of specs) {
		var _runner$onCollectStar;
		const filepath = typeof spec === "string" ? spec : spec.filepath;
		const testLocations = typeof spec === "string" ? undefined : spec.testLocations;
		const file = createFileTask(filepath, config.root, config.name, runner.pool);
		file.shuffle = config.sequence.shuffle;
		(_runner$onCollectStar = runner.onCollectStart) === null || _runner$onCollectStar === void 0 ? void 0 : _runner$onCollectStar.call(runner, file);
		clearCollectorContext(filepath, runner);
		try {
			var _runner$getImportDura;
			const setupFiles = toArray(config.setupFiles);
			if (setupFiles.length) {
				const setupStart = now$2();
				await runSetupFiles(config, setupFiles, runner);
				const setupEnd = now$2();
				file.setupDuration = setupEnd - setupStart;
			} else {
				file.setupDuration = 0;
			}
			const collectStart = now$2();
			await runner.importFile(filepath, "collect");
			const durations = (_runner$getImportDura = runner.getImportDurations) === null || _runner$getImportDura === void 0 ? void 0 : _runner$getImportDura.call(runner);
			if (durations) {
				file.importDurations = durations;
			}
			const defaultTasks = await getDefaultSuite().collect(file);
			const fileHooks = createSuiteHooks();
			mergeHooks(fileHooks, getHooks(defaultTasks));
			for (const c of [...defaultTasks.tasks, ...collectorContext.tasks]) {
				if (c.type === "test" || c.type === "suite") {
					file.tasks.push(c);
				} else if (c.type === "collector") {
					const suite = await c.collect(file);
					if (suite.name || suite.tasks.length) {
						mergeHooks(fileHooks, getHooks(suite));
						file.tasks.push(suite);
					}
				} else {
					// check that types are exhausted
					c;
				}
			}
			setHooks(file, fileHooks);
			file.collectDuration = now$2() - collectStart;
		} catch (e) {
			var _runner$getImportDura2;
			const error = processError(e);
			file.result = {
				state: "fail",
				errors: [error]
			};
			const durations = (_runner$getImportDura2 = runner.getImportDurations) === null || _runner$getImportDura2 === void 0 ? void 0 : _runner$getImportDura2.call(runner);
			if (durations) {
				file.importDurations = durations;
			}
		}
		calculateSuiteHash(file);
		const hasOnlyTasks = someTasksAreOnly(file);
		interpretTaskModes(file, config.testNamePattern, testLocations, hasOnlyTasks, false, config.allowOnly);
		if (file.mode === "queued") {
			file.mode = "run";
		}
		files.push(file);
	}
	return files;
}
function mergeHooks(baseHooks, hooks) {
	for (const _key in hooks) {
		const key = _key;
		baseHooks[key].push(...hooks[key]);
	}
	return baseHooks;
}

/**
* Return a function for running multiple async operations with limited concurrency.
*/
function limitConcurrency(concurrency = Infinity) {
	// The number of currently active + pending tasks.
	let count = 0;
	// The head and tail of the pending task queue, built using a singly linked list.
	// Both head and tail are initially undefined, signifying an empty queue.
	// They both become undefined again whenever there are no pending tasks.
	let head;
	let tail;
	// A bookkeeping function executed whenever a task has been run to completion.
	const finish = () => {
		count--;
		// Check if there are further pending tasks in the queue.
		if (head) {
			// Allow the next pending task to run and pop it from the queue.
			head[0]();
			head = head[1];
			// The head may now be undefined if there are no further pending tasks.
			// In that case, set tail to undefined as well.
			tail = head && tail;
		}
	};
	return (func, ...args) => {
		// Create a promise chain that:
		//  1. Waits for its turn in the task queue (if necessary).
		//  2. Runs the task.
		//  3. Allows the next pending task (if any) to run.
		return new Promise((resolve) => {
			if (count++ < concurrency) {
				// No need to queue if fewer than maxConcurrency tasks are running.
				resolve();
			} else if (tail) {
				// There are pending tasks, so append to the queue.
				tail = tail[1] = [resolve];
			} else {
				// No other pending tasks, initialize the queue with a new tail and head.
				head = tail = [resolve];
			}
		}).then(() => {
			// Running func here ensures that even a non-thenable result or an
			// immediately thrown error gets wrapped into a Promise.
			return func(...args);
		}).finally(finish);
	};
}

/**
* Partition in tasks groups by consecutive concurrent
*/
function partitionSuiteChildren(suite) {
	let tasksGroup = [];
	const tasksGroups = [];
	for (const c of suite.tasks) {
		if (tasksGroup.length === 0 || c.concurrent === tasksGroup[0].concurrent) {
			tasksGroup.push(c);
		} else {
			tasksGroups.push(tasksGroup);
			tasksGroup = [c];
		}
	}
	if (tasksGroup.length > 0) {
		tasksGroups.push(tasksGroup);
	}
	return tasksGroups;
}

/**
* @deprecated use `isTestCase` instead
*/
function isAtomTest(s) {
	return isTestCase(s);
}
function isTestCase(s) {
	return s.type === "test";
}
function getTests(suite) {
	const tests = [];
	const arraySuites = toArray(suite);
	for (const s of arraySuites) {
		if (isTestCase(s)) {
			tests.push(s);
		} else {
			for (const task of s.tasks) {
				if (isTestCase(task)) {
					tests.push(task);
				} else {
					const taskTests = getTests(task);
					for (const test of taskTests) {
						tests.push(test);
					}
				}
			}
		}
	}
	return tests;
}
function getTasks(tasks = []) {
	return toArray(tasks).flatMap((s) => isTestCase(s) ? [s] : [s, ...getTasks(s.tasks)]);
}
function getSuites(suite) {
	return toArray(suite).flatMap((s) => s.type === "suite" ? [s, ...getSuites(s.tasks)] : []);
}
function hasTests(suite) {
	return toArray(suite).some((s) => s.tasks.some((c) => isTestCase(c) || hasTests(c)));
}
function hasFailed(suite) {
	return toArray(suite).some((s) => {
		var _s$result;
		return ((_s$result = s.result) === null || _s$result === void 0 ? void 0 : _s$result.state) === "fail" || s.type === "suite" && hasFailed(s.tasks);
	});
}
function getNames(task) {
	const names = [task.name];
	let current = task;
	while (current === null || current === void 0 ? void 0 : current.suite) {
		current = current.suite;
		if (current === null || current === void 0 ? void 0 : current.name) {
			names.unshift(current.name);
		}
	}
	if (current !== task.file) {
		names.unshift(task.file.name);
	}
	return names;
}
function getFullName(task, separator = " > ") {
	return getNames(task).join(separator);
}
function getTestName(task, separator = " > ") {
	return getNames(task).slice(1).join(separator);
}

const now$1 = globalThis.performance ? globalThis.performance.now.bind(globalThis.performance) : Date.now;
const unixNow = Date.now;
const { clearTimeout, setTimeout } = getSafeTimers();
function updateSuiteHookState(task, name, state, runner) {
	if (!task.result) {
		task.result = { state: "run" };
	}
	if (!task.result.hooks) {
		task.result.hooks = {};
	}
	const suiteHooks = task.result.hooks;
	if (suiteHooks) {
		suiteHooks[name] = state;
		let event = state === "run" ? "before-hook-start" : "before-hook-end";
		if (name === "afterAll" || name === "afterEach") {
			event = state === "run" ? "after-hook-start" : "after-hook-end";
		}
		updateTask(event, task, runner);
	}
}
function getSuiteHooks(suite, name, sequence) {
	const hooks = getHooks(suite)[name];
	if (sequence === "stack" && (name === "afterAll" || name === "afterEach")) {
		return hooks.slice().reverse();
	}
	return hooks;
}
async function callTestHooks(runner, test, hooks, sequence) {
	if (sequence === "stack") {
		hooks = hooks.slice().reverse();
	}
	if (!hooks.length) {
		return;
	}
	const context = test.context;
	const onTestFailed = test.context.onTestFailed;
	const onTestFinished = test.context.onTestFinished;
	context.onTestFailed = () => {
		throw new Error(`Cannot call "onTestFailed" inside a test hook.`);
	};
	context.onTestFinished = () => {
		throw new Error(`Cannot call "onTestFinished" inside a test hook.`);
	};
	if (sequence === "parallel") {
		try {
			await Promise.all(hooks.map((fn) => fn(test.context)));
		} catch (e) {
			failTask(test.result, e, runner.config.diffOptions);
		}
	} else {
		for (const fn of hooks) {
			try {
				await fn(test.context);
			} catch (e) {
				failTask(test.result, e, runner.config.diffOptions);
			}
		}
	}
	context.onTestFailed = onTestFailed;
	context.onTestFinished = onTestFinished;
}
async function callSuiteHook(suite, currentTask, name, runner, args) {
	const sequence = runner.config.sequence.hooks;
	const callbacks = [];
	// stop at file level
	const parentSuite = "filepath" in suite ? null : suite.suite || suite.file;
	if (name === "beforeEach" && parentSuite) {
		callbacks.push(...await callSuiteHook(parentSuite, currentTask, name, runner, args));
	}
	const hooks = getSuiteHooks(suite, name, sequence);
	if (hooks.length > 0) {
		updateSuiteHookState(currentTask, name, "run", runner);
	}
	async function runHook(hook) {
		return getBeforeHookCleanupCallback(hook, await hook(...args), name === "beforeEach" ? args[0] : undefined);
	}
	if (sequence === "parallel") {
		callbacks.push(...await Promise.all(hooks.map((hook) => runHook(hook))));
	} else {
		for (const hook of hooks) {
			callbacks.push(await runHook(hook));
		}
	}
	if (hooks.length > 0) {
		updateSuiteHookState(currentTask, name, "pass", runner);
	}
	if (name === "afterEach" && parentSuite) {
		callbacks.push(...await callSuiteHook(parentSuite, currentTask, name, runner, args));
	}
	return callbacks;
}
const packs = new Map();
const eventsPacks = [];
const pendingTasksUpdates = [];
function sendTasksUpdate(runner) {
	if (packs.size) {
		var _runner$onTaskUpdate;
		const taskPacks = Array.from(packs).map(([id, task]) => {
			return [
				id,
				task[0],
				task[1]
			];
		});
		const p = (_runner$onTaskUpdate = runner.onTaskUpdate) === null || _runner$onTaskUpdate === void 0 ? void 0 : _runner$onTaskUpdate.call(runner, taskPacks, eventsPacks);
		if (p) {
			pendingTasksUpdates.push(p);
			// remove successful promise to not grow array indefnitely,
			// but keep rejections so finishSendTasksUpdate can handle them
			p.then(() => pendingTasksUpdates.splice(pendingTasksUpdates.indexOf(p), 1), () => {});
		}
		eventsPacks.length = 0;
		packs.clear();
	}
}
async function finishSendTasksUpdate(runner) {
	sendTasksUpdate(runner);
	await Promise.all(pendingTasksUpdates);
}
function throttle(fn, ms) {
	let last = 0;
	let pendingCall;
	return function call(...args) {
		const now = unixNow();
		if (now - last > ms) {
			last = now;
			clearTimeout(pendingCall);
			pendingCall = undefined;
			return fn.apply(this, args);
		}
		// Make sure fn is still called even if there are no further calls
		pendingCall ?? (pendingCall = setTimeout(() => call.bind(this)(...args), ms));
	};
}
// throttle based on summary reporter's DURATION_UPDATE_INTERVAL_MS
const sendTasksUpdateThrottled = throttle(sendTasksUpdate, 100);
function updateTask(event, task, runner) {
	eventsPacks.push([
		task.id,
		event,
		undefined
	]);
	packs.set(task.id, [task.result, task.meta]);
	sendTasksUpdateThrottled(runner);
}
async function callCleanupHooks(runner, cleanups) {
	const sequence = runner.config.sequence.hooks;
	if (sequence === "stack") {
		cleanups = cleanups.slice().reverse();
	}
	if (sequence === "parallel") {
		await Promise.all(cleanups.map(async (fn) => {
			if (typeof fn !== "function") {
				return;
			}
			await fn();
		}));
	} else {
		for (const fn of cleanups) {
			if (typeof fn !== "function") {
				continue;
			}
			await fn();
		}
	}
}
async function runTest(test, runner) {
	var _runner$onBeforeRunTa, _test$result, _runner$onAfterRunTas;
	await ((_runner$onBeforeRunTa = runner.onBeforeRunTask) === null || _runner$onBeforeRunTa === void 0 ? void 0 : _runner$onBeforeRunTa.call(runner, test));
	if (test.mode !== "run" && test.mode !== "queued") {
		updateTask("test-prepare", test, runner);
		updateTask("test-finished", test, runner);
		return;
	}
	if (((_test$result = test.result) === null || _test$result === void 0 ? void 0 : _test$result.state) === "fail") {
		// should not be possible to get here, I think this is just copy pasted from suite
		// TODO: maybe someone fails tests in `beforeAll` hooks?
		// https://github.com/vitest-dev/vitest/pull/7069
		updateTask("test-failed-early", test, runner);
		return;
	}
	const start = now$1();
	test.result = {
		state: "run",
		startTime: unixNow(),
		retryCount: 0
	};
	updateTask("test-prepare", test, runner);
	const cleanupRunningTest = addRunningTest(test);
	setCurrentTest(test);
	const suite = test.suite || test.file;
	const repeats = test.repeats ?? 0;
	for (let repeatCount = 0; repeatCount <= repeats; repeatCount++) {
		const retry = test.retry ?? 0;
		for (let retryCount = 0; retryCount <= retry; retryCount++) {
			var _test$result2, _test$result3;
			let beforeEachCleanups = [];
			try {
				var _runner$onBeforeTryTa, _runner$onAfterTryTas;
				await ((_runner$onBeforeTryTa = runner.onBeforeTryTask) === null || _runner$onBeforeTryTa === void 0 ? void 0 : _runner$onBeforeTryTa.call(runner, test, {
					retry: retryCount,
					repeats: repeatCount
				}));
				test.result.repeatCount = repeatCount;
				beforeEachCleanups = await callSuiteHook(suite, test, "beforeEach", runner, [test.context, suite]);
				if (runner.runTask) {
					await runner.runTask(test);
				} else {
					const fn = getFn(test);
					if (!fn) {
						throw new Error("Test function is not found. Did you add it using `setFn`?");
					}
					await fn();
				}
				await ((_runner$onAfterTryTas = runner.onAfterTryTask) === null || _runner$onAfterTryTas === void 0 ? void 0 : _runner$onAfterTryTas.call(runner, test, {
					retry: retryCount,
					repeats: repeatCount
				}));
				if (test.result.state !== "fail") {
					if (!test.repeats) {
						test.result.state = "pass";
					} else if (test.repeats && retry === retryCount) {
						test.result.state = "pass";
					}
				}
			} catch (e) {
				failTask(test.result, e, runner.config.diffOptions);
			}
			try {
				var _runner$onTaskFinishe;
				await ((_runner$onTaskFinishe = runner.onTaskFinished) === null || _runner$onTaskFinishe === void 0 ? void 0 : _runner$onTaskFinishe.call(runner, test));
			} catch (e) {
				failTask(test.result, e, runner.config.diffOptions);
			}
			try {
				await callSuiteHook(suite, test, "afterEach", runner, [test.context, suite]);
				await callCleanupHooks(runner, beforeEachCleanups);
				await callFixtureCleanup(test.context);
			} catch (e) {
				failTask(test.result, e, runner.config.diffOptions);
			}
			await callTestHooks(runner, test, test.onFinished || [], "stack");
			if (test.result.state === "fail") {
				await callTestHooks(runner, test, test.onFailed || [], runner.config.sequence.hooks);
			}
			test.onFailed = undefined;
			test.onFinished = undefined;
			// skipped with new PendingError
			if (((_test$result2 = test.result) === null || _test$result2 === void 0 ? void 0 : _test$result2.pending) || ((_test$result3 = test.result) === null || _test$result3 === void 0 ? void 0 : _test$result3.state) === "skip") {
				var _test$result4;
				test.mode = "skip";
				test.result = {
					state: "skip",
					note: (_test$result4 = test.result) === null || _test$result4 === void 0 ? void 0 : _test$result4.note,
					pending: true,
					duration: now$1() - start
				};
				updateTask("test-finished", test, runner);
				setCurrentTest(undefined);
				cleanupRunningTest();
				return;
			}
			if (test.result.state === "pass") {
				break;
			}
			if (retryCount < retry) {
				// reset state when retry test
				test.result.state = "run";
				test.result.retryCount = (test.result.retryCount ?? 0) + 1;
			}
			// update retry info
			updateTask("test-retried", test, runner);
		}
	}
	// if test is marked to be failed, flip the result
	if (test.fails) {
		if (test.result.state === "pass") {
			const error = processError(new Error("Expect test to fail"));
			test.result.state = "fail";
			test.result.errors = [error];
		} else {
			test.result.state = "pass";
			test.result.errors = undefined;
		}
	}
	cleanupRunningTest();
	setCurrentTest(undefined);
	test.result.duration = now$1() - start;
	await ((_runner$onAfterRunTas = runner.onAfterRunTask) === null || _runner$onAfterRunTas === void 0 ? void 0 : _runner$onAfterRunTas.call(runner, test));
	updateTask("test-finished", test, runner);
}
function failTask(result, err, diffOptions) {
	if (err instanceof PendingError) {
		result.state = "skip";
		result.note = err.note;
		result.pending = true;
		return;
	}
	result.state = "fail";
	const errors = Array.isArray(err) ? err : [err];
	for (const e of errors) {
		const error = processError(e, diffOptions);
		result.errors ?? (result.errors = []);
		result.errors.push(error);
	}
}
function markTasksAsSkipped(suite, runner) {
	suite.tasks.forEach((t) => {
		t.mode = "skip";
		t.result = {
			...t.result,
			state: "skip"
		};
		updateTask("test-finished", t, runner);
		if (t.type === "suite") {
			markTasksAsSkipped(t, runner);
		}
	});
}
async function runSuite(suite, runner) {
	var _runner$onBeforeRunSu, _suite$result;
	await ((_runner$onBeforeRunSu = runner.onBeforeRunSuite) === null || _runner$onBeforeRunSu === void 0 ? void 0 : _runner$onBeforeRunSu.call(runner, suite));
	if (((_suite$result = suite.result) === null || _suite$result === void 0 ? void 0 : _suite$result.state) === "fail") {
		markTasksAsSkipped(suite, runner);
		// failed during collection
		updateTask("suite-failed-early", suite, runner);
		return;
	}
	const start = now$1();
	const mode = suite.mode;
	suite.result = {
		state: mode === "skip" || mode === "todo" ? mode : "run",
		startTime: unixNow()
	};
	updateTask("suite-prepare", suite, runner);
	let beforeAllCleanups = [];
	if (suite.mode === "skip") {
		suite.result.state = "skip";
		updateTask("suite-finished", suite, runner);
	} else if (suite.mode === "todo") {
		suite.result.state = "todo";
		updateTask("suite-finished", suite, runner);
	} else {
		var _runner$onAfterRunSui;
		try {
			try {
				beforeAllCleanups = await callSuiteHook(suite, suite, "beforeAll", runner, [suite]);
			} catch (e) {
				markTasksAsSkipped(suite, runner);
				throw e;
			}
			if (runner.runSuite) {
				await runner.runSuite(suite);
			} else {
				for (let tasksGroup of partitionSuiteChildren(suite)) {
					if (tasksGroup[0].concurrent === true) {
						await Promise.all(tasksGroup.map((c) => runSuiteChild(c, runner)));
					} else {
						const { sequence } = runner.config;
						if (suite.shuffle) {
							// run describe block independently from tests
							const suites = tasksGroup.filter((group) => group.type === "suite");
							const tests = tasksGroup.filter((group) => group.type === "test");
							const groups = shuffle([suites, tests], sequence.seed);
							tasksGroup = groups.flatMap((group) => shuffle(group, sequence.seed));
						}
						for (const c of tasksGroup) {
							await runSuiteChild(c, runner);
						}
					}
				}
			}
		} catch (e) {
			failTask(suite.result, e, runner.config.diffOptions);
		}
		try {
			await callSuiteHook(suite, suite, "afterAll", runner, [suite]);
			await callCleanupHooks(runner, beforeAllCleanups);
			if (suite.file === suite) {
				const context = getFileContext(suite);
				await callFixtureCleanup(context);
			}
		} catch (e) {
			failTask(suite.result, e, runner.config.diffOptions);
		}
		if (suite.mode === "run" || suite.mode === "queued") {
			if (!runner.config.passWithNoTests && !hasTests(suite)) {
				var _suite$result$errors;
				suite.result.state = "fail";
				if (!((_suite$result$errors = suite.result.errors) === null || _suite$result$errors === void 0 ? void 0 : _suite$result$errors.length)) {
					const error = processError(new Error(`No test found in suite ${suite.name}`));
					suite.result.errors = [error];
				}
			} else if (hasFailed(suite)) {
				suite.result.state = "fail";
			} else {
				suite.result.state = "pass";
			}
		}
		suite.result.duration = now$1() - start;
		updateTask("suite-finished", suite, runner);
		await ((_runner$onAfterRunSui = runner.onAfterRunSuite) === null || _runner$onAfterRunSui === void 0 ? void 0 : _runner$onAfterRunSui.call(runner, suite));
	}
}
let limitMaxConcurrency;
async function runSuiteChild(c, runner) {
	if (c.type === "test") {
		return limitMaxConcurrency(() => runTest(c, runner));
	} else if (c.type === "suite") {
		return runSuite(c, runner);
	}
}
async function runFiles(files, runner) {
	limitMaxConcurrency ?? (limitMaxConcurrency = limitConcurrency(runner.config.maxConcurrency));
	for (const file of files) {
		if (!file.tasks.length && !runner.config.passWithNoTests) {
			var _file$result;
			if (!((_file$result = file.result) === null || _file$result === void 0 || (_file$result = _file$result.errors) === null || _file$result === void 0 ? void 0 : _file$result.length)) {
				const error = processError(new Error(`No test suite found in file ${file.filepath}`));
				file.result = {
					state: "fail",
					errors: [error]
				};
			}
		}
		await runSuite(file, runner);
	}
}
const workerRunners = new WeakSet();
async function startTests(specs, runner) {
	var _runner$cancel;
	const cancel = (_runner$cancel = runner.cancel) === null || _runner$cancel === void 0 ? void 0 : _runner$cancel.bind(runner);
	// Ideally, we need to have an event listener for this, but only have a runner here.
	// Adding another onCancel felt wrong (maybe it needs to be refactored)
	runner.cancel = (reason) => {
		// We intentionally create only one error since there is only one test run that can be cancelled
		const error = new TestRunAbortError("The test run was aborted by the user.", reason);
		getRunningTests().forEach((test) => abortContextSignal(test.context, error));
		return cancel === null || cancel === void 0 ? void 0 : cancel(reason);
	};
	if (!workerRunners.has(runner)) {
		var _runner$onCleanupWork;
		(_runner$onCleanupWork = runner.onCleanupWorkerContext) === null || _runner$onCleanupWork === void 0 ? void 0 : _runner$onCleanupWork.call(runner, async () => {
			var _runner$getWorkerCont;
			const context = (_runner$getWorkerCont = runner.getWorkerContext) === null || _runner$getWorkerCont === void 0 ? void 0 : _runner$getWorkerCont.call(runner);
			if (context) {
				await callFixtureCleanup(context);
			}
		});
		workerRunners.add(runner);
	}
	try {
		var _runner$onBeforeColle, _runner$onCollected, _runner$onBeforeRunFi, _runner$onAfterRunFil;
		const paths = specs.map((f) => typeof f === "string" ? f : f.filepath);
		await ((_runner$onBeforeColle = runner.onBeforeCollect) === null || _runner$onBeforeColle === void 0 ? void 0 : _runner$onBeforeColle.call(runner, paths));
		const files = await collectTests(specs, runner);
		await ((_runner$onCollected = runner.onCollected) === null || _runner$onCollected === void 0 ? void 0 : _runner$onCollected.call(runner, files));
		await ((_runner$onBeforeRunFi = runner.onBeforeRunFiles) === null || _runner$onBeforeRunFi === void 0 ? void 0 : _runner$onBeforeRunFi.call(runner, files));
		await runFiles(files, runner);
		await ((_runner$onAfterRunFil = runner.onAfterRunFiles) === null || _runner$onAfterRunFil === void 0 ? void 0 : _runner$onAfterRunFil.call(runner, files));
		await finishSendTasksUpdate(runner);
		return files;
	} finally {
		runner.cancel = cancel;
	}
}
async function publicCollect(specs, runner) {
	var _runner$onBeforeColle2, _runner$onCollected2;
	const paths = specs.map((f) => typeof f === "string" ? f : f.filepath);
	await ((_runner$onBeforeColle2 = runner.onBeforeCollect) === null || _runner$onBeforeColle2 === void 0 ? void 0 : _runner$onBeforeColle2.call(runner, paths));
	const files = await collectTests(specs, runner);
	await ((_runner$onCollected2 = runner.onCollected) === null || _runner$onCollected2 === void 0 ? void 0 : _runner$onCollected2.call(runner, files));
	return files;
}

const now = Date.now;
const collectorContext = {
	tasks: [],
	currentSuite: null
};
function collectTask(task) {
	var _collectorContext$cur;
	(_collectorContext$cur = collectorContext.currentSuite) === null || _collectorContext$cur === void 0 ? void 0 : _collectorContext$cur.tasks.push(task);
}
async function runWithSuite(suite, fn) {
	const prev = collectorContext.currentSuite;
	collectorContext.currentSuite = suite;
	await fn();
	collectorContext.currentSuite = prev;
}
function withTimeout(fn, timeout, isHook = false, stackTraceError, onTimeout) {
	if (timeout <= 0 || timeout === Number.POSITIVE_INFINITY) {
		return fn;
	}
	const { setTimeout, clearTimeout } = getSafeTimers();
	// this function name is used to filter error in test/cli/test/fails.test.ts
	return function runWithTimeout(...args) {
		const startTime = now();
		const runner = getRunner();
		runner._currentTaskStartTime = startTime;
		runner._currentTaskTimeout = timeout;
		return new Promise((resolve_, reject_) => {
			var _timer$unref;
			const timer = setTimeout(() => {
				clearTimeout(timer);
				rejectTimeoutError();
			}, timeout);
			// `unref` might not exist in browser
			(_timer$unref = timer.unref) === null || _timer$unref === void 0 ? void 0 : _timer$unref.call(timer);
			function rejectTimeoutError() {
				const error = makeTimeoutError(isHook, timeout, stackTraceError);
				onTimeout === null || onTimeout === void 0 ? void 0 : onTimeout(args, error);
				reject_(error);
			}
			function resolve(result) {
				runner._currentTaskStartTime = undefined;
				runner._currentTaskTimeout = undefined;
				clearTimeout(timer);
				// if test/hook took too long in microtask, setTimeout won't be triggered,
				// but we still need to fail the test, see
				// https://github.com/vitest-dev/vitest/issues/2920
				if (now() - startTime >= timeout) {
					rejectTimeoutError();
					return;
				}
				resolve_(result);
			}
			function reject(error) {
				runner._currentTaskStartTime = undefined;
				runner._currentTaskTimeout = undefined;
				clearTimeout(timer);
				reject_(error);
			}
			// sync test/hook will be caught by try/catch
			try {
				const result = fn(...args);
				// the result is a thenable, we don't wrap this in Promise.resolve
				// to avoid creating new promises
				if (typeof result === "object" && result != null && typeof result.then === "function") {
					result.then(resolve, reject);
				} else {
					resolve(result);
				}
			} 
			// user sync test/hook throws an error
catch (error) {
				reject(error);
			}
		});
	};
}
const abortControllers = new WeakMap();
function abortIfTimeout([context], error) {
	if (context) {
		abortContextSignal(context, error);
	}
}
function abortContextSignal(context, error) {
	const abortController = abortControllers.get(context);
	abortController === null || abortController === void 0 ? void 0 : abortController.abort(error);
}
function createTestContext(test, runner) {
	var _runner$extendTaskCon;
	const context = function() {
		throw new Error("done() callback is deprecated, use promise instead");
	};
	let abortController = abortControllers.get(context);
	if (!abortController) {
		abortController = new AbortController();
		abortControllers.set(context, abortController);
	}
	context.signal = abortController.signal;
	context.task = test;
	context.skip = (condition, note) => {
		if (condition === false) {
			// do nothing
			return undefined;
		}
		test.result ?? (test.result = { state: "skip" });
		test.result.pending = true;
		throw new PendingError("test is skipped; abort execution", test, typeof condition === "string" ? condition : note);
	};
	async function annotate(message, location, type, attachment) {
		const annotation = {
			message,
			type: type || "notice"
		};
		if (attachment) {
			if (!attachment.body && !attachment.path) {
				throw new TypeError(`Test attachment requires body or path to be set. Both are missing.`);
			}
			if (attachment.body && attachment.path) {
				throw new TypeError(`Test attachment requires only one of "body" or "path" to be set. Both are specified.`);
			}
			annotation.attachment = attachment;
			// convert to a string so it's easier to serialise
			if (attachment.body instanceof Uint8Array) {
				attachment.body = encodeUint8Array(attachment.body);
			}
		}
		if (location) {
			annotation.location = location;
		}
		if (!runner.onTestAnnotate) {
			throw new Error(`Test runner doesn't support test annotations.`);
		}
		await finishSendTasksUpdate(runner);
		const resolvedAnnotation = await runner.onTestAnnotate(test, annotation);
		test.annotations.push(resolvedAnnotation);
		return resolvedAnnotation;
	}
	context.annotate = (message, type, attachment) => {
		if (test.result && test.result.state !== "run") {
			throw new Error(`Cannot annotate tests outside of the test run. The test "${test.name}" finished running with the "${test.result.state}" state already.`);
		}
		let location;
		const stack = new Error("STACK_TRACE").stack;
		const index = stack.includes("STACK_TRACE") ? 2 : 1;
		const stackLine = stack.split("\n")[index];
		const parsed = parseSingleStack(stackLine);
		if (parsed) {
			location = {
				file: parsed.file,
				line: parsed.line,
				column: parsed.column
			};
		}
		if (typeof type === "object") {
			return recordAsyncAnnotation(test, annotate(message, location, undefined, type));
		} else {
			return recordAsyncAnnotation(test, annotate(message, location, type, attachment));
		}
	};
	context.onTestFailed = (handler, timeout) => {
		test.onFailed || (test.onFailed = []);
		test.onFailed.push(withTimeout(handler, timeout ?? runner.config.hookTimeout, true, new Error("STACK_TRACE_ERROR"), (_, error) => abortController.abort(error)));
	};
	context.onTestFinished = (handler, timeout) => {
		test.onFinished || (test.onFinished = []);
		test.onFinished.push(withTimeout(handler, timeout ?? runner.config.hookTimeout, true, new Error("STACK_TRACE_ERROR"), (_, error) => abortController.abort(error)));
	};
	return ((_runner$extendTaskCon = runner.extendTaskContext) === null || _runner$extendTaskCon === void 0 ? void 0 : _runner$extendTaskCon.call(runner, context)) || context;
}
function makeTimeoutError(isHook, timeout, stackTraceError) {
	const message = `${isHook ? "Hook" : "Test"} timed out in ${timeout}ms.\nIf this is a long-running ${isHook ? "hook" : "test"}, pass a timeout value as the last argument or configure it globally with "${isHook ? "hookTimeout" : "testTimeout"}".`;
	const error = new Error(message);
	if (stackTraceError === null || stackTraceError === void 0 ? void 0 : stackTraceError.stack) {
		error.stack = stackTraceError.stack.replace(error.message, stackTraceError.message);
	}
	return error;
}
const fileContexts = new WeakMap();
function getFileContext(file) {
	const context = fileContexts.get(file);
	if (!context) {
		throw new Error(`Cannot find file context for ${file.name}`);
	}
	return context;
}
function setFileContext(file, context) {
	fileContexts.set(file, context);
}
const table = [];
for (let i = 65; i < 91; i++) {
	table.push(String.fromCharCode(i));
}
for (let i = 97; i < 123; i++) {
	table.push(String.fromCharCode(i));
}
for (let i = 0; i < 10; i++) {
	table.push(i.toString(10));
}
function encodeUint8Array(bytes) {
	let base64 = "";
	const len = bytes.byteLength;
	for (let i = 0; i < len; i += 3) {
		if (len === i + 1) {
			const a = (bytes[i] & 252) >> 2;
			const b = (bytes[i] & 3) << 4;
			base64 += table[a];
			base64 += table[b];
			base64 += "==";
		} else if (len === i + 2) {
			const a = (bytes[i] & 252) >> 2;
			const b = (bytes[i] & 3) << 4 | (bytes[i + 1] & 240) >> 4;
			const c = (bytes[i + 1] & 15) << 2;
			base64 += table[a];
			base64 += table[b];
			base64 += table[c];
			base64 += "=";
		} else {
			const a = (bytes[i] & 252) >> 2;
			const b = (bytes[i] & 3) << 4 | (bytes[i + 1] & 240) >> 4;
			const c = (bytes[i + 1] & 15) << 2 | (bytes[i + 2] & 192) >> 6;
			const d = bytes[i + 2] & 63;
			base64 += table[a];
			base64 += table[b];
			base64 += table[c];
			base64 += table[d];
		}
	}
	return base64;
}
function recordAsyncAnnotation(test, promise) {
	// if promise is explicitly awaited, remove it from the list
	promise = promise.finally(() => {
		if (!test.promises) {
			return;
		}
		const index = test.promises.indexOf(promise);
		if (index !== -1) {
			test.promises.splice(index, 1);
		}
	});
	// record promise
	if (!test.promises) {
		test.promises = [];
	}
	test.promises.push(promise);
	return promise;
}

function getDefaultHookTimeout() {
	return getRunner().config.hookTimeout;
}
const CLEANUP_TIMEOUT_KEY = Symbol.for("VITEST_CLEANUP_TIMEOUT");
const CLEANUP_STACK_TRACE_KEY = Symbol.for("VITEST_CLEANUP_STACK_TRACE");
function getBeforeHookCleanupCallback(hook, result, context) {
	if (typeof result === "function") {
		const timeout = CLEANUP_TIMEOUT_KEY in hook && typeof hook[CLEANUP_TIMEOUT_KEY] === "number" ? hook[CLEANUP_TIMEOUT_KEY] : getDefaultHookTimeout();
		const stackTraceError = CLEANUP_STACK_TRACE_KEY in hook && hook[CLEANUP_STACK_TRACE_KEY] instanceof Error ? hook[CLEANUP_STACK_TRACE_KEY] : undefined;
		return withTimeout(result, timeout, true, stackTraceError, (_, error) => {
			if (context) {
				abortContextSignal(context, error);
			}
		});
	}
}
/**
* Registers a callback function to be executed once before all tests within the current suite.
* This hook is useful for scenarios where you need to perform setup operations that are common to all tests in a suite, such as initializing a database connection or setting up a test environment.
*
* **Note:** The `beforeAll` hooks are executed in the order they are defined one after another. You can configure this by changing the `sequence.hooks` option in the config file.
*
* @param {Function} fn - The callback function to be executed before all tests.
* @param {number} [timeout] - Optional timeout in milliseconds for the hook. If not provided, the default hook timeout from the runner's configuration is used.
* @returns {void}
* @example
* ```ts
* // Example of using beforeAll to set up a database connection
* beforeAll(async () => {
*   await database.connect();
* });
* ```
*/
function beforeAll(fn, timeout = getDefaultHookTimeout()) {
	assertTypes(fn, "\"beforeAll\" callback", ["function"]);
	const stackTraceError = new Error("STACK_TRACE_ERROR");
	return getCurrentSuite().on("beforeAll", Object.assign(withTimeout(fn, timeout, true, stackTraceError), {
		[CLEANUP_TIMEOUT_KEY]: timeout,
		[CLEANUP_STACK_TRACE_KEY]: stackTraceError
	}));
}
/**
* Registers a callback function to be executed once after all tests within the current suite have completed.
* This hook is useful for scenarios where you need to perform cleanup operations after all tests in a suite have run, such as closing database connections or cleaning up temporary files.
*
* **Note:** The `afterAll` hooks are running in reverse order of their registration. You can configure this by changing the `sequence.hooks` option in the config file.
*
* @param {Function} fn - The callback function to be executed after all tests.
* @param {number} [timeout] - Optional timeout in milliseconds for the hook. If not provided, the default hook timeout from the runner's configuration is used.
* @returns {void}
* @example
* ```ts
* // Example of using afterAll to close a database connection
* afterAll(async () => {
*   await database.disconnect();
* });
* ```
*/
function afterAll(fn, timeout) {
	assertTypes(fn, "\"afterAll\" callback", ["function"]);
	return getCurrentSuite().on("afterAll", withTimeout(fn, timeout ?? getDefaultHookTimeout(), true, new Error("STACK_TRACE_ERROR")));
}
/**
* Registers a callback function to be executed before each test within the current suite.
* This hook is useful for scenarios where you need to reset or reinitialize the test environment before each test runs, such as resetting database states, clearing caches, or reinitializing variables.
*
* **Note:** The `beforeEach` hooks are executed in the order they are defined one after another. You can configure this by changing the `sequence.hooks` option in the config file.
*
* @param {Function} fn - The callback function to be executed before each test. This function receives an `TestContext` parameter if additional test context is needed.
* @param {number} [timeout] - Optional timeout in milliseconds for the hook. If not provided, the default hook timeout from the runner's configuration is used.
* @returns {void}
* @example
* ```ts
* // Example of using beforeEach to reset a database state
* beforeEach(async () => {
*   await database.reset();
* });
* ```
*/
function beforeEach(fn, timeout = getDefaultHookTimeout()) {
	assertTypes(fn, "\"beforeEach\" callback", ["function"]);
	const stackTraceError = new Error("STACK_TRACE_ERROR");
	const runner = getRunner();
	return getCurrentSuite().on("beforeEach", Object.assign(withTimeout(withFixtures(runner, fn), timeout ?? getDefaultHookTimeout(), true, stackTraceError, abortIfTimeout), {
		[CLEANUP_TIMEOUT_KEY]: timeout,
		[CLEANUP_STACK_TRACE_KEY]: stackTraceError
	}));
}
/**
* Registers a callback function to be executed after each test within the current suite has completed.
* This hook is useful for scenarios where you need to clean up or reset the test environment after each test runs, such as deleting temporary files, clearing test-specific database entries, or resetting mocked functions.
*
* **Note:** The `afterEach` hooks are running in reverse order of their registration. You can configure this by changing the `sequence.hooks` option in the config file.
*
* @param {Function} fn - The callback function to be executed after each test. This function receives an `TestContext` parameter if additional test context is needed.
* @param {number} [timeout] - Optional timeout in milliseconds for the hook. If not provided, the default hook timeout from the runner's configuration is used.
* @returns {void}
* @example
* ```ts
* // Example of using afterEach to delete temporary files created during a test
* afterEach(async () => {
*   await fileSystem.deleteTempFiles();
* });
* ```
*/
function afterEach(fn, timeout) {
	assertTypes(fn, "\"afterEach\" callback", ["function"]);
	const runner = getRunner();
	return getCurrentSuite().on("afterEach", withTimeout(withFixtures(runner, fn), timeout ?? getDefaultHookTimeout(), true, new Error("STACK_TRACE_ERROR"), abortIfTimeout));
}
/**
* Registers a callback function to be executed when a test fails within the current suite.
* This function allows for custom actions to be performed in response to test failures, such as logging, cleanup, or additional diagnostics.
*
* **Note:** The `onTestFailed` hooks are running in reverse order of their registration. You can configure this by changing the `sequence.hooks` option in the config file.
*
* @param {Function} fn - The callback function to be executed upon a test failure. The function receives the test result (including errors).
* @param {number} [timeout] - Optional timeout in milliseconds for the hook. If not provided, the default hook timeout from the runner's configuration is used.
* @throws {Error} Throws an error if the function is not called within a test.
* @returns {void}
* @example
* ```ts
* // Example of using onTestFailed to log failure details
* onTestFailed(({ errors }) => {
*   console.log(`Test failed: ${test.name}`, errors);
* });
* ```
*/
const onTestFailed = createTestHook("onTestFailed", (test, handler, timeout) => {
	test.onFailed || (test.onFailed = []);
	test.onFailed.push(withTimeout(handler, timeout ?? getDefaultHookTimeout(), true, new Error("STACK_TRACE_ERROR"), abortIfTimeout));
});
/**
* Registers a callback function to be executed when the current test finishes, regardless of the outcome (pass or fail).
* This function is ideal for performing actions that should occur after every test execution, such as cleanup, logging, or resetting shared resources.
*
* This hook is useful if you have access to a resource in the test itself and you want to clean it up after the test finishes. It is a more compact way to clean up resources than using the combination of `beforeEach` and `afterEach`.
*
* **Note:** The `onTestFinished` hooks are running in reverse order of their registration. You can configure this by changing the `sequence.hooks` option in the config file.
*
* **Note:** The `onTestFinished` hook is not called if the test is canceled with a dynamic `ctx.skip()` call.
*
* @param {Function} fn - The callback function to be executed after a test finishes. The function can receive parameters providing details about the completed test, including its success or failure status.
* @param {number} [timeout] - Optional timeout in milliseconds for the hook. If not provided, the default hook timeout from the runner's configuration is used.
* @throws {Error} Throws an error if the function is not called within a test.
* @returns {void}
* @example
* ```ts
* // Example of using onTestFinished for cleanup
* const db = await connectToDatabase();
* onTestFinished(async () => {
*   await db.disconnect();
* });
* ```
*/
const onTestFinished = createTestHook("onTestFinished", (test, handler, timeout) => {
	test.onFinished || (test.onFinished = []);
	test.onFinished.push(withTimeout(handler, timeout ?? getDefaultHookTimeout(), true, new Error("STACK_TRACE_ERROR"), abortIfTimeout));
});
function createTestHook(name, handler) {
	return (fn, timeout) => {
		assertTypes(fn, `"${name}" callback`, ["function"]);
		const current = getCurrentTest();
		if (!current) {
			throw new Error(`Hook ${name}() can only be called inside a test`);
		}
		return handler(current, fn, timeout);
	};
}

export { someTasksAreOnly as A, limitConcurrency as B, partitionSuiteChildren as C, getFullName as D, getNames as E, getSuites as F, getTasks as G, getTestName as H, getTests as I, hasFailed as J, hasTests as K, isAtomTest as L, isTestCase as M, afterAll as a, afterEach as b, beforeAll as c, beforeEach as d, onTestFinished as e, getHooks as f, getFn as g, setHooks as h, startTests as i, createTaskCollector as j, describe as k, getCurrentSuite as l, it as m, suite as n, onTestFailed as o, publicCollect as p, getCurrentTest as q, createChainable as r, setFn as s, test as t, updateTask as u, calculateSuiteHash as v, createFileTask as w, generateFileHash as x, generateHash as y, interpretTaskModes as z };
