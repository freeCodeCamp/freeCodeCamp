/**
 * Copyright (c) 2017 The xterm.js authors. All rights reserved.
 * @license MIT
 */

import { CircularList, IInsertEvent } from 'common/CircularList';
import { IdleTaskQueue } from 'common/TaskQueue';
import { IAttributeData, IBufferLine, ICellData, ICharset } from 'common/Types';
import { ExtendedAttrs } from 'common/buffer/AttributeData';
import { BufferLine, DEFAULT_ATTR_DATA } from 'common/buffer/BufferLine';
import { getWrappedLineTrimmedLength, reflowLargerApplyNewLayout, reflowLargerCreateNewLayout, reflowLargerGetLinesToRemove, reflowSmallerGetNewLineLengths } from 'common/buffer/BufferReflow';
import { CellData } from 'common/buffer/CellData';
import { NULL_CELL_CHAR, NULL_CELL_CODE, NULL_CELL_WIDTH, WHITESPACE_CELL_CHAR, WHITESPACE_CELL_CODE, WHITESPACE_CELL_WIDTH } from 'common/buffer/Constants';
import { Marker } from 'common/buffer/Marker';
import { IBuffer } from 'common/buffer/Types';
import { DEFAULT_CHARSET } from 'common/data/Charsets';
import { IBufferService, IOptionsService } from 'common/services/Services';

export const MAX_BUFFER_SIZE = 4294967295; // 2^32 - 1

/**
 * This class represents a terminal buffer (an internal state of the terminal), where the
 * following information is stored (in high-level):
 *   - text content of this particular buffer
 *   - cursor position
 *   - scroll position
 */
export class Buffer implements IBuffer {
  public lines: CircularList<IBufferLine>;
  public ydisp: number = 0;
  public ybase: number = 0;
  public y: number = 0;
  public x: number = 0;
  public scrollBottom: number;
  public scrollTop: number;
  public tabs: { [column: number]: boolean | undefined } = {};
  public savedY: number = 0;
  public savedX: number = 0;
  public savedCurAttrData = DEFAULT_ATTR_DATA.clone();
  public savedCharset: ICharset | undefined = DEFAULT_CHARSET;
  public markers: Marker[] = [];
  private _nullCell: ICellData = CellData.fromCharData([0, NULL_CELL_CHAR, NULL_CELL_WIDTH, NULL_CELL_CODE]);
  private _whitespaceCell: ICellData = CellData.fromCharData([0, WHITESPACE_CELL_CHAR, WHITESPACE_CELL_WIDTH, WHITESPACE_CELL_CODE]);
  private _cols: number;
  private _rows: number;
  private _isClearing: boolean = false;

  constructor(
    private _hasScrollback: boolean,
    private _optionsService: IOptionsService,
    private _bufferService: IBufferService
  ) {
    this._cols = this._bufferService.cols;
    this._rows = this._bufferService.rows;
    this.lines = new CircularList<IBufferLine>(this._getCorrectBufferLength(this._rows));
    this.scrollTop = 0;
    this.scrollBottom = this._rows - 1;
    this.setupTabStops();
  }

  public getNullCell(attr?: IAttributeData): ICellData {
    if (attr) {
      this._nullCell.fg = attr.fg;
      this._nullCell.bg = attr.bg;
      this._nullCell.extended = attr.extended;
    } else {
      this._nullCell.fg = 0;
      this._nullCell.bg = 0;
      this._nullCell.extended = new ExtendedAttrs();
    }
    return this._nullCell;
  }

  public getWhitespaceCell(attr?: IAttributeData): ICellData {
    if (attr) {
      this._whitespaceCell.fg = attr.fg;
      this._whitespaceCell.bg = attr.bg;
      this._whitespaceCell.extended = attr.extended;
    } else {
      this._whitespaceCell.fg = 0;
      this._whitespaceCell.bg = 0;
      this._whitespaceCell.extended = new ExtendedAttrs();
    }
    return this._whitespaceCell;
  }

  public getBlankLine(attr: IAttributeData, isWrapped?: boolean): IBufferLine {
    return new BufferLine(this._bufferService.cols, this.getNullCell(attr), isWrapped);
  }

