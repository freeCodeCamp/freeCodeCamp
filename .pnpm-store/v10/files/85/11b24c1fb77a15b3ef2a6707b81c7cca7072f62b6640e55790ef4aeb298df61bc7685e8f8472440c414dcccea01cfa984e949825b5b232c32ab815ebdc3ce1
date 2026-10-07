// Manually “tree shaken” from:
// <https://github.com/nodejs/node/blob/81a9a97/lib/internal/modules/esm/resolve.js>
// Last checked on: Apr 29, 2024.

/**
 * @import {Stats} from 'node:fs'
 * @import {ErrnoException} from './errors.js'
 * @import {PackageConfig} from './package-json-reader.js'
 */

import assert from 'node:assert'
import {statSync, realpathSync} from 'node:fs'
import process from 'node:process'
import {fileURLToPath, pathToFileURL} from 'node:url'
import path from 'node:path'
import {builtinModules} from 'node:module'
import {defaultGetFormatWithoutErrors} from './get-format.js'
import {codes} from './errors.js'
import {getPackageScopeConfig, read} from './package-json-reader.js'
import {getConditionsSet} from './utils.js'

const RegExpPrototypeSymbolReplace = RegExp.prototype[Symbol.replace]

const {
  ERR_NETWORK_IMPORT_DISALLOWED,
  ERR_INVALID_MODULE_SPECIFIER,
  ERR_INVALID_PACKAGE_CONFIG,
  ERR_INVALID_PACKAGE_TARGET,
  ERR_MODULE_NOT_FOUND,
  ERR_PACKAGE_IMPORT_NOT_DEFINED,
  ERR_PACKAGE_PATH_NOT_EXPORTED,
  ERR_UNSUPPORTED_DIR_IMPORT,
  ERR_UNSUPPORTED_RESOLVE_REQUEST
} = codes

const own = {}.hasOwnProperty

const invalidSegmentRegEx =
  /(^|\\|\/)((\.|%2e)(\.|%2e)?|(n|%6e|%4e)(o|%6f|%4f)(d|%64|%44)(e|%65|%45)(_|%5f)(m|%6d|%4d)(o|%6f|%4f)(d|%64|%44)(u|%75|%55)(l|%6c|%4c)(e|%65|%45)(s|%73|%53))?(\\|\/|$)/i
const deprecatedInvalidSegmentRegEx =
  /(^|\\|\/)((\.|%2e)(\.|%2e)?|(n|%6e|%4e)(o|%6f|%4f)(d|%64|%44)(e|%65|%45)(_|%5f)(m|%6d|%4d)(o|%6f|%4f)(d|%64|%44)(u|%75|%55)(l|%6c|%4c)(e|%65|%45)(s|%73|%53))(\\|\/|$)/i
const invalidPackageNameRegEx = /^\.|%|\\/
const patternRegEx = /\*/g
const encodedSeparatorRegEx = /%2f|%5c/i
/** @type {Set<string>} */
const emittedPackageWarnings = new Set()

const doubleSlashRegEx = /[/\\]{2}/

/**
 *
 * @param {string} target
 * @param {string} request
 * @param {string} match
 * @param {URL} packageJsonUrl
 * @param {boolean} internal
 * @param {URL} base
 * @param {boolean} isTarget
 */
function emitInvalidSegmentDeprecation(
  target,
  request,
  match,
  packageJsonUrl,
  internal,
  base,
  isTarget
) {
  // @ts-expect-error: apparently it does exist, TS.
  if (process.noDeprecation) {
    return
  }

  const pjsonPath = fileURLToPath(packageJsonUrl)
  const double = doubleSlashRegEx.exec(isTarget ? target : request) !== null
  process.emitWarning(
    `Use of deprecated ${
      double ? 'double slash' : 'leading or trailing slash matching'
    } resolving "${target}" for module ` +
      `request "${request}" ${
        request === match ? '' : `matched to "${match}" `
      }in the "${
        internal ? 'imports' : 'exports'
      }" field module resolution of the package at ${pjsonPath}${
        base ? ` imported from ${fileURLToPath(base)}` : ''
      }.`,
    'DeprecationWarning',
    'DEP0166'
  )
}

/**
 * @param {URL} url
 * @param {URL} packageJsonUrl
 * @param {URL} base
 * @param {string} [main]
 * @returns {void}
 */
