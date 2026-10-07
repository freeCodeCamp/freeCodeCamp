import { getCurrentSuite } from '@vitest/runner';
import { createChainable } from '@vitest/runner/utils';
import { noop } from '@vitest/utils';
import { g as getWorkerState } from './utils.XdZDrNZV.js';

const benchFns = /* @__PURE__ */ new WeakMap();
const benchOptsMap = /* @__PURE__ */ new WeakMap();
function getBenchOptions(key) {
	return benchOptsMap.get(key);
}
function getBenchFn(key) {
	return benchFns.get(key);
}
const bench = createBenchmark(function(name, fn = noop, options = {}) {
	if (getWorkerState().config.mode !== "benchmark") throw new Error("`bench()` is only available in benchmark mode.");
	const task = getCurrentSuite().task(formatName(name), {
		...this,
		meta: { benchmark: true }
	});
	benchFns.set(task, fn);
	benchOptsMap.set(task, options);
});
function createBenchmark(fn) {
	const benchmark = createChainable([
		"skip",
		"only",
		"todo"
	], fn);
	benchmark.skipIf = (condition) => condition ? benchmark.skip : benchmark;
	benchmark.runIf = (condition) => condition ? benchmark : benchmark.skip;
	return benchmark;
}
function formatName(name) {
	return typeof name === "string" ? name : typeof name === "function" ? name.name || "<anonymous>" : String(name);
}

export { getBenchOptions as a, bench as b, getBenchFn as g };
