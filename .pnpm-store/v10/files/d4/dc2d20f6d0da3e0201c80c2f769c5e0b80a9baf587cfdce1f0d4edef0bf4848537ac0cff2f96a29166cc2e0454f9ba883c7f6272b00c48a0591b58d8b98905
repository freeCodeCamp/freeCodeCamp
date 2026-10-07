/**
 * Copyright (c) 2018 The xterm.js authors. All rights reserved.
 * @license MIT
 */

import { DomRendererRowFactory, RowCss } from 'browser/renderer/dom/DomRendererRowFactory';
import { WidthCache } from 'browser/renderer/dom/WidthCache';
import { INVERTED_DEFAULT_COLOR } from 'browser/renderer/shared/Constants';
import { createRenderDimensions } from 'browser/renderer/shared/RendererUtils';
import { createSelectionRenderModel } from 'browser/renderer/shared/SelectionRenderModel';
import { IRenderDimensions, IRenderer, IRequestRedrawEvent, ISelectionRenderModel } from 'browser/renderer/shared/Types';
import { ICharSizeService, ICoreBrowserService, IThemeService } from 'browser/services/Services';
import { ILinkifier2, ILinkifierEvent, ITerminal, ReadonlyColorSet } from 'browser/Types';
import { color } from 'common/Color';
import { Disposable, toDisposable } from 'vs/base/common/lifecycle';
import { IBufferService, ICoreService, IInstantiationService, IOptionsService } from 'common/services/Services';
import { Emitter } from 'vs/base/common/event';


const TERMINAL_CLASS_PREFIX = 'xterm-dom-renderer-owner-';
const ROW_CONTAINER_CLASS = 'xterm-rows';
const FG_CLASS_PREFIX = 'xterm-fg-';
const BG_CLASS_PREFIX = 'xterm-bg-';
const FOCUS_CLASS = 'xterm-focus';
const SELECTION_CLASS = 'xterm-selection';

let nextTerminalId = 1;

/**
 * The standard renderer and fallback for when the webgl addon is slow. This is not meant to be
 * particularly fast and will even lack some features such as custom glyphs, hoever this is more
 * reliable as webgl may not work on some machines.
 */
export class DomRenderer extends Disposable implements IRenderer {
  private _rowFactory: DomRendererRowFactory;
  private _terminalClass: number = nextTerminalId++;

  private _themeStyleElement!: HTMLStyleElement;
  private _dimensionsStyleElement!: HTMLStyleElement;
  private _rowContainer: HTMLElement;
  private _rowElements: HTMLElement[] = [];
  private _selectionContainer: HTMLElement;
  private _widthCache: WidthCache;
  private _selectionRenderModel: ISelectionRenderModel = createSelectionRenderModel();

  public dimensions: IRenderDimensions;

  public readonly onRequestRedraw = this._register(new Emitter<IRequestRedrawEvent>()).event;

