/**
 * @license
 * Copyright 2017 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */

import * as Bidi from 'webdriver-bidi-protocol';

import type {Point} from '../api/ElementHandle.js';
import {
  Keyboard,
  Mouse,
  MouseButton,
  Touchscreen,
  type TouchHandle,
  type KeyboardTypeOptions,
  type KeyDownOptions,
  type KeyPressOptions,
  type MouseClickOptions,
  type MouseMoveOptions,
  type MouseOptions,
  type MouseWheelOptions,
} from '../api/Input.js';
import {UnsupportedOperation} from '../common/Errors.js';
import {TouchError} from '../common/Errors.js';
import type {KeyInput} from '../common/USKeyboardLayout.js';

import type {BidiPage} from './Page.js';

const enum InputId {
  Mouse = '__puppeteer_mouse',
  Keyboard = '__puppeteer_keyboard',
  Wheel = '__puppeteer_wheel',
  Finger = '__puppeteer_finger',
}

enum SourceActionsType {
  None = 'none',
  Key = 'key',
  Pointer = 'pointer',
  Wheel = 'wheel',
}

enum ActionType {
  Pause = 'pause',
  KeyDown = 'keyDown',
  KeyUp = 'keyUp',
  PointerUp = 'pointerUp',
  PointerDown = 'pointerDown',
  PointerMove = 'pointerMove',
  Scroll = 'scroll',
}

const getBidiKeyValue = (key: KeyInput) => {
  switch (key) {
    case '\r':
    case '\n':
      key = 'Enter';
      break;
  }
  // Measures the number of code points rather than UTF-16 code units.
  if ([...key].length === 1) {
    return key;
  }
  switch (key) {
    case 'Cancel':
      return '\uE001';
    case 'Help':
      return '\uE002';
    case 'Backspace':
      return '\uE003';
    case 'Tab':
      return '\uE004';
    case 'Clear':
      return '\uE005';
    case 'Enter':
      return '\uE007';
    case 'Shift':
    case 'ShiftLeft':
      return '\uE008';
    case 'Control':
    case 'ControlLeft':
      return '\uE009';
    case 'Alt':
    case 'AltLeft':
      return '\uE00A';
    case 'Pause':
      return '\uE00B';
    case 'Escape':
      return '\uE00C';
    case 'PageUp':
      return '\uE00E';
    case 'PageDown':
      return '\uE00F';
    case 'End':
      return '\uE010';
    case 'Home':
      return '\uE011';
    case 'ArrowLeft':
      return '\uE012';
    case 'ArrowUp':
      return '\uE013';
    case 'ArrowRight':
      return '\uE014';
    case 'ArrowDown':
      return '\uE015';
    case 'Insert':
      return '\uE016';
    case 'Delete':
      return '\uE017';
    case 'NumpadEqual':
      return '\uE019';
    case 'Numpad0':
      return '\uE01A';
    case 'Numpad1':
      return '\uE01B';
    case 'Numpad2':
      return '\uE01C';
    case 'Numpad3':
      return '\uE01D';
    case 'Numpad4':
      return '\uE01E';
    case 'Numpad5':
      return '\uE01F';
    case 'Numpad6':
      return '\uE020';
    case 'Numpad7':
      return '\uE021';
    case 'Numpad8':
      return '\uE022';
    case 'Numpad9':
      return '\uE023';
    case 'NumpadMultiply':
      return '\uE024';
    case 'NumpadAdd':
      return '\uE025';
    case 'NumpadSubtract':
      return '\uE027';
    case 'NumpadDecimal':
      return '\uE028';
    case 'NumpadDivide':
      return '\uE029';
    case 'F1':
      return '\uE031';
    case 'F2':
      return '\uE032';
    case 'F3':
      return '\uE033';
    case 'F4':
      return '\uE034';
    case 'F5':
      return '\uE035';
    case 'F6':
      return '\uE036';
    case 'F7':
      return '\uE037';
    case 'F8':
      return '\uE038';
    case 'F9':
      return '\uE039';
    case 'F10':
      return '\uE03A';
    case 'F11':
      return '\uE03B';
    case 'F12':
      return '\uE03C';
    case 'Meta':
    case 'MetaLeft':
      return '\uE03D';
    case 'ShiftRight':
      return '\uE050';
    case 'ControlRight':
      return '\uE051';
    case 'AltRight':
      return '\uE052';
    case 'MetaRight':
      return '\uE053';
    case 'Digit0':
      return '0';
    case 'Digit1':
      return '1';
    case 'Digit2':
      return '2';
    case 'Digit3':
      return '3';
    case 'Digit4':
      return '4';
    case 'Digit5':
      return '5';
    case 'Digit6':
      return '6';
    case 'Digit7':
      return '7';
    case 'Digit8':
      return '8';
    case 'Digit9':
      return '9';
    case 'KeyA':
      return 'a';
    case 'KeyB':
      return 'b';
    case 'KeyC':
      return 'c';
    case 'KeyD':
      return 'd';
    case 'KeyE':
      return 'e';
    case 'KeyF':
      return 'f';
    case 'KeyG':
      return 'g';
    case 'KeyH':
      return 'h';
    case 'KeyI':
      return 'i';
    case 'KeyJ':
      return 'j';
    case 'KeyK':
      return 'k';
    case 'KeyL':
      return 'l';
    case 'KeyM':
      return 'm';
    case 'KeyN':
      return 'n';
    case 'KeyO':
      return 'o';
    case 'KeyP':
      return 'p';
    case 'KeyQ':
      return 'q';
    case 'KeyR':
      return 'r';
    case 'KeyS':
      return 's';
    case 'KeyT':
      return 't';
    case 'KeyU':
      return 'u';
    case 'KeyV':
      return 'v';
    case 'KeyW':
      return 'w';
    case 'KeyX':
      return 'x';
    case 'KeyY':
      return 'y';
    case 'KeyZ':
      return 'z';
    case 'Semicolon':
      return ';';
    case 'Equal':
      return '=';
    case 'Comma':
      return ',';
    case 'Minus':
      return '-';
    case 'Period':
      return '.';
    case 'Slash':
      return '/';
    case 'Backquote':
      return '`';
    case 'BracketLeft':
      return '[';
    case 'Backslash':
      return '\\';
    case 'BracketRight':
      return ']';
    case 'Quote':
      return '"';
    default:
      throw new Error(`Unknown key: "${key}"`);
  }
};

