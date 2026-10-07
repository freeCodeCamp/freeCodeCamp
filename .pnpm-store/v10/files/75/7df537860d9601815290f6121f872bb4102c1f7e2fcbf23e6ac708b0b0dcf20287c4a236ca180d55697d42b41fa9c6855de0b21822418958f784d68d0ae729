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
export class CSSQueryHandler extends QueryHandler {
  static override querySelector = (
    element: Node,
    selector: string,
    {cssQuerySelector}: PuppeteerInjectedUtil,
  ): Node | null => {
    return cssQuerySelector(element, selector);
  };
  static override querySelectorAll = (
    element: Node,
    selector: string,
    {cssQuerySelectorAll}: PuppeteerInjectedUtil,
  ): Iterable<Node> => {
    return cssQuerySelectorAll(element, selector);
  };
}
