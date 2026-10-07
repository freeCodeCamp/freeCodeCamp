/**
 * Copyright (c) 2019 The xterm.js authors. All rights reserved.
 * @license MIT
 */

import { Disposable } from 'vs/base/common/lifecycle';
import { IAttributeData, IBufferLine } from 'common/Types';
import { BufferSet } from 'common/buffer/BufferSet';
import { IBuffer, IBufferSet } from 'common/buffer/Types';
import { IBufferService, IOptionsService, type IBufferResizeEvent } from 'common/services/Services';
import { Emitter } from 'vs/base/common/event';

export const MINIMUM_COLS = 2; // Less than 2 can mess with wide chars
export const MINIMUM_ROWS = 1;

export class BufferService extends Disposable implements IBufferService {
  public serviceBrand: any;

  public cols: number;
  public rows: number;
  public buffers: IBufferSet;
  /** Whether the user is scrolling (locks the scroll position) */
  public isUserScrolling: boolean = false;

  private readonly _onResize = this._register(new Emitter<IBufferResizeEvent>());
  public readonly onResize = this._onResize.event;
  private readonly _onScroll = this._register(new Emitter<number>());
  public readonly onScroll = this._onScroll.event;

  public get buffer(): IBuffer { return this.buffers.active; }

  /** An IBufferline to clone/copy from for new blank lines */
  private _cachedBlankLine: IBufferLine | undefined;

  constructor(@IOptionsService optionsService: IOptionsService) {
    super();
    this.cols = Math.max(optionsService.rawOptions.cols || 0, MINIMUM_COLS);
    this.rows = Math.max(optionsService.rawOptions.rows || 0, MINIMUM_ROWS);
    this.buffers = this._register(new BufferSet(optionsService, this));
    this._register(this.buffers.onBufferActivate(e => {
      this._onScroll.fire(e.activeBuffer.ydisp);
    }));
  }

  public resize(cols: number, rows: number): void {
    const colsChanged = this.cols !== cols;
    const rowsChanged = this.rows !== rows;
    this.cols = cols;
    this.rows = rows;
    this.buffers.resize(cols, rows);
    this._onResize.fire({ cols, rows, colsChanged, rowsChanged });
  }

  public reset(): void {
    this.buffers.reset();
    this.isUserScrolling = false;
  }

  /**
   * Scroll the terminal down 1 row, creating a blank line.
   * @param eraseAttr The attribute data to use the for blank line.
   * @param isWrapped Whether the new line is wrapped from the previous line.
   */
  public scroll(eraseAttr: IAttributeData, isWrapped: boolean = false): void {
    const buffer = this.buffer;

    let newLine: IBufferLine | undefined;
    newLine = this._cachedBlankLine;
    if (!newLine || newLine.length !== this.cols || newLine.getFg(0) !== eraseAttr.fg || newLine.getBg(0) !== eraseAttr.bg) {
      newLine = buffer.getBlankLine(eraseAttr, isWrapped);
      this._cachedBlankLine = newLine;
    }
    newLine.isWrapped = isWrapped;

    const topRow = buffer.ybase + buffer.scrollTop;
    const bottomRow = buffer.ybase + buffer.scrollBottom;

    if (buffer.scrollTop === 0) {
      // Determine whether the buffer is going to be trimmed after insertion.
      const willBufferBeTrimmed = buffer.lines.isFull;

      // Insert the line using the fastest method
      if (bottomRow === buffer.lines.length - 1) {
        if (willBufferBeTrimmed) {
          buffer.lines.recycle().copyFrom(newLine);
        } else {
          buffer.lines.push(newLine.clone());
        }
      } else {
        buffer.lines.splice(bottomRow + 1, 0, newLine.clone());
      }

      // Only adjust ybase and ydisp when the buffer is not trimmed
      if (!willBufferBeTrimmed) {
        buffer.ybase++;
        // Only scroll the ydisp with ybase if the user has not scrolled up
        if (!this.isUserScrolling) {
          buffer.ydisp++;
        }
      } else {
        // When the buffer is full and the user has scrolled up, keep the text
        // stable unless ydisp is right at the top
        if (this.isUserScrolling) {
          buffer.ydisp = Math.max(buffer.ydisp - 1, 0);
        }
      }
    } else {
      // scrollTop is non-zero which means no line will be going to the
      // scrollback, instead we can just shift them in-place.
      const scrollRegionHeight = bottomRow - topRow + 1 /* as it's zero-based */;
      buffer.lines.shiftElements(topRow + 1, scrollRegionHeight - 1, -1);
      buffer.lines.set(bottomRow, newLine.clone());
    }

    // Move the viewport to the bottom of the buffer unless the user is
    // scrolling.
    if (!this.isUserScrolling) {
      buffer.ydisp = buffer.ybase;
    }

    this._onScroll.fire(buffer.ydisp);
  }

  /**
   * Scroll the display of the terminal
   * @param disp The number of lines to scroll down (negative scroll up).
   * @param suppressScrollEvent Don't emit the scroll event as scrollLines. This is used
   * to avoid unwanted events being handled by the viewport when the event was triggered from the
   * viewport originally.
   */
  public scrollLines(disp: number, suppressScrollEvent?: boolean): void {
    const buffer = this.buffer;
    if (disp < 0) {
      if (buffer.ydisp === 0) {
        return;
      }
      this.isUserScrolling = true;
    } else if (disp + buffer.ydisp >= buffer.ybase) {
      this.isUserScrolling = false;
    }

    const oldYdisp = buffer.ydisp;
    buffer.ydisp = Math.max(Math.min(buffer.ydisp + disp, buffer.ybase), 0);

    // No change occurred, don't trigger scroll/refresh
    if (oldYdisp === buffer.ydisp) {
      return;
    }

    if (!suppressScrollEvent) {
      this._onScroll.fire(buffer.ydisp);
    }
  }
}