function emitLegacyIndexDeprecation(url, packageJsonUrl, base, main) {
  // @ts-expect-error: apparently it does exist, TS.
  if (process.noDeprecation) {
    return
  }

  const format = defaultGetFormatWithoutErrors(url, {parentURL: base.href})
  if (format !== 'module') return
  const urlPath = fileURLToPath(url.href)
  const packagePath = fileURLToPath(new URL('.', packageJsonUrl))
  const basePath = fileURLToPath(base)
  if (!main) {
    process.emitWarning(
      `No "main" or "exports" field defined in the package.json for ${packagePath} resolving the main entry point "${urlPath.slice(
        packagePath.length
      )}", imported from ${basePath}.\nDefault "index" lookups for the main are deprecated for ES modules.`,
      'DeprecationWarning',
      'DEP0151'
    )
  } else if (path.resolve(packagePath, main) !== urlPath) {
    process.emitWarning(
      `Package ${packagePath} has a "main" field set to "${main}", ` +
        `excluding the full filename and extension to the resolved file at "${urlPath.slice(
          packagePath.length
        )}", imported from ${basePath}.\n Automatic extension resolution of the "main" field is ` +
        'deprecated for ES modules.',
      'DeprecationWarning',
      'DEP0151'
    )
  }
}

/**
 * @param {string} path
 * @returns {Stats | undefined}
 */
function tryStatSync(path) {
  // Note: from Node 15 onwards we can use `throwIfNoEntry: false` instead.
  try {
    return statSync(path)
  } catch {
    // Note: in Node code this returns `new Stats`,
    // but in Node 22 that’s marked as a deprecated internal API.
    // Which, well, we kinda are, but still to prevent that warning,
    // just yield `undefined`.
  }
}

/**
 * Legacy CommonJS main resolution:
 * 1. let M = pkg_url + (json main field)
 * 2. TRY(M, M.js, M.json, M.node)
 * 3. TRY(M/index.js, M/index.json, M/index.node)
 * 4. TRY(pkg_url/index.js, pkg_url/index.json, pkg_url/index.node)
 * 5. NOT_FOUND
 *
 * @param {URL} url
 * @returns {boolean}
 */
function fileExists(url) {
  const stats = statSync(url, {throwIfNoEntry: false})
  const isFile = stats ? stats.isFile() : undefined
  return isFile === null || isFile === undefined ? false : isFile
}

/**
 * @param {URL} packageJsonUrl
 * @param {PackageConfig} packageConfig
 * @param {URL} base
 * @returns {URL}
 */
function legacyMainResolve(packageJsonUrl, packageConfig, base) {
  /** @type {URL | undefined} */
  let guess
  if (packageConfig.main !== undefined) {
    guess = new URL(packageConfig.main, packageJsonUrl)
    // Note: fs check redundances will be handled by Descriptor cache here.
    if (fileExists(guess)) return guess

    const tries = [
      `./${packageConfig.main}.js`,
      `./${packageConfig.main}.json`,
      `./${packageConfig.main}.node`,
      `./${packageConfig.main}/index.js`,
      `./${packageConfig.main}/index.json`,
      `./${packageConfig.main}/index.node`
    ]
    let i = -1

    while (++i < tries.length) {
      guess = new URL(tries[i], packageJsonUrl)
      if (fileExists(guess)) break
      guess = undefined
    }

    if (guess) {
      emitLegacyIndexDeprecation(
        guess,
        packageJsonUrl,
        base,
        packageConfig.main
      )
      return guess
    }
    // Fallthrough.
  }

  const tries = ['./index.js', './index.json', './index.node']
  let i = -1

  while (++i < tries.length) {
    guess = new URL(tries[i], packageJsonUrl)
    if (fileExists(guess)) break
    guess = undefined
  }

  if (guess) {
    emitLegacyIndexDeprecation(guess, packageJsonUrl, base, packageConfig.main)
    return guess
  }

  // Not found.
  throw new ERR_MODULE_NOT_FOUND(
    fileURLToPath(new URL('.', packageJsonUrl)),
    fileURLToPath(base)
  )
}

/**
 * @param {URL} resolved
 * @param {URL} base
 * @param {boolean} [preserveSymlinks]
 * @returns {URL}
 */
function finalizeResolution(resolved, base, preserveSymlinks) {
  if (encodedSeparatorRegEx.exec(resolved.pathname) !== null) {
    throw new ERR_INVALID_MODULE_SPECIFIER(
      resolved.pathname,
      'must not include encoded "/" or "\\" characters',
      fileURLToPath(base)
    )
  }

  /** @type {string} */
  let filePath

  try {
    filePath = fileURLToPath(resolved)
  } catch (error) {
    const cause = /** @type {ErrnoException} */ (error)
    Object.defineProperty(cause, 'input', {value: String(resolved)})
    Object.defineProperty(cause, 'module', {value: String(base)})
    throw cause
  }

  const stats = tryStatSync(
    filePath.endsWith('/') ? filePath.slice(-1) : filePath
  )

  if (stats && stats.isDirectory()) {
    const error = new ERR_UNSUPPORTED_DIR_IMPORT(filePath, fileURLToPath(base))
    // @ts-expect-error Add this for `import.meta.resolve`.
    error.url = String(resolved)
    throw error
  }

  if (!stats || !stats.isFile()) {
    const error = new ERR_MODULE_NOT_FOUND(
      filePath || resolved.pathname,
      base && fileURLToPath(base),
      true
    )
    // @ts-expect-error Add this for `import.meta.resolve`.
    error.url = String(resolved)
    throw error
  }

  if (!preserveSymlinks) {
    const real = realpathSync(filePath)
    const {search, hash} = resolved
    resolved = pathToFileURL(real + (filePath.endsWith(path.sep) ? '/' : ''))
    resolved.search = search
    resolved.hash = hash
  }

  return resolved
}

