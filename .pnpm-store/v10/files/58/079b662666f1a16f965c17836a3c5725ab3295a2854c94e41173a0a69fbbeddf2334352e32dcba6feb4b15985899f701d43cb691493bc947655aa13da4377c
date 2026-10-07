/*
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * Run `yarn fix:special` to update
 */

import { Buffer } from "buffer";
import { AsyncSeriesBailHook, AsyncSeriesHook, SyncHook } from "tapable";
import { URL as URL_Import } from "url";

declare interface Abortable {
	/**
	 * When provided the corresponding `AbortController` can be used to cancel an asynchronous action.
	 */
	signal?: AbortSignal;
}
type Alias = string | false | string[];
declare interface AliasOption {
	alias: Alias;
	name: string;
	onlyModule?: boolean;
}
type AliasOptionNewRequest = string | false | string[];
declare interface AliasOptions {
	[index: string]: AliasOptionNewRequest;
}
type BaseFileSystem = FileSystem & SyncFileSystem;
declare interface BaseResolveRequest {
	/**
	 * path
	 */
	path: string | false;

	/**
	 * content
	 */
	context?: Context;

	/**
	 * description file path
	 */
	descriptionFilePath?: string;

	/**
	 * description file root
	 */
	descriptionFileRoot?: string;

	/**
	 * description file data
	 */
	descriptionFileData?: JsonObject;

	/**
	 * tsconfig paths map
	 */
	tsconfigPathsMap?: null | TsconfigPathsMap;

	/**
	 * relative path
	 */
	relativePath?: string;

	/**
	 * true when need to ignore symlinks, otherwise false
	 */
	ignoreSymlinks?: boolean;

	/**
	 * true when full specified, otherwise false
	 */
	fullySpecified?: boolean;

	/**
	 * inner request for internal usage
	 */
	__innerRequest?: string;

	/**
	 * inner request for internal usage
	 */
	__innerRequest_request?: string;

	/**
	 * inner relative path for internal usage
	 */
	__innerRequest_relativePath?: string;
}
type BufferEncoding =
	| "ascii"
	| "utf8"
	| "utf-8"
	| "utf16le"
	| "utf-16le"
	| "ucs2"
	| "ucs-2"
	| "base64"
	| "base64url"
	| "latin1"
	| "binary"
	| "hex";
type BufferEncodingOption = "buffer" | { encoding: "buffer" };
declare interface Cache {
	[index: string]: undefined | ResolveRequest | ResolveRequest[];
}
declare class CachedInputFileSystem {
	constructor(fileSystem: BaseFileSystem, duration: number);
	fileSystem: BaseFileSystem;
	lstat?: LStat;
	lstatSync?: LStatSync;
	stat: Stat;
	statSync: StatSync;
	readdir: Readdir;
	readdirSync: ReaddirSync;
	readFile: ReadFile;
	readFileSync: ReadFileSync;
	readJson?: (
		pathOrFileDescription: PathOrFileDescriptor,
		callback: (
			err: null | Error | NodeJS.ErrnoException,
			result?: JsonObject,
		) => void,
	) => void;
	readJsonSync?: (pathOrFileDescription: PathOrFileDescriptor) => JsonObject;
	readlink: Readlink;
	readlinkSync: ReadlinkSync;
	realpath?: RealPath;
	realpathSync?: RealPathSync;
	purge(
		what?:
			| string
			| number
			| Buffer
			| URL_url
			| (string | number | Buffer | URL_url)[]
			| Set<string | number | Buffer | URL_url>,
	): void;
}
declare class CloneBasenamePlugin {
	constructor(
		source:
			| string
			| AsyncSeriesBailHook<
					[ResolveRequest, ResolveContext],
					null | ResolveRequest
			  >,
		target:
			| string
			| AsyncSeriesBailHook<
					[ResolveRequest, ResolveContext],
					null | ResolveRequest
			  >,
	);
	source:
		| string
		| AsyncSeriesBailHook<
				[ResolveRequest, ResolveContext],
				null | ResolveRequest
		  >;
	target:
		| string
		| AsyncSeriesBailHook<
				[ResolveRequest, ResolveContext],
				null | ResolveRequest
		  >;
	apply(resolver: Resolver): void;
}
type Context = KnownContext & Record<any, any>;
declare interface Dirent<T extends string | Buffer = string> {
	/**
	 * true when is file, otherwise false
	 */
	isFile: () => boolean;

	/**
	 * true when is directory, otherwise false
	 */
	isDirectory: () => boolean;

	/**
	 * true when is block device, otherwise false
	 */
	isBlockDevice: () => boolean;

	/**
	 * true when is character device, otherwise false
	 */
	isCharacterDevice: () => boolean;