  constructor(
    private readonly _terminal: ITerminal,
    private readonly _document: Document,
    private readonly _element: HTMLElement,
    private readonly _screenElement: HTMLElement,
    private readonly _viewportElement: HTMLElement,
    private readonly _helperContainer: HTMLElement,
    private readonly _linkifier2: ILinkifier2,
    @IInstantiationService instantiationService: IInstantiationService,
    @ICharSizeService private readonly _charSizeService: ICharSizeService,
    @IOptionsService private readonly _optionsService: IOptionsService,
    @IBufferService private readonly _bufferService: IBufferService,
    @ICoreService private readonly _coreService: ICoreService,
    @ICoreBrowserService private readonly _coreBrowserService: ICoreBrowserService,
    @IThemeService private readonly _themeService: IThemeService
  ) {
    super();
    this._rowContainer = this._document.createElement('div');
    this._rowContainer.classList.add(ROW_CONTAINER_CLASS);
    this._rowContainer.style.lineHeight = 'normal';
    this._rowContainer.setAttribute('aria-hidden', 'true');
    this._refreshRowElements(this._bufferService.cols, this._bufferService.rows);
    this._selectionContainer = this._document.createElement('div');
    this._selectionContainer.classList.add(SELECTION_CLASS);
    this._selectionContainer.setAttribute('aria-hidden', 'true');

    this.dimensions = createRenderDimensions();
    this._updateDimensions();
    this._register(this._optionsService.onOptionChange(() => this._handleOptionsChanged()));

    this._register(this._themeService.onChangeColors(e => this._injectCss(e)));
    this._injectCss(this._themeService.colors);

    this._rowFactory = instantiationService.createInstance(DomRendererRowFactory, document);

    this._element.classList.add(TERMINAL_CLASS_PREFIX + this._terminalClass);
    this._screenElement.appendChild(this._rowContainer);
    this._screenElement.appendChild(this._selectionContainer);

    this._register(this._linkifier2.onShowLinkUnderline(e => this._handleLinkHover(e)));
    this._register(this._linkifier2.onHideLinkUnderline(e => this._handleLinkLeave(e)));

    this._register(toDisposable(() => {
      this._element.classList.remove(TERMINAL_CLASS_PREFIX + this._terminalClass);

      // Outside influences such as React unmounts may manipulate the DOM before our disposal.
      // https://github.com/xtermjs/xterm.js/issues/2960
      this._rowContainer.remove();
      this._selectionContainer.remove();
      this._widthCache.dispose();
      this._themeStyleElement.remove();
      this._dimensionsStyleElement.remove();
    }));

    this._widthCache = new WidthCache(this._document, this._helperContainer);
    this._widthCache.setFont(
      this._optionsService.rawOptions.fontFamily,
      this._optionsService.rawOptions.fontSize,
      this._optionsService.rawOptions.fontWeight,
      this._optionsService.rawOptions.fontWeightBold
    );
    this._setDefaultSpacing();
  }

  private _updateDimensions(): void {
    const dpr = this._coreBrowserService.dpr;
    this.dimensions.device.char.width = this._charSizeService.width * dpr;
    this.dimensions.device.char.height = Math.ceil(this._charSizeService.height * dpr);
    this.dimensions.device.cell.width = this.dimensions.device.char.width + Math.round(this._optionsService.rawOptions.letterSpacing);
    this.dimensions.device.cell.height = Math.floor(this.dimensions.device.char.height * this._optionsService.rawOptions.lineHeight);
    this.dimensions.device.char.left = 0;
    this.dimensions.device.char.top = 0;
    this.dimensions.device.canvas.width = this.dimensions.device.cell.width * this._bufferService.cols;
    this.dimensions.device.canvas.height = this.dimensions.device.cell.height * this._bufferService.rows;
    this.dimensions.css.canvas.width = Math.round(this.dimensions.device.canvas.width / dpr);
    this.dimensions.css.canvas.height = Math.round(this.dimensions.device.canvas.height / dpr);
    this.dimensions.css.cell.width = this.dimensions.css.canvas.width / this._bufferService.cols;
    this.dimensions.css.cell.height = this.dimensions.css.canvas.height / this._bufferService.rows;

    for (const element of this._rowElements) {
      element.style.width = `${this.dimensions.css.canvas.width}px`;
      element.style.height = `${this.dimensions.css.cell.height}px`;
      element.style.lineHeight = `${this.dimensions.css.cell.height}px`;
      // Make sure rows don't overflow onto following row
      element.style.overflow = 'hidden';
    }

    if (!this._dimensionsStyleElement) {
      this._dimensionsStyleElement = this._document.createElement('style');
      this._screenElement.appendChild(this._dimensionsStyleElement);
    }

    const styles =
      `${this._terminalSelector} .${ROW_CONTAINER_CLASS} span {` +
      ` display: inline-block;` +   // TODO: find workaround for inline-block (creates ~20% render penalty)
      ` height: 100%;` +
      ` vertical-align: top;` +
      `}`;

    this._dimensionsStyleElement.textContent = styles;

    this._selectionContainer.style.height = this._viewportElement.style.height;
    this._screenElement.style.width = `${this.dimensions.css.canvas.width}px`;
    this._screenElement.style.height = `${this.dimensions.css.canvas.height}px`;
  }

