/**
 * @fileoverview The main file for the humanfs package.
 * @author Nicholas C. Zakas
 */

/* global URL, TextDecoder, TextEncoder */

//-----------------------------------------------------------------------------
// Types
//-----------------------------------------------------------------------------

/** @typedef {import("@humanfs/types").HfsImpl} HfsImpl */
/** @typedef {import("@humanfs/types").HfsDirectoryEntry} HfsDirectoryEntry */
/** @typedef {import("@humanfs/types").HfsWalkEntry} HfsWalkEntry */

//-----------------------------------------------------------------------------
// Helpers
//-----------------------------------------------------------------------------

const decoder = new TextDecoder();
const encoder = new TextEncoder();

/**
 * Error to represent when a method is missing on an impl.
 */
export class NoSuchMethodError extends Error {
	/**
	 * Creates a new instance.
	 * @param {string} methodName The name of the method that was missing.
	 */
	constructor(methodName) {
		super(`Method "${methodName}" does not exist on impl.`);
	}
}

/**
 * Error to represent when a method is not supported on an impl. This happens
 * when a method on `Hfs` is called with one name and the corresponding method
 * on the impl has a different name. (Example: `text()` and `bytes()`.)
 */
export class MethodNotSupportedError extends Error {
	/**
	 * Creates a new instance.
	 * @param {string} methodName The name of the method that was missing.
	 */
	constructor(methodName) {
		super(`Method "${methodName}" is not supported on this impl.`);
	}
}

/**
 * Error to represent when an impl is already set.
 */
export class ImplAlreadySetError extends Error {
	/**
	 * Creates a new instance.
	 */
	constructor() {
		super(`Implementation already set.`);
	}
}

/**
 * Asserts that the given path is a valid file path.
 * @param {any} fileOrDirPath The path to check.
 * @returns {void}
 * @throws {TypeError} When the path is not a non-empty string.
 */
function assertValidFileOrDirPath(fileOrDirPath) {
	if (
		!fileOrDirPath ||
		(!(fileOrDirPath instanceof URL) && typeof fileOrDirPath !== "string")
	) {
		throw new TypeError("Path must be a non-empty string or URL.");
	}
}

/**
 * Asserts that the given file contents are valid.
 * @param {any} contents The contents to check.
 * @returns {void}
 * @throws {TypeError} When the contents are not a string or ArrayBuffer.
 */
function assertValidFileContents(contents) {
	if (
		typeof contents !== "string" &&
		!(contents instanceof ArrayBuffer) &&
		!ArrayBuffer.isView(contents)
	) {
		throw new TypeError(
			"File contents must be a string, ArrayBuffer, or ArrayBuffer view.",
		);
	}
}

/**
 * Converts the given contents to Uint8Array.
 * @param {any} contents The data to convert.
 * @returns {Uint8Array} The converted Uint8Array.
 * @throws {TypeError} When the contents are not a string or ArrayBuffer.
 */
function toUint8Array(contents) {
	if (contents instanceof Uint8Array) {
		return contents;
	}

	if (typeof contents === "string") {
		return encoder.encode(contents);
	}

	if (contents instanceof ArrayBuffer) {
		return new Uint8Array(contents);
	}

	if (ArrayBuffer.isView(contents)) {
		const bytes = contents.buffer.slice(
			contents.byteOffset,
			contents.byteOffset + contents.byteLength,
		);
		return new Uint8Array(bytes);
	}
	throw new TypeError(
		"Invalid contents type. Expected string or ArrayBuffer.",
	);
}

//-----------------------------------------------------------------------------
// Exports
//-----------------------------------------------------------------------------

/**
 * A class representing a log entry.
 */
export class LogEntry {
	/**
	 * The type of log entry.
	 * @type {string}
	 */
	type;

	/**
	 * The data associated with the log entry.
	 * @type {any}
	 */
	data;

	/**
	 * The time at which the log entry was created.
	 * @type {number}
	 */
	timestamp = Date.now();

	/**
	 * Creates a new instance.
	 * @param {string} type The type of log entry.
	 * @param {any} [data] The data associated with the log entry.
	 */
	constructor(type, data) {
		this.type = type;
		this.data = data;
	}
}

/**
 * A class representing a file system utility library.
 * @implements {HfsImpl}
 */
export class Hfs {
	/**
	 * The base implementation for this instance.
	 * @type {HfsImpl}
	 */
	#baseImpl;

	/**
	 * The current implementation for this instance.
	 * @type {HfsImpl}
	 */
	#impl;

	/**
	 * A map of log names to their corresponding entries.
	 * @type {Map<string,Array<LogEntry>>}
	 */
	#logs = new Map();

