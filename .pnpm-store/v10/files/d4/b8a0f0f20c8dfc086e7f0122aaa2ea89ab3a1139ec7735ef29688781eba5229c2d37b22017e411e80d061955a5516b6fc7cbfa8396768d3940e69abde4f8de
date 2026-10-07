import { ContextConfig } from './ContextConfig.js';
/**
 * Manages context-specific configurations. This class allows setting
 * configurations at three levels: global, user context, and browsing context.
 *
 * When `getActiveConfig` is called, it merges the configurations in a specific
 * order of precedence: `global -> user context -> browsing context`. For each
 * configuration property, the value from the highest-precedence level that has a
 * non-`undefined` value is used.
 *
 * The `update` methods (`updateGlobalConfig`, `updateUserContextConfig`,
 * `updateBrowsingContextConfig`) merge the provided configuration with the
 * existing one at the corresponding level. Properties with `undefined` values in
 * the provided configuration are ignored, preserving the existing value.
 */
export declare class ContextConfigStorage {
    #private;
    /**
     * Updates the global configuration. Properties with `undefined` values in the
     * provided `config` are ignored.
     */
    updateGlobalConfig(config: ContextConfig): void;
    /**
     * Updates the configuration for a specific browsing context. Properties with
     * `undefined` values in the provided `config` are ignored.
     */
    updateBrowsingContextConfig(browsingContextId: string, config: ContextConfig): void;
    /**
     * Updates the configuration for a specific user context. Properties with
     * `undefined` values in the provided `config` are ignored.
     */
    updateUserContextConfig(userContext: string, config: ContextConfig): void;
    /**
     * Returns the current global configuration.
     */
    getGlobalConfig(): ContextConfig;
    /**
     * Calculates the active configuration by merging global, user context, and
     * browsing context settings.
     */
    getActiveConfig(topLevelBrowsingContextId: string | undefined, userContext: string): ContextConfig;
}
