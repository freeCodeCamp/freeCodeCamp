'use strict';

var path = require('node:path');
var cac = require('cac');
var browser = require('./chunk-browser.cjs');
var vite = require('vite');
var client = require('./client.cjs');
var hmr = require('./chunk-hmr.cjs');
var server = require('./server.cjs');
var sourceMap = require('./source-map.cjs');
var utils = require('./utils.cjs');
require('node:module');
require('node:url');
require('node:vm');
require('debug');
require('pathe');
require('node:fs');
require('node:events');
require('node:assert');
require('node:perf_hooks');
require('es-module-lexer');
require('./constants.cjs');

var version = "3.2.4";

const cli = cac("vite-node");
cli.option("-r, --root <path>", "Use specified root directory").option("-c, --config <path>", "Use specified config file").option("-m, --mode <mode>", "Set env mode").option("-w, --watch", "Restart on file changes, similar to \"nodemon\"").option("--script", "Use vite-node as a script runner").option("--options <options>", "Use specified Vite server options").option("-v, --version", "Output the version number").option("-h, --help", "Display help for command");
cli.command("[...files]").allowUnknownOptions().action(run);
cli.parse(process.argv, { run: false });
if (cli.args.length === 0) cli.runMatchedCommand();
else {
	const i = cli.rawArgs.indexOf(cli.args[0]) + 1;
	const scriptArgs = cli.rawArgs.slice(i).filter((it) => it !== "--");
	const executeArgs = [
		...cli.rawArgs.slice(0, i),
		"--",
		...scriptArgs
	];
	cli.parse(executeArgs);
}
async function run(files, options = {}) {
	var _server$emitter;
	if (options.script) {
		files = [files[0]];
		options = {};
		process.argv = [
			process.argv[0],
			path.resolve(files[0]),
			...process.argv.slice(2).filter((arg) => arg !== "--script" && arg !== files[0])
		];
	} else process.argv = [...process.argv.slice(0, 2), ...options["--"] || []];
	if (options.version) {
		cli.version(version);
		cli.outputVersion();
		process.exit(0);
	}
	if (options.help) {
		cli.version(version).outputHelp();
		process.exit(0);
	}
	if (!files.length) {
		console.error(browser.s.red("No files specified."));
		cli.version(version).outputHelp();
		process.exit(1);
	}
	const serverOptions = options.options ? parseServerOptions(options.options) : {};
	const server$1 = await vite.createServer({
		logLevel: "error",
		configFile: options.config,
		root: options.root,
		mode: options.mode,
		server: {
			hmr: !!options.watch,
			watch: options.watch ? void 0 : null
		},
		plugins: [options.watch && hmr.viteNodeHmrPlugin()]
	});
	if (Number(vite.version.split(".")[0]) < 6) await server$1.pluginContainer.buildStart({});
	else
 // directly access client plugin container until https://github.com/vitejs/vite/issues/19607
	await server$1.environments.client.pluginContainer.buildStart({});
	const env = vite.loadEnv(server$1.config.mode, server$1.config.envDir, "");
	for (const key in env) {
		var _process$env;
		(_process$env = process.env)[key] ?? (_process$env[key] = env[key]);
	}
	const node = new server.ViteNodeServer(server$1, serverOptions);
	sourceMap.installSourcemapsSupport({ getSourceMap: (source) => node.getSourceMap(source) });
	const runner = new client.ViteNodeRunner({
		root: server$1.config.root,
		base: server$1.config.base,
		fetchModule(id) {
			return node.fetchModule(id);
		},
		resolveId(id, importer) {
			return node.resolveId(id, importer);
		},
		createHotContext(runner, url) {
			return hmr.createHotContext(runner, server$1.emitter, files, url);
		}
	});
	// provide the vite define variable in this context
	await runner.executeId("/@vite/env");
	for (const file of files) await runner.executeFile(file);
	if (!options.watch) await server$1.close();
	(_server$emitter = server$1.emitter) === null || _server$emitter === void 0 || _server$emitter.on("message", (payload) => {
		hmr.handleMessage(runner, server$1.emitter, files, payload);
	});
	if (options.watch) process.on("uncaughtException", (err) => {
		console.error(browser.s.red("[vite-node] Failed to execute file: \n"), err);
	});
}
function parseServerOptions(serverOptions) {
	var _serverOptions$deps, _serverOptions$deps2, _serverOptions$deps3, _serverOptions$deps4, _serverOptions$deps5, _serverOptions$deps6, _serverOptions$transf, _serverOptions$transf2;
	const inlineOptions = ((_serverOptions$deps = serverOptions.deps) === null || _serverOptions$deps === void 0 ? void 0 : _serverOptions$deps.inline) === true ? true : utils.toArray((_serverOptions$deps2 = serverOptions.deps) === null || _serverOptions$deps2 === void 0 ? void 0 : _serverOptions$deps2.inline);
	return {
		...serverOptions,
		deps: {
			...serverOptions.deps,
			inlineFiles: utils.toArray((_serverOptions$deps3 = serverOptions.deps) === null || _serverOptions$deps3 === void 0 ? void 0 : _serverOptions$deps3.inlineFiles),
			inline: inlineOptions !== true ? inlineOptions.map((dep) => {
				return dep.startsWith("/") && dep.endsWith("/") ? new RegExp(dep) : dep;
			}) : true,
			external: utils.toArray((_serverOptions$deps4 = serverOptions.deps) === null || _serverOptions$deps4 === void 0 ? void 0 : _serverOptions$deps4.external).map((dep) => {
				return dep.startsWith("/") && dep.endsWith("/") ? new RegExp(dep) : dep;
			}),
			moduleDirectories: ((_serverOptions$deps5 = serverOptions.deps) === null || _serverOptions$deps5 === void 0 ? void 0 : _serverOptions$deps5.moduleDirectories) ? utils.toArray((_serverOptions$deps6 = serverOptions.deps) === null || _serverOptions$deps6 === void 0 ? void 0 : _serverOptions$deps6.moduleDirectories) : void 0
		},
		transformMode: {
			...serverOptions.transformMode,
			ssr: utils.toArray((_serverOptions$transf = serverOptions.transformMode) === null || _serverOptions$transf === void 0 ? void 0 : _serverOptions$transf.ssr).map((dep) => new RegExp(dep)),
			web: utils.toArray((_serverOptions$transf2 = serverOptions.transformMode) === null || _serverOptions$transf2 === void 0 ? void 0 : _serverOptions$transf2.web).map((dep) => new RegExp(dep))
		}
	};
}