/**
 * @param {string} specifier
 * @param {URL | undefined} packageJsonUrl
 * @param {URL} base
 * @returns {Error}
 */
function importNotDefined(specifier, packageJsonUrl, base) {
  return new ERR_PACKAGE_IMPORT_NOT_DEFINED(
    specifier,
    packageJsonUrl && fileURLToPath(new URL('.', packageJsonUrl)),
    fileURLToPath(base)
  )
}

/**
 * @param {string} subpath
 * @param {URL} packageJsonUrl
 * @param {URL} base
 * @returns {Error}
 */
function exportsNotFound(subpath, packageJsonUrl, base) {
  return new ERR_PACKAGE_PATH_NOT_EXPORTED(
    fileURLToPath(new URL('.', packageJsonUrl)),
    subpath,
    base && fileURLToPath(base)
  )
}

/**
 * @param {string} request
 * @param {string} match
 * @param {URL} packageJsonUrl
 * @param {boolean} internal
 * @param {URL} [base]
 * @returns {never}
 */
function throwInvalidSubpath(request, match, packageJsonUrl, internal, base) {
  const reason = `request is not a valid match in pattern "${match}" for the "${
    internal ? 'imports' : 'exports'
  }" resolution of ${fileURLToPath(packageJsonUrl)}`
  throw new ERR_INVALID_MODULE_SPECIFIER(
    request,
    reason,
    base && fileURLToPath(base)
  )
}

/**
 * @param {string} subpath
 * @param {unknown} target
 * @param {URL} packageJsonUrl
 * @param {boolean} internal
 * @param {URL} [base]
 * @returns {Error}
 */
function invalidPackageTarget(subpath, target, packageJsonUrl, internal, base) {
  target =
    typeof target === 'object' && target !== null
      ? JSON.stringify(target, null, '')
      : `${target}`

  return new ERR_INVALID_PACKAGE_TARGET(
    fileURLToPath(new URL('.', packageJsonUrl)),
    subpath,
    target,
    internal,
    base && fileURLToPath(base)
  )
}

/**
 * @param {string} target
 * @param {string} subpath
 * @param {string} match
 * @param {URL} packageJsonUrl
 * @param {URL} base
 * @param {boolean} pattern
 * @param {boolean} internal
 * @param {boolean} isPathMap
 * @param {Set<string> | undefined} conditions
 * @returns {URL}
 */
function resolvePackageTargetString(
  target,
  subpath,
  match,
  packageJsonUrl,
  base,
  pattern,
  internal,
  isPathMap,
  conditions
) {
  if (subpath !== '' && !pattern && target[target.length - 1] !== '/')
    throw invalidPackageTarget(match, target, packageJsonUrl, internal, base)

  if (!target.startsWith('./')) {
    if (internal && !target.startsWith('../') && !target.startsWith('/')) {
      let isURL = false

      try {
        new URL(target)
        isURL = true
      } catch {
        // Continue regardless of error.
      }

      if (!isURL) {
        const exportTarget = pattern
          ? RegExpPrototypeSymbolReplace.call(
              patternRegEx,
              target,
              () => subpath
            )
          : target + subpath

        return packageResolve(exportTarget, packageJsonUrl, conditions)
      }
    }

    throw invalidPackageTarget(match, target, packageJsonUrl, internal, base)
  }

  if (invalidSegmentRegEx.exec(target.slice(2)) !== null) {
    if (deprecatedInvalidSegmentRegEx.exec(target.slice(2)) === null) {
      if (!isPathMap) {
        const request = pattern
          ? match.replace('*', () => subpath)
          : match + subpath
        const resolvedTarget = pattern
          ? RegExpPrototypeSymbolReplace.call(
              patternRegEx,
              target,
              () => subpath
            )
          : target
        emitInvalidSegmentDeprecation(
          resolvedTarget,
          request,
          match,
          packageJsonUrl,
          internal,
          base,
          true
        )
      }
    } else {
      throw invalidPackageTarget(match, target, packageJsonUrl, internal, base)
    }
  }

  const resolved = new URL(target, packageJsonUrl)
  const resolvedPath = resolved.pathname
  const packagePath = new URL('.', packageJsonUrl).pathname

  if (!resolvedPath.startsWith(packagePath))
    throw invalidPackageTarget(match, target, packageJsonUrl, internal, base)

  if (subpath === '') return resolved

  if (invalidSegmentRegEx.exec(subpath) !== null) {
    const request = pattern
      ? match.replace('*', () => subpath)
      : match + subpath
    if (deprecatedInvalidSegmentRegEx.exec(subpath) === null) {
      if (!isPathMap) {
        const resolvedTarget = pattern
          ? RegExpPrototypeSymbolReplace.call(
              patternRegEx,
              target,
              () => subpath
            )
          : target
        emitInvalidSegmentDeprecation(
          resolvedTarget,
          request,
          match,
          packageJsonUrl,
          internal,
          base,
          false
        )
      }
    } else {
      throwInvalidSubpath(request, match, packageJsonUrl, internal, base)
    }
  }

  if (pattern) {
    return new URL(
      RegExpPrototypeSymbolReplace.call(
        patternRegEx,
        resolved.href,
        () => subpath
      )
    )
  }

  return new URL(subpath, resolved)
}