  private _injectCss(colors: ReadonlyColorSet): void {
    if (!this._themeStyleElement) {
      this._themeStyleElement = this._document.createElement('style');
      this._screenElement.appendChild(this._themeStyleElement);
    }

    // Base CSS
    let styles =
      `${this._terminalSelector} .${ROW_CONTAINER_CLASS} {` +
      // Disabling pointer events circumvents a browser behavior that prevents `click` events from
      // being delivered if the target element is replaced during the click. This happened due to
      // refresh() being called during the mousedown handler to start a selection.
      ` pointer-events: none;` +
      ` color: ${colors.foreground.css};` +
      ` font-family: ${this._optionsService.rawOptions.fontFamily};` +
      ` font-size: ${this._optionsService.rawOptions.fontSize}px;` +
      ` font-kerning: none;` +
      ` white-space: pre` +
      `}`;
    styles +=
      `${this._terminalSelector} .${ROW_CONTAINER_CLASS} .xterm-dim {` +
      ` color: ${color.multiplyOpacity(colors.foreground, 0.5).css};` +
      `}`;
    // Text styles
    styles +=
      `${this._terminalSelector} span:not(.${RowCss.BOLD_CLASS}) {` +
      ` font-weight: ${this._optionsService.rawOptions.fontWeight};` +
      `}` +
      `${this._terminalSelector} span.${RowCss.BOLD_CLASS} {` +
      ` font-weight: ${this._optionsService.rawOptions.fontWeightBold};` +
      `}` +
      `${this._terminalSelector} span.${RowCss.ITALIC_CLASS} {` +
      ` font-style: italic;` +
      `}`;
    // Blink animation
    const blinkAnimationUnderlineId = `blink_underline_${this._terminalClass}`;
    const blinkAnimationBarId = `blink_bar_${this._terminalClass}`;
    const blinkAnimationBlockId = `blink_block_${this._terminalClass}`;
    styles +=
      `@keyframes ${blinkAnimationUnderlineId} {` +
      ` 50% {` +
      `  border-bottom-style: hidden;` +
      ` }` +
      `}`;
    styles +=
      `@keyframes ${blinkAnimationBarId} {` +
      ` 50% {` +
      `  box-shadow: none;` +
      ` }` +
      `}`;
    styles +=
      `@keyframes ${blinkAnimationBlockId} {` +
      ` 0% {` +
      `  background-color: ${colors.cursor.css};` +
      `  color: ${colors.cursorAccent.css};` +
      ` }` +
      ` 50% {` +
      `  background-color: inherit;` +
      `  color: ${colors.cursor.css};` +
      ` }` +
      `}`;
    // Cursor
    styles +=
      `${this._terminalSelector} .${ROW_CONTAINER_CLASS}.${FOCUS_CLASS} .${RowCss.CURSOR_CLASS}.${RowCss.CURSOR_BLINK_CLASS}.${RowCss.CURSOR_STYLE_UNDERLINE_CLASS} {` +
      ` animation: ${blinkAnimationUnderlineId} 1s step-end infinite;` +
      `}` +
      `${this._terminalSelector} .${ROW_CONTAINER_CLASS}.${FOCUS_CLASS} .${RowCss.CURSOR_CLASS}.${RowCss.CURSOR_BLINK_CLASS}.${RowCss.CURSOR_STYLE_BAR_CLASS} {` +
      ` animation: ${blinkAnimationBarId} 1s step-end infinite;` +
      `}` +
      `${this._terminalSelector} .${ROW_CONTAINER_CLASS}.${FOCUS_CLASS} .${RowCss.CURSOR_CLASS}.${RowCss.CURSOR_BLINK_CLASS}.${RowCss.CURSOR_STYLE_BLOCK_CLASS} {` +
      ` animation: ${blinkAnimationBlockId} 1s step-end infinite;` +
      `}` +
      // !important helps fix an issue where the cursor will not render on top of the selection,
      // however it's very hard to fix this issue and retain the blink animation without the use of
      // !important. So this edge case fails when cursor blink is on.
      `${this._terminalSelector} .${ROW_CONTAINER_CLASS} .${RowCss.CURSOR_CLASS}.${RowCss.CURSOR_STYLE_BLOCK_CLASS} {` +
      ` background-color: ${colors.cursor.css};` +
      ` color: ${colors.cursorAccent.css};` +
      `}` +
      `${this._terminalSelector} .${ROW_CONTAINER_CLASS} .${RowCss.CURSOR_CLASS}.${RowCss.CURSOR_STYLE_BLOCK_CLASS}:not(.${RowCss.CURSOR_BLINK_CLASS}) {` +
      ` background-color: ${colors.cursor.css} !important;` +
      ` color: ${colors.cursorAccent.css} !important;` +
      `}` +
      `${this._terminalSelector} .${ROW_CONTAINER_CLASS} .${RowCss.CURSOR_CLASS}.${RowCss.CURSOR_STYLE_OUTLINE_CLASS} {` +
      ` outline: 1px solid ${colors.cursor.css};` +
      ` outline-offset: -1px;` +
      `}` +
      `${this._terminalSelector} .${ROW_CONTAINER_CLASS} .${RowCss.CURSOR_CLASS}.${RowCss.CURSOR_STYLE_BAR_CLASS} {` +
      ` box-shadow: ${this._optionsService.rawOptions.cursorWidth}px 0 0 ${colors.cursor.css} inset;` +
      `}` +
      `${this._terminalSelector} .${ROW_CONTAINER_CLASS} .${RowCss.CURSOR_CLASS}.${RowCss.CURSOR_STYLE_UNDERLINE_CLASS} {` +
      ` border-bottom: 1px ${colors.cursor.css};` +
      ` border-bottom-style: solid;` +
      ` height: calc(100% - 1px);` +
      `}`;
    // Selection
    styles +=
      `${this._terminalSelector} .${SELECTION_CLASS} {` +
      ` position: absolute;` +
      ` top: 0;` +
      ` left: 0;` +
      ` z-index: 1;` +
      ` pointer-events: none;` +
      `}` +
      `${this._terminalSelector}.focus .${SELECTION_CLASS} div {` +
      ` position: absolute;` +
      ` background-color: ${colors.selectionBackgroundOpaque.css};` +
      `}` +
      `${this._terminalSelector} .${SELECTION_CLASS} div {` +
      ` position: absolute;` +
      ` background-color: ${colors.selectionInactiveBackgroundOpaque.css};` +
      `}`;
    // Colors
    for (const [i, c] of colors.ansi.entries()) {
      styles +=
        `${this._terminalSelector} .${FG_CLASS_PREFIX}${i} { color: ${c.css}; }` +
        `${this._terminalSelector} .${FG_CLASS_PREFIX}${i}.${RowCss.DIM_CLASS} { color: ${color.multiplyOpacity(c, 0.5).css}; }` +
        `${this._terminalSelector} .${BG_CLASS_PREFIX}${i} { background-color: ${c.css}; }`;
    }
    styles +=
      `${this._terminalSelector} .${FG_CLASS_PREFIX}${INVERTED_DEFAULT_COLOR} { color: ${color.opaque(colors.background).css}; }` +
      `${this._terminalSelector} .${FG_CLASS_PREFIX}${INVERTED_DEFAULT_COLOR}.${RowCss.DIM_CLASS} { color: ${color.multiplyOpacity(color.opaque(colors.background), 0.5).css}; }` +
      `${this._terminalSelector} .${BG_CLASS_PREFIX}${INVERTED_DEFAULT_COLOR} { background-color: ${colors.foreground.css}; }`;

    this._themeStyleElement.textContent = styles;
  }

