// Unless explicitly stated otherwise all files in this repository are licensed under the Apache 2.0 License.
//
// This product includes software developed at Datadog (https://www.datadoghq.com/). Copyright 2021 Datadog, Inc.

import { URL, fileURLToPath } from 'url'
import { inspect } from 'util'
import { builtinModules } from 'module'
import {
  getExports as getExportsImpl,
  hasModuleExportsCJSDefault
} from './lib/get-exports.mjs'

const specifiers = new Map()
const isWin = process.platform === 'win32'

// FIXME: Typescript extensions are added temporarily until we find a better
// way of supporting arbitrary extensions
const EXTENSION_RE = /\.(js|mjs|cjs|ts|mts|cts)$/
const NODE_VERSION = process.versions.node.split('.')
const NODE_MAJOR = Number(NODE_VERSION[0])
const NODE_MINOR = Number(NODE_VERSION[1])
const HANDLED_FORMATS = new Set(['builtin', 'module', 'commonjs'])
const TRACE_WARNINGS = process.execArgv.includes('--trace-warnings')

let getExports
if (NODE_MAJOR > 16 || (NODE_MAJOR === 16 && NODE_MINOR >= 16)) {
  getExports = getExportsImpl
} else {
  getExports = (url) => import(url).then(Object.keys)
}

function hasIitm (url) {
  // Fast path: avoid URL parsing on the hot path when there's clearly no iitm.
  if (typeof url !== 'string' || url.indexOf('iitm') === -1) {
    return false
  }
  try {
    return new URL(url).searchParams.has('iitm')
  } catch {
    return false
  }
}

function isIitm (url, meta) {
  return url === meta.url || url === meta.url.replace('hook.mjs', 'create-hook.mjs')
}

function deleteIitm (url) {
  // Fast path: avoid URL parsing / try-catch on bare specifiers and normal file URLs.
  if (typeof url !== 'string' || url.indexOf('iitm') === -1) {
    return url
  }
  let resultUrl
  const stackTraceLimit = Error.stackTraceLimit
  try {
    Error.stackTraceLimit = 0
    const urlObj = new URL(url)
    if (urlObj.searchParams.has('iitm')) {
      urlObj.searchParams.delete('iitm')
      resultUrl = urlObj.href
      if (resultUrl.startsWith('file:///node:')) {
        resultUrl = resultUrl.replace('file:///', '')
      }
    } else {
      resultUrl = urlObj.href
    }
  } catch {
    resultUrl = url
  }
  Error.stackTraceLimit = stackTraceLimit
  return resultUrl
}

/**
 * Determines if a specifier represents an export all ESM line.
 * Note that the expected `line` isn't 100% valid ESM. It is derived
 * from the `getExports` function wherein we have recognized the true
 * line and re-mapped it to one we expect.
 *
 * @param {string} line
 * @returns {boolean}
 */
function isStarExportLine (line) {
  return /^\* from /.test(line)
}

function isBareSpecifier (specifier) {
  // Relative and absolute paths are not bare specifiers.
  if (
    specifier.startsWith('.') ||
    specifier.startsWith('/')) {
    return false
  }

  // Valid URLs are not bare specifiers. (file:, http:, node:, etc.)

  // eslint-disable-next-line no-prototype-builtins
  if (URL.hasOwnProperty('canParse')) {
    return !URL.canParse(specifier)
  }

  const stackTraceLimit = Error.stackTraceLimit
  try {
    Error.stackTraceLimit = 0
    // eslint-disable-next-line no-new
    new URL(specifier)
    return false
  } catch (err) {
    return true
  } finally {
    Error.stackTraceLimit = stackTraceLimit
  }
}

/**
 * Determines whether the input is a bare specifier, file URL or a regular expression.
 *
 * - node: prefixed URL strings are considered bare specifiers in this context.
 */