/**
 * @param {string} key
 * @returns {boolean}
 */
function isArrayIndex(key) {
  const keyNumber = Number(key)
  if (`${keyNumber}` !== key) return false
  return keyNumber >= 0 && keyNumber < 0xff_ff_ff_ff
}

/**
 * @param {URL} packageJsonUrl
 * @param {unknown} target
 * @param {string} subpath
 * @param {string} packageSubpath
 * @param {URL} base
 * @param {boolean} pattern
 * @param {boolean} internal
 * @param {boolean} isPathMap
 * @param {Set<string> | undefined} conditions
 * @returns {URL | null}
 */
function resolvePackageTarget(
  packageJsonUrl,
  target,
  subpath,
  packageSubpath,
  base,
  pattern,
  internal,
  isPathMap,
  conditions
) {
  if (typeof target === 'string') {
    return resolvePackageTargetString(
      target,
      subpath,
      packageSubpath,
      packageJsonUrl,
      base,
      pattern,
      internal,
      isPathMap,
      conditions
    )
  }

  if (Array.isArray(target)) {
    /** @type {Array<unknown>} */
    const targetList = target
    if (targetList.length === 0) return null

    /** @type {ErrnoException | null | undefined} */
    let lastException
    let i = -1

    while (++i < targetList.length) {
      const targetItem = targetList[i]
      /** @type {URL | null} */
      let resolveResult
      try {
        resolveResult = resolvePackageTarget(
          packageJsonUrl,
          targetItem,
          subpath,
          packageSubpath,
          base,
          pattern,
          internal,
          isPathMap,
          conditions
        )
      } catch (error) {
        const exception = /** @type {ErrnoException} */ (error)
        lastException = exception
        if (exception.code === 'ERR_INVALID_PACKAGE_TARGET') continue
        throw error
      }

      if (resolveResult === undefined) continue

      if (resolveResult === null) {
        lastException = null
        continue
      }

      return resolveResult
    }

    if (lastException === undefined || lastException === null) {
      return null
    }

    throw lastException
  }

  if (typeof target === 'object' && target !== null) {
    const keys = Object.getOwnPropertyNames(target)
    let i = -1

    while (++i < keys.length) {
      const key = keys[i]
      if (isArrayIndex(key)) {
        throw new ERR_INVALID_PACKAGE_CONFIG(
          fileURLToPath(packageJsonUrl),
          base,
          '"exports" cannot contain numeric property keys.'
        )
      }
    }

    i = -1

    while (++i < keys.length) {
      const key = keys[i]
      if (key === 'default' || (conditions && conditions.has(key))) {
        // @ts-expect-error: indexable.
        const conditionalTarget = /** @type {unknown} */ (target[key])
        const resolveResult = resolvePackageTarget(
          packageJsonUrl,
          conditionalTarget,
          subpath,
          packageSubpath,
          base,
          pattern,
          internal,
          isPathMap,
          conditions
        )
        if (resolveResult === undefined) continue
        return resolveResult
      }
    }

    return null
  }

  if (target === null) {
    return null
  }

  throw invalidPackageTarget(
    packageSubpath,
    target,
    packageJsonUrl,
    internal,
    base
  )
}

/**
 * @param {unknown} exports
 * @param {URL} packageJsonUrl
 * @param {URL} base
 * @returns {boolean}
 */
