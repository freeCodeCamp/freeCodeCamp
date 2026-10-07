// Manually “tree shaken” from:
// <https://github.com/nodejs/node/blob/7c3dce0/lib/internal/modules/package_json_reader.js>
// Last checked on: Apr 29, 2024.
// Removed the native dependency.
// Also: no need to cache, we do that in resolve already.

/**
 * @import {ErrnoException} from './errors.js'
 *
 * @typedef {'commonjs' | 'module' | 'none'} PackageType
 *
 * @typedef PackageConfig
 * @property {string} pjsonPath
 * @property {boolean} exists
 * @property {string | undefined} [main]
 * @property {string | undefined} [name]
 * @property {PackageType} type
 * @property {Record<string, unknown> | undefined} [exports]
 * @property {Record<string, unknown> | undefined} [imports]
 */

import fs from 'node:fs'
import path from 'node:path'
import {fileURLToPath} from 'node:url'
import {codes} from './errors.js'

const hasOwnProperty = {}.hasOwnProperty

const {ERR_INVALID_PACKAGE_CONFIG} = codes

/** @type {Map<string, PackageConfig>} */
const cache = new Map()

/**
 * @param {string} jsonPath
 * @param {{specifier: URL | string, base?: URL}} options
 * @returns {PackageConfig}
 */
export function read(jsonPath, {base, specifier}) {
  const existing = cache.get(jsonPath)

  if (existing) {
    return existing
  }

  /** @type {string | undefined} */
  let string

  try {
    string = fs.readFileSync(path.toNamespacedPath(jsonPath), 'utf8')
  } catch (error) {
    const exception = /** @type {ErrnoException} */ (error)

    if (exception.code !== 'ENOENT') {
      throw exception
    }
  }

  /** @type {PackageConfig} */
  const result = {
    exists: false,
    pjsonPath: jsonPath,
    main: undefined,
    name: undefined,
    type: 'none', // Ignore unknown types for forwards compatibility
    exports: undefined,
    imports: undefined
  }

  if (string !== undefined) {
    /** @type {Record<string, unknown>} */
    let parsed

    try {
      parsed = JSON.parse(string)
    } catch (error_) {
      const cause = /** @type {ErrnoException} */ (error_)
      const error = new ERR_INVALID_PACKAGE_CONFIG(
        jsonPath,
        (base ? `"${specifier}" from ` : '') + fileURLToPath(base || specifier),
        cause.message
      )
      error.cause = cause
      throw error
    }

    result.exists = true

    if (
      hasOwnProperty.call(parsed, 'name') &&
      typeof parsed.name === 'string'
    ) {
      result.name = parsed.name
    }

    if (
      hasOwnProperty.call(parsed, 'main') &&
      typeof parsed.main === 'string'
    ) {
      result.main = parsed.main
    }

    if (hasOwnProperty.call(parsed, 'exports')) {
      // @ts-expect-error: assume valid.
      result.exports = parsed.exports
    }

    if (hasOwnProperty.call(parsed, 'imports')) {
      // @ts-expect-error: assume valid.
      result.imports = parsed.imports
    }

    // Ignore unknown types for forwards compatibility
    if (
      hasOwnProperty.call(parsed, 'type') &&
      (parsed.type === 'commonjs' || parsed.type === 'module')
    ) {
      result.type = parsed.type
    }
  }

  cache.set(jsonPath, result)

  return result
}

/**
 * @param {URL | string} resolved
 * @returns {PackageConfig}
 */
export function getPackageScopeConfig(resolved) {
  // Note: in Node, this is now a native module.
  let packageJSONUrl = new URL('package.json', resolved)

  while (true) {
    const packageJSONPath = packageJSONUrl.pathname
    if (packageJSONPath.endsWith('node_modules/package.json')) {
      break
    }

    const packageConfig = read(fileURLToPath(packageJSONUrl), {
      specifier: resolved
    })

    if (packageConfig.exists) {
      return packageConfig
    }

    const lastPackageJSONUrl = packageJSONUrl
    packageJSONUrl = new URL('../package.json', packageJSONUrl)

    // Terminates at root where ../package.json equals ../../package.json
    // (can't just check "/package.json" for Windows support).
    if (packageJSONUrl.pathname === lastPackageJSONUrl.pathname) {
      break
    }
  }

  const packageJSONPath = fileURLToPath(packageJSONUrl)
  // ^^ Note: in Node, this is now a native module.

  return {
    pjsonPath: packageJSONPath,
    exists: false,
    type: 'none'
  }
}

/**
 * Returns the package type for a given URL.
 * @param {URL} url - The URL to get the package type for.
 * @returns {PackageType}
 */
export function getPackageType(url) {
  // To do @anonrig: Write a C++ function that returns only "type".
  return getPackageScopeConfig(url).type
}
