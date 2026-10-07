/**
 * Copyright (c) 2021 The xterm.js authors. All rights reserved.
 * @license MIT
 */

import { IBufferRange } from '@xterm/xterm';

export function getRangeLength(range: IBufferRange, bufferCols: number): number {
  if (range.start.y > range.end.y) {
    throw new Error(`Buffer range end (${range.end.x}, ${range.end.y}) cannot be before start (${range.start.x}, ${range.start.y})`);
  }
  return bufferCols * (range.end.y - range.start.y) + (range.end.x - range.start.x + 1);
}
