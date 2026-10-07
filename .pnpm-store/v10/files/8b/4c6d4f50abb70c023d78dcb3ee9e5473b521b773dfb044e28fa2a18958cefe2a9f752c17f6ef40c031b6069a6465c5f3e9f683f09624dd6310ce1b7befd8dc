import { pathToFileURL } from 'node:url';
import { createStackString, parseStacktrace } from '@vitest/utils/source-map';
import { workerId } from 'tinypool';
import { ViteNodeRunner, ModuleCacheMap } from 'vite-node/client';
import { readFileSync } from 'node:fs';
import { resolve, normalize } from 'pathe';
import { e as environments } from './chunks/index.CmSc2RE5.js';
import { s as setupInspect } from './chunks/inspector.C914Efll.js';
import { c as createRuntimeRpc, a as rpcDone } from './chunks/rpc.-pEldfrD.js';
import { i as isChildProcess, s as setProcessTitle } from './chunks/utils.XdZDrNZV.js';
import { d as disposeInternalListeners } from './chunks/utils.CAioKnHs.js';
import 'node:console';
import 'node:module';
import '@vitest/utils';
import './chunks/index.B521nVV-.js';

function isBuiltinEnvironment(env) {
	return env in environments;
}
const _loaders = /* @__PURE__ */ new Map();
async function createEnvironmentLoader(options) {
	if (!_loaders.has(options.root)) {
		const loader = new ViteNodeRunner(options);
		await loader.executeId("/@vite/env");
		_loaders.set(options.root, loader);
	}
	return _loaders.get(options.root);
}
async function loadEnvironment(ctx, rpc) {
	const name = ctx.environment.name;
	if (isBuiltinEnvironment(name)) return environments[name];
	const loader = await createEnvironmentLoader({
		root: ctx.config.root,
		fetchModule: async (id) => {
			const result = await rpc.fetch(id, "ssr");
			if (result.id) return { code: readFileSync(result.id, "utf-8") };
			return result;
		},
		resolveId: (id, importer) => rpc.resolveId(id, importer, "ssr")
	});
	const root = loader.root;
	const packageId = name[0] === "." || name[0] === "/" ? resolve(root, name) : (await rpc.resolveId(`vitest-environment-${name}`, void 0, "ssr"))?.id ?? resolve(root, name);
	const pkg = await loader.executeId(normalize(packageId));
	if (!pkg || !pkg.default || typeof pkg.default !== "object") throw new TypeError(`Environment "${name}" is not a valid environment. Path "${packageId}" should export default object with a "setup" or/and "setupVM" method.`);
	const environment = pkg.default;
	if (environment.transformMode !== "web" && environment.transformMode !== "ssr") throw new TypeError(`Environment "${name}" is not a valid environment. Path "${packageId}" should export default object with a "transformMode" method equal to "ssr" or "web".`);
	return environment;
}

const listeners = /* @__PURE__ */ new Set();
function addCleanupListener(listener) {
	listeners.add(listener);
}
async function cleanup() {
	const promises = [...listeners].map((l) => l());
	await Promise.all(promises);
}

if (isChildProcess()) {
	setProcessTitle(`vitest ${workerId}`);
	const isProfiling = process.execArgv.some((execArg) => execArg.startsWith("--prof") || execArg.startsWith("--cpu-prof") || execArg.startsWith("--heap-prof") || execArg.startsWith("--diagnostic-dir"));
	if (isProfiling)
 // Work-around for nodejs/node#55094
	process.on("SIGTERM", () => {
		process.exit();
	});
}
// this is what every pool executes when running tests
async function execute(method, ctx) {
	disposeInternalListeners();
	const prepareStart = performance.now();
	const inspectorCleanup = setupInspect(ctx);
	process.env.VITEST_WORKER_ID = String(ctx.workerId);
	process.env.VITEST_POOL_ID = String(workerId);
	try {
		// worker is a filepath or URL to a file that exposes a default export with "getRpcOptions" and "runTests" methods
		if (ctx.worker[0] === ".") throw new Error(`Path to the test runner cannot be relative, received "${ctx.worker}"`);
		const file = ctx.worker.startsWith("file:") ? ctx.worker : pathToFileURL(ctx.worker).toString();
		const testRunnerModule = await import(file);
		if (!testRunnerModule.default || typeof testRunnerModule.default !== "object") throw new TypeError(`Test worker object should be exposed as a default export. Received "${typeof testRunnerModule.default}"`);
		const worker = testRunnerModule.default;
		if (!worker.getRpcOptions || typeof worker.getRpcOptions !== "function") throw new TypeError(`Test worker should expose "getRpcOptions" method. Received "${typeof worker.getRpcOptions}".`);
		// RPC is used to communicate between worker (be it a thread worker or child process or a custom implementation) and the main thread
		const { rpc, onCancel } = createRuntimeRpc(worker.getRpcOptions(ctx));
		const beforeEnvironmentTime = performance.now();
		const environment = await loadEnvironment(ctx, rpc);
		if (ctx.environment.transformMode) environment.transformMode = ctx.environment.transformMode;
		const state = {
			ctx,
			moduleCache: new ModuleCacheMap(),
			moduleExecutionInfo: /* @__PURE__ */ new Map(),
			config: ctx.config,
			onCancel,
			environment,
			durations: {
				environment: beforeEnvironmentTime,
				prepare: prepareStart
			},
			rpc,
			onCleanup: (listener) => addCleanupListener(listener),
			providedContext: ctx.providedContext,
			onFilterStackTrace(stack) {
				return createStackString(parseStacktrace(stack));
			}
		};
		const methodName = method === "collect" ? "collectTests" : "runTests";
		if (!worker[methodName] || typeof worker[methodName] !== "function") throw new TypeError(`Test worker should expose "runTests" method. Received "${typeof worker.runTests}".`);
		await worker[methodName](state);
	} finally {
		await rpcDone().catch(() => {});
		inspectorCleanup();
	}
}
function run(ctx) {
	return execute("run", ctx);
}
function collect(ctx) {
	return execute("collect", ctx);
}
async function teardown() {
	return cleanup();
}

export { collect, run, teardown };
