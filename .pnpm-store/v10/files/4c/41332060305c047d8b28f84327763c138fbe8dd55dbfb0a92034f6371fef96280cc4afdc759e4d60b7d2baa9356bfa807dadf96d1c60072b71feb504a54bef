export = DirectoryWatcher;
/** @typedef {Set<string>} InitialScanRemoved */
/**
 * @typedef {object} WatchpackEvents
 * @property {(target: string, mtime: string, type: EventType, initial: boolean) => void} change change event
 * @property {() => void} closed closed event
 */
/**
 * @typedef {object} DirectoryWatcherOptions
 * @property {boolean=} followSymlinks true when need to resolve symlinks and watch symlink and real file, otherwise false
 * @property {IgnoredFunction=} ignored ignore some files from watching (glob pattern or regexp)
 * @property {number | boolean=} poll true when need to enable polling mode for watching, otherwise false
 */
/**
 * @extends {EventEmitter<{ [K in keyof WatchpackEvents]: Parameters<WatchpackEvents[K]> }>}
 */
declare class DirectoryWatcher extends EventEmitter<{
	/**
	 * change event
	 */
	change: [
		target: string,
		mtime: string,
		type: import("./index").EventType,
		initial: boolean,
	];
	/**
	 * closed event
	 */
	closed: [];
}> {
	/**
	 * @param {WatcherManager} watcherManager a watcher manager
	 * @param {string} directoryPath directory path
	 * @param {DirectoryWatcherOptions=} options options
	 */
	constructor(
		watcherManager: WatcherManager,
		directoryPath: string,
		options?: DirectoryWatcherOptions | undefined,
	);
	watcherManager: import("./getWatcherManager").WatcherManager;
	options: DirectoryWatcherOptions;
	path: string;
	/** @type {Map<string, Entry>} */
	files: Map<string, Entry>;
	/** @type {Map<string, number>} */
	filesWithoutCase: Map<string, number>;
	/** @type {Map<string, Watcher<DirectoryWatcherEvents> | boolean>} */
	directories: Map<string, Watcher<DirectoryWatcherEvents> | boolean>;
	lastWatchEvent: number;
	initialScan: boolean;
	ignored: import("./index").IgnoredFunction;
	nestedWatching: boolean;
	/** @type {number | false} */
	polledWatching: number | false;
	/** @type {undefined | NodeJS.Timeout} */
	timeout: undefined | NodeJS.Timeout;
	/** @type {null | InitialScanRemoved} */
	initialScanRemoved: null | InitialScanRemoved;
	/** @type {undefined | number} */
	initialScanFinished: undefined | number;
	/** @type {Map<string, Set<Watcher<DirectoryWatcherEvents> | Watcher<FileWatcherEvents>>>} */
	watchers: Map<
		string,
		Set<Watcher<DirectoryWatcherEvents> | Watcher<FileWatcherEvents>>
	>;
	/** @type {Watcher<FileWatcherEvents> | null} */
	parentWatcher: Watcher<FileWatcherEvents> | null;
	refs: number;
	/** @type {Map<string, boolean>} */
	_activeEvents: Map<string, boolean>;
	closed: boolean;
	scanning: boolean;
	scanAgain: boolean;
	scanAgainInitial: boolean;
	createWatcher(): void;
	watcher: watchEventSource.Watcher | null | undefined;
	/**
	 * @template {(watcher: Watcher<EventMap>) => void} T
	 * @param {string} path path
	 * @param {T} fn function
	 */
	forEachWatcher<T extends (watcher: Watcher<EventMap>) => void>(
		path: string,
		fn: T,
	): void;
	/**
	 * @param {string} itemPath an item path
	 * @param {boolean} initial true when initial, otherwise false
	 * @param {EventType} type even type
	 */
	setMissing(itemPath: string, initial: boolean, type: EventType): void;
	/**
	 * @param {string} target a target to set file time
	 * @param {number} mtime mtime
	 * @param {boolean} initial true when initial, otherwise false
	 * @param {boolean} ignoreWhenEqual true to ignore when equal, otherwise false
	 * @param {EventType} type type
	 */
	setFileTime(
		target: string,
		mtime: number,
		initial: boolean,
		ignoreWhenEqual: boolean,
		type: EventType,
	): void;
	/**
	 * @param {string} directoryPath directory path
	 * @param {number} birthtime birthtime
	 * @param {boolean} initial true when initial, otherwise false
	 * @param {EventType} type even type
	 */
	setDirectory(
		directoryPath: string,
		birthtime: number,
		initial: boolean,
		type: EventType,
	): void;
	/**
	 * @param {string} directoryPath directory path
	 */
	createNestedWatcher(directoryPath: string): void;
	/**
	 * @param {boolean} flag true when nested, otherwise false
	 */
	setNestedWatching(flag: boolean): void;
	/**
	 * @param {string} target a target to watch
	 * @param {number=} startTime start time
	 * @returns {Watcher<DirectoryWatcherEvents> | Watcher<FileWatcherEvents>} watcher
	 */
	watch(
		target: string,
		startTime?: number | undefined,
	): Watcher<DirectoryWatcherEvents> | Watcher<FileWatcherEvents>;
	/**
	 * @param {EventType} eventType event type
	 * @param {string=} filename filename
	 */
	onWatchEvent(eventType: EventType, filename?: string | undefined): void;
	/**
	 * @param {unknown=} err error
	 */
	onWatcherError(err?: unknown | undefined): void;
	/**
	 * @param {Error | NodeJS.ErrnoException=} err error
	 */
	onStatsError(err?: (Error | NodeJS.ErrnoException) | undefined): void;
	/**
	 * @param {Error | NodeJS.ErrnoException=} err error
	 */
	onScanError(err?: (Error | NodeJS.ErrnoException) | undefined): void;
	onScanFinished(): void;
	/**
	 * @param {string} reason a reason
	 */
	onDirectoryRemoved(reason: string): void;
	watchInParentDirectory(): void;
	/**
	 * @param {boolean} initial true when initial, otherwise false
	 */
	doScan(initial: boolean): void;
	/**
	 * @returns {Record<string, number>} times
	 */
	getTimes(): Record<string, number>;
	/**
	 * @param {TimeInfoEntries} fileTimestamps file timestamps
	 * @param {TimeInfoEntries} directoryTimestamps directory timestamps
	 * @returns {number} safe time
	 */
	collectTimeInfoEntries(
		fileTimestamps: TimeInfoEntries,
		directoryTimestamps: TimeInfoEntries,
	): number;
	close(): void;
}
declare namespace DirectoryWatcher {
	export {
		EXISTANCE_ONLY_TIME_ENTRY,
		Watcher,
		IgnoredFunction,
		EventType,
		TimeInfoEntries,
		Entry,
		ExistenceOnlyTimeEntry,
		OnlySafeTimeEntry,
		EventMap,
		WatcherManager,
		EventSourceWatcher,
		FileWatcherEvents,
		DirectoryWatcherEvents,
		InitialScanRemoved,
		WatchpackEvents,
		DirectoryWatcherOptions,
	};
}
import { EventEmitter } from "events";
/**
 * @typedef {object} FileWatcherEvents
 * @property {(type: EventType) => void} initial-missing initial missing event
 * @property {(mtime: number, type: EventType, initial: boolean) => void} change change event
 * @property {(type: EventType) => void} remove remove event
 * @property {() => void} closed closed event
 */
