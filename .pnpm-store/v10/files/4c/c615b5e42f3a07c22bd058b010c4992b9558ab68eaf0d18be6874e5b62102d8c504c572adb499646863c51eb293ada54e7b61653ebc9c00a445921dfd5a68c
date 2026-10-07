import { createRequire } from 'node:module';
import { performance } from 'node:perf_hooks';
import timers from 'node:timers';
import timersPromises from 'node:timers/promises';
import util from 'node:util';
import { startTests, collectTests } from '@vitest/runner';
import { KNOWN_ASSET_TYPES } from '@vitest/utils/constants';
import { s as setupChaiConfig, r as resolveTestRunner, a as resolveSnapshotEnvironment, d as detectAsyncLeaks } from '../chunks/index.DXx9Dtk7.js';
import { s as setupCommonEnv, b as startCoverageInsideWorker, c as stopCoverageInsideWorker } from '../chunks/setup-common.DYx3LtFI.js';
import { i as index } from '../chunks/index.DdgEv5B1.js';
import { c as closeInspector } from '../chunks/inspector.CvyFGlXm.js';
import { g as getWorkerState } from '../chunks/utils.BX5Fg8C4.js';
import { g as globalExpect } from '../chunks/test.DNmyFkvJ.js';
import '@vitest/expect';
import 'node:async_hooks';
import '../chunks/rpc.MzXet3jl.js';
import '@vitest/utils/timers';
import '../chunks/index.Chj8NDwU.js';
import '../chunks/coverage.CTzCuANN.js';
import '@vitest/snapshot';
import '../chunks/benchmark.CX_oY03V.js';
import '@vitest/runner/utils';
import '@vitest/utils/helpers';
import '../chunks/evaluatedModules.Dg1zASAC.js';
import 'pathe';
import 'vite/module-runner';
import 'expect-type';
import 'node:url';
import '@vitest/utils/error';
import '@vitest/spy';
import '@vitest/utils/offset';
import '@vitest/utils/source-map';
import '../chunks/_commonjsHelpers.D26ty3Ew.js';

async function run(method, files, config, moduleRunner, traces) {
	const workerState = getWorkerState();
	await traces.$("vitest.runtime.global_env", () => setupCommonEnv(config));
	Object.defineProperty(globalThis, "__vitest_index__", {
		value: index,
		enumerable: false
	});
	const viteEnvironment = workerState.environment.viteEnvironment || workerState.environment.name;
	globalExpect.setState({ environment: workerState.environment.name });
	if (viteEnvironment === "client") {
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
	await traces.$("vitest.runtime.coverage.start", () => startCoverageInsideWorker(config.coverage, moduleRunner, { isolate: false }));
	if (config.chaiConfig) setupChaiConfig(config.chaiConfig);
	const [testRunner, snapshotEnvironment] = await Promise.all([traces.$("vitest.runtime.runner", () => resolveTestRunner(config, moduleRunner, traces)), traces.$("vitest.runtime.snapshot.environment", () => resolveSnapshotEnvironment(config, moduleRunner))]);
	config.snapshotOptions.snapshotEnvironment = snapshotEnvironment;
	workerState.onCancel((reason) => {
		closeInspector(config);
		testRunner.cancel?.(reason);
	});
	workerState.durations.prepare = performance.now() - workerState.durations.prepare;
	const { vi } = index;
	await traces.$(`vitest.test.runner.${method}`, async () => {
		for (const file of files) {
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
	await traces.$("vitest.runtime.coverage.stop", () => stopCoverageInsideWorker(config.coverage, moduleRunner, { isolate: false }));
}
function resolveCss(mod) {
	mod.exports = "";
}
function resolveAsset(mod, url) {
	mod.exports = url;
}

export { run };
