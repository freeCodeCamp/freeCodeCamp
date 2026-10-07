/**
 * Copyright (c) 2017 The xterm.js authors. All rights reserved.
 * @license MIT
 */

export function getCoordsRelativeToElement(window: Pick<Window, 'getComputedStyle'>, event: {clientX: number, clientY: number}, element: HTMLElement): [number, number] {
  const rect = element.getBoundingClientRect();
  const elementStyle = window.getComputedStyle(element);
  const leftPadding = parseInt(elementStyle.getPropertyValue('padding-left'));
  const topPadding = parseInt(elementStyle.getPropertyValue('padding-top'));
  return [
    event.clientX - rect.left - leftPadding,
    event.clientY - rect.top - topPadding
  ];
}

/**
 * Gets coordinates within the terminal for a particular mouse event. The result
 * is returned as an array in the form [x, y] instead of an object as it's a
 * little faster and this function is used in some low level code.
 * @param window The window object the element belongs to.
 * @param event The mouse event.
 * @param element The terminal's container element.
 * @param colCount The number of columns in the terminal.
 * @param rowCount The number of rows n the terminal.
 * @param hasValidCharSize Whether there is a valid character size available.
 * @param cssCellWidth The cell width device pixel render dimensions.
 * @param cssCellHeight The cell height device pixel render dimensions.
 * @param isSelection Whether the request is for the selection or not. This will
 * apply an offset to the x value such that the left half of the cell will
 * select that cell and the right half will select the next cell.
 */
export function getCoords(window: Pick<Window, 'getComputedStyle'>, event: Pick<MouseEvent, 'clientX' | 'clientY'>, element: HTMLElement, colCount: number, rowCount: number, hasValidCharSize: boolean, cssCellWidth: number, cssCellHeight: number, isSelection?: boolean): [number, number] | undefined {
  // Coordinates cannot be measured if there are no valid
  if (!hasValidCharSize) {
    return undefined;
  }

  const coords = getCoordsRelativeToElement(window, event, element);
  if (!coords) {
    return undefined;
  }

  coords[0] = Math.ceil((coords[0] + (isSelection ? cssCellWidth / 2 : 0)) / cssCellWidth);
  coords[1] = Math.ceil(coords[1] / cssCellHeight);

  // Ensure coordinates are within the terminal viewport. Note that selections
  // need an addition point of precision to cover the end point (as characters
  // cover half of one char and half of the next).
  coords[0] = Math.min(Math.max(coords[0], 1), colCount + (isSelection ? 1 : 0));
  coords[1] = Math.min(Math.max(coords[1], 1), rowCount);

  return coords;
}
