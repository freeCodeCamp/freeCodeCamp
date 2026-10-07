/**
 * Copyright (c) 2019 The xterm.js authors. All rights reserved.
 * @license MIT
 */

import { CHAR_DATA_CODE_INDEX, NULL_CELL_CODE, WHITESPACE_CELL_CODE } from 'common/buffer/Constants';
import { IBufferService } from 'common/services/Services';

export function updateWindowsModeWrappedState(bufferService: IBufferService): void {
  // Winpty does not support wraparound mode which means that lines will never
  // be marked as wrapped. This causes issues for things like copying a line
  // retaining the wrapped new line characters or if consumers are listening
  // in on the data stream.
  //
  // The workaround for this is to listen to every incoming line feed and mark
  // the line as wrapped if the last character in the previous line is not a
  // space. This is certainly not without its problems, but generally on
  // Windows when text reaches the end of the terminal it's likely going to be
  // wrapped.
  const line = bufferService.buffer.lines.get(bufferService.buffer.ybase + bufferService.buffer.y - 1);
  const lastChar = line?.get(bufferService.cols - 1);

  const nextLine = bufferService.buffer.lines.get(bufferService.buffer.ybase + bufferService.buffer.y);
  if (nextLine && lastChar) {
    nextLine.isWrapped = (lastChar[CHAR_DATA_CODE_INDEX] !== NULL_CELL_CODE && lastChar[CHAR_DATA_CODE_INDEX] !== WHITESPACE_CELL_CODE);
  }
}
