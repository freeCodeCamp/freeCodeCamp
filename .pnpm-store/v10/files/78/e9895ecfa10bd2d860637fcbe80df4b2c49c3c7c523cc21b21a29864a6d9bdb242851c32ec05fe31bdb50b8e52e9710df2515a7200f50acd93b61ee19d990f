/**
 * Copyright (c) 2017 The xterm.js authors. All rights reserved.
 * @license MIT
 */

import { IBufferRange, ILinkifier2 } from 'browser/Types';
import { getCoordsRelativeToElement } from 'browser/input/Mouse';
import { moveToCellSequence } from 'browser/input/MoveToCell';
import { SelectionModel } from 'browser/selection/SelectionModel';
import { ISelectionRedrawRequestEvent, ISelectionRequestScrollLinesEvent } from 'browser/selection/Types';
import { ICoreBrowserService, IMouseService, IRenderService, ISelectionService } from 'browser/services/Services';
import { Disposable, toDisposable } from 'vs/base/common/lifecycle';
import * as Browser from 'common/Platform';
import { IBufferLine, IDisposable } from 'common/Types';
import { getRangeLength } from 'common/buffer/BufferRange';
import { CellData } from 'common/buffer/CellData';
import { IBuffer } from 'common/buffer/Types';
import { IBufferService, ICoreService, IOptionsService } from 'common/services/Services';
import { Emitter } from 'vs/base/common/event';

/**
 * The number of pixels the mouse needs to be above or below the viewport in
 * order to scroll at the maximum speed.
 */
const DRAG_SCROLL_MAX_THRESHOLD = 50;

/**
 * The maximum scrolling speed
 */
const DRAG_SCROLL_MAX_SPEED = 15;

/**
 * The number of milliseconds between drag scroll updates.
 */
const DRAG_SCROLL_INTERVAL = 50;

/**
 * The maximum amount of time that can have elapsed for an alt click to move the
 * cursor.
 */
const ALT_CLICK_MOVE_CURSOR_TIME = 500;

const NON_BREAKING_SPACE_CHAR = String.fromCharCode(160);
const ALL_NON_BREAKING_SPACE_REGEX = new RegExp(NON_BREAKING_SPACE_CHAR, 'g');

/**
 * Represents a position of a word on a line.
 */
interface IWordPosition {
  start: number;
  length: number;
}

/**
 * A selection mode, this drives how the selection behaves on mouse move.
 */
export const enum SelectionMode {
  NORMAL,
  WORD,
  LINE,
  COLUMN
}

/**
 * A class that manages the selection of the terminal. With help from
 * SelectionModel, SelectionService handles with all logic associated with
 * dealing with the selection, including handling mouse interaction, wide
 * characters and fetching the actual text within the selection. Rendering is
 * not handled by the SelectionService but the onRedrawRequest event is fired
 * when the selection is ready to be redrawn (on an animation frame).
 */
export class SelectionService extends Disposable implements ISelectionService {
  public serviceBrand: undefined;

  protected _model: SelectionModel;

  /**
   * The amount to scroll every drag scroll update (depends on how far the mouse
   * drag is above or below the terminal).
   */
  private _dragScrollAmount: number = 0;

  /**
   * The current selection mode.
   */
  protected _activeSelectionMode: SelectionMode;

  /**
   * A setInterval timer that is active while the mouse is down whose callback
   * scrolls the viewport when necessary.
   */
  private _dragScrollIntervalTimer: number | undefined;

  /**
   * The animation frame ID used for refreshing the selection.
   */
  private _refreshAnimationFrame: number | undefined;

  /**
   * Whether selection is enabled.
   */
  private _enabled = true;

  private _mouseMoveListener: EventListener;
  private _mouseUpListener: EventListener;
  private _trimListener: IDisposable;
  private _workCell: CellData = new CellData();

  private _mouseDownTimeStamp: number = 0;
  private _oldHasSelection: boolean = false;
  private _oldSelectionStart: [number, number] | undefined = undefined;
  private _oldSelectionEnd: [number, number] | undefined = undefined;

  private readonly _onLinuxMouseSelection = this._register(new Emitter<string>());
  public readonly onLinuxMouseSelection = this._onLinuxMouseSelection.event;
  private readonly _onRedrawRequest = this._register(new Emitter<ISelectionRedrawRequestEvent>());
  public readonly onRequestRedraw = this._onRedrawRequest.event;
  private readonly _onSelectionChange = this._register(new Emitter<void>());
  public readonly onSelectionChange = this._onSelectionChange.event;
  private readonly _onRequestScrollLines = this._register(new Emitter<ISelectionRequestScrollLinesEvent>());
  public readonly onRequestScrollLines = this._onRequestScrollLines.event;

