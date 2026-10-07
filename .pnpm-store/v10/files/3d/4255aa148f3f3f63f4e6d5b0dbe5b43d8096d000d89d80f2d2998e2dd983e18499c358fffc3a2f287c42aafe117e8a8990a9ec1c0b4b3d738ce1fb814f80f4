import { ModuleCacheMap } from 'vite-node/client';
import { g as getDefaultRequestStubs, s as startVitestExecutor } from './execute.B7h3T_Hc.js';
import { p as provideWorkerState } from './utils.XdZDrNZV.js';

let _viteNode;
const moduleCache = new ModuleCacheMap();
const moduleExecutionInfo = /* @__PURE__ */ new Map();
async function startViteNode(options) {
	if (_viteNode) return _viteNode;
	_viteNode = await startVitestExecutor(options);
	return _viteNode;
}
async function runBaseTests(method, state) {
	const { ctx } = state;
	// state has new context, but we want to reuse existing ones
	state.moduleCache = moduleCache;
	state.moduleExecutionInfo = moduleExecutionInfo;
	provideWorkerState(globalThis, state);
	if (ctx.invalidates) ctx.invalidates.forEach((fsPath) => {
		moduleCache.delete(fsPath);
		moduleCache.delete(`mock:${fsPath}`);
	});
	ctx.files.forEach((i) => state.moduleCache.delete(typeof i === "string" ? i : i.filepath));
	const [executor, { run }] = await Promise.all([startViteNode({
		state,
		requestStubs: getDefaultRequestStubs()
	}), import('./runBaseTests.9Ij9_de-.js')]);
	const fileSpecs = ctx.files.map((f) => typeof f === "string" ? {
		filepath: f,
		testLocations: void 0
	} : f);
	await run(method, fileSpecs, ctx.config, {
		environment: state.environment,
		options: ctx.environment.options
	}, executor);
}

export { runBaseTests as r };