/**
 * @typedef {object} DirectoryWatcherEvents
 * @property {(type: EventType) => void} initial-missing initial missing event
 * @property {((file: string, mtime: number, type: EventType, initial: boolean) => void)} change change event
 * @property {(type: EventType) => void} remove remove event
 * @property {() => void} closed closed event
 */
/**
 * @template {EventMap} T
 * @extends {EventEmitter<{ [K in keyof T]: Parameters<T[K]> }>}
 */
declare class Watcher<T extends EventMap> extends EventEmitter<{
	[K in keyof T]: Parameters<T[K]>;
}> {
	/**
	 * @param {DirectoryWatcher} directoryWatcher a directory watcher
	 * @param {string} target a target to watch
	 * @param {number=} startTime start time
	 */
	constructor(
		directoryWatcher: DirectoryWatcher,
		target: string,
		startTime?: number | undefined,
	);
	directoryWatcher: DirectoryWatcher;
	path: string;
	startTime: number | undefined;
	/**
	 * @param {number} mtime mtime
	 * @param {boolean} initial true when initial, otherwise false
	 * @returns {boolean} true of start time less than mtile, otherwise false
	 */
	checkStartTime(mtime: number, initial: boolean): boolean;
	close(): void;
}
import watchEventSource = require("./watchEventSource");
/** @typedef {import("./index").IgnoredFunction} IgnoredFunction */
/** @typedef {import("./index").EventType} EventType */
/** @typedef {import("./index").TimeInfoEntries} TimeInfoEntries */
/** @typedef {import("./index").Entry} Entry */
/** @typedef {import("./index").ExistenceOnlyTimeEntry} ExistenceOnlyTimeEntry */
/** @typedef {import("./index").OnlySafeTimeEntry} OnlySafeTimeEntry */
/** @typedef {import("./index").EventMap} EventMap */
/** @typedef {import("./getWatcherManager").WatcherManager} WatcherManager */
/** @typedef {import("./watchEventSource").Watcher} EventSourceWatcher */
/** @type {ExistenceOnlyTimeEntry} */
declare const EXISTANCE_ONLY_TIME_ENTRY: ExistenceOnlyTimeEntry;
type IgnoredFunction = import("./index").IgnoredFunction;
type EventType = import("./index").EventType;
type TimeInfoEntries = import("./index").TimeInfoEntries;
type Entry = import("./index").Entry;
type ExistenceOnlyTimeEntry = import("./index").ExistenceOnlyTimeEntry;
type OnlySafeTimeEntry = import("./index").OnlySafeTimeEntry;
type EventMap = import("./index").EventMap;
type WatcherManager = import("./getWatcherManager").WatcherManager;
type EventSourceWatcher = import("./watchEventSource").Watcher;
type FileWatcherEvents = {
	/**
	 * initial missing event
	 */
	"initial-missing": (type: EventType) => void;
	/**
	 * change event
	 */
	change: (mtime: number, type: EventType, initial: boolean) => void;
	/**
	 * remove event
	 */
	remove: (type: EventType) => void;
	/**
	 * closed event
	 */
	closed: () => void;
};
type DirectoryWatcherEvents = {
	/**
	 * initial missing event
	 */
	"initial-missing": (type: EventType) => void;
	/**
	 * change event
	 */
	change: (
		file: string,
		mtime: number,
		type: EventType,
		initial: boolean,
	) => void;
	/**
	 * remove event
	 */
	remove: (type: EventType) => void;
	/**
	 * closed event
	 */
	closed: () => void;
};
type InitialScanRemoved = Set<string>;
type WatchpackEvents = {
	/**
	 * change event
	 */
	change: (
		target: string,
		mtime: string,
		type: EventType,
		initial: boolean,
	) => void;
	/**
	 * closed event
	 */
	closed: () => void;
};
type DirectoryWatcherOptions = {
	/**
	 * true when need to resolve symlinks and watch symlink and real file, otherwise false
	 */
	followSymlinks?: boolean | undefined;
	/**
	 * ignore some files from watching (glob pattern or regexp)
	 */
	ignored?: IgnoredFunction | undefined;
	/**
	 * true when need to enable polling mode for watching, otherwise false
	 */
	poll?: (number | boolean) | undefined;
};