  constructor(
    private readonly _element: HTMLElement,
    private readonly _screenElement: HTMLElement,
    private readonly _linkifier: ILinkifier2,
    @IBufferService private readonly _bufferService: IBufferService,
    @ICoreService private readonly _coreService: ICoreService,
    @IMouseService private readonly _mouseService: IMouseService,
    @IOptionsService private readonly _optionsService: IOptionsService,
    @IRenderService private readonly _renderService: IRenderService,
    @ICoreBrowserService private readonly _coreBrowserService: ICoreBrowserService
  ) {
    super();

    // Init listeners
    this._mouseMoveListener = event => this._handleMouseMove(event as MouseEvent);
    this._mouseUpListener = event => this._handleMouseUp(event as MouseEvent);
    this._coreService.onUserInput(() => {
      if (this.hasSelection) {
        this.clearSelection();
      }
    });
    this._trimListener = this._bufferService.buffer.lines.onTrim(amount => this._handleTrim(amount));
    this._register(this._bufferService.buffers.onBufferActivate(e => this._handleBufferActivate(e)));

    this.enable();

    this._model = new SelectionModel(this._bufferService);
    this._activeSelectionMode = SelectionMode.NORMAL;

    this._register(toDisposable(() => {
      this._removeMouseDownListeners();
    }));

    // Clear selection when resizing vertically. This experience could be improved, this is the
    // simple option to fix the buggy behavior. https://github.com/xtermjs/xterm.js/issues/5300
    this._register(this._bufferService.onResize(e => {
      if (e.rowsChanged) {
        this.clearSelection();
      }
    }));
  }

  public reset(): void {
    this.clearSelection();
  }

  /**
   * Disables the selection manager. This is useful for when terminal mouse
   * are enabled.
   */
  public disable(): void {
    this.clearSelection();
    this._enabled = false;
  }

  /**
   * Enable the selection manager.
   */
  public enable(): void {
    this._enabled = true;
  }

  public get selectionStart(): [number, number] | undefined { return this._model.finalSelectionStart; }
  public get selectionEnd(): [number, number] | undefined { return this._model.finalSelectionEnd; }

  /**
   * Gets whether there is an active text selection.
   */
  public get hasSelection(): boolean {
    const start = this._model.finalSelectionStart;
    const end = this._model.finalSelectionEnd;
    if (!start || !end) {
      return false;
    }
    return start[0] !== end[0] || start[1] !== end[1];
  }

  /**
   * Gets the text currently selected.
   */
  public get selectionText(): string {
    const start = this._model.finalSelectionStart;
    const end = this._model.finalSelectionEnd;
    if (!start || !end) {
      return '';
    }

    const buffer = this._bufferService.buffer;
    const result: string[] = [];

    if (this._activeSelectionMode === SelectionMode.COLUMN) {
      // Ignore zero width selections
      if (start[0] === end[0]) {
        return '';
      }

      // For column selection it's not enough to rely on final selection's swapping of reversed
      // values, it also needs the x coordinates to swap independently of the y coordinate is needed
      const startCol = start[0] < end[0] ? start[0] : end[0];
      const endCol = start[0] < end[0] ? end[0] : start[0];
      for (let i = start[1]; i <= end[1]; i++) {
        const lineText = buffer.translateBufferLineToString(i, true, startCol, endCol);
        result.push(lineText);
      }
    } else {
      // Get first row
      const startRowEndCol = start[1] === end[1] ? end[0] : undefined;
      result.push(buffer.translateBufferLineToString(start[1], true, start[0], startRowEndCol));

      // Get middle rows
      for (let i = start[1] + 1; i <= end[1] - 1; i++) {
        const bufferLine = buffer.lines.get(i);
        const lineText = buffer.translateBufferLineToString(i, true);
        if (bufferLine?.isWrapped) {
          result[result.length - 1] += lineText;
        } else {
          result.push(lineText);
        }
      }

      // Get final row
      if (start[1] !== end[1]) {
        const bufferLine = buffer.lines.get(end[1]);
        const lineText = buffer.translateBufferLineToString(end[1], true, 0, end[0]);
        if (bufferLine && bufferLine!.isWrapped) {
          result[result.length - 1] += lineText;
        } else {
          result.push(lineText);
        }
      }
    }

    // Format string by replacing non-breaking space chars with regular spaces
    // and joining the array into a multi-line string.
    const formattedResult = result.map(line => {
      return line.replace(ALL_NON_BREAKING_SPACE_REGEX, ' ');
    }).join(Browser.isWindows ? '\r\n' : '\n');

    return formattedResult;
  }

