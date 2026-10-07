/*
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * Run `yarn fix:special` to update
 */

import { Buffer } from "buffer";

declare interface BufferEntry {
	map?: null | RawSourceMap;
	bufferedMap?: null | BufferedMap;
}
declare interface BufferedMap {
	/**
	 * version
	 */
	version: number;

	/**
	 * sources
	 */
	sources: string[];

	/**
	 * name
	 */
	names: string[];

	/**
	 * source root
	 */
	sourceRoot?: string;

	/**
	 * sources content
	 */
	sourcesContent?: ("" | Buffer)[];

	/**
	 * mappings
	 */
	mappings?: Buffer;

	/**
	 * file
	 */
	file: string;
}
declare interface CachedData {
	/**
	 * source
	 */
	source?: boolean;

	/**
	 * buffer
	 */
	buffer: Buffer;

	/**
	 * size
	 */
	size?: number;

	/**
	 * maps
	 */
	maps: Map<string, BufferEntry>;

	/**
	 * hash
	 */
	hash?: (string | Buffer)[];
}
declare class CachedSource extends Source {
	constructor(source: Source | (() => Source), cachedData?: CachedData);
	getCachedData(): CachedData;
	originalLazy(): Source | (() => Source);
	original(): Source;
	streamChunks(
		options: StreamChunksOptions,
		onChunk: (
			chunk: undefined | string,
			generatedLine: number,
			generatedColumn: number,
			sourceIndex: number,
			originalLine: number,
			originalColumn: number,
			nameIndex: number,
		) => void,
		onSource: (
			sourceIndex: number,
			source: null | string,
			sourceContent?: string,
		) => void,
		onName: (nameIndex: number, name: string) => void,
	): GeneratedSourceInfo;
}
declare class CompatSource extends Source {
	constructor(sourceLike: SourceLike);
	static from(sourceLike: SourceLike): Source;
}
declare class ConcatSource extends Source {
	constructor(...args: ConcatSourceChild[]);
	getChildren(): Source[];
	add(item: ConcatSourceChild): void;
	addAllSkipOptimizing(items: ConcatSourceChild[]): void;
	streamChunks(
		options: StreamChunksOptions,
		onChunk: (
			chunk: undefined | string,
			generatedLine: number,
			generatedColumn: number,
			sourceIndex: number,
			originalLine: number,
			originalColumn: number,
			nameIndex: number,
		) => void,
		onSource: (
			sourceIndex: number,
			source: null | string,
			sourceContent?: string,
		) => void,
		onName: (nameIndex: number, name: string) => void,
	): GeneratedSourceInfo;
}
type ConcatSourceChild = string | Source | SourceLike;
declare interface GeneratedSourceInfo {
	/**
	 * generated line
	 */
	generatedLine?: number;

	/**
	 * generated column
	 */
	generatedColumn?: number;

	/**
	 * source
	 */
	source?: string;
}
declare interface HashLike {
	/**
	 * make hash update
	 */
	update: (data: string | Buffer, inputEncoding?: string) => HashLike;

	/**
	 * get hash digest
	 */
	digest: (encoding?: string) => string | Buffer;
}
declare interface MapOptions {
	/**
	 * need columns?
	 */
	columns?: boolean;

	/**
	 * is module
	 */
	module?: boolean;
}
declare class OriginalSource extends Source {
	constructor(value: string | Buffer, name: string);
	getName(): string;
	streamChunks(
		options: StreamChunksOptions,
		onChunk: (
			chunk: undefined | string,
			generatedLine: number,
			generatedColumn: number,
			sourceIndex: number,
			originalLine: number,
			originalColumn: number,
			nameIndex: number,
		) => void,
		onSource: (
			sourceIndex: number,
			source: null | string,
			sourceContent?: string,
		) => void,
		_onName: (nameIndex: number, name: string) => void,
	): GeneratedSourceInfo;
}
declare class PrefixSource extends Source {
	constructor(prefix: string, source: string | Source | Buffer);
	getPrefix(): string;
	original(): Source;
	streamChunks(
		options: StreamChunksOptions,
		onChunk: (
			chunk: undefined | string,
			generatedLine: number,
			generatedColumn: number,
			sourceIndex: number,
			originalLine: number,
			originalColumn: number,
			nameIndex: number,
		) => void,
		onSource: (
			sourceIndex: number,
			source: null | string,
			sourceContent?: string,
		) => void,
		onName: (nameIndex: number, name: string) => void,
	): GeneratedSourceInfo;
}
declare class RawSource extends Source {
	constructor(value: string | Buffer, convertToString?: boolean);
	isBuffer(): boolean;
	streamChunks(
		options: StreamChunksOptions,
		onChunk: (
			chunk: undefined | string,
			generatedLine: number,
			generatedColumn: number,
			sourceIndex: number,
			originalLine: number,
			originalColumn: number,
			nameIndex: number,
		) => void,
		onSource: (
			sourceIndex: number,
			source: null | string,
			sourceContent?: string,
		) => void,
		onName: (nameIndex: number, name: string) => void,
	): GeneratedSourceInfo;
}
declare interface RawSourceMap {
	/**
	 * version
	 */
	version: number;

