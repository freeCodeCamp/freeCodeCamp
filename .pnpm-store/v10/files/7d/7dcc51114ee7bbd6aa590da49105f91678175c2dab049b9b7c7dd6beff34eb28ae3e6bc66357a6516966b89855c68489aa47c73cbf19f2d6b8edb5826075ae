import fs from 'node:fs';
import { builtinModules } from 'node:module';
import { d as dirname, j as join, b as basename, r as resolve, e as extname } from './chunk-pathe.M-eThtNZ.js';

const { existsSync, readdirSync, statSync } = fs;
function findMockRedirect(root, mockPath, external) {
	const path = external || mockPath;
	// it's a node_module alias
	// all mocks should be inside <root>/__mocks__
	if (external || isNodeBuiltin(mockPath) || !existsSync(mockPath)) {
		const mockDirname = dirname(path);
		const mockFolder = join(root, "__mocks__", mockDirname);
		if (!existsSync(mockFolder)) {
			return null;
		}
		const baseOriginal = basename(path);
		function findFile(mockFolder, baseOriginal) {
			const files = readdirSync(mockFolder);
			for (const file of files) {
				const baseFile = basename(file, extname(file));
				if (baseFile === baseOriginal) {
					const path = resolve(mockFolder, file);
					// if the same name, return the file
					if (statSync(path).isFile()) {
						return path;
					} else {
						// find folder/index.{js,ts}
						const indexFile = findFile(path, "index");
						if (indexFile) {
							return indexFile;
						}
					}
				}
			}
			return null;
		}
		return findFile(mockFolder, baseOriginal);
	}
	const dir = dirname(path);
	const baseId = basename(path);
	const fullPath = resolve(dir, "__mocks__", baseId);
	return existsSync(fullPath) ? fullPath : null;
}
const builtins = new Set([
	...builtinModules,
	"assert/strict",
	"diagnostics_channel",
	"dns/promises",
	"fs/promises",
	"path/posix",
	"path/win32",
	"readline/promises",
	"stream/consumers",
	"stream/promises",
	"stream/web",
	"timers/promises",
	"util/types",
	"wasi"
]);
// https://nodejs.org/api/modules.html#built-in-modules-with-mandatory-node-prefix
const prefixedBuiltins = new Set([
	"node:sea",
	"node:sqlite",
	"node:test",
	"node:test/reporters"
]);
const NODE_BUILTIN_NAMESPACE = "node:";
function isNodeBuiltin(id) {
	if (prefixedBuiltins.has(id)) {
		return true;
	}
	return builtins.has(id.startsWith(NODE_BUILTIN_NAMESPACE) ? id.slice(NODE_BUILTIN_NAMESPACE.length) : id);
}

export { findMockRedirect };
