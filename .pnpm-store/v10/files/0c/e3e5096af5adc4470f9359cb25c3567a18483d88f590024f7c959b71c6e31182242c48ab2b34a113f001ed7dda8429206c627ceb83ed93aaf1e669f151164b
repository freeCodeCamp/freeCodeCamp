import { d as UserConfig, f as UserConfigExport, i as InlineConfig, o as ResolvedConfig, p as UserConfigFn } from "./types-BZNNnDKc.mjs";

//#region src/config/options.d.ts
/**
* Resolve user config into resolved configs
*
* **Internal API, not for public use**
* @private
*/
declare function resolveUserConfig(userConfig: UserConfig, inlineConfig: InlineConfig, configDeps: Set<string>): Promise<ResolvedConfig[]>;
declare function mergeConfig(defaults: UserConfig, ...overrides: UserConfig[]): UserConfig;
declare function mergeConfig(defaults: InlineConfig, ...overrides: InlineConfig[]): InlineConfig;
//#endregion
//#region src/config.d.ts
/**
* Defines the configuration for tsdown.
*/
declare function defineConfig(options: UserConfig): UserConfig;
declare function defineConfig(options: UserConfig[]): UserConfig[];
declare function defineConfig(options: UserConfigFn): UserConfigFn;
declare function defineConfig(options: UserConfigExport): UserConfigExport;
//#endregion
export { mergeConfig as n, resolveUserConfig as r, defineConfig as t };