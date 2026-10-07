/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */

import {QueryHandler, type QuerySelectorAll} from './QueryHandler.js';

/**
 * @internal
 */
export class TextQueryHandler extends QueryHandler {
  static override querySelectorAll: QuerySelectorAll = (
    element,
    selector,
    {textQuerySelectorAll},
  ) => {
    return textQuerySelectorAll(element, selector);
  };
}
