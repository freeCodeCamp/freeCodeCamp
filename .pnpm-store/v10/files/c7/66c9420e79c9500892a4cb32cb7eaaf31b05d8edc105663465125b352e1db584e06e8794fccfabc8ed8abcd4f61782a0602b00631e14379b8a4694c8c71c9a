/**
 * Copyright (c) 2019 The xterm.js authors. All rights reserved.
 * @license MIT
 */
import { IBufferService, ICoreService, ICoreMouseService, IOptionsService } from 'common/services/Services';
import { ICoreMouseProtocol, ICoreMouseEvent, CoreMouseEncoding, CoreMouseEventType, CoreMouseButton, CoreMouseAction } from 'common/Types';
import { Disposable } from 'vs/base/common/lifecycle';
import { Emitter } from 'vs/base/common/event';

/**
 * Supported default protocols.
 */
const DEFAULT_PROTOCOLS: { [key: string]: ICoreMouseProtocol } = {
  /**
   * NONE
   * Events: none
   * Modifiers: none
   */
  NONE: {
    events: CoreMouseEventType.NONE,
    restrict: () => false
  },
  /**
   * X10
   * Events: mousedown
   * Modifiers: none
   */
  X10: {
    events: CoreMouseEventType.DOWN,
    restrict: (e: ICoreMouseEvent) => {
      // no wheel, no move, no up
      if (e.button === CoreMouseButton.WHEEL || e.action !== CoreMouseAction.DOWN) {
        return false;
      }
      // no modifiers
      e.ctrl = false;
      e.alt = false;
      e.shift = false;
      return true;
    }
  },
  /**
   * VT200
   * Events: mousedown / mouseup / wheel
   * Modifiers: all
   */
  VT200: {
    events: CoreMouseEventType.DOWN | CoreMouseEventType.UP | CoreMouseEventType.WHEEL,
    restrict: (e: ICoreMouseEvent) => {
      // no move
      if (e.action === CoreMouseAction.MOVE) {
        return false;
      }
      return true;
    }
  },
  /**
   * DRAG
   * Events: mousedown / mouseup / wheel / mousedrag
   * Modifiers: all
   */
  DRAG: {
    events: CoreMouseEventType.DOWN | CoreMouseEventType.UP | CoreMouseEventType.WHEEL | CoreMouseEventType.DRAG,
    restrict: (e: ICoreMouseEvent) => {
      // no move without button
      if (e.action === CoreMouseAction.MOVE && e.button === CoreMouseButton.NONE) {
        return false;
      }
      return true;
    }
  },
  /**
   * ANY
   * Events: all mouse related events
   * Modifiers: all
   */
  ANY: {
    events:
      CoreMouseEventType.DOWN | CoreMouseEventType.UP | CoreMouseEventType.WHEEL
      | CoreMouseEventType.DRAG | CoreMouseEventType.MOVE,
    restrict: (e: ICoreMouseEvent) => true
  }
};

const enum Modifiers {
  SHIFT = 4,
  ALT = 8,
  CTRL = 16
}

// helper for default encoders to generate the event code.
function eventCode(e: ICoreMouseEvent, isSGR: boolean): number {
  let code = (e.ctrl ? Modifiers.CTRL : 0) | (e.shift ? Modifiers.SHIFT : 0) | (e.alt ? Modifiers.ALT : 0);
  if (e.button === CoreMouseButton.WHEEL) {
    code |= 64;
    code |= e.action;
  } else {
    code |= e.button & 3;
    if (e.button & 4) {
      code |= 64;
    }
    if (e.button & 8) {
      code |= 128;
    }
    if (e.action === CoreMouseAction.MOVE) {
      code |= CoreMouseAction.MOVE;
    } else if (e.action === CoreMouseAction.UP && !isSGR) {
      // special case - only SGR can report button on release
      // all others have to go with NONE
      code |= CoreMouseButton.NONE;
    }
  }
  return code;
}

const S = String.fromCharCode;

/**
 * Supported default encodings.
 */
