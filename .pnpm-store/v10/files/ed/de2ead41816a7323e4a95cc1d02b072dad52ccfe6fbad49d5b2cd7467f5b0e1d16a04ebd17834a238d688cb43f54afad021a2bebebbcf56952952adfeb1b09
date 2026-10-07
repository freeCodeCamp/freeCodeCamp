/**
 * @fileoverview Common error classes
 * @author Nicholas C. Zakas
 */

/**
 * Error thrown when a file or directory is not found.
 */
export class NotFoundError extends Error {
	/**
	 * Name of the error class.
	 * @type {string}
	 */
	name = "NotFoundError";

	/**
	 * Error code.
	 * @type {string}
	 */
	code = "ENOENT";

	/**
	 * Creates a new instance.
	 * @param {string} message The error message.
	 */
	constructor(message) {
		super(`ENOENT: No such file or directory, ${message}`);
	}
}

/**
 * Error thrown when an operation is not permitted.
 */
export class PermissionError extends Error {
	/**
	 * Name of the error class.
	 * @type {string}
	 */
	name = "PermissionError";

	/**
	 * Error code.
	 * @type {string}
	 */
	code = "EPERM";

	/**
	 * Creates a new instance.
	 * @param {string} message The error message.
	 */
	constructor(message) {
		super(`EPERM: Operation not permitted, ${message}`);
	}
}

/**
 * Error thrown when an operation is not allowed on a directory.
 */

export class DirectoryError extends Error {
	/**
	 * Name of the error class.
	 * @type {string}
	 */
	name = "DirectoryError";

	/**
	 * Error code.
	 * @type {string}
	 */
	code = "EISDIR";

	/**
	 * Creates a new instance.
	 * @param {string} message The error message.
	 */
	constructor(message) {
		super(`EISDIR: Illegal operation on a directory, ${message}`);
	}
}

/**
 * Error thrown when a directory is not empty.
 */
export class NotEmptyError extends Error {
	/**
	 * Name of the error class.
	 * @type {string}
	 */
	name = "NotEmptyError";

	/**
	 * Error code.
	 * @type {string}
	 */
	code = "ENOTEMPTY";

	/**
	 * Creates a new instance.
	 * @param {string} message The error message.
	 */
	constructor(message) {
		super(`ENOTEMPTY: Directory not empty, ${message}`);
	}
}
