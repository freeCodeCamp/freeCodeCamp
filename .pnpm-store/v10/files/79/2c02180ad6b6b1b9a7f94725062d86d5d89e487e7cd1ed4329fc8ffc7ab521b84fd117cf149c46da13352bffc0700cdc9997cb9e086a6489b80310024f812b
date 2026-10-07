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
var _a;
export class NoneSource {
    type = "none" /* SourceType.None */;
}
export class KeySource {
    type = "key" /* SourceType.Key */;
    pressed = new Set();
    // This is a bitfield that matches the modifiers parameter of
    // https://chromedevtools.github.io/devtools-protocol/tot/Input/#method-dispatchKeyEvent
    #modifiers = 0;
    get modifiers() {
        return this.#modifiers;
    }
    get alt() {
        return (this.#modifiers & 1) === 1;
    }
    set alt(value) {
        this.#setModifier(value, 1);
    }
    get ctrl() {
        return (this.#modifiers & 2) === 2;
    }
    set ctrl(value) {
        this.#setModifier(value, 2);
    }
    get meta() {
        return (this.#modifiers & 4) === 4;
    }
    set meta(value) {
        this.#setModifier(value, 4);
    }
    get shift() {
        return (this.#modifiers & 8) === 8;
    }
    set shift(value) {
        this.#setModifier(value, 8);
    }
    #setModifier(value, bit) {
        if (value) {
            this.#modifiers |= bit;
        }
        else {
            this.#modifiers &= ~bit;
        }
    }
}
export class PointerSource {
    type = "pointer" /* SourceType.Pointer */;
    subtype;
    pointerId;
    pressed = new Set();
    x = 0;
    y = 0;
    radiusX;
    radiusY;
    force;
    constructor(id, subtype) {
        this.pointerId = id;
        this.subtype = subtype;
    }
    // This is a bitfield that matches the buttons parameter of
    // https://chromedevtools.github.io/devtools-protocol/tot/Input/#method-dispatchMouseEvent
    get buttons() {
        let buttons = 0;
        for (const button of this.pressed) {
            switch (button) {
                case 0:
                    buttons |= 1;
                    break;
                case 1:
                    buttons |= 4;
                    break;
                case 2:
                    buttons |= 2;
                    break;
                case 3:
                    buttons |= 8;
                    break;
                case 4:
                    buttons |= 16;
                    break;
            }
        }
        return buttons;
    }
    // --- Platform-specific code starts here ---
    // Input.dispatchMouseEvent doesn't know the concept of double click, so we
    // need to create the logic, similar to how it's done for OSes:
    // https://source.chromium.org/chromium/chromium/src/+/refs/heads/main:ui/events/event.cc;l=479
    static ClickContext = class ClickContext {
        static #DOUBLE_CLICK_TIME_MS = 500;
        static #MAX_DOUBLE_CLICK_RADIUS = 2;
        count = 0;
        #x;
        #y;
        #time;
        constructor(x, y, time) {
            this.#x = x;
            this.#y = y;
            this.#time = time;
        }
        compare(context) {
            return (
            // The click needs to be within a certain amount of ms.
            context.#time - this.#time > ClickContext.#DOUBLE_CLICK_TIME_MS ||
                // The click needs to be within a certain square radius.
                Math.abs(context.#x - this.#x) >
                    ClickContext.#MAX_DOUBLE_CLICK_RADIUS ||
                Math.abs(context.#y - this.#y) > ClickContext.#MAX_DOUBLE_CLICK_RADIUS);
        }
    };
    #clickContexts = new Map();
    setClickCount(button, context) {
        let storedContext = this.#clickContexts.get(button);
        if (!storedContext || storedContext.compare(context)) {
            storedContext = context;
        }
        ++storedContext.count;
        this.#clickContexts.set(button, storedContext);
        return storedContext.count;
    }
    getClickCount(button) {
        return this.#clickContexts.get(button)?.count ?? 0;
    }
    /**
     * Resets click count. Resets consequent click counter. Prevents grouping clicks in
     * different `performActions` calls, so that they are not grouped as double, triple etc
     * clicks. Required for https://github.com/GoogleChromeLabs/chromium-bidi/issues/3043.
     */
    resetClickCount() {
        this.#clickContexts = new Map();
    }
}
_a = PointerSource;
export class WheelSource {
    type = "wheel" /* SourceType.Wheel */;
}
//# sourceMappingURL=InputSource.js.map