  /**
   * Clears the current terminal selection.
   */
  public clearSelection(): void {
    this._model.clearSelection();
    this._removeMouseDownListeners();
    this.refresh();
    this._onSelectionChange.fire();
  }

  /**
   * Queues a refresh, redrawing the selection on the next opportunity.
   * @param isLinuxMouseSelection Whether the selection should be registered as a new
   * selection on Linux.
   */
  public refresh(isLinuxMouseSelection?: boolean): void {
    // Queue the refresh for the renderer
    if (!this._refreshAnimationFrame) {
      this._refreshAnimationFrame = this._coreBrowserService.window.requestAnimationFrame(() => this._refresh());
    }

    // If the platform is Linux and the refresh call comes from a mouse event,
    // we need to update the selection for middle click to paste selection.
    if (Browser.isLinux && isLinuxMouseSelection) {
      const selectionText = this.selectionText;
      if (selectionText.length) {
        this._onLinuxMouseSelection.fire(this.selectionText);
      }
    }
  }

  /**
   * Fires the refresh event, causing consumers to pick it up and redraw the
   * selection state.
   */
  private _refresh(): void {
    this._refreshAnimationFrame = undefined;
    this._onRedrawRequest.fire({
      start: this._model.finalSelectionStart,
      end: this._model.finalSelectionEnd,
      columnSelectMode: this._activeSelectionMode === SelectionMode.COLUMN
    });
  }

  /**
   * Checks if the current click was inside the current selection
   * @param event The mouse event
   */
  private _isClickInSelection(event: MouseEvent): boolean {
    const coords = this._getMouseBufferCoords(event);
    const start = this._model.finalSelectionStart;
    const end = this._model.finalSelectionEnd;

    if (!start || !end || !coords) {
      return false;
    }

    return this._areCoordsInSelection(coords, start, end);
  }

  public isCellInSelection(x: number, y: number): boolean {
    const start = this._model.finalSelectionStart;
    const end = this._model.finalSelectionEnd;
    if (!start || !end) {
      return false;
    }
    return this._areCoordsInSelection([x, y], start, end);
  }

  protected _areCoordsInSelection(coords: [number, number], start: [number, number], end: [number, number]): boolean {
    return (coords[1] > start[1] && coords[1] < end[1]) ||
        (start[1] === end[1] && coords[1] === start[1] && coords[0] >= start[0] && coords[0] < end[0]) ||
        (start[1] < end[1] && coords[1] === end[1] && coords[0] < end[0]) ||
        (start[1] < end[1] && coords[1] === start[1] && coords[0] >= start[0]);
  }

  /**
   * Selects word at the current mouse event coordinates.
   * @param event The mouse event.
   */
  private _selectWordAtCursor(event: MouseEvent, allowWhitespaceOnlySelection: boolean): boolean {
    // Check if there is a link under the cursor first and select that if so
    const range = this._linkifier.currentLink?.link?.range;
    if (range) {
      this._model.selectionStart = [range.start.x - 1, range.start.y - 1];
      this._model.selectionStartLength = getRangeLength(range, this._bufferService.cols);
      this._model.selectionEnd = undefined;
      return true;
    }

    const coords = this._getMouseBufferCoords(event);
    if (coords) {
      this._selectWordAt(coords, allowWhitespaceOnlySelection);
      this._model.selectionEnd = undefined;
      return true;
    }
    return false;
  }

  /**
   * Selects all text within the terminal.
   */
  public selectAll(): void {
    this._model.isSelectAllActive = true;
    this.refresh();
    this._onSelectionChange.fire();
  }

  public selectLines(start: number, end: number): void {
    this._model.clearSelection();
    start = Math.max(start, 0);
    end = Math.min(end, this._bufferService.buffer.lines.length - 1);
    this._model.selectionStart = [0, start];
    this._model.selectionEnd = [this._bufferService.cols, end];
    this.refresh();
    this._onSelectionChange.fire();
  }

  /**
   * Handle the buffer being trimmed, adjust the selection position.
   * @param amount The amount the buffer is being trimmed.
   */
  private _handleTrim(amount: number): void {
    const needsRefresh = this._model.handleTrim(amount);
    if (needsRefresh) {
      this.refresh();
    }
  }

  /**
   * Gets the 0-based [x, y] buffer coordinates of the current mouse event.
   * @param event The mouse event.
   */
  private _getMouseBufferCoords(event: MouseEvent): [number, number] | undefined {
    const coords = this._mouseService.getCoords(event, this._screenElement, this._bufferService.cols, this._bufferService.rows, true);
    if (!coords) {
      return undefined;
    }

    // Convert to 0-based
    coords[0]--;
    coords[1]--;

    // Convert viewport coords to buffer coords
    coords[1] += this._bufferService.buffer.ydisp;
    return coords;
  }