	/**
	 * true when is symbolic link, otherwise false
	 */
	isSymbolicLink: () => boolean;

	/**
	 * true when is FIFO, otherwise false
	 */
	isFIFO: () => boolean;

	/**
	 * true when is socket, otherwise false
	 */
	isSocket: () => boolean;

	/**
	 * name
	 */
	name: T;

	/**
	 * path
	 */
	parentPath: string;

	/**
	 * path
	 */
	path?: string;
}
type EncodingOption =
	| undefined
	| null
	| "ascii"
	| "utf8"
	| "utf-8"
	| "utf16le"
	| "utf-16le"
	| "ucs2"
	| "ucs-2"
	| "base64"
	| "base64url"
	| "latin1"
	| "binary"
	| "hex"
	| ObjectEncodingOptions;
type ErrorWithDetail = Error & { details?: string };
declare interface ExtensionAliasOption {
	alias: string | string[];
	extension: string;
}
declare interface ExtensionAliasOptions {
	[index: string]: string | string[];
}
declare interface FileSystem {
	/**
	 * read file method
	 */
	readFile: ReadFile;

	/**
	 * readdir method
	 */
	readdir: Readdir;

	/**
	 * read json method
	 */
	readJson?: (
		pathOrFileDescription: PathOrFileDescriptor,
		callback: (
			err: null | Error | NodeJS.ErrnoException,
			result?: JsonObject,
		) => void,
	) => void;

	/**
	 * read link method
	 */
	readlink: Readlink;

	/**
	 * lstat method
	 */
	lstat?: LStat;

	/**
	 * stat method
	 */
	stat: Stat;

	/**
	 * realpath method
	 */
	realpath?: RealPath;
}
type IBigIntStats = IStatsBase<bigint> & {
	atimeNs: bigint;
	mtimeNs: bigint;
	ctimeNs: bigint;
	birthtimeNs: bigint;
};
declare interface IStats {
	/**
	 * is file
	 */
	isFile: () => boolean;

	/**
	 * is directory
	 */
	isDirectory: () => boolean;

	/**
	 * is block device
	 */
	isBlockDevice: () => boolean;

	/**
	 * is character device
	 */
	isCharacterDevice: () => boolean;

	/**
	 * is symbolic link
	 */
	isSymbolicLink: () => boolean;

	/**
	 * is FIFO
	 */
	isFIFO: () => boolean;

	/**
	 * is socket
	 */
	isSocket: () => boolean;

	/**
	 * dev
	 */
	dev: number;

	/**
	 * ino
	 */
	ino: number;

	/**
	 * mode
	 */
	mode: number;

	/**
	 * nlink
	 */
	nlink: number;

	/**
	 * uid
	 */
	uid: number;

	/**
	 * gid
	 */
	gid: number;

	/**
	 * rdev
	 */
	rdev: number;

	/**
	 * size
	 */
	size: number;

	/**
	 * blksize
	 */
	blksize: number;

	/**
	 * blocks
	 */
	blocks: number;

	/**
	 * atime ms
	 */
	atimeMs: number;

	/**
	 * mtime ms
	 */
	mtimeMs: number;

	/**
	 * ctime ms
	 */
	ctimeMs: number;

	/**
	 * birthtime ms
	 */
	birthtimeMs: number;

	/**
	 * atime
	 */
	atime: Date;

	/**
	 * mtime
	 */
	mtime: Date;

	/**
	 * ctime
	 */
	ctime: Date;

	/**
	 * birthtime
	 */
	birthtime: Date;
}
declare interface IStatsBase<T> {
	/**
	 * is file
	 */
	isFile: () => boolean;

	/**
	 * is directory
	 */
	isDirectory: () => boolean;

	/**
	 * is block device
	 */
	isBlockDevice: () => boolean;

	/**
	 * is character device
	 */
	isCharacterDevice: () => boolean;

	/**
	 * is symbolic link
	 */
	isSymbolicLink: () => boolean;

	/**
	 * is FIFO
	 */
	isFIFO: () => boolean;

	/**
	 * is socket
	 */
	isSocket: () => boolean;

	/**
	 * dev
	 */
	dev: T;

	/**
	 * ino
	 */
	ino: T;

	/**
	 * mode
	 */
	mode: T;

	/**
	 * nlink
	 */
	nlink: T;

	/**
	 * uid
	 */
	uid: T;

	/**
	 * gid
	 */
	gid: T;

	/**
	 * rdev
	 */
	rdev: T;

	/**
	 * size
	 */
	size: T;

	/**
	 * blksize
	 */
	blksize: T;

	/**
	 * blocks
	 */
	blocks: T;

	/**
	 * atime ms
	 */
	atimeMs: T;

	/**
	 * mtime ms
	 */
	mtimeMs: T;

