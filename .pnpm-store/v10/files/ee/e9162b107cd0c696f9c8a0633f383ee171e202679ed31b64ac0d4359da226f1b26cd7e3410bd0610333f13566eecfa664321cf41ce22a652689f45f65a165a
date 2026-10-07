import { TestError, ParsedStack } from './types.js';

type OriginalMapping = {
    source: string | null;
    line: number;
    column: number;
    name: string | null;
};

interface StackTraceParserOptions {
	ignoreStackEntries?: (RegExp | string)[];
	getSourceMap?: (file: string) => unknown;
	getUrlId?: (id: string) => string;
	frameFilter?: (error: TestError, frame: ParsedStack) => boolean | void;
}
declare const stackIgnorePatterns: (string | RegExp)[];

declare function parseSingleFFOrSafariStack(raw: string): ParsedStack | null;
declare function parseSingleStack(raw: string): ParsedStack | null;
declare function parseSingleV8Stack(raw: string): ParsedStack | null;
declare function createStackString(stacks: ParsedStack[]): string;
declare function parseStacktrace(stack: string, options?: StackTraceParserOptions): ParsedStack[];
declare function parseErrorStacktrace(e: TestError | Error, options?: StackTraceParserOptions): ParsedStack[];
interface SourceMapLike {
	version: number;
	mappings?: string;
	names?: string[];
	sources?: string[];
	sourcesContent?: string[];
	sourceRoot?: string;
}
interface Needle {
	line: number;
	column: number;
}
declare class DecodedMap {
	map: SourceMapLike;
	_encoded: string;
	_decoded: undefined | number[][][];
	_decodedMemo: Stats;
	url: string;
	version: number;
	names: string[];
	resolvedSources: string[];
	constructor(map: SourceMapLike, from: string);
}
interface Stats {
	lastKey: number;
	lastNeedle: number;
	lastIndex: number;
}
declare function getOriginalPosition(map: DecodedMap, needle: Needle): OriginalMapping | null;

export { DecodedMap, createStackString, stackIgnorePatterns as defaultStackIgnorePatterns, getOriginalPosition, parseErrorStacktrace, parseSingleFFOrSafariStack, parseSingleStack, parseSingleV8Stack, parseStacktrace };
export type { StackTraceParserOptions };
