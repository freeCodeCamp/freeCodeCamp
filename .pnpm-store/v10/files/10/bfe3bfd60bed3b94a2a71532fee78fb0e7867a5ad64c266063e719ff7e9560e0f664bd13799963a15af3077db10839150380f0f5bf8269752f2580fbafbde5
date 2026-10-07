import { runInThisContext } from 'node:vm';
import * as spyModule from '@vitest/spy';
import { r as resolveTestRunner, a as resolveSnapshotEnvironment, d as detectAsyncLeaks, s as setupChaiConfig } from './index.DXx9Dtk7.js';
import { l as loadEnvironment, e as emitModuleRunner, a as listenForErrors } from './init.D98-gwRW.js';
import { N as NativeModuleRunner } from './nativeModuleRunner.BIakptoF.js';
import { T as Traces } from './traces.DT5aQ62U.js';
import { V as VitestEvaluatedModules } from './evaluatedModules.Dg1zASAC.js';
import { s as startVitestModuleRunner, c as createNodeImportMeta } from './startVitestModuleRunner.bRl2_oI_.js';
import { performance as performance$1 } from 'node:perf_hooks';
import { startTests, collectTests } from '@vitest/runner';
import { s as setupCommonEnv, b as startCoverageInsideWorker, c as stopCoverageInsideWorker } from './setup-common.DYx3LtFI.js';
import { g as globalExpect, v as vi } from './test.DNmyFkvJ.js';
import { c as closeInspector } from './inspector.CvyFGlXm.js';
import { createRequire } from 'node:module';
import timers from 'node:timers';
import timersPromises from 'node:timers/promises';
import util from 'node:util';
import { KNOWN_ASSET_TYPES } from '@vitest/utils/constants';
import { i as index } from './index.DdgEv5B1.js';
import { g as getWorkerState, r as resetModules, p as provideWorkerState, a as getSafeWorkerState } from './utils.BX5Fg8C4.js';

// this should only be used in Node
let globalSetup = false;
async function setupGlobalEnv(config, environment) {
	await setupCommonEnv(config);
	Object.defineProperty(globalThis, "__vitest_index__", {
		value: index,
		enumerable: false
	});
	globalExpect.setState({ environment: environment.name });
	if (globalSetup) return;
	globalSetup = true;
	if ((environment.viteEnvironment || environment.name) === "client") {
		const _require = createRequire(import.meta.url);
		// always mock "required" `css` files, because we cannot process them
		_require.extensions[".css"] = resolveCss;
		_require.extensions[".scss"] = resolveCss;
		_require.extensions[".sass"] = resolveCss;
		_require.extensions[".less"] = resolveCss;
		// since we are using Vite, we can assume how these will be resolved
		KNOWN_ASSET_TYPES.forEach((type) => {
			_require.extensions[`.${type}`] = resolveAsset;
		});
		process.env.SSR = "";
	} else process.env.SSR = "1";
	// @ts-expect-error not typed global for patched timers
	globalThis.__vitest_required__ = {
		util,
		timers,
		timersPromises
	};
	if (!config.disableConsoleIntercept) await setupConsoleLogSpy();
}
function resolveCss(mod) {
	mod.exports = "";
}
function resolveAsset(mod, url) {
	mod.exports = url;
}
async function setupConsoleLogSpy() {
	const { createCustomConsole } = await import('./console.3WNpx0tS.js');
	globalThis.console = createCustomConsole();
}

// browser shouldn't call this!
async function run(method, files, config, moduleRunner, environment, traces) {
	const workerState = getWorkerState();
	const [testRunner] = await Promise.all([
		traces.$("vitest.runtime.runner", () => resolveTestRunner(config, moduleRunner, traces)),
		traces.$("vitest.runtime.global_env", () => setupGlobalEnv(config, environment)),
		traces.$("vitest.runtime.coverage.start", () => startCoverageInsideWorker(config.coverage, moduleRunner, { isolate: config.isolate })),
		traces.$("vitest.runtime.snapshot.environment", async () => {
			if (!workerState.config.snapshotOptions.snapshotEnvironment) workerState.config.snapshotOptions.snapshotEnvironment = await resolveSnapshotEnvironment(config, moduleRunner);
		})
	]);
	workerState.onCancel((reason) => {
		closeInspector(config);
		testRunner.cancel?.(reason);
	});
	workerState.durations.prepare = performance$1.now() - workerState.durations.prepare;
	await traces.$(`vitest.test.runner.${method}`, async () => {
		for (const file of files) {
			if (config.isolate) {
				moduleRunner.mocker?.reset();
				resetModules(workerState.evaluatedModules, true);
			}
			workerState.filepath = file.filepath;
			if (method === "run") {
				const collectAsyncLeaks = config.detectAsyncLeaks ? detectAsyncLeaks(file.filepath, workerState.ctx.projectName) : void 0;
				await traces.$(`vitest.test.runner.${method}.module`, { attributes: { "code.file.path": file.filepath } }, () => startTests([file], testRunner));
				const leaks = await collectAsyncLeaks?.();
				if (leaks?.length) workerState.rpc.onAsyncLeaks(leaks);
			} else await traces.$(`vitest.test.runner.${method}.module`, { attributes: { "code.file.path": file.filepath } }, () => collectTests([file], testRunner));
			// reset after tests, because user might call `vi.setConfig` in setupFile
			vi.resetConfig();
			// mocks should not affect different files
			vi.restoreAllMocks();
		}
	});
	await traces.$("vitest.runtime.coverage.stop", () => stopCoverageInsideWorker(config.coverage, moduleRunner, { isolate: config.isolate }));
}