	/**
	 * ctime ms
	 */
	ctimeMs: T;

	/**
	 * birthtime ms
	 */
	birthtimeMs: T;

	/**
	 * atime
	 */
	atime: Date;

	/**
	 * mtime
	 */
	mtime: Date;

	/**
	 * ctime
	 */
	ctime: Date;

	/**
	 * birthtime
	 */
	birthtime: Date;
}
declare interface Iterator<T, Z> {
	(
		item: T,
		callback: (err?: null | Error, result?: null | Z) => void,
		i: number,
	): void;
}
declare interface JsonObject {
	[index: string]:
		| undefined
		| null
		| string
		| number
		| boolean
		| JsonObject
		| JsonValue[];
}
type JsonValue = null | string | number | boolean | JsonObject | JsonValue[];
declare interface KnownContext {
	/**
	 * environments
	 */
	environments?: string[];
}
declare interface KnownHooks {
	/**
	 * resolve step hook
	 */
	resolveStep: SyncHook<
		[
			AsyncSeriesBailHook<
				[ResolveRequest, ResolveContext],
				null | ResolveRequest
			>,
			ResolveRequest,
		]
	>;

	/**
	 * no resolve hook
	 */
	noResolve: SyncHook<[ResolveRequest, Error]>;

	/**
	 * resolve hook
	 */
	resolve: AsyncSeriesBailHook<
		[ResolveRequest, ResolveContext],
		null | ResolveRequest
	>;

	/**
	 * result hook
	 */
	result: AsyncSeriesHook<[ResolveRequest, ResolveContext]>;
}
declare interface LStat {
	(
		path: PathLike,
		callback: (err: null | NodeJS.ErrnoException, result?: IStats) => void,
	): void;
	(
		path: PathLike,
		options: undefined | (StatOptions & { bigint?: false }),
		callback: (err: null | NodeJS.ErrnoException, result?: IStats) => void,
	): void;
	(
		path: PathLike,
		options: StatOptions & { bigint: true },
		callback: (
			err: null | NodeJS.ErrnoException,
			result?: IBigIntStats,
		) => void,
	): void;
	(
		path: PathLike,
		options: undefined | StatOptions,
		callback: (
			err: null | NodeJS.ErrnoException,
			result?: IStats | IBigIntStats,
		) => void,
	): void;
}
declare interface LStatSync {
	(path: PathLike, options?: undefined): IStats;
	(
		path: PathLike,
		options?: StatSyncOptions & { bigint?: false; throwIfNoEntry: false },
	): undefined | IStats;
	(
		path: PathLike,
		options: StatSyncOptions & { bigint: true; throwIfNoEntry: false },
	): undefined | IBigIntStats;
	(path: PathLike, options?: StatSyncOptions & { bigint?: false }): IStats;
	(path: PathLike, options: StatSyncOptions & { bigint: true }): IBigIntStats;
	(
		path: PathLike,
		options: StatSyncOptions & { bigint: boolean; throwIfNoEntry?: false },
	): IStats | IBigIntStats;
	(
		path: PathLike,
		options?: StatSyncOptions,
	): undefined | IStats | IBigIntStats;
}
declare class LogInfoPlugin {
	constructor(
		source:
			| string
			| AsyncSeriesBailHook<
					[ResolveRequest, ResolveContext],
					null | ResolveRequest
			  >,
	);
	source:
		| string
		| AsyncSeriesBailHook<
				[ResolveRequest, ResolveContext],
				null | ResolveRequest
		  >;
	apply(resolver: Resolver): void;
}
declare interface ObjectEncodingOptions {
	/**
	 * encoding
	 */
	encoding?:
		| null
		| "ascii"
		| "utf8"
		| "utf-8"
		| "utf16le"
		| "utf-16le"
		| "ucs2"
		| "ucs-2"
		| "base64"
		| "base64url"
		| "latin1"
		| "binary"
		| "hex";
}
declare interface ParsedIdentifier {
	/**
	 * request
	 */
	request: string;

	/**
	 * query
	 */
	query: string;

	/**
	 * fragment
	 */
	fragment: string;

	/**
	 * is directory
	 */
	directory: boolean;

	/**
	 * is module
	 */
	module: boolean;

	/**
	 * is file
	 */
	file: boolean;

	/**
	 * is internal
	 */
	internal: boolean;
}
type PathLike = string | Buffer | URL_url;
type PathOrFileDescriptor = string | number | Buffer | URL_url;
type Plugin =
	| undefined
	| null
	| false
	| ""
	| 0
	| { apply: (this: Resolver, resolver: Resolver) => void }
	| ((this: Resolver, resolver: Resolver) => void);