function isConditionalExportsMainSugar(exports, packageJsonUrl, base) {
  if (typeof exports === 'string' || Array.isArray(exports)) return true
  if (typeof exports !== 'object' || exports === null) return false

  const keys = Object.getOwnPropertyNames(exports)
  let isConditionalSugar = false
  let i = 0
  let keyIndex = -1
  while (++keyIndex < keys.length) {
    const key = keys[keyIndex]
    const currentIsConditionalSugar = key === '' || key[0] !== '.'
    if (i++ === 0) {
      isConditionalSugar = currentIsConditionalSugar
    } else if (isConditionalSugar !== currentIsConditionalSugar) {
      throw new ERR_INVALID_PACKAGE_CONFIG(
        fileURLToPath(packageJsonUrl),
        base,
        '"exports" cannot contain some keys starting with \'.\' and some not.' +
          ' The exports object must either be an object of package subpath keys' +
          ' or an object of main entry condition name keys only.'
      )
    }
  }

  return isConditionalSugar
}

/**
 * @param {string} match
 * @param {URL} pjsonUrl
 * @param {URL} base
 */
function emitTrailingSlashPatternDeprecation(match, pjsonUrl, base) {
  // @ts-expect-error: apparently it does exist, TS.
  if (process.noDeprecation) {
    return
  }

  const pjsonPath = fileURLToPath(pjsonUrl)
  if (emittedPackageWarnings.has(pjsonPath + '|' + match)) return
  emittedPackageWarnings.add(pjsonPath + '|' + match)
  process.emitWarning(
    `Use of deprecated trailing slash pattern mapping "${match}" in the ` +
      `"exports" field module resolution of the package at ${pjsonPath}${
        base ? ` imported from ${fileURLToPath(base)}` : ''
      }. Mapping specifiers ending in "/" is no longer supported.`,
    'DeprecationWarning',
    'DEP0155'
  )
}

/**
 * @param {URL} packageJsonUrl
 * @param {string} packageSubpath
 * @param {Record<string, unknown>} packageConfig
 * @param {URL} base
 * @param {Set<string> | undefined} conditions
 * @returns {URL}
 */
function packageExportsResolve(
  packageJsonUrl,
  packageSubpath,
  packageConfig,
  base,
  conditions
) {
  let exports = packageConfig.exports

  if (isConditionalExportsMainSugar(exports, packageJsonUrl, base)) {
    exports = {'.': exports}
  }

  if (
    own.call(exports, packageSubpath) &&
    !packageSubpath.includes('*') &&
    !packageSubpath.endsWith('/')
  ) {
    // @ts-expect-error: indexable.
    const target = exports[packageSubpath]
    const resolveResult = resolvePackageTarget(
      packageJsonUrl,
      target,
      '',
      packageSubpath,
      base,
      false,
      false,
      false,
      conditions
    )
    if (resolveResult === null || resolveResult === undefined) {
      throw exportsNotFound(packageSubpath, packageJsonUrl, base)
    }

    return resolveResult
  }

  let bestMatch = ''
  let bestMatchSubpath = ''
  const keys = Object.getOwnPropertyNames(exports)
  let i = -1

  while (++i < keys.length) {
    const key = keys[i]
    const patternIndex = key.indexOf('*')

    if (
      patternIndex !== -1 &&
      packageSubpath.startsWith(key.slice(0, patternIndex))
    ) {
      // When this reaches EOL, this can throw at the top of the whole function:
      //
      // if (StringPrototypeEndsWith(packageSubpath, '/'))
      //   throwInvalidSubpath(packageSubpath)
      //
      // To match "imports" and the spec.
      if (packageSubpath.endsWith('/')) {
        emitTrailingSlashPatternDeprecation(
          packageSubpath,
          packageJsonUrl,
          base
        )
      }

      const patternTrailer = key.slice(patternIndex + 1)

      if (
        packageSubpath.length >= key.length &&
        packageSubpath.endsWith(patternTrailer) &&
        patternKeyCompare(bestMatch, key) === 1 &&
        key.lastIndexOf('*') === patternIndex
      ) {
        bestMatch = key
        bestMatchSubpath = packageSubpath.slice(
          patternIndex,
          packageSubpath.length - patternTrailer.length
        )
      }
    }
  }

  if (bestMatch) {
    // @ts-expect-error: indexable.
    const target = /** @type {unknown} */ (exports[bestMatch])
    const resolveResult = resolvePackageTarget(
      packageJsonUrl,
      target,
      bestMatchSubpath,
      bestMatch,
      base,
      true,
      false,
      packageSubpath.endsWith('/'),
      conditions
    )

    if (resolveResult === null || resolveResult === undefined) {
      throw exportsNotFound(packageSubpath, packageJsonUrl, base)
    }

    return resolveResult
  }

  throw exportsNotFound(packageSubpath, packageJsonUrl, base)
}

