import { performance } from 'node:perf_hooks';
import { startTests, collectTests } from '@vitest/runner';
import { a as resolveSnapshotEnvironment, s as setupChaiConfig, r as resolveTestRunner } from './index.CwejwG0H.js';
import { c as setupCommonEnv, s as startCoverageInsideWorker, a as stopCoverageInsideWorker } from './setup-common.Dd054P77.js';
import { a as globalExpect, v as vi } from './vi.bdSIJ99Y.js';
import { c as closeInspector } from './inspector.C914Efll.js';
import { createRequire } from 'node:module';
import timers from 'node:timers';
import timersPromises from 'node:timers/promises';
import util from 'node:util';
import { getSafeTimers } from '@vitest/utils';
import { KNOWN_ASSET_TYPES } from 'vite-node/constants';
import { installSourcemapsSupport } from 'vite-node/source-map';
import { V as VitestIndex } from './index.CdQS2e2Q.js';
import { g as getWorkerState, r as resetModules } from './utils.XdZDrNZV.js';
import 'chai';
import 'node:path';
import '../path.js';
import 'node:url';
import './rpc.-pEldfrD.js';
import './index.B521nVV-.js';
import './coverage.DVF1vEu8.js';
import '@vitest/snapshot';
import '@vitest/expect';
import '@vitest/runner/utils';
import './_commonjsHelpers.BFTU3MAI.js';
import '@vitest/utils/error';
import '@vitest/spy';
import '@vitest/utils/source-map';
import './date.Bq6ZW5rf.js';
import './benchmark.CYdenmiT.js';
import 'expect-type';

// this should only be used in Node
let globalSetup = false;
async function setupGlobalEnv(config, { environment }, executor) {
	await setupCommonEnv(config);
	Object.defineProperty(globalThis, "__vitest_index__", {
		value: VitestIndex,
		enumerable: false
	});
	const state = getWorkerState();
	if (!state.config.snapshotOptions.snapshotEnvironment) state.config.snapshotOptions.snapshotEnvironment = await resolveSnapshotEnvironment(config, executor);
	if (globalSetup) return;
	globalSetup = true;
	if (environment.transformMode === "web") {
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
	installSourcemapsSupport({ getSourceMap: (source) => state.moduleCache.getSourceMap(source) });
	if (!config.disableConsoleIntercept) await setupConsoleLogSpy();
}
function resolveCss(mod) {
	mod.exports = "";
}
function resolveAsset(mod, url) {
	mod.exports = url;
}
async function setupConsoleLogSpy() {
	const { createCustomConsole } = await import('./console.CtFJOzRO.js');
	globalThis.console = createCustomConsole();
}
async function withEnv({ environment }, options, fn) {
	// @ts-expect-error untyped global
	globalThis.__vitest_environment__ = environment.name;
	globalExpect.setState({ environment: environment.name });
	const env = await environment.setup(globalThis, options);
	try {
		await fn();
	} finally {
		// Run possible setTimeouts, e.g. the onces used by ConsoleLogSpy
		const { setTimeout } = getSafeTimers();
		await new Promise((resolve) => setTimeout(resolve));
		await env.teardown(globalThis);
	}
}

// browser shouldn't call this!
async function run(method, files, config, environment, executor) {
	const workerState = getWorkerState();
	const isIsolatedThreads = config.pool === "threads" && (config.poolOptions?.threads?.isolate ?? true);
	const isIsolatedForks = config.pool === "forks" && (config.poolOptions?.forks?.isolate ?? true);
	const isolate = isIsolatedThreads || isIsolatedForks;
	await setupGlobalEnv(config, environment, executor);
	await startCoverageInsideWorker(config.coverage, executor, { isolate });
	if (config.chaiConfig) setupChaiConfig(config.chaiConfig);
	const runner = await resolveTestRunner(config, executor);
	workerState.onCancel.then((reason) => {
		closeInspector(config);
		runner.cancel?.(reason);
	});
	workerState.durations.prepare = performance.now() - workerState.durations.prepare;
	workerState.durations.environment = performance.now();
	await withEnv(environment, environment.options || config.environmentOptions || {}, async () => {
		workerState.durations.environment = performance.now() - workerState.durations.environment;
		for (const file of files) {
			if (isolate) {
				executor.mocker.reset();
				resetModules(workerState.moduleCache, true);
			}
			workerState.filepath = file.filepath;
			if (method === "run") await startTests([file], runner);
			else await collectTests([file], runner);
			// reset after tests, because user might call `vi.setConfig` in setupFile
			vi.resetConfig();
			// mocks should not affect different files
			vi.restoreAllMocks();
		}
		await stopCoverageInsideWorker(config.coverage, executor, { isolate });
	});
	workerState.environmentTeardownRun = true;
}

export { run };