/**
 * @internal
 */
export class BidiKeyboard extends Keyboard {
  #page: BidiPage;

  constructor(page: BidiPage) {
    super();
    this.#page = page;
  }

  override async down(
    key: KeyInput,
    _options?: Readonly<KeyDownOptions>,
  ): Promise<void> {
    await this.#page.mainFrame().browsingContext.performActions([
      {
        type: SourceActionsType.Key,
        id: InputId.Keyboard,
        actions: [
          {
            type: ActionType.KeyDown,
            value: getBidiKeyValue(key),
          },
        ],
      },
    ]);
  }

  override async up(key: KeyInput): Promise<void> {
    await this.#page.mainFrame().browsingContext.performActions([
      {
        type: SourceActionsType.Key,
        id: InputId.Keyboard,
        actions: [
          {
            type: ActionType.KeyUp,
            value: getBidiKeyValue(key),
          },
        ],
      },
    ]);
  }

  override async press(
    key: KeyInput,
    options: Readonly<KeyPressOptions> = {},
  ): Promise<void> {
    const {delay = 0} = options;
    const actions: Bidi.Input.KeySourceAction[] = [
      {
        type: ActionType.KeyDown,
        value: getBidiKeyValue(key),
      },
    ];
    if (delay > 0) {
      actions.push({
        type: ActionType.Pause,
        duration: delay,
      });
    }
    actions.push({
      type: ActionType.KeyUp,
      value: getBidiKeyValue(key),
    });
    await this.#page.mainFrame().browsingContext.performActions([
      {
        type: SourceActionsType.Key,
        id: InputId.Keyboard,
        actions,
      },
    ]);
  }

  override async type(
    text: string,
    options: Readonly<KeyboardTypeOptions> = {},
  ): Promise<void> {
    const {delay = 0} = options;
    // This spread separates the characters into code points rather than UTF-16
    // code units.
    const values = ([...text] as KeyInput[]).map(getBidiKeyValue);
    const actions: Bidi.Input.KeySourceAction[] = [];
    if (delay <= 0) {
      for (const value of values) {
        actions.push(
          {
            type: ActionType.KeyDown,
            value,
          },
          {
            type: ActionType.KeyUp,
            value,
          },
        );
      }
    } else {
      for (const value of values) {
        actions.push(
          {
            type: ActionType.KeyDown,
            value,
          },
          {
            type: ActionType.Pause,
            duration: delay,
          },
          {
            type: ActionType.KeyUp,
            value,
          },
        );
      }
    }
    await this.#page.mainFrame().browsingContext.performActions([
      {
        type: SourceActionsType.Key,
        id: InputId.Keyboard,
        actions,
      },
    ]);
  }

  override async sendCharacter(char: string): Promise<void> {
    // Measures the number of code points rather than UTF-16 code units.
    if ([...char].length > 1) {
      throw new Error('Cannot send more than 1 character.');
    }
    const frame = await this.#page.focusedFrame();
    await frame.isolatedRealm().evaluate(async char => {
      document.execCommand('insertText', false, char);
    }, char);
  }
}

