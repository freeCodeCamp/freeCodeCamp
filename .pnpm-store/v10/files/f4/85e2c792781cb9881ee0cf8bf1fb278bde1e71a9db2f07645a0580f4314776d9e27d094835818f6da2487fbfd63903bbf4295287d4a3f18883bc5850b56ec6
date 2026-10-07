import { createRequire } from 'node:module';
import { performance } from 'node:perf_hooks';
import timers from 'node:timers';
import timersPromises from 'node:timers/promises';
import util from 'node:util';
import { startTests, collectTests } from '@vitest/runner';
import { KNOWN_ASSET_TYPES } from 'vite-node/constants';
import { installSourcemapsSupport } from 'vite-node/source-map';
import { s as setupChaiConfig, r as resolveTestRunner, a as resolveSnapshotEnvironment } from '../chunks/index.CwejwG0H.js';
import { c as setupCommonEnv, s as startCoverageInsideWorker, a as stopCoverageInsideWorker } from '../chunks/setup-common.Dd054P77.js';
import { V as VitestIndex } from '../chunks/index.CdQS2e2Q.js';
import { c as closeInspector } from '../chunks/inspector.C914Efll.js';
import { g as getWorkerState } from '../chunks/utils.XdZDrNZV.js';
import 'chai';
import 'node:path';
import '../path.js';
import 'node:url';
import '../chunks/rpc.-pEldfrD.js';
import '@vitest/utils';
import '../chunks/index.B521nVV-.js';
import '../chunks/coverage.DVF1vEu8.js';
import '@vitest/snapshot';
import '../chunks/vi.bdSIJ99Y.js';
import '@vitest/expect';
import '@vitest/runner/utils';
import '../chunks/_commonjsHelpers.BFTU3MAI.js';
import '@vitest/utils/error';
import '@vitest/spy';
import '@vitest/utils/source-map';
import '../chunks/date.Bq6ZW5rf.js';
import '../chunks/benchmark.CYdenmiT.js';
import 'expect-type';

async function run(method, files, config, executor) {
	const workerState = getWorkerState();
	await setupCommonEnv(config);
	Object.defineProperty(globalThis, "__vitest_index__", {
		value: VitestIndex,
		enumerable: false
	});
	if (workerState.environment.transformMode === "web") {
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
	installSourcemapsSupport({ getSourceMap: (source) => workerState.moduleCache.getSourceMap(source) });
	await startCoverageInsideWorker(config.coverage, executor, { isolate: false });
	if (config.chaiConfig) setupChaiConfig(config.chaiConfig);
	const [runner, snapshotEnvironment] = await Promise.all([resolveTestRunner(config, executor), resolveSnapshotEnvironment(config, executor)]);
	config.snapshotOptions.snapshotEnvironment = snapshotEnvironment;
	runner.getWorkerContext = void 0;
	workerState.onCancel.then((reason) => {
		closeInspector(config);
		runner.cancel?.(reason);
	});
	workerState.durations.prepare = performance.now() - workerState.durations.prepare;
	const { vi } = VitestIndex;
	for (const file of files) {
		workerState.filepath = file.filepath;
		if (method === "run") await startTests([file], runner);
		else await collectTests([file], runner);
		// reset after tests, because user might call `vi.setConfig` in setupFile
		vi.resetConfig();
		// mocks should not affect different files
		vi.restoreAllMocks();
	}
	await stopCoverageInsideWorker(config.coverage, executor, { isolate: false });
}
function resolveCss(mod) {
	mod.exports = "";
}
function resolveAsset(mod, url) {
	mod.exports = url;
}

export { run };
