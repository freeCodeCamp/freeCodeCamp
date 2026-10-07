export function batch(fn: () => void): void;
export function getNumberOfWatchers(): number;
export function watch(filePath: string): Watcher;
export type FSWatcher = import("fs").FSWatcher;
export type EventType = import("./index").EventType;
export type WatcherSet = Set<Watcher>;
export type WatcherEvents = {
	/**
	 * change event
	 */
	change: (eventType: EventType, filename?: string) => void;
	/**
	 * error event
	 */
	error: (err: unknown) => void;
};
/**
 * @typedef {object} WatcherEvents
 * @property {(eventType: EventType, filename?: string) => void} change change event
 * @property {(err: unknown) => void} error error event
 */
/**
 * @extends {EventEmitter<{ [K in keyof WatcherEvents]: Parameters<WatcherEvents[K]> }>}
 */
export class Watcher extends EventEmitter<{
	/**
	 * change event
	 */
	change: [
		eventType: import("./index").EventType,
		filename?: string | undefined,
	];
	/**
	 * error event
	 */
	error: [err: unknown];
}> {
	constructor();
	close(): void;
}
/**
 * @param {FSWatcher} watcher watcher
 * @param {string} filePath a file path
 * @param {(type: "rename" | "change", filename: string) => void} handleChangeEvent function to handle change
 * @returns {(type: "rename" | "change", filename: string) => void} handler of change event
 */
export function createHandleChangeEvent(
	watcher: FSWatcher,
	filePath: string,
	handleChangeEvent: (type: "rename" | "change", filename: string) => void,
): (type: "rename" | "change", filename: string) => void;
export const watcherLimit: number;
import { EventEmitter } from "events";
