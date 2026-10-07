/**
 * @license
 * Copyright 2018 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */

import type {Protocol} from 'devtools-protocol';

import type {ElementHandle} from '../api/ElementHandle.js';
import type {Realm} from '../api/Realm.js';
import type {CdpFrame} from '../cdp/Frame.js';
import {debugError} from '../common/util.js';

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
export class Accessibility {
  #realm: Realm;
  #frameId: string;

  /**
   * @internal
   */
  constructor(realm: Realm, frameId = '') {
    this.#realm = realm;
    this.#frameId = frameId;
  }

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
  public async snapshot(
    options: SnapshotOptions = {},
  ): Promise<SerializedAXNode | null> {
    const {
      interestingOnly = true,
      root = null,
      includeIframes = false,
    } = options;
    const {nodes} = await this.#realm.environment.client.send(
      'Accessibility.getFullAXTree',
      {
        frameId: this.#frameId,
      },
    );
    let backendNodeId: number | undefined;
    if (root) {
      const {node} = await this.#realm.environment.client.send(
        'DOM.describeNode',
        {
          objectId: root.id,
        },
      );
      backendNodeId = node.backendNodeId;
    }
    const defaultRoot = AXNode.createTree(this.#realm, nodes);
    const populateIframes = async (root: AXNode): Promise<void> => {
      if (root.payload.role?.value === 'Iframe') {
        if (!root.payload.backendDOMNodeId) {
          return;
        }
        using handle = (await this.#realm.adoptBackendNode(
          root.payload.backendDOMNodeId,
        )) as ElementHandle<Element>;
        if (!handle || !('contentFrame' in handle)) {
          return;
        }
        const frame = await handle.contentFrame();
        if (!frame) {
          return;
        }
        try {
          const iframeSnapshot = await frame.accessibility.snapshot(options);
          root.iframeSnapshot = iframeSnapshot ?? undefined;
        } catch (error) {
          // Frames can get detached at any time resulting in errors.
          debugError(error);
        }
      }
      for (const child of root.children) {
        await populateIframes(child);
      }
    };

    let needle: AXNode | null = defaultRoot;
    if (!defaultRoot) {
      return null;
    }

    if (includeIframes) {
      await populateIframes(defaultRoot);
    }

    if (backendNodeId) {
      needle = defaultRoot.find(node => {
        return node.payload.backendDOMNodeId === backendNodeId;
      });
    }

    if (!needle) {
      return null;
    }

    if (!interestingOnly) {
      return this.serializeTree(needle)[0] ?? null;
    }

    const interestingNodes = new Set<AXNode>();
    this.collectInterestingNodes(interestingNodes, defaultRoot, false);

    return this.serializeTree(needle, interestingNodes)[0] ?? null;
  }

  private serializeTree(
    node: AXNode,
    interestingNodes?: Set<AXNode>,
  ): SerializedAXNode[] {
    const children: SerializedAXNode[] = [];
    for (const child of node.children) {
      children.push(...this.serializeTree(child, interestingNodes));
    }

    if (interestingNodes && !interestingNodes.has(node)) {
      return children;
    }

    const serializedNode = node.serialize();
    if (children.length) {
      serializedNode.children = children;
    }
    if (node.iframeSnapshot) {
      if (!serializedNode.children) {
        serializedNode.children = [];
      }
      serializedNode.children.push(node.iframeSnapshot);
    }
    return [serializedNode];
  }

  private collectInterestingNodes(
    collection: Set<AXNode>,
    node: AXNode,
    insideControl: boolean,
  ): void {
    if (node.isInteresting(insideControl) || node.iframeSnapshot) {
      collection.add(node);
    }
    if (node.isLeafNode()) {
      return;
    }
    insideControl = insideControl || node.isControl();
    for (const child of node.children) {
      this.collectInterestingNodes(collection, child, insideControl);
    }
  }
}

class AXNode {
  public payload: Protocol.Accessibility.AXNode;
  public children: AXNode[] = [];
  public iframeSnapshot?: SerializedAXNode;

  #richlyEditable = false;
  #editable = false;
  #focusable = false;
  #hidden = false;
  #busy = false;
  #modal = false;
  #hasErrormessage = false;
  #hasDetails = false;
  #name: string;
  #role: string;
  #description?: string;
  #roledescription?: string;
  #live?: string;
  #ignored: boolean;
  #cachedHasFocusableChild?: boolean;
  #realm: Realm;

