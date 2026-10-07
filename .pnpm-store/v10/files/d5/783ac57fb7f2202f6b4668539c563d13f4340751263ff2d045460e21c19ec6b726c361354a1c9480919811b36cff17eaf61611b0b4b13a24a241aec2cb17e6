/**
 * Copyright (c) 2014-2020 The xterm.js authors. All rights reserved.
 * Copyright (c) 2012-2013, Christopher Jeffrey (MIT License)
 * @license MIT
 *
 * Originally forked from (with the author's permission):
 *   Fabrice Bellard's javascript vt100 for jslinux:
 *   http://bellard.org/jslinux/
 *   Copyright (c) 2011 Fabrice Bellard
 *   The original design remains. The terminal itself
 *   has been extended to include xterm CSI codes, among
 *   other features.
 *
 * Terminal Emulation References:
 *   http://vt100.net/
 *   http://invisible-island.net/xterm/ctlseqs/ctlseqs.txt
 *   http://invisible-island.net/xterm/ctlseqs/ctlseqs.html
 *   http://invisible-island.net/vttest/
 *   http://www.inwap.com/pdp10/ansicode.txt
 *   http://linux.die.net/man/4/console_codes
 *   http://linux.die.net/man/7/urxvt
 */

import { IInstantiationService, IOptionsService, IBufferService, ILogService, ICharsetService, ICoreService, ICoreMouseService, IUnicodeService, LogLevelEnum, ITerminalOptions, IOscLinkService } from 'common/services/Services';
import { InstantiationService } from 'common/services/InstantiationService';
import { LogService } from 'common/services/LogService';
import { BufferService, MINIMUM_COLS, MINIMUM_ROWS } from 'common/services/BufferService';
import { OptionsService } from 'common/services/OptionsService';
import { IDisposable, IAttributeData, ICoreTerminal, IScrollEvent } from 'common/Types';
import { CoreService } from 'common/services/CoreService';
import { CoreMouseService } from 'common/services/CoreMouseService';
import { UnicodeService } from 'common/services/UnicodeService';
import { CharsetService } from 'common/services/CharsetService';
import { updateWindowsModeWrappedState } from 'common/WindowsMode';
import { IFunctionIdentifier, IParams } from 'common/parser/Types';
import { IBufferSet } from 'common/buffer/Types';
import { InputHandler } from 'common/InputHandler';
import { WriteBuffer } from 'common/input/WriteBuffer';
import { OscLinkService } from 'common/services/OscLinkService';
import { Emitter, Event } from 'vs/base/common/event';
import { Disposable, MutableDisposable, toDisposable } from 'vs/base/common/lifecycle';

// Only trigger this warning a single time per session
let hasWriteSyncWarnHappened = false;

export abstract class CoreTerminal extends Disposable implements ICoreTerminal {
  protected readonly _instantiationService: IInstantiationService;
  protected readonly _bufferService: IBufferService;
  protected readonly _logService: ILogService;
  protected readonly _charsetService: ICharsetService;
  protected readonly _oscLinkService: IOscLinkService;

  public readonly coreMouseService: ICoreMouseService;
  public readonly coreService: ICoreService;
  public readonly unicodeService: IUnicodeService;
  public readonly optionsService: IOptionsService;

  protected _inputHandler: InputHandler;
  private _writeBuffer: WriteBuffer;
  private _windowsWrappingHeuristics = this._register(new MutableDisposable());

  private readonly _onBinary = this._register(new Emitter<string>());
  public readonly onBinary = this._onBinary.event;
  private readonly _onData = this._register(new Emitter<string>());
  public readonly onData = this._onData.event;
  protected _onLineFeed = this._register(new Emitter<void>());
  public readonly onLineFeed = this._onLineFeed.event;
  private readonly _onResize = this._register(new Emitter<{ cols: number, rows: number }>());
  public readonly onResize = this._onResize.event;
  protected readonly _onWriteParsed = this._register(new Emitter<void>());
  public readonly onWriteParsed = this._onWriteParsed.event;

  /**
   * Internally we track the source of the scroll but this is meaningless outside the library so
   * it's filtered out.
   */
  protected _onScrollApi?: Emitter<number>;
  protected _onScroll = this._register(new Emitter<IScrollEvent>());
  public get onScroll(): Event<number> {
    if (!this._onScrollApi) {
      this._onScrollApi = this._register(new Emitter<number>());
      this._onScroll.event(ev => {
        this._onScrollApi?.fire(ev.position);
      });
    }
    return this._onScrollApi.event;
  }