declare interface PnpApi {
	/**
	 * resolve to unqualified
	 */
	resolveToUnqualified: (
		packageName: string,
		issuer: string,
		options: { considerBuiltins: boolean },
	) => null | string;
}
declare interface ReadFile {
	(
		path: PathOrFileDescriptor,
		options:
			| undefined
			| null
			| ({ encoding?: null; flag?: string } & Abortable),
		callback: (err: null | NodeJS.ErrnoException, result?: Buffer) => void,
	): void;
	(
		path: PathOrFileDescriptor,
		options:
			| ({ encoding: BufferEncoding; flag?: string } & Abortable)
			| "ascii"
			| "utf8"
			| "utf-8"
			| "utf16le"
			| "utf-16le"
			| "ucs2"
			| "ucs-2"
			| "base64"
			| "base64url"
			| "latin1"
			| "binary"
			| "hex",
		callback: (err: null | NodeJS.ErrnoException, result?: string) => void,
	): void;
	(
		path: PathOrFileDescriptor,
		options:
			| undefined
			| null
			| "ascii"
			| "utf8"
			| "utf-8"
			| "utf16le"
			| "utf-16le"
			| "ucs2"
			| "ucs-2"
			| "base64"
			| "base64url"
			| "latin1"
			| "binary"
			| "hex"
			| (ObjectEncodingOptions & { flag?: string } & Abortable),
		callback: (
			err: null | NodeJS.ErrnoException,
			result?: string | Buffer,
		) => void,
	): void;
	(
		path: PathOrFileDescriptor,
		callback: (err: null | NodeJS.ErrnoException, result?: Buffer) => void,
	): void;
}
declare interface ReadFileSync {
	(
		path: PathOrFileDescriptor,
		options?: null | { encoding?: null; flag?: string },
	): Buffer;
	(
		path: PathOrFileDescriptor,
		options:
			| "ascii"
			| "utf8"
			| "utf-8"
			| "utf16le"
			| "utf-16le"
			| "ucs2"
			| "ucs-2"
			| "base64"
			| "base64url"
			| "latin1"
			| "binary"
			| "hex"
			| { encoding: BufferEncoding; flag?: string },
	): string;
	(
		path: PathOrFileDescriptor,
		options?:
			| null
			| "ascii"
			| "utf8"
			| "utf-8"
			| "utf16le"
			| "utf-16le"
			| "ucs2"
			| "ucs-2"
			| "base64"
			| "base64url"
			| "latin1"
			| "binary"
			| "hex"
			| (ObjectEncodingOptions & { flag?: string }),
	): string | Buffer;
}
declare interface Readdir {
	(
		path: PathLike,
		options:
			| undefined
			| null
			| "ascii"
			| "utf8"
			| "utf-8"
			| "utf16le"
			| "utf-16le"
			| "ucs2"
			| "ucs-2"
			| "base64"
			| "base64url"
			| "latin1"
			| "binary"
			| "hex"
			| {
					encoding:
						| null
						| "ascii"
						| "utf8"
						| "utf-8"
						| "utf16le"
						| "utf-16le"
						| "ucs2"
						| "ucs-2"
						| "base64"
						| "base64url"
						| "latin1"
						| "binary"
						| "hex";
					withFileTypes?: false;
					recursive?: boolean;
			  },
		callback: (err: null | NodeJS.ErrnoException, files?: string[]) => void,
	): void;
	(
		path: PathLike,
		options:
			| { encoding: "buffer"; withFileTypes?: false; recursive?: boolean }
			| "buffer",
		callback: (err: null | NodeJS.ErrnoException, files?: Buffer[]) => void,
	): void;
	(
		path: PathLike,
		options:
			| undefined
			| null
			| "ascii"
			| "utf8"
			| "utf-8"
			| "utf16le"
			| "utf-16le"
			| "ucs2"
			| "ucs-2"
			| "base64"
			| "base64url"
			| "latin1"
			| "binary"
			| "hex"
			| (ObjectEncodingOptions & {
					withFileTypes?: false;
					recursive?: boolean;
			  }),
		callback: (
			err: null | NodeJS.ErrnoException,
			files?: string[] | Buffer[],
		) => void,
	): void;
	(
		path: PathLike,
		callback: (err: null | NodeJS.ErrnoException, files?: string[]) => void,
	): void;
	(
		path: PathLike,
		options: ObjectEncodingOptions & {
			withFileTypes: true;
			recursive?: boolean;
		},
		callback: (
			err: null | NodeJS.ErrnoException,
			files?: Dirent<string>[],
		) => void,
	): void;
	(
		path: PathLike,
		options: { encoding: "buffer"; withFileTypes: true; recursive?: boolean },
		callback: (
			err: null | NodeJS.ErrnoException,
			files: Dirent<Buffer>[],
		) => void,
	): void;
}
declare interface ReaddirSync {
	(
		path: PathLike,
		options?:
			| null
			| "ascii"
			| "utf8"
			| "utf-8"
			| "utf16le"
			| "utf-16le"
			| "ucs2"
			| "ucs-2"
			| "base64"
			| "base64url"
			| "latin1"
			| "binary"
			| "hex"
			| {
					encoding:
						| null
						| "ascii"
						| "utf8"
						| "utf-8"
						| "utf16le"
						| "utf-16le"
						| "ucs2"
						| "ucs-2"
						| "base64"
						| "base64url"
						| "latin1"
						| "binary"
						| "hex";
					withFileTypes?: false;
					recursive?: boolean;
			  },
	): string[];
	(
		path: PathLike,
		options:
			| "buffer"
			| { encoding: "buffer"; withFileTypes?: false; recursive?: boolean },
	): Buffer[];
	(
		path: PathLike,
		options?:
			| null
			| "ascii"
			| "utf8"
			| "utf-8"
			| "utf16le"
			| "utf-16le"
			| "ucs2"
			| "ucs-2"
			| "base64"
			| "base64url"
			| "latin1"
			| "binary"
			| "hex"
			| (ObjectEncodingOptions & {
					withFileTypes?: false;
					recursive?: boolean;
			  }),
	): string[] | Buffer[];
	(
		path: PathLike,
		options: ObjectEncodingOptions & {
			withFileTypes: true;
			recursive?: boolean;
		},
	): Dirent<string>[];
	(
		path: PathLike,
		options: { encoding: "buffer"; withFileTypes: true; recursive?: boolean },
	): Dirent<Buffer>[];
}
declare interface Readlink {
	(
		path: PathLike,
		options: EncodingOption,
		callback: (err: null | NodeJS.ErrnoException, result?: string) => void,
	): void;
	(
		path: PathLike,
		options: BufferEncodingOption,
		callback: (err: null | NodeJS.ErrnoException, result?: Buffer) => void,
	): void;
	(
		path: PathLike,
		options: EncodingOption,
		callback: (
			err: null | NodeJS.ErrnoException,
			result?: string | Buffer,
		) => void,
	): void;
	(
		path: PathLike,
		callback: (err: null | NodeJS.ErrnoException, result?: string) => void,
	): void;
}
declare interface ReadlinkSync {
	(path: PathLike, options?: EncodingOption): string;
	(path: PathLike, options: BufferEncodingOption): Buffer;
	(path: PathLike, options?: EncodingOption): string | Buffer;
}
declare interface RealPath {
	(
		path: PathLike,
		options: EncodingOption,
		callback: (err: null | NodeJS.ErrnoException, result?: string) => void,
	): void;
	(
		path: PathLike,
		options: BufferEncodingOption,
		callback: (err: null | NodeJS.ErrnoException, result?: Buffer) => void,
	): void;
	(
		path: PathLike,
		options: EncodingOption,
		callback: (
			err: null | NodeJS.ErrnoException,
			result?: string | Buffer,
		) => void,
	): void;
	(
		path: PathLike,
		callback: (err: null | NodeJS.ErrnoException, result?: string) => void,
	): void;
}
declare interface RealPathSync {
	(path: PathLike, options?: EncodingOption): string;
	(path: PathLike, options: BufferEncodingOption): Buffer;
	(path: PathLike, options?: EncodingOption): string | Buffer;
}
declare interface ResolveContext {
	/**
	 * directories that was found on file system
	 */
	contextDependencies?: WriteOnlySet<string>;

