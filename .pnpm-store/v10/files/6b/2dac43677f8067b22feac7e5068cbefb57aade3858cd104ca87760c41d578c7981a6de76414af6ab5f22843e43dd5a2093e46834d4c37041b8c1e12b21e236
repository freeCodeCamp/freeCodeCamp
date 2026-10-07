import { n as fsExists, t as fsCopy } from "./fs-Dd6Htx2P.mjs";
import { i as noop, s as resolveComma, u as toArray } from "./general-D3muxt2f.mjs";
import { o as prettyFormat } from "./logger-uV8l1UFa.mjs";
import { t as formatBytes } from "./format-CajNSstg.mjs";
import { builtinModules } from "node:module";
import { chmod } from "node:fs/promises";
import path from "node:path";
import { bold, dim, green, underline } from "ansis";
import { createDebug } from "obug";
import { glob, isDynamicPattern } from "tinyglobby";
import { RE_DTS } from "rolldown-plugin-dts/internal";
import { promisify } from "node:util";
import { Buffer } from "node:buffer";
import { brotliCompress, gzip } from "node:zlib";
//#region src/features/copy.ts
async function copy(options) {
	if (!options.copy) return;
	const resolved = await resolveCopyEntries(options);
	await Promise.all(resolved.map(({ from, to, verbose }) => {
		if (verbose) options.logger.info(options.nameLabel, `Copying files from ${path.relative(options.cwd, from)} to ${path.relative(options.cwd, to)}`);
		return fsCopy(from, to);
	}));
}
async function resolveCopyEntries(options) {
	const copy = toArray(typeof options.copy === "function" ? await options.copy(options) : options.copy);
	if (!copy.length) return [];
	const resolved = (await Promise.all(copy.map(async (entry) => {
		if (typeof entry === "string") entry = { from: [entry] };
		let from = toArray(entry.from);
		if (from.some((f) => isDynamicPattern(f))) from = await glob(from, {
			cwd: options.cwd,
			onlyFiles: true,
			expandDirectories: false
		});
		return from.map((file) => resolveCopyEntry({
			...entry,
			from: file
		}, options.cwd, options.outDir));
	}))).flat();
	if (!resolved.length) options.logger.warn(options.nameLabel, `No files matched for copying.`);
	return resolved;
}
function resolveCopyEntry(entry, cwd, outDir) {
	const { flatten = true, rename } = entry;
	const from = path.resolve(cwd, entry.from);
	const to = entry.to ? path.resolve(cwd, entry.to) : outDir;
	const { base, dir } = path.parse(path.relative(cwd, from));
	const destFolder = flatten || !flatten && !dir ? to : dir.replace(dir.split(path.sep)[0], to);
	const dest = path.join(destFolder, rename ? renameTarget(base, rename, from) : base);
	return {
		...entry,
		from,
		to: dest
	};
}
function renameTarget(target, rename, src) {
	const parsedPath = path.parse(target);
	return typeof rename === "string" ? rename : rename(parsedPath.name, parsedPath.ext.replace(".", ""), src);
}
//#endregion
//#region src/features/node-protocol.ts
/**
* The `node:` protocol was added in Node.js v14.18.0.
* @see https://nodejs.org/api/esm.html#node-imports
*/
function NodeProtocolPlugin(nodeProtocolOption) {
	const modulesWithoutProtocol = builtinModules.filter((mod) => !mod.startsWith("node:"));
	return {
		name: `tsdown:node-protocol`,
		resolveId: {
			order: "pre",
			filter: { id: nodeProtocolOption === "strip" ? new RegExp(`^node:(${modulesWithoutProtocol.join("|")})$`) : new RegExp(`^(${modulesWithoutProtocol.join("|")})$`) },
			handler: nodeProtocolOption === "strip" ? async function(id, ...args) {
				const strippedId = id.slice(5);
				const resolved = await this.resolve(strippedId, ...args);
				if (resolved && !resolved.external) return resolved;
				return {
					id: strippedId,
					external: true,
					moduleSideEffects: false
				};
			} : (id) => {
				return {
					id: `node:${id}`,
					external: true,
					moduleSideEffects: false
				};
			}
		}
	};
}
//#endregion
//#region src/features/report.ts
const debug = createDebug("tsdown:report");
const brotliCompressAsync = promisify(brotliCompress);
const gzipAsync = promisify(gzip);
const defaultOptions = {
	gzip: true,
	brotli: false,
	maxCompressSize: 1e6
};
function ReportPlugin(config, cjsDts, isDualFormat) {
	return {
		name: "tsdown:report",
		async writeBundle(outputOptions, bundle) {
			const outDir = outputOptions.file ? path.resolve(config.cwd, outputOptions.file, "..") : path.resolve(config.cwd, outputOptions.dir);
			await outputReport(config, Object.values(bundle), outDir, cjsDts, isDualFormat);
		}
	};
}
async function outputReport(config, chunks, outDir, cjsDts, isDualFormat) {
	outDir = path.relative(config.cwd, outDir);
	const options = {
		...defaultOptions,
		...config.report
	};
	const sizes = [];
	for (const chunk of chunks) {
		const size = await calcSize(options, chunk);
		sizes.push(size);
	}
	const filenameLength = Math.max(...sizes.map((size) => size.filename.length));
	const rawTextLength = Math.max(...sizes.map((size) => size.rawText.length));
	const gzipTextLength = Math.max(...sizes.map((size) => size.gzipText == null ? 0 : size.gzipText.length));
	const brotliTextLength = Math.max(...sizes.map((size) => size.brotliText == null ? 0 : size.brotliText.length));
	let totalRaw = 0;
	for (const size of sizes) {
		size.rawText = size.rawText.padStart(rawTextLength);
		size.gzipText = size.gzipText?.padStart(gzipTextLength);
		size.brotliText = size.brotliText?.padStart(brotliTextLength);
		totalRaw += size.raw;
	}
	sizes.sort((a, b) => {
		if (a.dts !== b.dts) return a.dts ? 1 : -1;
		if (a.isEntry !== b.isEntry) return a.isEntry ? -1 : 1;
		return b.raw - a.raw;
	});
	const formatLabel = isDualFormat && prettyFormat(cjsDts ? "cjs" : config.format);
	for (const size of sizes) {
		const filenameColor = size.dts ? green : noop;
		const filename = path.normalize(size.filename);
		config.logger.info(config.nameLabel, formatLabel, dim(outDir + path.sep) + filenameColor((size.isEntry ? bold : noop)(filename)), ` `.repeat(filenameLength - size.filename.length), dim(size.rawText), options.gzip && size.gzipText && dim`│ gzip: ${size.gzipText}`, options.brotli && size.brotliText && dim`│ brotli: ${size.brotliText}`);
	}
	const totalSizeText = formatBytes(totalRaw);
	config.logger.info(config.nameLabel, formatLabel, `${sizes.length} files, total: ${totalSizeText}`);
}
async function calcSize(options, chunk) {
	debug(`Calculating size for`, chunk.fileName);
	const content = chunk.type === "chunk" ? chunk.code : chunk.source;
	const raw = Buffer.byteLength(content, "utf8");
	debug("[size]", chunk.fileName, raw);
	let gzip = Infinity;
	let brotli = Infinity;
	if (raw > options.maxCompressSize) debug(chunk.fileName, "file size exceeds limit, skip gzip/brotli");
	else {
		if (options.gzip) {
			gzip = (await gzipAsync(content)).length;
			debug("[gzip]", chunk.fileName, gzip);
		}
		if (options.brotli) {
			brotli = (await brotliCompressAsync(content)).length;
			debug("[brotli]", chunk.fileName, brotli);
		}
	}
	return {
		filename: chunk.fileName,
		dts: RE_DTS.test(chunk.fileName),
		isEntry: chunk.type === "chunk" && chunk.isEntry,
		raw,
		rawText: formatBytes(raw),
		gzip,
		gzipText: formatBytes(gzip),
		brotli,
		brotliText: formatBytes(brotli)
	};
}
//#endregion
//#region src/features/shebang.ts
const RE_SHEBANG = /^#!.*/;
function ShebangPlugin(logger, cwd, nameLabel, isDualFormat) {
	return {
		name: "tsdown:shebang",
		async writeBundle(options, bundle) {
			for (const chunk of Object.values(bundle)) {
				if (chunk.type !== "chunk" || !chunk.isEntry) continue;
				if (!RE_SHEBANG.test(chunk.code)) continue;
				const filepath = path.resolve(cwd, options.file || path.join(options.dir, chunk.fileName));
				if (await fsExists(filepath)) {
					logger.info(nameLabel, isDualFormat && prettyFormat(options.format), `Granting execute permission to ${underline(path.relative(cwd, filepath))}`);
					await chmod(filepath, 493);
				}
			}
		}
	};
}
//#endregion
//#region src/utils/chunks.ts
function addOutDirToChunks(chunks, outDir) {
	return chunks.map((chunk) => {
		chunk.outDir = outDir;
		return chunk;
	});
}
//#endregion
//#region src/features/watch.ts
const endsWithConfig = /[\\/](?:tsdown\.config.*|package\.json|tsconfig\.json)$/;
function WatchPlugin(configDeps, { config, chunks }) {
	return {
		name: "tsdown:watch",
		options: config.ignoreWatch.length ? (inputOptions) => {
			inputOptions.watch ||= {};
			inputOptions.watch.exclude = toArray(inputOptions.watch.exclude);
			inputOptions.watch.exclude.push(...config.ignoreWatch);
		} : void 0,
		async buildStart() {
			config.tsconfig && this.addWatchFile(config.tsconfig);
			for (const file of configDeps) this.addWatchFile(file);
			if (typeof config.watch !== "boolean") for (const file of resolveComma(toArray(config.watch))) this.addWatchFile(file);
			if (config.pkg) this.addWatchFile(config.pkg.packageJsonPath);
			if (config.copy) {
				const resolvedEntries = await resolveCopyEntries(config);
				for (const entry of resolvedEntries) this.addWatchFile(entry.from);
			}
		},
		generateBundle: {
			order: "post",
			handler(outputOptions, bundle) {
				chunks.push(...addOutDirToChunks(Object.values(bundle), config.outDir));
			}
		}
	};
}
//#endregion
export { ReportPlugin as a, ShebangPlugin as i, endsWithConfig as n, NodeProtocolPlugin as o, addOutDirToChunks as r, copy as s, WatchPlugin as t };
