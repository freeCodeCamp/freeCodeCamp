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
import { Input } from '../../../protocol/protocol.js';
import { Mutex } from '../../../utils/Mutex.js';
import type { ActionOption } from './ActionOption.js';
import { KeySource, PointerSource, SourceType, type InputSource, type InputSourceFor } from './InputSource.js';
export declare class InputState {
    #private;
    cancelList: ActionOption[];
    getOrCreate(id: string, type: SourceType.Pointer, subtype: Input.PointerType): PointerSource;
    getOrCreate<Type extends SourceType>(id: string, type: Type): InputSourceFor<Type>;
    get(id: string): InputSource;
    getGlobalKeyState(): KeySource;
    get queue(): Mutex;
}