  /**
   * Gets the amount the viewport should be scrolled based on how far out of the
   * terminal the mouse is.
   * @param event The mouse event.
   */
  private _getMouseEventScrollAmount(event: MouseEvent): number {
    let offset = getCoordsRelativeToElement(this._coreBrowserService.window, event, this._screenElement)[1];
    const terminalHeight = this._renderService.dimensions.css.canvas.height;
    if (offset >= 0 && offset <= terminalHeight) {
      return 0;
    }
    if (offset > terminalHeight) {
      offset -= terminalHeight;
    }

    offset = Math.min(Math.max(offset, -DRAG_SCROLL_MAX_THRESHOLD), DRAG_SCROLL_MAX_THRESHOLD);
    offset /= DRAG_SCROLL_MAX_THRESHOLD;
    return (offset / Math.abs(offset)) + Math.round(offset * (DRAG_SCROLL_MAX_SPEED - 1));
  }

  /**
   * Returns whether the selection manager should force selection, regardless of
   * whether the terminal is in mouse events mode.
   * @param event The mouse event.
   */
  public shouldForceSelection(event: MouseEvent): boolean {
    if (Browser.isMac) {
      return event.altKey && this._optionsService.rawOptions.macOptionClickForcesSelection;
    }

    return event.shiftKey;
  }

  /**
   * Handles te mousedown event, setting up for a new selection.
   * @param event The mousedown event.
   */
  public handleMouseDown(event: MouseEvent): void {
    this._mouseDownTimeStamp = event.timeStamp;
    // If we have selection, we want the context menu on right click even if the
    // terminal is in mouse mode.
    if (event.button === 2 && this.hasSelection) {
      return;
    }

    // Only action the primary button
    if (event.button !== 0) {
      return;
    }

    // Allow selection when using a specific modifier key, even when disabled
    if (!this._enabled) {
      if (!this.shouldForceSelection(event)) {
        return;
      }

      // Don't send the mouse down event to the current process, we want to select
      event.stopPropagation();
    }

    // Tell the browser not to start a regular selection
    event.preventDefault();

    // Reset drag scroll state
    this._dragScrollAmount = 0;

    if (this._enabled && event.shiftKey) {
      this._handleIncrementalClick(event);
    } else {
      if (event.detail === 1) {
        this._handleSingleClick(event);
      } else if (event.detail === 2) {
        this._handleDoubleClick(event);
      } else if (event.detail === 3) {
        this._handleTripleClick(event);
      }
    }

    this._addMouseDownListeners();
    this.refresh(true);
  }

  /**
   * Adds listeners when mousedown is triggered.
   */
  private _addMouseDownListeners(): void {
    // Listen on the document so that dragging outside of viewport works
    if (this._screenElement.ownerDocument) {
      this._screenElement.ownerDocument.addEventListener('mousemove', this._mouseMoveListener);
      this._screenElement.ownerDocument.addEventListener('mouseup', this._mouseUpListener);
    }
    this._dragScrollIntervalTimer = this._coreBrowserService.window.setInterval(() => this._dragScroll(), DRAG_SCROLL_INTERVAL);
  }

  /**
   * Removes the listeners that are registered when mousedown is triggered.
   */
  private _removeMouseDownListeners(): void {
    if (this._screenElement.ownerDocument) {
      this._screenElement.ownerDocument.removeEventListener('mousemove', this._mouseMoveListener);
      this._screenElement.ownerDocument.removeEventListener('mouseup', this._mouseUpListener);
    }
    this._coreBrowserService.window.clearInterval(this._dragScrollIntervalTimer);
    this._dragScrollIntervalTimer = undefined;
  }

  /**
   * Performs an incremental click, setting the selection end position to the mouse
   * position.
   * @param event The mouse event.
   */
  private _handleIncrementalClick(event: MouseEvent): void {
    if (this._model.selectionStart) {
      this._model.selectionEnd = this._getMouseBufferCoords(event);
    }
  }

  /**
   * Performs a single click, resetting relevant state and setting the selection
   * start position.
   * @param event The mouse event.
   */
  private _handleSingleClick(event: MouseEvent): void {
    this._model.selectionStartLength = 0;
    this._model.isSelectAllActive = false;
    this._activeSelectionMode = this.shouldColumnSelect(event) ? SelectionMode.COLUMN : SelectionMode.NORMAL;

    // Initialize the new selection
    this._model.selectionStart = this._getMouseBufferCoords(event);
    if (!this._model.selectionStart) {
      return;
    }
    this._model.selectionEnd = undefined;

    // Ensure the line exists
    const line = this._bufferService.buffer.lines.get(this._model.selectionStart[1]);
    if (!line) {
      return;
    }

    // Return early if the click event is not in the buffer (eg. in scroll bar)
    if (line.length === this._model.selectionStart[0]) {
      return;
    }

    // If the mouse is over the second half of a wide character, adjust the
    // selection to cover the whole character
    if (line.hasWidth(this._model.selectionStart[0]) === 0) {
      this._model.selectionStart[0]++;
    }
  }

