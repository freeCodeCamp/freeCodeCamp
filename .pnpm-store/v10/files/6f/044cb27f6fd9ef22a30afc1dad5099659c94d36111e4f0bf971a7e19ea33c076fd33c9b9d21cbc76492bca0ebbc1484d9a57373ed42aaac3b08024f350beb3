/**
 * @fileoverview The main file for the hfs package.
 * @author Nicholas C. Zakas
 */
/* global Buffer:readonly, URL */

//-----------------------------------------------------------------------------
// Types
//-----------------------------------------------------------------------------

/** @typedef {import("@humanfs/types").HfsImpl} HfsImpl */
/** @typedef {import("@humanfs/types").HfsDirectoryEntry} HfsDirectoryEntry */
/** @typedef {import("node:fs/promises")} Fsp */
/** @typedef {import("fs").Dirent} Dirent */

//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------

import { Hfs } from "@humanfs/core";
import path from "node:path";
import { Retrier } from "@humanwhocodes/retry";
import nativeFsp from "node:fs/promises";
import { fileURLToPath } from "node:url";

//-----------------------------------------------------------------------------
// Constants
//-----------------------------------------------------------------------------

const RETRY_ERROR_CODES = new Set(["ENFILE", "EMFILE"]);

//-----------------------------------------------------------------------------
// Helpers
//-----------------------------------------------------------------------------

/**
 * A class representing a directory entry.
 * @implements {HfsDirectoryEntry}
 */
class NodeHfsDirectoryEntry {
	/**
	 * The name of the directory entry.
	 * @type {string}
	 */
	name;

	/**
	 * True if the entry is a file.
	 * @type {boolean}
	 */
	isFile;

	/**
	 * True if the entry is a directory.
	 * @type {boolean}
	 */
	isDirectory;

	/**
	 * True if the entry is a symbolic link.
	 * @type {boolean}
	 */
	isSymlink;

	/**
	 * Creates a new instance.
	 * @param {Dirent} dirent The directory entry to wrap.
	 */
	constructor(dirent) {
		this.name = dirent.name;
		this.isFile = dirent.isFile();
		this.isDirectory = dirent.isDirectory();
		this.isSymlink = dirent.isSymbolicLink();
	}
}

//-----------------------------------------------------------------------------
// Exports
//-----------------------------------------------------------------------------

/**
 * A class representing the Node.js implementation of Hfs.
 * @implements {HfsImpl}
 */
export class NodeHfsImpl {
	/**
	 * The file system module to use.
	 * @type {Fsp}
	 */
	#fsp;

	/**
	 * The retryer object used for retrying operations.
	 * @type {Retrier}
	 */
	#retrier;

	/**
	 * Creates a new instance.
	 * @param {object} [options] The options for the instance.
	 * @param {Fsp} [options.fsp] The file system module to use.
	 */
	constructor({ fsp = nativeFsp } = {}) {
		this.#fsp = fsp;
		this.#retrier = new Retrier(error => RETRY_ERROR_CODES.has(error.code));
	}

