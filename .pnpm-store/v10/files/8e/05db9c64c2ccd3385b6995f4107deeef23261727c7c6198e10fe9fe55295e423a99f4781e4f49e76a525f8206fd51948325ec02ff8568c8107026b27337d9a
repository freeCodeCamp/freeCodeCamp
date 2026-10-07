/**
 * Copyright (c) 2017 The xterm.js authors. All rights reserved.
 * @license MIT
 */

import * as Strings from 'browser/LocalizableStrings';
import { ITerminal, IRenderDebouncer } from 'browser/Types';
import { TimeBasedDebouncer } from 'browser/TimeBasedDebouncer';
import { Disposable, toDisposable } from 'vs/base/common/lifecycle';
import { ICoreBrowserService, IRenderService } from 'browser/services/Services';
import { IBuffer } from 'common/buffer/Types';
import { IInstantiationService } from 'common/services/Services';
import { addDisposableListener } from 'vs/base/browser/dom';

const MAX_ROWS_TO_READ = 20;

const enum BoundaryPosition {
  TOP,
  BOTTOM
}

// Turn this on to unhide the accessibility tree and display it under
// (instead of overlapping with) the terminal.
const DEBUG = false;

export class AccessibilityManager extends Disposable {
  private _debugRootContainer: HTMLElement | undefined;
  private _accessibilityContainer: HTMLElement;

  private _rowContainer: HTMLElement;
  private _rowElements: HTMLElement[];
  private _rowColumns: WeakMap<HTMLElement, number[]> = new WeakMap();

  private _liveRegion: HTMLElement;
  private _liveRegionLineCount: number = 0;
  private _liveRegionDebouncer: IRenderDebouncer;

  private _topBoundaryFocusListener: (e: FocusEvent) => void;
  private _bottomBoundaryFocusListener: (e: FocusEvent) => void;

  /**
   * This queue has a character pushed to it for keys that are pressed, if the
   * next character added to the terminal is equal to the key char then it is
   * not announced (added to live region) because it has already been announced
   * by the textarea event (which cannot be canceled). There are some race
   * condition cases if there is typing while data is streaming, but this covers
   * the main case of typing into the prompt and inputting the answer to a
   * question (Y/N, etc.).
   */
  private _charsToConsume: string[] = [];

  private _charsToAnnounce: string = '';

  constructor(
    private readonly _terminal: ITerminal,
    @IInstantiationService instantiationService: IInstantiationService,
    @ICoreBrowserService private readonly _coreBrowserService: ICoreBrowserService,
    @IRenderService private readonly _renderService: IRenderService
  ) {
    super();
    const doc = this._coreBrowserService.mainDocument;
    this._accessibilityContainer = doc.createElement('div');
    this._accessibilityContainer.classList.add('xterm-accessibility');

    this._rowContainer = doc.createElement('div');
    this._rowContainer.setAttribute('role', 'list');
    this._rowContainer.classList.add('xterm-accessibility-tree');
    this._rowElements = [];
    for (let i = 0; i < this._terminal.rows; i++) {
      this._rowElements[i] = this._createAccessibilityTreeNode();
      this._rowContainer.appendChild(this._rowElements[i]);
    }

    this._topBoundaryFocusListener = e => this._handleBoundaryFocus(e, BoundaryPosition.TOP);
    this._bottomBoundaryFocusListener = e => this._handleBoundaryFocus(e, BoundaryPosition.BOTTOM);
    this._rowElements[0].addEventListener('focus', this._topBoundaryFocusListener);
    this._rowElements[this._rowElements.length - 1].addEventListener('focus', this._bottomBoundaryFocusListener);

    this._accessibilityContainer.appendChild(this._rowContainer);

    this._liveRegion = doc.createElement('div');
    this._liveRegion.classList.add('live-region');
    this._liveRegion.setAttribute('aria-live', 'assertive');
    this._accessibilityContainer.appendChild(this._liveRegion);
    this._liveRegionDebouncer = this._register(new TimeBasedDebouncer(this._renderRows.bind(this)));

    if (!this._terminal.element) {
      throw new Error('Cannot enable accessibility before Terminal.open');
    }

    if (DEBUG) {
      this._accessibilityContainer.classList.add('debug');
      this._rowContainer.classList.add('debug');

      // Use a `<div class="xterm">` container so that the css will still apply.
      this._debugRootContainer = doc.createElement('div');
      this._debugRootContainer.classList.add('xterm');

      this._debugRootContainer.appendChild(doc.createTextNode('------start a11y------'));
      this._debugRootContainer.appendChild(this._accessibilityContainer);
      this._debugRootContainer.appendChild(doc.createTextNode('------end a11y------'));

      this._terminal.element.insertAdjacentElement('afterend', this._debugRootContainer);
    } else {
      this._terminal.element.insertAdjacentElement('afterbegin', this._accessibilityContainer);
    }

    this._register(this._terminal.onResize(e => this._handleResize(e.rows)));
    this._register(this._terminal.onRender(e => this._refreshRows(e.start, e.end)));
    this._register(this._terminal.onScroll(() => this._refreshRows()));
    // Line feed is an issue as the prompt won't be read out after a command is run
    this._register(this._terminal.onA11yChar(char => this._handleChar(char)));
    this._register(this._terminal.onLineFeed(() => this._handleChar('\n')));
    this._register(this._terminal.onA11yTab(spaceCount => this._handleTab(spaceCount)));
    this._register(this._terminal.onKey(e => this._handleKey(e.key)));
    this._register(this._terminal.onBlur(() => this._clearLiveRegion()));
    this._register(this._renderService.onDimensionsChange(() => this._refreshRowsDimensions()));
    this._register(addDisposableListener(doc, 'selectionchange', () => this._handleSelectionChange()));
    this._register(this._coreBrowserService.onDprChange(() => this._refreshRowsDimensions()));

    this._refreshRowsDimensions();
    this._refreshRows();
    this._register(toDisposable(() => {
      if (DEBUG) {
        this._debugRootContainer!.remove();
      } else {
        this._accessibilityContainer.remove();
      }
      this._rowElements.length = 0;
    }));
  }

