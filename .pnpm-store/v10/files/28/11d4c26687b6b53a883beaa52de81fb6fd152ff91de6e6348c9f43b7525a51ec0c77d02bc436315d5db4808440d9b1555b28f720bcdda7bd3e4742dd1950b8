import { F as defaultAllowedOrigins, N as VERSION, _ as DEFAULT_SERVER_CONDITIONS, d as DEFAULT_CLIENT_MAIN_FIELDS, h as DEFAULT_EXTERNAL_CONDITIONS, n as createLogger, u as DEFAULT_CLIENT_CONDITIONS, v as DEFAULT_SERVER_MAIN_FIELDS } from "./chunks/logger.js";
import { Ct as perEnvironmentPlugin, Dt as mergeConfig, Et as mergeAlias, J as optimizeDeps, Ot as normalizePath, St as perEnvironmentState, Tt as isCSSRequest, _ as build, _t as createServerModuleRunnerTransport, b as createBuilder, bt as resolveEnvPrefix, c as sortUserPlugins, dt as searchForWorkspaceRoot, f as createRunnableDevEnvironment, ft as isFileLoadingAllowed, g as BuildEnvironment, gt as createServerModuleRunner, h as fetchModule, ht as ssrTransform, i as loadConfigFromFile, it as createServerHotChannel, kt as rollupVersion, l as runnerImport, m as DevEnvironment, mt as send, nt as preprocessCSS, o as resolveConfig, ot as createServer, p as isRunnableDevEnvironment, pt as isFileServingAllowed, rt as createIdResolver, t as defineConfig, tt as formatPostcssSourceMap, u as preview, vt as buildErrorMessage, wt as createFilter, xt as transformWithEsbuild, yt as loadEnv } from "./chunks/config.js";
import { parseAst, parseAstAsync } from "rollup/parseAst";
import { version as esbuildVersion } from "esbuild";

//#region src/node/server/environments/fetchableEnvironments.ts
function createFetchableDevEnvironment(name, config, context) {
	if (typeof Request === "undefined" || typeof Response === "undefined") throw new TypeError("FetchableDevEnvironment requires a global `Request` and `Response` object.");
	if (!context.handleRequest) throw new TypeError("FetchableDevEnvironment requires a `handleRequest` method during initialisation.");
	return new FetchableDevEnvironment(name, config, context);
}
function isFetchableDevEnvironment(environment) {
	return environment instanceof FetchableDevEnvironment;
}
var FetchableDevEnvironment = class extends DevEnvironment {
	_handleRequest;
	constructor(name, config, context) {
		super(name, config, context);
		this._handleRequest = context.handleRequest;
	}
	async dispatchFetch(request) {
		if (!(request instanceof Request)) throw new TypeError("FetchableDevEnvironment `dispatchFetch` must receive a `Request` object.");
		const response = await this._handleRequest(request);
		if (!(response instanceof Response)) throw new TypeError("FetchableDevEnvironment `context.handleRequest` must return a `Response` object.");
		return response;
	}
};

//#endregion
export { BuildEnvironment, DevEnvironment, build, buildErrorMessage, createBuilder, createFetchableDevEnvironment, createFilter, createIdResolver, createLogger, createRunnableDevEnvironment, createServer, createServerHotChannel, createServerModuleRunner, createServerModuleRunnerTransport, defaultAllowedOrigins, DEFAULT_CLIENT_CONDITIONS as defaultClientConditions, DEFAULT_CLIENT_MAIN_FIELDS as defaultClientMainFields, DEFAULT_EXTERNAL_CONDITIONS as defaultExternalConditions, DEFAULT_SERVER_CONDITIONS as defaultServerConditions, DEFAULT_SERVER_MAIN_FIELDS as defaultServerMainFields, defineConfig, esbuildVersion, fetchModule, formatPostcssSourceMap, isCSSRequest, isFetchableDevEnvironment, isFileLoadingAllowed, isFileServingAllowed, isRunnableDevEnvironment, loadConfigFromFile, loadEnv, mergeAlias, mergeConfig, ssrTransform as moduleRunnerTransform, normalizePath, optimizeDeps, parseAst, parseAstAsync, perEnvironmentPlugin, perEnvironmentState, preprocessCSS, preview, resolveConfig, resolveEnvPrefix, rollupVersion, runnerImport, searchForWorkspaceRoot, send, sortUserPlugins, transformWithEsbuild, VERSION as version };