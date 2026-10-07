export = Watchpack;
/**
 * @typedef {object} WatchpackEvents
 * @property {(file: string, mtime: number, type: EventType) => void} change change event
 * @property {(file: string, type: EventType) => void} remove remove event
 * @property {(changes: Changes, removals: Removals) => void} aggregated aggregated event
 */
/**
 * @extends {EventEmitter<{ [K in keyof WatchpackEvents]: Parameters<WatchpackEvents[K]> }>}
 */
declare class Watchpack extends EventEmitter<{
	/**
	 * change event
	 */
	change: [file: string, mtime: number, type: EventType];
	/**
	 * remove event
	 */
	remove: [file: string, type: EventType];
	/**
	 * aggregated event
	 */
	aggregated: [changes: Changes, removals: Removals];
}> {
	/**
	 * @param {WatchOptions=} options options
	 */
	constructor(options?: WatchOptions | undefined);
	/** @type {WatchOptions} */
	options: WatchOptions;
	aggregateTimeout: number;
	/** @type {NormalizedWatchOptions} */
	watcherOptions: NormalizedWatchOptions;
	/** @type {WatcherManager} */
	watcherManager: WatcherManager;
	/** @type {Map<string, WatchpackFileWatcher>} */
	fileWatchers: Map<string, WatchpackFileWatcher>;
	/** @type {Map<string, WatchpackDirectoryWatcher>} */
	directoryWatchers: Map<string, WatchpackDirectoryWatcher>;
	/** @type {Set<string>} */
	_missing: Set<string>;
	startTime: number | undefined;
	paused: boolean;
	/** @type {Changes} */
	aggregatedChanges: Changes;
	/** @type {Removals} */
	aggregatedRemovals: Removals;
	/** @type {undefined | NodeJS.Timeout} */
	aggregateTimer: undefined | NodeJS.Timeout;
	_onTimeout(): void;
	/**
	 * @overload
	 * @param {Iterable<string>} arg1 files
	 * @param {Iterable<string>} arg2 directories
	 * @param {number=} arg3 startTime
	 * @returns {void}
	 */
	watch(
		arg1: Iterable<string>,
		arg2: Iterable<string>,
		arg3?: number | undefined,
	): void;
	/**
	 * @overload
	 * @param {WatchMethodOptions} arg1 watch options
	 * @returns {void}
	 */
	watch(arg1: WatchMethodOptions): void;
	close(): void;
	pause(): void;
	/**
	 * @returns {Record<string, number>} times
	 */
	getTimes(): Record<string, number>;
	/**
	 * @returns {TimeInfoEntries} time info entries
	 */
	getTimeInfoEntries(): TimeInfoEntries;
	/**
	 * @param {TimeInfoEntries} fileTimestamps file timestamps
	 * @param {TimeInfoEntries} directoryTimestamps directory timestamps
	 */
	collectTimeInfoEntries(
		fileTimestamps: TimeInfoEntries,
		directoryTimestamps: TimeInfoEntries,
	): void;
	/**
	 * @returns {Aggregated} aggregated info
	 */
	getAggregated(): Aggregated;
	/**
	 * @param {string} item item
	 * @param {number} mtime mtime
	 * @param {string} file file
	 * @param {EventType} type type
	 */
	_onChange(item: string, mtime: number, file: string, type: EventType): void;
	/**
	 * @param {string} item item
	 * @param {string} file file
	 * @param {EventType} type type
	 */
	_onRemove(item: string, file: string, type: EventType): void;
}
declare namespace Watchpack {
	export {
		WatcherManager,
		DirectoryWatcher,
		DirectoryWatcherEvents,
		FileWatcherEvents,
		EventMap,
		Watcher,
		IgnoredFunction,
		Ignored,
		WatcherOptions,
		WatchOptions,
		NormalizedWatchOptions,
		EventType,
		Entry,
		OnlySafeTimeEntry,
		ExistenceOnlyTimeEntry,
		TimeInfoEntries,
		Changes,
		Removals,
		Aggregated,
		WatchMethodOptions,
		Times,
		WatchpackEvents,
	};
}
import { EventEmitter } from "events";
declare class WatchpackFileWatcher {
	/**
	 * @param {Watchpack} watchpack watchpack
	 * @param {Watcher<FileWatcherEvents>} watcher watcher
	 * @param {string | string[]} files files
	 */
	constructor(
		watchpack: Watchpack,
		watcher: Watcher<FileWatcherEvents>,
		files: string | string[],
	);
	/** @type {string[]} */
	files: string[];
	watcher: import("./DirectoryWatcher").Watcher<
		import("./DirectoryWatcher").FileWatcherEvents
	>;
	/**
	 * @param {string | string[]} files files
	 */
	update(files: string | string[]): void;
	close(): void;
}
declare class WatchpackDirectoryWatcher {
	/**
	 * @param {Watchpack} watchpack watchpack
	 * @param {Watcher<DirectoryWatcherEvents>} watcher watcher
	 * @param {string} directories directories
	 */
	constructor(
		watchpack: Watchpack,
		watcher: Watcher<DirectoryWatcherEvents>,
		directories: string,
	);
	/** @type {string[]} */
	directories: string[];
	watcher: import("./DirectoryWatcher").Watcher<
		import("./DirectoryWatcher").DirectoryWatcherEvents
	>;
	/**
	 * @param {string | string[]} directories directories
	 */
	update(directories: string | string[]): void;
	close(): void;
}
type WatcherManager = import("./getWatcherManager").WatcherManager;
type DirectoryWatcher = import("./DirectoryWatcher");
type DirectoryWatcherEvents =
	import("./DirectoryWatcher").DirectoryWatcherEvents;