  public get hasScrollback(): boolean {
    return this._hasScrollback && this.lines.maxLength > this._rows;
  }

  public get isCursorInViewport(): boolean {
    const absoluteY = this.ybase + this.y;
    const relativeY = absoluteY - this.ydisp;
    return (relativeY >= 0 && relativeY < this._rows);
  }

  /**
   * Gets the correct buffer length based on the rows provided, the terminal's
   * scrollback and whether this buffer is flagged to have scrollback or not.
   * @param rows The terminal rows to use in the calculation.
   */
  private _getCorrectBufferLength(rows: number): number {
    if (!this._hasScrollback) {
      return rows;
    }

    const correctBufferLength = rows + this._optionsService.rawOptions.scrollback;

    return correctBufferLength > MAX_BUFFER_SIZE ? MAX_BUFFER_SIZE : correctBufferLength;
  }

  /**
   * Fills the buffer's viewport with blank lines.
   */
  public fillViewportRows(fillAttr?: IAttributeData): void {
    if (this.lines.length === 0) {
      if (fillAttr === undefined) {
        fillAttr = DEFAULT_ATTR_DATA;
      }
      let i = this._rows;
      while (i--) {
        this.lines.push(this.getBlankLine(fillAttr));
      }
    }
  }

  /**
   * Clears the buffer to it's initial state, discarding all previous data.
   */
  public clear(): void {
    this.ydisp = 0;
    this.ybase = 0;
    this.y = 0;
    this.x = 0;
    this.lines = new CircularList<IBufferLine>(this._getCorrectBufferLength(this._rows));
    this.scrollTop = 0;
    this.scrollBottom = this._rows - 1;
    this.setupTabStops();
  }

  /**
   * Resizes the buffer, adjusting its data accordingly.
   * @param newCols The new number of columns.
   * @param newRows The new number of rows.
   */
  public resize(newCols: number, newRows: number): void {
    // store reference to null cell with default attrs
    const nullCell = this.getNullCell(DEFAULT_ATTR_DATA);

    // count bufferlines with overly big memory to be cleaned afterwards
    let dirtyMemoryLines = 0;

    // Increase max length if needed before adjustments to allow space to fill
    // as required.
    const newMaxLength = this._getCorrectBufferLength(newRows);
    if (newMaxLength > this.lines.maxLength) {
      this.lines.maxLength = newMaxLength;
    }

    // if (this._cols > newCols) {
    //   console.log('increase!');
    // }

    // The following adjustments should only happen if the buffer has been
    // initialized/filled.
    if (this.lines.length > 0) {
      // Deal with columns increasing (reducing needs to happen after reflow)
      if (this._cols < newCols) {
        for (let i = 0; i < this.lines.length; i++) {
          // +boolean for fast 0 or 1 conversion
          dirtyMemoryLines += +this.lines.get(i)!.resize(newCols, nullCell);
        }
      }

      // Resize rows in both directions as needed
      let addToY = 0;
      if (this._rows < newRows) {
        for (let y = this._rows; y < newRows; y++) {
          if (this.lines.length < newRows + this.ybase) {
            if (this._optionsService.rawOptions.windowsMode || this._optionsService.rawOptions.windowsPty.backend !== undefined || this._optionsService.rawOptions.windowsPty.buildNumber !== undefined) {
              // Just add the new missing rows on Windows as conpty reprints the screen with it's
              // view of the world. Once a line enters scrollback for conpty it remains there
              this.lines.push(new BufferLine(newCols, nullCell));
            } else {
              if (this.ybase > 0 && this.lines.length <= this.ybase + this.y + addToY + 1) {
                // There is room above the buffer and there are no empty elements below the line,
                // scroll up
                this.ybase--;
                addToY++;
                if (this.ydisp > 0) {
                  // Viewport is at the top of the buffer, must increase downwards
                  this.ydisp--;
                }
              } else {
                // Add a blank line if there is no buffer left at the top to scroll to, or if there
                // are blank lines after the cursor
                this.lines.push(new BufferLine(newCols, nullCell));
              }
            }
          }
        }
      } else { // (this._rows >= newRows)
        for (let y = this._rows; y > newRows; y--) {
          if (this.lines.length > newRows + this.ybase) {
            if (this.lines.length > this.ybase + this.y + 1) {
              // The line is a blank line below the cursor, remove it
              this.lines.pop();
            } else {
              // The line is the cursor, scroll down
              this.ybase++;
              this.ydisp++;
            }
          }
        }
      }

      // Reduce max length if needed after adjustments, this is done after as it
      // would otherwise cut data from the bottom of the buffer.
      if (newMaxLength < this.lines.maxLength) {
        // Trim from the top of the buffer and adjust ybase and ydisp.
        const amountToTrim = this.lines.length - newMaxLength;
        if (amountToTrim > 0) {
          this.lines.trimStart(amountToTrim);
          this.ybase = Math.max(this.ybase - amountToTrim, 0);
          this.ydisp = Math.max(this.ydisp - amountToTrim, 0);
          this.savedY = Math.max(this.savedY - amountToTrim, 0);
        }
        this.lines.maxLength = newMaxLength;
      }

      // Make sure that the cursor stays on screen
      this.x = Math.min(this.x, newCols - 1);
      this.y = Math.min(this.y, newRows - 1);
      if (addToY) {
        this.y += addToY;
      }
      this.savedX = Math.min(this.savedX, newCols - 1);

      this.scrollTop = 0;
    }

    this.scrollBottom = newRows - 1;

    if (this._isReflowEnabled) {
      this._reflow(newCols, newRows);

      // Trim the end of the line off if cols shrunk
      if (this._cols > newCols) {
        for (let i = 0; i < this.lines.length; i++) {
          // +boolean for fast 0 or 1 conversion
          dirtyMemoryLines += +this.lines.get(i)!.resize(newCols, nullCell);
        }
      }
    }

    this._cols = newCols;
    this._rows = newRows;

    this._memoryCleanupQueue.clear();
    // schedule memory cleanup only, if more than 10% of the lines are affected
    if (dirtyMemoryLines > 0.1 * this.lines.length) {
      this._memoryCleanupPosition = 0;
      this._memoryCleanupQueue.enqueue(() => this._batchedMemoryCleanup());
    }
  }