	/**
	 * files that was found on file system
	 */
	fileDependencies?: WriteOnlySet<string>;

	/**
	 * dependencies that was not found on file system
	 */
	missingDependencies?: WriteOnlySet<string>;

	/**
	 * set of hooks' calls. For instance, `resolve → parsedResolve → describedResolve`,
	 */
	stack?: Set<string>;

	/**
	 * log function
	 */
	log?: (str: string) => void;

	/**
	 * yield result, if provided plugins can return several results
	 */
	yield?: (request: ResolveRequest) => void;
}
declare interface ResolveFunction {
	(context: Context, path: string, request: string): string | false;
	(path: string, request: string): string | false;
}
declare interface ResolveFunctionAsync {
	(
		context: Context,
		path: string,
		request: string,
		resolveContext: ResolveContext,
		callback: (
			err: null | ErrorWithDetail,
			res?: string | false,
			req?: ResolveRequest,
		) => void,
	): void;
	(
		context: Context,
		path: string,
		request: string,
		callback: (
			err: null | ErrorWithDetail,
			res?: string | false,
			req?: ResolveRequest,
		) => void,
	): void;
	(
		path: string,
		request: string,
		resolveContext: ResolveContext,
		callback: (
			err: null | ErrorWithDetail,
			res?: string | false,
			req?: ResolveRequest,
		) => void,
	): void;
	(
		path: string,
		request: string,
		callback: (
			err: null | ErrorWithDetail,
			res?: string | false,
			req?: ResolveRequest,
		) => void,
	): void;
}
type ResolveOptionsOptionalFS = Omit<
	ResolveOptionsResolverFactoryObject_2,
	"fileSystem"
