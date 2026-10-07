// Unless explicitly stated otherwise all files in this repository are licensed under the Apache 2.0 License.
//
// This product includes software developed at Datadog (https://www.datadoghq.com/). Copyright 2021 Datadog, Inc.

const path = require('path')
const moduleDetailsFromPath = require('module-details-from-path')
const { fileURLToPath } = require('url')
const { MessageChannel } = require('worker_threads')

let { isBuiltin } = require('module')
if (!isBuiltin) {
  isBuiltin = () => true
}

const {
  importHooks,
  specifiers,
  toHook
} = require('./lib/register')

/**
 * Checks turbopack specifiers separately (for Next.js 16+).
 *
 * If turbopack is used, specifiers will have an additional hash appended to the end.
 * Something like "ai" might become "ai-5e7181a616786b24". This only happens in Next.js 16+.
 * Just checking if the baseDir ends with this new specifier won't match, as the baseDir still has the plain package.
 *
 * This logic isolates a new check for checking the actual name in the case turbopack is being used.
 *
 * @param specifier {string}
 * @param baseDir {string}
 */
function isTurbopackSpecifier (specifier, baseDir) {
  const usingTurbopack = process.env.TURBOPACK ?? process.argv.includes('--turbo')
  if (!usingTurbopack) return false

  const specifierWithoutTurbopackHash = specifier.slice(0, specifier.lastIndexOf('-'))
  return baseDir.endsWith(specifierWithoutTurbopackHash)
}

function addHook (hook) {
  importHooks.push(hook)
  toHook.forEach(([name, namespace, specifier]) => hook(name, namespace, specifier))
}

function removeHook (hook) {
  const index = importHooks.indexOf(hook)
  if (index > -1) {
    importHooks.splice(index, 1)
  }
}

function callHookFn (hookFn, namespace, name, baseDir) {
  const newDefault = hookFn(namespace, name, baseDir)
  if (newDefault && newDefault !== namespace) {
    // Only ESM modules that actually export `default` can have it reassigned.
    // Some hooks return a value unconditionally; avoid crashing when the module
    // has no default export (see issue #188).
    if ('default' in namespace) {
      namespace.default = newDefault
    }
  }
}

let sendModulesToLoader

/**
 * EXPERIMENTAL
 * This feature is experimental and may change in minor versions.
 * **NOTE** This feature is incompatible with the {internals: true} Hook option.
 *
 * Creates a message channel with a port that can be used to add hooks to the
 * list of exclusively included modules.
 *
 * This can be used to only wrap modules that are Hook'ed, however modules need
 * to be hooked before they are imported.
 *
 * ```ts
 * import { register } from 'module'
 * import { Hook, createAddHookMessageChannel } from 'import-in-the-middle'
 *
 * const { registerOptions, waitForAllMessagesAcknowledged } = createAddHookMessageChannel()
 *
 * register('import-in-the-middle/hook.mjs', import.meta.url, registerOptions)
 *
 * Hook(['fs'], (exported, name, baseDir) => {
 *   // Instrument the fs module
 * })
 *
 * // Ensure that the loader has acknowledged all the modules
 * // before we allow execution to continue
 * await waitForAllMessagesAcknowledged()
 * ```
 */
function createAddHookMessageChannel () {
  const { port1, port2 } = new MessageChannel()
  let pendingAckCount = 0
  let resolveFn

  sendModulesToLoader = (modules) => {
    pendingAckCount++
    port1.postMessage(modules)
  }

  port1.on('message', () => {
    pendingAckCount--

    if (resolveFn && pendingAckCount <= 0) {
      resolveFn()
    }
  }).unref()

  function waitForAllMessagesAcknowledged () {
    // This timer is to prevent the process from exiting with code 13:
    // 13: Unsettled Top-Level Await.
    const timer = setInterval(() => { }, 1000)
    const promise = new Promise((resolve) => {
      resolveFn = resolve
    }).then(() => { clearInterval(timer) })

    if (pendingAckCount === 0) {
      resolveFn()
    }

    return promise
  }

  const addHookMessagePort = port2
  const registerOptions = { data: { addHookMessagePort, include: [] }, transferList: [addHookMessagePort] }

  return { registerOptions, addHookMessagePort, waitForAllMessagesAcknowledged }
}

function Hook (modules, options, hookFn) {
  if ((this instanceof Hook) === false) return new Hook(modules, options, hookFn)
  if (typeof modules === 'function') {
    hookFn = modules
    modules = null
    options = null
  } else if (typeof options === 'function') {
    hookFn = options
    options = null
  }
  const internals = options ? options.internals === true : false

  if (sendModulesToLoader && Array.isArray(modules)) {
    sendModulesToLoader(modules)
  }

  this._iitmHook = (name, namespace, specifier) => {
    const loadUrl = name
    const isNodeUrl = loadUrl.startsWith('node:')
    let filePath, baseDir

    if (isNodeUrl) {
      // Normalize builtin module name to *not* have 'node:' prefix, unless
      // required, as it is for 'node:test' and some others.  `module.isBuiltin`
      // is available in all Node.js versions that have node:-only modules.
      const unprefixed = name.slice(5)
      if (isBuiltin(unprefixed)) {
        name = unprefixed
      }
    } else if (loadUrl.startsWith('file://')) {
      const stackTraceLimit = Error.stackTraceLimit
      Error.stackTraceLimit = 0
      try {
        filePath = fileURLToPath(name)
        name = filePath
      } catch (e) {}
      Error.stackTraceLimit = stackTraceLimit

      if (filePath) {
        const details = moduleDetailsFromPath(filePath)
        if (details) {
          name = details.name
          baseDir = details.basedir
        }
      }
    }

    if (modules) {
      for (const matchArg of modules) {
        if (filePath && matchArg === filePath) {
          // abspath match
          callHookFn(hookFn, namespace, filePath, undefined)
        } else if (matchArg === name) {
          if (!baseDir) {
            // built-in module (or unexpected non file:// name?)
            callHookFn(hookFn, namespace, name, baseDir)
          } else if (baseDir.endsWith(specifiers.get(loadUrl)) || isTurbopackSpecifier(specifiers.get(loadUrl), baseDir)) {
            // An import of the top-level module (e.g. `import 'ioredis'`).
            // Note: Slight behaviour difference from RITM. RITM uses
            // `require.resolve(name)` to see if filename is the module
            // main file, which will catch `require('ioredis/built/index.js')`.
            // The check here will not catch `import 'ioredis/built/index.js'`.
            callHookFn(hookFn, namespace, name, baseDir)
          } else if (internals) {
            const internalPath = name + path.sep + path.relative(baseDir, filePath)
            callHookFn(hookFn, namespace, internalPath, baseDir)
          }
        } else if (matchArg === specifier) {
          callHookFn(hookFn, namespace, specifier, baseDir)
        }
      }
    } else {
      callHookFn(hookFn, namespace, name, baseDir)
    }
  }

  addHook(this._iitmHook)
}

Hook.prototype.unhook = function () {
  removeHook(this._iitmHook)
}

module.exports = Hook
module.exports.Hook = Hook
module.exports.addHook = addHook
module.exports.removeHook = removeHook
module.exports.createAddHookMessageChannel = createAddHookMessageChannel
