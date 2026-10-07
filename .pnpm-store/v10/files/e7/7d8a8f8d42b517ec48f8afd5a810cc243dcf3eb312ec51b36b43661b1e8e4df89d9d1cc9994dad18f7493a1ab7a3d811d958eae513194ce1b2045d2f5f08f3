/**
 * @license
 * Copyright 2022 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
import { createTextContent, isSuitableNodeForTextMatching, } from './TextContent.js';
/**
 * Queries the given node for all nodes matching the given text selector.
 *
 * @internal
 */
export const textQuerySelectorAll = function* (root, selector) {
    let yielded = false;
    for (const node of root.childNodes) {
        if (node instanceof Element && isSuitableNodeForTextMatching(node)) {
            let matches;
            if (!node.shadowRoot) {
                matches = textQuerySelectorAll(node, selector);
            }
            else {
                matches = textQuerySelectorAll(node.shadowRoot, selector);
            }
            for (const match of matches) {
                yield match;
                yielded = true;
            }
        }
    }
    if (yielded) {
        return;
    }
    if (root instanceof Element && isSuitableNodeForTextMatching(root)) {
        const textContent = createTextContent(root);
        if (textContent.full.includes(selector)) {
            yield root;
        }
    }
};
//# sourceMappingURL=TextQuerySelector.js.map