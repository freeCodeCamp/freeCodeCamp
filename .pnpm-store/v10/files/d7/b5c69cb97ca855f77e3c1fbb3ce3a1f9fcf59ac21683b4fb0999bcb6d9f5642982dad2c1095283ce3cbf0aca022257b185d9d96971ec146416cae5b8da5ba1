/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  QueryHandler,
  type QuerySelectorAll,
  type QuerySelector,
} from './QueryHandler.js';

/**
 * @internal
 */
export class XPathQueryHandler extends QueryHandler {
  static override querySelectorAll: QuerySelectorAll = (
    element,
    selector,
    {xpathQuerySelectorAll},
  ) => {
    return xpathQuerySelectorAll(element, selector);
  };

  static override querySelector: QuerySelector = (
    element: Node,
    selector: string,
    {xpathQuerySelectorAll},
  ) => {
    for (const result of xpathQuerySelectorAll(element, selector, 1)) {
      return result;
    }
    return null;
  };
}