  constructor(realm: Realm, payload: Protocol.Accessibility.AXNode) {
    this.payload = payload;
    this.#role = this.payload.role ? this.payload.role.value : 'Unknown';
    this.#ignored = this.payload.ignored;
    this.#name = this.payload.name ? this.payload.name.value : '';
    this.#description = this.payload.description
      ? this.payload.description.value
      : undefined;
    this.#realm = realm;
    for (const property of this.payload.properties || []) {
      if (property.name === 'editable') {
        this.#richlyEditable = property.value.value === 'richtext';
        this.#editable = true;
      }
      if (property.name === 'focusable') {
        this.#focusable = property.value.value;
      }
      if (property.name === 'hidden') {
        this.#hidden = property.value.value;
      }
      if (property.name === 'busy') {
        this.#busy = property.value.value;
      }
      if (property.name === 'live') {
        this.#live = property.value.value;
      }
      if (property.name === 'modal') {
        this.#modal = property.value.value;
      }
      if (property.name === 'roledescription') {
        this.#roledescription = property.value.value;
      }
      if (property.name === 'errormessage') {
        this.#hasErrormessage = true;
      }
      if (property.name === 'details') {
        this.#hasDetails = true;
      }
    }
  }

  #isPlainTextField(): boolean {
    if (this.#richlyEditable) {
      return false;
    }
    if (this.#editable) {
      return true;
    }
    return this.#role === 'textbox' || this.#role === 'searchbox';
  }

  #isTextOnlyObject(): boolean {
    const role = this.#role;
    return (
      role === 'LineBreak' ||
      role === 'text' ||
      role === 'InlineTextBox' ||
      role === 'StaticText'
    );
  }

  #hasFocusableChild(): boolean {
    if (this.#cachedHasFocusableChild === undefined) {
      this.#cachedHasFocusableChild = false;
      for (const child of this.children) {
        if (child.#focusable || child.#hasFocusableChild()) {
          this.#cachedHasFocusableChild = true;
          break;
        }
      }
    }
    return this.#cachedHasFocusableChild;
  }

  public find(predicate: (x: AXNode) => boolean): AXNode | null {
    if (predicate(this)) {
      return this;
    }
    for (const child of this.children) {
      const result = child.find(predicate);
      if (result) {
        return result;
      }
    }
    return null;
  }

  public isLeafNode(): boolean {
    if (!this.children.length) {
      return true;
    }

    // These types of objects may have children that we use as internal
    // implementation details, but we want to expose them as leaves to platform
    // accessibility APIs because screen readers might be confused if they find
    // any children.
    if (this.#isPlainTextField() || this.#isTextOnlyObject()) {
      return true;
    }

    // Roles whose children are only presentational according to the ARIA and
    // HTML5 Specs should be hidden from screen readers.
    // (Note that whilst ARIA buttons can have only presentational children, HTML5
    // buttons are allowed to have content.)
    switch (this.#role) {
      case 'doc-cover':
      case 'graphics-symbol':
      case 'img':
      case 'image':
      case 'Meter':
      case 'scrollbar':
      case 'slider':
      case 'separator':
      case 'progressbar':
        return true;
      default:
        break;
    }

    if (this.#hasFocusableChild()) {
      return false;
    }

    if (this.#role === 'heading' && this.#name) {
      return true;
    }

    return false;
  }

  public isControl(): boolean {
    switch (this.#role) {
      case 'button':
      case 'checkbox':
      case 'ColorWell':
      case 'combobox':
      case 'DisclosureTriangle':
      case 'listbox':
      case 'menu':
      case 'menubar':
      case 'menuitem':
      case 'menuitemcheckbox':
      case 'menuitemradio':
      case 'radio':
      case 'scrollbar':
      case 'searchbox':
      case 'slider':
      case 'spinbutton':
      case 'switch':
      case 'tab':
      case 'textbox':
      case 'tree':
      case 'treeitem':
        return true;
      default:
        return false;
    }
  }

  public isLandmark(): boolean {
    switch (this.#role) {
      case 'banner':
      case 'complementary':
      case 'contentinfo':
      case 'form':
      case 'main':
      case 'navigation':
      case 'region':
      case 'search':
        return true;
      default:
        return false;
    }
  }

  public isInteresting(insideControl: boolean): boolean {
    const role = this.#role;
    if (role === 'Ignored' || this.#hidden || this.#ignored) {
      return false;
    }

    if (this.isLandmark()) {
      return true;
    }

    if (
      this.#focusable ||
      this.#richlyEditable ||
      this.#busy ||
      (this.#live && this.#live !== 'off') ||
      this.#modal ||
      this.#hasErrormessage ||
      this.#hasDetails ||
      this.#roledescription
    ) {
      return true;
    }

    // If it's not focusable but has a control role, then it's interesting.
    if (this.isControl()) {
      return true;
    }

    // A non focusable child of a control is not interesting
    if (insideControl) {
      return false;
    }

    return this.isLeafNode() && (!!this.#name || !!this.#description);
  }

  public serialize(): SerializedAXNode {
    const properties = new Map<string, number | string | boolean>();
    for (const property of this.payload.properties || []) {
      properties.set(property.name.toLowerCase(), property.value.value);
    }
    if (this.payload.name) {
      properties.set('name', this.payload.name.value);
    }
    if (this.payload.value) {
      properties.set('value', this.payload.value.value);
    }
    if (this.payload.description) {
      properties.set('description', this.payload.description.value);
    }

    const node: SerializedAXNode = {
      role: this.#role,
      elementHandle: async (): Promise<ElementHandle | null> => {
        if (!this.payload.backendDOMNodeId) {
          return null;
        }
        using handle = await this.#realm.adoptBackendNode(
          this.payload.backendDOMNodeId,
        );

        // Since Text nodes are not elements, we want to
        // return a handle to the parent element for them.
        return (await handle.evaluateHandle(node => {
          return node.nodeType === Node.TEXT_NODE ? node.parentElement : node;
        })) as ElementHandle<Element>;
      },
      backendNodeId: this.payload.backendDOMNodeId,
      // LoaderId is an experimental mechanism to establish unique IDs across
      // navigations.
      loaderId: (this.#realm.environment as CdpFrame)._loaderId,
    };

    type UserStringProperty =
      | 'name'
      | 'value'
      | 'description'
      | 'keyshortcuts'
      | 'roledescription'
      | 'valuetext'
      | 'url';

    const userStringProperties: UserStringProperty[] = [
      'name',
      'value',
      'description',
      'keyshortcuts',
      'roledescription',
      'valuetext',
      'url',
    ];
    const getUserStringPropertyValue = (key: UserStringProperty): string => {
      return properties.get(key) as string;
    };

    for (const userStringProperty of userStringProperties) {
      if (!properties.has(userStringProperty)) {
        continue;
      }

      node[userStringProperty] = getUserStringPropertyValue(userStringProperty);
    }

    type BooleanProperty =
      | 'disabled'
      | 'expanded'
      | 'focused'
      | 'modal'
      | 'multiline'
      | 'multiselectable'
      | 'readonly'
      | 'required'
      | 'selected'
      | 'busy'
      | 'atomic';
    const booleanProperties: BooleanProperty[] = [
      'disabled',
      'expanded',
      'focused',
      'modal',
      'multiline',
      'multiselectable',
      'readonly',
      'required',
      'selected',
      'busy',
      'atomic',
    ];
    const getBooleanPropertyValue = (key: BooleanProperty): boolean => {
      return !!properties.get(key);
    };

    for (const booleanProperty of booleanProperties) {
      // RootWebArea's treat focus differently than other nodes. They report whether
      // their frame has focus, not whether focus is specifically on the root
      // node.
      if (booleanProperty === 'focused' && this.#role === 'RootWebArea') {
        continue;
      }
      if (!properties.has(booleanProperty)) {
        continue;
      }
      node[booleanProperty] = getBooleanPropertyValue(booleanProperty);
    }

    type TristateProperty = 'checked' | 'pressed';
    const tristateProperties: TristateProperty[] = ['checked', 'pressed'];
    for (const tristateProperty of tristateProperties) {
      if (!properties.has(tristateProperty)) {
        continue;
      }
      const value = properties.get(tristateProperty);
      node[tristateProperty] =
        value === 'mixed' ? 'mixed' : value === 'true' ? true : false;
    }

    type NumbericalProperty = 'level' | 'valuemax' | 'valuemin';
    const numericalProperties: NumbericalProperty[] = [
      'level',
      'valuemax',
      'valuemin',
    ];
    const getNumericalPropertyValue = (key: NumbericalProperty): number => {
      return properties.get(key) as number;
    };
    for (const numericalProperty of numericalProperties) {
      if (!properties.has(numericalProperty)) {
        continue;
      }
      node[numericalProperty] = getNumericalPropertyValue(numericalProperty);
    }

    type TokenProperty =
      | 'autocomplete'
      | 'haspopup'
      | 'invalid'
      | 'orientation'
      | 'live'
      | 'relevant'
      | 'errormessage'
      | 'details';
    const tokenProperties: TokenProperty[] = [
      'autocomplete',
      'haspopup',
      'invalid',
      'orientation',
      'live',
      'relevant',
      'errormessage',
      'details',
    ];
    const getTokenPropertyValue = (key: TokenProperty): string => {
      return properties.get(key) as string;
    };
    for (const tokenProperty of tokenProperties) {
      const value = getTokenPropertyValue(tokenProperty);
      if (!value || value === 'false') {
        continue;
      }
      node[tokenProperty] = getTokenPropertyValue(tokenProperty);
    }
    return node;
  }

  public static createTree(
    realm: Realm,
    payloads: Protocol.Accessibility.AXNode[],
  ): AXNode | null {
    const nodeById = new Map<string, AXNode>();
    for (const payload of payloads) {
      nodeById.set(payload.nodeId, new AXNode(realm, payload));
    }
    for (const node of nodeById.values()) {
      for (const childId of node.payload.childIds || []) {
        const child = nodeById.get(childId);
        if (child) {
          node.children.push(child);
        }
      }
    }
    return nodeById.values().next().value ?? null;
  }
}
