/**
 * Copyright (c) 2019 The xterm.js authors. All rights reserved.
 * @license MIT
 */

import { IAttributeData, ICircularList, IBufferLine, ICellData, IMarker, ICharset, IDisposable } from 'common/Types';
import type { Event } from 'vs/base/common/event';

// BufferIndex denotes a position in the buffer: [rowIndex, colIndex]
export type BufferIndex = [number, number];

export interface IBuffer {
  readonly lines: ICircularList<IBufferLine>;
  ydisp: number;
  ybase: number;
  y: number;
  x: number;
  tabs: any;
  scrollBottom: number;
  scrollTop: number;
  hasScrollback: boolean;
  savedY: number;
  savedX: number;
  savedCharset: ICharset | undefined;
  savedCurAttrData: IAttributeData;
  isCursorInViewport: boolean;
  markers: IMarker[];
  translateBufferLineToString(lineIndex: number, trimRight: boolean, startCol?: number, endCol?: number): string;
  getWrappedRangeForLine(y: number): { first: number, last: number };
  nextStop(x?: number): number;
  prevStop(x?: number): number;
  getBlankLine(attr: IAttributeData, isWrapped?: boolean): IBufferLine;
  getNullCell(attr?: IAttributeData): ICellData;
  getWhitespaceCell(attr?: IAttributeData): ICellData;
  addMarker(y: number): IMarker;
  clearMarkers(y: number): void;
  clearAllMarkers(): void;
}

export interface IBufferSet extends IDisposable {
  alt: IBuffer;
  normal: IBuffer;
  active: IBuffer;

  onBufferActivate: Event<{ activeBuffer: IBuffer, inactiveBuffer: IBuffer }>;

  activateNormalBuffer(): void;
  activateAltBuffer(fillAttr?: IAttributeData): void;
  reset(): void;
  resize(newCols: number, newRows: number): void;
  setupTabStops(i?: number): void;
}