  private _handleTab(spaceCount: number): void {
    for (let i = 0; i < spaceCount; i++) {
      this._handleChar(' ');
    }
  }

  private _handleChar(char: string): void {
    if (this._liveRegionLineCount < MAX_ROWS_TO_READ + 1) {
      if (this._charsToConsume.length > 0) {
        // Have the screen reader ignore the char if it was just input
        const shiftedChar = this._charsToConsume.shift();
        if (shiftedChar !== char) {
          this._charsToAnnounce += char;
        }
      } else {
        this._charsToAnnounce += char;
      }

      if (char === '\n') {
        this._liveRegionLineCount++;
        if (this._liveRegionLineCount === MAX_ROWS_TO_READ + 1) {
          this._liveRegion.textContent += Strings.tooMuchOutput.get();
        }
      }
    }
  }

  private _clearLiveRegion(): void {
    this._liveRegion.textContent = '';
    this._liveRegionLineCount = 0;
  }

  private _handleKey(keyChar: string): void {
    this._clearLiveRegion();
    // Only add the char if there is no control character.
    if (!/\p{Control}/u.test(keyChar)) {
      this._charsToConsume.push(keyChar);
    }
  }

  private _refreshRows(start?: number, end?: number): void {
    this._liveRegionDebouncer.refresh(start, end, this._terminal.rows);
  }

  private _renderRows(start: number, end: number): void {
    const buffer: IBuffer = this._terminal.buffer;
    const setSize = buffer.lines.length.toString();
    for (let i = start; i <= end; i++) {
      const line = buffer.lines.get(buffer.ydisp + i);
      const columns: number[] = [];
      const lineData = line?.translateToString(true, undefined, undefined, columns) || '';
      const posInSet = (buffer.ydisp + i + 1).toString();
      const element = this._rowElements[i];
      if (element) {
        if (lineData.length === 0) {
          element.textContent = '\u00a0';
          this._rowColumns.set(element, [0, 1]);
        } else {
          element.textContent = lineData;
          this._rowColumns.set(element, columns);
        }
        element.setAttribute('aria-posinset', posInSet);
        element.setAttribute('aria-setsize', setSize);
        this._alignRowWidth(element);
      }
    }
    this._announceCharacters();
  }

  private _announceCharacters(): void {
    if (this._charsToAnnounce.length === 0) {
      return;
    }
    this._liveRegion.textContent += this._charsToAnnounce;
    this._charsToAnnounce = '';
  }