const DEFAULT_ENCODINGS: { [key: string]: CoreMouseEncoding } = {
  /**
   * DEFAULT - CSI M Pb Px Py
   * Single byte encoding for coords and event code.
   * Can encode values up to 223 (1-based).
   */
  DEFAULT: (e: ICoreMouseEvent) => {
    const params = [eventCode(e, false) + 32, e.col + 32, e.row + 32];
    // supress mouse report if we exceed addressible range
    // Note this is handled differently by emulators
    // - xterm:         sends 0;0 coords instead
    // - vte, konsole:  no report
    if (params[0] > 255 || params[1] > 255 || params[2] > 255) {
      return '';
    }
    return `\x1b[M${S(params[0])}${S(params[1])}${S(params[2])}`;
  },
  /**
   * SGR - CSI < Pb ; Px ; Py M|m
   * No encoding limitation.
   * Can report button on release and works with a well formed sequence.
   */
  SGR: (e: ICoreMouseEvent) => {
    const final = (e.action === CoreMouseAction.UP && e.button !== CoreMouseButton.WHEEL) ? 'm' : 'M';
    return `\x1b[<${eventCode(e, true)};${e.col};${e.row}${final}`;
  },
  SGR_PIXELS: (e: ICoreMouseEvent) => {
    const final = (e.action === CoreMouseAction.UP && e.button !== CoreMouseButton.WHEEL) ? 'm' : 'M';
    return `\x1b[<${eventCode(e, true)};${e.x};${e.y}${final}`;
  }
};

/**
 * CoreMouseService
 *
 * Provides mouse tracking reports with different protocols and encodings.
 *  - protocols: NONE (default), X10, VT200, DRAG, ANY
 *  - encodings: DEFAULT, SGR (UTF8, URXVT removed in #2507)
 *
 * Custom protocols/encodings can be added by `addProtocol` / `addEncoding`.
 * To activate a protocol/encoding, set `activeProtocol` / `activeEncoding`.
 * Switching a protocol will send a notification event `onProtocolChange`
 * with a list of needed events to track.
 *
 * The service handles the mouse tracking state and decides whether to send
 * a tracking report to the backend based on protocol and encoding limitations.
 * To send a mouse event call `triggerMouseEvent`.
 */
export class CoreMouseService extends Disposable implements ICoreMouseService {
  public serviceBrand: any;

  private _protocols: { [name: string]: ICoreMouseProtocol } = {};
  private _encodings: { [name: string]: CoreMouseEncoding } = {};
  private _activeProtocol: string = '';
  private _activeEncoding: string = '';
  private _lastEvent: ICoreMouseEvent | null = null;
  private _wheelPartialScroll: number = 0;

  private readonly _onProtocolChange = this._register(new Emitter<CoreMouseEventType>());
  public readonly onProtocolChange = this._onProtocolChange.event;

  constructor(
    @IBufferService private readonly _bufferService: IBufferService,
    @ICoreService private readonly _coreService: ICoreService,
    @IOptionsService private readonly _optionsService: IOptionsService
  ) {
    super();
    // register default protocols and encodings
    for (const name of Object.keys(DEFAULT_PROTOCOLS)) this.addProtocol(name, DEFAULT_PROTOCOLS[name]);
    for (const name of Object.keys(DEFAULT_ENCODINGS)) this.addEncoding(name, DEFAULT_ENCODINGS[name]);
    // call reset to set defaults
    this.reset();
  }

  public addProtocol(name: string, protocol: ICoreMouseProtocol): void {
    this._protocols[name] = protocol;
  }

  public addEncoding(name: string, encoding: CoreMouseEncoding): void {
    this._encodings[name] = encoding;
  }

  public get activeProtocol(): string {
    return this._activeProtocol;
  }

  public get areMouseEventsActive(): boolean {
    return this._protocols[this._activeProtocol].events !== 0;
  }

  public set activeProtocol(name: string) {
    if (!this._protocols[name]) {
      throw new Error(`unknown protocol "${name}"`);
    }
    this._activeProtocol = name;
    this._onProtocolChange.fire(this._protocols[name].events);
  }

  public get activeEncoding(): string {
    return this._activeEncoding;
  }

  public set activeEncoding(name: string) {
    if (!this._encodings[name]) {
      throw new Error(`unknown encoding "${name}"`);
    }
    this._activeEncoding = name;
  }

  public reset(): void {
    this.activeProtocol = 'NONE';
    this.activeEncoding = 'DEFAULT';
    this._lastEvent = null;
    this._wheelPartialScroll = 0;
  }