  /**
   * default letter spacing
   * Due to rounding issues in dimensions dpr calc glyph might render
   * slightly too wide or too narrow. The method corrects the stacking offsets
   * by applying a default letter-spacing for all chars.
   * The value gets passed to the row factory to avoid setting this value again
   * (render speedup is roughly 10%).
   */
  private _setDefaultSpacing(): void {
    // measure same char as in CharSizeService to get the base deviation
    const spacing = this.dimensions.css.cell.width - this._widthCache.get('W', false, false);
    this._rowContainer.style.letterSpacing = `${spacing}px`;
    this._rowFactory.defaultSpacing = spacing;
  }

  public handleDevicePixelRatioChange(): void {
    this._updateDimensions();
    this._widthCache.clear();
    this._setDefaultSpacing();
  }

  private _refreshRowElements(cols: number, rows: number): void {
    // Add missing elements
    for (let i = this._rowElements.length; i <= rows; i++) {
      const row = this._document.createElement('div');
      this._rowContainer.appendChild(row);
      this._rowElements.push(row);
    }
    // Remove excess elements
    while (this._rowElements.length > rows) {
      this._rowContainer.removeChild(this._rowElements.pop()!);
    }
  }

  public handleResize(cols: number, rows: number): void {
    this._refreshRowElements(cols, rows);
    this._updateDimensions();
    this.handleSelectionChanged(this._selectionRenderModel.selectionStart, this._selectionRenderModel.selectionEnd, this._selectionRenderModel.columnSelectMode);
  }

