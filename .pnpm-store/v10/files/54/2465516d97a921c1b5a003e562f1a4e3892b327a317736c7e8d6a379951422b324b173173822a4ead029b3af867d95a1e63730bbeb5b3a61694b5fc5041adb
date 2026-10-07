import { StackLineParser, StackLineParserFn } from '../types/stacktrace';
export type GetModuleFn = (filename: string | undefined) => string | undefined;
/**
 * Does this filename look like it's part of the app code?
 */
export declare function filenameIsInApp(filename: string, isNative?: boolean): boolean;
/** Node Stack line parser */
export declare function node(getModule?: GetModuleFn): StackLineParserFn;
/**
 * Node.js stack line parser
 *
 * This is in @sentry/core so it can be used from the Electron SDK in the browser for when `nodeIntegration == true`.
 * This allows it to be used without referencing or importing any node specific code which causes bundlers to complain
 */
export declare function nodeStackLineParser(getModule?: GetModuleFn): StackLineParser;
//# sourceMappingURL=node-stack-trace.d.ts.map
