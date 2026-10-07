/**
 * @license
 * Copyright 2018 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
var __addDisposableResource = (this && this.__addDisposableResource) || function (env, value, async) {
    if (value !== null && value !== void 0) {
        if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
        var dispose, inner;
        if (async) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            dispose = value[Symbol.asyncDispose];
        }
        if (dispose === void 0) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            dispose = value[Symbol.dispose];
            if (async) inner = dispose;
        }
        if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
        if (inner) dispose = function() { try { inner.call(this); } catch (e) { return Promise.reject(e); } };
        env.stack.push({ value: value, dispose: dispose, async: async });
    }
    else if (async) {
        env.stack.push({ async: true });
    }
    return value;
};
var __disposeResources = (this && this.__disposeResources) || (function (SuppressedError) {
    return function (env) {
        function fail(e) {
            env.error = env.hasError ? new SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
            env.hasError = true;
        }
        var r, s = 0;
        function next() {
            while (r = env.stack.pop()) {
                try {
                    if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
                    if (r.dispose) {
                        var result = r.dispose.call(r.value);
                        if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) { fail(e); return next(); });
                    }
                    else s |= 1;
                }
                catch (e) {
                    fail(e);
                }
            }
            if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
            if (env.hasError) throw env.error;
        }
        return next();
    };
})(typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
});
import { debugError } from '../common/util.js';
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
    #realm;
    #frameId;
    /**
     * @internal
     */
    constructor(realm, frameId = '') {
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
    async snapshot(options = {}) {
        const { interestingOnly = true, root = null, includeIframes = false, } = options;
        const { nodes } = await this.#realm.environment.client.send('Accessibility.getFullAXTree', {
            frameId: this.#frameId,
        });
        let backendNodeId;
        if (root) {
            const { node } = await this.#realm.environment.client.send('DOM.describeNode', {
                objectId: root.id,
            });
            backendNodeId = node.backendNodeId;
        }
        const defaultRoot = AXNode.createTree(this.#realm, nodes);
        const populateIframes = async (root) => {
            if (root.payload.role?.value === 'Iframe') {
                const env_1 = { stack: [], error: void 0, hasError: false };
                try {
                    if (!root.payload.backendDOMNodeId) {
                        return;
                    }
                    const handle = __addDisposableResource(env_1, (await this.#realm.adoptBackendNode(root.payload.backendDOMNodeId)), false);
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
                    }
                    catch (error) {
                        // Frames can get detached at any time resulting in errors.
                        debugError(error);
                    }
                }
                catch (e_1) {
                    env_1.error = e_1;
                    env_1.hasError = true;
                }
                finally {
                    __disposeResources(env_1);
                }
            }
            for (const child of root.children) {
                await populateIframes(child);
            }
        };
        let needle = defaultRoot;
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
        const interestingNodes = new Set();
        this.collectInterestingNodes(interestingNodes, defaultRoot, false);
        return this.serializeTree(needle, interestingNodes)[0] ?? null;
    }
    serializeTree(node, interestingNodes) {
        const children = [];
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
    collectInterestingNodes(collection, node, insideControl) {
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
    payload;
    children = [];
    iframeSnapshot;
    #richlyEditable = false;
    #editable = false;
    #focusable = false;
    #hidden = false;
    #busy = false;
    #modal = false;
    #hasErrormessage = false;
    #hasDetails = false;
    #name;
    #role;
    #description;
    #roledescription;
    #live;
    #ignored;
    #cachedHasFocusableChild;
    #realm;
    constructor(realm, payload) {
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
    #isPlainTextField() {
        if (this.#richlyEditable) {
            return false;
        }
        if (this.#editable) {
            return true;
        }
        return this.#role === 'textbox' || this.#role === 'searchbox';
    }
    #isTextOnlyObject() {
        const role = this.#role;
        return (role === 'LineBreak' ||
            role === 'text' ||
            role === 'InlineTextBox' ||
            role === 'StaticText');
    }
    #hasFocusableChild() {
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
    find(predicate) {
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
    isLeafNode() {
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
    isControl() {
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
    isLandmark() {
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
    isInteresting(insideControl) {
        const role = this.#role;
        if (role === 'Ignored' || this.#hidden || this.#ignored) {
            return false;
        }
        if (this.isLandmark()) {
            return true;
        }
        if (this.#focusable ||
            this.#richlyEditable ||
            this.#busy ||
            (this.#live && this.#live !== 'off') ||
            this.#modal ||
            this.#hasErrormessage ||
            this.#hasDetails ||
            this.#roledescription) {
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
    serialize() {
        const properties = new Map();
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
        const node = {
            role: this.#role,
            elementHandle: async () => {
                const env_2 = { stack: [], error: void 0, hasError: false };
                try {
                    if (!this.payload.backendDOMNodeId) {
                        return null;
                    }
                    const handle = __addDisposableResource(env_2, await this.#realm.adoptBackendNode(this.payload.backendDOMNodeId), false);
                    // Since Text nodes are not elements, we want to
                    // return a handle to the parent element for them.
                    return (await handle.evaluateHandle(node => {
                        return node.nodeType === Node.TEXT_NODE ? node.parentElement : node;
                    }));
                }
                catch (e_2) {
                    env_2.error = e_2;
                    env_2.hasError = true;
                }
                finally {
                    __disposeResources(env_2);
                }
            },
            backendNodeId: this.payload.backendDOMNodeId,
            // LoaderId is an experimental mechanism to establish unique IDs across
            // navigations.
            loaderId: this.#realm.environment._loaderId,
        };
        const userStringProperties = [
            'name',
            'value',
            'description',
            'keyshortcuts',
            'roledescription',
            'valuetext',
            'url',
        ];
        const getUserStringPropertyValue = (key) => {
            return properties.get(key);
        };
        for (const userStringProperty of userStringProperties) {
            if (!properties.has(userStringProperty)) {
                continue;
            }
            node[userStringProperty] = getUserStringPropertyValue(userStringProperty);
        }
        const booleanProperties = [
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
        const getBooleanPropertyValue = (key) => {
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
        const tristateProperties = ['checked', 'pressed'];
        for (const tristateProperty of tristateProperties) {
            if (!properties.has(tristateProperty)) {
                continue;
            }
            const value = properties.get(tristateProperty);
            node[tristateProperty] =
                value === 'mixed' ? 'mixed' : value === 'true' ? true : false;
        }
        const numericalProperties = [
            'level',
            'valuemax',
            'valuemin',
        ];
        const getNumericalPropertyValue = (key) => {
            return properties.get(key);
        };
        for (const numericalProperty of numericalProperties) {
            if (!properties.has(numericalProperty)) {
                continue;
            }
            node[numericalProperty] = getNumericalPropertyValue(numericalProperty);
        }
        const tokenProperties = [
            'autocomplete',
            'haspopup',
            'invalid',
            'orientation',
            'live',
            'relevant',
            'errormessage',
            'details',
        ];
        const getTokenPropertyValue = (key) => {
            return properties.get(key);
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
    static createTree(realm, payloads) {
        const nodeById = new Map();
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
//# sourceMappingURL=Accessibility.js.map