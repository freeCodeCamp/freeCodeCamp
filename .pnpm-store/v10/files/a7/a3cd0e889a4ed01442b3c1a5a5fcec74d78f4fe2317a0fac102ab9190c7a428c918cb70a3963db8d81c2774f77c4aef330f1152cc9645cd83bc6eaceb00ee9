// Unless explicitly stated otherwise all files in this repository are licensed under the Apache 2.0 License.
//
// This product includes software developed at Datadog (https://www.datadoghq.com/). Copyright 2021 Datadog, Inc.

/**
 * Property bag representing a module's exports, including the `default` if
 * present.
 */
export type Namespace = { [key: string]: any }

/**
 * A hook function to be run against loaded modules.
 * Not to be confused with `HookFunction`, used by the lower-level API.
 * @param {exported} { [string]: any } An object representing the exported
 * items of a module.
 * @param {name} string The name of the module. If it is (or is part of) a
 * package in a node_modules directory, this will be the path of the file
 * starting from the package name.
 * @param {baseDir} string The absolute path of the module, if not provided in
 * `name`.
 * @return any A value that can will be assigned to `exports.default`. This is
 * equivalent to doing that assignment in the body of this function.
 */
export type HookFn = (exported: Namespace, name: string, baseDir: string|void) => any

export type Options = {
  internals?: boolean
}

export declare class Hook {
  /**
   * Creates a hook to be run on any already loaded modules and any that will
   * be loaded in the future. It will be run once per loaded module. If
   * statically imported, any variables bound directly to exported items will
   * be re-bound if those items are re-assigned in the hook function.
   * @param {Array<string>} [modules] A list of modules to run this hook on. If
   * omitted, it will run on every import everywhere.
   * @param {Options} [options] An options object. If omitted, the default is
   * `{ internals: false }`. If internals is true, then the hook will operate
   * on internal modules of packages in node_modules. Otherwise it will not,
   * unless they are mentioned specifically in the modules array.
   * @param {HookFunction} hookFn The function to be run on each module.
   */
  constructor (modules: Array<string>, options: Options, hookFn: HookFn)
  constructor (modules: Array<string>, hookFn: HookFn)
  constructor (hookFn: HookFn)

  /**
   * Disables this hook. It will no longer be run against any subsequently
   * loaded modules.
   */
  unhook(): void
}

export default Hook

/**
 * A hook function to be run against loaded modules. To be used with the
 * lower-level APIs `addHook` and `removeHook`.
 * @param {url} string The absolute path of the module, as a `file:` URL string.
 * @param {exported} { [string]: any } An object representing the exported
 * items of a module.
 */
export type HookFunction = (url: string, exported: Namespace) => void

/**
 * Adds a hook to be run on any already loaded modules and any that will be
 * loaded in the future.  It will be run once per loaded module. If statically
 * imported, any variables bound directly to exported items will be re-bound if
 * those items are re-assigned in the hook.
 *
 * This is the lower-level API for hook creation. It will be run on every
 * single imported module, rather than with any filtering.
 * @param {HookFunction} hookFn The function to be run on each module.
 */
export declare function addHook(hookFn: HookFunction): void

/**
 * Removes a hook that has been previously added with `addHook`. It will no
 * longer be run against any subsequently loaded modules.
 *
 * This is the lower-level API for hook removal, and cannot be used with the
 * `Hook` class.
 * @param {HookFunction} hookFn The function to be removed.
 */
export declare function removeHook(hookFn: HookFunction): void

type CreateAddHookMessageChannelReturn<Data> = {
  addHookMessagePort: MessagePort,
  waitForAllMessagesAcknowledged: () => Promise<void>
  registerOptions: { data?: Data; transferList?: any[]; }
}

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
export declare function createAddHookMessageChannel<Data = any>(): CreateAddHookMessageChannelReturn<Data>;
