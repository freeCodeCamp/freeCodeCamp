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
import type { Input } from '../../../protocol/protocol.js';
export declare const enum SourceType {
    Key = "key",
    Pointer = "pointer",
    Wheel = "wheel",
    None = "none"
}
export declare class NoneSource {
    type: SourceType.None;
}
export declare class KeySource {
    #private;
    type: SourceType.Key;
    pressed: Set<string>;
    get modifiers(): number;
    get alt(): boolean;
    set alt(value: boolean);
    get ctrl(): boolean;
    set ctrl(value: boolean);
    get meta(): boolean;
    set meta(value: boolean);
    get shift(): boolean;
    set shift(value: boolean);
}
export declare class PointerSource {
    #private;
    type: SourceType.Pointer;
    subtype: Input.PointerType;
    pointerId: number;
    pressed: Set<number>;
    x: number;
    y: number;
    radiusX?: number;
    radiusY?: number;
    force?: number;
    constructor(id: number, subtype: Input.PointerType);
    get buttons(): number;
    static ClickContext: {
        new (x: number, y: number, time: number): {
            count: number;
            "__#private@#x": number;
            "__#private@#y": number;
            "__#private@#time": number;
            compare(context: /*elided*/ any): boolean;
        };
        "__#private@#DOUBLE_CLICK_TIME_MS": number;
        "__#private@#MAX_DOUBLE_CLICK_RADIUS": number;
    };
    setClickCount(button: number, context: InstanceType<typeof PointerSource.ClickContext>): number;
    getClickCount(button: number): number;
    /**
     * Resets click count. Resets consequent click counter. Prevents grouping clicks in
     * different `performActions` calls, so that they are not grouped as double, triple etc
     * clicks. Required for https://github.com/GoogleChromeLabs/chromium-bidi/issues/3043.
     */
    resetClickCount(): void;
}
export declare class WheelSource {
    type: SourceType.Wheel;
}
export type InputSource = NoneSource | KeySource | PointerSource | WheelSource;
export type InputSourceFor<Type extends SourceType> = Type extends SourceType.Key ? KeySource : Type extends SourceType.Pointer ? PointerSource : Type extends SourceType.Wheel ? WheelSource : NoneSource;
