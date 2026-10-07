/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
import { AsyncIterableUtil } from '../util/AsyncIterableUtil.js';
import { ariaQuerySelectorAll } from './ARIAQuerySelector.js';
import { customQuerySelectors } from './CustomQuerySelector.js';
import { textQuerySelectorAll } from './TextQuerySelector.js';
import { pierce, pierceAll } from './util.js';
import { xpathQuerySelectorAll } from './XPathQuerySelector.js';
const IDENT_TOKEN_START = /[-\w\P{ASCII}*]/u;
const isQueryableNode = (node) => {
    return 'querySelectorAll' in node;
};
class PQueryEngine {
    #complexSelector;
    #compoundSelector = [];
    #selector = undefined;
    elements;
    constructor(element, complexSelector) {
        this.elements = [element];
        this.#complexSelector = complexSelector;
        this.#next();
    }
    async run() {
        if (typeof this.#selector === 'string') {
            switch (this.#selector.trimStart()) {
                case ':scope':
                    // `:scope` has some special behavior depending on the node. It always
                    // represents the current node within a compound selector, but by
                    // itself, it depends on the node. For example, Document is
                    // represented by `<html>`, but any HTMLElement is not represented by
                    // itself (i.e. `null`). This can be troublesome if our combinators
                    // are used right after so we treat this selector specially.
                    this.#next();
                    break;
            }
        }
        for (; this.#selector !== undefined; this.#next()) {
            const selector = this.#selector;
            if (typeof selector === 'string') {
                // The regular expression tests if the selector is a type/universal
                // selector. Any other case means we want to apply the selector onto
                // the element itself (e.g. `element.class`, `element>div`,
                // `element:hover`, etc.).
                if (selector[0] && IDENT_TOKEN_START.test(selector[0])) {
                    this.elements = AsyncIterableUtil.flatMap(this.elements, async function* (element) {
                        if (isQueryableNode(element)) {
                            yield* element.querySelectorAll(selector);
                        }
                    });
                }
                else {
                    this.elements = AsyncIterableUtil.flatMap(this.elements, async function* (element) {
                        if (!element.parentElement) {
                            if (!isQueryableNode(element)) {
                                return;
                            }
                            yield* element.querySelectorAll(selector);
                            return;
                        }
                        let index = 0;
                        for (const child of element.parentElement.children) {
                            ++index;
                            if (child === element) {
                                break;
                            }
                        }
                        yield* element.parentElement.querySelectorAll(`:scope>:nth-child(${index})${selector}`);
                    });
                }
            }
            else {
                this.elements = AsyncIterableUtil.flatMap(this.elements, async function* (element) {
                    switch (selector.name) {
                        case 'text':
                            yield* textQuerySelectorAll(element, selector.value);
                            break;
                        case 'xpath':
                            yield* xpathQuerySelectorAll(element, selector.value);
                            break;
                        case 'aria':
                            yield* ariaQuerySelectorAll(element, selector.value);
                            break;
                        default:
                            const querySelector = customQuerySelectors.get(selector.name);
                            if (!querySelector) {
                                throw new Error(`Unknown selector type: ${selector.name}`);
                            }
                            yield* querySelector.querySelectorAll(element, selector.value);
                    }
                });
            }
        }
    }
    #next() {
        if (this.#compoundSelector.length !== 0) {
            this.#selector = this.#compoundSelector.shift();
            return;
        }
        if (this.#complexSelector.length === 0) {
            this.#selector = undefined;
            return;
        }
        const selector = this.#complexSelector.shift();
        switch (selector) {
            case ">>>>" /* PCombinator.Child */: {
                this.elements = AsyncIterableUtil.flatMap(this.elements, pierce);
                this.#next();
                break;
            }
            case ">>>" /* PCombinator.Descendent */: {
                this.elements = AsyncIterableUtil.flatMap(this.elements, pierceAll);
                this.#next();
                break;
            }
            default:
                this.#compoundSelector = selector;
                this.#next();
                break;
        }
    }
}
class DepthCalculator {
    #cache = new WeakMap();
    calculate(node, depth = []) {
        if (node === null) {
            return depth;
        }
        if (node instanceof ShadowRoot) {
            node = node.host;
        }
        const cachedDepth = this.#cache.get(node);
        if (cachedDepth) {
            return [...cachedDepth, ...depth];
        }
        let index = 0;
        for (let prevSibling = node.previousSibling; prevSibling; prevSibling = prevSibling.previousSibling) {
            ++index;
        }
        const value = this.calculate(node.parentNode, [index]);
        this.#cache.set(node, value);
        return [...value, ...depth];
    }
}
const compareDepths = (a, b) => {
    if (a.length + b.length === 0) {
        return 0;
    }
    const [i = -1, ...otherA] = a;
    const [j = -1, ...otherB] = b;
    if (i === j) {
        return compareDepths(otherA, otherB);
    }
    return i < j ? -1 : 1;
};
const domSort = async function* (elements) {
    const results = new Set();
    for await (const element of elements) {
        results.add(element);
    }
    const calculator = new DepthCalculator();
    yield* [...results.values()]
        .map(result => {
        return [result, calculator.calculate(result)];
    })
        .sort(([, a], [, b]) => {
        return compareDepths(a, b);
    })
        .map(([result]) => {
        return result;
    });
};
/**
 * Queries the given node for all nodes matching the given text selector.
 *
 * @internal
 */
export const pQuerySelectorAll = function (root, selector) {
    const selectors = JSON.parse(selector);
    // If there are any empty elements, then this implies the selector has
    // contiguous combinators (e.g. `>>> >>>>`) or starts/ends with one which we
    // treat as illegal, similar to existing behavior.
    if (selectors.some(parts => {
        let i = 0;
        return parts.some(parts => {
            if (typeof parts === 'string') {
                ++i;
            }
            else {
                i = 0;
            }
            return i > 1;
        });
    })) {
        throw new Error('Multiple deep combinators found in sequence.');
    }
    return domSort(AsyncIterableUtil.flatMap(selectors, selectorParts => {
        const query = new PQueryEngine(root, selectorParts);
        void query.run();
        return query.elements;
    }));
};
/**
 * Queries the given node for all nodes matching the given text selector.
 *
 * @internal
 */
export const pQuerySelector = async function (root, selector) {
    for await (const element of pQuerySelectorAll(root, selector)) {
        return element;
    }
    return null;
};
//# sourceMappingURL=PQuerySelector.js.map