/**
 * @param {string} a
 * @param {string} b
 */
function patternKeyCompare(a, b) {
  const aPatternIndex = a.indexOf('*')
  const bPatternIndex = b.indexOf('*')
  const baseLengthA = aPatternIndex === -1 ? a.length : aPatternIndex + 1
  const baseLengthB = bPatternIndex === -1 ? b.length : bPatternIndex + 1
  if (baseLengthA > baseLengthB) return -1
  if (baseLengthB > baseLengthA) return 1
  if (aPatternIndex === -1) return 1
  if (bPatternIndex === -1) return -1
  if (a.length > b.length) return -1
  if (b.length > a.length) return 1
  return 0
}

/**
 * @param {string} name
 * @param {URL} base
 * @param {Set<string>} [conditions]
 * @returns {URL}
 */
function packageImportsResolve(name, base, conditions) {
  if (name === '#' || name.startsWith('#/') || name.endsWith('/')) {
    const reason = 'is not a valid internal imports specifier name'
    throw new ERR_INVALID_MODULE_SPECIFIER(name, reason, fileURLToPath(base))
  }

  /** @type {URL | undefined} */
  let packageJsonUrl

  const packageConfig = getPackageScopeConfig(base)

  if (packageConfig.exists) {
    packageJsonUrl = pathToFileURL(packageConfig.pjsonPath)
    const imports = packageConfig.imports
    if (imports) {
      if (own.call(imports, name) && !name.includes('*')) {
        const resolveResult = resolvePackageTarget(
          packageJsonUrl,
          imports[name],
          '',
          name,
          base,
          false,
          true,
          false,
          conditions
        )
        if (resolveResult !== null && resolveResult !== undefined) {
          return resolveResult
        }
      } else {
        let bestMatch = ''
        let bestMatchSubpath = ''
        const keys = Object.getOwnPropertyNames(imports)
        let i = -1

        while (++i < keys.length) {
          const key = keys[i]
          const patternIndex = key.indexOf('*')

          if (patternIndex !== -1 && name.startsWith(key.slice(0, -1))) {
            const patternTrailer = key.slice(patternIndex + 1)
            if (
              name.length >= key.length &&
              name.endsWith(patternTrailer) &&
              patternKeyCompare(bestMatch, key) === 1 &&
              key.lastIndexOf('*') === patternIndex
            ) {
              bestMatch = key
              bestMatchSubpath = name.slice(
                patternIndex,
                name.length - patternTrailer.length
              )
            }
          }
        }

        if (bestMatch) {
          const target = imports[bestMatch]
          const resolveResult = resolvePackageTarget(
            packageJsonUrl,
            target,
            bestMatchSubpath,
            bestMatch,
            base,
            true,
            true,
            false,
            conditions
          )

          if (resolveResult !== null && resolveResult !== undefined) {
            return resolveResult
          }
        }
      }
    }
  }

  throw importNotDefined(name, packageJsonUrl, base)
}

/**
 * @param {string} specifier
 * @param {URL} base
 */
function parsePackageName(specifier, base) {
  let separatorIndex = specifier.indexOf('/')
  let validPackageName = true
  let isScoped = false
  if (specifier[0] === '@') {
    isScoped = true
    if (separatorIndex === -1 || specifier.length === 0) {
      validPackageName = false
    } else {
      separatorIndex = specifier.indexOf('/', separatorIndex + 1)
    }
  }

  const packageName =
    separatorIndex === -1 ? specifier : specifier.slice(0, separatorIndex)

  // Package name cannot have leading . and cannot have percent-encoding or
  // \\ separators.
  if (invalidPackageNameRegEx.exec(packageName) !== null) {
    validPackageName = false
  }

  if (!validPackageName) {
    throw new ERR_INVALID_MODULE_SPECIFIER(
      specifier,
      'is not a valid package name',
      fileURLToPath(base)
    )
  }

  const packageSubpath =
    '.' + (separatorIndex === -1 ? '' : specifier.slice(separatorIndex))

  return {packageName, packageSubpath, isScoped}
}

/**
 * @param {string} specifier
 * @param {URL} base
 * @param {Set<string> | undefined} conditions
 * @returns {URL}
 */
