/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  QueryHandler,
  type QuerySelector,
  type QuerySelectorAll,
} from './QueryHandler.js';

/**
 * @internal
 */
export class PQueryHandler extends QueryHandler {
  static override querySelectorAll: QuerySelectorAll = (
    element,
    selector,
    {pQuerySelectorAll},
  ) => {
    return pQuerySelectorAll(element, selector);
  };
  static override querySelector: QuerySelector = (
    element,
    selector,
    {pQuerySelector},
  ) => {
    return pQuerySelector(element, selector);
  };
}