  public get cols(): number { return this._bufferService.cols; }
  public get rows(): number { return this._bufferService.rows; }
  public get buffers(): IBufferSet { return this._bufferService.buffers; }
  public get options(): Required<ITerminalOptions> { return this.optionsService.options; }
  public set options(options: ITerminalOptions) {
    for (const key in options) {
      this.optionsService.options[key] = options[key];
    }
  }

  constructor(
    options: Partial<ITerminalOptions>
  ) {
    super();

    // Setup and initialize services
    this._instantiationService = new InstantiationService();
    this.optionsService = this._register(new OptionsService(options));
    this._instantiationService.setService(IOptionsService, this.optionsService);
    this._bufferService = this._register(this._instantiationService.createInstance(BufferService));
    this._instantiationService.setService(IBufferService, this._bufferService);
    this._logService = this._register(this._instantiationService.createInstance(LogService));
    this._instantiationService.setService(ILogService, this._logService);
    this.coreService = this._register(this._instantiationService.createInstance(CoreService));
    this._instantiationService.setService(ICoreService, this.coreService);
    this.coreMouseService = this._register(this._instantiationService.createInstance(CoreMouseService));
    this._instantiationService.setService(ICoreMouseService, this.coreMouseService);
    this.unicodeService = this._register(this._instantiationService.createInstance(UnicodeService));
    this._instantiationService.setService(IUnicodeService, this.unicodeService);
    this._charsetService = this._instantiationService.createInstance(CharsetService);
    this._instantiationService.setService(ICharsetService, this._charsetService);
    this._oscLinkService = this._instantiationService.createInstance(OscLinkService);
    this._instantiationService.setService(IOscLinkService, this._oscLinkService);


    // Register input handler and handle/forward events
    this._inputHandler = this._register(new InputHandler(this._bufferService, this._charsetService, this.coreService, this._logService, this.optionsService, this._oscLinkService, this.coreMouseService, this.unicodeService));
    this._register(Event.forward(this._inputHandler.onLineFeed, this._onLineFeed));
    this._register(this._inputHandler);

    // Setup listeners
    this._register(Event.forward(this._bufferService.onResize, this._onResize));
    this._register(Event.forward(this.coreService.onData, this._onData));
    this._register(Event.forward(this.coreService.onBinary, this._onBinary));
    this._register(this.coreService.onRequestScrollToBottom(() => this.scrollToBottom(true)));
    this._register(this.coreService.onUserInput(() =>  this._writeBuffer.handleUserInput()));
    this._register(this.optionsService.onMultipleOptionChange(['windowsMode', 'windowsPty'], () => this._handleWindowsPtyOptionChange()));
    this._register(this._bufferService.onScroll(() => {
      this._onScroll.fire({ position: this._bufferService.buffer.ydisp });
      this._inputHandler.markRangeDirty(this._bufferService.buffer.scrollTop, this._bufferService.buffer.scrollBottom);
    }));
    // Setup WriteBuffer
    this._writeBuffer = this._register(new WriteBuffer((data, promiseResult) => this._inputHandler.parse(data, promiseResult)));
    this._register(Event.forward(this._writeBuffer.onWriteParsed, this._onWriteParsed));
  }

  public write(data: string | Uint8Array, callback?: () => void): void {
    this._writeBuffer.write(data, callback);
  }

  /**
   * Write data to terminal synchonously.
   *
   * This method is unreliable with async parser handlers, thus should not
   * be used anymore. If you need blocking semantics on data input consider
   * `write` with a callback instead.
   *
   * @deprecated Unreliable, will be removed soon.
   */
  public writeSync(data: string | Uint8Array, maxSubsequentCalls?: number): void {
    if (this._logService.logLevel <= LogLevelEnum.WARN && !hasWriteSyncWarnHappened) {
      this._logService.warn('writeSync is unreliable and will be removed soon.');
      hasWriteSyncWarnHappened = true;
    }
    this._writeBuffer.writeSync(data, maxSubsequentCalls);
  }

  public input(data: string, wasUserInput: boolean = true): void {
    this.coreService.triggerDataEvent(data, wasUserInput);
  }