  private _memoryCleanupQueue = new IdleTaskQueue();
  private _memoryCleanupPosition = 0;

  private _batchedMemoryCleanup(): boolean {
    let normalRun = true;
    if (this._memoryCleanupPosition >= this.lines.length) {
      // cleanup made it once through all lines, thus rescan in loop below to also catch shifted
      // lines, which should finish rather quick if there are no more cleanups pending
      this._memoryCleanupPosition = 0;
      normalRun = false;
    }
    let counted = 0;
    while (this._memoryCleanupPosition < this.lines.length) {
      counted += this.lines.get(this._memoryCleanupPosition++)!.cleanupMemory();
      // cleanup max 100 lines per batch
      if (counted > 100) {
        return true;
      }
    }
    // normal runs always need another rescan afterwards
    // if we made it here with normalRun=false, we are in a final run
    // and can end the cleanup task for sure
    return normalRun;
  }

  private get _isReflowEnabled(): boolean {
    const windowsPty = this._optionsService.rawOptions.windowsPty;
    if (windowsPty && windowsPty.buildNumber) {
      return this._hasScrollback && windowsPty.backend === 'conpty' && windowsPty.buildNumber >= 21376;
    }
    return this._hasScrollback && !this._optionsService.rawOptions.windowsMode;
  }

  private _reflow(newCols: number, newRows: number): void {
    if (this._cols === newCols) {
      return;
    }

    // Iterate through rows, ignore the last one as it cannot be wrapped
    if (newCols > this._cols) {
      this._reflowLarger(newCols, newRows);
    } else {
      this._reflowSmaller(newCols, newRows);
    }
  }