function packageResolve(specifier, base, conditions) {
  if (builtinModules.includes(specifier)) {
    return new URL('node:' + specifier)
  }

  const {packageName, packageSubpath, isScoped} = parsePackageName(
    specifier,
    base
  )

  // ResolveSelf
  const packageConfig = getPackageScopeConfig(base)

  // Can’t test.
  /* c8 ignore next 16 */
  if (packageConfig.exists) {
    const packageJsonUrl = pathToFileURL(packageConfig.pjsonPath)
    if (
      packageConfig.name === packageName &&
      packageConfig.exports !== undefined &&
      packageConfig.exports !== null
    ) {
      return packageExportsResolve(
        packageJsonUrl,
        packageSubpath,
        packageConfig,
        base,
        conditions
      )
    }
  }

  let packageJsonUrl = new URL(
    './node_modules/' + packageName + '/package.json',
    base
  )
  let packageJsonPath = fileURLToPath(packageJsonUrl)
  /** @type {string} */
  let lastPath
  do {
    const stat = tryStatSync(packageJsonPath.slice(0, -13))
    if (!stat || !stat.isDirectory()) {
      lastPath = packageJsonPath
      packageJsonUrl = new URL(
        (isScoped ? '../../../../node_modules/' : '../../../node_modules/') +
          packageName +
          '/package.json',
        packageJsonUrl
      )
      packageJsonPath = fileURLToPath(packageJsonUrl)
      continue
    }

    // Package match.
    const packageConfig = read(packageJsonPath, {base, specifier})
    if (packageConfig.exports !== undefined && packageConfig.exports !== null) {
      return packageExportsResolve(
        packageJsonUrl,
        packageSubpath,
        packageConfig,
        base,
        conditions
      )
    }

    if (packageSubpath === '.') {
      return legacyMainResolve(packageJsonUrl, packageConfig, base)
    }

    return new URL(packageSubpath, packageJsonUrl)
    // Cross-platform root check.
  } while (packageJsonPath.length !== lastPath.length)

  throw new ERR_MODULE_NOT_FOUND(packageName, fileURLToPath(base), false)
}

/**
 * @param {string} specifier
 * @returns {boolean}
 */
function isRelativeSpecifier(specifier) {
  if (specifier[0] === '.') {
    if (specifier.length === 1 || specifier[1] === '/') return true
    if (
      specifier[1] === '.' &&
      (specifier.length === 2 || specifier[2] === '/')
    ) {
      return true
    }
  }

  return false
}

/**
 * @param {string} specifier
 * @returns {boolean}
 */
function shouldBeTreatedAsRelativeOrAbsolutePath(specifier) {
  if (specifier === '') return false
  if (specifier[0] === '/') return true
  return isRelativeSpecifier(specifier)
}

/**
 * The “Resolver Algorithm Specification” as detailed in the Node docs (which is
 * sync and slightly lower-level than `resolve`).
 *
 * @param {string} specifier
 *   `/example.js`, `./example.js`, `../example.js`, `some-package`, `fs`, etc.
 * @param {URL} base
 *   Full URL (to a file) that `specifier` is resolved relative from.
 * @param {Set<string>} [conditions]
 *   Conditions.
 * @param {boolean} [preserveSymlinks]
 *   Keep symlinks instead of resolving them.
 * @returns {URL}
 *   A URL object to the found thing.
 */
export function moduleResolve(specifier, base, conditions, preserveSymlinks) {
  // Note: The Node code supports `base` as a string (in this internal API) too,
  // we don’t.
  if (conditions === undefined) {
    conditions = getConditionsSet()
  }

  const protocol = base.protocol
  const isData = protocol === 'data:'
  const isRemote = isData || protocol === 'http:' || protocol === 'https:'
  // Order swapped from spec for minor perf gain.
  // Ok since relative URLs cannot parse as URLs.
  /** @type {URL | undefined} */
  let resolved

  if (shouldBeTreatedAsRelativeOrAbsolutePath(specifier)) {
    try {
      resolved = new URL(specifier, base)
    } catch (error_) {
      const error = new ERR_UNSUPPORTED_RESOLVE_REQUEST(specifier, base)
      error.cause = error_
      throw error
    }
  } else if (protocol === 'file:' && specifier[0] === '#') {
    resolved = packageImportsResolve(specifier, base, conditions)
  } else {
    try {
      resolved = new URL(specifier)
    } catch (error_) {
      // Note: actual code uses `canBeRequiredWithoutScheme`.
      if (isRemote && !builtinModules.includes(specifier)) {
        const error = new ERR_UNSUPPORTED_RESOLVE_REQUEST(specifier, base)
        error.cause = error_
        throw error
      }

      resolved = packageResolve(specifier, base, conditions)
    }
  }

  assert.ok(resolved !== undefined, 'expected to be defined')

  if (resolved.protocol !== 'file:') {
    return resolved
  }

  return finalizeResolution(resolved, base, preserveSymlinks)
}

/**
 * @param {string} specifier
 * @param {URL | undefined} parsed
 * @param {URL | undefined} parsedParentURL
 */