> &
	Partial<Pick<ResolveOptionsResolverFactoryObject_2, "fileSystem">>;
declare interface ResolveOptionsResolverFactoryObject_1 {
	/**
	 * alias
	 */
	alias: AliasOption[];

	/**
	 * fallback
	 */
	fallback: AliasOption[];

	/**
	 * alias fields
	 */
	aliasFields: Set<string | string[]>;

	/**
	 * extension alias
	 */
	extensionAlias: ExtensionAliasOption[];

	/**
	 * cache predicate
	 */
	cachePredicate: (predicate: ResolveRequest) => boolean;

	/**
	 * cache with context
	 */
	cacheWithContext: boolean;

	/**
	 * A list of exports field condition names.
	 */
	conditionNames: Set<string>;

	/**
	 * description files
	 */
	descriptionFiles: string[];

	/**
	 * enforce extension
	 */
	enforceExtension: boolean;

	/**
	 * exports fields
	 */
	exportsFields: Set<string | string[]>;

	/**
	 * imports fields
	 */
	importsFields: Set<string | string[]>;

	/**
	 * extensions
	 */
	extensions: Set<string>;

	/**
	 * fileSystem
	 */
	fileSystem: FileSystem;

	/**
	 * unsafe cache
	 */
	unsafeCache: false | Cache;

	/**
	 * symlinks
	 */
	symlinks: boolean;

	/**
	 * resolver
	 */
	resolver?: Resolver;

	/**
	 * modules
	 */
	modules: (string | string[])[];

	/**
	 * main fields
	 */
	mainFields: { name: string[]; forceRelative: boolean }[];

	/**
	 * main files
	 */
	mainFiles: Set<string>;

	/**
	 * plugins
	 */
	plugins: Plugin[];

	/**
	 * pnp API
	 */
	pnpApi: null | PnpApi;

	/**
	 * roots
	 */
	roots: Set<string>;

	/**
	 * fully specified
	 */
	fullySpecified: boolean;

	/**
	 * resolve to context
	 */
	resolveToContext: boolean;

	/**
	 * restrictions
	 */
	restrictions: Set<string | RegExp>;

	/**
	 * prefer relative
	 */
	preferRelative: boolean;

	/**
	 * prefer absolute
	 */
	preferAbsolute: boolean;

	/**
	 * tsconfig file path or config object
	 */
	tsconfig: string | boolean | TsconfigOptions;
}
declare interface ResolveOptionsResolverFactoryObject_2 {
	/**
	 * A list of module alias configurations or an object which maps key to value
	 */
	alias?: AliasOptions | AliasOption[];

	/**
	 * A list of module alias configurations or an object which maps key to value, applied only after modules option
	 */
	fallback?: AliasOptions | AliasOption[];

	/**
	 * An object which maps extension to extension aliases
	 */
	extensionAlias?: ExtensionAliasOptions;

	/**
	 * A list of alias fields in description files
	 */
	aliasFields?: (string | string[])[];

	/**
	 * A function which decides whether a request should be cached or not. An object is passed with at least `path` and `request` properties.
	 */
	cachePredicate?: (predicate: ResolveRequest) => boolean;

	/**
	 * Whether or not the unsafeCache should include request context as part of the cache key.
	 */
	cacheWithContext?: boolean;

	/**
	 * A list of description files to read from
	 */
	descriptionFiles?: string[];

	/**
	 * A list of exports field condition names.
	 */
	conditionNames?: string[];

	/**
	 * Enforce that a extension from extensions must be used
	 */
	enforceExtension?: boolean;

	/**
	 * A list of exports fields in description files
	 */
	exportsFields?: (string | string[])[];

	/**
	 * A list of imports fields in description files
	 */
	importsFields?: (string | string[])[];

	/**
	 * A list of extensions which should be tried for files
	 */
	extensions?: string[];

	/**
	 * The file system which should be used
	 */
	fileSystem: FileSystem;

	/**
	 * Use this cache object to unsafely cache the successful requests
	 */
	unsafeCache?: boolean | Cache;

	/**
	 * Resolve symlinks to their symlinked location
	 */
	symlinks?: boolean;

	/**
	 * A prepared Resolver to which the plugins are attached
	 */
	resolver?: Resolver;

	/**
	 * A list of directories to resolve modules from, can be absolute path or folder name
	 */
	modules?: string | string[];

