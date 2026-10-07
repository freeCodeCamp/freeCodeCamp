/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @internal
 */
export const cssQuerySelector = (
  root: Node,
  selector: string,
): Element | null => {
  // @ts-expect-error assume element root
  return root.querySelector(selector);
};
/**
 * @internal
 */
export const cssQuerySelectorAll = function (
  root: Node,
  selector: string,
): Iterable<Element> {
  // @ts-expect-error assume element root
  return root.querySelectorAll(selector);
};