  /**
   * Performs a double click, selecting the current word.
   * @param event The mouse event.
   */
  private _handleDoubleClick(event: MouseEvent): void {
    if (this._selectWordAtCursor(event, true)) {
      this._activeSelectionMode = SelectionMode.WORD;
    }
  }

  /**
   * Performs a triple click, selecting the current line and activating line
   * select mode.
   * @param event The mouse event.
   */
  private _handleTripleClick(event: MouseEvent): void {
    const coords = this._getMouseBufferCoords(event);
    if (coords) {
      this._activeSelectionMode = SelectionMode.LINE;
      this._selectLineAt(coords[1]);
    }
  }

  /**
   * Returns whether the selection manager should operate in column select mode
   * @param event the mouse or keyboard event
   */
  public shouldColumnSelect(event: KeyboardEvent | MouseEvent): boolean {
    return event.altKey && !(Browser.isMac && this._optionsService.rawOptions.macOptionClickForcesSelection);
  }

  /**
   * Handles the mousemove event when the mouse button is down, recording the
   * end of the selection and refreshing the selection.
   * @param event The mousemove event.
   */
  private _handleMouseMove(event: MouseEvent): void {
    // If the mousemove listener is active it means that a selection is
    // currently being made, we should stop propagation to prevent mouse events
    // to be sent to the pty.
    event.stopImmediatePropagation();

    // Do nothing if there is no selection start, this can happen if the first
    // click in the terminal is an incremental click
    if (!this._model.selectionStart) {
      return;
    }

    // Record the previous position so we know whether to redraw the selection
    // at the end.
    const previousSelectionEnd = this._model.selectionEnd ? [this._model.selectionEnd[0], this._model.selectionEnd[1]] : null;

    // Set the initial selection end based on the mouse coordinates
    this._model.selectionEnd = this._getMouseBufferCoords(event);
    if (!this._model.selectionEnd) {
      this.refresh(true);
      return;
    }

    // Select the entire line if line select mode is active.
    if (this._activeSelectionMode === SelectionMode.LINE) {
      if (this._model.selectionEnd[1] < this._model.selectionStart[1]) {
        this._model.selectionEnd[0] = 0;
      } else {
        this._model.selectionEnd[0] = this._bufferService.cols;
      }
    } else if (this._activeSelectionMode === SelectionMode.WORD) {
      this._selectToWordAt(this._model.selectionEnd);
    }

    // Determine the amount of scrolling that will happen.
    this._dragScrollAmount = this._getMouseEventScrollAmount(event);

    // If the cursor was above or below the viewport, make sure it's at the
    // start or end of the viewport respectively. This should only happen when
    // NOT in column select mode.
    if (this._activeSelectionMode !== SelectionMode.COLUMN) {
      if (this._dragScrollAmount > 0) {
        this._model.selectionEnd[0] = this._bufferService.cols;
      } else if (this._dragScrollAmount < 0) {
        this._model.selectionEnd[0] = 0;
      }
    }

    // If the character is a wide character include the cell to the right in the
    // selection. Note that selections at the very end of the line will never
    // have a character.
    const buffer = this._bufferService.buffer;
    if (this._model.selectionEnd[1] < buffer.lines.length) {
      const line = buffer.lines.get(this._model.selectionEnd[1]);
      if (line && line.hasWidth(this._model.selectionEnd[0]) === 0) {
        if (this._model.selectionEnd[0] < this._bufferService.cols) {
          this._model.selectionEnd[0]++;
        }
      }
    }

    // Only draw here if the selection changes.
    if (!previousSelectionEnd ||
      previousSelectionEnd[0] !== this._model.selectionEnd[0] ||
      previousSelectionEnd[1] !== this._model.selectionEnd[1]) {
      this.refresh(true);
    }
  }