let _moduleRunner;
const evaluatedModules = new VitestEvaluatedModules();
const moduleExecutionInfo = /* @__PURE__ */ new Map();
async function startModuleRunner(options) {
	if (_moduleRunner) return _moduleRunner;
	process.exit = (code = process.exitCode || 0) => {
		throw new Error(`process.exit unexpectedly called with "${code}"`);
	};
	const state = () => getSafeWorkerState() || options.state;
	listenForErrors(state);
	if (options.state.config.experimental.viteModuleRunner === false) {
		const root = options.state.config.root;
		let mocker;
		if (options.state.config.experimental.nodeLoader !== false) {
			// this additionally imports acorn/magic-string
			const { NativeModuleMocker } = await import('./nativeModuleMocker.BRN2oBJd.js');
			mocker = new NativeModuleMocker({
				async resolveId(id, importer) {
					// TODO: use import.meta.resolve instead
					return state().rpc.resolve(id, importer, "__vitest__");
				},
				root,
				moduleDirectories: state().config.deps.moduleDirectories || ["/node_modules/"],
				traces: options.traces || new Traces({ enabled: false }),
				getCurrentTestFilepath() {
					return state().filepath;
				},
				spyModule
			});
		}
		_moduleRunner = new NativeModuleRunner(root, mocker);
		return _moduleRunner;
	}
	_moduleRunner = startVitestModuleRunner(options);
	return _moduleRunner;
}
let _currentEnvironment;
let _environmentTime;
/** @experimental */
async function setupBaseEnvironment(context) {
	if (context.config.experimental.viteModuleRunner === false) {
		const { setupNodeLoaderHooks } = await import('./native.DPzPHdi5.js');
		await setupNodeLoaderHooks(context);
	}
	const startTime = performance.now();
	const { environment: { name: environmentName, options: environmentOptions }, rpc, config } = context;
	// we could load @vite/env, but it would take ~8ms, while this takes ~0,02ms
	if (context.config.serializedDefines) try {
		runInThisContext(`(() =>{\n${context.config.serializedDefines}})()`, {
			lineOffset: 1,
			filename: "virtual:load-defines.js"
		});
	} catch (error) {
		throw new Error(`Failed to load custom "defines": ${error.message}`);
	}
	const otel = context.traces;
	const { environment, loader } = await loadEnvironment(environmentName, config.root, rpc, otel, context.config.experimental.viteModuleRunner);
	_currentEnvironment = environment;
	const env = await otel.$("vitest.runtime.environment.setup", { attributes: {
		"vitest.environment": environment.name,
		"vitest.environment.vite_environment": environment.viteEnvironment || environment.name
	} }, () => environment.setup(globalThis, environmentOptions || config.environmentOptions || {}));
	_environmentTime = performance.now() - startTime;
	if (config.chaiConfig) setupChaiConfig(config.chaiConfig);
	return async () => {
		await otel.$("vitest.runtime.environment.teardown", () => env.teardown(globalThis));
		await loader?.close();
	};
}
/** @experimental */
async function runBaseTests(method, state, traces) {
	const { ctx } = state;
	state.environment = _currentEnvironment;
	state.durations.environment = _environmentTime;
	// state has new context, but we want to reuse existing ones
	state.evaluatedModules = evaluatedModules;
	state.moduleExecutionInfo = moduleExecutionInfo;
	provideWorkerState(globalThis, state);
	if (ctx.invalidates) ctx.invalidates.forEach((filepath) => {
		(state.evaluatedModules.fileToModulesMap.get(filepath) || []).forEach((module) => {
			state.evaluatedModules.invalidateModule(module);
		});
	});
	ctx.files.forEach((i) => {
		const filepath = i.filepath;
		(state.evaluatedModules.fileToModulesMap.get(filepath) || []).forEach((module) => {
			state.evaluatedModules.invalidateModule(module);
		});
	});
	const moduleRunner = await startModuleRunner({
		state,
		evaluatedModules: state.evaluatedModules,
		spyModule,
		createImportMeta: createNodeImportMeta,
		traces
	});
	emitModuleRunner(moduleRunner);
	await run(method, ctx.files, ctx.config, moduleRunner, _currentEnvironment, traces);
}

export { runBaseTests as r, setupBaseEnvironment as s };