  private _reflowLarger(newCols: number, newRows: number): void {
    const reflowCursorLine = this._optionsService.rawOptions.reflowCursorLine;
    const toRemove: number[] = reflowLargerGetLinesToRemove(this.lines, this._cols, newCols, this.ybase + this.y, this.getNullCell(DEFAULT_ATTR_DATA), reflowCursorLine);
    if (toRemove.length > 0) {
      const newLayoutResult = reflowLargerCreateNewLayout(this.lines, toRemove);
      reflowLargerApplyNewLayout(this.lines, newLayoutResult.layout);
      this._reflowLargerAdjustViewport(newCols, newRows, newLayoutResult.countRemoved);
    }
  }

  private _reflowLargerAdjustViewport(newCols: number, newRows: number, countRemoved: number): void {
    const nullCell = this.getNullCell(DEFAULT_ATTR_DATA);
    // Adjust viewport based on number of items removed
    let viewportAdjustments = countRemoved;
    while (viewportAdjustments-- > 0) {
      if (this.ybase === 0) {
        if (this.y > 0) {
          this.y--;
        }
        if (this.lines.length < newRows) {
          // Add an extra row at the bottom of the viewport
          this.lines.push(new BufferLine(newCols, nullCell));
        }
      } else {
        if (this.ydisp === this.ybase) {
          this.ydisp--;
        }
        this.ybase--;
      }
    }
    this.savedY = Math.max(this.savedY - countRemoved, 0);
  }