  public handleCharSizeChanged(): void {
    this._updateDimensions();
    this._widthCache.clear();
    this._setDefaultSpacing();
  }

  public handleBlur(): void {
    this._rowContainer.classList.remove(FOCUS_CLASS);
    this.renderRows(0, this._bufferService.rows - 1);
  }

  public handleFocus(): void {
    this._rowContainer.classList.add(FOCUS_CLASS);
    this.renderRows(this._bufferService.buffer.y, this._bufferService.buffer.y);
  }

  public handleSelectionChanged(start: [number, number] | undefined, end: [number, number] | undefined, columnSelectMode: boolean): void {
    // Remove all selections
    this._selectionContainer.replaceChildren();
    this._rowFactory.handleSelectionChanged(start, end, columnSelectMode);
    this.renderRows(0, this._bufferService.rows - 1);

    // Selection does not exist
    if (!start || !end) {
      return;
    }

    this._selectionRenderModel.update(this._terminal, start, end, columnSelectMode);
    if (!this._selectionRenderModel.hasSelection) {
      return;
    }

    // Translate from buffer position to viewport position
    const viewportStartRow = this._selectionRenderModel.viewportStartRow;
    const viewportEndRow = this._selectionRenderModel.viewportEndRow;
    const viewportCappedStartRow = this._selectionRenderModel.viewportCappedStartRow;
    const viewportCappedEndRow = this._selectionRenderModel.viewportCappedEndRow;

    // Create the selections
    const documentFragment = this._document.createDocumentFragment();

    if (columnSelectMode) {
      const isXFlipped = start[0] > end[0];
      documentFragment.appendChild(
        this._createSelectionElement(viewportCappedStartRow, isXFlipped ? end[0] : start[0], isXFlipped ? start[0] : end[0], viewportCappedEndRow - viewportCappedStartRow + 1)
      );
    } else {
      // Draw first row
      const startCol = viewportStartRow === viewportCappedStartRow ? start[0] : 0;
      const endCol = viewportCappedStartRow === viewportEndRow ? end[0] : this._bufferService.cols;
      documentFragment.appendChild(this._createSelectionElement(viewportCappedStartRow, startCol, endCol));
      // Draw middle rows
      const middleRowsCount = viewportCappedEndRow - viewportCappedStartRow - 1;
      documentFragment.appendChild(this._createSelectionElement(viewportCappedStartRow + 1, 0, this._bufferService.cols, middleRowsCount));
      // Draw final row
      if (viewportCappedStartRow !== viewportCappedEndRow) {
        // Only draw viewportEndRow if it's not the same as viewporttartRow
        const endCol = viewportEndRow === viewportCappedEndRow ? end[0] : this._bufferService.cols;
        documentFragment.appendChild(this._createSelectionElement(viewportCappedEndRow, 0, endCol));
      }
    }
    this._selectionContainer.appendChild(documentFragment);
  }

  /**
   * Creates a selection element at the specified position.
   * @param row The row of the selection.
   * @param colStart The start column.
   * @param colEnd The end columns.
   */
  private _createSelectionElement(row: number, colStart: number, colEnd: number, rowCount: number = 1): HTMLElement {
    const element = this._document.createElement('div');
    const left = colStart * this.dimensions.css.cell.width;
    let width = this.dimensions.css.cell.width * (colEnd - colStart);
    if (left + width > this.dimensions.css.canvas.width) {
      width = this.dimensions.css.canvas.width - left;
    }

    element.style.height = `${rowCount * this.dimensions.css.cell.height}px`;
    element.style.top = `${row * this.dimensions.css.cell.height}px`;
    element.style.left = `${left}px`;
    element.style.width = `${width}px`;
    return element;
  }

  public handleCursorMove(): void {
    // No-op, the cursor is drawn when rows are drawn
  }

  private _handleOptionsChanged(): void {
    // Force a refresh
    this._updateDimensions();
    // Refresh CSS
    this._injectCss(this._themeService.colors);
    // update spacing cache
    this._widthCache.setFont(
      this._optionsService.rawOptions.fontFamily,
      this._optionsService.rawOptions.fontSize,
      this._optionsService.rawOptions.fontWeight,
      this._optionsService.rawOptions.fontWeightBold
    );
    this._setDefaultSpacing();
  }

