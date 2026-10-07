/*
 * Copyright 2025 Google LLC.
 * Copyright (c) Microsoft Corporation.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
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
export class ContextConfigStorage {
    #global = new ContextConfig();
    #userContextConfigs = new Map();
    #browsingContextConfigs = new Map();
    /**
     * Updates the global configuration. Properties with `undefined` values in the
     * provided `config` are ignored.
     */
    updateGlobalConfig(config) {
        this.#global = ContextConfig.merge(this.#global, config);
    }
    /**
     * Updates the configuration for a specific browsing context. Properties with
     * `undefined` values in the provided `config` are ignored.
     */
    updateBrowsingContextConfig(browsingContextId, config) {
        this.#browsingContextConfigs.set(browsingContextId, ContextConfig.merge(this.#browsingContextConfigs.get(browsingContextId), config));
    }
    /**
     * Updates the configuration for a specific user context. Properties with
     * `undefined` values in the provided `config` are ignored.
     */
    updateUserContextConfig(userContext, config) {
        this.#userContextConfigs.set(userContext, ContextConfig.merge(this.#userContextConfigs.get(userContext), config));
    }
    /**
     * Returns the current global configuration.
     */
    getGlobalConfig() {
        return this.#global;
    }
    /**
     * Extra headers is a special case. The headers from the different levels have to be
     * merged instead of being overridden.
     */
    #getExtraHeaders(topLevelBrowsingContextId, userContext) {
        const globalHeaders = this.#global.extraHeaders ?? {};
        const userContextHeaders = this.#userContextConfigs.get(userContext)?.extraHeaders ?? {};
        const browsingContextHeaders = topLevelBrowsingContextId === undefined
            ? {}
            : (this.#browsingContextConfigs.get(topLevelBrowsingContextId)
                ?.extraHeaders ?? {});
        return { ...globalHeaders, ...userContextHeaders, ...browsingContextHeaders };
    }
    /**
     * Calculates the active configuration by merging global, user context, and
     * browsing context settings.
     */
    getActiveConfig(topLevelBrowsingContextId, userContext) {
        let result = ContextConfig.merge(this.#global, this.#userContextConfigs.get(userContext));
        if (topLevelBrowsingContextId !== undefined) {
            result = ContextConfig.merge(result, this.#browsingContextConfigs.get(topLevelBrowsingContextId));
        }
        // Extra headers is a special case which have to be treated in a special way.
        const extraHeaders = this.#getExtraHeaders(topLevelBrowsingContextId, userContext);
        result.extraHeaders =
            Object.keys(extraHeaders).length > 0 ? extraHeaders : undefined;
        return result;
    }
}
//# sourceMappingURL=ContextConfigStorage.js.map