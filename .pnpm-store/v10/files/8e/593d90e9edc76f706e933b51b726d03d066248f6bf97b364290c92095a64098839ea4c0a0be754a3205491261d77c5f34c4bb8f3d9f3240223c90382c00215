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
import { InvalidArgumentException, UnknownErrorException, } from '../../../protocol/protocol.js';
import { Mutex } from '../../../utils/Mutex.js';
import { KeySource, NoneSource, PointerSource, WheelSource, } from './InputSource.js';
export class InputState {
    cancelList = [];
    #sources = new Map();
    #mutex = new Mutex();
    getOrCreate(id, type, subtype) {
        let source = this.#sources.get(id);
        if (!source) {
            switch (type) {
                case "none" /* SourceType.None */:
                    source = new NoneSource();
                    break;
                case "key" /* SourceType.Key */:
                    source = new KeySource();
                    break;
                case "pointer" /* SourceType.Pointer */: {
                    let pointerId = subtype === "mouse" /* Input.PointerType.Mouse */ ? 0 : 2;
                    const pointerIds = new Set();
                    for (const [, source] of this.#sources) {
                        if (source.type === "pointer" /* SourceType.Pointer */) {
                            pointerIds.add(source.pointerId);
                        }
                    }
                    while (pointerIds.has(pointerId)) {
                        ++pointerId;
                    }
                    source = new PointerSource(pointerId, subtype);
                    break;
                }
                case "wheel" /* SourceType.Wheel */:
                    source = new WheelSource();
                    break;
                default:
                    throw new InvalidArgumentException(`Expected "${"none" /* SourceType.None */}", "${"key" /* SourceType.Key */}", "${"pointer" /* SourceType.Pointer */}", or "${"wheel" /* SourceType.Wheel */}". Found unknown source type ${type}.`);
            }
            this.#sources.set(id, source);
            return source;
        }
        if (source.type !== type) {
            throw new InvalidArgumentException(`Input source type of ${id} is ${source.type}, but received ${type}.`);
        }
        return source;
    }
    get(id) {
        const source = this.#sources.get(id);
        if (!source) {
            throw new UnknownErrorException(`Internal error.`);
        }
        return source;
    }
    getGlobalKeyState() {
        const state = new KeySource();
        for (const [, source] of this.#sources) {
            if (source.type !== "key" /* SourceType.Key */) {
                continue;
            }
            for (const pressed of source.pressed) {
                state.pressed.add(pressed);
            }
            state.alt ||= source.alt;
            state.ctrl ||= source.ctrl;
            state.meta ||= source.meta;
            state.shift ||= source.shift;
        }
        return state;
    }
    get queue() {
        return this.#mutex;
    }
}
//# sourceMappingURL=InputState.js.map