	/**
	 * A list of main fields in description files
	 */
	mainFields?: (
		| string
		| string[]
		| { name: string | string[]; forceRelative: boolean }
	)[];

	/**
	 * A list of main files in directories
	 */
	mainFiles?: string[];

	/**
	 * A list of additional resolve plugins which should be applied
	 */
	plugins?: Plugin[];

	/**
	 * A PnP API that should be used - null is "never", undefined is "auto"
	 */
	pnpApi?: null | PnpApi;

	/**
	 * A list of root paths
	 */
	roots?: string[];

	/**
	 * The request is already fully specified and no extensions or directories are resolved for it
	 */
	fullySpecified?: boolean;

	/**
	 * Resolve to a context instead of a file
	 */
	resolveToContext?: boolean;

	/**
	 * A list of resolve restrictions
	 */
	restrictions?: (string | RegExp)[];

	/**
	 * Use only the sync constraints of the file system calls
	 */
	useSyncFileSystemCalls?: boolean;

	/**
	 * Prefer to resolve module requests as relative requests before falling back to modules
	 */
	preferRelative?: boolean;

	/**
	 * Prefer to resolve server-relative urls as absolute paths before falling back to resolve in roots
	 */
	preferAbsolute?: boolean;

	/**
	 * TypeScript config file path or config object with configFile and references
	 */
	tsconfig?: string | boolean | TsconfigOptions;
}
type ResolveRequest = BaseResolveRequest & Partial<ParsedIdentifier>;
declare abstract class Resolver {
	fileSystem: FileSystem;
	options: ResolveOptionsResolverFactoryObject_1;
	hooks: KnownHooks;
	ensureHook(
		name:
			| string
			| AsyncSeriesBailHook<
					[ResolveRequest, ResolveContext],
					null | ResolveRequest
			  >,
	): AsyncSeriesBailHook<
		[ResolveRequest, ResolveContext],
		null | ResolveRequest
	>;
	getHook(
		name:
			| string
			| AsyncSeriesBailHook<
					[ResolveRequest, ResolveContext],
					null | ResolveRequest
			  >,
	): AsyncSeriesBailHook<
		[ResolveRequest, ResolveContext],
		null | ResolveRequest
	>;
	resolveSync(context: Context, path: string, request: string): string | false;
	resolve(
		context: Context,
		path: string,
		request: string,
		resolveContext: ResolveContext,
		callback: (
			err: null | ErrorWithDetail,
			res?: string | false,
			req?: ResolveRequest,
		) => void,
	): void;
	doResolve(
		hook: AsyncSeriesBailHook<
			[ResolveRequest, ResolveContext],
			null | ResolveRequest
		>,
		request: ResolveRequest,
		message: null | string,
		resolveContext: ResolveContext,
		callback: (err?: null | Error, result?: ResolveRequest) => void,
	): void;
	parse(identifier: string): ParsedIdentifier;
	isModule(path: string): boolean;
	isPrivate(path: string): boolean;
	isDirectory(path: string): boolean;
	join(path: string, request: string): string;
	normalize(path: string): string;
}
declare interface Stat {
	(
		path: PathLike,
		callback: (err: null | NodeJS.ErrnoException, result?: IStats) => void,
	): void;
	(
		path: PathLike,
		options: undefined | (StatOptions & { bigint?: false }),
		callback: (err: null | NodeJS.ErrnoException, result?: IStats) => void,
	): void;
	(
		path: PathLike,
		options: StatOptions & { bigint: true },
		callback: (
			err: null | NodeJS.ErrnoException,
			result?: IBigIntStats,
		) => void,
	): void;
	(
		path: PathLike,
		options: undefined | StatOptions,
		callback: (
			err: null | NodeJS.ErrnoException,
			result?: IStats | IBigIntStats,
		) => void,
	): void;
}
declare interface StatOptions {
	/**
	 * need bigint values
	 */
	bigint?: boolean;
}
declare interface StatSync {
	(path: PathLike, options?: undefined): IStats;
	(
		path: PathLike,
		options?: StatSyncOptions & { bigint?: false; throwIfNoEntry: false },
	): undefined | IStats;
	(
		path: PathLike,
		options: StatSyncOptions & { bigint: true; throwIfNoEntry: false },
	): undefined | IBigIntStats;
	(path: PathLike, options?: StatSyncOptions & { bigint?: false }): IStats;
	(path: PathLike, options: StatSyncOptions & { bigint: true }): IBigIntStats;
	(
		path: PathLike,
		options: StatSyncOptions & { bigint: boolean; throwIfNoEntry?: false },
	): IStats | IBigIntStats;
	(
		path: PathLike,
		options?: StatSyncOptions,
	): undefined | IStats | IBigIntStats;
}
declare interface StatSyncOptions {
	/**
	 * need bigint values
	 */
	bigint?: boolean;

