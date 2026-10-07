/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
import type { AwaitableIterable } from '../common/types.js';
/**
 * @internal
 */
export type CSSSelector = string;
/**
 * @internal
 */
export interface PPseudoSelector {
    name: string;
    value: string;
}
/**
 * @internal
 */
export declare const enum PCombinator {
    Descendent = ">>>",
    Child = ">>>>"
}
/**
 * @internal
 */
export type CompoundPSelector = Array<CSSSelector | PPseudoSelector>;
/**
 * @internal
 */
export type ComplexPSelector = Array<CompoundPSelector | PCombinator>;
/**
 * @internal
 */
export type ComplexPSelectorList = ComplexPSelector[];
/**
 * Queries the given node for all nodes matching the given text selector.
 *
 * @internal
 */
export declare const pQuerySelectorAll: (root: Node, selector: string) => AwaitableIterable<Node>;
/**
 * Queries the given node for all nodes matching the given text selector.
 *
 * @internal
 */
export declare const pQuerySelector: (root: Node, selector: string) => Promise<Node | null>;
//# sourceMappingURL=PQuerySelector.d.ts.map