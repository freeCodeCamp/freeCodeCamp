/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
import { QueryHandler, } from './QueryHandler.js';
/**
 * @internal
 */
export class XPathQueryHandler extends QueryHandler {
    static querySelectorAll = (element, selector, { xpathQuerySelectorAll }) => {
        return xpathQuerySelectorAll(element, selector);
    };
    static querySelector = (element, selector, { xpathQuerySelectorAll }) => {
        for (const result of xpathQuerySelectorAll(element, selector, 1)) {
            return result;
        }
        return null;
    };
}
//# sourceMappingURL=XPathQueryHandler.js.map