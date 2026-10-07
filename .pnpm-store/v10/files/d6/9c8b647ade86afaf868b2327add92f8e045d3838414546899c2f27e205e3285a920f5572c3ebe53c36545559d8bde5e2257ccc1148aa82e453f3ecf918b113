/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
import type { ElementHandle } from '../api/ElementHandle.js';
import type { Frame } from '../api/Frame.js';
import type { WaitForSelectorOptions } from '../api/Page.js';
import type { PuppeteerInjectedUtil } from '../injected/injected.js';
import type { Awaitable, AwaitableIterable } from './types.js';
/**
 * @internal
 */
export type QuerySelectorAll = (node: Node, selector: string, PuppeteerUtil: PuppeteerInjectedUtil) => AwaitableIterable<Node>;
/**
 * @internal
 */
export type QuerySelector = (node: Node, selector: string, PuppeteerUtil: PuppeteerInjectedUtil) => Awaitable<Node | null>;
/**
 * @internal
 */
export declare const enum PollingOptions {
    RAF = "raf",
    MUTATION = "mutation"
}
/**
 * @internal
 */
export declare class QueryHandler {
    static querySelectorAll?: QuerySelectorAll;
    static querySelector?: QuerySelector;
    static get _querySelector(): QuerySelector;
    static get _querySelectorAll(): QuerySelectorAll;
    /**
     * Queries for multiple nodes given a selector and {@link ElementHandle}.
     *
     * Akin to {@link https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll | Document.querySelectorAll()}.
     */
    static queryAll(element: ElementHandle<Node>, selector: string): AwaitableIterable<ElementHandle<Node>>;
    /**
     * Queries for a single node given a selector and {@link ElementHandle}.
     *
     * Akin to {@link https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector}.
     */
    static queryOne(element: ElementHandle<Node>, selector: string): Promise<ElementHandle<Node> | null>;
    /**
     * Waits until a single node appears for a given selector and
     * {@link ElementHandle}.
     *
     * This will always query the handle in the Puppeteer world and migrate the
     * result to the main world.
     */
    static waitFor(elementOrFrame: ElementHandle<Node> | Frame, selector: string, options: WaitForSelectorOptions & {
        polling?: PollingOptions;
    }): Promise<ElementHandle<Node> | null>;
}
//# sourceMappingURL=QueryHandler.d.ts.map