  private _reflowSmaller(newCols: number, newRows: number): void {
    const reflowCursorLine = this._optionsService.rawOptions.reflowCursorLine;
    const nullCell = this.getNullCell(DEFAULT_ATTR_DATA);
    // Gather all BufferLines that need to be inserted into the Buffer here so that they can be
    // batched up and only committed once
    const toInsert = [];
    let countToInsert = 0;
    // Go backwards as many lines may be trimmed and this will avoid considering them
    for (let y = this.lines.length - 1; y >= 0; y--) {
      // Check whether this line is a problem
      let nextLine = this.lines.get(y) as BufferLine;
      if (!nextLine || !nextLine.isWrapped && nextLine.getTrimmedLength() <= newCols) {
        continue;
      }

      // Gather wrapped lines and adjust y to be the starting line
      const wrappedLines: BufferLine[] = [nextLine];
      while (nextLine.isWrapped && y > 0) {
        nextLine = this.lines.get(--y) as BufferLine;
        wrappedLines.unshift(nextLine);
      }

      if (!reflowCursorLine) {
        // If these lines contain the cursor don't touch them, the program will handle fixing up
        // wrapped lines with the cursor
        const absoluteY = this.ybase + this.y;
        if (absoluteY >= y && absoluteY < y + wrappedLines.length) {
          continue;
        }
      }

      const lastLineLength = wrappedLines[wrappedLines.length - 1].getTrimmedLength();
      const destLineLengths = reflowSmallerGetNewLineLengths(wrappedLines, this._cols, newCols);
      const linesToAdd = destLineLengths.length - wrappedLines.length;
      let trimmedLines: number;
      if (this.ybase === 0 && this.y !== this.lines.length - 1) {
        // If the top section of the buffer is not yet filled
        trimmedLines = Math.max(0, this.y - this.lines.maxLength + linesToAdd);
      } else {
        trimmedLines = Math.max(0, this.lines.length - this.lines.maxLength + linesToAdd);
      }

      // Add the new lines
      const newLines: BufferLine[] = [];
      for (let i = 0; i < linesToAdd; i++) {
        const newLine = this.getBlankLine(DEFAULT_ATTR_DATA, true) as BufferLine;
        newLines.push(newLine);
      }
      if (newLines.length > 0) {
        toInsert.push({
          // countToInsert here gets the actual index, taking into account other inserted items.
          // using this we can iterate through the list forwards
          start: y + wrappedLines.length + countToInsert,
          newLines
        });
        countToInsert += newLines.length;
      }
      wrappedLines.push(...newLines);

      // Copy buffer data to new locations, this needs to happen backwards to do in-place
      let destLineIndex = destLineLengths.length - 1; // Math.floor(cellsNeeded / newCols);
      let destCol = destLineLengths[destLineIndex]; // cellsNeeded % newCols;
      if (destCol === 0) {
        destLineIndex--;
        destCol = destLineLengths[destLineIndex];
      }
      let srcLineIndex = wrappedLines.length - linesToAdd - 1;
      let srcCol = lastLineLength;
      while (srcLineIndex >= 0) {
        const cellsToCopy = Math.min(srcCol, destCol);
        if (wrappedLines[destLineIndex] === undefined) {
          // Sanity check that the line exists, this has been known to fail for an unknown reason
          // which would stop the reflow from happening if an exception would throw.
          break;
        }
        wrappedLines[destLineIndex].copyCellsFrom(wrappedLines[srcLineIndex], srcCol - cellsToCopy, destCol - cellsToCopy, cellsToCopy, true);
        destCol -= cellsToCopy;
        if (destCol === 0) {
          destLineIndex--;
          destCol = destLineLengths[destLineIndex];
        }
        srcCol -= cellsToCopy;
        if (srcCol === 0) {
          srcLineIndex--;
          const wrappedLinesIndex = Math.max(srcLineIndex, 0);
          srcCol = getWrappedLineTrimmedLength(wrappedLines, wrappedLinesIndex, this._cols);
        }
      }

      // Null out the end of the line ends if a wide character wrapped to the following line
      for (let i = 0; i < wrappedLines.length; i++) {
        if (destLineLengths[i] < newCols) {
          wrappedLines[i].setCell(destLineLengths[i], nullCell);
        }
      }

      // Adjust viewport as needed
      let viewportAdjustments = linesToAdd - trimmedLines;
      while (viewportAdjustments-- > 0) {
        if (this.ybase === 0) {
          if (this.y < newRows - 1) {
            this.y++;
            this.lines.pop();
          } else {
            this.ybase++;
            this.ydisp++;
          }
        } else {
          // Ensure ybase does not exceed its maximum value
          if (this.ybase < Math.min(this.lines.maxLength, this.lines.length + countToInsert) - newRows) {
            if (this.ybase === this.ydisp) {
              this.ydisp++;
            }
            this.ybase++;
          }
        }
      }
      this.savedY = Math.min(this.savedY + linesToAdd, this.ybase + newRows - 1);
    }

    // Rearrange lines in the buffer if there are any insertions, this is done at the end rather
    // than earlier so that it's a single O(n) pass through the buffer, instead of O(n^2) from many
    // costly calls to CircularList.splice.
    if (toInsert.length > 0) {
      // Record buffer insert events and then play them back backwards so that the indexes are
      // correct
      const insertEvents: IInsertEvent[] = [];

      // Record original lines so they don't get overridden when we rearrange the list
      const originalLines: BufferLine[] = [];
      for (let i = 0; i < this.lines.length; i++) {
        originalLines.push(this.lines.get(i) as BufferLine);
      }
      const originalLinesLength = this.lines.length;

      let originalLineIndex = originalLinesLength - 1;
      let nextToInsertIndex = 0;
      let nextToInsert = toInsert[nextToInsertIndex];
      this.lines.length = Math.min(this.lines.maxLength, this.lines.length + countToInsert);
      let countInsertedSoFar = 0;
      for (let i = Math.min(this.lines.maxLength - 1, originalLinesLength + countToInsert - 1); i >= 0; i--) {
        if (nextToInsert && nextToInsert.start > originalLineIndex + countInsertedSoFar) {
          // Insert extra lines here, adjusting i as needed
          for (let nextI = nextToInsert.newLines.length - 1; nextI >= 0; nextI--) {
            this.lines.set(i--, nextToInsert.newLines[nextI]);
          }
          i++;

          // Create insert events for later
          insertEvents.push({
            index: originalLineIndex + 1,
            amount: nextToInsert.newLines.length
          });

          countInsertedSoFar += nextToInsert.newLines.length;
          nextToInsert = toInsert[++nextToInsertIndex];
        } else {
          this.lines.set(i, originalLines[originalLineIndex--]);
        }
      }

      // Update markers
      let insertCountEmitted = 0;
      for (let i = insertEvents.length - 1; i >= 0; i--) {
        insertEvents[i].index += insertCountEmitted;
        this.lines.onInsertEmitter.fire(insertEvents[i]);
        insertCountEmitted += insertEvents[i].amount;
      }
      const amountToTrim = Math.max(0, originalLinesLength + countToInsert - this.lines.maxLength);
      if (amountToTrim > 0) {
        this.lines.onTrimEmitter.fire(amountToTrim);
      }
    }
  }

