/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */

import type {PuppeteerInjectedUtil} from '../injected/injected.js';

import {QueryHandler} from './QueryHandler.js';

/**
 * @internal
 */
export class PierceQueryHandler extends QueryHandler {
  static override querySelector = (
    element: Node,
    selector: string,
    {pierceQuerySelector}: PuppeteerInjectedUtil,
  ): Node | null => {
    return pierceQuerySelector(element, selector);
  };
  static override querySelectorAll = (
    element: Node,
    selector: string,
    {pierceQuerySelectorAll}: PuppeteerInjectedUtil,
  ): Iterable<Node> => {
    return pierceQuerySelectorAll(element, selector);
  };
}