  /**
   * The callback that occurs every DRAG_SCROLL_INTERVAL ms that does the
   * scrolling of the viewport.
   */
  private _dragScroll(): void {
    if (!this._model.selectionEnd || !this._model.selectionStart) {
      return;
    }
    if (this._dragScrollAmount) {
      this._onRequestScrollLines.fire({ amount: this._dragScrollAmount, suppressScrollEvent: false });
      // Re-evaluate selection
      // If the cursor was above or below the viewport, make sure it's at the
      // start or end of the viewport respectively. This should only happen when
      // NOT in column select mode.
      const buffer = this._bufferService.buffer;
      if (this._dragScrollAmount > 0) {
        if (this._activeSelectionMode !== SelectionMode.COLUMN) {
          this._model.selectionEnd[0] = this._bufferService.cols;
        }
        this._model.selectionEnd[1] = Math.min(buffer.ydisp + this._bufferService.rows, buffer.lines.length - 1);
      } else {
        if (this._activeSelectionMode !== SelectionMode.COLUMN) {
          this._model.selectionEnd[0] = 0;
        }
        this._model.selectionEnd[1] = buffer.ydisp;
      }
      this.refresh();
    }
  }

  /**
   * Handles the mouseup event, removing the mousedown listeners.
   * @param event The mouseup event.
   */
  private _handleMouseUp(event: MouseEvent): void {
    const timeElapsed = event.timeStamp - this._mouseDownTimeStamp;

    this._removeMouseDownListeners();

    if (this.selectionText.length <= 1 && timeElapsed < ALT_CLICK_MOVE_CURSOR_TIME && event.altKey && this._optionsService.rawOptions.altClickMovesCursor) {
      if (this._bufferService.buffer.ybase === this._bufferService.buffer.ydisp) {
        const coordinates = this._mouseService.getCoords(
          event,
          this._element,
          this._bufferService.cols,
          this._bufferService.rows,
          false
        );
        if (coordinates && coordinates[0] !== undefined && coordinates[1] !== undefined) {
          const sequence = moveToCellSequence(coordinates[0] - 1, coordinates[1] - 1, this._bufferService, this._coreService.decPrivateModes.applicationCursorKeys);
          this._coreService.triggerDataEvent(sequence, true);
        }
      }
    } else {
      this._fireEventIfSelectionChanged();
    }
  }

  private _fireEventIfSelectionChanged(): void {
    const start = this._model.finalSelectionStart;
    const end = this._model.finalSelectionEnd;
    const hasSelection = !!start && !!end && (start[0] !== end[0] || start[1] !== end[1]);

    if (!hasSelection) {
      if (this._oldHasSelection) {
        this._fireOnSelectionChange(start, end, hasSelection);
      }
      return;
    }

    // Sanity check, these should not be undefined as there is a selection
    if (!start || !end) {
      return;
    }

    if (!this._oldSelectionStart || !this._oldSelectionEnd || (
      start[0] !== this._oldSelectionStart[0] || start[1] !== this._oldSelectionStart[1] ||
      end[0] !== this._oldSelectionEnd[0] || end[1] !== this._oldSelectionEnd[1])) {

      this._fireOnSelectionChange(start, end, hasSelection);
    }
  }

  private _fireOnSelectionChange(start: [number, number] | undefined, end: [number, number] | undefined, hasSelection: boolean): void {
    this._oldSelectionStart = start;
    this._oldSelectionEnd = end;
    this._oldHasSelection = hasSelection;
    this._onSelectionChange.fire();
  }

  private _handleBufferActivate(e: {activeBuffer: IBuffer, inactiveBuffer: IBuffer}): void {
    this.clearSelection();
    // Only adjust the selection on trim, shiftElements is rarely used (only in
    // reverseIndex) and delete in a splice is only ever used when the same
    // number of elements was just added. Given this is could actually be
    // beneficial to leave the selection as is for these cases.
    this._trimListener.dispose();
    this._trimListener = e.activeBuffer.lines.onTrim(amount => this._handleTrim(amount));
  }

  /**
   * Converts a viewport column (0 to cols - 1) to the character index on the
   * buffer line, the latter takes into account wide and null characters.
   * @param bufferLine The buffer line to use.
   * @param x The x index in the buffer line to convert.
   */
  private _convertViewportColToCharacterIndex(bufferLine: IBufferLine, x: number): number {
    let charIndex = x;
    for (let i = 0; x >= i; i++) {
      const length = bufferLine.loadCell(i, this._workCell).getChars().length;
      if (this._workCell.getWidth() === 0) {
        // Wide characters aren't included in the line string so decrement the
        // index so the index is back on the wide character.
        charIndex--;
      } else if (length > 1 && x !== i) {
        // Emojis take up multiple characters, so adjust accordingly. For these
        // we don't want ot include the character at the column as we're
        // returning the start index in the string, not the end index.
        charIndex += length - 1;
      }
    }
    return charIndex;
  }