  public clear(): void {
    for (const e of this._rowElements) {
      /**
       * NOTE: This used to be `e.innerText = '';` but that doesn't work when using `jsdom` and
       * `@testing-library/react`
       *
       * references:
       * - https://github.com/testing-library/react-testing-library/issues/1146
       * - https://github.com/jsdom/jsdom/issues/1245
       */
      e.replaceChildren();
    }
  }

  public renderRows(start: number, end: number): void {
    const buffer = this._bufferService.buffer;
    const cursorAbsoluteY = buffer.ybase + buffer.y;
    const cursorX = Math.min(buffer.x, this._bufferService.cols - 1);
    const cursorBlink = this._coreService.decPrivateModes.cursorBlink ?? this._optionsService.rawOptions.cursorBlink;
    const cursorStyle = this._coreService.decPrivateModes.cursorStyle ?? this._optionsService.rawOptions.cursorStyle;
    const cursorInactiveStyle = this._optionsService.rawOptions.cursorInactiveStyle;

    for (let y = start; y <= end; y++) {
      const row = y + buffer.ydisp;
      const rowElement = this._rowElements[y];
      const lineData = buffer.lines.get(row);
      if (!rowElement || !lineData) {
        break;
      }
      rowElement.replaceChildren(
        ...this._rowFactory.createRow(
          lineData,
          row,
          row === cursorAbsoluteY,
          cursorStyle,
          cursorInactiveStyle,
          cursorX,
          cursorBlink,
          this.dimensions.css.cell.width,
          this._widthCache,
          -1,
          -1
        )
      );
    }
  }

  private get _terminalSelector(): string {
    return `.${TERMINAL_CLASS_PREFIX}${this._terminalClass}`;
  }

  private _handleLinkHover(e: ILinkifierEvent): void {
    this._setCellUnderline(e.x1, e.x2, e.y1, e.y2, e.cols, true);
  }

  private _handleLinkLeave(e: ILinkifierEvent): void {
    this._setCellUnderline(e.x1, e.x2, e.y1, e.y2, e.cols, false);
  }

  private _setCellUnderline(x: number, x2: number, y: number, y2: number, cols: number, enabled: boolean): void {
    /**
     * NOTE: The linkifier may send out of viewport y-values if:
     * - negative y-value: the link started at a higher line
     * - y-value >= maxY: the link ends at a line below viewport
     *
     * For negative y-values we can simply adjust x = 0,
     * as higher up link start means, that everything from
     * (0,0) is a link under top-down-left-right char progression
     *
     * Additionally there might be a small chance of out-of-sync x|y-values
     * from a race condition of render updates vs. link event handler execution:
     * - (sync) resize: chances terminal buffer in sync, schedules render update async
     * - (async) link handler race condition: new buffer metrics, but still on old render state
     * - (async) render update: brings term metrics and render state back in sync
     */
    // clip coords into viewport
    if (y < 0) x = 0;
    if (y2 < 0) x2 = 0;
    const maxY = this._bufferService.rows - 1;
    y = Math.max(Math.min(y, maxY), 0);
    y2 = Math.max(Math.min(y2, maxY), 0);

    cols = Math.min(cols, this._bufferService.cols);
    const buffer = this._bufferService.buffer;
    const cursorAbsoluteY = buffer.ybase + buffer.y;
    const cursorX = Math.min(buffer.x, cols - 1);
    const cursorBlink = this._optionsService.rawOptions.cursorBlink;
    const cursorStyle = this._optionsService.rawOptions.cursorStyle;
    const cursorInactiveStyle = this._optionsService.rawOptions.cursorInactiveStyle;

    // refresh rows within link range
    for (let i = y; i <= y2; ++i) {
      const row = i + buffer.ydisp;
      const rowElement = this._rowElements[i];
      const bufferline = buffer.lines.get(row);
      if (!rowElement || !bufferline) {
        break;
      }
      rowElement.replaceChildren(
        ...this._rowFactory.createRow(
          bufferline,
          row,
          row === cursorAbsoluteY,
          cursorStyle,
          cursorInactiveStyle,
          cursorX,
          cursorBlink,
          this.dimensions.css.cell.width,
          this._widthCache,
          enabled ? (i === y ? x : 0) : -1,
          enabled ? ((i === y2 ? x2 : cols) - 1) : -1
        )
      );
    }
  }
}