	/**
	 * sources
	 */
	sources: string[];

	/**
	 * names
	 */
	names: string[];

	/**
	 * source root
	 */
	sourceRoot?: string;

	/**
	 * sources content
	 */
	sourcesContent?: string[];

	/**
	 * mappings
	 */
	mappings: string;

	/**
	 * file
	 */
	file: string;

	/**
	 * debug id
	 */
	debugId?: string;

	/**
	 * ignore list
	 */
	ignoreList?: number[];
}
declare class ReplaceSource extends Source {
	constructor(source: Source, name?: string);
	getName(): undefined | string;
	getReplacements(): Replacement[];
	replace(start: number, end: number, newValue: string, name?: string): void;
	insert(pos: number, newValue: string, name?: string): void;
	original(): Source;
	streamChunks(
		options: StreamChunksOptions,
		onChunk: (
			chunk: undefined | string,
			generatedLine: number,
			generatedColumn: number,
			sourceIndex: number,
			originalLine: number,
			originalColumn: number,
			nameIndex: number,
		) => void,
		onSource: (
			sourceIndex: number,
			source: null | string,
			sourceContent?: string,
		) => void,
		onName: (nameIndex: number, name: string) => void,
	): GeneratedSourceInfo;
	static Replacement: typeof Replacement;
}
declare class Replacement {
	constructor(start: number, end: number, content: string, name?: string);
	start: number;
	end: number;
	content: string;
	name?: string;
	index?: number;
}
declare class SizeOnlySource extends Source {
	constructor(size: number);
}
declare class Source {
	constructor();
	source(): SourceValue;
	buffer(): Buffer;
	size(): number;
	map(options?: MapOptions): null | RawSourceMap;
	sourceAndMap(options?: MapOptions): SourceAndMap;
	updateHash(hash: HashLike): void;
}
declare interface SourceAndMap {
	/**
	 * source
	 */
	source: SourceValue;

	/**
	 * map
	 */
	map: null | RawSourceMap;
}
declare interface SourceLike {
	/**
	 * source
	 */
	source: () => SourceValue;

	/**
	 * buffer
	 */
	buffer?: () => Buffer;

	/**
	 * size
	 */
	size?: () => number;

	/**
	 * map
	 */
	map?: (options?: MapOptions) => null | RawSourceMap;

	/**
	 * source and map
	 */
	sourceAndMap?: (options?: MapOptions) => SourceAndMap;

	/**
	 * hash updater
	 */
	updateHash?: (hash: HashLike) => void;
}
declare class SourceMapSource extends Source {
	constructor(
		value: string | Buffer,
		name: string,
		sourceMap?: string | RawSourceMap | Buffer,
		originalSource?: string | Buffer,
		innerSourceMap?: null | string | RawSourceMap | Buffer,
		removeOriginalSource?: boolean,
	);
	getArgsAsBuffers(): [
		Buffer,
		string,
		Buffer,
		undefined | Buffer,
		undefined | Buffer,
		undefined | boolean,
	];
	streamChunks(
		options: StreamChunksOptions,
		onChunk: (
			chunk: undefined | string,
			generatedLine: number,
			generatedColumn: number,
			sourceIndex: number,
			originalLine: number,
			originalColumn: number,
			nameIndex: number,
		) => void,
		onSource: (
			sourceIndex: number,
			source: null | string,
			sourceContent?: string,
		) => void,
		onName: (nameIndex: number, name: string) => void,
	): GeneratedSourceInfo;
}
type SourceValue = string | Buffer;
declare interface StreamChunksOptions {
	source?: boolean;
	finalSource?: boolean;
	columns?: boolean;
}
declare namespace exports {
	export namespace util {
		export namespace stringBufferUtils {
			export let disableDualStringBufferCaching: () => void;
			export let enableDualStringBufferCaching: () => void;
			export let enterStringInterningRange: () => void;
			export let exitStringInterningRange: () => void;
			export let internString: (str: string) => string;
			export let isDualStringBufferCachingEnabled: () => boolean;
		}
	}
	export type OnChunk = (
		chunk: undefined | string,
		generatedLine: number,
		generatedColumn: number,
		sourceIndex: number,
		originalLine: number,
		originalColumn: number,
		nameIndex: number,
	) => void;
	export type OnName = (nameIndex: number, name: string) => void;
	export type OnSource = (
		sourceIndex: number,
		source: null | string,
		sourceContent?: string,
	) => void;
	export {
		Source,
		RawSource,
		OriginalSource,
		SourceMapSource,
		CachedSource,
		ConcatSource,
		ReplaceSource,
		PrefixSource,
		SizeOnlySource,
		CompatSource,
		CachedData,
		SourceLike,
		ConcatSourceChild,
		Replacement,
		HashLike,
		MapOptions,
		RawSourceMap,
		SourceAndMap,
		SourceValue,
		GeneratedSourceInfo,
		StreamChunksOptions,
	};
}

export = exports;