type FileWatcherEvents = import("./DirectoryWatcher").FileWatcherEvents;
type EventMap = Record<string, (...args: any[]) => any>;
type Watcher<T extends EventMap> = import("./DirectoryWatcher").Watcher<T>;
type IgnoredFunction = (item: string) => boolean;
type Ignored = string[] | RegExp | string | IgnoredFunction;
type WatcherOptions = {
	/**
	 * true when need to resolve symlinks and watch symlink and real file, otherwise false
	 */
	followSymlinks?: boolean | undefined;
	/**
	 * ignore some files from watching (glob pattern or regexp)
	 */
	ignored?: Ignored | undefined;
	/**
	 * true when need to enable polling mode for watching, otherwise false
	 */
	poll?: (number | boolean) | undefined;
};
type WatchOptions = WatcherOptions & {
	aggregateTimeout?: number;
};
type NormalizedWatchOptions = {
	/**
	 * true when need to resolve symlinks and watch symlink and real file, otherwise false
	 */
	followSymlinks: boolean;
	/**
	 * ignore some files from watching (glob pattern or regexp)
	 */
	ignored: IgnoredFunction;
	/**
	 * true when need to enable polling mode for watching, otherwise false
	 */
	poll?: (number | boolean) | undefined;
};
type EventType =
	| `scan (${string})`
	| "change"
	| "rename"
	| `watch ${string}`
	| `directory-removed ${string}`;
type Entry = {
	safeTime: number;
	timestamp: number;
	accuracy: number;
};
type OnlySafeTimeEntry = {
	safeTime: number;
};
type ExistenceOnlyTimeEntry = {};
type TimeInfoEntries = Map<
	string,
	Entry | OnlySafeTimeEntry | ExistenceOnlyTimeEntry | null
>;
type Changes = Set<string>;
type Removals = Set<string>;
type Aggregated = {
	changes: Changes;
	removals: Removals;
};
type WatchMethodOptions = {
	files?: Iterable<string>;
	directories?: Iterable<string>;
	missing?: Iterable<string>;
	startTime?: number;
};
type Times = Record<string, number>;
type WatchpackEvents = {
	/**
	 * change event
	 */
	change: (file: string, mtime: number, type: EventType) => void;
	/**
	 * remove event
	 */
	remove: (file: string, type: EventType) => void;
	/**
	 * aggregated event
	 */
	aggregated: (changes: Changes, removals: Removals) => void;
};
