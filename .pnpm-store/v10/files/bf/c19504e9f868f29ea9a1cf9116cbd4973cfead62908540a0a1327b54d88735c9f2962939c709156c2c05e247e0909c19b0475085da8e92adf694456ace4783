/**
 * Copyright (c) 2018 The xterm.js authors. All rights reserved.
 * @license MIT
 */

import { C0 } from 'common/data/EscapeSequences';
import { IBufferService } from 'common/services/Services';

const enum Direction {
  UP = 'A',
  DOWN = 'B',
  RIGHT = 'C',
  LEFT = 'D'
}

/**
 * Concatenates all the arrow sequences together.
 * Resets the starting row to an unwrapped row, moves to the requested row,
 * then moves to requested col.
 */
export function moveToCellSequence(targetX: number, targetY: number, bufferService: IBufferService, applicationCursor: boolean): string {
  const startX = bufferService.buffer.x;
  const startY = bufferService.buffer.y;

  // The alt buffer should try to navigate between rows
  if (!bufferService.buffer.hasScrollback) {
    return resetStartingRow(startX, startY, targetX, targetY, bufferService, applicationCursor) +
      moveToRequestedRow(startY, targetY, bufferService, applicationCursor) +
      moveToRequestedCol(startX, startY, targetX, targetY, bufferService, applicationCursor);
  }

  // Only move horizontally for the normal buffer
  let direction;
  if (startY === targetY) {
    direction = startX > targetX ? Direction.LEFT : Direction.RIGHT;
    return repeat(Math.abs(startX - targetX), sequence(direction, applicationCursor));
  }
  direction = startY > targetY ? Direction.LEFT : Direction.RIGHT;
  const rowDifference = Math.abs(startY - targetY);
  const cellsToMove = colsFromRowEnd(startY > targetY ? targetX : startX, bufferService) +
    (rowDifference - 1) * bufferService.cols + 1 /* wrap around 1 row */ +
    colsFromRowBeginning(startY > targetY ? startX : targetX, bufferService);
  return repeat(cellsToMove, sequence(direction, applicationCursor));
}

/**
 * Find the number of cols from a row beginning to a col.
 */
function colsFromRowBeginning(currX: number, bufferService: IBufferService): number {
  return currX - 1;
}

/**
 * Find the number of cols from a col to row end.
 */
function colsFromRowEnd(currX: number, bufferService: IBufferService): number {
  return bufferService.cols - currX;
}

/**
 * If the initial position of the cursor is on a row that is wrapped, move the
 * cursor up to the first row that is not wrapped to have accurate vertical
 * positioning.
 */
function resetStartingRow(startX: number, startY: number, targetX: number, targetY: number, bufferService: IBufferService, applicationCursor: boolean): string {
  if (moveToRequestedRow(startY, targetY, bufferService, applicationCursor).length === 0) {
    return '';
  }
  return repeat(bufferLine(
    startX, startY, startX,
    startY - wrappedRowsForRow(startY, bufferService), false, bufferService
  ).length, sequence(Direction.LEFT, applicationCursor));
}

/**
 * Using the reset starting and ending row, move to the requested row,
 * ignoring wrapped rows
 */
function moveToRequestedRow(startY: number, targetY: number, bufferService: IBufferService, applicationCursor: boolean): string {
  const startRow = startY - wrappedRowsForRow(startY, bufferService);
  const endRow = targetY - wrappedRowsForRow(targetY, bufferService);

  const rowsToMove = Math.abs(startRow - endRow) - wrappedRowsCount(startY, targetY, bufferService);

  return repeat(rowsToMove, sequence(verticalDirection(startY, targetY), applicationCursor));
}

/**
 * Move to the requested col on the ending row
 */
function moveToRequestedCol(startX: number, startY: number, targetX: number, targetY: number, bufferService: IBufferService, applicationCursor: boolean): string {
  let startRow;
  if (moveToRequestedRow(startY, targetY, bufferService, applicationCursor).length > 0) {
    startRow = targetY - wrappedRowsForRow(targetY, bufferService);
  } else {
    startRow = startY;
  }

  const endRow = targetY;
  const direction = horizontalDirection(startX, startY, targetX, targetY, bufferService, applicationCursor);

  return repeat(bufferLine(
    startX, startRow, targetX, endRow,
    direction === Direction.RIGHT, bufferService
  ).length, sequence(direction, applicationCursor));
}