/**
 * @internal
 */
export interface BidiMouseClickOptions extends MouseClickOptions {
  origin?: Bidi.Input.Origin;
}

/**
 * @internal
 */
export interface BidiMouseMoveOptions extends MouseMoveOptions {
  origin?: Bidi.Input.Origin;
}

/**
 * @internal
 */
export interface BidiTouchMoveOptions {
  origin?: Bidi.Input.Origin;
}

const getBidiButton = (button: MouseButton) => {
  switch (button) {
    case MouseButton.Left:
      return 0;
    case MouseButton.Middle:
      return 1;
    case MouseButton.Right:
      return 2;
    case MouseButton.Back:
      return 3;
    case MouseButton.Forward:
      return 4;
  }
};

/**
 * @internal
 */
export class BidiMouse extends Mouse {
  #page: BidiPage;
  #lastMovePoint: Point = {x: 0, y: 0};

  constructor(page: BidiPage) {
    super();
    this.#page = page;
  }

  override async reset(): Promise<void> {
    this.#lastMovePoint = {x: 0, y: 0};
    await this.#page.mainFrame().browsingContext.releaseActions();
  }

  override async move(
    x: number,
    y: number,
    options: Readonly<BidiMouseMoveOptions> = {},
  ): Promise<void> {
    const from = this.#lastMovePoint;
    const to = {
      x: Math.round(x),
      y: Math.round(y),
    };
    const actions: Bidi.Input.PointerSourceAction[] = [];
    const steps = options.steps ?? 0;
    for (let i = 0; i < steps; ++i) {
      actions.push({
        type: ActionType.PointerMove,
        x: from.x + (to.x - from.x) * (i / steps),
        y: from.y + (to.y - from.y) * (i / steps),
        origin: options.origin,
      });
    }
    actions.push({
      type: ActionType.PointerMove,
      ...to,
      origin: options.origin,
    });
    // https://w3c.github.io/webdriver-bidi/#command-input-performActions:~:text=input.PointerMoveAction%20%3D%20%7B%0A%20%20type%3A%20%22pointerMove%22%2C%0A%20%20x%3A%20js%2Dint%2C
    this.#lastMovePoint = to;
    await this.#page.mainFrame().browsingContext.performActions([
      {
        type: SourceActionsType.Pointer,
        id: InputId.Mouse,
        actions,
      },
    ]);
  }

  override async down(options: Readonly<MouseOptions> = {}): Promise<void> {
    await this.#page.mainFrame().browsingContext.performActions([
      {
        type: SourceActionsType.Pointer,
        id: InputId.Mouse,
        actions: [
          {
            type: ActionType.PointerDown,
            button: getBidiButton(options.button ?? MouseButton.Left),
          },
        ],
      },
    ]);
  }

  override async up(options: Readonly<MouseOptions> = {}): Promise<void> {
    await this.#page.mainFrame().browsingContext.performActions([
      {
        type: SourceActionsType.Pointer,
        id: InputId.Mouse,
        actions: [
          {
            type: ActionType.PointerUp,
            button: getBidiButton(options.button ?? MouseButton.Left),
          },
        ],
      },
    ]);
  }

  override async click(
    x: number,
    y: number,
    options: Readonly<BidiMouseClickOptions> = {},
  ): Promise<void> {
    const actions: Bidi.Input.PointerSourceAction[] = [
      {
        type: ActionType.PointerMove,
        x: Math.round(x),
        y: Math.round(y),
        origin: options.origin,
      },
    ];
    const pointerDownAction = {
      type: ActionType.PointerDown,
      button: getBidiButton(options.button ?? MouseButton.Left),
    } as const;
    const pointerUpAction = {
      type: ActionType.PointerUp,
      button: pointerDownAction.button,
    } as const;
    for (let i = 1; i < (options.count ?? 1); ++i) {
      actions.push(pointerDownAction, pointerUpAction);
    }
    actions.push(pointerDownAction);
    if (options.delay) {
      actions.push({
        type: ActionType.Pause,
        duration: options.delay,
      });
    }
    actions.push(pointerUpAction);
    await this.#page.mainFrame().browsingContext.performActions([
      {
        type: SourceActionsType.Pointer,
        id: InputId.Mouse,
        actions,
      },
    ]);
  }

  override async wheel(
    options: Readonly<MouseWheelOptions> = {},
  ): Promise<void> {
    await this.#page.mainFrame().browsingContext.performActions([
      {
        type: SourceActionsType.Wheel,
        id: InputId.Wheel,
        actions: [
          {
            type: ActionType.Scroll,
            ...(this.#lastMovePoint ?? {
              x: 0,
              y: 0,
            }),
            deltaX: options.deltaX ?? 0,
            deltaY: options.deltaY ?? 0,
          },
        ],
      },
    ]);
  }

  override drag(): never {
    throw new UnsupportedOperation();
  }

  override dragOver(): never {
    throw new UnsupportedOperation();
  }

  override dragEnter(): never {
    throw new UnsupportedOperation();
  }

  override drop(): never {
    throw new UnsupportedOperation();
  }

  override dragAndDrop(): never {
    throw new UnsupportedOperation();
  }
}