  /**
   * Processes a wheel event, accounting for partial scrolls for trackpad, mouse scrolls.
   * This prevents hyper-sensitive scrolling in alt buffer.
   */
  public consumeWheelEvent(ev: WheelEvent, cellHeight?: number, dpr?: number): number {
    // Do nothing if it's not a vertical scroll event
    if (ev.deltaY === 0 || ev.shiftKey) {
      return 0;
    }

    if (cellHeight === undefined || dpr === undefined) {
      return 0;
    }

    const targetWheelEventPixels = cellHeight / dpr;
    let amount = this._applyScrollModifier(ev.deltaY, ev);

    if (ev.deltaMode === WheelEvent.DOM_DELTA_PIXEL) {
      amount /= (targetWheelEventPixels + 0.0); // Prevent integer division

      const isLikelyTrackpad = Math.abs(ev.deltaY) < 50;
      if (isLikelyTrackpad) {
        amount *= 0.3;
      }

      this._wheelPartialScroll += amount;
      amount = Math.floor(Math.abs(this._wheelPartialScroll)) * (this._wheelPartialScroll > 0 ? 1 : -1);
      this._wheelPartialScroll %= 1;
    } else if (ev.deltaMode === WheelEvent.DOM_DELTA_PAGE) {
      amount *= this._bufferService.rows;
    }
    return amount;
  }

  private _applyScrollModifier(amount: number, ev: WheelEvent): number {
    // Multiply the scroll speed when the modifier key is pressed
    if (ev.altKey || ev.ctrlKey || ev.shiftKey) {
      return amount * this._optionsService.rawOptions.fastScrollSensitivity * this._optionsService.rawOptions.scrollSensitivity;
    }
    return amount * this._optionsService.rawOptions.scrollSensitivity;
  }

  /**
   * Triggers a mouse event to be sent.
   *
   * Returns true if the event passed all protocol restrictions and a report
   * was sent, otherwise false. The return value may be used to decide whether
   * the default event action in the bowser component should be omitted.
   *
   * Note: The method will change values of the given event object
   * to fullfill protocol and encoding restrictions.
   */
  public triggerMouseEvent(e: ICoreMouseEvent): boolean {
    // range check for col/row
    if (e.col < 0 || e.col >= this._bufferService.cols
      || e.row < 0 || e.row >= this._bufferService.rows) {
      return false;
    }

    // filter nonsense combinations of button + action
    if (e.button === CoreMouseButton.WHEEL && e.action === CoreMouseAction.MOVE) {
      return false;
    }
    if (e.button === CoreMouseButton.NONE && e.action !== CoreMouseAction.MOVE) {
      return false;
    }
    if (e.button !== CoreMouseButton.WHEEL && (e.action === CoreMouseAction.LEFT || e.action === CoreMouseAction.RIGHT)) {
      return false;
    }

    // report 1-based coords
    e.col++;
    e.row++;

    // debounce move events at grid or pixel level
    if (e.action === CoreMouseAction.MOVE
      && this._lastEvent
      && this._equalEvents(this._lastEvent, e, this._activeEncoding === 'SGR_PIXELS')
    ) {
      return false;
    }

    // apply protocol restrictions
    if (!this._protocols[this._activeProtocol].restrict(e)) {
      return false;
    }

    // encode report and send
    const report = this._encodings[this._activeEncoding](e);
    if (report) {
      // always send DEFAULT as binary data
      if (this._activeEncoding === 'DEFAULT') {
        this._coreService.triggerBinaryEvent(report);
      } else {
        this._coreService.triggerDataEvent(report, true);
      }
    }

    this._lastEvent = e;

    return true;
  }

  public explainEvents(events: CoreMouseEventType): { [event: string]: boolean } {
    return {
      down: !!(events & CoreMouseEventType.DOWN),
      up: !!(events & CoreMouseEventType.UP),
      drag: !!(events & CoreMouseEventType.DRAG),
      move: !!(events & CoreMouseEventType.MOVE),
      wheel: !!(events & CoreMouseEventType.WHEEL)
    };
  }

  private _equalEvents(e1: ICoreMouseEvent, e2: ICoreMouseEvent, pixels: boolean): boolean {
    if (pixels) {
      if (e1.x !== e2.x) return false;
      if (e1.y !== e2.y) return false;
    } else {
      if (e1.col !== e2.col) return false;
      if (e1.row !== e2.row) return false;
    }
    if (e1.button !== e2.button) return false;
    if (e1.action !== e2.action) return false;
    if (e1.ctrl !== e2.ctrl) return false;
    if (e1.alt !== e2.alt) return false;
    if (e1.shift !== e2.shift) return false;
    return true;
  }
}
