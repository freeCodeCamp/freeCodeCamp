/**
 * @license
 * Copyright 2022 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */

declare global {
  interface Window {
    /**
     * @internal
     */
    __ariaQuerySelector(root: Node, selector: string): Promise<Node | null>;
    /**
     * @internal
     */
    __ariaQuerySelectorAll(root: Node, selector: string): Promise<Node[]>;
  }
}
/**
 * @internal
 */
export const ariaQuerySelector = (
  root: Node,
  selector: string,
): Promise<Node | null> => {
  // In Firefox sandboxes globalThis !== window and we expose bindings on globalThis.
  return (globalThis as unknown as Window).__ariaQuerySelector(root, selector);
};
/**
 * @internal
 */
export const ariaQuerySelectorAll = async function* (
  root: Node,
  selector: string,
): AsyncIterable<Node> {
  // In Firefox sandboxes globalThis !== window and we expose bindings on globalThis.
  yield* await (globalThis as unknown as Window).__ariaQuerySelectorAll(
    root,
    selector,
  );
};
