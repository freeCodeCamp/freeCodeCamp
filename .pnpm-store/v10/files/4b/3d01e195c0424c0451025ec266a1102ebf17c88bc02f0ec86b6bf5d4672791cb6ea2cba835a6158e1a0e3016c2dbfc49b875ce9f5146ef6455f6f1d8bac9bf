/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

/** @typedef {import("./Resolver").FileSystem} FileSystem */
/** @typedef {import("./Resolver").StringCallback} StringCallback */
/** @typedef {import("./Resolver").SyncFileSystem} SyncFileSystem */

// eslint-disable-next-line jsdoc/reject-function-type
/** @typedef {Function} SyncOrAsyncFunction */
// eslint-disable-next-line jsdoc/reject-any-type
/** @typedef {any} ResultOfSyncOrAsyncFunction */

/**
 * @param {SyncFileSystem} fs file system implementation
 * @constructor
 */
function SyncAsyncFileSystemDecorator(fs) {
	this.fs = fs;

	this.lstat = undefined;
	this.lstatSync = undefined;
	const { lstatSync } = fs;
	if (lstatSync) {
		this.lstat =
			/** @type {FileSystem["lstat"]} */
			(
				(arg, options, callback) => {
					let result;
					try {
						result = /** @type {SyncOrAsyncFunction | undefined} */ (callback)
							? lstatSync.call(fs, arg, options)
							: lstatSync.call(fs, arg);
					} catch (err) {
						return (callback || options)(
							/** @type {NodeJS.ErrnoException | null} */
							(err),
						);
					}

					(callback || options)(
						null,
						/** @type {ResultOfSyncOrAsyncFunction} */
						(result),
					);
				}
			);
		this.lstatSync =
			/** @type {SyncFileSystem["lstatSync"]} */
			((arg, options) => lstatSync.call(fs, arg, options));
	}

	this.stat =
		/** @type {FileSystem["stat"]} */
		(
			(arg, options, callback) => {
				let result;
				try {
					result = /** @type {SyncOrAsyncFunction | undefined} */ (callback)
						? fs.statSync(arg, options)
						: fs.statSync(arg);
				} catch (err) {
					return (callback || options)(
						/** @type {NodeJS.ErrnoException | null} */
						(err),
					);
				}

				(callback || options)(
					null,
					/** @type {ResultOfSyncOrAsyncFunction} */
					(result),
				);
			}
		);
	this.statSync =
		/** @type {SyncFileSystem["statSync"]} */
		((arg, options) => fs.statSync(arg, options));

	this.readdir =
		/** @type {FileSystem["readdir"]} */
		(
			(arg, options, callback) => {
				let result;
				try {
					result = /** @type {SyncOrAsyncFunction | undefined} */ (callback)
						? fs.readdirSync(
								arg,
								/** @type {Exclude<Parameters<FileSystem["readdir"]>[1], (err: NodeJS.ErrnoException | null, files: string[]) => void>} */
								(options),
							)
						: fs.readdirSync(arg);
				} catch (err) {
					return (callback || options)(
						/** @type {NodeJS.ErrnoException | null} */
						(err),
						[],
					);
				}

				(callback || options)(
					null,
					/** @type {ResultOfSyncOrAsyncFunction} */
					(result),
				);
			}
		);
	this.readdirSync =
		/** @type {SyncFileSystem["readdirSync"]} */
		(
			(arg, options) =>
				fs.readdirSync(
					arg,
					/** @type {Parameters<SyncFileSystem["readdirSync"]>[1]} */ (options),
				)
		);

	this.readFile =
		/** @type {FileSystem["readFile"]} */
		(
			(arg, options, callback) => {
				let result;
				try {
					result = /** @type {SyncOrAsyncFunction | undefined} */ (callback)
						? fs.readFileSync(arg, options)
						: fs.readFileSync(arg);
				} catch (err) {
					return (callback || options)(
						/** @type {NodeJS.ErrnoException | null} */
						(err),
					);
				}

				(callback || options)(
					null,
					/** @type {ResultOfSyncOrAsyncFunction} */
					(result),
				);
			}
		);
	this.readFileSync =
		/** @type {SyncFileSystem["readFileSync"]} */
		((arg, options) => fs.readFileSync(arg, options));

	this.readlink =
		/** @type {FileSystem["readlink"]} */
		(
			(arg, options, callback) => {
				let result;
				try {
					result = /** @type {SyncOrAsyncFunction | undefined} */ (callback)
						? fs.readlinkSync(
								arg,
								/** @type {Exclude<Parameters<FileSystem["readlink"]>[1], StringCallback>} */
								(options),
							)
						: fs.readlinkSync(arg);
				} catch (err) {
					return (callback || options)(
						/** @type {NodeJS.ErrnoException | null} */
						(err),
					);
				}

				(callback || options)(
					null,
					/** @type {ResultOfSyncOrAsyncFunction} */
					(result),
				);
			}
		);
	this.readlinkSync =
		/** @type {SyncFileSystem["readlinkSync"]} */
		(
			(arg, options) =>
				fs.readlinkSync(
					arg,
					/** @type {Parameters<SyncFileSystem["readlinkSync"]>[1]} */ (
						options
					),
				)
		);

	this.readJson = undefined;
	this.readJsonSync = undefined;
	const { readJsonSync } = fs;
	if (readJsonSync) {
		this.readJson =
			/** @type {FileSystem["readJson"]} */
			(
				(arg, callback) => {
					let result;
					try {
						result = readJsonSync.call(fs, arg);
					} catch (err) {
						return callback(
							/** @type {NodeJS.ErrnoException | Error | null} */ (err),
						);
					}

					callback(null, result);
				}
			);
		this.readJsonSync =
			/** @type {SyncFileSystem["readJsonSync"]} */
			((arg) => readJsonSync.call(fs, arg));
	}

	this.realpath = undefined;
	this.realpathSync = undefined;
	const { realpathSync } = fs;
	if (realpathSync) {
		this.realpath =
			/** @type {FileSystem["realpath"]} */
			(
				(arg, options, callback) => {
					let result;
					try {
						result = /** @type {SyncOrAsyncFunction | undefined} */ (callback)
							? realpathSync.call(
									fs,
									arg,
									/** @type {Exclude<Parameters<NonNullable<FileSystem["realpath"]>>[1], StringCallback>} */
									(options),
								)
							: realpathSync.call(fs, arg);
					} catch (err) {
						return (callback || options)(
							/** @type {NodeJS.ErrnoException | null} */
							(err),
						);
					}

					(callback || options)(
						null,
						/** @type {ResultOfSyncOrAsyncFunction} */
						(result),
					);
				}
			);
		this.realpathSync =
			/** @type {SyncFileSystem["realpathSync"]} */
			(
				(arg, options) =>
					realpathSync.call(
						fs,
						arg,
						/** @type {Parameters<NonNullable<SyncFileSystem["realpathSync"]>>[1]} */
						(options),
					)
			);
	}
}

module.exports = SyncAsyncFileSystemDecorator;