  public setSelection(col: number, row: number, length: number): void {
    this._model.clearSelection();
    this._removeMouseDownListeners();
    this._model.selectionStart = [col, row];
    this._model.selectionStartLength = length;
    this.refresh();
    this._fireEventIfSelectionChanged();
  }

  public rightClickSelect(ev: MouseEvent): void {
    if (!this._isClickInSelection(ev)) {
      if (this._selectWordAtCursor(ev, false)) {
        this.refresh(true);
      }
      this._fireEventIfSelectionChanged();
    }
  }

  /**
   * Gets positional information for the word at the coordinated specified.
   * @param coords The coordinates to get the word at.
   */
  private _getWordAt(coords: [number, number], allowWhitespaceOnlySelection: boolean, followWrappedLinesAbove: boolean = true, followWrappedLinesBelow: boolean = true): IWordPosition | undefined {
    // Ensure coords are within viewport (eg. not within scroll bar)
    if (coords[0] >= this._bufferService.cols) {
      return undefined;
    }

    const buffer = this._bufferService.buffer;
    const bufferLine = buffer.lines.get(coords[1]);
    if (!bufferLine) {
      return undefined;
    }

    const line = buffer.translateBufferLineToString(coords[1], false);

    // Get actual index, taking into consideration wide characters
    let startIndex = this._convertViewportColToCharacterIndex(bufferLine, coords[0]);
    let endIndex = startIndex;

    // Record offset to be used later
    const charOffset = coords[0] - startIndex;
    let leftWideCharCount = 0;
    let rightWideCharCount = 0;
    let leftLongCharOffset = 0;
    let rightLongCharOffset = 0;

    if (line.charAt(startIndex) === ' ') {
      // Expand until non-whitespace is hit
      while (startIndex > 0 && line.charAt(startIndex - 1) === ' ') {
        startIndex--;
      }
      while (endIndex < line.length && line.charAt(endIndex + 1) === ' ') {
        endIndex++;
      }
    } else {
      // Expand until whitespace is hit. This algorithm works by scanning left
      // and right from the starting position, keeping both the index format
      // (line) and the column format (bufferLine) in sync. When a wide
      // character is hit, it is recorded and the column index is adjusted.
      let startCol = coords[0];
      let endCol = coords[0];

      // Consider the initial position, skip it and increment the wide char
      // variable
      if (bufferLine.getWidth(startCol) === 0) {
        leftWideCharCount++;
        startCol--;
      }
      if (bufferLine.getWidth(endCol) === 2) {
        rightWideCharCount++;
        endCol++;
      }

      // Adjust the end index for characters whose length are > 1 (emojis)
      const length = bufferLine.getString(endCol).length;
      if (length > 1) {
        rightLongCharOffset += length - 1;
        endIndex += length - 1;
      }

      // Expand the string in both directions until a space is hit
      while (startCol > 0 && startIndex > 0 && !this._isCharWordSeparator(bufferLine.loadCell(startCol - 1, this._workCell))) {
        bufferLine.loadCell(startCol - 1, this._workCell);
        const length = this._workCell.getChars().length;
        if (this._workCell.getWidth() === 0) {
          // If the next character is a wide char, record it and skip the column
          leftWideCharCount++;
          startCol--;
        } else if (length > 1) {
          // If the next character's string is longer than 1 char (eg. emoji),
          // adjust the index
          leftLongCharOffset += length - 1;
          startIndex -= length - 1;
        }
        startIndex--;
        startCol--;
      }
      while (endCol < bufferLine.length && endIndex + 1 < line.length && !this._isCharWordSeparator(bufferLine.loadCell(endCol + 1, this._workCell))) {
        bufferLine.loadCell(endCol + 1, this._workCell);
        const length = this._workCell.getChars().length;
        if (this._workCell.getWidth() === 2) {
          // If the next character is a wide char, record it and skip the column
          rightWideCharCount++;
          endCol++;
        } else if (length > 1) {
          // If the next character's string is longer than 1 char (eg. emoji),
          // adjust the index
          rightLongCharOffset += length - 1;
          endIndex += length - 1;
        }
        endIndex++;
        endCol++;
      }
    }

    // Incremenet the end index so it is at the start of the next character
    endIndex++;

    // Calculate the start _column_, converting the the string indexes back to
    // column coordinates.
    let start =
        startIndex // The index of the selection's start char in the line string
        + charOffset // The difference between the initial char's column and index
        - leftWideCharCount // The number of wide chars left of the initial char
        + leftLongCharOffset; // The number of additional chars left of the initial char added by columns with strings longer than 1 (emojis)

    // Calculate the length in _columns_, converting the the string indexes back
    // to column coordinates.
    let length = Math.min(this._bufferService.cols, // Disallow lengths larger than the terminal cols
      endIndex // The index of the selection's end char in the line string
      - startIndex // The index of the selection's start char in the line string
      + leftWideCharCount // The number of wide chars left of the initial char
      + rightWideCharCount // The number of wide chars right of the initial char (inclusive)
      - leftLongCharOffset // The number of additional chars left of the initial char added by columns with strings longer than 1 (emojis)
      - rightLongCharOffset); // The number of additional chars right of the initial char (inclusive) added by columns with strings longer than 1 (emojis)

    if (!allowWhitespaceOnlySelection && line.slice(startIndex, endIndex).trim() === '') {
      return undefined;
    }

    // Recurse upwards if the line is wrapped and the word wraps to the above line
    if (followWrappedLinesAbove) {
      if (start === 0 && bufferLine.getCodePoint(0) !== 32 /* ' ' */) {
        const previousBufferLine = buffer.lines.get(coords[1] - 1);
        if (previousBufferLine && bufferLine.isWrapped && previousBufferLine.getCodePoint(this._bufferService.cols - 1) !== 32 /* ' ' */) {
          const previousLineWordPosition = this._getWordAt([this._bufferService.cols - 1, coords[1] - 1], false, true, false);
          if (previousLineWordPosition) {
            const offset = this._bufferService.cols - previousLineWordPosition.start;
            start -= offset;
            length += offset;
          }
        }
      }
    }

    // Recurse downwards if the line is wrapped and the word wraps to the next line
    if (followWrappedLinesBelow) {
      if (start + length === this._bufferService.cols && bufferLine.getCodePoint(this._bufferService.cols - 1) !== 32 /* ' ' */) {
        const nextBufferLine = buffer.lines.get(coords[1] + 1);
        if (nextBufferLine?.isWrapped && nextBufferLine.getCodePoint(0) !== 32 /* ' ' */) {
          const nextLineWordPosition = this._getWordAt([0, coords[1] + 1], false, false, true);
          if (nextLineWordPosition) {
            length += nextLineWordPosition.length;
          }
        }
      }
    }

    return { start, length };
  }

