'use strict'

import getEsmExports from './get-esm-exports.mjs'
import { parse as parseCjs, init as parserInit } from 'cjs-module-lexer'
import { readFileSync, existsSync } from 'fs'
import { builtinModules, createRequire } from 'module'
import { fileURLToPath, pathToFileURL } from 'url'
import { dirname, join } from 'path'

const nodeMajor = Number(process.versions.node.split('.')[0])
export const hasModuleExportsCJSDefault = nodeMajor >= 23

let parserInitialized = false

function addDefault (arr) {
  return new Set(['default', ...arr])
}

function hasEsmSyntax (source) {
  // Lightweight scan (no full parse) to determine if the *source code*
  // contains ESM-specific syntax. This is used only when:
  // - the loader chain didn't tell us a `format`, and
  // - `getEsmExports()` found no exports.
  //
  // Notes:
  // - We ignore comments and strings to reduce false positives.
  // - We treat `import.meta` and static `import ...` as ESM.
  // - We do NOT treat `import(` (dynamic import) as ESM because it is allowed
  //   in CJS as an expression.
  if (source.indexOf('import') === -1) return false

  const isIdentCharCode = (code) => (
    (code >= 48 && code <= 57) || // 0-9
    (code >= 65 && code <= 90) || // A-Z
    (code >= 97 && code <= 122) || // a-z
    code === 95 || // _
    code === 36 // $
  )

  const skipWhitespace = (idx) => {
    while (idx < source.length) {
      const c = source.charCodeAt(idx)
      // space, tab, cr, lf
      if (c !== 32 && c !== 9 && c !== 13 && c !== 10) break
      idx++
    }
    return idx
  }

  let i = 0
  while (i < source.length) {
    const ch = source[i]

    // Line comment
    if (ch === '/' && source[i + 1] === '/') {
      i += 2
      while (i < source.length && source[i] !== '\n') i++
      continue
    }

    // Block comment
    if (ch === '/' && source[i + 1] === '*') {
      i += 2
      while (i < source.length && !(source[i] === '*' && source[i + 1] === '/')) i++
      i += 2
      continue
    }

    // Strings: '...' or "..."
    if (ch === '\'' || ch === '"') {
      const quote = ch
      i++
      while (i < source.length) {
        const c = source[i]
        if (c === '\\') {
          i += 2
          continue
        }
        if (c === quote) {
          i++
          break
        }
        i++
      }
      continue
    }

    // Template strings: `...`
    if (ch === '`') {
      i++
      while (i < source.length) {
        const c = source[i]
        if (c === '\\') {
          i += 2
          continue
        }
        if (c === '`') {
          i++
          break
        }
        i++
      }
      continue
    }

    // Keyword scan (word-boundary): import
    if (ch === 'i') {
      const prev = source.charCodeAt(i - 1)
      if (i > 0 && isIdentCharCode(prev)) {
        i++
        continue
      }

      if (source.startsWith('import', i)) {
        const next = source.charCodeAt(i + 6)
        if (isIdentCharCode(next)) {
          i++
          continue
        }

        const j = skipWhitespace(i + 6)
        // `import.meta` is ESM-only
        if (source[j] === '.') return true
        // `import(` is dynamic import, allowed in CJS
        if (source[j] === '(') {
          i = j + 1
          continue
        }
        // Otherwise assume it's a static import form
        return true
      }
    }

    i++
  }

  return false
}

// Cached exports for Node built-in modules
const BUILT_INS = new Map()

let require

function getExportsForNodeBuiltIn (name) {
  let exports = BUILT_INS.get(name)

  if (!require) {
    require = createRequire(import.meta.url)
  }

  if (!exports) {
    // get all properties both enumerable and non-enumerable
    exports = new Set(addDefault(Object.getOwnPropertyNames(require(name))))
    // added in node 23 as alias for default in cjs modules
    if (hasModuleExportsCJSDefault) {
      exports.add('module.exports')
    }
    BUILT_INS.set(name, exports)
  }

  return exports
}

const urlsBeingProcessed = new Set() // Guard against circular imports.

/**
 * This function looks for the package.json which contains the specifier trying to resolve.
 * Once the package.json file has been found, we extract the file path from the specifier
 * @param {string} specifier The specifier that is being search for inside the imports object
 * @param {URL|string} fromUrl The url from which the search starts from
 * @returns array with url and resolvedExport
 */
