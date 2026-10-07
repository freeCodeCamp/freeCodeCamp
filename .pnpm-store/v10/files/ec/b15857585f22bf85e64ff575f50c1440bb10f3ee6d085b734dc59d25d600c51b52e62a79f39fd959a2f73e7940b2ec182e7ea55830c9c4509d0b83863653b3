/**
 * Copyright (c) 2019 The xterm.js authors. All rights reserved.
 * @license MIT
 */

import { ICoreBrowserService } from './Services';
import { Emitter, Event } from 'vs/base/common/event';
import { addDisposableListener } from 'vs/base/browser/dom';
import { Disposable, MutableDisposable, toDisposable } from 'vs/base/common/lifecycle';

export class CoreBrowserService extends Disposable implements ICoreBrowserService {
  public serviceBrand: undefined;

  private _isFocused = false;
  private _cachedIsFocused: boolean | undefined = undefined;
  private _screenDprMonitor = this._register(new ScreenDprMonitor(this._window));

  private readonly _onDprChange = this._register(new Emitter<number>());
  public readonly onDprChange = this._onDprChange.event;
  private readonly _onWindowChange = this._register(new Emitter<Window & typeof globalThis>());
  public readonly onWindowChange = this._onWindowChange.event;

  constructor(
    private _textarea: HTMLTextAreaElement,
    private _window: Window & typeof globalThis,
    public readonly mainDocument: Document
  ) {
    super();

    // Monitor device pixel ratio
    this._register(this.onWindowChange(w => this._screenDprMonitor.setWindow(w)));
    this._register(Event.forward(this._screenDprMonitor.onDprChange, this._onDprChange));

    this._register(addDisposableListener(this._textarea, 'focus', () => this._isFocused = true));
    this._register(addDisposableListener(this._textarea, 'blur', () => this._isFocused = false));
  }

  public get window(): Window & typeof globalThis {
    return this._window;
  }

  public set window(value: Window & typeof globalThis) {
    if (this._window !== value) {
      this._window = value;
      this._onWindowChange.fire(this._window);
    }
  }

  public get dpr(): number {
    return this.window.devicePixelRatio;
  }

  public get isFocused(): boolean {
    if (this._cachedIsFocused === undefined) {
      this._cachedIsFocused = this._isFocused && this._textarea.ownerDocument.hasFocus();
      queueMicrotask(() => this._cachedIsFocused = undefined);
    }
    return this._cachedIsFocused;
  }
}


/**
 * The screen device pixel ratio monitor allows listening for when the
 * window.devicePixelRatio value changes. This is done not with polling but with
 * the use of window.matchMedia to watch media queries. When the event fires,
 * the listener will be reattached using a different media query to ensure that
 * any further changes will _register.
 *
 * The listener should fire on both window zoom changes and switching to a
 * monitor with a different DPI.
 */
class ScreenDprMonitor extends Disposable {
  private _currentDevicePixelRatio: number;
  private _outerListener: ((this: MediaQueryList, ev: MediaQueryListEvent) => any) | undefined;
  private _resolutionMediaMatchList: MediaQueryList | undefined;
  private _windowResizeListener = this._register(new MutableDisposable());

  private readonly _onDprChange = this._register(new Emitter<number>());
  public readonly onDprChange = this._onDprChange.event;

  constructor(private _parentWindow: Window) {
    super();

    // Initialize listener and dpr value
    this._outerListener = () => this._setDprAndFireIfDiffers();
    this._currentDevicePixelRatio = this._parentWindow.devicePixelRatio;
    this._updateDpr();

    // Monitor active window resize
    this._setWindowResizeListener();

    // Setup additional disposables
    this._register(toDisposable(() => this.clearListener()));
  }


  public setWindow(parentWindow: Window): void {
    this._parentWindow = parentWindow;
    this._setWindowResizeListener();
    this._setDprAndFireIfDiffers();
  }

  private _setWindowResizeListener(): void {
    this._windowResizeListener.value = addDisposableListener(this._parentWindow, 'resize', () => this._setDprAndFireIfDiffers());
  }

  private _setDprAndFireIfDiffers(): void {
    if (this._parentWindow.devicePixelRatio !== this._currentDevicePixelRatio) {
      this._onDprChange.fire(this._parentWindow.devicePixelRatio);
    }
    this._updateDpr();
  }

  private _updateDpr(): void {
    if (!this._outerListener) {
      return;
    }

    // Clear listeners for old DPR
    this._resolutionMediaMatchList?.removeListener(this._outerListener);

    // Add listeners for new DPR
    this._currentDevicePixelRatio = this._parentWindow.devicePixelRatio;
    this._resolutionMediaMatchList = this._parentWindow.matchMedia(`screen and (resolution: ${this._parentWindow.devicePixelRatio}dppx)`);
    this._resolutionMediaMatchList.addListener(this._outerListener);
  }

  public clearListener(): void {
    if (!this._resolutionMediaMatchList || !this._outerListener) {
      return;
    }
    this._resolutionMediaMatchList.removeListener(this._outerListener);
    this._resolutionMediaMatchList = undefined;
    this._outerListener = undefined;
  }
}
