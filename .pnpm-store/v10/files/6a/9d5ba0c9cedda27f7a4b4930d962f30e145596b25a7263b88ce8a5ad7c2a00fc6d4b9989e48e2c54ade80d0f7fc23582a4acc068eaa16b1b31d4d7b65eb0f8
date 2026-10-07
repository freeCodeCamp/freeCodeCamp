/**
 * Copyright (c) 2018 The xterm.js authors. All rights reserved.
 * @license MIT
 */

import * as Strings from 'browser/LocalizableStrings';
import { CoreBrowserTerminal as TerminalCore } from 'browser/CoreBrowserTerminal';
import { IBufferRange, ITerminal } from 'browser/Types';
import { Disposable } from 'vs/base/common/lifecycle';
import { ITerminalOptions } from 'common/Types';
import { AddonManager } from 'common/public/AddonManager';
import { BufferNamespaceApi } from 'common/public/BufferNamespaceApi';
import { ParserApi } from 'common/public/ParserApi';
import { UnicodeApi } from 'common/public/UnicodeApi';
import { IBufferNamespace as IBufferNamespaceApi, IDecoration, IDecorationOptions, IDisposable, ILinkProvider, ILocalizableStrings, IMarker, IModes, IParser, ITerminalAddon, Terminal as ITerminalApi, ITerminalInitOnlyOptions, IUnicodeHandling } from '@xterm/xterm';
import type { Event } from 'vs/base/common/event';

/**
 * The set of options that only have an effect when set in the Terminal constructor.
 */
const CONSTRUCTOR_ONLY_OPTIONS = ['cols', 'rows'];

let $value = 0;

export class Terminal extends Disposable implements ITerminalApi {
  private _core: ITerminal;
  private _addonManager: AddonManager;
  private _parser: IParser | undefined;
  private _buffer: BufferNamespaceApi | undefined;
  private _publicOptions: Required<ITerminalOptions>;

  constructor(options?: ITerminalOptions & ITerminalInitOnlyOptions) {
    super();

    this._core = this._register(new TerminalCore(options));
    this._addonManager = this._register(new AddonManager());

    this._publicOptions = { ... this._core.options };
    const getter = (propName: string): any => {
      return this._core.options[propName];
    };
    const setter = (propName: string, value: any): void => {
      this._checkReadonlyOptions(propName);
      this._core.options[propName] = value;
    };

    for (const propName in this._core.options) {
      const desc = {
        get: getter.bind(this, propName),
        set: setter.bind(this, propName)
      };
      Object.defineProperty(this._publicOptions, propName, desc);
    }
  }

  private _checkReadonlyOptions(propName: string): void {
    // Throw an error if any constructor only option is modified
    // from terminal.options
    // Modifications from anywhere else are allowed
    if (CONSTRUCTOR_ONLY_OPTIONS.includes(propName)) {
      throw new Error(`Option "${propName}" can only be set in the constructor`);
    }
  }

  private _checkProposedApi(): void {
    if (!this._core.optionsService.rawOptions.allowProposedApi) {
      throw new Error('You must set the allowProposedApi option to true to use proposed API');
    }
  }

  public get onBell(): Event<void> { return this._core.onBell; }
  public get onBinary(): Event<string> { return this._core.onBinary; }
  public get onCursorMove(): Event<void> { return this._core.onCursorMove; }
  public get onData(): Event<string> { return this._core.onData; }
  public get onKey(): Event<{ key: string, domEvent: KeyboardEvent }> { return this._core.onKey; }
  public get onLineFeed(): Event<void> { return this._core.onLineFeed; }
  public get onRender(): Event<{ start: number, end: number }> { return this._core.onRender; }
  public get onResize(): Event<{ cols: number, rows: number }> { return this._core.onResize; }
  public get onScroll(): Event<number> { return this._core.onScroll; }
  public get onSelectionChange(): Event<void> { return this._core.onSelectionChange; }
  public get onTitleChange(): Event<string> { return this._core.onTitleChange; }
  public get onWriteParsed(): Event<void> { return this._core.onWriteParsed; }