	/**
	 * throw if no entry
	 */
	throwIfNoEntry?: boolean;
}
declare interface SyncFileSystem {
	/**
	 * read file sync method
	 */
	readFileSync: ReadFileSync;

	/**
	 * read dir sync method
	 */
	readdirSync: ReaddirSync;

	/**
	 * read json sync method
	 */
	readJsonSync?: (pathOrFileDescription: PathOrFileDescriptor) => JsonObject;

	/**
	 * read link sync method
	 */
	readlinkSync: ReadlinkSync;

	/**
	 * lstat sync method
	 */
	lstatSync?: LStatSync;

	/**
	 * stat sync method
	 */
	statSync: StatSync;

	/**
	 * real path sync method
	 */
	realpathSync?: RealPathSync;
}
declare interface TsconfigOptions {
	/**
	 * A relative path to the tsconfig file based on cwd, or an absolute path of tsconfig file
	 */
	configFile?: string;

	/**
	 * References to other tsconfig files. 'auto' inherits from TypeScript config, or an array of relative/absolute paths
	 */
	references?: string[] | "auto";

	/**
	 * Override baseUrl from tsconfig.json. If provided, this value will be used instead of the baseUrl in the tsconfig file
	 */
	baseUrl?: string;
}
declare interface TsconfigPathsData {
	/**
	 * tsconfig file data
	 */
	alias: AliasOption[];

	/**
	 * tsconfig file data
	 */
	modules: string[];
}
declare interface TsconfigPathsMap {
	/**
	 * main tsconfig paths data
	 */
	main: TsconfigPathsData;

	/**
	 * main tsconfig base URL (absolute path)
	 */
	mainContext: string;

	/**
	 * referenced tsconfig paths data mapped by baseUrl
	 */
	refs: { [index: string]: TsconfigPathsData };

	/**
	 * all contexts (main + refs) for quick lookup
	 */
	allContexts: { [index: string]: TsconfigPathsData };

	/**
	 * file dependencies
	 */
	fileDependencies: Set<string>;
}
declare class TsconfigPathsPlugin {
	constructor(configFileOrOptions: string | true | TsconfigOptions);
	configFile: string;
	references: "auto" | TsconfigReference[];
	baseUrl?: string;
	apply(resolver: Resolver): void;
}
declare interface TsconfigReference {
	/**
	 * Path to the referenced project
	 */
	path: string;
}
declare interface URL_url extends URL_Import {}
declare interface WriteOnlySet<T> {
	add: (item: T) => void;
}
declare function exports(
	context: Context,
	path: string,
	request: string,
	resolveContext: ResolveContext,
	callback: (
		err: null | ErrorWithDetail,
		res?: string | false,
		req?: ResolveRequest,
	) => void,
): void;
declare function exports(
	context: Context,
	path: string,
	request: string,
	callback: (
		err: null | ErrorWithDetail,
		res?: string | false,
		req?: ResolveRequest,
	) => void,
): void;
declare function exports(
	path: string,
	request: string,
	resolveContext: ResolveContext,
	callback: (
		err: null | ErrorWithDetail,
		res?: string | false,
		req?: ResolveRequest,
	) => void,
): void;
declare function exports(
	path: string,
	request: string,
	callback: (
		err: null | ErrorWithDetail,
		res?: string | false,
		req?: ResolveRequest,
	) => void,
): void;
declare namespace exports {
	export const sync: ResolveFunction;
	export function create(
		options: ResolveOptionsOptionalFS,
	): ResolveFunctionAsync;
	export namespace create {
		export const sync: (options: ResolveOptionsOptionalFS) => ResolveFunction;
	}
	export namespace ResolverFactory {
		export let createResolver: (
			options: ResolveOptionsResolverFactoryObject_2,
		) => Resolver;
	}
	export const forEachBail: <T, Z>(
		array: T[],
		iterator: Iterator<T, Z>,
		callback: (err?: null | Error, result?: null | Z, i?: number) => void,
	) => void;
	export type ResolveCallback = (
		err: null | ErrorWithDetail,
		res?: string | false,
		req?: ResolveRequest,
	) => void;
	export {
		CachedInputFileSystem,
		CloneBasenamePlugin,
		LogInfoPlugin,
		TsconfigPathsPlugin,
		ResolveOptionsOptionalFS,
		BaseFileSystem,
		PnpApi,
		Resolver,
		Context,
		FileSystem,
		ResolveContext,
		ResolveRequest,
		SyncFileSystem,
		Plugin,
		ResolveOptionsResolverFactoryObject_2 as ResolveOptions,
		ResolveFunctionAsync,
		ResolveFunction,
	};
}

export = exports;
