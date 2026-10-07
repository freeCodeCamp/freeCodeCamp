import { r as resolveCoverageProviderModule } from './coverage.CTzCuANN.js';
import { addSerializer } from '@vitest/snapshot';
import { setSafeTimers } from '@vitest/utils/timers';
import { g as getWorkerState } from './utils.BX5Fg8C4.js';

async function startCoverageInsideWorker(options, loader, runtimeOptions) {
	const coverageModule = await resolveCoverageProviderModule(options, loader);
	if (coverageModule) return coverageModule.startCoverage?.(runtimeOptions);
	return null;
}
async function takeCoverageInsideWorker(options, loader) {
	const coverageModule = await resolveCoverageProviderModule(options, loader);
	if (coverageModule) return coverageModule.takeCoverage?.({ moduleExecutionInfo: loader.moduleExecutionInfo });
	return null;
}
async function stopCoverageInsideWorker(options, loader, runtimeOptions) {
	const coverageModule = await resolveCoverageProviderModule(options, loader);
	if (coverageModule) return coverageModule.stopCoverage?.(runtimeOptions);
	return null;
}

let globalSetup = false;
async function setupCommonEnv(config) {
	setupDefines(config);
	setupEnv(config.env);
	if (globalSetup) return;
	globalSetup = true;
	setSafeTimers();
	if (config.globals) (await import('./globals.Dj1TGiMC.js')).registerApiGlobally();
}
function setupDefines(config) {
	for (const key in config.defines) globalThis[key] = config.defines[key];
}
function setupEnv(env) {
	const state = getWorkerState();
	// same boolean-to-string assignment as VitestPlugin.configResolved
	const { PROD, DEV, ...restEnvs } = env;
	state.metaEnv.PROD = PROD;
	state.metaEnv.DEV = DEV;
	for (const key in restEnvs) state.metaEnv[key] = env[key];
}
async function loadDiffConfig(config, moduleRunner) {
	if (typeof config.diff === "object") return config.diff;
	if (typeof config.diff !== "string") return;
	const diffModule = await moduleRunner.import(config.diff);
	if (diffModule && typeof diffModule.default === "object" && diffModule.default != null) return diffModule.default;
	else throw new Error(`invalid diff config file ${config.diff}. Must have a default export with config object`);
}
async function loadSnapshotSerializers(config, moduleRunner) {
	const files = config.snapshotSerializers;
	(await Promise.all(files.map(async (file) => {
		const mo = await moduleRunner.import(file);
		if (!mo || typeof mo.default !== "object" || mo.default === null) throw new Error(`invalid snapshot serializer file ${file}. Must export a default object`);
		const config = mo.default;
		if (typeof config.test !== "function" || typeof config.serialize !== "function" && typeof config.print !== "function") throw new TypeError(`invalid snapshot serializer in ${file}. Must have a 'test' method along with either a 'serialize' or 'print' method.`);
		return config;
	}))).forEach((serializer) => addSerializer(serializer));
}

export { loadSnapshotSerializers as a, startCoverageInsideWorker as b, stopCoverageInsideWorker as c, loadDiffConfig as l, setupCommonEnv as s, takeCoverageInsideWorker as t };
