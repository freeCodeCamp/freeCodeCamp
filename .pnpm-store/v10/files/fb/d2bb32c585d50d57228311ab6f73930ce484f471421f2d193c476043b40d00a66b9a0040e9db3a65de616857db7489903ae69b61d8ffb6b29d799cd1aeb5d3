import { BunVersion } from './shared';
export { BunVersion, MINIMUM_BUN_VERSION } from './shared';

/**
 * Checks if the given module name is a native Bun module.
 * @param moduleName - The name of the module to check
 * @param bunVersion - Optional. The Bun version to check against. Defaults to the current Bun version if available, otherwise "latest".
 * @returns `true` if the module is a Bun module, `false` otherwise
 */
declare function isBunModule(moduleName: string, bunVersion?: BunVersion): boolean;
/**
 * Checks if the given module name is a Node.js module implemented in Bun.
 * @param moduleName - The name of the module to check
 * @param bunVersion - Optional. The Bun version to check against. Defaults to the current Bun version if available, otherwise "latest".
 * @returns `true` if the module is a Node.js module implemented in Bun, `false` otherwise
 */
declare function isBunImplementedNodeModule(moduleName: string, bunVersion?: BunVersion): boolean;
/**
 * Checks if the given module name is a Bun builtin (either a Bun module or a Node.js module implemented in Bun).
 * @param moduleName - The name of the module to check
 * @param bunVersion - Optional. The Bun version to check against. Defaults to the current Bun version if available, otherwise "latest".
 * @returns `true` if the module is a Bun builtin, `false` otherwise
 */
declare function isBunBuiltin(moduleName: string, bunVersion?: BunVersion): boolean;
/**
 * Gets a list of all native Bun modules.
 * @param bunVersion - Optional. The Bun version to check against. Defaults to the current Bun version if available, otherwise "latest".
 * @returns An array of module names
 */
declare function getBunModules(bunVersion?: BunVersion): string[];
/**
 * Gets a list of all Node.js modules implemented in Bun.
 * @param bunVersion - Optional. The Bun version to check against. Defaults to the current Bun version if available, otherwise "latest".
 * @returns An array of module names
 */
declare function getBunImplementedNodeModules(bunVersion?: BunVersion): string[];
/**
 * Gets a list of all Bun builtin modules (both Bun modules and Node.js modules implemented in Bun).
 * @param bunVersion - Optional. The Bun version to check against. Defaults to the current Bun version if available, otherwise "latest".
 * @returns An array of module names
 */
declare function getBunBuiltinModules(bunVersion?: BunVersion): string[];

export { getBunBuiltinModules, getBunImplementedNodeModules, getBunModules, isBunBuiltin, isBunImplementedNodeModule, isBunModule };
