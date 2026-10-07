/**
 * @license
 * Copyright 2022 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
const TRIVIAL_VALUE_INPUT_TYPES = new Set(['checkbox', 'image', 'radio']);
/**
 * Determines if the node has a non-trivial value property.
 *
 * @internal
 */
const isNonTrivialValueNode = (node) => {
    if (node instanceof HTMLSelectElement) {
        return true;
    }
    if (node instanceof HTMLTextAreaElement) {
        return true;
    }
    if (node instanceof HTMLInputElement &&
        !TRIVIAL_VALUE_INPUT_TYPES.has(node.type)) {
        return true;
    }
    return false;
};
const UNSUITABLE_NODE_NAMES = new Set(['SCRIPT', 'STYLE']);
/**
 * Determines whether a given node is suitable for text matching.
 *
 * @internal
 */
export const isSuitableNodeForTextMatching = (node) => {
    return (!UNSUITABLE_NODE_NAMES.has(node.nodeName) && !document.head?.contains(node));
};
/**
 * Maps {@link Node}s to their computed {@link TextContent}.
 */
const textContentCache = new WeakMap();
const eraseFromCache = (node) => {
    while (node) {
        textContentCache.delete(node);
        if (node instanceof ShadowRoot) {
            node = node.host;
        }
        else {
            node = node.parentNode;
        }
    }
};
/**
 * Erases the cache when the tree has mutated text.
 */
const observedNodes = new WeakSet();
const textChangeObserver = new MutationObserver(mutations => {
    for (const mutation of mutations) {
        eraseFromCache(mutation.target);
    }
});
/**
 * Builds the text content of a node using some custom logic.
 *
 * @remarks
 * The primary reason this function exists is due to {@link ShadowRoot}s not having
 * text content.
 *
 * @internal
 */
export const createTextContent = (root) => {
    let value = textContentCache.get(root);
    if (value) {
        return value;
    }
    value = { full: '', immediate: [] };
    if (!isSuitableNodeForTextMatching(root)) {
        return value;
    }
    let currentImmediate = '';
    if (isNonTrivialValueNode(root)) {
        value.full = root.value;
        value.immediate.push(root.value);
        root.addEventListener('input', event => {
            eraseFromCache(event.target);
        }, { once: true, capture: true });
    }
    else {
        for (let child = root.firstChild; child; child = child.nextSibling) {
            if (child.nodeType === Node.TEXT_NODE) {
                value.full += child.nodeValue ?? '';
                currentImmediate += child.nodeValue ?? '';
                continue;
            }
            if (currentImmediate) {
                value.immediate.push(currentImmediate);
            }
            currentImmediate = '';
            if (child.nodeType === Node.ELEMENT_NODE) {
                value.full += createTextContent(child).full;
            }
        }
        if (currentImmediate) {
            value.immediate.push(currentImmediate);
        }
        if (root instanceof Element && root.shadowRoot) {
            value.full += createTextContent(root.shadowRoot).full;
        }
        if (!observedNodes.has(root)) {
            textChangeObserver.observe(root, {
                childList: true,
                characterData: true,
                subtree: true,
            });
            observedNodes.add(root);
        }
    }
    textContentCache.set(root, value);
    return value;
};
//# sourceMappingURL=TextContent.js.map