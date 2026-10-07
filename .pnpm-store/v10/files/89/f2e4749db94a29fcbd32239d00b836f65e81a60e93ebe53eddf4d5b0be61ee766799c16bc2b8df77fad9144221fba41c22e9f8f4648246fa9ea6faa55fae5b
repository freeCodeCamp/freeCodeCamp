import { r as resolveCoverageProviderModule } from './coverage.DVF1vEu8.js';
import { addSerializer } from '@vitest/snapshot';
import { setSafeTimers } from '@vitest/utils';

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
	setupDefines(config.defines);
	setupEnv(config.env);
	if (globalSetup) return;
	globalSetup = true;
	setSafeTimers();
	if (config.globals) (await import('./globals.DEHgCU4V.js')).registerApiGlobally();
}
function setupDefines(defines) {
	for (const key in defines) globalThis[key] = defines[key];
}
function setupEnv(env) {
	if (typeof process === "undefined") return;
	// same boolean-to-string assignment as VitestPlugin.configResolved
	const { PROD, DEV,...restEnvs } = env;
	process.env.PROD = PROD ? "1" : "";
	process.env.DEV = DEV ? "1" : "";
	for (const key in restEnvs) process.env[key] = env[key];
}
async function loadDiffConfig(config, executor) {
	if (typeof config.diff === "object") return config.diff;
	if (typeof config.diff !== "string") return;
	const diffModule = await executor.executeId(config.diff);
	if (diffModule && typeof diffModule.default === "object" && diffModule.default != null) return diffModule.default;
	else throw new Error(`invalid diff config file ${config.diff}. Must have a default export with config object`);
}
async function loadSnapshotSerializers(config, executor) {
	const files = config.snapshotSerializers;
	const snapshotSerializers = await Promise.all(files.map(async (file) => {
		const mo = await executor.executeId(file);
		if (!mo || typeof mo.default !== "object" || mo.default === null) throw new Error(`invalid snapshot serializer file ${file}. Must export a default object`);
		const config = mo.default;
		if (typeof config.test !== "function" || typeof config.serialize !== "function" && typeof config.print !== "function") throw new TypeError(`invalid snapshot serializer in ${file}. Must have a 'test' method along with either a 'serialize' or 'print' method.`);
		return config;
	}));
	snapshotSerializers.forEach((serializer) => addSerializer(serializer));
}

export { stopCoverageInsideWorker as a, loadSnapshotSerializers as b, setupCommonEnv as c, loadDiffConfig as l, startCoverageInsideWorker as s, takeCoverageInsideWorker as t };
