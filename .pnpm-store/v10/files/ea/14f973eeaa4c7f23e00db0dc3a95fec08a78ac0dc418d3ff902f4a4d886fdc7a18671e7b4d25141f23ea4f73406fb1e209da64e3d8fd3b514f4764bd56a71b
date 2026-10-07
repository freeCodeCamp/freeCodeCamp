/**
 * @license
 * Copyright 2017 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
import { Keyboard, Mouse, MouseButton, Touchscreen, } from '../api/Input.js';
import { TouchError } from '../common/Errors.js';
import { _keyDefinitions, } from '../common/USKeyboardLayout.js';
import { assert } from '../util/assert.js';
/**
 * @internal
 */
export class CdpKeyboard extends Keyboard {
    #client;
    #pressedKeys = new Set();
    _modifiers = 0;
    constructor(client) {
        super();
        this.#client = client;
    }
    updateClient(client) {
        this.#client = client;
    }
    async down(key, options = {
        text: undefined,
        commands: [],
    }) {
        const description = this.#keyDescriptionForString(key);
        const autoRepeat = this.#pressedKeys.has(description.code);
        this.#pressedKeys.add(description.code);
        this._modifiers |= this.#modifierBit(description.key);
        const text = options.text === undefined ? description.text : options.text;
        await this.#client.send('Input.dispatchKeyEvent', {
            type: text ? 'keyDown' : 'rawKeyDown',
            modifiers: this._modifiers,
            windowsVirtualKeyCode: description.keyCode,
            code: description.code,
            key: description.key,
            text: text,
            unmodifiedText: text,
            autoRepeat,
            location: description.location,
            isKeypad: description.location === 3,
            commands: options.commands,
        });
    }
    #modifierBit(key) {
        if (key === 'Alt') {
            return 1;
        }
        if (key === 'Control') {
            return 2;
        }
        if (key === 'Meta') {
            return 4;
        }
        if (key === 'Shift') {
            return 8;
        }
        return 0;
    }
    #keyDescriptionForString(keyString) {
        const shift = this._modifiers & 8;
        const description = {
            key: '',
            keyCode: 0,
            code: '',
            text: '',
            location: 0,
        };
        const definition = _keyDefinitions[keyString];
        assert(definition, `Unknown key: "${keyString}"`);
        if (definition.key) {
            description.key = definition.key;
        }
        if (shift && definition.shiftKey) {
            description.key = definition.shiftKey;
        }
        if (definition.keyCode) {
            description.keyCode = definition.keyCode;
        }
        if (shift && definition.shiftKeyCode) {
            description.keyCode = definition.shiftKeyCode;
        }
        if (definition.code) {
            description.code = definition.code;
        }
        if (definition.location) {
            description.location = definition.location;
        }
        if (description.key.length === 1) {
            description.text = description.key;
        }
        if (definition.text) {
            description.text = definition.text;
        }
        if (shift && definition.shiftText) {
            description.text = definition.shiftText;
        }
        // if any modifiers besides shift are pressed, no text should be sent
        if (this._modifiers & ~8) {
            description.text = '';
        }
        return description;
    }
    async up(key) {
        const description = this.#keyDescriptionForString(key);
        this._modifiers &= ~this.#modifierBit(description.key);
        this.#pressedKeys.delete(description.code);
        await this.#client.send('Input.dispatchKeyEvent', {
            type: 'keyUp',
            modifiers: this._modifiers,
            key: description.key,
            windowsVirtualKeyCode: description.keyCode,
            code: description.code,
            location: description.location,
        });
    }
    async sendCharacter(char) {
        await this.#client.send('Input.insertText', { text: char });
    }
    charIsKey(char) {
        return !!_keyDefinitions[char];
    }
    async type(text, options = {}) {
        const delay = options.delay || undefined;
        for (const char of text) {
            if (this.charIsKey(char)) {
                await this.press(char, { delay });
            }
            else {
                if (delay) {
                    await new Promise(f => {
                        return setTimeout(f, delay);
                    });
                }
                await this.sendCharacter(char);
            }
        }
    }
    async press(key, options = {}) {
        const { delay = null } = options;
        await this.down(key, options);
        if (delay) {
            await new Promise(f => {
                return setTimeout(f, options.delay);
            });
        }
        await this.up(key);
    }
}
const getFlag = (button) => {
    switch (button) {
        case MouseButton.Left:
            return 1 /* MouseButtonFlag.Left */;
        case MouseButton.Right:
            return 2 /* MouseButtonFlag.Right */;
        case MouseButton.Middle:
            return 4 /* MouseButtonFlag.Middle */;
        case MouseButton.Back:
            return 8 /* MouseButtonFlag.Back */;
        case MouseButton.Forward:
            return 16 /* MouseButtonFlag.Forward */;
    }
};
/**
 * This should match
 * https://source.chromium.org/chromium/chromium/src/+/refs/heads/main:content/browser/renderer_host/input/web_input_event_builders_mac.mm;drc=a61b95c63b0b75c1cfe872d9c8cdf927c226046e;bpv=1;bpt=1;l=221.
 */
