import { join, normalize, resolve, sep } from 'node:path';
import { lstatSync } from 'node:fs';

/**
 * Return the resolved file path, based on whether the provided parameter is
 * a directory or looks like a directory (ends in `path.sep`), in which case the file
 * name will be `location/defaultFileName`.
 *
 * If location points to a file or looks like a file, then it will just use that file.
 *
 * @param {string} location - The name of file or directory to be used
 * @param {string} cwd - Current working directory. Used for tests
 * @param {string} defaultFileName - Default filename to use when location is a directory
 * @returns {string} Resolved path to the file
 */
export default function resolveFilePath(location, cwd, defaultFileName) {
	/*
	 * Make sure path separators are normalized for environment/os.
	 * Also, keep trailing path separator if present.
	 */
	const normalizedLocation = normalize(location);

	const resolvedLocation = resolve(cwd, normalizedLocation);

	// If the location path ends with a separator, we assume is a directory.
	const looksLikeADirectory = location.endsWith(sep);

	if (
		looksLikeADirectory ||
		lstatSync(resolvedLocation, { throwIfNoEntry: false })?.isDirectory()
	) {
		// Return path to provided directory with the specified file name.
		return join(resolvedLocation, defaultFileName);
	}

	// Return normalized path to file.
	return resolvedLocation;
}
