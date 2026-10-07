/**
 * @license
 * Copyright 2018 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
import type { ElementHandle } from '../api/ElementHandle.js';
import type { Realm } from '../api/Realm.js';
/**
 * Represents a Node and the properties of it that are relevant to Accessibility.
 * @public
 */
export interface SerializedAXNode {
    /**
     * The {@link https://www.w3.org/TR/wai-aria/#usage_intro | role} of the node.
     */
    role: string;
    /**
     * A human readable name for the node.
     */
    name?: string;
    /**
     * The current value of the node.
     */
    value?: string | number;
    /**
     * An additional human readable description of the node.
     */
    description?: string;
    /**
     * Any keyboard shortcuts associated with this node.
     */
    keyshortcuts?: string;
    /**
     * A human readable alternative to the role.
     */
    roledescription?: string;
    /**
     * A description of the current value.
     */
    valuetext?: string;
    disabled?: boolean;
    expanded?: boolean;
    focused?: boolean;
    modal?: boolean;
    multiline?: boolean;
    /**
     * Whether more than one child can be selected.
     */
    multiselectable?: boolean;
    readonly?: boolean;
    required?: boolean;
    selected?: boolean;
    /**
     * Whether the checkbox is checked, or in a
     * {@link https://www.w3.org/TR/wai-aria-practices/examples/checkbox/checkbox-2/checkbox-2.html | mixed state}.
     */
    checked?: boolean | 'mixed';
    /**
     * Whether the node is checked or in a mixed state.
     */
    pressed?: boolean | 'mixed';
    /**
     * The level of a heading.
     */
    level?: number;
    valuemin?: number;
    valuemax?: number;
    autocomplete?: string;
    haspopup?: string;
    /**
     * Whether and in what way this node's value is invalid.
     */
    invalid?: string;
    orientation?: string;
    /**
     * Whether the node is {@link https://www.w3.org/TR/wai-aria/#aria-busy | busy}.
     */
    busy?: boolean;
    /**
     * The {@link https://www.w3.org/TR/wai-aria/#aria-live | live} status of the
     * node.
     */
    live?: string;
    /**
     * Whether the live region is
     * {@link https://www.w3.org/TR/wai-aria/#aria-atomic | atomic}.
     */
    atomic?: boolean;
    /**
     * The {@link https://www.w3.org/TR/wai-aria/#aria-relevant | relevant}
     * changes for the live region.
     */
    relevant?: string;
    /**
     * The {@link https://www.w3.org/TR/wai-aria/#aria-errormessage | error message}
     * for the node.
     */
    errormessage?: string;
    /**
     * The {@link https://www.w3.org/TR/wai-aria/#aria-details | details} for the
     * node.
     */
    details?: string;
    /**
     * Url for link elements.
     */
    url?: string;
    /**
     * Children of this node, if there are any.
     */
    children?: SerializedAXNode[];
    /**
     * CDP-specific ID to reference the DOM node.
     *
     * @internal
     */
    backendNodeId?: number;
    /**
     * CDP-specific documentId.
     *
     * @internal
     */
    loaderId: string;
    /**
     * Get an ElementHandle for this AXNode if available.
     *
     * If the underlying DOM element has been disposed, the method might return an
     * error.
     */
    elementHandle(): Promise<ElementHandle | null>;
}
/**
 * @public
 */
export interface SnapshotOptions {
    /**
     * Prune uninteresting nodes from the tree.
     * @defaultValue `true`
     */
    interestingOnly?: boolean;
    /**
     * If true, gets accessibility trees for each of the iframes in the frame
     * subtree.
     *
     * @defaultValue `false`
     */
    includeIframes?: boolean;
    /**
     * Root node to get the accessibility tree for
     * @defaultValue The root node of the entire page.
     */
    root?: ElementHandle<Node>;
}
/**
 * The Accessibility class provides methods for inspecting the browser's
 * accessibility tree. The accessibility tree is used by assistive technology
 * such as {@link https://en.wikipedia.org/wiki/Screen_reader | screen readers} or
 * {@link https://en.wikipedia.org/wiki/Switch_access | switches}.
 *
 * @remarks
 *
 * Accessibility is a very platform-specific thing. On different platforms,
 * there are different screen readers that might have wildly different output.
 *
 * Blink - Chrome's rendering engine - has a concept of "accessibility tree",
 * which is then translated into different platform-specific APIs. Accessibility
 * namespace gives users access to the Blink Accessibility Tree.
 *
 * Most of the accessibility tree gets filtered out when converting from Blink
 * AX Tree to Platform-specific AX-Tree or by assistive technologies themselves.
 * By default, Puppeteer tries to approximate this filtering, exposing only
 * the "interesting" nodes of the tree.
 *
 * @public
 */
export declare class Accessibility {
    #private;
    /**
     * @internal
     */
    constructor(realm: Realm, frameId?: string);
    /**
     * Captures the current state of the accessibility tree.
     * The returned object represents the root accessible node of the page.
     *
     * @remarks
     *
     * **NOTE** The Chrome accessibility tree contains nodes that go unused on
     * most platforms and by most screen readers. Puppeteer will discard them as
     * well for an easier to process tree, unless `interestingOnly` is set to
     * `false`.
     *
     * @example
     * An example of dumping the entire accessibility tree:
     *
     * ```ts
     * const snapshot = await page.accessibility.snapshot();
     * console.log(snapshot);
     * ```
     *
     * @example
     * An example of logging the focused node's name:
     *
     * ```ts
     * const snapshot = await page.accessibility.snapshot();
     * const node = findFocusedNode(snapshot);
     * console.log(node && node.name);
     *
     * function findFocusedNode(node) {
     *   if (node.focused) return node;
     *   for (const child of node.children || []) {
     *     const foundNode = findFocusedNode(child);
     *     return foundNode;
     *   }
     *   return null;
     * }
     * ```
     *
     * @returns An AXNode object representing the snapshot.
     */
    snapshot(options?: SnapshotOptions): Promise<SerializedAXNode | null>;
    private serializeTree;
    private collectInterestingNodes;
}
//# sourceMappingURL=Accessibility.d.ts.map