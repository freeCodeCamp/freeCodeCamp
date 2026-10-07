import { getCurrentSuite } from '@vitest/runner';
import { createChainable } from '@vitest/runner/utils';
import { noop } from '@vitest/utils/helpers';
import { g as getWorkerState } from './utils.BX5Fg8C4.js';

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
	// vitest runner sets mode to `todo` if handler is not passed down
	// but we store handler separately
	if (!this.todo && task.mode === "todo") task.mode = "run";
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