	/**
	 * Reads a file and returns the contents as an Uint8Array.
	 * @param {string|URL} filePath The path to the file to read.
	 * @returns {Promise<Uint8Array|undefined>} A promise that resolves with the contents
	 *    of the file or undefined if the file doesn't exist.
	 * @throws {Error} If the file cannot be read.
	 * @throws {TypeError} If the file path is not a string.
	 */
	bytes(filePath) {
		return this.#retrier
			.retry(() => this.#fsp.readFile(filePath))
			.then(buffer => new Uint8Array(buffer.buffer))
			.catch(error => {
				if (error.code === "ENOENT") {
					return undefined;
				}

				throw error;
			});
	}

	/**
	 * Writes a value to a file. If the value is a string, UTF-8 encoding is used.
	 * @param {string|URL} filePath The path to the file to write.
	 * @param {Uint8Array} contents The contents to write to the
	 *   file.
	 * @returns {Promise<void>} A promise that resolves when the file is
	 *  written.
	 * @throws {TypeError} If the file path is not a string.
	 * @throws {Error} If the file cannot be written.
	 */
	async write(filePath, contents) {
		const value = Buffer.from(contents);

		return this.#retrier
			.retry(() => this.#fsp.writeFile(filePath, value))
			.catch(error => {
				// the directory may not exist, so create it
				if (error.code === "ENOENT") {
					const dirPath = path.dirname(
						filePath instanceof URL
							? fileURLToPath(filePath)
							: filePath,
					);

					return this.#fsp
						.mkdir(dirPath, { recursive: true })
						.then(() => this.#fsp.writeFile(filePath, value));
				}

				throw error;
			});
	}

	/**
	 * Appends a value to a file. If the value is a string, UTF-8 encoding is used.
	 * @param {string|URL} filePath The path to the file to append to.
	 * @param {Uint8Array} contents The contents to append to the
	 *  file.
	 * @returns {Promise<void>} A promise that resolves when the file is
	 * written.
	 * @throws {TypeError} If the file path is not a string.
	 * @throws {Error} If the file cannot be appended to.
	 */
	async append(filePath, contents) {
		const value = Buffer.from(contents);

		return this.#retrier
			.retry(() => this.#fsp.appendFile(filePath, value))
			.catch(error => {
				// the directory may not exist, so create it
				if (error.code === "ENOENT") {
					const dirPath = path.dirname(
						filePath instanceof URL
							? fileURLToPath(filePath)
							: filePath,
					);

					return this.#fsp
						.mkdir(dirPath, { recursive: true })
						.then(() => this.#fsp.appendFile(filePath, value));
				}

				throw error;
			});
	}

	/**
	 * Checks if a file exists.
	 * @param {string|URL} filePath The path to the file to check.
	 * @returns {Promise<boolean>} A promise that resolves with true if the
	 *    file exists or false if it does not.
	 * @throws {Error} If the operation fails with a code other than ENOENT.
	 */
	isFile(filePath) {
		return this.#fsp
			.stat(filePath)
			.then(stat => stat.isFile())
			.catch(error => {
				if (error.code === "ENOENT") {
					return false;
				}

				throw error;
			});
	}

	/**
	 * Checks if a directory exists.
	 * @param {string|URL} dirPath The path to the directory to check.
	 * @returns {Promise<boolean>} A promise that resolves with true if the
	 *    directory exists or false if it does not.
	 * @throws {Error} If the operation fails with a code other than ENOENT.
	 */
	isDirectory(dirPath) {
		return this.#fsp
			.stat(dirPath)
			.then(stat => stat.isDirectory())
			.catch(error => {
				if (error.code === "ENOENT") {
					return false;
				}

				throw error;
			});
	}

	/**
	 * Creates a directory recursively.
	 * @param {string|URL} dirPath The path to the directory to create.
	 * @returns {Promise<void>} A promise that resolves when the directory is
	 *   created.
	 */
	async createDirectory(dirPath) {
		await this.#fsp.mkdir(dirPath, { recursive: true });
	}

	/**
	 * Deletes a file or empty directory.
	 * @param {string|URL} fileOrDirPath The path to the file or directory to
	 *   delete.
	 * @returns {Promise<boolean>} A promise that resolves when the file or
	 *   directory is deleted, true if the file or directory is deleted, false
	 *   if the file or directory does not exist.
	 * @throws {TypeError} If the file or directory path is not a string.
	 * @throws {Error} If the file or directory cannot be deleted.
	 */
	delete(fileOrDirPath) {
		return this.#fsp
			.rm(fileOrDirPath)
			.then(() => true)
			.catch(error => {
				if (error.code === "ERR_FS_EISDIR") {
					return this.#fsp.rmdir(fileOrDirPath).then(() => true);
				}

				if (error.code === "ENOENT") {
					return false;
				}

				throw error;
			});
	}

	/**
	 * Deletes a file or directory recursively.
	 * @param {string|URL} fileOrDirPath The path to the file or directory to
	 *   delete.
	 * @returns {Promise<boolean>} A promise that resolves when the file or
	 *   directory is deleted, true if the file or directory is deleted, false
	 *   if the file or directory does not exist.
	 * @throws {TypeError} If the file or directory path is not a string.
	 * @throws {Error} If the file or directory cannot be deleted.
	 */
	deleteAll(fileOrDirPath) {
		return this.#fsp
			.rm(fileOrDirPath, { recursive: true })
			.then(() => true)
			.catch(error => {
				if (error.code === "ENOENT") {
					return false;
				}

				throw error;
			});
	}

	/**
	 * Returns a list of directory entries for the given path.
	 * @param {string|URL} dirPath The path to the directory to read.
	 * @returns {AsyncIterable<HfsDirectoryEntry>} A promise that resolves with the
	 *   directory entries.
	 * @throws {TypeError} If the directory path is not a string.
	 * @throws {Error} If the directory cannot be read.
	 */
	async *list(dirPath) {
		const entries = await this.#fsp.readdir(dirPath, {
			withFileTypes: true,
		});

		for (const entry of entries) {
			yield new NodeHfsDirectoryEntry(entry);
		}
	}

	/**
	 * Returns the size of a file. This method handles ENOENT errors
	 * and returns undefined in that case.
	 * @param {string|URL} filePath The path to the file to read.
	 * @returns {Promise<number|undefined>} A promise that resolves with the size of the
	 *  file in bytes or undefined if the file doesn't exist.
	 */
	size(filePath) {
		return this.#fsp
			.stat(filePath)
			.then(stat => stat.size)
			.catch(error => {
				if (error.code === "ENOENT") {
					return undefined;
				}

				throw error;
			});
	}

	/**
	 * Returns the last modified date of a file or directory. This method handles ENOENT errors
	 * and returns undefined in that case.
	 * @param {string|URL} fileOrDirPath The path to the file to read.
	 * @returns {Promise<Date|undefined>} A promise that resolves with the last modified
	 * date of the file or directory, or undefined if the file doesn't exist.
	 */
	lastModified(fileOrDirPath) {
		return this.#fsp
			.stat(fileOrDirPath)
			.then(stat => stat.mtime)
			.catch(error => {
				if (error.code === "ENOENT") {
					return undefined;
				}

				throw error;
			});
	}

	/**
	 * Copies a file from one location to another.
	 * @param {string|URL} source The path to the file to copy.
	 * @param {string|URL} destination The path to copy the file to.
	 * @returns {Promise<void>} A promise that resolves when the file is copied.
	 * @throws {Error} If the source file does not exist.
	 * @throws {Error} If the source file is a directory.
	 * @throws {Error} If the destination file is a directory.
	 */
	copy(source, destination) {
		return this.#fsp.copyFile(source, destination);
	}

	/**
	 * Copies a file or directory from one location to another.
	 * @param {string|URL} source The path to the file or directory to copy.
	 * @param {string|URL} destination The path to copy the file or directory to.
	 * @returns {Promise<void>} A promise that resolves when the file or directory is
	 * copied.
	 * @throws {Error} If the source file or directory does not exist.
	 * @throws {Error} If the destination file or directory is a directory.
	 */
	async copyAll(source, destination) {
		// for files use copy() and exit
		if (await this.isFile(source)) {
			return this.copy(source, destination);
		}

		const sourceStr =
			source instanceof URL ? fileURLToPath(source) : source;

		const destinationStr =
			destination instanceof URL
				? fileURLToPath(destination)
				: destination;

		// for directories, create the destination directory and copy each entry
		await this.createDirectory(destination);

		for await (const entry of this.list(source)) {
			const fromEntryPath = path.join(sourceStr, entry.name);
			const toEntryPath = path.join(destinationStr, entry.name);

			if (entry.isDirectory) {
				await this.copyAll(fromEntryPath, toEntryPath);
			} else {
				await this.copy(fromEntryPath, toEntryPath);
			}
		}
	}

	/**
	 * Moves a file from the source path to the destination path.
	 * @param {string|URL} source The location of the file to move.
	 * @param {string|URL} destination The destination of the file to move.
	 * @returns {Promise<void>} A promise that resolves when the move is complete.
	 * @throws {TypeError} If the file paths are not strings.
	 * @throws {Error} If the file cannot be moved.
	 */
	move(source, destination) {
		return this.#fsp.stat(source).then(stat => {
			if (stat.isDirectory()) {
				throw new Error(
					`EISDIR: illegal operation on a directory, move '${source}' -> '${destination}'`,
				);
			}

			return this.#fsp.rename(source, destination);
		});
	}

	/**
	 * Moves a file or directory from the source path to the destination path.
	 * @param {string|URL} source The location of the file or directory to move.
	 * @param {string|URL} destination The destination of the file or directory to move.
	 * @returns {Promise<void>} A promise that resolves when the move is complete.
	 * @throws {TypeError} If the file paths are not strings.
	 * @throws {Error} If the file or directory cannot be moved.
	 */
	async moveAll(source, destination) {
		return this.#fsp.rename(source, destination);
	}
}

/**
 * A class representing a file system utility library.
 * @implements {HfsImpl}
 */
export class NodeHfs extends Hfs {
	/**
	 * Creates a new instance.
	 * @param {object} [options] The options for the instance.
	 * @param {Fsp} [options.fsp] The file system module to use.
	 */
	constructor({ fsp } = {}) {
		super({ impl: new NodeHfsImpl({ fsp }) });
	}
}

export const hfs = new NodeHfs();
