import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';
import convertSourceMap from 'convert-source-map';

// based on vite
// https://github.com/vitejs/vite/blob/84079a84ad94de4c1ef4f1bdb2ab448ff2c01196/packages/vite/src/node/server/sourcemap.ts#L149
function extractSourcemapFromFile(code, filePath) {
	const map = (convertSourceMap.fromSource(code) || convertSourceMap.fromMapFileSource(code, createConvertSourceMapReadMap(filePath)))?.toObject();
	return map ? { map } : undefined;
}
function createConvertSourceMapReadMap(originalFileName) {
	return (filename) => {
		// convertSourceMap can detect invalid filename from comments.
		// fallback to empty source map to avoid errors.
		const targetPath = path.resolve(path.dirname(originalFileName), filename);
		if (existsSync(targetPath)) {
			return readFileSync(targetPath, "utf-8");
		}
		return "{}";
	};
}

export { extractSourcemapFromFile };
