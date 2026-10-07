import module$1, { isBuiltin } from 'node:module';
import { fileURLToPath } from 'node:url';
import { MessageChannel } from 'node:worker_threads';
import { initSyntaxLexers, hoistMocks } from '@vitest/mocker/transforms';
import { cleanUrl } from '@vitest/utils/helpers';
import { p as parse } from './acorn.B2iPLyUM.js';
import MagicString from 'magic-string';
import { resolve } from 'pathe';
import c from 'tinyrainbow';
import { distDir } from '../path.js';
import { t as toBuiltin } from './modules.BJuCwlRJ.js';
import 'node:path';

const NOW_LENGTH = Date.now().toString().length;
const REGEXP_VITEST = new RegExp(`%3Fvitest=\\d{${NOW_LENGTH}}`);
const REGEXP_MOCK_ACTUAL = /\?mock=actual/;
async function setupNodeLoaderHooks(worker) {
	if (module$1.setSourceMapsSupport) module$1.setSourceMapsSupport(true);
	else if (process.setSourceMapsEnabled) process.setSourceMapsEnabled(true);
	if (worker.config.experimental.nodeLoader !== false) await initSyntaxLexers();
	if (typeof module$1.registerHooks === "function") module$1.registerHooks({
		resolve(specifier, context, nextResolve) {
			if (specifier.includes("mock=actual")) {
				// url is already resolved by `importActual`
				const moduleId = specifier.replace(REGEXP_MOCK_ACTUAL, "");
				const builtin = isBuiltin(moduleId);
				return {
					url: builtin ? toBuiltin(moduleId) : moduleId,
					format: builtin ? "builtin" : void 0,
					shortCircuit: true
				};
			}
			const isVitest = specifier.includes("%3Fvitest=");
			const result = nextResolve(isVitest ? specifier.replace(REGEXP_VITEST, "") : specifier, context);
			// avoid tracking /node_modules/ module graph for performance reasons
			if (context.parentURL && result.url && !result.url.includes("/node_modules/")) worker.rpc.ensureModuleGraphEntry(result.url, context.parentURL).catch(() => {
				// ignore errors
			});
			// this is require for in-source tests to be invalidated if
			// one of the files already imported it in --maxWorkers=1 --no-isolate
			if (isVitest) result.url = `${result.url}?vitest=${Date.now()}`;
			if (worker.config.experimental.nodeLoader === false || !context.parentURL || result.url.includes(distDir) || context.parentURL?.toString().includes(distDir)) return result;
			const mockedResult = getNativeMocker()?.resolveMockedModule(result.url, context.parentURL);
			if (mockedResult != null) return mockedResult;
			return result;
		},
		load: worker.config.experimental.nodeLoader === false ? void 0 : createLoadHook()
	});
	else if (module$1.register) {
		if (worker.config.experimental.nodeLoader !== false) console.warn(`${c.bgYellow(" WARNING ")} "module.registerHooks" is not supported in Node.js ${process.version}. This means that some features like module mocking or in-source testing are not supported. Upgrade your Node.js version to at least 22.15 or disable "experimental.nodeLoader" flag manually.\n`);
		const { port1, port2 } = new MessageChannel();
		port1.unref();
		port2.unref();
		port1.on("message", (data) => {
			if (!data || typeof data !== "object") return;
			switch (data.event) {
				case "register-module-graph-entry": {
					const { url, parentURL } = data;
					worker.rpc.ensureModuleGraphEntry(url, parentURL);
					return;
				}
				default: console.error("Unknown message event:", data.event);
			}
		});
		/** Registers {@link file://./../nodejsWorkerLoader.ts} */
		module$1.register("#nodejs-worker-loader", {
			parentURL: import.meta.url,
			data: { port: port2 },
			transferList: [port2]
		});
	} else if (!process.versions.deno && !process.versions.bun) console.warn("\"module.registerHooks\" and \"module.register\" are not supported. Some Vitest features may not work. Please, use Node.js 18.19.0 or higher.");
}
function replaceInSourceMarker(url, source, ms) {
	const re = /import\.meta\.vitest/g;
	let match;
	let overridden = false;
	// eslint-disable-next-line no-cond-assign
	while (match = re.exec(source)) {
		const { index, "0": code } = match;
		overridden = true;
		// should it support process.vitest for CJS modules?
		ms().overwrite(index, index + code.length, "IMPORT_META_TEST()");
	}
	if (overridden) {
		const filename = resolve(fileURLToPath(url));
		// appending instead of prepending because functions are hoisted and we don't change the offset
		ms().append(`;\nfunction IMPORT_META_TEST() { return typeof __vitest_worker__ !== 'undefined' && __vitest_worker__.filepath === "${filename.replace(/"/g, "\\\"")}" ? __vitest_index__ : undefined; }`);
	}
}
const ignoreFormats = new Set([
	"addon",
	"builtin",
	"wasm"
]);
function createLoadHook(_worker) {
	return (url, context, nextLoad) => {
		const result = url.includes("mock=") && isBuiltin(cleanUrl(url)) ? { format: "commonjs" } : nextLoad(url, context);
		if (result.format && ignoreFormats.has(result.format) || url.includes(distDir)) return result;
		const mocker = getNativeMocker();
		mocker?.checkCircularManualMock(url);
		if (url.includes("mock=automock") || url.includes("mock=autospy")) {
			const automockedResult = mocker?.loadAutomock(url, result);
			if (automockedResult != null) return automockedResult;
			return result;
		}
		if (url.includes("mock=manual")) {
			const mockedResult = mocker?.loadManualMock(url, result);
			if (mockedResult != null) return mockedResult;
			return result;
		}
		// ignore non-vitest modules for performance reasons,
		// vi.hoisted and vi.mock won't work outside of test files or setup files
		if (!result.source || !url.includes("vitest=")) return result;
		const filename = url.startsWith("file://") ? fileURLToPath(url) : url;
		const source = result.source.toString();
		const transformedCode = result.format?.includes("typescript") ? module$1.stripTypeScriptTypes(source) : source;
		let _ms;
		const ms = () => _ms || (_ms = new MagicString(source));
		if (source.includes("import.meta.vitest")) replaceInSourceMarker(url, source, ms);
		hoistMocks(transformedCode, filename, (code) => parse(code, {
			ecmaVersion: "latest",
			sourceType: result.format === "module" || result.format === "module-typescript" || result.format === "typescript" ? "module" : "script"
		}), {
			magicString: ms,
			globalThisAccessor: "\"__vitest_mocker__\""
		});
		let code;
		if (_ms) code = `${_ms.toString()}\n//# sourceMappingURL=${genSourceMapUrl(_ms.generateMap({
			hires: "boundary",
			source: filename
		}))}`;
		else code = source;
		return {
			format: result.format,
			shortCircuit: true,
			source: code
		};
	};
}
function genSourceMapUrl(map) {
	if (typeof map !== "string") map = JSON.stringify(map);
	return `data:application/json;base64,${Buffer.from(map).toString("base64")}`;
}
function getNativeMocker() {
	return typeof __vitest_mocker__ !== "undefined" ? __vitest_mocker__ : void 0;
}

export { setupNodeLoaderHooks };