  private _handleBoundaryFocus(e: FocusEvent, position: BoundaryPosition): void {
    const boundaryElement = e.target as HTMLElement;
    const beforeBoundaryElement = this._rowElements[position === BoundaryPosition.TOP ? 1 : this._rowElements.length - 2];

    // Don't scroll if the buffer top has reached the end in that direction
    const posInSet = boundaryElement.getAttribute('aria-posinset');
    const lastRowPos = position === BoundaryPosition.TOP ? '1' : `${this._terminal.buffer.lines.length}`;
    if (posInSet === lastRowPos) {
      return;
    }

    // Don't scroll when the last focused item was not the second row (focus is going the other
    // direction)
    if (e.relatedTarget !== beforeBoundaryElement) {
      return;
    }

    // Remove old boundary element from array
    let topBoundaryElement: HTMLElement;
    let bottomBoundaryElement: HTMLElement;
    if (position === BoundaryPosition.TOP) {
      topBoundaryElement = boundaryElement;
      bottomBoundaryElement = this._rowElements.pop()!;
      this._rowContainer.removeChild(bottomBoundaryElement);
    } else {
      topBoundaryElement = this._rowElements.shift()!;
      bottomBoundaryElement = boundaryElement;
      this._rowContainer.removeChild(topBoundaryElement);
    }

    // Remove listeners from old boundary elements
    topBoundaryElement.removeEventListener('focus', this._topBoundaryFocusListener);
    bottomBoundaryElement.removeEventListener('focus', this._bottomBoundaryFocusListener);

    // Add new element to array/DOM
    if (position === BoundaryPosition.TOP) {
      const newElement = this._createAccessibilityTreeNode();
      this._rowElements.unshift(newElement);
      this._rowContainer.insertAdjacentElement('afterbegin', newElement);
    } else {
      const newElement = this._createAccessibilityTreeNode();
      this._rowElements.push(newElement);
      this._rowContainer.appendChild(newElement);
    }

    // Add listeners to new boundary elements
    this._rowElements[0].addEventListener('focus', this._topBoundaryFocusListener);
    this._rowElements[this._rowElements.length - 1].addEventListener('focus', this._bottomBoundaryFocusListener);

    // Scroll up
    this._terminal.scrollLines(position === BoundaryPosition.TOP ? -1 : 1);

    // Focus new boundary before element
    this._rowElements[position === BoundaryPosition.TOP ? 1 : this._rowElements.length - 2].focus();

    // Prevent the standard behavior
    e.preventDefault();
    e.stopImmediatePropagation();
  }

  private _handleSelectionChange(): void {
    if (this._rowElements.length === 0) {
      return;
    }

    const selection = this._coreBrowserService.mainDocument.getSelection();
    if (!selection) {
      return;
    }

    if (selection.isCollapsed) {
      // Only do something when the anchorNode is inside the row container. This
      // behavior mirrors what we do with mouse --- if the mouse clicks
      // somewhere outside of the terminal, we don't clear the selection.
      if (this._rowContainer.contains(selection.anchorNode)) {
        this._terminal.clearSelection();
      }
      return;
    }

    if (!selection.anchorNode || !selection.focusNode) {
      console.error('anchorNode and/or focusNode are null');
      return;
    }

    // Sort the two selection points in document order.
    let begin = { node: selection.anchorNode, offset: selection.anchorOffset };
    let end = { node: selection.focusNode, offset: selection.focusOffset };
    if ((begin.node.compareDocumentPosition(end.node) & Node.DOCUMENT_POSITION_PRECEDING) || (begin.node === end.node && begin.offset > end.offset) ) {
      [begin, end] = [end, begin];
    }

    // Clamp begin/end to the inside of the row container.
    if (begin.node.compareDocumentPosition(this._rowElements[0]) & (Node.DOCUMENT_POSITION_CONTAINED_BY | Node.DOCUMENT_POSITION_FOLLOWING)) {
      begin = { node: this._rowElements[0].childNodes[0], offset: 0 };
    }
    if (!this._rowContainer.contains(begin.node)) {
      // This happens when `begin` is below the last row.
      return;
    }
    const lastRowElement = this._rowElements.slice(-1)[0];
    if (end.node.compareDocumentPosition(lastRowElement) & (Node.DOCUMENT_POSITION_CONTAINED_BY | Node.DOCUMENT_POSITION_PRECEDING)) {
      end = {
        node: lastRowElement,
        offset: lastRowElement.textContent?.length ?? 0
      };
    }
    if (!this._rowContainer.contains(end.node)) {
      // This happens when `end` is above the first row.
      return;
    }

    const toRowColumn = ({ node, offset }: typeof begin): {row: number, column: number} | null => {
      // `node` is either the row element or the Text node inside it.
      const rowElement: any = node instanceof Text ? node.parentNode : node;
      let row = parseInt(rowElement?.getAttribute('aria-posinset'), 10) - 1;
      if (isNaN(row)) {
        console.warn('row is invalid. Race condition?');
        return null;
      }

      const columns = this._rowColumns.get(rowElement);
      if (!columns) {
        console.warn('columns is null. Race condition?');
        return null;
      }

      let column = offset < columns.length ? columns[offset] : columns.slice(-1)[0] + 1;
      if (column >= this._terminal.cols) {
        ++row;
        column = 0;
      }
      return {
        row,
        column
      };
    };

    const beginRowColumn = toRowColumn(begin);
    const endRowColumn = toRowColumn(end);

    if (!beginRowColumn || !endRowColumn) {
      return;
    }

    if (beginRowColumn.row > endRowColumn.row || (beginRowColumn.row === endRowColumn.row && beginRowColumn.column >= endRowColumn.column)) {
      // This should not happen unless we have some bugs.
      throw new Error('invalid range');
    }

    this._terminal.select(
      beginRowColumn.column,
      beginRowColumn.row,
      (endRowColumn.row - beginRowColumn.row) * this._terminal.cols - beginRowColumn.column + endRowColumn.column
    );
  }

