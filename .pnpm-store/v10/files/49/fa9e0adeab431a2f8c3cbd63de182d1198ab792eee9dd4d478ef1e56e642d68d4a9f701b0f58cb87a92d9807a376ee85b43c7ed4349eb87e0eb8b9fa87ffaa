import { types } from 'node:util';

/**
 * @param {unknown} error
 * @returns {error is NodeJS.ErrnoException}
 */
export default function isPathNotFoundError(error) {
	return types.isNativeError(error) && 'code' in error && error.code === 'ENOENT';
}
