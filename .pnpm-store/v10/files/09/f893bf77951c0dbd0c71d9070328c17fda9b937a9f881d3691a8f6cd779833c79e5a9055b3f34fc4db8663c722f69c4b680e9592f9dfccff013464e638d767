import { TransformResult } from 'vite';
import { E as EncodedSourceMap } from './trace-mapping.d-DLVdEqOp.js';

interface InstallSourceMapSupportOptions {
	getSourceMap: (source: string) => EncodedSourceMap | null | undefined;
}
declare function withInlineSourcemap(result: TransformResult, options: {
	root: string
	filepath: string
	noFirstLineMapping?: boolean
}): TransformResult;
declare function extractSourceMap(code: string): EncodedSourceMap | null;
declare function installSourcemapsSupport(options: InstallSourceMapSupportOptions): void;

export { extractSourceMap, installSourcemapsSupport, withInlineSourcemap };
