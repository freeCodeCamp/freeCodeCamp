import { getSafeTimers } from '@vitest/utils';

const NAME_WORKER_STATE = "__vitest_worker__";
function getWorkerState() {
	// @ts-expect-error untyped global
	const workerState = globalThis[NAME_WORKER_STATE];
	if (!workerState) {
		const errorMsg = "Vitest failed to access its internal state.\n\nOne of the following is possible:\n- \"vitest\" is imported directly without running \"vitest\" command\n- \"vitest\" is imported inside \"globalSetup\" (to fix this, use \"setupFiles\" instead, because \"globalSetup\" runs in a different context)\n- \"vitest\" is imported inside Vite / Vitest config file\n- Otherwise, it might be a Vitest bug. Please report it to https://github.com/vitest-dev/vitest/issues\n";
		throw new Error(errorMsg);
	}
	return workerState;
}
function provideWorkerState(context, state) {
	Object.defineProperty(context, NAME_WORKER_STATE, {
		value: state,
		configurable: true,
		writable: true,
		enumerable: false
	});
	return state;
}
function getCurrentEnvironment() {
	const state = getWorkerState();
	return state?.environment.name;
}
function isChildProcess() {
	return typeof process !== "undefined" && !!process.send;
}
function setProcessTitle(title) {
	try {
		process.title = `node (${title})`;
	} catch {}
}
function resetModules(modules, resetMocks = false) {
	const skipPaths = [
		/\/vitest\/dist\//,
		/\/vite-node\/dist\//,
		/vitest-virtual-\w+\/dist/,
		/@vitest\/dist/,
		...!resetMocks ? [/^mock:/] : []
	];
	modules.forEach((mod, path) => {
		if (skipPaths.some((re) => re.test(path))) return;
		modules.invalidateModule(mod);
	});
}
function waitNextTick() {
	const { setTimeout } = getSafeTimers();
	return new Promise((resolve) => setTimeout(resolve, 0));
}
async function waitForImportsToResolve() {
	await waitNextTick();
	const state = getWorkerState();
	const promises = [];
	let resolvingCount = 0;
	for (const mod of state.moduleCache.values()) {
		if (mod.promise && !mod.evaluated) promises.push(mod.promise);
		if (mod.resolving) resolvingCount++;
	}
	if (!promises.length && !resolvingCount) return;
	await Promise.allSettled(promises);
	await waitForImportsToResolve();
}

export { getCurrentEnvironment as a, getWorkerState as g, isChildProcess as i, provideWorkerState as p, resetModules as r, setProcessTitle as s, waitForImportsToResolve as w };
