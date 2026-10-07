/**
 * @typedef {import('./lib/errors.js').ErrnoException} ErrnoException
 */

import {defaultResolve} from './lib/resolve.js'

export {moduleResolve} from './lib/resolve.js'

/**
 * Match `import.meta.resolve` except that `parent` is required (you can pass
 * `import.meta.url`).
 *
 * @param {string} specifier
 *   The module specifier to resolve relative to parent
 *   (`/example.js`, `./example.js`, `../example.js`, `some-package`, `fs`,
 *   etc).
 * @param {string} parent
 *   The absolute parent module URL to resolve from.
 *   You must pass `import.meta.url` or something else.
 * @returns {string}
 *   Returns a string to a full `file:`, `data:`, or `node:` URL
 *   to the found thing.
 */
export function resolve(specifier, parent) {
  if (!parent) {
    throw new Error(
      'Please pass `parent`: `import-meta-resolve` cannot ponyfill that'
    )
  }

  try {
    return defaultResolve(specifier, {parentURL: parent}).url
  } catch (error) {
    // See: <https://github.com/nodejs/node/blob/45f5c9b/lib/internal/modules/esm/initialize_import_meta.js#L34>
    const exception = /** @type {ErrnoException} */ (error)

    if (
      (exception.code === 'ERR_UNSUPPORTED_DIR_IMPORT' ||
        exception.code === 'ERR_MODULE_NOT_FOUND') &&
      typeof exception.url === 'string'
    ) {
      return exception.url
    }

    throw error
  }
}
