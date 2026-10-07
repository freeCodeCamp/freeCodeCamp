/**
 * Copyright (c) 2017 The xterm.js authors. All rights reserved.
 * @license MIT
 */

import { Terminal } from '@xterm/xterm';
import { ITerminal } from 'browser/Types';
import { IDisposable } from 'common/Types';
import type { Event } from 'vs/base/common/event';

export interface IDimensions {
  width: number;
  height: number;
}

export interface IOffset {
  top: number;
  left: number;
}

export interface IRenderDimensions {
  /**
   * Dimensions measured in CSS pixels (ie. device pixels / device pixel ratio).
   */
  css: {
    canvas: IDimensions;
    cell: IDimensions;
  };
  /**
   * Dimensions measured in actual pixels as rendered to the device.
   */
  device: {
    canvas: IDimensions;
    cell: IDimensions;
    char: IDimensions & IOffset;
  };
}

export interface IRequestRedrawEvent {
  start: number;
  end: number;
}

/**
 * Note that IRenderer implementations should emit the refresh event after
 * rendering rows to the screen.
 */
export interface IRenderer extends IDisposable {
  readonly dimensions: IRenderDimensions;

  /**
   * Fires when the renderer is requesting to be redrawn on the next animation
   * frame but is _not_ a result of content changing (eg. selection changes).
   */
  readonly onRequestRedraw: Event<IRequestRedrawEvent>;

  dispose(): void;
  handleDevicePixelRatioChange(): void;
  handleResize(cols: number, rows: number): void;
  handleCharSizeChanged(): void;
  handleBlur(): void;
  handleFocus(): void;
  handleSelectionChanged(start: [number, number] | undefined, end: [number, number] | undefined, columnSelectMode: boolean): void;
  handleCursorMove(): void;
  clear(): void;
  renderRows(start: number, end: number): void;
  clearTextureAtlas?(): void;
}

export interface ISelectionRenderModel {
  readonly hasSelection: boolean;
  readonly columnSelectMode: boolean;
  readonly viewportStartRow: number;
  readonly viewportEndRow: number;
  readonly viewportCappedStartRow: number;
  readonly viewportCappedEndRow: number;
  readonly startCol: number;
  readonly endCol: number;
  readonly selectionStart: [number, number] | undefined;
  readonly selectionEnd: [number, number] | undefined;
  clear(): void;
  update(terminal: ITerminal, start: [number, number] | undefined, end: [number, number] | undefined, columnSelectMode?: boolean): void;
  isCellSelected(terminal: Terminal, x: number, y: number): boolean;
}
