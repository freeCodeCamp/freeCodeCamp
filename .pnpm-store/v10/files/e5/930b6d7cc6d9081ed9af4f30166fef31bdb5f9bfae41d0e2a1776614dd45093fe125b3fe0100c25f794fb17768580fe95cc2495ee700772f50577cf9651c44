/**
 * @license
 * Copyright 2022 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
import { Deferred } from '../util/Deferred.js';
import * as CustomQuerySelectors from './CustomQuerySelector.js';
import { IntervalPoller, MutationPoller, RAFPoller } from './Poller.js';
import * as PQuerySelector from './PQuerySelector.js';
/**
 * @internal
 */
declare const PuppeteerUtil: Readonly<{
    Deferred: typeof Deferred;
    createFunction: (functionValue: string) => ((...args: unknown[]) => unknown);
    createTextContent: (root: Node) => import("./TextContent.js").TextContent;
    IntervalPoller: typeof IntervalPoller;
    isSuitableNodeForTextMatching: (node: Node) => boolean;
    MutationPoller: typeof MutationPoller;
    RAFPoller: typeof RAFPoller;
    cssQuerySelector: (root: Node, selector: string) => Element | null;
    cssQuerySelectorAll: (root: Node, selector: string) => Iterable<Element>;
    xpathQuerySelectorAll: (root: Node, selector: string, maxResults?: number) => Iterable<Node>;
    pierce(root: Node): IterableIterator<Node | ShadowRoot>;
    pierceAll(root: Node): IterableIterator<Node | ShadowRoot>;
    checkVisibility: (node: Node | null, visible?: boolean) => Node | boolean;
    textQuerySelectorAll: (root: Node, selector: string) => Generator<Element>;
    PCombinator: typeof PQuerySelector.PCombinator;
    pQuerySelectorAll: (root: Node, selector: string) => import("../index-browser.js").AwaitableIterable<Node>;
    pQuerySelector: (root: Node, selector: string) => Promise<Node | null>;
    pierceQuerySelector: (root: Node, selector: string) => Element | null;
    pierceQuerySelectorAll: (element: Node, selector: string) => Element[];
    customQuerySelectors: {
        "__#208@#selectors": Map<string, CustomQuerySelectors.CustomQuerySelector>;
        register(name: string, handler: import("../index-browser.js").CustomQueryHandler): void;
        unregister(name: string): void;
        get(name: string): CustomQuerySelectors.CustomQuerySelector | undefined;
        clear(): void;
    };
    ariaQuerySelector: (root: Node, selector: string) => Promise<Node | null>;
    ariaQuerySelectorAll: (root: Node, selector: string) => AsyncIterable<Node>;
}>;
/**
 * @internal
 */
export type PuppeteerInjectedUtil = typeof PuppeteerUtil;
/**
 * @internal
 */
export default PuppeteerUtil;
//# sourceMappingURL=injected.d.ts.map