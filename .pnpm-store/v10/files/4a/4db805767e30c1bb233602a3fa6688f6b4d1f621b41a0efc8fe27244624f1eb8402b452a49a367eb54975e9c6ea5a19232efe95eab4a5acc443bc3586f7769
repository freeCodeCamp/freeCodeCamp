import * as vite from 'vite';
import { resolveConfig as resolveConfig$1, mergeConfig } from 'vite';
export { esbuildVersion, isCSSRequest, isFileServingAllowed, parseAst, parseAstAsync, rollupVersion, version as viteVersion } from 'vite';
import { V as Vitest, a as VitestPlugin, T as TestModule } from './chunks/cli-api.BkDphVBG.js';
export { G as GitNotFoundError, F as TestsNotFoundError, b as VitestPackageInstaller, e as createViteLogger, c as createVitest, i as isValidApiRequest, d as registerConsoleShortcuts, r as resolveFsAllow, s as startVitest } from './chunks/cli-api.BkDphVBG.js';
export { p as parseCLI } from './chunks/cac.Cb-PYCCB.js';
import { r as resolveConfig$2 } from './chunks/coverage.DL5VHqXY.js';
export { b as BaseSequencer, c as createMethodsRPC, g as getFilePoolName, a as resolveApiServerConfig } from './chunks/coverage.DL5VHqXY.js';
import { slash, deepClone } from '@vitest/utils';
import { f as findUp } from './chunks/index.X0nbfr6-.js';
import { resolve } from 'pathe';
import { c as configFiles } from './chunks/constants.DnKduX2e.js';
export { distDir, rootDir } from './path.js';
import createDebug from 'debug';
export { generateFileHash } from '@vitest/runner/utils';
import 'node:fs';
import './chunks/coverage.DVF1vEu8.js';
import 'node:path';
import '@vitest/snapshot/manager';
import 'vite-node/client';
import 'vite-node/server';
import './chunks/index.B521nVV-.js';
import './chunks/index.VByaPkjc.js';
import 'node:perf_hooks';
import '@vitest/utils/source-map';
import 'tinyrainbow';
import './chunks/env.D4Lgay0q.js';
import 'std-env';
import './chunks/typechecker.DRKU1-1g.js';
import 'node:os';
import 'tinyexec';
import 'node:util';
import 'node:fs/promises';
import 'node:console';
import 'node:stream';
import 'node:module';
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
import './chunks/_commonjsHelpers.BFTU3MAI.js';
import 'node:crypto';
import 'node:url';
import 'picomatch';
import 'tinyglobby';
import 'vite-node/utils';
import '@vitest/mocker/node';
import './chunks/defaults.B7q_naMc.js';
import 'magic-string';
import './chunks/index.BCWujgDG.js';
import 'node:assert';
import '@vitest/utils/error';
import 'node:readline';
import 'node:process';
import 'node:v8';
import 'node:tty';
import 'node:events';
import 'tinypool';
import 'node:worker_threads';
import 'readline';

// this is only exported as a public function and not used inside vitest
async function resolveConfig(options = {}, viteOverrides = {}) {
	const root = slash(resolve(options.root || process.cwd()));
	const configPath = options.config === false ? false : options.config ? resolve(root, options.config) : await findUp(configFiles, { cwd: root });
	options.config = configPath;
	const vitest = new Vitest("test", deepClone(options));
	const config = await resolveConfig$1(mergeConfig({
		configFile: configPath,
		mode: options.mode || "test",
		plugins: [await VitestPlugin(options, vitest)]
	}, mergeConfig(viteOverrides, { root: options.root })), "serve");
	// Reflect just to avoid type error
	const updatedOptions = Reflect.get(config, "_vitest");
	const vitestConfig = resolveConfig$2(vitest, updatedOptions, config);
	await vitest.close();
	return {
		viteConfig: config,
		vitestConfig
	};
}

function createDebugger(namespace) {
	const debug = createDebug(namespace);
	if (debug.enabled) return debug;
}

const version = Vitest.version;
/** @deprecated use `createViteServer` instead */
const createServer = vite.createServer;
const createViteServer = vite.createServer;
/**
* @deprecated Use `TestModule` instead
*/
const TestFile = TestModule;
// rolldownVersion is exported only by rolldown-vite
const rolldownVersion = vite.rolldownVersion;

export { TestFile, VitestPlugin, createDebugger, createServer, createViteServer, resolveConfig, rolldownVersion, version };
