import path from 'node:path';

/**
 * Returns the relative path of a file to the current working directory.
 * Always in POSIX format for consistency and interoperability.
 * @param {string} cwd The current working directory.
 * @param {string} filePath The file path.
 * @returns {string} The relative file path.
 */
export default function getRelativePath(cwd, filePath) {
	return path.relative(cwd, filePath).split(path.sep).join(path.posix.sep);
}
