/*
 * Copyright 2023 Google LLC.
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
import { NoSuchScriptException } from '../../../protocol/ErrorResponse.js';
/**
 * Container class for preload scripts.
 */
export class PreloadScriptStorage {
    /** Tracks all BiDi preload scripts.  */
    #scripts = new Set();
    /**
     * Finds all entries that match the given filter (OR logic).
     */
    find(filter) {
        if (!filter) {
            return [...this.#scripts];
        }
        return [...this.#scripts].filter((script) => {
            // Global scripts have no contexts or userContext
            if (script.contexts === undefined && script.userContexts === undefined) {
                return true;
            }
            if (filter.targetId !== undefined &&
                script.targetIds.has(filter.targetId)) {
                return true;
            }
            return false;
        });
    }
    add(preloadScript) {
        this.#scripts.add(preloadScript);
    }
    /** Deletes all BiDi preload script entries that match the given filter. */
    remove(id) {
        const script = [...this.#scripts].find((script) => script.id === id);
        if (script === undefined) {
            throw new NoSuchScriptException(`No preload script with id '${id}'`);
        }
        this.#scripts.delete(script);
    }
    /** Gets the preload script with the given ID, if any, otherwise throws. */
    getPreloadScript(id) {
        const script = [...this.#scripts].find((script) => script.id === id);
        if (script === undefined) {
            throw new NoSuchScriptException(`No preload script with id '${id}'`);
        }
        return script;
    }
    onCdpTargetCreated(targetId, userContext) {
        const scriptInUserContext = [...this.#scripts].filter((script) => {
            // Global scripts
            if (!script.userContexts && !script.contexts) {
                return true;
            }
            return script.userContexts?.includes(userContext);
        });
        for (const script of scriptInUserContext) {
            script.targetIds.add(targetId);
        }
    }
}
//# sourceMappingURL=PreloadScriptStorage.js.map