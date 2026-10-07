import { t as rolldown } from "./rolldown-D3JZ9rMt.mjs";
import fs from "node:fs";
import path from "node:path";
import { readdir } from "node:fs/promises";
import { cwd } from "node:process";
import { pathToFileURL } from "node:url";
//#region src/utils/load-config.ts
async function bundleTsConfig(configFile, isEsm) {
	const dirnameVarName = "injected_original_dirname";
	const filenameVarName = "injected_original_filename";
	const importMetaUrlVarName = "injected_original_import_meta_url";
	const bundle = await rolldown({
		input: configFile,
		platform: "node",
		resolve: { mainFields: ["main"] },
		transform: { define: {
			__dirname: dirnameVarName,
			__filename: filenameVarName,
			"import.meta.url": importMetaUrlVarName,
			"import.meta.dirname": dirnameVarName,
			"import.meta.filename": filenameVarName
		} },
		treeshake: false,
		external: [/^[\w@][^:]/],
		plugins: [{
			name: "inject-file-scope-variables",
			transform: {
				filter: { id: /\.[cm]?[jt]s$/ },
				async handler(code, id) {
					return {
						code: `const ${dirnameVarName} = ${JSON.stringify(path.dirname(id))};const ${filenameVarName} = ${JSON.stringify(id)};const ${importMetaUrlVarName} = ${JSON.stringify(pathToFileURL(id).href)};` + code,
						map: null
					};
				}
			}
		}]
	});
	const outputDir = path.dirname(configFile);
	const fileName = (await bundle.write({
		dir: outputDir,
		format: isEsm ? "esm" : "cjs",
		sourcemap: "inline",
		entryFileNames: `rolldown.config.[hash]${path.extname(configFile).replace("ts", "js")}`
	})).output.find((chunk) => chunk.type === "chunk" && chunk.isEntry).fileName;
	return path.join(outputDir, fileName);
}
const SUPPORTED_JS_CONFIG_FORMATS = [
	".js",
	".mjs",
	".cjs"
];
const SUPPORTED_TS_CONFIG_FORMATS = [
	".ts",
	".mts",
	".cts"
];
const SUPPORTED_CONFIG_FORMATS = [...SUPPORTED_JS_CONFIG_FORMATS, ...SUPPORTED_TS_CONFIG_FORMATS];
const DEFAULT_CONFIG_BASE = "rolldown.config";
async function findConfigFileNameInCwd() {
	const filesInWorkingDirectory = new Set(await readdir(cwd()));
	for (const extension of SUPPORTED_CONFIG_FORMATS) {
		const fileName = `${DEFAULT_CONFIG_BASE}${extension}`;
		if (filesInWorkingDirectory.has(fileName)) return fileName;
	}
	throw new Error("No `rolldown.config` configuration file found.");
}
async function loadTsConfig(configFile) {
	const file = await bundleTsConfig(configFile, isFilePathESM(configFile));
	try {
		return (await import(pathToFileURL(file).href)).default;
	} finally {
		fs.unlink(file, () => {});
	}
}
function isFilePathESM(filePath) {
	if (/\.m[jt]s$/.test(filePath)) return true;
	else if (/\.c[jt]s$/.test(filePath)) return false;
	else {
		const pkg = findNearestPackageData(path.dirname(filePath));
		if (pkg) return pkg.type === "module";
		return false;
	}
}
function findNearestPackageData(basedir) {
	while (basedir) {
		const pkgPath = path.join(basedir, "package.json");
		if (tryStatSync(pkgPath)?.isFile()) try {
			return JSON.parse(fs.readFileSync(pkgPath, "utf-8"));
		} catch {}
		const nextBasedir = path.dirname(basedir);
		if (nextBasedir === basedir) break;
		basedir = nextBasedir;
	}
	return null;
}
function tryStatSync(file) {
	try {
		return fs.statSync(file, { throwIfNoEntry: false });
	} catch {}
}
/**
* Load config from a file in a way that Rolldown does.
*
* @param configPath The path to the config file. If empty, it will look for `rolldown.config` with supported extensions in the current working directory.
* @returns The loaded config export
*
* @category Config
*/
async function loadConfig(configPath) {
	const ext = path.extname(configPath = configPath || await findConfigFileNameInCwd());
	try {
		if (SUPPORTED_JS_CONFIG_FORMATS.includes(ext) || process.env.NODE_OPTIONS?.includes("--import=tsx") && SUPPORTED_TS_CONFIG_FORMATS.includes(ext)) return (await import(pathToFileURL(configPath).href)).default;
		else if (SUPPORTED_TS_CONFIG_FORMATS.includes(ext)) return await loadTsConfig(path.resolve(configPath));
		else throw new Error(`Unsupported config format. Expected: \`${SUPPORTED_CONFIG_FORMATS.join(",")}\` but got \`${ext}\``);
	} catch (err) {
		throw new Error("Error happened while loading config.", { cause: err });
	}
}
//#endregion
export { loadConfig as t };