function isBareSpecifierFileUrlOrRegex (input) {
  if (input instanceof RegExp) {
    return true
  }

  // Relative and absolute paths
  if (
    input.startsWith('.') ||
    input.startsWith('/')) {
    return false
  }

  const stackTraceLimit = Error.stackTraceLimit
  try {
    Error.stackTraceLimit = 0
    // eslint-disable-next-line no-new
    const url = new URL(input)
    // We consider node: URLs bare specifiers in this context
    return url.protocol === 'file:' || url.protocol === 'node:'
  } catch (err) {
    // Anything that fails parsing is a bare specifier
    return true
  } finally {
    Error.stackTraceLimit = stackTraceLimit
  }
}

/**
 * Ensure an array only contains bare specifiers, file URLs or regular expressions.
 *
 * - We consider node: prefixed URL string as bare specifiers in this context.
 * - For node built-in modules, we add additional node: prefixed modules to the
 *   output array.
 */
function ensureArrayWithBareSpecifiersFileUrlsAndRegex (array, type) {
  if (!Array.isArray(array)) {
    return undefined
  }

  const invalid = array.filter(s => !isBareSpecifierFileUrlOrRegex(s))

  if (invalid.length) {
    throw new Error(`'${type}' option only supports bare specifiers, file URLs or regular expressions. Invalid entries: ${inspect(invalid)}`)
  }

  // Rather than evaluate whether we have a node: scoped built-in-module for
  // every call to resolve, we just add them to include/exclude now.
  for (const each of array) {
    if (typeof each === 'string' && !each.startsWith('node:') && builtinModules.includes(each)) {
      array.push(`node:${each}`)
    }
  }

  return array
}

function emitWarning (err) {
  // Unfortunately, process.emitWarning does not output the full error
  // with error.cause like console.warn does so we need to inspect it when
  // tracing warnings
  const warnMessage = TRACE_WARNINGS ? inspect(err) : err
  process.emitWarning(warnMessage)
}

/**
 * Processes a module's exports and builds a set of setter blocks.
 *
 * @param {object} params
 * @param {string} params.srcUrl The full URL to the module to process.
 * @param {object} params.context Provided by the loaders API.
 * @param {Function} params.parentGetSource Provides the source code for the parent module.
 * @param {Function} params.parentResolve Provides the resolve function for the parent module.
 * @param {boolean} [params.excludeDefault = false] Exclude the default export.
 *
 * @returns {Promise<Map<string, string>>} The shimmed setters for all the exports
 * from the module and any transitive export all modules.
 */