function checkIfDisallowedImport(specifier, parsed, parsedParentURL) {
  if (parsedParentURL) {
    // Avoid accessing the `protocol` property due to the lazy getters.
    const parentProtocol = parsedParentURL.protocol

    if (parentProtocol === 'http:' || parentProtocol === 'https:') {
      if (shouldBeTreatedAsRelativeOrAbsolutePath(specifier)) {
        // Avoid accessing the `protocol` property due to the lazy getters.
        const parsedProtocol = parsed?.protocol

        // `data:` and `blob:` disallowed due to allowing file: access via
        // indirection
        if (
          parsedProtocol &&
          parsedProtocol !== 'https:' &&
          parsedProtocol !== 'http:'
        ) {
          throw new ERR_NETWORK_IMPORT_DISALLOWED(
            specifier,
            parsedParentURL,
            'remote imports cannot import from a local location.'
          )
        }

        return {url: parsed?.href || ''}
      }

      if (builtinModules.includes(specifier)) {
        throw new ERR_NETWORK_IMPORT_DISALLOWED(
          specifier,
          parsedParentURL,
          'remote imports cannot import from a local location.'
        )
      }

      throw new ERR_NETWORK_IMPORT_DISALLOWED(
        specifier,
        parsedParentURL,
        'only relative and absolute specifiers are supported.'
      )
    }
  }
}

// Note: this is from:
// <https://github.com/nodejs/node/blob/3e74590/lib/internal/url.js#L687>
/**
 * Checks if a value has the shape of a WHATWG URL object.
 *
 * Using a symbol or instanceof would not be able to recognize URL objects
 * coming from other implementations (e.g. in Electron), so instead we are
 * checking some well known properties for a lack of a better test.
 *
 * We use `href` and `protocol` as they are the only properties that are
 * easy to retrieve and calculate due to the lazy nature of the getters.
 *
 * @template {unknown} Value
 * @param {Value} self
 * @returns {Value is URL}
 */
function isURL(self) {
  return Boolean(
    self &&
      typeof self === 'object' &&
      'href' in self &&
      typeof self.href === 'string' &&
      'protocol' in self &&
      typeof self.protocol === 'string' &&
      self.href &&
      self.protocol
  )
}

/**
 * Validate user-input in `context` supplied by a custom loader.
 *
 * @param {unknown} parentURL
 * @returns {asserts parentURL is URL | string | undefined}
 */
function throwIfInvalidParentURL(parentURL) {
  if (parentURL === undefined) {
    return // Main entry point, so no parent
  }

  if (typeof parentURL !== 'string' && !isURL(parentURL)) {
    throw new codes.ERR_INVALID_ARG_TYPE(
      'parentURL',
      ['string', 'URL'],
      parentURL
    )
  }
}

/**
 * @param {string} specifier
 * @param {{parentURL?: string, conditions?: Array<string>}} context
 * @returns {{url: string, format?: string | null}}
 */
export function defaultResolve(specifier, context = {}) {
  const {parentURL} = context
  assert.ok(parentURL !== undefined, 'expected `parentURL` to be defined')
  throwIfInvalidParentURL(parentURL)

  /** @type {URL | undefined} */
  let parsedParentURL
  if (parentURL) {
    try {
      parsedParentURL = new URL(parentURL)
    } catch {
      // Ignore exception
    }
  }

  /** @type {URL | undefined} */
  let parsed
  /** @type {string | undefined} */
  let protocol

  try {
    parsed = shouldBeTreatedAsRelativeOrAbsolutePath(specifier)
      ? new URL(specifier, parsedParentURL)
      : new URL(specifier)

    // Avoid accessing the `protocol` property due to the lazy getters.
    protocol = parsed.protocol

    if (protocol === 'data:') {
      return {url: parsed.href, format: null}
    }
  } catch {
    // Ignore exception
  }

  // There are multiple deep branches that can either throw or return; instead
  // of duplicating that deeply nested logic for the possible returns, DRY and
  // check for a return. This seems the least gnarly.
  const maybeReturn = checkIfDisallowedImport(
    specifier,
    parsed,
    parsedParentURL
  )

  if (maybeReturn) return maybeReturn

  // This must come after checkIfDisallowedImport
  if (protocol === undefined && parsed) {
    protocol = parsed.protocol
  }

  if (protocol === 'node:') {
    return {url: specifier}
  }

  // This must come after checkIfDisallowedImport
  if (parsed && parsed.protocol === 'node:') return {url: specifier}

  const conditions = getConditionsSet(context.conditions)

  const url = moduleResolve(specifier, new URL(parentURL), conditions, false)

  return {
    // Do NOT cast `url` to a string: that will work even when there are real
    // problems, silencing them
    url: url.href,
    format: defaultGetFormatWithoutErrors(url, {parentURL})
  }
}