  public get element(): HTMLElement | undefined { return this._core.element; }
  public get parser(): IParser {
    if (!this._parser) {
      this._parser = new ParserApi(this._core);
    }
    return this._parser;
  }
  public get unicode(): IUnicodeHandling {
    this._checkProposedApi();
    return new UnicodeApi(this._core);
  }
  public get textarea(): HTMLTextAreaElement | undefined { return this._core.textarea; }
  public get rows(): number { return this._core.rows; }
  public get cols(): number { return this._core.cols; }
  public get buffer(): IBufferNamespaceApi {
    if (!this._buffer) {
      this._buffer = this._register(new BufferNamespaceApi(this._core));
    }
    return this._buffer;
  }
  public get markers(): ReadonlyArray<IMarker> {
    this._checkProposedApi();
    return this._core.markers;
  }
  public get modes(): IModes {
    const m = this._core.coreService.decPrivateModes;
    let mouseTrackingMode: 'none' | 'x10' | 'vt200' | 'drag' | 'any' = 'none';
    switch (this._core.coreMouseService.activeProtocol) {
      case 'X10': mouseTrackingMode = 'x10'; break;
      case 'VT200': mouseTrackingMode = 'vt200'; break;
      case 'DRAG': mouseTrackingMode = 'drag'; break;
      case 'ANY': mouseTrackingMode = 'any'; break;
    }
    return {
      applicationCursorKeysMode: m.applicationCursorKeys,
      applicationKeypadMode: m.applicationKeypad,
      bracketedPasteMode: m.bracketedPasteMode,
      insertMode: this._core.coreService.modes.insertMode,
      mouseTrackingMode: mouseTrackingMode,
      originMode: m.origin,
      reverseWraparoundMode: m.reverseWraparound,
      sendFocusMode: m.sendFocus,
      synchronizedOutputMode: m.synchronizedOutput,
      wraparoundMode: m.wraparound
    };
  }
  public get options(): Required<ITerminalOptions> {
    return this._publicOptions;
  }
  public set options(options: ITerminalOptions) {
    for (const propName in options) {
      this._publicOptions[propName] = options[propName];
    }
  }
  public blur(): void {
    this._core.blur();
  }
  public focus(): void {
    this._core.focus();
  }
  public input(data: string, wasUserInput: boolean = true): void {
    this._core.input(data, wasUserInput);
  }
  public resize(columns: number, rows: number): void {
    this._verifyIntegers(columns, rows);
    this._core.resize(columns, rows);
  }
  public open(parent: HTMLElement): void {
    this._core.open(parent);
  }
  public attachCustomKeyEventHandler(customKeyEventHandler: (event: KeyboardEvent) => boolean): void {
    this._core.attachCustomKeyEventHandler(customKeyEventHandler);
  }
  public attachCustomWheelEventHandler(customWheelEventHandler: (event: WheelEvent) => boolean): void {
    this._core.attachCustomWheelEventHandler(customWheelEventHandler);
  }
  public registerLinkProvider(linkProvider: ILinkProvider): IDisposable {
    return this._core.registerLinkProvider(linkProvider);
  }
  public registerCharacterJoiner(handler: (text: string) => [number, number][]): number {
    this._checkProposedApi();
    return this._core.registerCharacterJoiner(handler);
  }
  public deregisterCharacterJoiner(joinerId: number): void {
    this._checkProposedApi();
    this._core.deregisterCharacterJoiner(joinerId);
  }
  public registerMarker(cursorYOffset: number = 0): IMarker {
    this._verifyIntegers(cursorYOffset);
    return this._core.registerMarker(cursorYOffset);
  }
  public registerDecoration(decorationOptions: IDecorationOptions): IDecoration | undefined {
    this._checkProposedApi();
    this._verifyPositiveIntegers(decorationOptions.x ?? 0, decorationOptions.width ?? 0, decorationOptions.height ?? 0);
    return this._core.registerDecoration(decorationOptions);
  }
  public hasSelection(): boolean {
    return this._core.hasSelection();
  }
  public select(column: number, row: number, length: number): void {
    this._verifyIntegers(column, row, length);
    this._core.select(column, row, length);
  }
  public getSelection(): string {
    return this._core.getSelection();
  }
  public getSelectionPosition(): IBufferRange | undefined {
    return this._core.getSelectionPosition();
  }
  public clearSelection(): void {
    this._core.clearSelection();
  }
  public selectAll(): void {
    this._core.selectAll();
  }
  public selectLines(start: number, end: number): void {
    this._verifyIntegers(start, end);
    this._core.selectLines(start, end);
  }
  public dispose(): void {
    super.dispose();
  }
  public scrollLines(amount: number): void {
    this._verifyIntegers(amount);
    this._core.scrollLines(amount);
  }
  public scrollPages(pageCount: number): void {
    this._verifyIntegers(pageCount);
    this._core.scrollPages(pageCount);
  }
  public scrollToTop(): void {
    this._core.scrollToTop();
  }
  public scrollToBottom(): void {
    this._core.scrollToBottom();
  }
  public scrollToLine(line: number): void {
    this._verifyIntegers(line);
    this._core.scrollToLine(line);
  }
  public clear(): void {
    this._core.clear();
  }
  public write(data: string | Uint8Array, callback?: () => void): void {
    this._core.write(data, callback);
  }
  public writeln(data: string | Uint8Array, callback?: () => void): void {
    this._core.write(data);
    this._core.write('\r\n', callback);
  }
  public paste(data: string): void {
    this._core.paste(data);
  }
  public refresh(start: number, end: number): void {
    this._verifyIntegers(start, end);
    this._core.refresh(start, end);
  }
  public reset(): void {
    this._core.reset();
  }
  public clearTextureAtlas(): void {
    this._core.clearTextureAtlas();
  }
  public loadAddon(addon: ITerminalAddon): void {
    this._addonManager.loadAddon(this, addon);
  }
  public static get strings(): ILocalizableStrings {
    // A wrapper is required here because esbuild prevents setting an `export let`
    return {
      get promptLabel(): string { return Strings.promptLabel.get(); },
      set promptLabel(value: string) { Strings.promptLabel.set(value); },
      get tooMuchOutput(): string { return Strings.tooMuchOutput.get(); },
      set tooMuchOutput(value: string) { Strings.tooMuchOutput.set(value); }
    };
  }

  private _verifyIntegers(...values: number[]): void {
    for ($value of values) {
      if ($value === Infinity || isNaN($value) || $value % 1 !== 0) {
        throw new Error('This API only accepts integers');
      }
    }
  }

  private _verifyPositiveIntegers(...values: number[]): void {
    for ($value of values) {
      if ($value && ($value === Infinity || isNaN($value) || $value % 1 !== 0 || $value < 0)) {
        throw new Error('This API only accepts positive integers');
      }
    }
  }
}
