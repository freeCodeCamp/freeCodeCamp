import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";
//#region node_modules/.pnpm/package-manager-detector@1.6.0/node_modules/package-manager-detector/dist/constants.mjs
const AGENTS = [
	"npm",
	"yarn",
	"yarn@berry",
	"pnpm",
	"pnpm@6",
	"bun",
	"deno"
];
const LOCKS = {
	"bun.lock": "bun",
	"bun.lockb": "bun",
	"deno.lock": "deno",
	"pnpm-lock.yaml": "pnpm",
	"pnpm-workspace.yaml": "pnpm",
	"yarn.lock": "yarn",
	"package-lock.json": "npm",
	"npm-shrinkwrap.json": "npm"
};
const INSTALL_METADATA = {
	"node_modules/.deno/": "deno",
	"node_modules/.pnpm/": "pnpm",
	"node_modules/.yarn-state.yml": "yarn",
	"node_modules/.yarn_integrity": "yarn",
	"node_modules/.package-lock.json": "npm",
	".pnp.cjs": "yarn",
	".pnp.js": "yarn",
	"bun.lock": "bun",
	"bun.lockb": "bun"
};
//#endregion
//#region node_modules/.pnpm/package-manager-detector@1.6.0/node_modules/package-manager-detector/dist/detect.mjs
async function pathExists(path2, type) {
	try {
		const stat = await fs.stat(path2);
		return type === "file" ? stat.isFile() : stat.isDirectory();
	} catch {
		return false;
	}
}
function* lookup(cwd = process.cwd()) {
	let directory = path.resolve(cwd);
	const { root } = path.parse(directory);
	while (directory && directory !== root) {
		yield directory;
		directory = path.dirname(directory);
	}
}
async function parsePackageJson(filepath, options) {
	if (!filepath || !await pathExists(filepath, "file")) return null;
	return await handlePackageManager(filepath, options);
}
async function detect(options = {}) {
	const { cwd, strategies = [
		"lockfile",
		"packageManager-field",
		"devEngines-field"
	] } = options;
	let stopDir;
	if (typeof options.stopDir === "string") {
		const resolved = path.resolve(options.stopDir);
		stopDir = (dir) => dir === resolved;
	} else stopDir = options.stopDir;
	for (const directory of lookup(cwd)) {
		for (const strategy of strategies) switch (strategy) {
			case "lockfile":
				for (const lock of Object.keys(LOCKS)) if (await pathExists(path.join(directory, lock), "file")) {
					const name = LOCKS[lock];
					const result = await parsePackageJson(path.join(directory, "package.json"), options);
					if (result) return result;
					else return {
						name,
						agent: name
					};
				}
				break;
			case "packageManager-field":
			case "devEngines-field": {
				const result = await parsePackageJson(path.join(directory, "package.json"), options);
				if (result) return result;
				break;
			}
			case "install-metadata":
				for (const metadata of Object.keys(INSTALL_METADATA)) {
					const fileOrDir = metadata.endsWith("/") ? "dir" : "file";
					if (await pathExists(path.join(directory, metadata), fileOrDir)) {
						const name = INSTALL_METADATA[metadata];
						return {
							name,
							agent: name === "yarn" ? isMetadataYarnClassic(metadata) ? "yarn" : "yarn@berry" : name
						};
					}
				}
				break;
		}
		if (stopDir?.(directory)) break;
	}
	return null;
}
function getNameAndVer(pkg) {
	const handelVer = (version) => version?.match(/\d+(\.\d+){0,2}/)?.[0] ?? version;
	if (typeof pkg.packageManager === "string") {
		const [name, ver] = pkg.packageManager.replace(/^\^/, "").split("@");
		return {
			name,
			ver: handelVer(ver)
		};
	}
	if (typeof pkg.devEngines?.packageManager?.name === "string") return {
		name: pkg.devEngines.packageManager.name,
		ver: handelVer(pkg.devEngines.packageManager.version)
	};
}
async function handlePackageManager(filepath, options) {
	try {
		const content = await fs.readFile(filepath, "utf8");
		const pkg = options.packageJsonParser ? await options.packageJsonParser(content, filepath) : JSON.parse(content);
		let agent;
		const nameAndVer = getNameAndVer(pkg);
		if (nameAndVer) {
			const name = nameAndVer.name;
			const ver = nameAndVer.ver;
			let version = ver;
			if (name === "yarn" && ver && Number.parseInt(ver) > 1) {
				agent = "yarn@berry";
				version = "berry";
				return {
					name,
					agent,
					version
				};
			} else if (name === "pnpm" && ver && Number.parseInt(ver) < 7) {
				agent = "pnpm@6";
				return {
					name,
					agent,
					version
				};
			} else if (AGENTS.includes(name)) {
				agent = name;
				return {
					name,
					agent,
					version
				};
			} else return options.onUnknown?.(pkg.packageManager) ?? null;
		}
	} catch {}
	return null;
}
function isMetadataYarnClassic(metadataPath) {
	return metadataPath.endsWith(".yarn_integrity");
}
//#endregion
export { detect };