/**
 * @internal
 */
class BidiTouchHandle implements TouchHandle {
  #started = false;
  #x: number;
  #y: number;
  #bidiId: string;
  #page: BidiPage;
  #touchScreen: BidiTouchscreen;
  #properties: Bidi.Input.PointerCommonProperties;

  constructor(
    page: BidiPage,
    touchScreen: BidiTouchscreen,
    id: number,
    x: number,
    y: number,
    properties: Bidi.Input.PointerCommonProperties,
  ) {
    this.#page = page;
    this.#touchScreen = touchScreen;
    this.#x = Math.round(x);
    this.#y = Math.round(y);
    this.#properties = properties;
    this.#bidiId = `${InputId.Finger}_${id}`;
  }

  async start(options: BidiTouchMoveOptions = {}): Promise<void> {
    if (this.#started) {
      throw new TouchError('Touch has already started');
    }
    await this.#page.mainFrame().browsingContext.performActions([
      {
        type: SourceActionsType.Pointer,
        id: this.#bidiId,
        parameters: {
          pointerType: Bidi.Input.PointerType.Touch,
        },
        actions: [
          {
            type: ActionType.PointerMove,
            x: this.#x,
            y: this.#y,
            origin: options.origin,
          },
          {
            ...this.#properties,
            type: ActionType.PointerDown,
            button: 0,
          },
        ],
      },
    ]);
    this.#started = true;
  }

  move(x: number, y: number): Promise<void> {
    const newX = Math.round(x);
    const newY = Math.round(y);
    return this.#page.mainFrame().browsingContext.performActions([
      {
        type: SourceActionsType.Pointer,
        id: this.#bidiId,
        parameters: {
          pointerType: Bidi.Input.PointerType.Touch,
        },
        actions: [
          {
            ...this.#properties,
            type: ActionType.PointerMove,
            x: newX,
            y: newY,
          },
        ],
      },
    ]);
  }

  async end(): Promise<void> {
    await this.#page.mainFrame().browsingContext.performActions([
      {
        type: SourceActionsType.Pointer,
        id: this.#bidiId,
        parameters: {
          pointerType: Bidi.Input.PointerType.Touch,
        },
        actions: [
          {
            type: ActionType.PointerUp,
            button: 0,
          },
        ],
      },
    ]);
    this.#touchScreen.removeHandle(this);
  }
}
/**
 * @internal
 */
export class BidiTouchscreen extends Touchscreen {
  #page: BidiPage;
  declare touches: BidiTouchHandle[];

  constructor(page: BidiPage) {
    super();
    this.#page = page;
  }

  override async touchStart(
    x: number,
    y: number,
    options: BidiTouchMoveOptions = {},
  ): Promise<TouchHandle> {
    const id = this.idGenerator();
    const properties: Bidi.Input.PointerCommonProperties = {
      width: 0.5 * 2, // 2 times default touch radius.
      height: 0.5 * 2, // 2 times default touch radius.
      pressure: 0.5,
    };
    const touch = new BidiTouchHandle(this.#page, this, id, x, y, properties);
    await touch.start(options);
    this.touches.push(touch);
    return touch;
  }
}