const getButtonFromPressedButtons = (buttons) => {
    if (buttons & 1 /* MouseButtonFlag.Left */) {
        return MouseButton.Left;
    }
    else if (buttons & 2 /* MouseButtonFlag.Right */) {
        return MouseButton.Right;
    }
    else if (buttons & 4 /* MouseButtonFlag.Middle */) {
        return MouseButton.Middle;
    }
    else if (buttons & 8 /* MouseButtonFlag.Back */) {
        return MouseButton.Back;
    }
    else if (buttons & 16 /* MouseButtonFlag.Forward */) {
        return MouseButton.Forward;
    }
    return 'none';
};
/**
 * @internal
 */
export class CdpMouse extends Mouse {
    #client;
    #keyboard;
    constructor(client, keyboard) {
        super();
        this.#client = client;
        this.#keyboard = keyboard;
    }
    updateClient(client) {
        this.#client = client;
    }
    #_state = {
        position: { x: 0, y: 0 },
        buttons: 0 /* MouseButtonFlag.None */,
    };
    get #state() {
        return Object.assign({ ...this.#_state }, ...this.#transactions);
    }
    // Transactions can run in parallel, so we store each of thme in this array.
    #transactions = [];
    #createTransaction() {
        const transaction = {};
        this.#transactions.push(transaction);
        const popTransaction = () => {
            this.#transactions.splice(this.#transactions.indexOf(transaction), 1);
        };
        return {
            update: (updates) => {
                Object.assign(transaction, updates);
            },
            commit: () => {
                this.#_state = { ...this.#_state, ...transaction };
                popTransaction();
            },
            rollback: popTransaction,
        };
    }
    /**
     * This is a shortcut for a typical update, commit/rollback lifecycle based on
     * the error of the action.
     */
    async #withTransaction(action) {
        const { update, commit, rollback } = this.#createTransaction();
        try {
            await action(update);
            commit();
        }
        catch (error) {
            rollback();
            throw error;
        }
    }
    async reset() {
        const actions = [];
        for (const [flag, button] of [
            [1 /* MouseButtonFlag.Left */, MouseButton.Left],
            [4 /* MouseButtonFlag.Middle */, MouseButton.Middle],
            [2 /* MouseButtonFlag.Right */, MouseButton.Right],
            [16 /* MouseButtonFlag.Forward */, MouseButton.Forward],
            [8 /* MouseButtonFlag.Back */, MouseButton.Back],
        ]) {
            if (this.#state.buttons & flag) {
                actions.push(this.up({ button: button }));
            }
        }
        if (this.#state.position.x !== 0 || this.#state.position.y !== 0) {
            actions.push(this.move(0, 0));
        }
        await Promise.all(actions);
    }
    async move(x, y, options = {}) {
        const { steps = 1 } = options;
        const from = this.#state.position;
        const to = { x, y };
        for (let i = 1; i <= steps; i++) {
            await this.#withTransaction(updateState => {
                updateState({
                    position: {
                        x: from.x + (to.x - from.x) * (i / steps),
                        y: from.y + (to.y - from.y) * (i / steps),
                    },
                });
                const { buttons, position } = this.#state;
                return this.#client.send('Input.dispatchMouseEvent', {
                    type: 'mouseMoved',
                    modifiers: this.#keyboard._modifiers,
                    buttons,
                    button: getButtonFromPressedButtons(buttons),
                    ...position,
                });
            });
        }
    }
    async down(options = {}) {
        const { button = MouseButton.Left, clickCount = 1 } = options;
        const flag = getFlag(button);
        if (!flag) {
            throw new Error(`Unsupported mouse button: ${button}`);
        }
        if (this.#state.buttons & flag) {
            throw new Error(`'${button}' is already pressed.`);
        }
        await this.#withTransaction(updateState => {
            updateState({
                buttons: this.#state.buttons | flag,
            });
            const { buttons, position } = this.#state;
            return this.#client.send('Input.dispatchMouseEvent', {
                type: 'mousePressed',
                modifiers: this.#keyboard._modifiers,
                clickCount,
                buttons,
                button,
                ...position,
            });
        });
    }
    async up(options = {}) {
        const { button = MouseButton.Left, clickCount = 1 } = options;
        const flag = getFlag(button);
        if (!flag) {
            throw new Error(`Unsupported mouse button: ${button}`);
        }
        if (!(this.#state.buttons & flag)) {
            throw new Error(`'${button}' is not pressed.`);
        }
        await this.#withTransaction(updateState => {
            updateState({
                buttons: this.#state.buttons & ~flag,
            });
            const { buttons, position } = this.#state;
            return this.#client.send('Input.dispatchMouseEvent', {
                type: 'mouseReleased',
                modifiers: this.#keyboard._modifiers,
                clickCount,
                buttons,
                button,
                ...position,
            });
        });
    }
    async click(x, y, options = {}) {
        const { delay, count = 1 } = options;
        if (count < 1) {
            throw new Error('Click must occur a positive number of times.');
        }
        const actions = [this.move(x, y)];
        for (let i = 1; i < count; ++i) {
            actions.push(this.down({ ...options, clickCount: i }), this.up({ ...options, clickCount: i }));
        }
        actions.push(this.down({ ...options, clickCount: count }));
        if (typeof delay === 'number') {
            await Promise.all(actions);
            actions.length = 0;
            await new Promise(resolve => {
                setTimeout(resolve, delay);
            });
        }
        actions.push(this.up({ ...options, clickCount: count }));
        await Promise.all(actions);
    }
    async wheel(options = {}) {
        const { deltaX = 0, deltaY = 0 } = options;
        const { position, buttons } = this.#state;
        await this.#client.send('Input.dispatchMouseEvent', {
            type: 'mouseWheel',
            pointerType: 'mouse',
            modifiers: this.#keyboard._modifiers,
            deltaY,
            deltaX,
            buttons,
            ...position,
        });
    }
    async drag(start, target) {
        const promise = new Promise(resolve => {
            this.#client.once('Input.dragIntercepted', event => {
                return resolve(event.data);
            });
        });
        await this.move(start.x, start.y);
        await this.down();
        await this.move(target.x, target.y);
        return await promise;
    }
    async dragEnter(target, data) {
        await this.#client.send('Input.dispatchDragEvent', {
            type: 'dragEnter',
            x: target.x,
            y: target.y,
            modifiers: this.#keyboard._modifiers,
            data,
        });
    }
    async dragOver(target, data) {
        await this.#client.send('Input.dispatchDragEvent', {
            type: 'dragOver',
            x: target.x,
            y: target.y,
            modifiers: this.#keyboard._modifiers,
            data,
        });
    }
    async drop(target, data) {
        await this.#client.send('Input.dispatchDragEvent', {
            type: 'drop',
            x: target.x,
            y: target.y,
            modifiers: this.#keyboard._modifiers,
            data,
        });
    }
    async dragAndDrop(start, target, options = {}) {
        const { delay = null } = options;
        const data = await this.drag(start, target);
        await this.dragEnter(target, data);
        await this.dragOver(target, data);
        if (delay) {
            await new Promise(resolve => {
                return setTimeout(resolve, delay);
            });
        }
        await this.drop(target, data);
        await this.up();
    }
}
/**
 * @internal
 */