  /**
   * Translates a buffer line to a string, with optional start and end columns.
   * Wide characters will count as two columns in the resulting string. This
   * function is useful for getting the actual text underneath the raw selection
   * position.
   * @param lineIndex The absolute index of the line being translated.
   * @param trimRight Whether to trim whitespace to the right.
   * @param startCol The column to start at.
   * @param endCol The column to end at.
   */
  public translateBufferLineToString(lineIndex: number, trimRight: boolean, startCol: number = 0, endCol?: number): string {
    const line = this.lines.get(lineIndex);
    if (!line) {
      return '';
    }
    return line.translateToString(trimRight, startCol, endCol);
  }

  public getWrappedRangeForLine(y: number): { first: number, last: number } {
    let first = y;
    let last = y;
    // Scan upwards for wrapped lines
    while (first > 0 && this.lines.get(first)!.isWrapped) {
      first--;
    }
    // Scan downwards for wrapped lines
    while (last + 1 < this.lines.length && this.lines.get(last + 1)!.isWrapped) {
      last++;
    }
    return { first, last };
  }

  /**
   * Setup the tab stops.
   * @param i The index to start setting up tab stops from.
   */
  public setupTabStops(i?: number): void {
    if (i !== null && i !== undefined) {
      if (!this.tabs[i]) {
        i = this.prevStop(i);
      }
    } else {
      this.tabs = {};
      i = 0;
    }

    for (; i < this._cols; i += this._optionsService.rawOptions.tabStopWidth) {
      this.tabs[i] = true;
    }
  }

  /**
   * Move the cursor to the previous tab stop from the given position (default is current).
   * @param x The position to move the cursor to the previous tab stop.
   */
  public prevStop(x?: number): number {
    if (x === null || x === undefined) {
      x = this.x;
    }
    while (!this.tabs[--x] && x > 0);
    return x >= this._cols ? this._cols - 1 : x < 0 ? 0 : x;
  }

  /**
   * Move the cursor one tab stop forward from the given position (default is current).
   * @param x The position to move the cursor one tab stop forward.
   */
  public nextStop(x?: number): number {
    if (x === null || x === undefined) {
      x = this.x;
    }
    while (!this.tabs[++x] && x < this._cols);
    return x >= this._cols ? this._cols - 1 : x < 0 ? 0 : x;
  }

  /**
   * Clears markers on single line.
   * @param y The line to clear.
   */
  public clearMarkers(y: number): void {
    this._isClearing = true;
    for (let i = 0; i < this.markers.length; i++) {
      if (this.markers[i].line === y) {
        this.markers[i].dispose();
        this.markers.splice(i--, 1);
      }
    }
    this._isClearing = false;
  }

  /**
   * Clears markers on all lines
   */
  public clearAllMarkers(): void {
    this._isClearing = true;
    for (let i = 0; i < this.markers.length; i++) {
      this.markers[i].dispose();
    }
    this.markers.length = 0;
    this._isClearing = false;
  }

  public addMarker(y: number): Marker {
    const marker = new Marker(y);
    this.markers.push(marker);
    marker.register(this.lines.onTrim(amount => {
      marker.line -= amount;
      // The marker should be disposed when the line is trimmed from the buffer
      if (marker.line < 0) {
        marker.dispose();
      }
    }));
    marker.register(this.lines.onInsert(event => {
      if (marker.line >= event.index) {
        marker.line += event.amount;
      }
    }));
    marker.register(this.lines.onDelete(event => {
      // Delete the marker if it's within the range
      if (marker.line >= event.index && marker.line < event.index + event.amount) {
        marker.dispose();
      }

      // Shift the marker if it's after the deleted range
      if (marker.line > event.index) {
        marker.line -= event.amount;
      }
    }));
    marker.register(marker.onDispose(() => this._removeMarker(marker)));
    return marker;
  }

  private _removeMarker(marker: Marker): void {
    if (!this._isClearing) {
      this.markers.splice(this.markers.indexOf(marker), 1);
    }
  }
}