/**
 * Utility functions
 */

/**
 * Calculates the number of wrapped rows between the unwrapped starting and
 * ending rows. These rows need to ignored since the cursor skips over them.
 */
function wrappedRowsCount(startY: number, targetY: number, bufferService: IBufferService): number {
  let wrappedRows = 0;
  const startRow = startY - wrappedRowsForRow(startY, bufferService);
  const endRow = targetY - wrappedRowsForRow(targetY, bufferService);

  for (let i = 0; i < Math.abs(startRow - endRow); i++) {
    const direction = verticalDirection(startY, targetY) === Direction.UP ? -1 : 1;
    const line = bufferService.buffer.lines.get(startRow + (direction * i));
    if (line?.isWrapped) {
      wrappedRows++;
    }
  }

  return wrappedRows;
}

/**
 * Calculates the number of wrapped rows that make up a given row.
 * @param currentRow The row to determine how many wrapped rows make it up
 */
function wrappedRowsForRow(currentRow: number, bufferService: IBufferService): number {
  let rowCount = 0;
  let line = bufferService.buffer.lines.get(currentRow);
  let lineWraps = line?.isWrapped;

  while (lineWraps && currentRow >= 0 && currentRow < bufferService.rows) {
    rowCount++;
    line = bufferService.buffer.lines.get(--currentRow);
    lineWraps = line?.isWrapped;
  }

  return rowCount;
}

/**
 * Direction determiners
 */

/**
 * Determines if the right or left arrow is needed
 */
function horizontalDirection(startX: number, startY: number, targetX: number, targetY: number, bufferService: IBufferService, applicationCursor: boolean): Direction {
  let startRow;
  if (moveToRequestedRow(targetX, targetY, bufferService, applicationCursor).length > 0) {
    startRow = targetY - wrappedRowsForRow(targetY, bufferService);
  } else {
    startRow = startY;
  }

  if ((startX < targetX &&
    startRow <= targetY) || // down/right or same y/right
    (startX >= targetX &&
    startRow < targetY)) {  // down/left or same y/left
    return Direction.RIGHT;
  }
  return Direction.LEFT;
}

/**
 * Determines if the up or down arrow is needed
 */
function verticalDirection(startY: number, targetY: number): Direction {
  return startY > targetY ? Direction.UP : Direction.DOWN;
}

/**
 * Constructs the string of chars in the buffer from a starting row and col
 * to an ending row and col
 * @param startCol The starting column position
 * @param startRow The starting row position
 * @param endCol The ending column position
 * @param endRow The ending row position
 * @param forward Direction to move
 */
function bufferLine(
  startCol: number,
  startRow: number,
  endCol: number,
  endRow: number,
  forward: boolean,
  bufferService: IBufferService
): string {
  let currentCol = startCol;
  let currentRow = startRow;
  let bufferStr = '';

  while ((currentCol !== endCol || currentRow !== endRow) &&
         currentRow >= 0 &&
         currentRow < bufferService.buffer.lines.length) {
    currentCol += forward ? 1 : -1;

    if (forward && currentCol > bufferService.cols - 1) {
      bufferStr += bufferService.buffer.translateBufferLineToString(
        currentRow, false, startCol, currentCol
      );
      currentCol = 0;
      startCol = 0;
      currentRow++;
    } else if (!forward && currentCol < 0) {
      bufferStr += bufferService.buffer.translateBufferLineToString(
        currentRow, false, 0, startCol + 1
      );
      currentCol = bufferService.cols - 1;
      startCol = currentCol;
      currentRow--;
    }
  }

  return bufferStr + bufferService.buffer.translateBufferLineToString(
    currentRow, false, startCol, currentCol
  );
}

/**
 * Constructs the escape sequence for clicking an arrow
 * @param direction The direction to move
 */
function sequence(direction: Direction, applicationCursor: boolean): string {
  const mod =  applicationCursor ? 'O' : '[';
  return C0.ESC + mod + direction;
}

/**
 * Returns a string repeated a given number of times
 * Polyfill from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat
 * @param count The number of times to repeat the string
 * @param str The string that is to be repeated
 */
function repeat(count: number, str: string): string {
  count = Math.floor(count);
  let rpt = '';
  for (let i = 0; i < count; i++) {
    rpt += str;
  }
  return rpt;
}