export class CdpTouchHandle {
    #started = false;
    #touchScreen;
    #touchPoint;
    #client;
    #keyboard;
    constructor(client, touchScreen, keyboard, touchPoint) {
        this.#client = client;
        this.#touchScreen = touchScreen;
        this.#keyboard = keyboard;
        this.#touchPoint = touchPoint;
    }
    updateClient(client) {
        this.#client = client;
    }
    async start() {
        if (this.#started) {
            throw new TouchError('Touch has already started');
        }
        await this.#client.send('Input.dispatchTouchEvent', {
            type: 'touchStart',
            touchPoints: [this.#touchPoint],
            modifiers: this.#keyboard._modifiers,
        });
        this.#started = true;
    }
    move(x, y) {
        this.#touchPoint.x = Math.round(x);
        this.#touchPoint.y = Math.round(y);
        return this.#client.send('Input.dispatchTouchEvent', {
            type: 'touchMove',
            touchPoints: [this.#touchPoint],
            modifiers: this.#keyboard._modifiers,
        });
    }
    async end() {
        await this.#client.send('Input.dispatchTouchEvent', {
            type: 'touchEnd',
            touchPoints: [this.#touchPoint],
            modifiers: this.#keyboard._modifiers,
        });
        this.#touchScreen.removeHandle(this);
    }
}
/**
 * @internal
 */
export class CdpTouchscreen extends Touchscreen {
    #client;
    #keyboard;
    constructor(client, keyboard) {
        super();
        this.#client = client;
        this.#keyboard = keyboard;
    }
    updateClient(client) {
        this.#client = client;
        this.touches.forEach(t => {
            t.updateClient(client);
        });
    }
    async touchStart(x, y) {
        const id = this.idGenerator();
        const touchPoint = {
            x: Math.round(x),
            y: Math.round(y),
            radiusX: 0.5,
            radiusY: 0.5,
            force: 0.5,
            id,
        };
        const touch = new CdpTouchHandle(this.#client, this, this.#keyboard, touchPoint);
        await touch.start();
        this.touches.push(touch);
        return touch;
    }
}
//# sourceMappingURL=Input.js.map