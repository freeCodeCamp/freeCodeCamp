/**
 * @license
 * Copyright 2022 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @internal
 */
export const xpathQuerySelectorAll = function* (root, selector, maxResults = -1) {
    const doc = root.ownerDocument || document;
    const iterator = doc.evaluate(selector, root, null, XPathResult.ORDERED_NODE_ITERATOR_TYPE);
    const items = [];
    let item;
    // Read all results upfront to avoid
    // https://stackoverflow.com/questions/48235278/xpath-error-the-document-has-mutated-since-the-result-was-returned.
    while ((item = iterator.iterateNext())) {
        items.push(item);
        if (maxResults && items.length === maxResults) {
            break;
        }
    }
    for (let i = 0; i < items.length; i++) {
        item = items[i];
        yield item;
        items[i] = null;
    }
};
//# sourceMappingURL=XPathQuerySelector.js.map