  private _handleResize(rows: number): void {
    // Remove bottom boundary listener
    this._rowElements[this._rowElements.length - 1].removeEventListener('focus', this._bottomBoundaryFocusListener);

    // Grow rows as required
    for (let i = this._rowContainer.children.length; i < this._terminal.rows; i++) {
      this._rowElements[i] = this._createAccessibilityTreeNode();
      this._rowContainer.appendChild(this._rowElements[i]);
    }
    // Shrink rows as required
    while (this._rowElements.length > rows) {
      this._rowContainer.removeChild(this._rowElements.pop()!);
    }

    // Add bottom boundary listener
    this._rowElements[this._rowElements.length - 1].addEventListener('focus', this._bottomBoundaryFocusListener);

    this._refreshRowsDimensions();
  }

  private _createAccessibilityTreeNode(): HTMLElement {
    const element = this._coreBrowserService.mainDocument.createElement('div');
    element.setAttribute('role', 'listitem');
    element.tabIndex = -1;
    this._refreshRowDimensions(element);
    return element;
  }

  private _refreshRowsDimensions(): void {
    if (!this._renderService.dimensions.css.cell.height) {
      return;
    }
    Object.assign(this._accessibilityContainer.style, {
      width: `${this._renderService.dimensions.css.canvas.width}px`,
      fontSize: `${this._terminal.options.fontSize}px`
    });
    if (this._rowElements.length !== this._terminal.rows) {
      this._handleResize(this._terminal.rows);
    }
    for (let i = 0; i < this._terminal.rows; i++) {
      this._refreshRowDimensions(this._rowElements[i]);
      this._alignRowWidth(this._rowElements[i]);
    }
  }

  private _refreshRowDimensions(element: HTMLElement): void {
    element.style.height = `${this._renderService.dimensions.css.cell.height}px`;
  }

  /**
   * Scale the width of a row so that each of the character is (mostly) aligned
   * with the actual rendering. This will allow the screen reader to draw
   * selection outline at the correct position.
   *
   * On top of using the "monospace" font and correct font size, the scaling
   * here is necessary to handle characters that are not covered by the font
   * (e.g. CJK).
   */
  private _alignRowWidth(element: HTMLElement): void {
    element.style.transform = '';
    const width = element.getBoundingClientRect().width;
    const lastColumn = this._rowColumns.get(element)?.slice(-1)?.[0];
    if (!lastColumn) {
      return;
    }
    const targetWidth = lastColumn * this._renderService.dimensions.css.cell.width;
    element.style.transform = `scaleX(${targetWidth / width})`;
  }
}
