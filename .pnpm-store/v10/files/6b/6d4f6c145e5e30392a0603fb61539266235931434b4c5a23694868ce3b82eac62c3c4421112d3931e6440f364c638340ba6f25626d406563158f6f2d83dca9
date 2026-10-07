/**
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
/**
 * A subclass of Map whose functionality is almost the same as its parent
 * except for the fact that DefaultMap never returns undefined. It provides a
 * default value for keys that do not exist.
 */
export class DefaultMap extends Map {
    /** The default value to return whenever a key is not present in the map. */
    #getDefaultValue;
    constructor(getDefaultValue, entries) {
        super(entries);
        this.#getDefaultValue = getDefaultValue;
    }
    get(key) {
        if (!this.has(key)) {
            this.set(key, this.#getDefaultValue(key));
        }
        return super.get(key);
    }
}
//# sourceMappingURL=DefaultMap.js.map