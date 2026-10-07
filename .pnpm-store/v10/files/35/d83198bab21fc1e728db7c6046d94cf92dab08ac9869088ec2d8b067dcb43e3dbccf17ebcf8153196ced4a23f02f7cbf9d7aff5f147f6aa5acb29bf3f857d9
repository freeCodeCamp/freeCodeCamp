import process from "node:process";
import { quansync } from "quansync/macro";
import { dirname, parse, resolve } from "node:path";
import { lstat, stat } from "@quansync/fs";

//#region src/fs.ts
const isFile = quansync(function* (path, allowSymlinks) {
	try {
		return (yield (allowSymlinks ? stat : lstat)(path)).isFile();
	} catch {
		return false;
	}
});
const findUp = quansync(function* (paths, options = {}) {
	const { cwd = process.cwd(), stopAt = parse(cwd).root, multiple = false, allowSymlinks = true } = options;
	let current = cwd;
	const files = [];
	while (current && current !== stopAt) {
		for (const path of paths) {
			const filepath = resolve(current, path);
			if (yield isFile(filepath, allowSymlinks)) {
				files.push(filepath);
				if (!multiple) return files;
			}
		}
		const parent = dirname(current);
		if (parent === current) break;
		current = parent;
	}
	return files;
});

//#endregion
//#region src/index.ts
const loadConfigFile = quansync(function* (filepath, source) {
	try {
		const config = yield source.parser(filepath);
		if (!config) return;
		return {
			config,
			source: filepath
		};
	} catch (e) {
		if (source.skipOnError) return;
		throw e;
	}
});
function createConfigCoreLoader(options) {
	const { cwd = process.cwd(), multiple, sources } = options;
	const results = [];
	let matchedFiles;
	const findConfigs = quansync(function* () {
		if (matchedFiles == null) matchedFiles = [];
		matchedFiles.length = 0;
		for (const source of sources) {
			const { extensions } = source;
			const files = yield findUp(source.files.flatMap((file) => !extensions?.length ? [file] : extensions.map((ext) => ext ? `${file}.${ext}` : file)), {
				cwd,
				stopAt: options.stopAt,
				multiple
			});
			matchedFiles.push([source, files]);
		}
		return matchedFiles.flatMap((i) => i[1]);
	});
	return {
		load: quansync(function* (force = false) {
			if (matchedFiles == null || force) yield findConfigs();
			for (const [source, files] of matchedFiles) {
				if (!files.length) continue;
				if (!multiple) {
					const result = yield loadConfigFile(files[0], source);
					if (result) return [result];
				} else for (const file of files) {
					const result = yield loadConfigFile(file, source);
					if (result) results.push(result);
				}
			}
			return results;
		}),
		findConfigs
	};
}

//#endregion
export { createConfigCoreLoader };