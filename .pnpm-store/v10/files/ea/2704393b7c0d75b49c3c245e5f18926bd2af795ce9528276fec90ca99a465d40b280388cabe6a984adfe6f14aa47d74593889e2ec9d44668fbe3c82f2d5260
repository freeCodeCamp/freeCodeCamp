import { processError } from '@vitest/utils/error';
import { isObject, filterOutComments, ordinal, createDefer, assertTypes, toArray, isNegativeNaN, unique, objectAttr, shuffle } from '@vitest/utils/helpers';
import { getSafeTimers } from '@vitest/utils/timers';
import { format, formatRegExp, objDisplay } from '@vitest/utils/display';
import { parseSingleStack } from '@vitest/utils/source-map';
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
class FixtureDependencyError extends Error {
	name = "FixtureDependencyError";
}
class FixtureAccessError extends Error {
	name = "FixtureAccessError";
}
class FixtureParseError extends Error {
	name = "FixtureParseError";
}
class AroundHookSetupError extends Error {
	name = "AroundHookSetupError";
}
class AroundHookTeardownError extends Error {
	name = "AroundHookTeardownError";
}
class AroundHookMultipleCallsError extends Error {
	name = "AroundHookMultipleCallsError";
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
function getTestFixtures(key) {
	return testFixtureMap.get(key);
}
function setHooks(key, hooks) {
	hooksMap.set(key, hooks);
}
function getHooks(key) {
	return hooksMap.get(key);
}

const FIXTURE_STACK_TRACE_KEY = Symbol.for("VITEST_FIXTURE_STACK_TRACE");
class TestFixtures {
	_suiteContexts;
	_overrides = new WeakMap();
	_registrations;
	static _definitions = [];
	static _builtinFixtures = [
		"task",
		"signal",
		"onTestFailed",
		"onTestFinished",
		"skip",
		"annotate"
	];
	static _fixtureOptionKeys = [
		"auto",
		"injected",
		"scope"
	];
	static _fixtureScopes = [
		"test",
		"file",
		"worker"
	];
	static _workerContextSuite = { type: "worker" };
	static clearDefinitions() {
		TestFixtures._definitions.length = 0;
	}
	static getWorkerContexts() {
		return TestFixtures._definitions.map((f) => f.getWorkerContext());
	}
	static getFileContexts(file) {
		return TestFixtures._definitions.map((f) => f.getFileContext(file));
	}
	static isFixtureOptions(obj) {
		return isObject(obj) && Object.keys(obj).some((key) => TestFixtures._fixtureOptionKeys.includes(key));
	}
	constructor(registrations) {
		this._registrations = registrations ?? new Map();
		this._suiteContexts = new WeakMap();
		TestFixtures._definitions.push(this);
	}
	extend(runner, userFixtures) {
		const { suite } = getCurrentSuite();
		const isTopLevel = !suite || suite.file === suite;
		const registrations = this.parseUserFixtures(runner, userFixtures, isTopLevel);
		return new TestFixtures(registrations);
	}
	get(suite) {
		let currentSuite = suite;
		while (currentSuite) {
			const overrides = this._overrides.get(currentSuite);
			// return the closest override
			if (overrides) {
				return overrides;
			}
			if (currentSuite === currentSuite.file) {
				break;
			}
			currentSuite = currentSuite.suite || currentSuite.file;
		}
		return this._registrations;
	}
	override(runner, userFixtures) {
		const { suite: currentSuite, file } = getCurrentSuite();
		const suite = currentSuite || file;
		const isTopLevel = !currentSuite || currentSuite.file === currentSuite;
		// Create a copy of the closest parent's registrations to avoid modifying them
		// For chained calls, this.get(suite) returns this suite's overrides; for first call, returns parent's
		const suiteRegistrations = new Map(this.get(suite));
		const registrations = this.parseUserFixtures(runner, userFixtures, isTopLevel, suiteRegistrations);
		// If defined in top-level, just override all registrations
		// We don't support overriding suite-level fixtures anyway (it will throw an error)
		if (isTopLevel) {
			this._registrations = registrations;
		} else {
			this._overrides.set(suite, registrations);
		}
	}
	getFileContext(file) {
		if (!this._suiteContexts.has(file)) {
			this._suiteContexts.set(file, Object.create(null));
		}
		return this._suiteContexts.get(file);
	}
	getWorkerContext() {
		if (!this._suiteContexts.has(TestFixtures._workerContextSuite)) {
			this._suiteContexts.set(TestFixtures._workerContextSuite, Object.create(null));
		}
		return this._suiteContexts.get(TestFixtures._workerContextSuite);
	}
	parseUserFixtures(runner, userFixtures, supportNonTest, registrations = new Map(this._registrations)) {
		const errors = [];
		Object.entries(userFixtures).forEach(([name, fn]) => {
			let options;
			let value;
			let _options;
			if (Array.isArray(fn) && fn.length >= 2 && TestFixtures.isFixtureOptions(fn[1])) {
				_options = fn[1];
				options = {
					auto: _options.auto ?? false,
					scope: _options.scope ?? "test",
					injected: _options.injected ?? false
				};
				value = options.injected ? runner.injectValue?.(name) ?? fn[0] : fn[0];
			} else {
				value = fn;
			}
			const parent = registrations.get(name);
			if (parent && options) {
				if (parent.scope !== options.scope) {
					errors.push(new FixtureDependencyError(`The "${name}" fixture was already registered with a "${options.scope}" scope.`));
				}
				if (parent.auto !== options.auto) {
					errors.push(new FixtureDependencyError(`The "${name}" fixture was already registered as { auto: ${options.auto} }.`));
				}
			} else if (parent) {
				options = {
					auto: parent.auto,
					scope: parent.scope,
					injected: parent.injected
				};
			} else if (!options) {
				options = {
					auto: false,
					injected: false,
					scope: "test"
				};
			}
			if (options.scope && !TestFixtures._fixtureScopes.includes(options.scope)) {
				errors.push(new FixtureDependencyError(`The "${name}" fixture has unknown scope "${options.scope}".`));
			}
			if (!supportNonTest && options.scope !== "test") {
				errors.push(new FixtureDependencyError(`The "${name}" fixture cannot be defined with a ${options.scope} scope${!_options?.scope && parent?.scope ? " (inherited from the base fixture)" : ""} inside the describe block. Define it at the top level of the file instead.`));
			}
			const deps = isFixtureFunction(value) ? getUsedProps(value) : new Set();
			const item = {
				name,
				value,
				auto: options.auto ?? false,
				injected: options.injected ?? false,
				scope: options.scope ?? "test",
				deps,
				parent
			};
			if (isFixtureFunction(value)) {
				Object.assign(value, { [FIXTURE_STACK_TRACE_KEY]: new Error("STACK_TRACE_ERROR") });
			}
			registrations.set(name, item);
			if (item.scope === "worker" && (runner.pool === "vmThreads" || runner.pool === "vmForks")) {
				item.scope = "file";
			}
		});
		// validate fixture dependency scopes
		for (const fixture of registrations.values()) {
			for (const depName of fixture.deps) {
				if (TestFixtures._builtinFixtures.includes(depName)) {
					continue;
				}
				const dep = registrations.get(depName);
				if (!dep) {
					errors.push(new FixtureDependencyError(`The "${fixture.name}" fixture depends on unknown fixture "${depName}".`));
					continue;
				}
				if (depName === fixture.name && !fixture.parent) {
					errors.push(new FixtureDependencyError(`The "${fixture.name}" fixture depends on itself, but does not have a base implementation.`));
					continue;
				}
				if (TestFixtures._fixtureScopes.indexOf(fixture.scope) > TestFixtures._fixtureScopes.indexOf(dep.scope)) {
					errors.push(new FixtureDependencyError(`The ${fixture.scope} "${fixture.name}" fixture cannot depend on a ${dep.scope} fixture "${dep.name}".`));
					continue;
				}
			}
		}
		if (errors.length === 1) {
			throw errors[0];
		} else if (errors.length > 1) {
			throw new AggregateError(errors, "Cannot resolve user fixtures. See errors for more information.");
		}
		return registrations;
	}
}
const cleanupFnArrayMap = new WeakMap();
async function callFixtureCleanup(context) {
	const cleanupFnArray = cleanupFnArrayMap.get(context) ?? [];
	for (const cleanup of cleanupFnArray.reverse()) {
		await cleanup();
	}
	cleanupFnArrayMap.delete(context);
}
/**
* Returns the current number of cleanup functions registered for the context.
* This can be used as a checkpoint to later clean up only fixtures added after this point.
*/
function getFixtureCleanupCount(context) {
	return cleanupFnArrayMap.get(context)?.length ?? 0;
}
/**
* Cleans up only fixtures that were added after the given checkpoint index.
* This is used by aroundEach to clean up fixtures created inside runTest()
* while preserving fixtures that were created for aroundEach itself.
*/
async function callFixtureCleanupFrom(context, fromIndex) {
	const cleanupFnArray = cleanupFnArrayMap.get(context);
	if (!cleanupFnArray || cleanupFnArray.length <= fromIndex) {
		return;
	}
	// Get items added after the checkpoint
	const toCleanup = cleanupFnArray.slice(fromIndex);
	// Clean up in reverse order
	for (const cleanup of toCleanup.reverse()) {
		await cleanup();
	}
	// Remove cleaned up items from the array, keeping items before checkpoint
	cleanupFnArray.length = fromIndex;
}
const contextHasFixturesCache = new WeakMap();
function withFixtures(fn, options) {
	const collector = getCurrentSuite();
	const suite = options?.suite || collector.suite || collector.file;
	return async (hookContext) => {
		const context = hookContext || options?.context;
		if (!context) {
			if (options?.suiteHook) {
				validateSuiteHook(fn, options.suiteHook, options.stackTraceError);
			}
			return fn({});
		}
		const fixtures = options?.fixtures || getTestFixtures(context);
		if (!fixtures) {
			return fn(context);
		}
		const registrations = fixtures.get(suite);
		if (!registrations.size) {
			return fn(context);
		}
		const usedFixtures = [];
		const usedProps = getUsedProps(fn);
		for (const fixture of registrations.values()) {
			if (isAutoFixture(fixture, options) || usedProps.has(fixture.name)) {
				usedFixtures.push(fixture);
			}
		}
		if (!usedFixtures.length) {
			return fn(context);
		}
		if (!cleanupFnArrayMap.has(context)) {
			cleanupFnArrayMap.set(context, []);
		}
		const cleanupFnArray = cleanupFnArrayMap.get(context);
		const pendingFixtures = resolveDeps(usedFixtures, registrations);
		if (!pendingFixtures.length) {
			return fn(context);
		}
		// Check if suite-level hook is trying to access test-scoped fixtures
		// Suite hooks (beforeAll/afterAll/aroundAll) can only access file/worker scoped fixtures
		if (options?.suiteHook) {
			const testScopedFixtures = pendingFixtures.filter((f) => f.scope === "test");
			if (testScopedFixtures.length > 0) {
				const fixtureNames = testScopedFixtures.map((f) => `"${f.name}"`).join(", ");
				const alternativeHook = {
					aroundAll: "aroundEach",
					beforeAll: "beforeEach",
					afterAll: "afterEach"
				};
				const error = new FixtureDependencyError(`Test-scoped fixtures cannot be used inside ${options.suiteHook} hook. ` + `The following fixtures are test-scoped: ${fixtureNames}. ` + `Use { scope: 'file' } or { scope: 'worker' } fixtures instead, or move the logic to ${alternativeHook[options.suiteHook]} hook.`);
				// Use stack trace from hook registration for better error location
				if (options.stackTraceError?.stack) {
					error.stack = error.message + options.stackTraceError.stack.replace(options.stackTraceError.message, "");
				}
				throw error;
			}
		}
		if (!contextHasFixturesCache.has(context)) {
			contextHasFixturesCache.set(context, new WeakSet());
		}
		const cachedFixtures = contextHasFixturesCache.get(context);
		for (const fixture of pendingFixtures) {
			if (fixture.scope === "test") {
				// fixture could be already initialized during "before" hook
				// we can't check "fixture.name" in context because context may
				// access the parent fixture ({ a: ({ a }) => {} })
				if (cachedFixtures.has(fixture)) {
					continue;
				}
				cachedFixtures.add(fixture);
				const resolvedValue = await resolveTestFixtureValue(fixture, context, cleanupFnArray);
				context[fixture.name] = resolvedValue;
				cleanupFnArray.push(() => {
					cachedFixtures.delete(fixture);
				});
			} else {
				const resolvedValue = await resolveScopeFixtureValue(fixtures, suite, fixture);
				context[fixture.name] = resolvedValue;
			}
		}
		return fn(context);
	};
}
function isAutoFixture(fixture, options) {
	if (!fixture.auto) {
		return false;
	}
	// suite hook doesn't automatically trigger unused test-scoped fixtures.
	if (options?.suiteHook && fixture.scope === "test") {
		return false;
	}
	return true;
}
function isFixtureFunction(value) {
	return typeof value === "function";
}
function resolveTestFixtureValue(fixture, context, cleanupFnArray) {
	if (!isFixtureFunction(fixture.value)) {
		return fixture.value;
	}
	return resolveFixtureFunction(fixture.value, fixture.name, context, cleanupFnArray);
}
const scopedFixturePromiseCache = new WeakMap();
async function resolveScopeFixtureValue(fixtures, suite, fixture) {
	const workerContext = fixtures.getWorkerContext();
	const fileContext = fixtures.getFileContext(suite.file);
	const fixtureContext = fixture.scope === "worker" ? workerContext : fileContext;
	if (!isFixtureFunction(fixture.value)) {
		fixtureContext[fixture.name] = fixture.value;
		return fixture.value;
	}
	if (fixture.name in fixtureContext) {
		return fixtureContext[fixture.name];
	}
	if (scopedFixturePromiseCache.has(fixture)) {
		return scopedFixturePromiseCache.get(fixture);
	}
	if (!cleanupFnArrayMap.has(fixtureContext)) {
		cleanupFnArrayMap.set(fixtureContext, []);
	}
	const cleanupFnFileArray = cleanupFnArrayMap.get(fixtureContext);
	const promise = resolveFixtureFunction(fixture.value, fixture.name, fixture.scope === "file" ? {
		...workerContext,
		...fileContext
	} : fixtureContext, cleanupFnFileArray).then((value) => {
		fixtureContext[fixture.name] = value;
		scopedFixturePromiseCache.delete(fixture);
		return value;
	});
	scopedFixturePromiseCache.set(fixture, promise);
	return promise;
}
async function resolveFixtureFunction(fixtureFn, fixtureName, context, cleanupFnArray) {
	// wait for `use` call to extract fixture value
	const useFnArgPromise = createDefer();
	const stackTraceError = FIXTURE_STACK_TRACE_KEY in fixtureFn && fixtureFn[FIXTURE_STACK_TRACE_KEY] instanceof Error ? fixtureFn[FIXTURE_STACK_TRACE_KEY] : undefined;
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
	}).then(() => {
		// fixture returned without calling use()
		if (!isUseFnArgResolved) {
			const error = new Error(`Fixture "${fixtureName}" returned without calling "use". Make sure to call "use" in every code path of the fixture function.`);
			if (stackTraceError?.stack) {
				error.stack = error.message + stackTraceError.stack.replace(stackTraceError.message, "");
			}
			useFnArgPromise.reject(error);
		}
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
function resolveDeps(usedFixtures, registrations, depSet = new Set(), pendingFixtures = []) {
	usedFixtures.forEach((fixture) => {
		if (pendingFixtures.includes(fixture)) {
			return;
		}
		if (!isFixtureFunction(fixture.value) || !fixture.deps) {
			pendingFixtures.push(fixture);
			return;
		}
		if (depSet.has(fixture)) {
			if (fixture.parent) {
				fixture = fixture.parent;
			} else {
				throw new Error(`Circular fixture dependency detected: ${fixture.name} <- ${[...depSet].reverse().map((d) => d.name).join(" <- ")}`);
			}
		}
		depSet.add(fixture);
		resolveDeps([...fixture.deps].map((n) => n === fixture.name ? fixture.parent : registrations.get(n)).filter((n) => !!n), registrations, depSet, pendingFixtures);
		pendingFixtures.push(fixture);
		depSet.clear();
	});
	return pendingFixtures;
}
function validateSuiteHook(fn, hook, suiteError) {
	const usedProps = getUsedProps(fn, {
		sourceError: suiteError,
		suiteHook: hook
	});
	if (usedProps.size) {
		const error = new FixtureAccessError(`The ${hook} hook uses fixtures "${[...usedProps].join("\", \"")}", but has no access to context. ` + `Did you forget to call it as "test.${hook}()" instead of "${hook}()"?\n` + `If you used internal "suite" task as the first argument previously, access it in the second argument instead. ` + `See https://vitest.dev/guide/test-context#suite-level-hooks`);
		if (suiteError) {
			error.stack = suiteError.stack?.replace(suiteError.message, error.message);
		}
		throw error;
	}
}
const kPropsSymbol = Symbol("$vitest:fixture-props");
const kPropNamesSymbol = Symbol("$vitest:fixture-prop-names");
function configureProps(fn, options) {
	Object.defineProperty(fn, kPropsSymbol, {
		value: options,
		enumerable: false
	});
}
function memoProps(fn, props) {
	fn[kPropNamesSymbol] = props;
	return props;
}
function getUsedProps(fn, { sourceError, suiteHook } = {}) {
	if (kPropNamesSymbol in fn) {
		return fn[kPropNamesSymbol];
	}
	const { index: fixturesIndex = 0, original: implementation = fn } = kPropsSymbol in fn ? fn[kPropsSymbol] : {};
	let fnString = filterOutComments(implementation.toString());
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
		return memoProps(fn, new Set());
	}
	const args = splitByComma(match[1]);
	if (!args.length) {
		return memoProps(fn, new Set());
	}
	const fixturesArgument = args[fixturesIndex];
	if (!fixturesArgument) {
		return memoProps(fn, new Set());
	}
	if (!(fixturesArgument[0] === "{" && fixturesArgument.endsWith("}"))) {
		const ordinalArgument = ordinal(fixturesIndex + 1);
		const error = new FixtureParseError(`The ${ordinalArgument} argument inside a fixture must use object destructuring pattern, e.g. ({ task } => {}). ` + `Instead, received "${fixturesArgument}".` + `${suiteHook ? ` If you used internal "suite" task as the ${ordinalArgument} argument previously, access it in the ${ordinal(fixturesIndex + 2)} argument instead.` : ""}`);
		if (sourceError) {
			error.stack = sourceError.stack?.replace(sourceError.message, error.message);
		}
		throw error;
	}
	const _first = fixturesArgument.slice(1, -1).replace(/\s/g, "");
	const props = splitByComma(_first).map((prop) => {
		return prop.replace(/:.*|=.*/g, "");
	});
	const last = props.at(-1);
	if (last && last.startsWith("...")) {
		const error = new FixtureParseError(`Rest parameters are not supported in fixtures, received "${last}".`);
		if (sourceError) {
			error.stack = sourceError.stack?.replace(sourceError.message, error.message);
		}
		throw error;
	}
	return memoProps(fn, new Set(props));
}
function splitByComma(s) {
	const result = [];
	const stack = [];
	let start = 0;
	for (let i = 0; i < s.length; i++) {
		if (s[i] === "{" || s[i] === "[") {
			stack.push(s[i] === "{" ? "}" : "]");
		} else if (s[i] === stack.at(-1)) {
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

const kChainableContext = Symbol("kChainableContext");
function getChainableContext(chainable) {
	return chainable?.[kChainableContext];
}
function createChainable(keys, fn, context) {
	function create(context) {
		const chain = function(...args) {
			return fn.apply(context, args);
		};
		Object.assign(chain, fn);
		Object.defineProperty(chain, kChainableContext, {
			value: {
				withContext: () => chain.bind(context),
				getFixtures: () => context.fixtures,
				setContext: (key, value) => {
					context[key] = value;
				},
				mergeContext: (ctx) => {
					Object.assign(context, ctx);
				}
			},
			enumerable: false
		});
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
	const chain = create(context ?? {});
	Object.defineProperty(chain, "fn", {
		value: fn,
		enumerable: false
	});
	return chain;
}

function getDefaultHookTimeout() {
	return getRunner().config.hookTimeout;
}
const CLEANUP_TIMEOUT_KEY = Symbol.for("VITEST_CLEANUP_TIMEOUT");
const CLEANUP_STACK_TRACE_KEY = Symbol.for("VITEST_CLEANUP_STACK_TRACE");
const AROUND_TIMEOUT_KEY = Symbol.for("VITEST_AROUND_TIMEOUT");
const AROUND_STACK_TRACE_KEY = Symbol.for("VITEST_AROUND_STACK_TRACE");
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
	const context = getChainableContext(this);
	return getCurrentSuite().on("beforeAll", Object.assign(withTimeout(withSuiteFixtures("beforeAll", fn, context, stackTraceError), timeout, true, stackTraceError), {
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
	const context = getChainableContext(this);
	const stackTraceError = new Error("STACK_TRACE_ERROR");
	return getCurrentSuite().on("afterAll", withTimeout(withSuiteFixtures("afterAll", fn, context, stackTraceError), timeout ?? getDefaultHookTimeout(), true, stackTraceError));
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
	const wrapper = (context, suite) => {
		const fixtureResolver = withFixtures(fn, { suite });
		return fixtureResolver(context);
	};
	return getCurrentSuite().on("beforeEach", Object.assign(withTimeout(wrapper, timeout ?? getDefaultHookTimeout(), true, stackTraceError, abortIfTimeout), {
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
	const wrapper = (context, suite) => {
		const fixtureResolver = withFixtures(fn, { suite });
		return fixtureResolver(context);
	};
	return getCurrentSuite().on("afterEach", withTimeout(wrapper, timeout ?? getDefaultHookTimeout(), true, new Error("STACK_TRACE_ERROR"), abortIfTimeout));
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
	test.onFailed ||= [];
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
	test.onFinished ||= [];
	test.onFinished.push(withTimeout(handler, timeout ?? getDefaultHookTimeout(), true, new Error("STACK_TRACE_ERROR"), abortIfTimeout));
});
/**
* Registers a callback function that wraps around all tests within the current suite.
* The callback receives a `runSuite` function that must be called to run the suite's tests.
* This hook is useful for scenarios where you need to wrap an entire suite in a context
* (e.g., starting a server, opening a database connection that all tests share).
*
* **Note:** When multiple `aroundAll` hooks are registered, they are nested inside each other.
* The first registered hook is the outermost wrapper.
*
* @param {Function} fn - The callback function that wraps the suite. Must call `runSuite()` to run the tests.
* @param {number} [timeout] - Optional timeout in milliseconds for the hook. If not provided, the default hook timeout from the runner's configuration is used.
* @returns {void}
* @example
* ```ts
* // Example of using aroundAll to wrap suite in a tracing span
* aroundAll(async (runSuite) => {
*   await tracer.trace('test-suite', runSuite);
* });
* ```
* @example
* ```ts
* // Example of using aroundAll with fixtures
* aroundAll(async (runSuite, { db }) => {
*   await db.transaction(() => runSuite());
* });
* ```
*/
function aroundAll(fn, timeout) {
	assertTypes(fn, "\"aroundAll\" callback", ["function"]);
	const stackTraceError = new Error("STACK_TRACE_ERROR");
	const resolvedTimeout = timeout ?? getDefaultHookTimeout();
	const context = getChainableContext(this);
	return getCurrentSuite().on("aroundAll", Object.assign(withSuiteFixtures("aroundAll", fn, context, stackTraceError, 1), {
		[AROUND_TIMEOUT_KEY]: resolvedTimeout,
		[AROUND_STACK_TRACE_KEY]: stackTraceError
	}));
}
/**
* Registers a callback function that wraps around each test within the current suite.
* The callback receives a `runTest` function that must be called to run the test.
* This hook is useful for scenarios where you need to wrap tests in a context (e.g., database transactions).
*
* **Note:** When multiple `aroundEach` hooks are registered, they are nested inside each other.
* The first registered hook is the outermost wrapper.
*
* @param {Function} fn - The callback function that wraps the test. Must call `runTest()` to run the test.
* @param {number} [timeout] - Optional timeout in milliseconds for the hook. If not provided, the default hook timeout from the runner's configuration is used.
* @returns {void}
* @example
* ```ts
* // Example of using aroundEach to wrap tests in a database transaction
* aroundEach(async (runTest) => {
*   await database.transaction(() => runTest());
* });
* ```
* @example
* ```ts
* // Example of using aroundEach with fixtures
* aroundEach(async (runTest, { db }) => {
*   await db.transaction(() => runTest());
* });
* ```
*/
function aroundEach(fn, timeout) {
	assertTypes(fn, "\"aroundEach\" callback", ["function"]);
	const stackTraceError = new Error("STACK_TRACE_ERROR");
	const resolvedTimeout = timeout ?? getDefaultHookTimeout();
	const wrapper = (runTest, context, suite) => {
		const innerFn = (ctx) => fn(runTest, ctx, suite);
		configureProps(innerFn, {
			index: 1,
			original: fn
		});
		const fixtureResolver = withFixtures(innerFn, { suite });
		return fixtureResolver(context);
	};
	return getCurrentSuite().on("aroundEach", Object.assign(wrapper, {
		[AROUND_TIMEOUT_KEY]: resolvedTimeout,
		[AROUND_STACK_TRACE_KEY]: stackTraceError
	}));
}
function withSuiteFixtures(suiteHook, fn, context, stackTraceError, contextIndex = 0) {
	return (...args) => {
		const suite = args.at(-1);
		const prefix = args.slice(0, -1);
		const wrapper = (ctx) => fn(...prefix, ctx, suite);
		configureProps(wrapper, {
			index: contextIndex,
			original: fn
		});
		const fixtures = context?.getFixtures();
		const fileContext = fixtures?.getFileContext(suite.file);
		const fixtured = withFixtures(wrapper, {
			suiteHook,
			fixtures,
			context: fileContext,
			stackTraceError
		});
		return fixtured();
	};
}
function getAroundHookTimeout(hook) {
	return AROUND_TIMEOUT_KEY in hook && typeof hook[AROUND_TIMEOUT_KEY] === "number" ? hook[AROUND_TIMEOUT_KEY] : getDefaultHookTimeout();
}
function getAroundHookStackTrace(hook) {
	return AROUND_STACK_TRACE_KEY in hook && hook[AROUND_STACK_TRACE_KEY] instanceof Error ? hook[AROUND_STACK_TRACE_KEY] : undefined;
}
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

/**
* If any tasks been marked as `only`, mark all other tasks as `skip`.
*/
function interpretTaskModes(file, namePattern, testLocations, testIds, testTagsFilter, onlyMode, parentIsOnly, allowOnly) {
	const matchedLocations = [];
	const traverseSuite = (suite, parentIsOnly, parentMatchedWithLocation) => {
		const suiteIsOnly = parentIsOnly || suite.mode === "only";
		// Check if any tasks in this suite have `.only` - if so, only those should run
		const hasSomeTasksOnly = onlyMode && suite.tasks.some((t) => t.mode === "only" || t.type === "suite" && someTasksAreOnly(t));
		suite.tasks.forEach((t) => {
			// Check if either the parent suite or the task itself are marked as included
			// If there are tasks with `.only` in this suite, only include those (not all tasks from describe.only)
			const includeTask = hasSomeTasksOnly ? t.mode === "only" || t.type === "suite" && someTasksAreOnly(t) : suiteIsOnly || t.mode === "only";
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
			// in `testLocations`. Note: if `includeTaskLocation` is not enabled,
			// all test will be skipped.
			if (testLocations !== undefined && testLocations.length !== 0) {
				if (t.location && testLocations?.includes(t.location.line)) {
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
				if (testIds && !testIds.includes(t.id)) {
					t.mode = "skip";
				}
				if (testTagsFilter && !testTagsFilter(t.tags || [])) {
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
	const nonMatching = testLocations?.filter((loc) => !matchedLocations.includes(loc));
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
/* @__NO_SIDE_EFFECTS__ */
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
function createFileTask(filepath, root, projectName, pool, viteEnvironment) {
	const path = relative(root, filepath);
	const file = {
		id: generateFileHash(path, projectName),
		name: path,
		fullName: path,
		type: "suite",
		mode: "queued",
		filepath,
		tasks: [],
		meta: Object.create(null),
		projectName,
		file: undefined,
		pool,
		viteEnvironment
	};
	file.file = file;
	return file;
}
/**
* Generate a unique ID for a file based on its path and project name
* @param file File relative to the root of the project to keep ID the same between different machines
* @param projectName The name of the test project
*/
/* @__NO_SIDE_EFFECTS__ */
function generateFileHash(file, projectName) {
	return /* @__PURE__ */ generateHash(`${file}${projectName || ""}`);
}
function findTestFileStackTrace(testFilePath, error) {
	// first line is the error message
	const lines = error.split("\n").slice(1);
	for (const line of lines) {
		const stack = parseSingleStack(line);
		if (stack && stack.file === testFilePath) {
			return stack;
		}
	}
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
	const acquire = () => {
		let released = false;
		const release = () => {
			if (!released) {
				released = true;
				finish();
			}
		};
		if (count++ < concurrency) {
			return release;
		}
		return new Promise((resolve) => {
			if (tail) {
				// There are pending tasks, so append to the queue.
				tail = tail[1] = [() => resolve(release)];
			} else {
				// No other pending tasks, initialize the queue with a new tail and head.
				head = tail = [() => resolve(release)];
			}
		});
	};
	const limiterFn = (func, ...args) => {
		function run(release) {
			try {
				const result = func(...args);
				if (result instanceof Promise) {
					return result.finally(release);
				}
				release();
				return Promise.resolve(result);
			} catch (error) {
				release();
				return Promise.reject(error);
			}
		}
		const release = acquire();
		return release instanceof Promise ? release.then(run) : run(release);
	};
	return Object.assign(limiterFn, { acquire });
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

const filterMap = new WeakMap();
/**
* @experimental
*/
function matchesTags(testTags) {
	const runner = getRunner();
	const tagsFilter = runner._currentSpecification?.testTagsFilter ?? runner.config.tagsFilter;
	if (!tagsFilter) {
		return true;
	}
	let tagsFilterPredicate = filterMap.get(tagsFilter);
	if (!tagsFilterPredicate) {
		tagsFilterPredicate = createTagsFilter(tagsFilter, runner.config.tags);
		filterMap.set(tagsFilter, tagsFilterPredicate);
	}
	return tagsFilterPredicate(testTags);
}
function validateTags(config, tags) {
	if (!config.strictTags) {
		return;
	}
	const availableTags = new Set(config.tags.map((tag) => tag.name));
	for (const tag of tags) {
		if (!availableTags.has(tag)) {
			throw createNoTagsError(config.tags, tag);
		}
	}
}
function createNoTagsError(availableTags, tag, prefix = "tag") {
	if (!availableTags.length) {
		throw new Error(`The Vitest config does't define any "tags", cannot apply "${tag}" ${prefix} for this test. See: https://vitest.dev/guide/test-tags`);
	}
	throw new Error(`The ${prefix} "${tag}" is not defined in the configuration. Available tags are:\n${availableTags.map((t) => `- ${t.name}${t.description ? `: ${t.description}` : ""}`).join("\n")}`);
}
function createTagsFilter(tagsExpr, availableTags) {
	const matchers = tagsExpr.map((expr) => parseTagsExpression(expr, availableTags));
	return (testTags) => {
		return matchers.every((matcher) => matcher(testTags));
	};
}
function parseTagsExpression(expr, availableTags) {
	const tokens = tokenize(expr);
	const stream = new TokenStream(tokens, expr);
	const ast = parseOrExpression(stream, availableTags);
	if (stream.peek().type !== "EOF") {
		throw new Error(`Invalid tags expression: unexpected "${formatToken(stream.peek())}" in "${expr}"`);
	}
	return (tags) => evaluateNode(ast, tags);
}
function formatToken(token) {
	switch (token.type) {
		case "TAG": return token.value;
		default: return formatTokenType(token.type);
	}
}
function tokenize(expr) {
	const tokens = [];
	let i = 0;
	while (i < expr.length) {
		if (expr[i] === " " || expr[i] === "	") {
			i++;
			continue;
		}
		if (expr[i] === "(") {
			tokens.push({ type: "LPAREN" });
			i++;
			continue;
		}
		if (expr[i] === ")") {
			tokens.push({ type: "RPAREN" });
			i++;
			continue;
		}
		if (expr[i] === "!") {
			tokens.push({ type: "NOT" });
			i++;
			continue;
		}
		if (expr.slice(i, i + 2) === "&&") {
			tokens.push({ type: "AND" });
			i += 2;
			continue;
		}
		if (expr.slice(i, i + 2) === "||") {
			tokens.push({ type: "OR" });
			i += 2;
			continue;
		}
		if (/^and(?:\s|\)|$)/i.test(expr.slice(i))) {
			tokens.push({ type: "AND" });
			i += 3;
			continue;
		}
		if (/^or(?:\s|\)|$)/i.test(expr.slice(i))) {
			tokens.push({ type: "OR" });
			i += 2;
			continue;
		}
		if (/^not\s/i.test(expr.slice(i))) {
			tokens.push({ type: "NOT" });
			i += 3;
			continue;
		}
		let tag = "";
		while (i < expr.length && expr[i] !== " " && expr[i] !== "	" && expr[i] !== "(" && expr[i] !== ")" && expr[i] !== "!" && expr[i] !== "&" && expr[i] !== "|") {
			const remaining = expr.slice(i);
			// Only treat and/or/not as operators if we're at the start of a tag (after whitespace)
			// This allows tags like "demand", "editor", "cannot" to work correctly
			if (tag === "" && (/^and(?:\s|\)|$)/i.test(remaining) || /^or(?:\s|\)|$)/i.test(remaining) || /^not\s/i.test(remaining))) {
				break;
			}
			tag += expr[i];
			i++;
		}
		if (tag) {
			tokens.push({
				type: "TAG",
				value: tag
			});
		}
	}
	tokens.push({ type: "EOF" });
	return tokens;
}
class TokenStream {
	pos = 0;
	constructor(tokens, expr) {
		this.tokens = tokens;
		this.expr = expr;
	}
	peek() {
		return this.tokens[this.pos];
	}
	next() {
		return this.tokens[this.pos++];
	}
	expect(type) {
		const token = this.next();
		if (token.type !== type) {
			if (type === "RPAREN" && token.type === "EOF") {
				throw new Error(`Invalid tags expression: missing closing ")" in "${this.expr}"`);
			}
			throw new Error(`Invalid tags expression: expected "${formatTokenType(type)}" but got "${formatToken(token)}" in "${this.expr}"`);
		}
		return token;
	}
	unexpectedToken() {
		const token = this.peek();
		if (token.type === "EOF") {
			throw new Error(`Invalid tags expression: unexpected end of expression in "${this.expr}"`);
		}
		throw new Error(`Invalid tags expression: unexpected "${formatToken(token)}" in "${this.expr}"`);
	}
}
function formatTokenType(type) {
	switch (type) {
		case "TAG": return "tag";
		case "AND": return "and";
		case "OR": return "or";
		case "NOT": return "not";
		case "LPAREN": return "(";
		case "RPAREN": return ")";
		case "EOF": return "end of expression";
	}
}
function parseOrExpression(stream, availableTags) {
	let left = parseAndExpression(stream, availableTags);
	while (stream.peek().type === "OR") {
		stream.next();
		const right = parseAndExpression(stream, availableTags);
		left = {
			type: "or",
			left,
			right
		};
	}
	return left;
}
function parseAndExpression(stream, availableTags) {
	let left = parseUnaryExpression(stream, availableTags);
	while (stream.peek().type === "AND") {
		stream.next();
		const right = parseUnaryExpression(stream, availableTags);
		left = {
			type: "and",
			left,
			right
		};
	}
	return left;
}
function parseUnaryExpression(stream, availableTags) {
	if (stream.peek().type === "NOT") {
		stream.next();
		const operand = parseUnaryExpression(stream, availableTags);
		return {
			type: "not",
			operand
		};
	}
	return parsePrimaryExpression(stream, availableTags);
}
function parsePrimaryExpression(stream, availableTags) {
	const token = stream.peek();
	if (token.type === "LPAREN") {
		stream.next();
		const expr = parseOrExpression(stream, availableTags);
		stream.expect("RPAREN");
		return expr;
	}
	if (token.type === "TAG") {
		stream.next();
		const tagValue = token.value;
		const pattern = resolveTagPattern(tagValue, availableTags);
		return {
			type: "tag",
			value: tagValue,
			pattern
		};
	}
	stream.unexpectedToken();
}
function createWildcardRegex(pattern) {
	return new RegExp(`^${pattern.replace(/[.+?^${}()|[\]\\]/g, "\\$&").replace(/\*/g, ".*")}$`);
}
function resolveTagPattern(tagPattern, availableTags) {
	if (tagPattern.includes("*")) {
		const regex = createWildcardRegex(tagPattern);
		const hasMatch = availableTags.some((tag) => regex.test(tag.name));
		if (!hasMatch) {
			throw createNoTagsError(availableTags, tagPattern, "tag pattern");
		}
		return regex;
	}
	if (!availableTags.length || !availableTags.some((tag) => tag.name === tagPattern)) {
		throw createNoTagsError(availableTags, tagPattern, "tag pattern");
	}
	return null;
}
function evaluateNode(node, tags) {
	switch (node.type) {
		case "tag":
			if (node.pattern) {
				return tags.some((tag) => node.pattern.test(tag));
			}
			return tags.includes(node.value);
		case "not": return !evaluateNode(node.operand, tags);
		case "and": return evaluateNode(node.left, tags) && evaluateNode(node.right, tags);
		case "or": return evaluateNode(node.left, tags) || evaluateNode(node.right, tags);
	}
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
	return toArray(suite).some((s) => s.result?.state === "fail" || s.type === "suite" && hasFailed(s.tasks));
}
function getNames(task) {
	const names = [task.name];
	let current = task;
	while (current?.suite) {
		current = current.suite;
		if (current?.name) {
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
function createTaskName(names, separator = " > ") {
	return names.filter((name) => name !== undefined).join(separator);
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
		throw new Error(`Vitest failed to find ${message}. One of the following is possible:` + "\n- \"vitest\" is imported directly without running \"vitest\" command" + "\n- \"vitest\" is imported inside \"globalSetup\" (to fix this, use \"setupFiles\" instead, because \"globalSetup\" runs in a different context)" + "\n- \"vitest\" is imported inside Vite / Vitest config file" + "\n- Otherwise, it might be a Vitest bug. Please report it to https://github.com/vitest-dev/vitest/issues\n");
	}
}
function getDefaultSuite() {
	assert(defaultSuite, "the default suite");
	return defaultSuite;
}
function getRunner() {
	assert(runner, "the runner");
	return runner;
}
function createDefaultSuite(runner) {
	const config = runner.config.sequence;
	const options = {};
	if (config.concurrent != null) {
		options.concurrent = config.concurrent;
	}
	const collector = suite("", options, () => {});
	// no parent suite for top-level tests
	delete collector.suite;
	return collector;
}
function clearCollectorContext(file, currentRunner) {
	currentTestFilepath = file.filepath;
	runner = currentRunner;
	if (!defaultSuite) {
		defaultSuite = createDefaultSuite(currentRunner);
	}
	defaultSuite.file = file;
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
		afterEach: [],
		aroundEach: [],
		aroundAll: []
	};
}
const POSITIVE_INFINITY = Number.POSITIVE_INFINITY;
function parseArguments(optionsOrFn, timeoutOrTest) {
	if (timeoutOrTest != null && typeof timeoutOrTest === "object") {
		throw new TypeError(`Signature "test(name, fn, { ... })" was deprecated in Vitest 3 and removed in Vitest 4. Please, provide options as a second argument instead.`);
	}
	let options = {};
	let fn;
	// it('', () => {}, 1000)
	if (typeof timeoutOrTest === "number") {
		options = { timeout: timeoutOrTest };
	} else if (typeof optionsOrFn === "object") {
		options = optionsOrFn;
	}
	if (typeof optionsOrFn === "function") {
		if (typeof timeoutOrTest === "function") {
			throw new TypeError("Cannot use two functions as arguments. Please use the second argument for options.");
		}
		fn = optionsOrFn;
	} else if (typeof timeoutOrTest === "function") {
		fn = timeoutOrTest;
	}
	return {
		options,
		handler: fn
	};
}
// implementations
function createSuiteCollector(name, factory = () => {}, mode, each, suiteOptions) {
	const tasks = [];
	let suite;
	initSuite(true);
	const task = function(name = "", options = {}) {
		const currentSuite = collectorContext.currentSuite?.suite;
		const parentTask = currentSuite ?? collectorContext.currentSuite?.file;
		const parentTags = parentTask?.tags || [];
		const testTags = unique([...parentTags, ...toArray(options.tags)]);
		const tagsOptions = testTags.map((tag) => {
			const tagDefinition = runner.config.tags?.find((t) => t.name === tag);
			if (!tagDefinition && runner.config.strictTags) {
				throw createNoTagsError(runner.config.tags, tag);
			}
			return tagDefinition;
		}).filter((r) => r != null).sort((tag1, tag2) => (tag2.priority ?? POSITIVE_INFINITY) - (tag1.priority ?? POSITIVE_INFINITY)).reduce((acc, tag) => {
			const { name, description, priority, meta, ...options } = tag;
			Object.assign(acc, options);
			if (meta) {
				acc.meta = Object.assign(acc.meta ?? Object.create(null), meta);
			}
			return acc;
		}, {});
		const testOwnMeta = options.meta;
		options = {
			...tagsOptions,
			...options
		};
		const timeout = options.timeout ?? runner.config.testTimeout;
		const parentMeta = currentSuite?.meta;
		const tagMeta = tagsOptions.meta;
		const testMeta = Object.create(null);
		if (tagMeta) {
			Object.assign(testMeta, tagMeta);
		}
		if (parentMeta) {
			Object.assign(testMeta, parentMeta);
		}
		if (testOwnMeta) {
			Object.assign(testMeta, testOwnMeta);
		}
		const task = {
			id: "",
			name,
			fullName: createTaskName([currentSuite?.fullName ?? collectorContext.currentSuite?.file?.fullName, name]),
			fullTestName: createTaskName([currentSuite?.fullTestName, name]),
			suite: currentSuite,
			each: options.each,
			fails: options.fails,
			context: undefined,
			type: "test",
			file: currentSuite?.file ?? collectorContext.currentSuite?.file,
			timeout,
			retry: options.retry ?? runner.config.retry,
			repeats: options.repeats,
			mode: options.only ? "only" : options.skip ? "skip" : options.todo ? "todo" : "run",
			meta: testMeta,
			annotations: [],
			artifacts: [],
			tags: testTags
		};
		const handler = options.handler;
		if (task.mode === "run" && !handler) {
			task.mode = "todo";
		}
		if (options.concurrent || !options.sequential && runner.config.sequence.concurrent) {
			task.concurrent = true;
		}
		task.shuffle = suiteOptions?.shuffle;
		const context = createTestContext(task, runner);
		// create test context
		Object.defineProperty(task, "context", {
			value: context,
			enumerable: false
		});
		setTestFixture(context, options.fixtures ?? new TestFixtures());
		const limit = Error.stackTraceLimit;
		Error.stackTraceLimit = 10;
		const stackTraceError = new Error("STACK_TRACE_ERROR");
		Error.stackTraceLimit = limit;
		if (handler) {
			setFn(task, withTimeout(withCancel(withAwaitAsyncAssertions(withFixtures(handler, { context }), task), task.context.signal), timeout, false, stackTraceError, (_, error) => abortIfTimeout([context], error)));
		}
		if (runner.config.includeTaskLocation) {
			const error = stackTraceError.stack;
			const stack = findTestFileStackTrace(currentTestFilepath, error);
			if (stack) {
				task.location = {
					line: stack.line,
					column: stack.column
				};
			}
		}
		tasks.push(task);
		return task;
	};
	const test = createTest(function(name, optionsOrFn, timeoutOrTest) {
		let { options, handler } = parseArguments(optionsOrFn, timeoutOrTest);
		// inherit repeats, retry, timeout from suite
		if (typeof suiteOptions === "object") {
			options = Object.assign({}, suiteOptions, options);
		}
		// inherit concurrent / sequential from suite
		const concurrent = this.concurrent ?? (!this.sequential && options?.concurrent);
		if (options.concurrent != null && concurrent != null) {
			options.concurrent = concurrent;
		}
		const sequential = this.sequential ?? (!this.concurrent && options?.sequential);
		if (options.sequential != null && sequential != null) {
			options.sequential = sequential;
		}
		const test = task(formatName(name), {
			...this,
			...options,
			handler
		});
		test.type = "test";
	});
	const collector = {
		type: "collector",
		name,
		mode,
		suite,
		options: suiteOptions,
		test,
		file: suite.file,
		tasks,
		collect,
		task,
		clear,
		on: addHook
	};
	function addHook(name, ...fn) {
		getHooks(suite)[name].push(...fn);
	}
	function initSuite(includeLocation) {
		if (typeof suiteOptions === "number") {
			suiteOptions = { timeout: suiteOptions };
		}
		const currentSuite = collectorContext.currentSuite?.suite;
		const parentTask = currentSuite ?? collectorContext.currentSuite?.file;
		const suiteTags = toArray(suiteOptions?.tags);
		validateTags(runner.config, suiteTags);
		suite = {
			id: "",
			type: "suite",
			name,
			fullName: createTaskName([currentSuite?.fullName ?? collectorContext.currentSuite?.file?.fullName, name]),
			fullTestName: createTaskName([currentSuite?.fullTestName, name]),
			suite: currentSuite,
			mode,
			each,
			file: currentSuite?.file ?? collectorContext.currentSuite?.file,
			shuffle: suiteOptions?.shuffle,
			tasks: [],
			meta: suiteOptions?.meta ?? Object.create(null),
			concurrent: suiteOptions?.concurrent,
			tags: unique([...parentTask?.tags || [], ...suiteTags])
		};
		if (runner && includeLocation && runner.config.includeTaskLocation) {
			const limit = Error.stackTraceLimit;
			Error.stackTraceLimit = 15;
			const error = new Error("stacktrace").stack;
			Error.stackTraceLimit = limit;
			const stack = findTestFileStackTrace(currentTestFilepath, error);
			if (stack) {
				suite.location = {
					line: stack.line,
					column: stack.column
				};
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
		suite.tasks = allChildren;
		return suite;
	}
	collectTask(collector);
	return collector;
}
function withAwaitAsyncAssertions(fn, task) {
	return (async (...args) => {
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
	});
}
function createSuite() {
	function suiteFn(name, factoryOrOptions, optionsOrFactory) {
		if (getCurrentTest()) {
			throw new Error("Calling the suite function inside test function is not allowed. It can be only called at the top level or inside another suite function.");
		}
		const currentSuite = collectorContext.currentSuite || defaultSuite;
		let { options, handler: factory } = parseArguments(factoryOrOptions, optionsOrFactory);
		const isConcurrentSpecified = options.concurrent || this.concurrent || options.sequential === false;
		const isSequentialSpecified = options.sequential || this.sequential || options.concurrent === false;
		const { meta: parentMeta, ...parentOptions } = currentSuite?.options || {};
		// inherit options from current suite
		options = {
			...parentOptions,
			...options
		};
		const shuffle = this.shuffle ?? options.shuffle ?? currentSuite?.options?.shuffle ?? runner?.config.sequence.shuffle;
		if (shuffle != null) {
			options.shuffle = shuffle;
		}
		let mode = this.only ?? options.only ? "only" : this.skip ?? options.skip ? "skip" : this.todo ?? options.todo ? "todo" : "run";
		// passed as test(name), assume it's a "todo"
		if (mode === "run" && !factory) {
			mode = "todo";
		}
		// inherit concurrent / sequential from suite
		const isConcurrent = isConcurrentSpecified || options.concurrent && !isSequentialSpecified;
		const isSequential = isSequentialSpecified || options.sequential && !isConcurrentSpecified;
		if (isConcurrent != null) {
			options.concurrent = isConcurrent && !isSequential;
		}
		if (isSequential != null) {
			options.sequential = isSequential && !isConcurrent;
		}
		if (parentMeta) {
			options.meta = Object.assign(Object.create(null), parentMeta, options.meta);
		}
		return createSuiteCollector(formatName(name), factory, mode, this.each, options);
	}
	suiteFn.each = function(cases, ...args) {
		const context = getChainableContext(this);
		const suite = context.withContext();
		context.setContext("each", true);
		if (Array.isArray(cases) && args.length) {
			cases = formatTemplateString(cases, args);
		}
		return (name, optionsOrFn, fnOrOptions) => {
			const _name = formatName(name);
			const arrayOnlyCases = cases.every(Array.isArray);
			const { options, handler } = parseArguments(optionsOrFn, fnOrOptions);
			const fnFirst = typeof optionsOrFn === "function";
			cases.forEach((i, idx) => {
				const items = Array.isArray(i) ? i : [i];
				if (fnFirst) {
					if (arrayOnlyCases) {
						suite(formatTitle(_name, items, idx), handler ? () => handler(...items) : undefined, options.timeout);
					} else {
						suite(formatTitle(_name, items, idx), handler ? () => handler(i) : undefined, options.timeout);
					}
				} else {
					if (arrayOnlyCases) {
						suite(formatTitle(_name, items, idx), options, handler ? () => handler(...items) : undefined);
					} else {
						suite(formatTitle(_name, items, idx), options, handler ? () => handler(i) : undefined);
					}
				}
			});
			context.setContext("each", undefined);
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
				suite(formatTitle(name_, toArray(item), idx), options, handler ? () => handler(item) : undefined);
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
function createTaskCollector(fn) {
	const taskFn = fn;
	taskFn.each = function(cases, ...args) {
		const context = getChainableContext(this);
		const test = context.withContext();
		context.setContext("each", true);
		if (Array.isArray(cases) && args.length) {
			cases = formatTemplateString(cases, args);
		}
		return (name, optionsOrFn, fnOrOptions) => {
			const _name = formatName(name);
			const arrayOnlyCases = cases.every(Array.isArray);
			const { options, handler } = parseArguments(optionsOrFn, fnOrOptions);
			const fnFirst = typeof optionsOrFn === "function";
			cases.forEach((i, idx) => {
				const items = Array.isArray(i) ? i : [i];
				if (fnFirst) {
					if (arrayOnlyCases) {
						test(formatTitle(_name, items, idx), handler ? () => handler(...items) : undefined, options.timeout);
					} else {
						test(formatTitle(_name, items, idx), handler ? () => handler(i) : undefined, options.timeout);
					}
				} else {
					if (arrayOnlyCases) {
						test(formatTitle(_name, items, idx), options, handler ? () => handler(...items) : undefined);
					} else {
						test(formatTitle(_name, items, idx), options, handler ? () => handler(i) : undefined);
					}
				}
			});
			context.setContext("each", undefined);
		};
	};
	taskFn.for = function(cases, ...args) {
		const context = getChainableContext(this);
		const test = context.withContext();
		if (Array.isArray(cases) && args.length) {
			cases = formatTemplateString(cases, args);
		}
		return (name, optionsOrFn, fnOrOptions) => {
			const _name = formatName(name);
			const { options, handler } = parseArguments(optionsOrFn, fnOrOptions);
			cases.forEach((item, idx) => {
				// monkey-patch handler to allow parsing fixture
				const handlerWrapper = handler ? (ctx) => handler(item, ctx) : undefined;
				if (handlerWrapper) {
					configureProps(handlerWrapper, {
						index: 1,
						original: handler
					});
				}
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
	/**
	* Parse builder pattern arguments into a fixtures object.
	* Handles both builder pattern (name, options?, value) and object syntax.
	*/
	function parseBuilderFixtures(fixturesOrName, optionsOrFn, maybeFn) {
		// Object syntax: just return as-is
		if (typeof fixturesOrName !== "string") {
			return fixturesOrName;
		}
		const fixtureName = fixturesOrName;
		let fixtureOptions;
		let fixtureValue;
		if (maybeFn !== undefined) {
			// (name, options, value) or (name, options, fn)
			fixtureOptions = optionsOrFn;
			fixtureValue = maybeFn;
		} else {
			// (name, value) or (name, fn)
			// Check if optionsOrFn looks like fixture options (has scope or auto)
			if (optionsOrFn !== null && typeof optionsOrFn === "object" && !Array.isArray(optionsOrFn) && TestFixtures.isFixtureOptions(optionsOrFn)) {
				// (name, options) with no value - treat as empty object fixture
				fixtureOptions = optionsOrFn;
				fixtureValue = {};
			} else {
				// (name, value) or (name, fn)
				fixtureOptions = undefined;
				fixtureValue = optionsOrFn;
			}
		}
		// Function value: wrap with onCleanup pattern
		if (typeof fixtureValue === "function") {
			const builderFn = fixtureValue;
			// Wrap builder pattern function (returns value) to use() pattern
			const fixture = async (ctx, use) => {
				let cleanup;
				const onCleanup = (fn) => {
					if (cleanup !== undefined) {
						throw new Error(`onCleanup can only be called once per fixture. ` + `Define separate fixtures if you need multiple cleanup functions.`);
					}
					cleanup = fn;
				};
				const value = await builderFn(ctx, { onCleanup });
				await use(value);
				if (cleanup) {
					await cleanup();
				}
			};
			configureProps(fixture, { original: builderFn });
			if (fixtureOptions) {
				return { [fixtureName]: [fixture, fixtureOptions] };
			}
			return { [fixtureName]: fixture };
		}
		// Non-function value: use directly
		if (fixtureOptions) {
			return { [fixtureName]: [fixtureValue, fixtureOptions] };
		}
		return { [fixtureName]: fixtureValue };
	}
	taskFn.override = function(fixturesOrName, optionsOrFn, maybeFn) {
		const userFixtures = parseBuilderFixtures(fixturesOrName, optionsOrFn, maybeFn);
		getChainableContext(this).getFixtures().override(runner, userFixtures);
		return this;
	};
	taskFn.scoped = function(fixtures) {
		console.warn(`test.scoped() is deprecated and will be removed in future versions. Please use test.override() instead.`);
		return this.override(fixtures);
	};
	taskFn.extend = function(fixturesOrName, optionsOrFn, maybeFn) {
		const userFixtures = parseBuilderFixtures(fixturesOrName, optionsOrFn, maybeFn);
		const fixtures = getChainableContext(this).getFixtures().extend(runner, userFixtures);
		const _test = createTest(function(name, optionsOrFn, optionsOrTest) {
			fn.call(this, formatName(name), optionsOrFn, optionsOrTest);
		});
		getChainableContext(_test).mergeContext({ fixtures });
		return _test;
	};
	taskFn.describe = suite;
	taskFn.suite = suite;
	taskFn.beforeEach = beforeEach;
	taskFn.afterEach = afterEach;
	taskFn.beforeAll = beforeAll;
	taskFn.afterAll = afterAll;
	taskFn.aroundEach = aroundEach;
	taskFn.aroundAll = aroundAll;
	const _test = createChainable([
		"concurrent",
		"sequential",
		"skip",
		"only",
		"todo",
		"fails"
	], taskFn, { fixtures: new TestFixtures() });
	return _test;
}
function createTest(fn) {
	return createTaskCollector(fn);
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
	const isObjectItem = isObject(items[0]);
	function formatAttribute(s) {
		return s.replace(/\$([$\w.]+)/g, (_, key) => {
			const isArrayKey = /^\d+$/.test(key);
			if (!isObjectItem && !isArrayKey) {
				return `$${key}`;
			}
			const arrayElement = isArrayKey ? objectAttr(items, key) : undefined;
			const value = isObjectItem ? objectAttr(items[0], key, arrayElement) : arrayElement;
			return objDisplay(value, { truncate: runner?.config?.chaiConfig?.truncateThreshold });
		});
	}
	let output = "";
	let i = 0;
	handleRegexMatch(
		template,
		formatRegExp,
		// format "%"
		(match) => {
			if (i < count) {
				output += format(match[0], items[i++]);
			} else {
				output += match[0];
			}
		},
		// format "$"
		(nonMatch) => {
			output += formatAttribute(nonMatch);
		}
	);
	return output;
}
// based on https://github.com/unocss/unocss/blob/2e74b31625bbe3b9c8351570749aa2d3f799d919/packages/autocomplete/src/parse.ts#L11
function handleRegexMatch(input, regex, onMatch, onNonMatch) {
	let lastIndex = 0;
	for (const m of input.matchAll(regex)) {
		if (lastIndex < m.index) {
			onNonMatch(input.slice(lastIndex, m.index));
		}
		onMatch(m);
		lastIndex = m.index + m[0].length;
	}
	if (lastIndex < input.length) {
		onNonMatch(input.slice(lastIndex));
	}
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

const now$2 = globalThis.performance ? globalThis.performance.now.bind(globalThis.performance) : Date.now;
const collectorContext = {
	tasks: [],
	currentSuite: null
};
function collectTask(task) {
	collectorContext.currentSuite?.tasks.push(task);
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
	return (function runWithTimeout(...args) {
		const startTime = now$2();
		const runner = getRunner();
		runner._currentTaskStartTime = startTime;
		runner._currentTaskTimeout = timeout;
		return new Promise((resolve_, reject_) => {
			const timer = setTimeout(() => {
				clearTimeout(timer);
				rejectTimeoutError();
			}, timeout);
			// `unref` might not exist in browser
			timer.unref?.();
			function rejectTimeoutError() {
				const error = makeTimeoutError(isHook, timeout, stackTraceError);
				onTimeout?.(args, error);
				reject_(error);
			}
			function resolve(result) {
				runner._currentTaskStartTime = undefined;
				runner._currentTaskTimeout = undefined;
				clearTimeout(timer);
				// if test/hook took too long in microtask, setTimeout won't be triggered,
				// but we still need to fail the test, see
				// https://github.com/vitest-dev/vitest/issues/2920
				if (now$2() - startTime >= timeout) {
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
	});
}
function withCancel(fn, signal) {
	return (function runWithCancel(...args) {
		return new Promise((resolve, reject) => {
			signal.addEventListener("abort", () => reject(signal.reason));
			try {
				const result = fn(...args);
				if (typeof result === "object" && result != null && typeof result.then === "function") {
					result.then(resolve, reject);
				} else {
					resolve(result);
				}
			} catch (error) {
				reject(error);
			}
		});
	});
}
const abortControllers = new WeakMap();
function abortIfTimeout([context], error) {
	if (context) {
		abortContextSignal(context, error);
	}
}
function abortContextSignal(context, error) {
	const abortController = abortControllers.get(context);
	abortController?.abort(error);
}
function createTestContext(test, runner) {
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
		test.result ??= { state: "skip" };
		test.result.pending = true;
		throw new PendingError("test is skipped; abort execution", test, typeof condition === "string" ? condition : note);
	};
	context.annotate = ((message, type, attachment) => {
		if (test.result && test.result.state !== "run") {
			throw new Error(`Cannot annotate tests outside of the test run. The test "${test.name}" finished running with the "${test.result.state}" state already.`);
		}
		const annotation = {
			message,
			type: typeof type === "object" || type === undefined ? "notice" : type
		};
		const annotationAttachment = typeof type === "object" ? type : attachment;
		if (annotationAttachment) {
			annotation.attachment = annotationAttachment;
			manageArtifactAttachment(annotation.attachment);
		}
		return recordAsyncOperation(test, recordArtifact(test, {
			type: "internal:annotation",
			annotation
		}).then(async ({ annotation }) => {
			if (!runner.onTestAnnotate) {
				throw new Error(`Test runner doesn't support test annotations.`);
			}
			await finishSendTasksUpdate(runner);
			const resolvedAnnotation = await runner.onTestAnnotate(test, annotation);
			test.annotations.push(resolvedAnnotation);
			return resolvedAnnotation;
		}));
	});
	context.onTestFailed = (handler, timeout) => {
		test.onFailed ||= [];
		test.onFailed.push(withTimeout(handler, timeout ?? runner.config.hookTimeout, true, new Error("STACK_TRACE_ERROR"), (_, error) => abortController.abort(error)));
	};
	context.onTestFinished = (handler, timeout) => {
		test.onFinished ||= [];
		test.onFinished.push(withTimeout(handler, timeout ?? runner.config.hookTimeout, true, new Error("STACK_TRACE_ERROR"), (_, error) => abortController.abort(error)));
	};
	return runner.extendTaskContext?.(context) || context;
}
function makeTimeoutError(isHook, timeout, stackTraceError) {
	const message = `${isHook ? "Hook" : "Test"} timed out in ${timeout}ms.\nIf this is a long-running ${isHook ? "hook" : "test"}, pass a timeout value as the last argument or configure it globally with "${isHook ? "hookTimeout" : "testTimeout"}".`;
	const error = new Error(message);
	if (stackTraceError?.stack) {
		error.stack = stackTraceError.stack.replace(error.message, stackTraceError.message);
	}
	return error;
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

const now$1 = globalThis.performance ? globalThis.performance.now.bind(globalThis.performance) : Date.now;
async function collectTests(specs, runner) {
	const files = [];
	const config = runner.config;
	const $ = runner.trace;
	let defaultTagsFilter;
	for (const spec of specs) {
		const filepath = typeof spec === "string" ? spec : spec.filepath;
		await $("collect_spec", { "code.file.path": filepath }, async () => {
			runner._currentSpecification = typeof spec === "string" ? { filepath: spec } : spec;
			const testLocations = typeof spec === "string" ? undefined : spec.testLocations;
			const testNamePattern = typeof spec === "string" ? undefined : spec.testNamePattern;
			const testIds = typeof spec === "string" ? undefined : spec.testIds;
			const testTagsFilter = typeof spec === "object" && spec.testTagsFilter ? createTagsFilter(spec.testTagsFilter, config.tags) : undefined;
			const fileTags = typeof spec === "string" ? [] : spec.fileTags || [];
			const file = createFileTask(filepath, config.root, config.name, runner.pool, runner.viteEnvironment);
			file.tags = fileTags;
			file.shuffle = config.sequence.shuffle;
			try {
				validateTags(runner.config, fileTags);
				runner.onCollectStart?.(file);
				clearCollectorContext(file, runner);
				const setupFiles = toArray(config.setupFiles);
				if (setupFiles.length) {
					const setupStart = now$1();
					await runSetupFiles(config, setupFiles, runner);
					const setupEnd = now$1();
					file.setupDuration = setupEnd - setupStart;
				} else {
					file.setupDuration = 0;
				}
				const collectStart = now$1();
				await runner.importFile(filepath, "collect");
				const durations = runner.getImportDurations?.();
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
				file.collectDuration = now$1() - collectStart;
			} catch (e) {
				const errors = e instanceof AggregateError ? e.errors.map((e) => processError(e, runner.config.diffOptions)) : [processError(e, runner.config.diffOptions)];
				file.result = {
					state: "fail",
					errors
				};
				const durations = runner.getImportDurations?.();
				if (durations) {
					file.importDurations = durations;
				}
			}
			calculateSuiteHash(file);
			const hasOnlyTasks = someTasksAreOnly(file);
			if (!testTagsFilter && !defaultTagsFilter && config.tagsFilter) {
				defaultTagsFilter = createTagsFilter(config.tagsFilter, config.tags);
			}
			interpretTaskModes(file, testNamePattern ?? config.testNamePattern, testLocations, testIds, testTagsFilter ?? defaultTagsFilter, hasOnlyTasks, false, config.allowOnly);
			if (file.mode === "queued") {
				file.mode = "run";
			}
			files.push(file);
		});
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

const now = globalThis.performance ? globalThis.performance.now.bind(globalThis.performance) : Date.now;
const unixNow = Date.now;
const { clearTimeout, setTimeout } = getSafeTimers();
let limitMaxConcurrency;
/**
* Normalizes retry configuration to extract individual values.
* Handles both number and object forms.
*/
function getRetryCount(retry) {
	if (retry === undefined) {
		return 0;
	}
	if (typeof retry === "number") {
		return retry;
	}
	return retry.count ?? 0;
}
function getRetryDelay(retry) {
	if (retry === undefined) {
		return 0;
	}
	if (typeof retry === "number") {
		return 0;
	}
	return retry.delay ?? 0;
}
function getRetryCondition(retry) {
	if (retry === undefined) {
		return undefined;
	}
	if (typeof retry === "number") {
		return undefined;
	}
	return retry.condition;
}
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
			await Promise.all(hooks.map((fn) => limitMaxConcurrency(() => fn(test.context))));
		} catch (e) {
			failTask(test.result, e, runner.config.diffOptions);
		}
	} else {
		for (const fn of hooks) {
			try {
				await limitMaxConcurrency(() => fn(test.context));
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
		return limitMaxConcurrency(async () => {
			return getBeforeHookCleanupCallback(hook, await hook(...args), name === "beforeEach" ? args[0] : undefined);
		});
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
function getAroundEachHooks(suite) {
	const hooks = [];
	const parentSuite = "filepath" in suite ? null : suite.suite || suite.file;
	if (parentSuite) {
		hooks.push(...getAroundEachHooks(parentSuite));
	}
	hooks.push(...getHooks(suite).aroundEach);
	return hooks;
}
function getAroundAllHooks(suite) {
	return getHooks(suite).aroundAll;
}
function makeAroundHookTimeoutError(hookName, phase, timeout, stackTraceError) {
	const message = `The ${phase} phase of "${hookName}" hook timed out after ${timeout}ms.`;
	const ErrorClass = phase === "setup" ? AroundHookSetupError : AroundHookTeardownError;
	const error = new ErrorClass(message);
	if (stackTraceError?.stack) {
		error.stack = stackTraceError.stack.replace(stackTraceError.message, error.message);
	}
	return error;
}
async function callAroundHooks(runInner, options) {
	const { hooks, hookName, callbackName, onTimeout, invokeHook } = options;
	if (!hooks.length) {
		await runInner();
		return;
	}
	const hookErrors = [];
	const createTimeoutPromise = (timeout, phase, stackTraceError) => {
		let timer;
		let timedout = false;
		const promise = new Promise((_, reject) => {
			if (timeout > 0 && timeout !== Number.POSITIVE_INFINITY) {
				timer = setTimeout(() => {
					timedout = true;
					const error = makeAroundHookTimeoutError(hookName, phase, timeout, stackTraceError);
					onTimeout?.(error);
					reject(error);
				}, timeout);
				timer.unref?.();
			}
		});
		const clear = () => {
			if (timer) {
				clearTimeout(timer);
				timer = undefined;
			}
		};
		return {
			promise,
			clear,
			isTimedOut: () => timedout
		};
	};
	const runNextHook = async (index) => {
		if (index >= hooks.length) {
			return runInner();
		}
		const hook = hooks[index];
		const timeout = getAroundHookTimeout(hook);
		const stackTraceError = getAroundHookStackTrace(hook);
		let useCalled = false;
		let setupTimeout;
		let teardownTimeout;
		let setupLimitConcurrencyRelease;
		let teardownLimitConcurrencyRelease;
		// Promise that resolves when use() is called (setup phase complete)
		let resolveUseCalled;
		const useCalledPromise = new Promise((resolve) => {
			resolveUseCalled = resolve;
		});
		// Promise that resolves when use() returns (inner hooks complete, teardown phase starts)
		let resolveUseReturned;
		const useReturnedPromise = new Promise((resolve) => {
			resolveUseReturned = resolve;
		});
		// Promise that resolves when hook completes
		let resolveHookComplete;
		let rejectHookComplete;
		const hookCompletePromise = new Promise((resolve, reject) => {
			resolveHookComplete = resolve;
			rejectHookComplete = reject;
		});
		const use = async () => {
			// shouldn't continue to next (runTest/Suite or inner aroundEach/All) when aroundEach/All setup timed out.
			if (setupTimeout.isTimedOut()) {
				// we can throw any error to bail out.
				// this error is not seen by end users since `runNextHook` already rejected with timeout error
				// and this error is caught by `rejectHookComplete`.
				throw new Error("__VITEST_INTERNAL_AROUND_HOOK_ABORT__");
			}
			if (useCalled) {
				throw new AroundHookMultipleCallsError(`The \`${callbackName}\` callback was called multiple times in the \`${hookName}\` hook. ` + `The callback can only be called once per hook.`);
			}
			useCalled = true;
			resolveUseCalled();
			// Setup phase completed - clear setup timer
			setupTimeout.clear();
			setupLimitConcurrencyRelease?.();
			// Run inner hooks - don't time this against our teardown timeout
			await runNextHook(index + 1).catch((e) => hookErrors.push(e));
			teardownLimitConcurrencyRelease = await limitMaxConcurrency.acquire();
			// Start teardown timer after inner hooks complete - only times this hook's teardown code
			teardownTimeout = createTimeoutPromise(timeout, "teardown", stackTraceError);
			// Signal that use() is returning (teardown phase starting)
			resolveUseReturned();
		};
		setupLimitConcurrencyRelease = await limitMaxConcurrency.acquire();
		// Start setup timeout
		setupTimeout = createTimeoutPromise(timeout, "setup", stackTraceError);
		(async () => {
			try {
				await invokeHook(hook, use);
				if (!useCalled) {
					throw new AroundHookSetupError(`The \`${callbackName}\` callback was not called in the \`${hookName}\` hook. ` + `Make sure to call \`${callbackName}\` to run the ${hookName === "aroundEach" ? "test" : "suite"}.`);
				}
				resolveHookComplete();
			} catch (error) {
				rejectHookComplete(error);
			} finally {
				setupLimitConcurrencyRelease?.();
				teardownLimitConcurrencyRelease?.();
			}
		})();
		// Wait for either: use() to be called OR hook to complete (error) OR setup timeout
		try {
			await Promise.race([
				useCalledPromise,
				hookCompletePromise,
				setupTimeout.promise
			]);
		} finally {
			setupLimitConcurrencyRelease?.();
			setupTimeout.clear();
		}
		// Wait for use() to return (inner hooks complete) OR hook to complete (error during inner hooks)
		await Promise.race([useReturnedPromise, hookCompletePromise]);
		// Now teardownTimeout is guaranteed to be set
		// Wait for hook to complete (teardown) OR teardown timeout
		try {
			await Promise.race([hookCompletePromise, teardownTimeout?.promise]);
		} finally {
			teardownLimitConcurrencyRelease?.();
			teardownTimeout?.clear();
		}
	};
	await runNextHook(0).catch((e) => hookErrors.push(e));
	if (hookErrors.length > 0) {
		throw hookErrors;
	}
}
async function callAroundAllHooks(suite, runSuiteInner) {
	await callAroundHooks(runSuiteInner, {
		hooks: getAroundAllHooks(suite),
		hookName: "aroundAll",
		callbackName: "runSuite()",
		invokeHook: (hook, use) => hook(use, suite)
	});
}
async function callAroundEachHooks(suite, test, runTest) {
	await callAroundHooks(
		// Take checkpoint right before runTest - at this point all aroundEach fixtures
		// have been resolved, so we can correctly identify which fixtures belong to
		// aroundEach (before checkpoint) vs inside runTest (after checkpoint)
		() => runTest(getFixtureCleanupCount(test.context)),
		{
			hooks: getAroundEachHooks(suite),
			hookName: "aroundEach",
			callbackName: "runTest()",
			onTimeout: (error) => abortContextSignal(test.context, error),
			invokeHook: (hook, use) => hook(use, test.context, suite)
		}
	);
}
const packs = new Map();
const eventsPacks = [];
const pendingTasksUpdates = [];
function sendTasksUpdate(runner) {
	if (packs.size) {
		const taskPacks = Array.from(packs).map(([id, task]) => {
			return [
				id,
				task[0],
				task[1]
			];
		});
		const p = runner.onTaskUpdate?.(taskPacks, eventsPacks);
		if (p) {
			pendingTasksUpdates.push(p);
			// remove successful promise to not grow array indefinitely,
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
		pendingCall ??= setTimeout(() => call.bind(this)(...args), ms);
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
			await limitMaxConcurrency(() => fn());
		}));
	} else {
		for (const fn of cleanups) {
			if (typeof fn !== "function") {
				continue;
			}
			await limitMaxConcurrency(() => fn());
		}
	}
}
/**
* Determines if a test should be retried based on its retryCondition configuration
*/
function passesRetryCondition(test, errors) {
	const condition = getRetryCondition(test.retry);
	if (!errors || errors.length === 0) {
		return false;
	}
	if (!condition) {
		return true;
	}
	const error = errors[errors.length - 1];
	if (condition instanceof RegExp) {
		return condition.test(error.message || "");
	} else if (typeof condition === "function") {
		return condition(error);
	}
	return false;
}
async function runTest(test, runner) {
	await runner.onBeforeRunTask?.(test);
	if (test.mode !== "run" && test.mode !== "queued") {
		updateTask("test-prepare", test, runner);
		updateTask("test-finished", test, runner);
		return;
	}
	if (test.result?.state === "fail") {
		// should not be possible to get here, I think this is just copy pasted from suite
		// TODO: maybe someone fails tests in `beforeAll` hooks?
		// https://github.com/vitest-dev/vitest/pull/7069
		updateTask("test-failed-early", test, runner);
		return;
	}
	const start = now();
	test.result = {
		state: "run",
		startTime: unixNow(),
		retryCount: 0
	};
	updateTask("test-prepare", test, runner);
	const cleanupRunningTest = addRunningTest(test);
	setCurrentTest(test);
	const suite = test.suite || test.file;
	const $ = runner.trace;
	const repeats = test.repeats ?? 0;
	for (let repeatCount = 0; repeatCount <= repeats; repeatCount++) {
		const retry = getRetryCount(test.retry);
		for (let retryCount = 0; retryCount <= retry; retryCount++) {
			let beforeEachCleanups = [];
			// fixtureCheckpoint is passed by callAroundEachHooks - it represents the count
			// of fixture cleanup functions AFTER all aroundEach fixtures have been resolved
			// but BEFORE the test runs. This allows us to clean up only fixtures created
			// inside runTest while preserving aroundEach fixtures for teardown.
			await callAroundEachHooks(suite, test, async (fixtureCheckpoint) => {
				try {
					await runner.onBeforeTryTask?.(test, {
						retry: retryCount,
						repeats: repeatCount
					});
					test.result.repeatCount = repeatCount;
					beforeEachCleanups = await $("test.beforeEach", () => callSuiteHook(suite, test, "beforeEach", runner, [test.context, suite]));
					if (runner.runTask) {
						await $("test.callback", () => limitMaxConcurrency(() => runner.runTask(test)));
					} else {
						const fn = getFn(test);
						if (!fn) {
							throw new Error("Test function is not found. Did you add it using `setFn`?");
						}
						await $("test.callback", () => limitMaxConcurrency(() => fn()));
					}
					await runner.onAfterTryTask?.(test, {
						retry: retryCount,
						repeats: repeatCount
					});
					if (test.result.state !== "fail") {
						test.result.state = "pass";
					}
				} catch (e) {
					failTask(test.result, e, runner.config.diffOptions);
				}
				try {
					await runner.onTaskFinished?.(test);
				} catch (e) {
					failTask(test.result, e, runner.config.diffOptions);
				}
				try {
					await $("test.afterEach", () => callSuiteHook(suite, test, "afterEach", runner, [test.context, suite]));
					if (beforeEachCleanups.length) {
						await $("test.cleanup", () => callCleanupHooks(runner, beforeEachCleanups));
					}
					// Only clean up fixtures created inside runTest (after the checkpoint)
					// Fixtures created for aroundEach will be cleaned up after aroundEach teardown
					await callFixtureCleanupFrom(test.context, fixtureCheckpoint);
				} catch (e) {
					failTask(test.result, e, runner.config.diffOptions);
				}
				if (test.onFinished?.length) {
					await $("test.onFinished", () => callTestHooks(runner, test, test.onFinished, "stack"));
				}
				if (test.result.state === "fail" && test.onFailed?.length) {
					await $("test.onFailed", () => callTestHooks(runner, test, test.onFailed, runner.config.sequence.hooks));
				}
				test.onFailed = undefined;
				test.onFinished = undefined;
				await runner.onAfterRetryTask?.(test, {
					retry: retryCount,
					repeats: repeatCount
				});
			}).catch((error) => {
				failTask(test.result, error, runner.config.diffOptions);
			});
			// Clean up fixtures that were created for aroundEach (before the checkpoint)
			// This runs after aroundEach teardown has completed
			try {
				await callFixtureCleanup(test.context);
			} catch (e) {
				failTask(test.result, e, runner.config.diffOptions);
			}
			// skipped with new PendingError
			if (test.result?.pending || test.result?.state === "skip") {
				test.mode = "skip";
				test.result = {
					state: "skip",
					note: test.result?.note,
					pending: true,
					duration: now() - start
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
				const shouldRetry = passesRetryCondition(test, test.result.errors);
				if (!shouldRetry) {
					break;
				}
				test.result.state = "run";
				test.result.retryCount = (test.result.retryCount ?? 0) + 1;
				const delay = getRetryDelay(test.retry);
				if (delay > 0) {
					await new Promise((resolve) => setTimeout(resolve, delay));
				}
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
	test.result.duration = now() - start;
	await runner.onAfterRunTask?.(test);
	updateTask("test-finished", test, runner);
}
function failTask(result, err, diffOptions) {
	if (err instanceof PendingError) {
		result.state = "skip";
		result.note = err.note;
		result.pending = true;
		return;
	}
	if (err instanceof TestRunAbortError) {
		result.state = "skip";
		result.note = err.message;
		return;
	}
	result.state = "fail";
	const errors = Array.isArray(err) ? err : [err];
	for (const e of errors) {
		const errors = e instanceof AggregateError ? e.errors.map((e) => processError(e, diffOptions)) : [processError(e, diffOptions)];
		result.errors ??= [];
		result.errors.push(...errors);
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
function markPendingTasksAsSkipped(suite, runner, note) {
	suite.tasks.forEach((t) => {
		if (!t.result || t.result.state === "run") {
			t.mode = "skip";
			t.result = {
				...t.result,
				state: "skip",
				note
			};
			updateTask("test-cancel", t, runner);
		}
		if (t.type === "suite") {
			markPendingTasksAsSkipped(t, runner, note);
		}
	});
}
async function runSuite(suite, runner) {
	await runner.onBeforeRunSuite?.(suite);
	if (suite.result?.state === "fail") {
		markTasksAsSkipped(suite, runner);
		// failed during collection
		updateTask("suite-failed-early", suite, runner);
		return;
	}
	const start = now();
	const mode = suite.mode;
	suite.result = {
		state: mode === "skip" || mode === "todo" ? mode : "run",
		startTime: unixNow()
	};
	const $ = runner.trace;
	updateTask("suite-prepare", suite, runner);
	let beforeAllCleanups = [];
	if (suite.mode === "skip") {
		suite.result.state = "skip";
		updateTask("suite-finished", suite, runner);
	} else if (suite.mode === "todo") {
		suite.result.state = "todo";
		updateTask("suite-finished", suite, runner);
	} else {
		let suiteRan = false;
		try {
			await callAroundAllHooks(suite, async () => {
				suiteRan = true;
				try {
					// beforeAll
					try {
						beforeAllCleanups = await $("suite.beforeAll", () => callSuiteHook(suite, suite, "beforeAll", runner, [suite]));
					} catch (e) {
						failTask(suite.result, e, runner.config.diffOptions);
						markTasksAsSkipped(suite, runner);
						return;
					}
					// run suite children
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
				} finally {
					// afterAll runs even if beforeAll or suite children fail
					try {
						await $("suite.afterAll", () => callSuiteHook(suite, suite, "afterAll", runner, [suite]));
						if (beforeAllCleanups.length) {
							await $("suite.cleanup", () => callCleanupHooks(runner, beforeAllCleanups));
						}
						if (suite.file === suite) {
							const contexts = TestFixtures.getFileContexts(suite.file);
							await Promise.all(contexts.map((context) => callFixtureCleanup(context)));
						}
					} catch (e) {
						failTask(suite.result, e, runner.config.diffOptions);
					}
				}
			});
		} catch (e) {
			// mark tasks as skipped if aroundAll failed before the suite callback was executed
			if (!suiteRan) {
				markTasksAsSkipped(suite, runner);
			}
			failTask(suite.result, e, runner.config.diffOptions);
		}
		if (suite.mode === "run" || suite.mode === "queued") {
			if (!runner.config.passWithNoTests && !hasTests(suite)) {
				suite.result.state = "fail";
				if (!suite.result.errors?.length) {
					const error = processError(new Error(`No test found in suite ${suite.name}`));
					suite.result.errors = [error];
				}
			} else if (hasFailed(suite)) {
				suite.result.state = "fail";
			} else {
				suite.result.state = "pass";
			}
		}
		suite.result.duration = now() - start;
		await runner.onAfterRunSuite?.(suite);
		updateTask("suite-finished", suite, runner);
	}
}
async function runSuiteChild(c, runner) {
	const $ = runner.trace;
	if (c.type === "test") {
		return $("run.test", {
			"vitest.test.id": c.id,
			"vitest.test.name": c.name,
			"vitest.test.mode": c.mode,
			"vitest.test.timeout": c.timeout,
			"code.file.path": c.file.filepath,
			"code.line.number": c.location?.line,
			"code.column.number": c.location?.column
		}, () => runTest(c, runner));
	} else if (c.type === "suite") {
		return $("run.suite", {
			"vitest.suite.id": c.id,
			"vitest.suite.name": c.name,
			"vitest.suite.mode": c.mode,
			"code.file.path": c.file.filepath,
			"code.line.number": c.location?.line,
			"code.column.number": c.location?.column
		}, () => runSuite(c, runner));
	}
}
async function runFiles(files, runner) {
	limitMaxConcurrency ??= limitConcurrency(runner.config.maxConcurrency);
	for (const file of files) {
		if (!file.tasks.length && !runner.config.passWithNoTests) {
			if (!file.result?.errors?.length) {
				const error = processError(new Error(`No test suite found in file ${file.filepath}`));
				file.result = {
					state: "fail",
					errors: [error]
				};
			}
		}
		await runner.trace("run.spec", {
			"code.file.path": file.filepath,
			"vitest.suite.tasks.length": file.tasks.length
		}, () => runSuite(file, runner));
	}
}
const workerRunners = new WeakSet();
function defaultTrace(_, attributes, cb) {
	if (typeof attributes === "function") {
		return attributes();
	}
	return cb();
}
async function startTests(specs, runner) {
	runner.trace ??= defaultTrace;
	const cancel = runner.cancel?.bind(runner);
	// Ideally, we need to have an event listener for this, but only have a runner here.
	// Adding another onCancel felt wrong (maybe it needs to be refactored)
	runner.cancel = (reason) => {
		// We intentionally create only one error since there is only one test run that can be cancelled
		const error = new TestRunAbortError("The test run was aborted by the user.", reason);
		getRunningTests().forEach((test) => {
			abortContextSignal(test.context, error);
			markPendingTasksAsSkipped(test.file, runner, error.message);
		});
		return cancel?.(reason);
	};
	if (!workerRunners.has(runner)) {
		runner.onCleanupWorkerContext?.(async () => {
			await Promise.all([...TestFixtures.getWorkerContexts()].map((context) => callFixtureCleanup(context))).finally(() => {
				TestFixtures.clearDefinitions();
			});
		});
		workerRunners.add(runner);
	}
	try {
		const paths = specs.map((f) => typeof f === "string" ? f : f.filepath);
		await runner.onBeforeCollect?.(paths);
		const files = await collectTests(specs, runner);
		await runner.onCollected?.(files);
		await runner.onBeforeRunFiles?.(files);
		await runFiles(files, runner);
		await runner.onAfterRunFiles?.(files);
		await finishSendTasksUpdate(runner);
		return files;
	} finally {
		runner.cancel = cancel;
	}
}
async function publicCollect(specs, runner) {
	runner.trace ??= defaultTrace;
	const paths = specs.map((f) => typeof f === "string" ? f : f.filepath);
	await runner.onBeforeCollect?.(paths);
	const files = await collectTests(specs, runner);
	await runner.onCollected?.(files);
	return files;
}

/**
* @experimental
* @advanced
*
* Records a custom test artifact during test execution.
*
* This function allows you to attach structured data, files, or metadata to a test.
*
* Vitest automatically injects the source location where the artifact was created and manages any attachments you include.
*
* **Note:** artifacts must be recorded before the task is reported. Any artifacts recorded after that will not be included in the task.
*
* @param task - The test task context, typically accessed via `this.task` in custom matchers or `context.task` in tests
* @param artifact - The artifact to record. Must extend {@linkcode TestArtifactBase}
*
* @returns A promise that resolves to the recorded artifact with location injected
*
* @throws {Error} If the test runner doesn't support artifacts
*
* @example
* ```ts
* // In a custom assertion
* async function toHaveValidSchema(this: MatcherState, actual: unknown) {
*   const validation = validateSchema(actual)
*
*   await recordArtifact(this.task, {
*     type: 'my-plugin:schema-validation',
*     passed: validation.valid,
*     errors: validation.errors,
*   })
*
*   return { pass: validation.valid, message: () => '...' }
* }
* ```
*/
async function recordArtifact(task, artifact) {
	const runner = getRunner();
	const stack = findTestFileStackTrace(task.file.filepath, new Error("STACK_TRACE").stack);
	if (stack) {
		artifact.location = {
			file: stack.file,
			line: stack.line,
			column: stack.column
		};
		if (artifact.type === "internal:annotation") {
			artifact.annotation.location = artifact.location;
		}
	}
	if (Array.isArray(artifact.attachments)) {
		for (const attachment of artifact.attachments) {
			manageArtifactAttachment(attachment);
		}
	}
	// annotations won't resolve as artifacts for backwards compatibility until next major
	if (artifact.type === "internal:annotation") {
		return artifact;
	}
	if (!runner.onTestArtifactRecord) {
		throw new Error(`Test runner doesn't support test artifacts.`);
	}
	await finishSendTasksUpdate(runner);
	const resolvedArtifact = await runner.onTestArtifactRecord(task, artifact);
	task.artifacts.push(resolvedArtifact);
	return resolvedArtifact;
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
table.push("+", "/");
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
/**
* Records an async operation associated with a test task.
*
* This function tracks promises that should be awaited before a test completes.
* The promise is automatically removed from the test's promise list once it settles.
*/
function recordAsyncOperation(test, promise) {
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
/**
* Validates and prepares a test attachment for serialization.
*
* This function ensures attachments have either `body` or `path` set (but not both), and converts `Uint8Array` bodies to base64-encoded strings for easier serialization.
*
* @param attachment - The attachment to validate and prepare
*
* @throws {TypeError} If neither `body` nor `path` is provided
* @throws {TypeError} If both `body` and `path` are provided
*/
function manageArtifactAttachment(attachment) {
	if (attachment.body == null && !attachment.path) {
		throw new TypeError(`Test attachment requires "body" or "path" to be set. Both are missing.`);
	}
	if (attachment.body && attachment.path) {
		throw new TypeError(`Test attachment requires only one of "body" or "path" to be set. Both are specified.`);
	}
	if (attachment.path && attachment.bodyEncoding) {
		throw new TypeError(`Test attachment with "path" should not have "bodyEncoding" specified.`);
	}
	// convert to a string so it's easier to serialise
	if (attachment.body instanceof Uint8Array) {
		attachment.body = encodeUint8Array(attachment.body);
	}
	if (attachment.body != null) {
		attachment.bodyEncoding ??= "base64";
	}
}

export { createTagsFilter as A, createTaskName as B, findTestFileStackTrace as C, generateFileHash as D, generateHash as E, getFullName as F, getNames as G, getSuites as H, getTasks as I, getTestName as J, getTests as K, hasFailed as L, hasTests as M, interpretTaskModes as N, isTestCase as O, limitConcurrency as P, matchesTags as Q, partitionSuiteChildren as R, someTasksAreOnly as S, validateTags as T, afterAll as a, afterEach as b, aroundAll as c, aroundEach as d, beforeAll as e, beforeEach as f, createTaskCollector as g, describe as h, getCurrentSuite as i, getCurrentTest as j, getFn as k, getHooks as l, it as m, onTestFinished as n, onTestFailed as o, publicCollect as p, setHooks as q, recordArtifact as r, setFn as s, startTests as t, suite as u, test as v, updateTask as w, calculateSuiteHash as x, createChainable as y, createFileTask as z };
