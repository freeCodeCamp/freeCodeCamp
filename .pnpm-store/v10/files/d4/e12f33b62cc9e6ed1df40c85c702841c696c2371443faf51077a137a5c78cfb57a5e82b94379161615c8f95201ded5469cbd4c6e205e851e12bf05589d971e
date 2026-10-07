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
import { ChromiumBidi, InvalidArgumentException, } from '../../../protocol/protocol.js';
/**
 * Returns true if the given event is a CDP event.
 * @see https://chromedevtools.github.io/devtools-protocol/
 */
export function isCdpEvent(name) {
    return (name.split('.').at(0)?.startsWith(ChromiumBidi.BiDiModule.Cdp) ?? false);
}
/**
 * Asserts that the given event is known to BiDi or BiDi+, or throws otherwise.
 */
export function assertSupportedEvent(name) {
    if (!ChromiumBidi.EVENT_NAMES.has(name) && !isCdpEvent(name)) {
        throw new InvalidArgumentException(`Unknown event: ${name}`);
    }
}
//# sourceMappingURL=events.js.map