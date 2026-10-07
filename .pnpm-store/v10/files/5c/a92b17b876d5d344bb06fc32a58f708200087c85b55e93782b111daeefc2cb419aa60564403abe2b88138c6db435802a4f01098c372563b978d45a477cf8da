/**
 * Copyright (c) 2014 The xterm.js authors. All rights reserved.
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

import { IDecoration, IDecorationOptions, IDisposable, ILinkProvider, IMarker } from '@xterm/xterm';
import { copyHandler, handlePasteEvent, moveTextAreaUnderMouseCursor, paste, rightClickHandler } from 'browser/Clipboard';
import * as Strings from 'browser/LocalizableStrings';
import { OscLinkProvider } from 'browser/OscLinkProvider';
import { CharacterJoinerHandler, CustomKeyEventHandler, CustomWheelEventHandler, IBrowser, IBufferRange, ICompositionHelper, ILinkifier2, ITerminal } from 'browser/Types';
import { Viewport } from 'browser/Viewport';
import { BufferDecorationRenderer } from 'browser/decorations/BufferDecorationRenderer';
import { OverviewRulerRenderer } from 'browser/decorations/OverviewRulerRenderer';
import { CompositionHelper } from 'browser/input/CompositionHelper';
import { DomRenderer } from 'browser/renderer/dom/DomRenderer';
import { IRenderer } from 'browser/renderer/shared/Types';
import { CharSizeService } from 'browser/services/CharSizeService';
import { CharacterJoinerService } from 'browser/services/CharacterJoinerService';
import { CoreBrowserService } from 'browser/services/CoreBrowserService';
import { LinkProviderService } from 'browser/services/LinkProviderService';
import { MouseService } from 'browser/services/MouseService';
import { RenderService } from 'browser/services/RenderService';
import { SelectionService } from 'browser/services/SelectionService';
import { ICharSizeService, ICharacterJoinerService, ICoreBrowserService, ILinkProviderService, IMouseService, IRenderService, ISelectionService, IThemeService } from 'browser/services/Services';
import { ThemeService } from 'browser/services/ThemeService';
import { channels, color } from 'common/Color';
import { CoreTerminal } from 'common/CoreTerminal';
import * as Browser from 'common/Platform';
import { ColorRequestType, CoreMouseAction, CoreMouseButton, CoreMouseEventType, IColorEvent, ITerminalOptions, KeyboardResultType, SpecialColorIndex } from 'common/Types';
import { DEFAULT_ATTR_DATA } from 'common/buffer/BufferLine';
import { IBuffer } from 'common/buffer/Types';
import { C0, C1_ESCAPED } from 'common/data/EscapeSequences';
import { evaluateKeyboardEvent } from 'common/input/Keyboard';
import { toRgbString } from 'common/input/XParseColor';
import { DecorationService } from 'common/services/DecorationService';
import { IDecorationService } from 'common/services/Services';
import { WindowsOptionsReportType } from '../common/InputHandler';
import { AccessibilityManager } from './AccessibilityManager';
import { Linkifier } from './Linkifier';
import { Emitter, Event } from 'vs/base/common/event';
import { addDisposableListener } from 'vs/base/browser/dom';
import { MutableDisposable, toDisposable } from 'vs/base/common/lifecycle';

export class CoreBrowserTerminal extends CoreTerminal implements ITerminal {
  public textarea: HTMLTextAreaElement | undefined;
  public element: HTMLElement | undefined;
  public screenElement: HTMLElement | undefined;

  private _document: Document | undefined;
  private _viewportElement: HTMLElement | undefined;
  private _helperContainer: HTMLElement | undefined;
  private _compositionView: HTMLElement | undefined;

  private readonly _linkifier: MutableDisposable<ILinkifier2> = this._register(new MutableDisposable());
  public get linkifier(): ILinkifier2 | undefined { return this._linkifier.value; }
  private _overviewRulerRenderer: OverviewRulerRenderer | undefined;
  private _viewport: Viewport | undefined;

  public browser: IBrowser = Browser as any;

  private _customKeyEventHandler: CustomKeyEventHandler | undefined;
  private _customWheelEventHandler: CustomWheelEventHandler | undefined;

  // Browser services
  private _decorationService: DecorationService;
  private _linkProviderService: ILinkProviderService;

  // Optional browser services
  private _charSizeService: ICharSizeService | undefined;
  private _coreBrowserService: ICoreBrowserService | undefined;
  private _mouseService: IMouseService | undefined;
  private _renderService: IRenderService | undefined;
  private _themeService: IThemeService | undefined;
  private _characterJoinerService: ICharacterJoinerService | undefined;
  private _selectionService: ISelectionService | undefined;

  /**
   * Records whether the keydown event has already been handled and triggered a data event, if so
   * the keypress event should not trigger a data event but should still print to the textarea so
   * screen readers will announce it.
   */
  private _keyDownHandled: boolean = false;

  /**
   * Records whether a keydown event has occured since the last keyup event, i.e. whether a key
   * is currently "pressed".
   */
  private _keyDownSeen: boolean = false;

  /**
   * Records whether the keypress event has already been handled and triggered a data event, if so
   * the input event should not trigger a data event but should still print to the textarea so
   * screen readers will announce it.
   */
  private _keyPressHandled: boolean = false;

  /**
   * Records whether there has been a keydown event for a dead key without a corresponding keydown
   * event for the composed/alternative character. If we cancel the keydown event for the dead key,
   * no events will be emitted for the final character.
   */
  private _unprocessedDeadKey: boolean = false;

  private _compositionHelper: ICompositionHelper | undefined;
  private _accessibilityManager: MutableDisposable<AccessibilityManager> = this._register(new MutableDisposable());

  private readonly _onCursorMove = this._register(new Emitter<void>());
  public readonly onCursorMove = this._onCursorMove.event;
  private readonly _onKey = this._register(new Emitter<{ key: string, domEvent: KeyboardEvent }>());
  public readonly onKey = this._onKey.event;
  private readonly _onRender = this._register(new Emitter<{ start: number, end: number }>());
  public readonly onRender = this._onRender.event;
  private readonly _onSelectionChange = this._register(new Emitter<void>());
  public readonly onSelectionChange = this._onSelectionChange.event;
  private readonly _onTitleChange = this._register(new Emitter<string>());
  public readonly onTitleChange = this._onTitleChange.event;
  private readonly _onBell = this._register(new Emitter<void>());
  public readonly onBell = this._onBell.event;

  private _onFocus = this._register(new Emitter<void>());
  public get onFocus(): Event<void> { return this._onFocus.event; }
  private _onBlur = this._register(new Emitter<void>());
  public get onBlur(): Event<void> { return this._onBlur.event; }
  private _onA11yCharEmitter = this._register(new Emitter<string>());
  public get onA11yChar(): Event<string> { return this._onA11yCharEmitter.event; }
  private _onA11yTabEmitter = this._register(new Emitter<number>());
  public get onA11yTab(): Event<number> { return this._onA11yTabEmitter.event; }
  private _onWillOpen = this._register(new Emitter<HTMLElement>());
  public get onWillOpen(): Event<HTMLElement> { return this._onWillOpen.event; }

  constructor(
    options: Partial<ITerminalOptions> = {}
  ) {
    super(options);

    this._setup();

    this._decorationService = this._instantiationService.createInstance(DecorationService);
    this._instantiationService.setService(IDecorationService, this._decorationService);
    this._linkProviderService = this._instantiationService.createInstance(LinkProviderService);
    this._instantiationService.setService(ILinkProviderService, this._linkProviderService);
    this._linkProviderService.registerLinkProvider(this._instantiationService.createInstance(OscLinkProvider));

    // Setup InputHandler listeners
    this._register(this._inputHandler.onRequestBell(() => this._onBell.fire()));
    this._register(this._inputHandler.onRequestRefreshRows((e) => this.refresh(e?.start ?? 0, e?.end ?? (this.rows - 1))));
    this._register(this._inputHandler.onRequestSendFocus(() => this._reportFocus()));
    this._register(this._inputHandler.onRequestReset(() => this.reset()));
    this._register(this._inputHandler.onRequestWindowsOptionsReport(type => this._reportWindowsOptions(type)));
    this._register(this._inputHandler.onColor((event) => this._handleColorEvent(event)));
    this._register(Event.forward(this._inputHandler.onCursorMove, this._onCursorMove));
    this._register(Event.forward(this._inputHandler.onTitleChange, this._onTitleChange));
    this._register(Event.forward(this._inputHandler.onA11yChar, this._onA11yCharEmitter));
    this._register(Event.forward(this._inputHandler.onA11yTab, this._onA11yTabEmitter));

    // Setup listeners
    this._register(this._bufferService.onResize(e => this._afterResize(e.cols, e.rows)));

    this._register(toDisposable(() => {
      this._customKeyEventHandler = undefined;
      this.element?.parentNode?.removeChild(this.element);
    }));
  }

  /**
   * Handle color event from inputhandler for OSC 4|104 | 10|110 | 11|111 | 12|112.
   * An event from OSC 4|104 may contain multiple set or report requests, and multiple
   * or none restore requests (resetting all),
   * while an event from OSC 10|110 | 11|111 | 12|112 always contains a single request.
   */
  private _handleColorEvent(event: IColorEvent): void {
    if (!this._themeService) return;
    for (const req of event) {
      let acc: 'foreground' | 'background' | 'cursor' | 'ansi';
      let ident = '';
      switch (req.index) {
        case SpecialColorIndex.FOREGROUND: // OSC 10 | 110
          acc = 'foreground';
          ident = '10';
          break;
        case SpecialColorIndex.BACKGROUND: // OSC 11 | 111
          acc = 'background';
          ident = '11';
          break;
        case SpecialColorIndex.CURSOR: // OSC 12 | 112
          acc = 'cursor';
          ident = '12';
          break;
        default: // OSC 4 | 104
          // we can skip the [0..255] range check here (already done in inputhandler)
          acc = 'ansi';
          ident = '4;' + req.index;
      }
      switch (req.type) {
        case ColorRequestType.REPORT:
          const colorRgb = color.toColorRGB(acc === 'ansi'
            ? this._themeService.colors.ansi[req.index]
            : this._themeService.colors[acc]);
          this.coreService.triggerDataEvent(`${C0.ESC}]${ident};${toRgbString(colorRgb)}${C1_ESCAPED.ST}`);
          break;
        case ColorRequestType.SET:
          if (acc === 'ansi') {
            this._themeService.modifyColors(colors => colors.ansi[req.index] = channels.toColor(...req.color));
          } else {
            const narrowedAcc = acc;
            this._themeService.modifyColors(colors => colors[narrowedAcc] = channels.toColor(...req.color));
          }
          break;
        case ColorRequestType.RESTORE:
          this._themeService.restoreColor(req.index);
          break;
      }
    }
  }

  protected _setup(): void {
    super._setup();

    this._customKeyEventHandler = undefined;
  }

  /**
   * Convenience property to active buffer.
   */
  public get buffer(): IBuffer {
    return this.buffers.active;
  }

  /**
   * Focus the terminal. Delegates focus handling to the terminal's DOM element.
   */
  public focus(): void {
    if (this.textarea) {
      this.textarea.focus({ preventScroll: true });
    }
  }

  private _handleScreenReaderModeOptionChange(value: boolean): void {
    if (value) {
      if (!this._accessibilityManager.value && this._renderService) {
        this._accessibilityManager.value = this._instantiationService.createInstance(AccessibilityManager, this);
      }
    } else {
      this._accessibilityManager.clear();
    }
  }

  /**
   * Binds the desired focus behavior on a given terminal object.
   */
  private _handleTextAreaFocus(ev: FocusEvent): void {
    if (this.coreService.decPrivateModes.sendFocus) {
      this.coreService.triggerDataEvent(C0.ESC + '[I');
    }
    this.element!.classList.add('focus');
    this._showCursor();
    this._onFocus.fire();
  }

  /**
   * Blur the terminal, calling the blur function on the terminal's underlying
   * textarea.
   */
  public blur(): void {
    return this.textarea?.blur();
  }

  /**
   * Binds the desired blur behavior on a given terminal object.
   */
  private _handleTextAreaBlur(): void {
    // Text can safely be removed on blur. Doing it earlier could interfere with
    // screen readers reading it out.
    this.textarea!.value = '';
    this.refresh(this.buffer.y, this.buffer.y);
    if (this.coreService.decPrivateModes.sendFocus) {
      this.coreService.triggerDataEvent(C0.ESC + '[O');
    }
    this.element!.classList.remove('focus');
    this._onBlur.fire();
  }

  private _syncTextArea(): void {
    if (!this.textarea || !this.buffer.isCursorInViewport || this._compositionHelper!.isComposing || !this._renderService) {
      return;
    }
    const cursorY = this.buffer.ybase + this.buffer.y;
    const bufferLine = this.buffer.lines.get(cursorY);
    if (!bufferLine) {
      return;
    }
    const cursorX = Math.min(this.buffer.x, this.cols - 1);
    const cellHeight = this._renderService.dimensions.css.cell.height;
    const width = bufferLine.getWidth(cursorX);
    const cellWidth = this._renderService.dimensions.css.cell.width * width;
    const cursorTop = this.buffer.y * this._renderService.dimensions.css.cell.height;
    const cursorLeft = cursorX * this._renderService.dimensions.css.cell.width;

    // Sync the textarea to the exact position of the composition view so the IME knows where the
    // text is.
    this.textarea.style.left = cursorLeft + 'px';
    this.textarea.style.top = cursorTop + 'px';
    this.textarea.style.width = cellWidth + 'px';
    this.textarea.style.height = cellHeight + 'px';
    this.textarea.style.lineHeight = cellHeight + 'px';
    this.textarea.style.zIndex = '-5';
  }

  /**
   * Initialize default behavior
   */
  private _initGlobal(): void {
    this._bindKeys();

    // Bind clipboard functionality
    this._register(addDisposableListener(this.element!, 'copy', (event: ClipboardEvent) => {
      // If mouse events are active it means the selection manager is disabled and
      // copy should be handled by the host program.
      if (!this.hasSelection()) {
        return;
      }
      copyHandler(event, this._selectionService!);
    }));
    const pasteHandlerWrapper = (event: ClipboardEvent): void => handlePasteEvent(event, this.textarea!, this.coreService, this.optionsService);
    this._register(addDisposableListener(this.textarea!, 'paste', pasteHandlerWrapper));
    this._register(addDisposableListener(this.element!, 'paste', pasteHandlerWrapper));

    // Handle right click context menus
    if (Browser.isFirefox) {
      // Firefox doesn't appear to fire the contextmenu event on right click
      this._register(addDisposableListener(this.element!, 'mousedown', (event: MouseEvent) => {
        if (event.button === 2) {
          rightClickHandler(event, this.textarea!, this.screenElement!, this._selectionService!, this.options.rightClickSelectsWord);
        }
      }));
    } else {
      this._register(addDisposableListener(this.element!, 'contextmenu', (event: MouseEvent) => {
        rightClickHandler(event, this.textarea!, this.screenElement!, this._selectionService!, this.options.rightClickSelectsWord);
      }));
    }

    // Move the textarea under the cursor when middle clicking on Linux to ensure
    // middle click to paste selection works. This only appears to work in Chrome
    // at the time is writing.
    if (Browser.isLinux) {
      // Use auxclick event over mousedown the latter doesn't seem to work. Note
      // that the regular click event doesn't fire for the middle mouse button.
      this._register(addDisposableListener(this.element!, 'auxclick', (event: MouseEvent) => {
        if (event.button === 1) {
          moveTextAreaUnderMouseCursor(event, this.textarea!, this.screenElement!);
        }
      }));
    }
  }

  /**
   * Apply key handling to the terminal
   */
  private _bindKeys(): void {
    this._register(addDisposableListener(this.textarea!, 'keyup', (ev: KeyboardEvent) => this._keyUp(ev), true));
    this._register(addDisposableListener(this.textarea!, 'keydown', (ev: KeyboardEvent) => this._keyDown(ev), true));
    this._register(addDisposableListener(this.textarea!, 'keypress', (ev: KeyboardEvent) => this._keyPress(ev), true));
    this._register(addDisposableListener(this.textarea!, 'compositionstart', () => this._compositionHelper!.compositionstart()));
    this._register(addDisposableListener(this.textarea!, 'compositionupdate', (e: CompositionEvent) => this._compositionHelper!.compositionupdate(e)));
    this._register(addDisposableListener(this.textarea!, 'compositionend', () => this._compositionHelper!.compositionend()));
    this._register(addDisposableListener(this.textarea!, 'input', (ev: InputEvent) => this._inputEvent(ev), true));
    this._register(this.onRender(() => this._compositionHelper!.updateCompositionElements()));
  }

  /**
   * Opens the terminal within an element.
   *
   * @param parent The element to create the terminal within.
   */
  public open(parent: HTMLElement): void {
    if (!parent) {
      throw new Error('Terminal requires a parent element.');
    }

    if (!parent.isConnected) {
      this._logService.debug('Terminal.open was called on an element that was not attached to the DOM');
    }

    // If the terminal is already opened
    if (this.element?.ownerDocument.defaultView && this._coreBrowserService) {
      // Adjust the window if needed
      if (this.element.ownerDocument.defaultView !== this._coreBrowserService.window) {
        this._coreBrowserService.window = this.element.ownerDocument.defaultView;
      }
      return;
    }

    this._document = parent.ownerDocument;
    if (this.options.documentOverride && this.options.documentOverride instanceof Document) {
      this._document = this.optionsService.rawOptions.documentOverride as Document;
    }

    // Create main element container
    this.element = this._document.createElement('div');
    this.element.dir = 'ltr';   // xterm.css assumes LTR
    this.element.classList.add('terminal');
    this.element.classList.add('xterm');
    parent.appendChild(this.element);

    // Performance: Use a document fragment to build the terminal
    // viewport and helper elements detached from the DOM
    const fragment = this._document.createDocumentFragment();
    this._viewportElement = this._document.createElement('div');
    this._viewportElement.classList.add('xterm-viewport');
    fragment.appendChild(this._viewportElement);

    this.screenElement = this._document.createElement('div');
    this.screenElement.classList.add('xterm-screen');
    this._register(addDisposableListener(this.screenElement, 'mousemove', (ev: MouseEvent) => this.updateCursorStyle(ev)));
    // Create the container that will hold helpers like the textarea for
    // capturing DOM Events. Then produce the helpers.
    this._helperContainer = this._document.createElement('div');
    this._helperContainer.classList.add('xterm-helpers');
    this.screenElement.appendChild(this._helperContainer);
    fragment.appendChild(this.screenElement);

    const textarea = this.textarea = this._document.createElement('textarea');
    this.textarea.classList.add('xterm-helper-textarea');
    this.textarea.setAttribute('aria-label', Strings.promptLabel.get());
    if (!Browser.isChromeOS) {
      // ChromeVox on ChromeOS does not like this. See
      // https://issuetracker.google.com/issues/260170397
      this.textarea.setAttribute('aria-multiline', 'false');
    }
    this.textarea.setAttribute('autocorrect', 'off');
    this.textarea.setAttribute('autocapitalize', 'off');
    this.textarea.setAttribute('spellcheck', 'false');
    this.textarea.tabIndex = 0;
    this._register(this.optionsService.onSpecificOptionChange('disableStdin', () => textarea.readOnly = this.optionsService.rawOptions.disableStdin));
    this.textarea.readOnly = this.optionsService.rawOptions.disableStdin;

    // Register the core browser service before the generic textarea handlers are registered so it
    // handles them first. Otherwise the renderers may use the wrong focus state.
    this._coreBrowserService = this._register(this._instantiationService.createInstance(CoreBrowserService,
      this.textarea,
      parent.ownerDocument.defaultView ?? window,
      // Force unsafe null in node.js environment for tests
      this._document ?? (typeof window !== 'undefined') ? window.document : null as any
    ));
    this._instantiationService.setService(ICoreBrowserService, this._coreBrowserService);

    this._register(addDisposableListener(this.textarea, 'focus', (ev: FocusEvent) => this._handleTextAreaFocus(ev)));
    this._register(addDisposableListener(this.textarea, 'blur', () => this._handleTextAreaBlur()));
    this._helperContainer.appendChild(this.textarea);

    this._charSizeService = this._instantiationService.createInstance(CharSizeService, this._document, this._helperContainer);
    this._instantiationService.setService(ICharSizeService, this._charSizeService);

    this._themeService = this._instantiationService.createInstance(ThemeService);
    this._instantiationService.setService(IThemeService, this._themeService);

    this._characterJoinerService = this._instantiationService.createInstance(CharacterJoinerService);
    this._instantiationService.setService(ICharacterJoinerService, this._characterJoinerService);

    this._renderService = this._register(this._instantiationService.createInstance(RenderService, this.rows, this.screenElement));
    this._instantiationService.setService(IRenderService, this._renderService);
    this._register(this._renderService.onRenderedViewportChange(e => this._onRender.fire(e)));
    this.onResize(e => this._renderService!.resize(e.cols, e.rows));

    this._compositionView = this._document.createElement('div');
    this._compositionView.classList.add('composition-view');
    this._compositionHelper = this._instantiationService.createInstance(CompositionHelper, this.textarea, this._compositionView);
    this._helperContainer.appendChild(this._compositionView);

    this._mouseService = this._instantiationService.createInstance(MouseService);
    this._instantiationService.setService(IMouseService, this._mouseService);

    const linkifier = this._linkifier.value = this._register(this._instantiationService.createInstance(Linkifier, this.screenElement));

    // Performance: Add viewport and helper elements from the fragment
    this.element.appendChild(fragment);

    try {
      this._onWillOpen.fire(this.element);
    }
    catch { /* fails to load addon for some reason */ }
    if (!this._renderService.hasRenderer()) {
      this._renderService.setRenderer(this._createRenderer());
    }

    this._register(this.onCursorMove(() => {
      this._renderService!.handleCursorMove();
      this._syncTextArea();
    }));
    this._register(this.onResize(() => this._renderService!.handleResize(this.cols, this.rows)));
    this._register(this.onBlur(() => this._renderService!.handleBlur()));
    this._register(this.onFocus(() => this._renderService!.handleFocus()));

    this._viewport = this._register(this._instantiationService.createInstance(Viewport, this.element, this.screenElement));
    this._register(this._viewport.onRequestScrollLines(e => {
      super.scrollLines(e, false);
      this.refresh(0, this.rows - 1);
    }));

    this._selectionService = this._register(this._instantiationService.createInstance(SelectionService,
      this.element,
      this.screenElement,
      linkifier
    ));
    this._instantiationService.setService(ISelectionService, this._selectionService);
    this._register(this._selectionService.onRequestScrollLines(e => this.scrollLines(e.amount, e.suppressScrollEvent)));
    this._register(this._selectionService.onSelectionChange(() => this._onSelectionChange.fire()));
    this._register(this._selectionService.onRequestRedraw(e => this._renderService!.handleSelectionChanged(e.start, e.end, e.columnSelectMode)));
    this._register(this._selectionService.onLinuxMouseSelection(text => {
      // If there's a new selection, put it into the textarea, focus and select it
      // in order to register it as a selection on the OS. This event is fired
      // only on Linux to enable middle click to paste selection.
      this.textarea!.value = text;
      this.textarea!.focus();
      this.textarea!.select();
    }));
    this._register(Event.any(
      this._onScroll.event,
      this._inputHandler.onScroll
    )(() => {
      this._selectionService!.refresh();
      this._viewport?.queueSync();
    }));

    this._register(this._instantiationService.createInstance(BufferDecorationRenderer, this.screenElement));
    this._register(addDisposableListener(this.element, 'mousedown', (e: MouseEvent) => this._selectionService!.handleMouseDown(e)));

    // apply mouse event classes set by escape codes before terminal was attached
    if (this.coreMouseService.areMouseEventsActive) {
      this._selectionService.disable();
      this.element.classList.add('enable-mouse-events');
    } else {
      this._selectionService.enable();
    }

    if (this.options.screenReaderMode) {
      // Note that this must be done *after* the renderer is created in order to
      // ensure the correct order of the dprchange event
      this._accessibilityManager.value = this._instantiationService.createInstance(AccessibilityManager, this);
    }
    this._register(this.optionsService.onSpecificOptionChange('screenReaderMode', e => this._handleScreenReaderModeOptionChange(e)));

    if (this.options.overviewRuler.width) {
      this._overviewRulerRenderer = this._register(this._instantiationService.createInstance(OverviewRulerRenderer, this._viewportElement, this.screenElement));
    }
    this.optionsService.onSpecificOptionChange('overviewRuler', value => {
      if (!this._overviewRulerRenderer && value && this._viewportElement && this.screenElement) {
        this._overviewRulerRenderer = this._register(this._instantiationService.createInstance(OverviewRulerRenderer, this._viewportElement, this.screenElement));
      }
    });
    // Measure the character size
    this._charSizeService.measure();

    // Setup loop that draws to screen
    this.refresh(0, this.rows - 1);

    // Initialize global actions that need to be taken on the document.
    this._initGlobal();

    // Listen for mouse events and translate
    // them into terminal mouse protocols.
    this.bindMouse();
  }

  private _createRenderer(): IRenderer {
    return this._instantiationService.createInstance(DomRenderer, this, this._document!, this.element!, this.screenElement!, this._viewportElement!, this._helperContainer!, this.linkifier!);
  }

  /**
   * Bind certain mouse events to the terminal.
   * By default only 3 button + wheel up/down is ativated. For higher buttons
   * no mouse report will be created. Typically the standard actions will be active.
   *
   * There are several reasons not to enable support for higher buttons/wheel:
   * - Button 4 and 5 are typically used for history back and forward navigation,
   *   there is no straight forward way to supress/intercept those standard actions.
   * - Support for higher buttons does not work in some platform/browser combinations.
   * - Left/right wheel was not tested.
   * - Emulators vary in mouse button support, typically only 3 buttons and
   *   wheel up/down work reliable.
   *
   * TODO: Move mouse event code into its own file.
   */
  public bindMouse(): void {
    const self = this;
    const el = this.element!;

    // send event to CoreMouseService
    function sendEvent(ev: MouseEvent | WheelEvent): boolean {
      // get mouse coordinates
      const pos = self._mouseService!.getMouseReportCoords(ev, self.screenElement!);
      if (!pos) {
        return false;
      }

      let but: CoreMouseButton;
      let action: CoreMouseAction | undefined;
      switch ((ev as any).overrideType || ev.type) {
        case 'mousemove':
          action = CoreMouseAction.MOVE;
          if (ev.buttons === undefined) {
            // buttons is not supported on macOS, try to get a value from button instead
            but = CoreMouseButton.NONE;
            if (ev.button !== undefined) {
              but = ev.button < 3 ? ev.button : CoreMouseButton.NONE;
            }
          } else {
            // according to MDN buttons only reports up to button 5 (AUX2)
            but = ev.buttons & 1 ? CoreMouseButton.LEFT :
              ev.buttons & 4 ? CoreMouseButton.MIDDLE :
                ev.buttons & 2 ? CoreMouseButton.RIGHT :
                  CoreMouseButton.NONE; // fallback to NONE
          }
          break;
        case 'mouseup':
          action = CoreMouseAction.UP;
          but = ev.button < 3 ? ev.button : CoreMouseButton.NONE;
          break;
        case 'mousedown':
          action = CoreMouseAction.DOWN;
          but = ev.button < 3 ? ev.button : CoreMouseButton.NONE;
          break;
        case 'wheel':
          if (self._customWheelEventHandler && self._customWheelEventHandler(ev as WheelEvent) === false) {
            return false;
          }
          const deltaY = (ev as WheelEvent).deltaY;
          if (deltaY === 0) {
            return false;
          }
          const lines = self.coreMouseService.consumeWheelEvent(
            ev as WheelEvent,
            self._renderService?.dimensions?.device?.cell?.height,
            self._coreBrowserService?.dpr
          );
          if (lines === 0) {
            return false;
          }
          action = deltaY < 0 ? CoreMouseAction.UP : CoreMouseAction.DOWN;
          but = CoreMouseButton.WHEEL;
          break;
        default:
          // dont handle other event types by accident
          return false;
      }

      // exit if we cannot determine valid button/action values
      // do nothing for higher buttons than wheel
      if (action === undefined || but === undefined || but > CoreMouseButton.WHEEL) {
        return false;
      }

      return self.coreMouseService.triggerMouseEvent({
        col: pos.col,
        row: pos.row,
        x: pos.x,
        y: pos.y,
        button: but,
        action,
        ctrl: ev.ctrlKey,
        alt: ev.altKey,
        shift: ev.shiftKey
      });
    }

    /**
     * Event listener state handling.
     * We listen to the onProtocolChange event of CoreMouseService and put
     * requested listeners in `requestedEvents`. With this the listeners
     * have all bits to do the event listener juggling.
     * Note: 'mousedown' currently is "always on" and not managed
     * by onProtocolChange.
     */
    const requestedEvents: { [key: string]: ((ev: MouseEvent | WheelEvent) => void) | null } = {
      mouseup: null,
      wheel: null,
      mousedrag: null,
      mousemove: null
    };
    const eventListeners: { [key: string]: (ev: any) => void | boolean } = {
      mouseup: (ev: MouseEvent) => {
        sendEvent(ev);
        if (!ev.buttons) {
          // if no other button is held remove global handlers
          this._document!.removeEventListener('mouseup', requestedEvents.mouseup!);
          if (requestedEvents.mousedrag) {
            this._document!.removeEventListener('mousemove', requestedEvents.mousedrag);
          }
        }
        return this.cancel(ev);
      },
      wheel: (ev: WheelEvent) => {
        sendEvent(ev);
        return this.cancel(ev, true);
      },
      mousedrag: (ev: MouseEvent) => {
        // deal only with move while a button is held
        if (ev.buttons) {
          sendEvent(ev);
        }
      },
      mousemove: (ev: MouseEvent) => {
        // deal only with move without any button
        if (!ev.buttons) {
          sendEvent(ev);
        }
      }
    };
    this._register(this.coreMouseService.onProtocolChange(events => {
      // apply global changes on events
      if (events) {
        if (this.optionsService.rawOptions.logLevel === 'debug') {
          this._logService.debug('Binding to mouse events:', this.coreMouseService.explainEvents(events));
        }
        this.element!.classList.add('enable-mouse-events');
        this._selectionService!.disable();
      } else {
        this._logService.debug('Unbinding from mouse events.');
        this.element!.classList.remove('enable-mouse-events');
        this._selectionService!.enable();
      }

      // add/remove handlers from requestedEvents

      if (!(events & CoreMouseEventType.MOVE)) {
        el.removeEventListener('mousemove', requestedEvents.mousemove!);
        requestedEvents.mousemove = null;
      } else if (!requestedEvents.mousemove) {
        el.addEventListener('mousemove', eventListeners.mousemove);
        requestedEvents.mousemove = eventListeners.mousemove;
      }

      if (!(events & CoreMouseEventType.WHEEL)) {
        el.removeEventListener('wheel', requestedEvents.wheel!);
        requestedEvents.wheel = null;
      } else if (!requestedEvents.wheel) {
        el.addEventListener('wheel', eventListeners.wheel, { passive: false });
        requestedEvents.wheel = eventListeners.wheel;
      }

      if (!(events & CoreMouseEventType.UP)) {
        this._document!.removeEventListener('mouseup', requestedEvents.mouseup!);
        requestedEvents.mouseup = null;
      } else if (!requestedEvents.mouseup) {
        requestedEvents.mouseup = eventListeners.mouseup;
      }

      if (!(events & CoreMouseEventType.DRAG)) {
        this._document!.removeEventListener('mousemove', requestedEvents.mousedrag!);
        requestedEvents.mousedrag = null;
      } else if (!requestedEvents.mousedrag) {
        requestedEvents.mousedrag = eventListeners.mousedrag;
      }
    }));
    // force initial onProtocolChange so we dont miss early mouse requests
    this.coreMouseService.activeProtocol = this.coreMouseService.activeProtocol;

    /**
     * "Always on" event listeners.
     */
    this._register(addDisposableListener(el, 'mousedown', (ev: MouseEvent) => {
      ev.preventDefault();
      this.focus();

      // Don't send the mouse button to the pty if mouse events are disabled or
      // if the selection manager is having selection forced (ie. a modifier is
      // held).
      if (!this.coreMouseService.areMouseEventsActive || this._selectionService!.shouldForceSelection(ev)) {
        return;
      }

      sendEvent(ev);

      // Register additional global handlers which should keep reporting outside
      // of the terminal element.
      // Note: Other emulators also do this for 'mousedown' while a button
      // is held, we currently limit 'mousedown' to the terminal only.
      if (requestedEvents.mouseup) {
        this._document!.addEventListener('mouseup', requestedEvents.mouseup);
      }
      if (requestedEvents.mousedrag) {
        this._document!.addEventListener('mousemove', requestedEvents.mousedrag);
      }

      return this.cancel(ev);
    }));

    this._register(addDisposableListener(el, 'wheel', (ev: WheelEvent) => {
      // do nothing, if app side handles wheel itself
      if (requestedEvents.wheel) return;

      if (this._customWheelEventHandler && this._customWheelEventHandler(ev) === false) {
        return false;
      }

      if (!this.buffer.hasScrollback) {
        // Convert wheel events into up/down events when the buffer does not have scrollback, this
        // enables scrolling in apps hosted in the alt buffer such as vim or tmux even when mouse
        // events are not enabled.
        // This used implementation used get the actual lines/partial lines scrolled from the
        // viewport but since moving to the new viewport implementation has been simplified to
        // simply send a single up or down sequence.

        // Do nothing if there's no vertical scroll
        const deltaY = (ev as WheelEvent).deltaY;
        if (deltaY === 0) {
          return false;
        }

        const lines = self.coreMouseService.consumeWheelEvent(
          ev as WheelEvent,
          self._renderService?.dimensions?.device?.cell?.height,
          self._coreBrowserService?.dpr
        );
        if (lines === 0) {
          return this.cancel(ev, true);
        }

        // Construct and send sequences
        const sequence = C0.ESC + (this.coreService.decPrivateModes.applicationCursorKeys ? 'O' : '[') + (ev.deltaY < 0 ? 'A' : 'B');
        this.coreService.triggerDataEvent(sequence, true);
        return this.cancel(ev, true);
      }
    }, { passive: false }));
  }


  /**
   * Tells the renderer to refresh terminal content between two rows (inclusive) at the next
   * opportunity.
   * @param start The row to start from (between 0 and this.rows - 1).
   * @param end The row to end at (between start and this.rows - 1).
   */
  public refresh(start: number, end: number): void {
    this._renderService?.refreshRows(start, end);
  }

  /**
   * Change the cursor style for different selection modes
   */
  public updateCursorStyle(ev: KeyboardEvent | MouseEvent): void {
    if (this._selectionService?.shouldColumnSelect(ev)) {
      this.element!.classList.add('column-select');
    } else {
      this.element!.classList.remove('column-select');
    }
  }

  /**
   * Display the cursor element
   */
  private _showCursor(): void {
    if (!this.coreService.isCursorInitialized) {
      this.coreService.isCursorInitialized = true;
      this.refresh(this.buffer.y, this.buffer.y);
    }
  }

  public scrollLines(disp: number, suppressScrollEvent?: boolean): void {
    // All scrollLines methods need to go via the viewport in order to support smooth scroll
    if (this._viewport) {
      this._viewport.scrollLines(disp);
    } else {
      super.scrollLines(disp, suppressScrollEvent);
    }
    this.refresh(0, this.rows - 1);
  }

  public scrollPages(pageCount: number): void {
    this.scrollLines(pageCount * (this.rows - 1));
  }

  public scrollToTop(): void {
    this.scrollLines(-this._bufferService.buffer.ydisp);
  }

  public scrollToBottom(disableSmoothScroll?: boolean): void {
    if (disableSmoothScroll && this._viewport) {
      this._viewport.scrollToLine(this.buffer.ybase, true);
    } else {
      this.scrollLines(this._bufferService.buffer.ybase - this._bufferService.buffer.ydisp);
    }
  }

  public scrollToLine(line: number): void {
    const scrollAmount = line - this._bufferService.buffer.ydisp;
    if (scrollAmount !== 0) {
      this.scrollLines(scrollAmount);
    }
  }

  public paste(data: string): void {
    paste(data, this.textarea!, this.coreService, this.optionsService);
  }

  public attachCustomKeyEventHandler(customKeyEventHandler: CustomKeyEventHandler): void {
    this._customKeyEventHandler = customKeyEventHandler;
  }

  public attachCustomWheelEventHandler(customWheelEventHandler: CustomWheelEventHandler): void {
    this._customWheelEventHandler = customWheelEventHandler;
  }

  public registerLinkProvider(linkProvider: ILinkProvider): IDisposable {
    return this._linkProviderService.registerLinkProvider(linkProvider);
  }

  public registerCharacterJoiner(handler: CharacterJoinerHandler): number {
    if (!this._characterJoinerService) {
      throw new Error('Terminal must be opened first');
    }
    const joinerId = this._characterJoinerService.register(handler);
    this.refresh(0, this.rows - 1);
    return joinerId;
  }

  public deregisterCharacterJoiner(joinerId: number): void {
    if (!this._characterJoinerService) {
      throw new Error('Terminal must be opened first');
    }
    if (this._characterJoinerService.deregister(joinerId)) {
      this.refresh(0, this.rows - 1);
    }
  }

  public get markers(): IMarker[] {
    return this.buffer.markers;
  }

  public registerMarker(cursorYOffset: number): IMarker {
    return this.buffer.addMarker(this.buffer.ybase + this.buffer.y + cursorYOffset);
  }

  public registerDecoration(decorationOptions: IDecorationOptions): IDecoration | undefined {
    return this._decorationService.registerDecoration(decorationOptions);
  }

  /**
   * Gets whether the terminal has an active selection.
   */
  public hasSelection(): boolean {
    return this._selectionService ? this._selectionService.hasSelection : false;
  }

  /**
   * Selects text within the terminal.
   * @param column The column the selection starts at..
   * @param row The row the selection starts at.
   * @param length The length of the selection.
   */
  public select(column: number, row: number, length: number): void {
    this._selectionService!.setSelection(column, row, length);
  }

  /**
   * Gets the terminal's current selection, this is useful for implementing copy
   * behavior outside of xterm.js.
   */
  public getSelection(): string {
    return this._selectionService ? this._selectionService.selectionText : '';
  }

  public getSelectionPosition(): IBufferRange | undefined {
    if (!this._selectionService || !this._selectionService.hasSelection) {
      return undefined;
    }

    return {
      start: {
        x: this._selectionService.selectionStart![0],
        y: this._selectionService.selectionStart![1]
      },
      end: {
        x: this._selectionService.selectionEnd![0],
        y: this._selectionService.selectionEnd![1]
      }
    };
  }

  /**
   * Clears the current terminal selection.
   */
  public clearSelection(): void {
    this._selectionService?.clearSelection();
  }

  /**
   * Selects all text within the terminal.
   */
  public selectAll(): void {
    this._selectionService?.selectAll();
  }

  public selectLines(start: number, end: number): void {
    this._selectionService?.selectLines(start, end);
  }

  /**
   * Handle a keydown [KeyboardEvent].
   *
   * [KeyboardEvent]: https://developer.mozilla.org/en-US/docs/DOM/KeyboardEvent
   */
  protected _keyDown(event: KeyboardEvent): boolean | undefined {
    this._keyDownHandled = false;
    this._keyDownSeen = true;

    if (this._customKeyEventHandler && this._customKeyEventHandler(event) === false) {
      return false;
    }

    // Ignore composing with Alt key on Mac when macOptionIsMeta is enabled
    const shouldIgnoreComposition = this.browser.isMac && this.options.macOptionIsMeta && event.altKey;

    if (!shouldIgnoreComposition && !this._compositionHelper!.keydown(event)) {
      if (this.options.scrollOnUserInput && this.buffer.ybase !== this.buffer.ydisp) {
        this.scrollToBottom(true);
      }
      return false;
    }

    if (!shouldIgnoreComposition && (event.key === 'Dead' || event.key === 'AltGraph')) {
      this._unprocessedDeadKey = true;
    }

    const result = evaluateKeyboardEvent(event, this.coreService.decPrivateModes.applicationCursorKeys, this.browser.isMac, this.options.macOptionIsMeta);

    this.updateCursorStyle(event);

    if (result.type === KeyboardResultType.PAGE_DOWN || result.type === KeyboardResultType.PAGE_UP) {
      const scrollCount = this.rows - 1;
      this.scrollLines(result.type === KeyboardResultType.PAGE_UP ? -scrollCount : scrollCount);
      return this.cancel(event, true);
    }

    if (result.type === KeyboardResultType.SELECT_ALL) {
      this.selectAll();
    }

    if (this._isThirdLevelShift(this.browser, event)) {
      return true;
    }

    if (result.cancel) {
      // The event is canceled at the end already, is this necessary?
      this.cancel(event, true);
    }

    if (!result.key) {
      return true;
    }

    // HACK: Process A-Z in the keypress event to fix an issue with macOS IMEs where lower case
    // letters cannot be input while caps lock is on.
    if (event.key && !event.ctrlKey && !event.altKey && !event.metaKey && event.key.length === 1) {
      if (event.key.charCodeAt(0) >= 65 && event.key.charCodeAt(0) <= 90) {
        return true;
      }
    }

    if (this._unprocessedDeadKey) {
      this._unprocessedDeadKey = false;
      return true;
    }

    // If ctrl+c or enter is being sent, clear out the textarea. This is done so that screen readers
    // will announce deleted characters. This will not work 100% of the time but it should cover
    // most scenarios.
    if (result.key === C0.ETX || result.key === C0.CR) {
      this.textarea!.value = '';
    }

    this._onKey.fire({ key: result.key, domEvent: event });
    this._showCursor();
    this.coreService.triggerDataEvent(result.key, true);

    // Cancel events when not in screen reader mode so events don't get bubbled up and handled by
    // other listeners. When screen reader mode is enabled, we don't cancel them (unless ctrl or alt
    // is also depressed) so that the cursor textarea can be updated, which triggers the screen
    // reader to read it.
    if (!this.optionsService.rawOptions.screenReaderMode || event.altKey || event.ctrlKey) {
      return this.cancel(event, true);
    }

    this._keyDownHandled = true;
  }

  private _isThirdLevelShift(browser: IBrowser, ev: KeyboardEvent): boolean {
    const thirdLevelKey =
      (browser.isMac && !this.options.macOptionIsMeta && ev.altKey && !ev.ctrlKey && !ev.metaKey) ||
      (browser.isWindows && ev.altKey && ev.ctrlKey && !ev.metaKey) ||
      (browser.isWindows && ev.getModifierState('AltGraph'));

    if (ev.type === 'keypress') {
      return thirdLevelKey;
    }

    // Don't invoke for arrows, pageDown, home, backspace, etc. (on non-keypress events)
    return thirdLevelKey && (!ev.keyCode || ev.keyCode > 47);
  }

  protected _keyUp(ev: KeyboardEvent): void {
    this._keyDownSeen = false;

    if (this._customKeyEventHandler && this._customKeyEventHandler(ev) === false) {
      return;
    }

    if (!wasModifierKeyOnlyEvent(ev)) {
      this.focus();
    }

    this.updateCursorStyle(ev);
    this._keyPressHandled = false;
  }

  /**
   * Handle a keypress event.
   * Key Resources:
   *   - https://developer.mozilla.org/en-US/docs/DOM/KeyboardEvent
   * @param ev The keypress event to be handled.
   */
  protected _keyPress(ev: KeyboardEvent): boolean {
    let key;

    this._keyPressHandled = false;

    if (this._keyDownHandled) {
      return false;
    }

    if (this._customKeyEventHandler && this._customKeyEventHandler(ev) === false) {
      return false;
    }

    this.cancel(ev);

    if (ev.charCode) {
      key = ev.charCode;
    } else if (ev.which === null || ev.which === undefined) {
      key = ev.keyCode;
    } else if (ev.which !== 0 && ev.charCode !== 0) {
      key = ev.which;
    } else {
      return false;
    }

    if (!key || (
      (ev.altKey || ev.ctrlKey || ev.metaKey) && !this._isThirdLevelShift(this.browser, ev)
    )) {
      return false;
    }

    key = String.fromCharCode(key);

    this._onKey.fire({ key, domEvent: ev });
    this._showCursor();
    this.coreService.triggerDataEvent(key, true);

    this._keyPressHandled = true;

    // The key was handled so clear the dead key state, otherwise certain keystrokes like arrow
    // keys could be ignored
    this._unprocessedDeadKey = false;

    return true;
  }

  /**
   * Handle an input event.
   * Key Resources:
   *   - https://developer.mozilla.org/en-US/docs/Web/API/InputEvent
   * @param ev The input event to be handled.
   */
  protected _inputEvent(ev: InputEvent): boolean {
    // Only support emoji IMEs when screen reader mode is disabled as the event must bubble up to
    // support reading out character input which can doubling up input characters
    // Based on these event traces: https://github.com/xtermjs/xterm.js/issues/3679
    if (ev.data && ev.inputType === 'insertText' && (!ev.composed || !this._keyDownSeen) && !this.optionsService.rawOptions.screenReaderMode) {
      if (this._keyPressHandled) {
        return false;
      }

      // The key was handled so clear the dead key state, otherwise certain keystrokes like arrow
      // keys could be ignored
      this._unprocessedDeadKey = false;

      const text = ev.data;
      this.coreService.triggerDataEvent(text, true);

      this.cancel(ev);
      return true;
    }

    return false;
  }

  /**
   * Resizes the terminal.
   *
   * @param x The number of columns to resize to.
   * @param y The number of rows to resize to.
   */
  public resize(x: number, y: number): void {
    if (x === this.cols && y === this.rows) {
      // Check if we still need to measure the char size (fixes #785).
      if (this._charSizeService && !this._charSizeService.hasValidSize) {
        this._charSizeService.measure();
      }
      return;
    }

    super.resize(x, y);
  }

  private _afterResize(x: number, y: number): void {
    this._charSizeService?.measure();
  }

  /**
   * Clear the entire buffer, making the prompt line the new first line.
   */
  public clear(): void {
    if (this.buffer.ybase === 0 && this.buffer.y === 0) {
      // Don't clear if it's already clear
      return;
    }
    this.buffer.clearAllMarkers();
    this.buffer.lines.set(0, this.buffer.lines.get(this.buffer.ybase + this.buffer.y)!);
    this.buffer.lines.length = 1;
    this.buffer.ydisp = 0;
    this.buffer.ybase = 0;
    this.buffer.y = 0;
    for (let i = 1; i < this.rows; i++) {
      this.buffer.lines.push(this.buffer.getBlankLine(DEFAULT_ATTR_DATA));
    }
    // IMPORTANT: Fire scroll event before viewport is reset. This ensures embedders get the clear
    // scroll event and that the viewport's state will be valid for immediate writes.
    this._onScroll.fire({ position: this.buffer.ydisp });
    this.refresh(0, this.rows - 1);
  }

  /**
   * Reset terminal.
   * Note: Calling this directly from JS is synchronous but does not clear
   * input buffers and does not reset the parser, thus the terminal will
   * continue to apply pending input data.
   * If you need in band reset (synchronous with input data) consider
   * using DECSTR (soft reset, CSI ! p) or RIS instead (hard reset, ESC c).
   */
  public reset(): void {
    /**
     * Since _setup handles a full terminal creation, we have to carry forward
     * a few things that should not reset.
     */
    this.options.rows = this.rows;
    this.options.cols = this.cols;
    const customKeyEventHandler = this._customKeyEventHandler;

    this._setup();
    super.reset();
    this._selectionService?.reset();
    this._decorationService.reset();

    // reattach
    this._customKeyEventHandler = customKeyEventHandler;

    // do a full screen refresh
    this.refresh(0, this.rows - 1);
  }

  public clearTextureAtlas(): void {
    this._renderService?.clearTextureAtlas();
  }

  private _reportFocus(): void {
    if (this.element?.classList.contains('focus')) {
      this.coreService.triggerDataEvent(C0.ESC + '[I');
    } else {
      this.coreService.triggerDataEvent(C0.ESC + '[O');
    }
  }

  private _reportWindowsOptions(type: WindowsOptionsReportType): void {
    if (!this._renderService) {
      return;
    }

    switch (type) {
      case WindowsOptionsReportType.GET_WIN_SIZE_PIXELS:
        const canvasWidth = this._renderService.dimensions.css.canvas.width.toFixed(0);
        const canvasHeight = this._renderService.dimensions.css.canvas.height.toFixed(0);
        this.coreService.triggerDataEvent(`${C0.ESC}[4;${canvasHeight};${canvasWidth}t`);
        break;
      case WindowsOptionsReportType.GET_CELL_SIZE_PIXELS:
        const cellWidth = this._renderService.dimensions.css.cell.width.toFixed(0);
        const cellHeight = this._renderService.dimensions.css.cell.height.toFixed(0);
        this.coreService.triggerDataEvent(`${C0.ESC}[6;${cellHeight};${cellWidth}t`);
        break;
    }
  }

  // TODO: Remove cancel function and cancelEvents option
  public cancel(ev: MouseEvent | WheelEvent | KeyboardEvent | InputEvent, force?: boolean): boolean | undefined {
    if (!this.options.cancelEvents && !force) {
      return;
    }
    ev.preventDefault();
    ev.stopPropagation();
    return false;
  }
}

/**
 * Helpers
 */

function wasModifierKeyOnlyEvent(ev: KeyboardEvent): boolean {
  return ev.keyCode === 16 || // Shift
    ev.keyCode === 17 || // Ctrl
    ev.keyCode === 18; // Alt
}