function resolvePackageImports (specifier, fromUrl) {
  try {
    const fromPath = fileURLToPath(fromUrl)
    let currentDir = dirname(fromPath)

    // search for package.json file which has the real url to export
    while (currentDir !== dirname(currentDir)) {
      const packageJsonPath = join(currentDir, 'package.json')

      if (existsSync(packageJsonPath)) {
        const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf8'))
        if (packageJson.imports && packageJson.imports[specifier]) {
          const imports = packageJson.imports[specifier]

          // Look for path inside packageJson
          let resolvedExport
          if (imports && typeof imports === 'object') {
            const requireExport = imports.require
            const importExport = imports.import
            // look for the possibility of require and import which is standard for CJS/ESM
            if (requireExport || importExport) {
              // trying to resolve based on order of importance
              resolvedExport = requireExport.node || requireExport.default || importExport.node || importExport.default
            } else if (imports.node || imports.default) {
              resolvedExport = imports.node || imports.default
            }
          } else if (typeof imports === 'string') {
            resolvedExport = imports
          }

          if (resolvedExport) {
            const url = resolvedExport.startsWith('.')
              ? pathToFileURL(join(currentDir, resolvedExport))
              : fromUrl
            return [url, resolvedExport]
          }
        }
        // return if we find a package.json but did not find an import
        return null
      }

      currentDir = dirname(currentDir)
    }
  } catch (cause) {
    throw Error(`Failed to find export: ${specifier}`, { cause })
  }
  return null
}

async function getCjsExports (url, context, parentLoad, source) {
  if (urlsBeingProcessed.has(url)) {
    return new Set()
  }
  urlsBeingProcessed.add(url)

  try {
    if (!parserInitialized) {
      await parserInit()
      parserInitialized = true
    }
    const result = parseCjs(source)
    const full = addDefault(result.exports)

    await Promise.all(result.reexports.map(async re => {
      if (re.startsWith('node:') || builtinModules.includes(re)) {
        for (const each of getExportsForNodeBuiltIn(re)) {
          full.add(each)
        }
      } else {
        if (re === '.') {
          re = './'
        }

        // Entries in the import field should always start with #
        if (re.startsWith('#')) {
          const resolved = resolvePackageImports(re, url)
          if (!resolved) return
          [url, re] = resolved
        }

        // Resolve the re-exported module relative to the current module.
        if (!require) {
          require = createRequire(import.meta.url)
        }
        const newUrl = pathToFileURL(require.resolve(re, { paths: [dirname(fileURLToPath(url))] })).href

        if (newUrl.endsWith('.node') || newUrl.endsWith('.json')) {
          return
        }

        for (const each of await getExports(newUrl, context, parentLoad)) {
          full.add(each)
        }
      }
    }))

    // added in node 23 as alias for default in cjs modules
    if (full.has('default') && hasModuleExportsCJSDefault) {
      full.add('module.exports')
    }

    // we know that it's commonjs at this point, because ESM failed
    context.format = 'commonjs'
    return full
  } finally {
    urlsBeingProcessed.delete(url)
  }
}

/**
 * Inspects a module for its type (commonjs or module), attempts to get the
 * source code for said module from the loader API, and parses the result
 * for the entities exported from that module.
 *
 * @param {string} url A file URL string pointing to the module that
 * we should get the exports of.
 * @param {object} context Context object as provided by the `load`
 * hook from the loaders API.
 * @param {Function} parentLoad Next hook function in the loaders API
 * hook chain.
 *
 * @returns {Promise<Set<string>>} An array of identifiers exported by the module.
 * Please see {@link getEsmExports} for caveats on special identifiers that may
 * be included in the result set.
 */
export async function getExports (url, context, parentLoad) {
  // `parentLoad` gives us the possibility of getting the source
  // from an upstream loader. This doesn't always work though,
  // so later on we fall back to reading it from disk.
  const parentCtx = await parentLoad(url, context)
  let source = parentCtx.source
  const format = parentCtx.format

  // Loader hooks can return ArrayBuffer / TypedArray sources. Normalize to a
  // string for parsing.
  if (source && typeof source !== 'string') {
    // Avoid copies where possible:
    // - Buffer.from(Uint8Array) copies
    // - Buffer.from(ArrayBuffer, offset, length) wraps the existing memory
    if (Buffer.isBuffer(source)) {
      source = source.toString('utf8')
    } else if (ArrayBuffer.isView(source)) {
      source = Buffer.from(source.buffer, source.byteOffset, source.byteLength).toString('utf8')
    } else {
      source = Buffer.from(source).toString('utf8')
    }
  }

  if (!source) {
    if (format === 'builtin') {
      // Builtins don't give us the source property, so we're stuck
      // just requiring it to get the exports.
      return getExportsForNodeBuiltIn(url)
    }

    // Sometimes source is retrieved by parentLoad, CommonJs isn't.
    source = readFileSync(fileURLToPath(url), 'utf8')
  }

  try {
    if (format === 'module') {
      return getEsmExports(source)
    }

    if (format === 'commonjs') {
      return await getCjsExports(url, context, parentLoad, source)
    }

    // At this point our `format` is either undefined or not known by us. Fall
    // back to parsing as ESM/CJS.
    const esmExports = getEsmExports(source)
    if (!esmExports.size) {
      // If there's strong evidence this is ESM (static import/import.meta),
      // prefer returning the empty ESM export set over incorrectly treating it
      // as CJS.
      if (!hasEsmSyntax(source)) {
        // It might be possible to get here if the format
        // isn't set at first and yet we have an ESM module with no exports.
        return await getCjsExports(url, context, parentLoad, source)
      }
    }
    return esmExports
  } catch (cause) {
    const err = new Error(`Failed to parse '${url}'`)
    err.cause = cause
    throw err
  }
}
