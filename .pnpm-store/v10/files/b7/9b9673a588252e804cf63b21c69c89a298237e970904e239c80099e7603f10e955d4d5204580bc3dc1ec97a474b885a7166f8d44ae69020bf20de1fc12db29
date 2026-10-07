/**
 * Copyright (c) 2019 The xterm.js authors. All rights reserved.
 * @license MIT
 */

import { Disposable, toDisposable } from 'vs/base/common/lifecycle';
import { isMac } from 'common/Platform';
import { CursorStyle, IDisposable } from 'common/Types';
import { FontWeight, IOptionsService, ITerminalOptions } from 'common/services/Services';
import { Emitter } from 'vs/base/common/event';

export const DEFAULT_OPTIONS: Readonly<Required<ITerminalOptions>> = {
  cols: 80,
  rows: 24,
  cursorBlink: false,
  cursorStyle: 'block',
  cursorWidth: 1,
  cursorInactiveStyle: 'outline',
  customGlyphs: true,
  drawBoldTextInBrightColors: true,
  documentOverride: null,
  fastScrollModifier: 'alt',
  fastScrollSensitivity: 5,
  fontFamily: 'monospace',
  fontSize: 15,
  fontWeight: 'normal',
  fontWeightBold: 'bold',
  ignoreBracketedPasteMode: false,
  lineHeight: 1.0,
  letterSpacing: 0,
  linkHandler: null,
  logLevel: 'info',
  logger: null,
  scrollback: 1000,
  scrollOnEraseInDisplay: false,
  scrollOnUserInput: true,
  scrollSensitivity: 1,
  screenReaderMode: false,
  smoothScrollDuration: 0,
  macOptionIsMeta: false,
  macOptionClickForcesSelection: false,
  minimumContrastRatio: 1,
  disableStdin: false,
  allowProposedApi: false,
  allowTransparency: false,
  tabStopWidth: 8,
  theme: {},
  reflowCursorLine: false,
  rescaleOverlappingGlyphs: false,
  rightClickSelectsWord: isMac,
  windowOptions: {},
  windowsMode: false,
  windowsPty: {},
  wordSeparator: ' ()[]{}\',"`',
  altClickMovesCursor: true,
  convertEol: false,
  termName: 'xterm',
  cancelEvents: false,
  overviewRuler: {}
};

const FONT_WEIGHT_OPTIONS: Extract<FontWeight, string>[] = ['normal', 'bold', '100', '200', '300', '400', '500', '600', '700', '800', '900'];

export class OptionsService extends Disposable implements IOptionsService {
  public serviceBrand: any;

  public readonly rawOptions: Required<ITerminalOptions>;
  public options: Required<ITerminalOptions>;

  private readonly _onOptionChange = this._register(new Emitter<keyof ITerminalOptions>());
  public readonly onOptionChange = this._onOptionChange.event;

  constructor(options: Partial<ITerminalOptions>) {
    super();
    // set the default value of each option
    const defaultOptions = { ...DEFAULT_OPTIONS };
    for (const key in options) {
      if (key in defaultOptions) {
        try {
          const newValue = options[key];
          defaultOptions[key] = this._sanitizeAndValidateOption(key, newValue);
        } catch (e) {
          console.error(e);
        }
      }
    }

    // set up getters and setters for each option
    this.rawOptions = defaultOptions;
    this.options = { ... defaultOptions };
    this._setupOptions();

    // Clear out options that could link outside xterm.js as they could easily cause an embedder
    // memory leak
    this._register(toDisposable(() => {
      this.rawOptions.linkHandler = null;
      this.rawOptions.documentOverride = null;
    }));
  }

  // eslint-disable-next-line @typescript-eslint/naming-convention
  public onSpecificOptionChange<T extends keyof ITerminalOptions>(key: T, listener: (value: ITerminalOptions[T]) => any): IDisposable {
    return this.onOptionChange(eventKey => {
      if (eventKey === key) {
        listener(this.rawOptions[key]);
      }
    });
  }

  // eslint-disable-next-line @typescript-eslint/naming-convention
  public onMultipleOptionChange(keys: (keyof ITerminalOptions)[], listener: () => any): IDisposable {
    return this.onOptionChange(eventKey => {
      if (keys.indexOf(eventKey) !== -1) {
        listener();
      }
    });
  }

  private _setupOptions(): void {
    const getter = (propName: string): any => {
      if (!(propName in DEFAULT_OPTIONS)) {
        throw new Error(`No option with key "${propName}"`);
      }
      return this.rawOptions[propName];
    };

    const setter = (propName: string, value: any): void => {
      if (!(propName in DEFAULT_OPTIONS)) {
        throw new Error(`No option with key "${propName}"`);
      }

      value = this._sanitizeAndValidateOption(propName, value);
      // Don't fire an option change event if they didn't change
      if (this.rawOptions[propName] !== value) {
        this.rawOptions[propName] = value;
        this._onOptionChange.fire(propName);
      }
    };

    for (const propName in this.rawOptions) {
      const desc = {
        get: getter.bind(this, propName),
        set: setter.bind(this, propName)
      };
      Object.defineProperty(this.options, propName, desc);
    }
  }

  private _sanitizeAndValidateOption(key: string, value: any): any {
    switch (key) {
      case 'cursorStyle':
        if (!value) {
          value = DEFAULT_OPTIONS[key];
        }
        if (!isCursorStyle(value)) {
          throw new Error(`"${value}" is not a valid value for ${key}`);
        }
        break;
      case 'wordSeparator':
        if (!value) {
          value = DEFAULT_OPTIONS[key];
        }
        break;
      case 'fontWeight':
      case 'fontWeightBold':
        if (typeof value === 'number' && 1 <= value && value <= 1000) {
          // already valid numeric value
          break;
        }
        value = FONT_WEIGHT_OPTIONS.includes(value) ? value : DEFAULT_OPTIONS[key];
        break;
      case 'cursorWidth':
        value = Math.floor(value);
        // Fall through for bounds check
      case 'lineHeight':
      case 'tabStopWidth':
        if (value < 1) {
          throw new Error(`${key} cannot be less than 1, value: ${value}`);
        }
        break;
      case 'minimumContrastRatio':
        value = Math.max(1, Math.min(21, Math.round(value * 10) / 10));
        break;
      case 'scrollback':
        value = Math.min(value, 4294967295);
        if (value < 0) {
          throw new Error(`${key} cannot be less than 0, value: ${value}`);
        }
        break;
      case 'fastScrollSensitivity':
      case 'scrollSensitivity':
        if (value <= 0) {
          throw new Error(`${key} cannot be less than or equal to 0, value: ${value}`);
        }
        break;
      case 'rows':
      case 'cols':
        if (!value && value !== 0) {
          throw new Error(`${key} must be numeric, value: ${value}`);
        }
        break;
      case 'windowsPty':
        value = value ?? {};
        break;
    }
    return value;
  }
}

function isCursorStyle(value: unknown): value is CursorStyle {
  return value === 'block' || value === 'underline' || value === 'bar';
}