  public resize(x: number, y: number): void {
    if (isNaN(x) || isNaN(y)) {
      return;
    }

    x = Math.max(x, MINIMUM_COLS);
    y = Math.max(y, MINIMUM_ROWS);

    this._bufferService.resize(x, y);
  }

  /**
   * Scroll the terminal down 1 row, creating a blank line.
   * @param eraseAttr The attribute data to use the for blank line.
   * @param isWrapped Whether the new line is wrapped from the previous line.
   */
  public scroll(eraseAttr: IAttributeData, isWrapped: boolean = false): void {
    this._bufferService.scroll(eraseAttr, isWrapped);
  }

  /**
   * Scroll the display of the terminal
   * @param disp The number of lines to scroll down (negative scroll up).
   * @param suppressScrollEvent Don't emit the scroll event as scrollLines. This is used to avoid
   * unwanted events being handled by the viewport when the event was triggered from the viewport
   * originally.
   */
  public scrollLines(disp: number, suppressScrollEvent?: boolean): void {
    this._bufferService.scrollLines(disp, suppressScrollEvent);
  }

  public scrollPages(pageCount: number): void {
    this.scrollLines(pageCount * (this.rows - 1));
  }

  public scrollToTop(): void {
    this.scrollLines(-this._bufferService.buffer.ydisp);
  }

  public scrollToBottom(disableSmoothScroll?: boolean): void {
    this.scrollLines(this._bufferService.buffer.ybase - this._bufferService.buffer.ydisp);
  }

  public scrollToLine(line: number): void {
    const scrollAmount = line - this._bufferService.buffer.ydisp;
    if (scrollAmount !== 0) {
      this.scrollLines(scrollAmount);
    }
  }

  /** Add handler for ESC escape sequence. See xterm.d.ts for details. */
  public registerEscHandler(id: IFunctionIdentifier, callback: () => boolean | Promise<boolean>): IDisposable {
    return this._inputHandler.registerEscHandler(id, callback);
  }

  /** Add handler for DCS escape sequence. See xterm.d.ts for details. */
  public registerDcsHandler(id: IFunctionIdentifier, callback: (data: string, param: IParams) => boolean | Promise<boolean>): IDisposable {
    return this._inputHandler.registerDcsHandler(id, callback);
  }

  /** Add handler for CSI escape sequence. See xterm.d.ts for details. */
  public registerCsiHandler(id: IFunctionIdentifier, callback: (params: IParams) => boolean | Promise<boolean>): IDisposable {
    return this._inputHandler.registerCsiHandler(id, callback);
  }

  /** Add handler for OSC escape sequence. See xterm.d.ts for details. */
  public registerOscHandler(ident: number, callback: (data: string) => boolean | Promise<boolean>): IDisposable {
    return this._inputHandler.registerOscHandler(ident, callback);
  }

  protected _setup(): void {
    this._handleWindowsPtyOptionChange();
  }

  public reset(): void {
    this._inputHandler.reset();
    this._bufferService.reset();
    this._charsetService.reset();
    this.coreService.reset();
    this.coreMouseService.reset();
  }


  private _handleWindowsPtyOptionChange(): void {
    let value = false;
    const windowsPty = this.optionsService.rawOptions.windowsPty;
    if (windowsPty && windowsPty.buildNumber !== undefined && windowsPty.buildNumber !== undefined) {
      value = !!(windowsPty.backend === 'conpty' && windowsPty.buildNumber < 21376);
    } else if (this.optionsService.rawOptions.windowsMode) {
      value = true;
    }
    if (value) {
      this._enableWindowsWrappingHeuristics();
    } else {
      this._windowsWrappingHeuristics.clear();
    }
  }

  protected _enableWindowsWrappingHeuristics(): void {
    if (!this._windowsWrappingHeuristics.value) {
      const disposables: IDisposable[] = [];
      disposables.push(this.onLineFeed(updateWindowsModeWrappedState.bind(null, this._bufferService)));
      disposables.push(this.registerCsiHandler({ final: 'H' }, () => {
        updateWindowsModeWrappedState(this._bufferService);
        return false;
      }));
      this._windowsWrappingHeuristics.value = toDisposable(() => {
        for (const d of disposables) {
          d.dispose();
        }
      });
    }
  }
}
