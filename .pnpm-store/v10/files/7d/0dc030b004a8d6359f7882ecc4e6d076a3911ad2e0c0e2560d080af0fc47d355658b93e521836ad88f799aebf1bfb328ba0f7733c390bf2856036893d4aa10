import * as vite from 'vite';
import { resolveConfig as resolveConfig$1, mergeConfig } from 'vite';
export { esbuildVersion, isCSSRequest, isFileLoadingAllowed, parseAst, parseAstAsync, rollupVersion, version as viteVersion } from 'vite';
import { V as Vitest, a as VitestPlugin } from './chunks/cli-api.Cjt90eJu.js';
export { F as ForksPoolWorker, G as GitNotFoundError, b as TestsNotFoundError, T as ThreadsPoolWorker, c as TypecheckPoolWorker, d as VitestPackageInstaller, e as VmForksPoolWorker, f as VmThreadsPoolWorker, g as createDebugger, h as createMethodsRPC, i as createViteLogger, j as createVitest, k as escapeTestName, l as experimental_getRunnerTask, m as getFilePoolName, n as isFileServingAllowed, o as isValidApiRequest, r as registerConsoleShortcuts, p as resolveFsAllow, s as startVitest } from './chunks/cli-api.Cjt90eJu.js';
export { p as parseCLI } from './chunks/cac.DJJmV0dT.js';
import { r as resolveConfig$2 } from './chunks/coverage.DM_a_rWm.js';
export { B as BaseCoverageProvider, a as BaseSequencer, b as resolveApiServerConfig } from './chunks/coverage.DM_a_rWm.js';
import { slash, deepClone } from '@vitest/utils/helpers';
import { a as any } from './chunks/index.og1WyBLx.js';
import { resolve } from 'pathe';
import { c as configFiles } from './chunks/constants.CPYnjOGj.js';
export { M as AgentReporter, B as BenchmarkReporter, a as BenchmarkReportsMap, D as DefaultReporter, b as DotReporter, G as GithubActionsReporter, H as HangingProcessReporter, J as JUnitReporter, c as JsonReporter, M as MinimalReporter, R as ReportersMap, T as TapFlatReporter, d as TapReporter, V as VerboseBenchmarkReporter, e as VerboseReporter } from './chunks/index.UpGiHP7g.js';
export { distDir, rootDir } from './path.js';
export { generateFileHash } from '@vitest/runner/utils';
import 'node:fs';
import './chunks/coverage.CTzCuANN.js';
import 'node:path';
import './chunks/index.BCY_7LL2.js';
import 'node:module';
import 'node:process';
import 'node:fs/promises';
import 'node:url';
import 'node:assert';
import 'node:v8';
import 'node:util';
import 'node:os';
import '@vitest/snapshot/manager';
import '@vitest/utils/serialize';
import './chunks/nativeModuleRunner.BIakptoF.js';
import 'vite/module-runner';
import './chunks/traces.DT5aQ62U.js';
import 'obug';
import 'tinyrainbow';
import '#module-evaluator';
import 'node:console';
import './chunks/_commonjsHelpers.D26ty3Ew.js';
import './chunks/utils.BS4fH3nR.js';
import './chunks/env.D4Lgay0q.js';
import 'std-env';
import 'node:tty';
import 'node:crypto';
import 'node:events';
import './chunks/index.Chj8NDwU.js';
import './chunks/modules.BJuCwlRJ.js';
import 'node:child_process';
import 'node:worker_threads';
import 'picomatch';
import 'tinyglobby';
import 'node:perf_hooks';
import 'events';
import 'https';
import 'http';
import 'net';
import 'tls';
import 'crypto';
import 'stream';
import 'url';
import 'zlib';
import 'buffer';
import './chunks/defaults.9aQKnqFk.js';
import 'magic-string';
import '@vitest/mocker/node';
import '@vitest/utils/constants';
import '@vitest/utils/resolver';
import 'es-module-lexer';
import '@vitest/utils/source-map';
import '@vitest/utils/source-map/node';
import 'tinyexec';
import 'node:readline';
import 'readline';
import 'node:stream';
import '@vitest/utils/display';
import '@vitest/utils/offset';

// this is only exported as a public function and not used inside vitest
async function resolveConfig(options = {}, viteOverrides = {}) {
	const root = slash(resolve(options.root || process.cwd()));
	const configPath = options.config === false ? false : options.config ? resolve(root, options.config) : any(configFiles, { cwd: root });
	options.config = configPath;
	const vitest = new Vitest("test", deepClone(options));
	const config = await resolveConfig$1(mergeConfig({
		configFile: configPath,
		mode: options.mode || "test",
		plugins: [await VitestPlugin(options, vitest)]
	}, mergeConfig(viteOverrides, { root: options.root })), "serve");
	const vitestConfig = resolveConfig$2(vitest, Reflect.get(config, "_vitest"), config);
	await vitest.close();
	return {
		viteConfig: config,
		vitestConfig
	};
}

const version = Vitest.version;
const createViteServer = vite.createServer;
// rolldownVersion is exported only by rolldown-vite
const rolldownVersion = vite.rolldownVersion;

export { VitestPlugin, createViteServer, resolveConfig, rolldownVersion, version };