async function processModule ({ srcUrl, context, parentGetSource, parentResolve, excludeDefault = false }) {
  const exportNames = await getExports(srcUrl, context, parentGetSource)
  const starExports = new Set()
  const setters = new Map()

  const addSetter = (name, setter, isStarExport = false) => {
    if (setters.has(name)) {
      if (isStarExport) {
        // If there's already a matching star export, delete it
        if (starExports.has(name)) {
          setters.delete(name)
        }
        // and return so this is excluded
        return
      }

      // if we already have this export but it is from a * export, overwrite it
      if (starExports.has(name)) {
        starExports.delete(name)
        setters.set(name, setter)
      }
    } else {
      // Store export * exports so we know they can be overridden by explicit
      // named exports
      if (isStarExport) {
        starExports.add(name)
      }

      setters.set(name, setter)
    }
  }

  for (const n of exportNames) {
    if (excludeDefault) {
      const isDefault = n === 'default' ||
        (
          n === 'module.exports' &&
          context.format === 'commonjs' &&
          hasModuleExportsCJSDefault
        )

      if (isDefault) continue
    }

    if (isStarExportLine(n) === true) {
      const [, modFile] = n.split('* from ')

      // Relative paths need to be resolved relative to the parent module
      const newSpecifier = isBareSpecifier(modFile) ? modFile : new URL(modFile, srcUrl).href
      // We need to call `parentResolve` to resolve bare specifiers to a full
      // URL. We also need to call `parentResolve` for all sub-modules to get
      // the `format`. We can't rely on the parents `format` to know if this
      // sub-module is ESM or CJS!
      const result = await parentResolve(newSpecifier, { parentURL: srcUrl })

      const subSetters = await processModule({
        srcUrl: result.url,
        context: { ...context, format: result.format },
        parentGetSource,
        parentResolve,
        excludeDefault: true
      })

      for (const [name, setter] of subSetters.entries()) {
        addSetter(name, setter, true)
      }
    } else {
      const variableName = `$${n.replace(/[^a-zA-Z0-9_$]/g, '_')}`
      const objectKey = JSON.stringify(n)
      const reExportedName = n === 'default' ? n : objectKey

      // For the module.exports synthetic export (Node 23+), fall back to $default
      // when namespace['module.exports'] is not exposed by the native ESM namespace
      // (builtins don't expose it). This ensures the IITM hook proxy returns the
      // actual CJS value (e.g. EventEmitter) when an instrumentor reads
      // capturedExports['module.exports'], rather than undefined.
      const moduleExportsFallback = n === 'module.exports' ? ' ?? $default' : ''

      addSetter(n, `
      let ${variableName}
      __overridden[${objectKey}] = false
      let ${variableName}Defer = false
      try {
        ${variableName} = _[${objectKey}] = namespace[${objectKey}]${moduleExportsFallback}
      } catch (err) {
        if (!(err instanceof ReferenceError)) throw err
        ${variableName}Defer = true
      }

      if (${variableName}Defer || ${variableName} === undefined) {
        __pending.push(__makeUpdater(
          ${objectKey},
          () => namespace[${objectKey}]${moduleExportsFallback},
          (v) => { ${variableName} = _[${objectKey}] = v }
        ))
      }
      ${(n === 'module.exports' && (srcUrl.startsWith('node:') || builtinModules.includes(srcUrl))) ? '' : `export { ${variableName} as ${reExportedName} }`}
      set[${objectKey}] = (v) => {
        __overridden[${objectKey}] = true
        ${variableName} = v
        return true
      }
      get[${objectKey}] = () => ${variableName}
      `)
    }
  }

  return setters
}

function addIitm (url) {
  const urlObj = new URL(url)
  urlObj.searchParams.set('iitm', 'true')
  return urlObj.href
}