  /**
   * Selects the word at the coordinates specified.
   * @param coords The coordinates to get the word at.
   * @param allowWhitespaceOnlySelection If whitespace should be selected
   */
  protected _selectWordAt(coords: [number, number], allowWhitespaceOnlySelection: boolean): void {
    const wordPosition = this._getWordAt(coords, allowWhitespaceOnlySelection);
    if (wordPosition) {
      // Adjust negative start value
      while (wordPosition.start < 0) {
        wordPosition.start += this._bufferService.cols;
        coords[1]--;
      }
      this._model.selectionStart = [wordPosition.start, coords[1]];
      this._model.selectionStartLength = wordPosition.length;
    }
  }

  /**
   * Sets the selection end to the word at the coordinated specified.
   * @param coords The coordinates to get the word at.
   */
  private _selectToWordAt(coords: [number, number]): void {
    const wordPosition = this._getWordAt(coords, true);
    if (wordPosition) {
      let endRow = coords[1];

      // Adjust negative start value
      while (wordPosition.start < 0) {
        wordPosition.start += this._bufferService.cols;
        endRow--;
      }

      // Adjust wrapped length value, this only needs to happen when values are reversed as in that
      // case we're interested in the start of the word, not the end
      if (!this._model.areSelectionValuesReversed()) {
        while (wordPosition.start + wordPosition.length > this._bufferService.cols) {
          wordPosition.length -= this._bufferService.cols;
          endRow++;
        }
      }

      this._model.selectionEnd = [this._model.areSelectionValuesReversed() ? wordPosition.start : wordPosition.start + wordPosition.length, endRow];
    }
  }

  /**
   * Gets whether the character is considered a word separator by the select
   * word logic.
   * @param cell The cell to check.
   */
  private _isCharWordSeparator(cell: CellData): boolean {
    // Zero width characters are never separators as they are always to the
    // right of wide characters
    if (cell.getWidth() === 0) {
      return false;
    }
    return this._optionsService.rawOptions.wordSeparator.indexOf(cell.getChars()) >= 0;
  }

  /**
   * Selects the line specified.
   * @param line The line index.
   */
  protected _selectLineAt(line: number): void {
    const wrappedRange = this._bufferService.buffer.getWrappedRangeForLine(line);
    const range: IBufferRange = {
      start: { x: 0, y: wrappedRange.first },
      end: { x: this._bufferService.cols - 1, y: wrappedRange.last }
    };
    this._model.selectionStart = [0, wrappedRange.first];
    this._model.selectionEnd = undefined;
    this._model.selectionStartLength = getRangeLength(range, this._bufferService.cols);
  }
}
