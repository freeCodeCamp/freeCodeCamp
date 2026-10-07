/**
 * @license
 * Copyright 2022 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @internal
 */
export const pierceQuerySelector = (
  root: Node,
  selector: string,
): Element | null => {
  let found: Node | null = null;
  const search = (root: Node) => {
    const iter = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT);
    do {
      const currentNode = iter.currentNode as Element;
      if (currentNode.shadowRoot) {
        search(currentNode.shadowRoot);
      }
      if (currentNode instanceof ShadowRoot) {
        continue;
      }
      if (currentNode !== root && !found && currentNode.matches(selector)) {
        found = currentNode;
      }
    } while (!found && iter.nextNode());
  };
  if (root instanceof Document) {
    root = root.documentElement;
  }
  search(root);
  return found;
};

/**
 * @internal
 */
export const pierceQuerySelectorAll = (
  element: Node,
  selector: string,
): Element[] => {
  const result: Element[] = [];
  const collect = (root: Node) => {
    const iter = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT);
    do {
      const currentNode = iter.currentNode as Element;
      if (currentNode.shadowRoot) {
        collect(currentNode.shadowRoot);
      }
      if (currentNode instanceof ShadowRoot) {
        continue;
      }
      if (currentNode !== root && currentNode.matches(selector)) {
        result.push(currentNode);
      }
    } while (iter.nextNode());
  };
  if (element instanceof Document) {
    element = element.documentElement;
  }
  collect(element);
  return result;
};