export function createHook (meta) {
  let cachedResolve
  const iitmURL = new URL('lib/register.js', meta.url).toString()
  let includeModules, excludeModules

  // Track CJS module URLs that IITM has wrapped. On Node 24+, CJS modules loaded
  // via loadCJSModule (in an ESM import chain) have their require() calls for
  // builtins routed through the ESM resolver. Without this guard, IITM would
  // intercept those require() calls and return an ESM namespace object instead
  // of the native CJS module value (e.g. EventEmitter constructor), breaking
  // patterns like `class App extends require('events') {}`.
  const cjsInIitmChain = new Set()

  async function initialize (data) {
    if (global.__import_in_the_middle_initialized__) {
      process.emitWarning("The 'import-in-the-middle' hook has already been initialized")
    }

    global.__import_in_the_middle_initialized__ = true

    if (data) {
      includeModules = ensureArrayWithBareSpecifiersFileUrlsAndRegex(data.include, 'include')
      excludeModules = ensureArrayWithBareSpecifiersFileUrlsAndRegex(data.exclude, 'exclude')

      if (data.addHookMessagePort) {
        data.addHookMessagePort.on('message', (modules) => {
          if (includeModules === undefined) {
            includeModules = []
          }

          for (const each of modules) {
            if (!each.startsWith('node:') && builtinModules.includes(each)) {
              includeModules.push(`node:${each}`)
            }

            includeModules.push(each)
          }

          data.addHookMessagePort.postMessage('ack')
        }).unref()
      }
    }
  }

  async function resolve (specifier, context, parentResolve) {
    cachedResolve = parentResolve

    // See https://github.com/nodejs/import-in-the-middle/pull/76.
    if (specifier === iitmURL) {
      return {
        url: specifier,
        shortCircuit: true
      }
    }

    const { parentURL = '' } = context
    const newSpecifier = deleteIitm(specifier)
    if (isWin && parentURL.indexOf('file:node') === 0) {
      context.parentURL = ''
    }
    const result = await parentResolve(newSpecifier, context)

    // Do not wrap the entrypoint module. Many CLIs check whether they are the
    // "main" module (e.g. require.main === module). Wrapping changes how they
    // are evaluated, and can make them exit without doing anything.
    if (parentURL === '') {
      if (!EXTENSION_RE.test(result.url) && !hasIitm(result.url)) {
        return { url: result.url, format: 'commonjs' }
      }
      return result
    }

    // For included/excluded modules, we check the specifier to match libraries
    // that are loaded with bare specifiers from node_modules.
    //
    // For non-bare specifier imports, we match to the full file URL because
    // using relative paths would be very error prone!
    let resultPath
    if (result.url.startsWith('file:')) {
      const stackTraceLimit = Error.stackTraceLimit
      Error.stackTraceLimit = 0
      try {
        resultPath = fileURLToPath(result.url)
      } catch {}
      Error.stackTraceLimit = stackTraceLimit
    }
    function match (each) {
      if (each instanceof RegExp) {
        return each.test(result.url)
      }

      return each === specifier || each === result.url || (resultPath && each === resultPath)
    }

    if (result.format && !HANDLED_FORMATS.has(result.format)) {
      return result
    }

    if (includeModules && !includeModules.some(match)) {
      return result
    }

    if (excludeModules && excludeModules.some(match)) {
      return result
    }

    if (isIitm(parentURL, meta) || (parentURL && hasIitm(parentURL))) {
      return result
    }

    // When a CJS module is loaded by an IITM shim, its require() calls for
    // builtins may be routed through the ESM resolver on Node 24+. Skip IITM
    // wrapping in that case so require() returns the native module value.
    // We also propagate the membership to the resolved child so that its own
    // transitive require() calls are likewise skipped (the entire synchronous
    // CJS require chain must remain unwrapped to avoid ERR_VM_MODULE_LINK_FAILURE).
    if (cjsInIitmChain.has(parentURL)) {
      cjsInIitmChain.add(result.url)
      return result
    }

    // We don't want to attempt to wrap native modules
    if (result.url.endsWith('.node')) {
      return result
    }

    // Node.js v21 renames importAssertions to importAttributes
    const importAttributes = context.importAttributes || context.importAssertions
    if (importAttributes && importAttributes.type === 'json') {
      return result
    }

    // If the file is referencing itself, we need to skip adding the iitm search params
    if (result.url === parentURL) {
      return {
        url: result.url,
        shortCircuit: true,
        format: result.format
      }
    }

    specifiers.set(result.url, specifier)

    return {
      url: addIitm(result.url),
      shortCircuit: true,
      format: result.format
    }
  }

  async function getSource (url, context, parentGetSource) {
    if (hasIitm(url)) {
      const realUrl = deleteIitm(url)
      const originalSpecifier = specifiers.get(realUrl)

      try {
        const setters = await processModule({
          srcUrl: realUrl,
          context,
          parentGetSource,
          parentResolve: cachedResolve
        })
        // If the module loaded successfully, we can remove the specifier to reduce memory usage early.
        specifiers.delete(realUrl)
        // Track CJS modules so their transitive require() calls bypass IITM.
        // context.format is set to 'commonjs' by getCjsExports during processModule.
        if (context.format === 'commonjs') {
          cjsInIitmChain.add(realUrl)
        }
        return {
          source: `
import { register } from '${iitmURL}'
import * as namespace from ${JSON.stringify(realUrl)}

// Mimic a Module object (https://tc39.es/ecma262/#sec-module-namespace-objects).
const _ = Object.create(null, { [Symbol.toStringTag]: { value: 'Module' } })
const set = {}
const get = {}
const __overridden = Object.create(null)
let __pending = []

function __makeUpdater (key, read, assign) {
  return () => {
    if (__overridden[key] === true) return true
    try {
      const v = read()
      if (v !== undefined) {
        assign(v)
        return true
      }
      return false
    } catch (err) {
      if (err instanceof ReferenceError) return false
      throw err
    }
  }
}

function __flushPendingOnce () {
  if (__pending.length === 0) return
  const next = []
  for (const fn of __pending) {
    // If it still throws ReferenceError, keep it for the (single) next attempt.
    if (fn() !== true) next.push(fn)
  }
  __pending = next
}

${Array.from(setters.values()).join('\n')}

if (__pending.length > 0) {
  queueMicrotask(() => {
    __flushPendingOnce()

    if (__pending.length > 0) {
      const __retryDelays = [0, 10, 50]
      const __schedulePending = (i) => {
        if (__pending.length === 0) return
        if (i >= __retryDelays.length) {
          // Give up: leave exports as-is to avoid unbounded retries.
          __pending = []
          return
        }

        const t = setTimeout(() => {
          __flushPendingOnce()
          __schedulePending(i + 1)
        }, __retryDelays[i])
        // Don't keep the process alive just for best-effort retries.
        if (t && typeof t.unref === 'function') t.unref()
      }

      __schedulePending(0)
    }
  })
}

register(${JSON.stringify(realUrl)}, _, set, get, ${JSON.stringify(originalSpecifier)})
`
        }
      } catch (cause) {
        // If the module failed loading, the specifier will not be used again, so
        // we can remove it to prevent a memory leak.
        specifiers.delete(realUrl)
        // If there are other ESM loader hooks registered as well as iitm,
        // depending on the order they are registered, source might not be
        // JavaScript.
        //
        // If we fail to parse a module for exports, we should fall back to the
        // parent loader. These modules will not be wrapped with proxies and
        // cannot be Hook'ed but at least this does not take down the entire app
        // and block iitm from being used.
        //
        // We log the error because there might be bugs in iitm and without this
        // it would be very tricky to debug
        const err = new Error(`'import-in-the-middle' failed to wrap '${realUrl}'`)
        err.cause = cause
        emitWarning(err)

        // Revert back to the non-iitm URL
        url = realUrl
      }
    }

    return parentGetSource(url, context)
  }

  async function load (url, context, parentLoad) {
    if (hasIitm(url)) {
      const result = await getSource(url, context, parentLoad)
      // If wrapping failed, `getSource()` may have fallen back to `parentLoad`,
      // which can legally return `source: null` (e.g. for non-JS formats).
      if (result && typeof result === 'object' && result.source != null) {
        return {
          source: result.source,
          shortCircuit: true,
          format: 'module'
        }
      }

      // Fall back to the parent loader with the original (non-iitm) URL.
      return parentLoad(deleteIitm(url), context)
    }

    // On Node 22+, when a CJS module is loaded through the ESM translator and
    // another loader hook provides its source (instead of leaving source null
    // for Node to read natively), require() calls inside that CJS module for
    // packages using the "module-sync" exports condition fail with
    // ERR_VM_MODULE_LINK_FAILURE. Work around this Node bug by stripping
    // hook-provided source for CJS modules in the synchronous require chain,
    // forcing Node to use its native CJS loader which handles this correctly.
    if (cjsInIitmChain.has(url)) {
      const result = await parentLoad(url, context)
      if (result.format === 'commonjs' && result.source != null) {
        return {
          format: result.format,
          source: undefined
        }
      }
      return result
    }

    return parentLoad(url, context)
  }

  return { initialize, load, resolve }
}