	/**
	 * Creates a new instance.
	 * @param {object} options The options for the instance.
	 * @param {HfsImpl} options.impl The implementation to use.
	 */
	constructor({ impl }) {
		this.#baseImpl = impl;
		this.#impl = impl;
	}

	/**
	 * Logs an entry onto all currently open logs.
	 * @param {string} methodName The name of the method being called.
	 * @param {...*} args The arguments to the method.
	 * @returns {void}
	 */
	#log(methodName, ...args) {
		for (const logs of this.#logs.values()) {
			logs.push(new LogEntry("call", { methodName, args }));
		}
	}

	/**
	 * Starts a new log with the given name.
	 * @param {string} name The name of the log to start;
	 * @returns {void}
	 * @throws {Error} When the log already exists.
	 * @throws {TypeError} When the name is not a non-empty string.
	 */
	logStart(name) {
		if (!name || typeof name !== "string") {
			throw new TypeError("Log name must be a non-empty string.");
		}

		if (this.#logs.has(name)) {
			throw new Error(`Log "${name}" already exists.`);
		}

		this.#logs.set(name, []);
	}

	/**
	 * Ends a log with the given name and returns the entries.
	 * @param {string} name The name of the log to end.
	 * @returns {Array<LogEntry>} The entries in the log.
	 * @throws {Error} When the log does not exist.
	 */
	logEnd(name) {
		if (this.#logs.has(name)) {
			const logs = this.#logs.get(name);
			this.#logs.delete(name);
			return logs;
		}

		throw new Error(`Log "${name}" does not exist.`);
	}

	/**
	 * Determines if the current implementation is the base implementation.
	 * @returns {boolean} True if the current implementation is the base implementation.
	 */
	isBaseImpl() {
		return this.#impl === this.#baseImpl;
	}

	/**
	 * Sets the implementation for this instance.
	 * @param {object} impl The implementation to use.
	 * @returns {void}
	 */
	setImpl(impl) {
		this.#log("implSet", impl);

		if (this.#impl !== this.#baseImpl) {
			throw new ImplAlreadySetError();
		}

		this.#impl = impl;
	}

	/**
	 * Resets the implementation for this instance back to its original.
	 * @returns {void}
	 */
	resetImpl() {
		this.#log("implReset");
		this.#impl = this.#baseImpl;
	}

	/**
	 * Asserts that the given method exists on the current implementation.
	 * @param {string} methodName The name of the method to check.
	 * @returns {void}
	 * @throws {NoSuchMethodError} When the method does not exist on the current implementation.
	 */
	#assertImplMethod(methodName) {
		if (typeof this.#impl[methodName] !== "function") {
			throw new NoSuchMethodError(methodName);
		}
	}

	/**
	 * Asserts that the given method exists on the current implementation, and if not,
	 * throws an error with a different method name.
	 * @param {string} methodName The name of the method to check.
	 * @param {string} targetMethodName The name of the method that should be reported
	 *  as an error when methodName does not exist.
	 * @returns {void}
	 * @throws {NoSuchMethodError} When the method does not exist on the current implementation.
	 */
	#assertImplMethodAlt(methodName, targetMethodName) {
		if (typeof this.#impl[methodName] !== "function") {
			throw new MethodNotSupportedError(targetMethodName);
		}
	}

	/**
	 * Calls the given method on the current implementation.
	 * @param {string} methodName The name of the method to call.
	 * @param {...any} args The arguments to the method.
	 * @returns {any} The return value from the method.
	 * @throws {NoSuchMethodError} When the method does not exist on the current implementation.
	 */
	#callImplMethod(methodName, ...args) {
		this.#log(methodName, ...args);
		this.#assertImplMethod(methodName);
		return this.#impl[methodName](...args);
	}

	/**
	 * Calls the given method on the current implementation and doesn't log the call.
	 * @param {string} methodName The name of the method to call.
	 * @param {...any} args The arguments to the method.
	 * @returns {any} The return value from the method.
	 * @throws {NoSuchMethodError} When the method does not exist on the current implementation.
	 */
	#callImplMethodWithoutLog(methodName, ...args) {
		this.#assertImplMethod(methodName);
		return this.#impl[methodName](...args);
	}

	/**
	 * Calls the given method on the current implementation but logs a different method name.
	 * @param {string} methodName The name of the method to call.
	 * @param {string} targetMethodName The name of the method to log.
	 * @param {...any} args The arguments to the method.
	 * @returns {any} The return value from the method.
	 * @throws {NoSuchMethodError} When the method does not exist on the current implementation.
	 */
	#callImplMethodAlt(methodName, targetMethodName, ...args) {
		this.#log(targetMethodName, ...args);
		this.#assertImplMethodAlt(methodName, targetMethodName);
		return this.#impl[methodName](...args);
	}

	/**
	 * Reads the given file and returns the contents as text. Assumes UTF-8 encoding.
	 * @param {string|URL} filePath The file to read.
	 * @returns {Promise<string|undefined>} The contents of the file.
	 * @throws {NoSuchMethodError} When the method does not exist on the current implementation.
	 * @throws {TypeError} When the file path is not a non-empty string.
	 */
	async text(filePath) {
		assertValidFileOrDirPath(filePath);

		const result = await this.#callImplMethodAlt("bytes", "text", filePath);
		return result ? decoder.decode(result) : undefined;
	}

	/**
	 * Reads the given file and returns the contents as JSON. Assumes UTF-8 encoding.
	 * @param {string|URL} filePath The file to read.
	 * @returns {Promise<any|undefined>} The contents of the file as JSON.
	 * @throws {NoSuchMethodError} When the method does not exist on the current implementation.
	 * @throws {SyntaxError} When the file contents are not valid JSON.
	 * @throws {TypeError} When the file path is not a non-empty string.
	 */
	async json(filePath) {
		assertValidFileOrDirPath(filePath);

		const result = await this.#callImplMethodAlt("bytes", "json", filePath);
		return result ? JSON.parse(decoder.decode(result)) : undefined;
	}

	/**
	 * Reads the given file and returns the contents as an ArrayBuffer.
	 * @param {string|URL} filePath The file to read.
	 * @returns {Promise<ArrayBuffer|undefined>} The contents of the file as an ArrayBuffer.
	 * @throws {NoSuchMethodError} When the method does not exist on the current implementation.
	 * @throws {TypeError} When the file path is not a non-empty string.
	 * @deprecated Use bytes() instead.
	 */
	async arrayBuffer(filePath) {
		assertValidFileOrDirPath(filePath);

		const result = await this.#callImplMethodAlt(
			"bytes",
			"arrayBuffer",
			filePath,
		);
		return result?.buffer;
	}

	/**
	 * Reads the given file and returns the contents as an Uint8Array.
	 * @param {string|URL} filePath The file to read.
	 * @returns {Promise<Uint8Array|undefined>} The contents of the file as an Uint8Array.
	 * @throws {NoSuchMethodError} When the method does not exist on the current implementation.
	 * @throws {TypeError} When the file path is not a non-empty string.
	 */
	async bytes(filePath) {
		assertValidFileOrDirPath(filePath);
		return this.#callImplMethod("bytes", filePath);
	}

	/**
	 * Writes the given data to the given file. Creates any necessary directories along the way.
	 * If the data is a string, UTF-8 encoding is used.
	 * @param {string|URL} filePath The file to write.
	 * @param {string|ArrayBuffer|ArrayBufferView} contents The data to write.
	 * @returns {Promise<void>} A promise that resolves when the file is written.
	 * @throws {NoSuchMethodError} When the method does not exist on the current implementation.
	 * @throws {TypeError} When the file path is not a non-empty string.
	 */
	async write(filePath, contents) {
		assertValidFileOrDirPath(filePath);
		assertValidFileContents(contents);
		this.#log("write", filePath, contents);

		let value = toUint8Array(contents);
		return this.#callImplMethodWithoutLog("write", filePath, value);
	}

	/**
	 * Appends the given data to the given file. Creates any necessary directories along the way.
	 * If the data is a string, UTF-8 encoding is used.
	 * @param {string|URL} filePath The file to append to.
	 * @param {string|ArrayBuffer|ArrayBufferView} contents The data to append.
	 * @returns {Promise<void>} A promise that resolves when the file is appended to.
	 * @throws {NoSuchMethodError} When the method does not exist on the current implementation.
	 * @throws {TypeError} When the file path is not a non-empty string.
	 * @throws {TypeError} When the file contents are not a string or ArrayBuffer.
	 * @throws {Error} When the file cannot be appended to.
	 */
	async append(filePath, contents) {
		assertValidFileOrDirPath(filePath);
		assertValidFileContents(contents);
		this.#log("append", filePath, contents);

		let value = toUint8Array(contents);
		return this.#callImplMethodWithoutLog("append", filePath, value);
	}

	/**
	 * Determines if the given file exists.
	 * @param {string|URL} filePath The file to check.
	 * @returns {Promise<boolean>} True if the file exists.
	 * @throws {NoSuchMethodError} When the method does not exist on the current implementation.
	 * @throws {TypeError} When the file path is not a non-empty string.
	 */
	async isFile(filePath) {
		assertValidFileOrDirPath(filePath);
		return this.#callImplMethod("isFile", filePath);
	}

	/**
	 * Determines if the given directory exists.
	 * @param {string|URL} dirPath The directory to check.
	 * @returns {Promise<boolean>} True if the directory exists.
	 * @throws {NoSuchMethodError} When the method does not exist on the current implementation.
	 * @throws {TypeError} When the directory path is not a non-empty string.
	 */
	async isDirectory(dirPath) {
		assertValidFileOrDirPath(dirPath);
		return this.#callImplMethod("isDirectory", dirPath);
	}

	/**
	 * Creates the given directory.
	 * @param {string|URL} dirPath The directory to create.
	 * @returns {Promise<void>} A promise that resolves when the directory is created.
	 * @throws {NoSuchMethodError} When the method does not exist on the current implementation.
	 * @throws {TypeError} When the directory path is not a non-empty string.
	 */
	async createDirectory(dirPath) {
		assertValidFileOrDirPath(dirPath);
		return this.#callImplMethod("createDirectory", dirPath);
	}

	/**
	 * Deletes the given file or empty directory.
	 * @param {string|URL} filePath The file to delete.
	 * @returns {Promise<boolean>} A promise that resolves when the file or
	 *   directory is deleted, true if the file or directory is deleted, false
	 *   if the file or directory does not exist.
	 * @throws {NoSuchMethodError} When the method does not exist on the current implementation.
	 * @throws {TypeError} When the file path is not a non-empty string.
	 */
	async delete(filePath) {
		assertValidFileOrDirPath(filePath);
		return this.#callImplMethod("delete", filePath);
	}

	/**
	 * Deletes the given file or directory recursively.
	 * @param {string|URL} dirPath The directory to delete.
	 * @returns {Promise<boolean>} A promise that resolves when the file or
	 *   directory is deleted, true if the file or directory is deleted, false
	 *   if the file or directory does not exist.
	 * @throws {NoSuchMethodError} When the method does not exist on the current implementation.
	 * @throws {TypeError} When the directory path is not a non-empty string.
	 */
	async deleteAll(dirPath) {
		assertValidFileOrDirPath(dirPath);
		return this.#callImplMethod("deleteAll", dirPath);
	}

	/**
	 * Returns a list of directory entries for the given path.
	 * @param {string|URL} dirPath The path to the directory to read.
	 * @returns {AsyncIterable<HfsDirectoryEntry>} A promise that resolves with the
	 *   directory entries.
	 * @throws {TypeError} If the directory path is not a string or URL.
	 * @throws {Error} If the directory cannot be read.
	 */
	async *list(dirPath) {
		assertValidFileOrDirPath(dirPath);
		yield* await this.#callImplMethod("list", dirPath);
	}

	/**
	 * Walks a directory using a depth-first traversal and returns the entries
	 * from the traversal.
	 * @param {string|URL} dirPath The path to the directory to walk.
	 * @param {Object} [options] The options for the walk.
	 * @param {(entry:HfsWalkEntry) => Promise<boolean>|boolean} [options.directoryFilter] A filter function to determine
	 * 	if a directory's entries should be included in the walk.
	 * @param {(entry:HfsWalkEntry) => Promise<boolean>|boolean} [options.entryFilter] A filter function to determine if
	 * 	an entry should be included in the walk.
	 * @returns {AsyncIterable<HfsWalkEntry>} A promise that resolves with the
	 * 	directory entries.
	 * @throws {TypeError} If the directory path is not a string or URL.
	 * @throws {Error} If the directory cannot be read.
	 */
	async *walk(
		dirPath,
		{ directoryFilter = () => true, entryFilter = () => true } = {},
	) {
		assertValidFileOrDirPath(dirPath);
		this.#log("walk", dirPath, { directoryFilter, entryFilter });

		// inner function for recursion without additional logging
		const walk = async function* (
			dirPath,
			{ directoryFilter, entryFilter, parentPath = "", depth = 1 },
		) {
			let dirEntries;

			try {
				dirEntries = await this.#callImplMethodWithoutLog(
					"list",
					dirPath,
				);
			} catch (error) {
				// if the directory does not exist then return an empty array
				if (error.code === "ENOENT") {
					return;
				}

				// otherwise, rethrow the error
				throw error;
			}

			for await (const listEntry of dirEntries) {
				const walkEntry = {
					path: listEntry.name,
					depth,
					...listEntry,
				};

				if (parentPath) {
					walkEntry.path = `${parentPath}/${walkEntry.path}`;
				}

				// first emit the entry but only if the entry filter returns true
				let shouldEmitEntry = entryFilter(walkEntry);
				if (shouldEmitEntry.then) {
					shouldEmitEntry = await shouldEmitEntry;
				}

				if (shouldEmitEntry) {
					yield walkEntry;
				}

				// if it's a directory then yield the entry and walk the directory
				if (listEntry.isDirectory) {
					// if the directory filter returns false, skip the directory
					let shouldWalkDirectory = directoryFilter(walkEntry);
					if (shouldWalkDirectory.then) {
						shouldWalkDirectory = await shouldWalkDirectory;
					}

					if (!shouldWalkDirectory) {
						continue;
					}

					// make sure there's a trailing slash on the directory path before appending
					const directoryPath =
						dirPath instanceof URL
							? new URL(
									listEntry.name,
									dirPath.href.endsWith("/")
										? dirPath.href
										: `${dirPath.href}/`,
								)
							: `${dirPath.endsWith("/") ? dirPath : `${dirPath}/`}${listEntry.name}`;

					yield* walk(directoryPath, {
						directoryFilter,
						entryFilter,
						parentPath: walkEntry.path,
						depth: depth + 1,
					});
				}
			}
		}.bind(this);

		yield* walk(dirPath, { directoryFilter, entryFilter });
	}

	/**
	 * Returns the size of the given file.
	 * @param {string|URL} filePath The path to the file to read.
	 * @returns {Promise<number>} A promise that resolves with the size of the file.
	 * @throws {TypeError} If the file path is not a string or URL.
	 * @throws {Error} If the file cannot be read.
	 */
	async size(filePath) {
		assertValidFileOrDirPath(filePath);
		return this.#callImplMethod("size", filePath);
	}

	/**
	 * Returns the last modified timestamp of the given file or directory.
	 * @param {string|URL} fileOrDirPath The path to the file or directory.
	 * @returns {Promise<Date|undefined>} A promise that resolves with the last modified date
	 *  or undefined if the file or directory does not exist.
	 * @throws {TypeError} If the path is not a string or URL.
	 */
	async lastModified(fileOrDirPath) {
		assertValidFileOrDirPath(fileOrDirPath);
		return this.#callImplMethod("lastModified", fileOrDirPath);
	}

	/**
	 * Copys a file from one location to another.
	 * @param {string|URL} source The path to the file to copy.
	 * @param {string|URL} destination The path to the new file.
	 * @returns {Promise<void>} A promise that resolves when the file is copied.
	 * @throws {TypeError} If the file path is not a string or URL.
	 * @throws {Error} If the file cannot be copied.
	 */
	async copy(source, destination) {
		assertValidFileOrDirPath(source);
		assertValidFileOrDirPath(destination);
		return this.#callImplMethod("copy", source, destination);
	}

	/**
	 * Copies a file or directory from one location to another.
	 * @param {string|URL} source The path to the file or directory to copy.
	 * @param {string|URL} destination The path to copy the file or directory to.
	 * @returns {Promise<void>} A promise that resolves when the file or directory is
	 * copied.
	 * @throws {TypeError} If the directory path is not a string or URL.
	 * @throws {Error} If the directory cannot be copied.
	 */
	async copyAll(source, destination) {
		assertValidFileOrDirPath(source);
		assertValidFileOrDirPath(destination);
		return this.#callImplMethod("copyAll", source, destination);
	}

	/**
	 * Moves a file from the source path to the destination path.
	 * @param {string|URL} source The location of the file to move.
	 * @param {string|URL} destination The destination of the file to move.
	 * @returns {Promise<void>} A promise that resolves when the move is complete.
	 * @throws {TypeError} If the file or directory paths are not strings.
	 * @throws {Error} If the file or directory cannot be moved.
	 */
	async move(source, destination) {
		assertValidFileOrDirPath(source);
		assertValidFileOrDirPath(destination);
		return this.#callImplMethod("move", source, destination);
	}

	/**
	 * Moves a file or directory from one location to another.
	 * @param {string|URL} source The path to the file or directory to move.
	 * @param {string|URL} destination The path to move the file or directory to.
	 * @returns {Promise<void>} A promise that resolves when the file or directory is
	 * moved.
	 * @throws {TypeError} If the source is not a string or URL.
	 * @throws {TypeError} If the destination is not a string or URL.
	 * @throws {Error} If the file or directory cannot be moved.
	 */
	async moveAll(source, destination) {
		assertValidFileOrDirPath(source);
		assertValidFileOrDirPath(destination);
		return this.#callImplMethod("moveAll", source, destination);
	}
}
