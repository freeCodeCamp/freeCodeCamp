/**
 * @license
 * Copyright 2019 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
import { bindIsolatedHandle, ElementHandle, } from '../api/ElementHandle.js';
import { debugError } from '../common/util.js';
import { environment } from '../environment.js';
import { assert } from '../util/assert.js';
import { AsyncIterableUtil } from '../util/AsyncIterableUtil.js';
import { throwIfDisposed } from '../util/decorators.js';
import { CdpJSHandle } from './JSHandle.js';
const NON_ELEMENT_NODE_ROLES = new Set(['StaticText', 'InlineTextBox']);
/**
 * The CdpElementHandle extends ElementHandle now to keep compatibility
 * with `instanceof` because of that we need to have methods for
 * CdpJSHandle to in this implementation as well.
 *
 * @internal
 */
let CdpElementHandle = (() => {
    let _classSuper = ElementHandle;
    let _instanceExtraInitializers = [];
    let _contentFrame_decorators;
    let _scrollIntoView_decorators;
    let _uploadFile_decorators;
    let _autofill_decorators;
    return class CdpElementHandle extends _classSuper {
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _contentFrame_decorators = [throwIfDisposed()];
            _scrollIntoView_decorators = [throwIfDisposed(), bindIsolatedHandle];
            _uploadFile_decorators = [throwIfDisposed(), bindIsolatedHandle];
            _autofill_decorators = [throwIfDisposed()];
            __esDecorate(this, null, _contentFrame_decorators, { kind: "method", name: "contentFrame", static: false, private: false, access: { has: obj => "contentFrame" in obj, get: obj => obj.contentFrame }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _scrollIntoView_decorators, { kind: "method", name: "scrollIntoView", static: false, private: false, access: { has: obj => "scrollIntoView" in obj, get: obj => obj.scrollIntoView }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _uploadFile_decorators, { kind: "method", name: "uploadFile", static: false, private: false, access: { has: obj => "uploadFile" in obj, get: obj => obj.uploadFile }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _autofill_decorators, { kind: "method", name: "autofill", static: false, private: false, access: { has: obj => "autofill" in obj, get: obj => obj.autofill }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        #backendNodeId = __runInitializers(this, _instanceExtraInitializers);
        constructor(world, remoteObject) {
            super(new CdpJSHandle(world, remoteObject));
        }
        get realm() {
            return this.handle.realm;
        }
        get client() {
            return this.handle.client;
        }
        remoteObject() {
            return this.handle.remoteObject();
        }
        get #frameManager() {
            return this.frame._frameManager;
        }
        get frame() {
            return this.realm.environment;
        }
        async contentFrame() {
            const nodeInfo = await this.client.send('DOM.describeNode', {
                objectId: this.id,
            });
            if (typeof nodeInfo.node.frameId !== 'string') {
                return null;
            }
            return this.#frameManager.frame(nodeInfo.node.frameId);
        }
        async scrollIntoView() {
            await this.assertConnectedElement();
            try {
                await this.client.send('DOM.scrollIntoViewIfNeeded', {
                    objectId: this.id,
                });
            }
            catch (error) {
                debugError(error);
                // Fallback to Element.scrollIntoView if DOM.scrollIntoViewIfNeeded is not supported
                await super.scrollIntoView();
            }
        }
        async uploadFile(...files) {
            const isMultiple = await this.evaluate(element => {
                return element.multiple;
            });
            assert(files.length <= 1 || isMultiple, 'Multiple file uploads only work with <input type=file multiple>');
            // Locate all files and confirm that they exist.
            const path = environment.value.path;
            if (path) {
                files = files.map(filePath => {
                    if (path.win32.isAbsolute(filePath) ||
                        path.posix.isAbsolute(filePath)) {
                        return filePath;
                    }
                    else {
                        return path.resolve(filePath);
                    }
                });
            }
            /**
             * The zero-length array is a special case, it seems that
             * DOM.setFileInputFiles does not actually update the files in that case, so
             * the solution is to eval the element value to a new FileList directly.
             */
            if (files.length === 0) {
                // XXX: These events should converted to trusted events. Perhaps do this
                // in `DOM.setFileInputFiles`?
                await this.evaluate(element => {
                    element.files = new DataTransfer().files;
                    // Dispatch events for this case because it should behave akin to a user action.
                    element.dispatchEvent(new Event('input', { bubbles: true, composed: true }));
                    element.dispatchEvent(new Event('change', { bubbles: true }));
                });
                return;
            }
            const { node: { backendNodeId }, } = await this.client.send('DOM.describeNode', {
                objectId: this.id,
            });
            await this.client.send('DOM.setFileInputFiles', {
                objectId: this.id,
                files,
                backendNodeId,
            });
        }
        async autofill(data) {
            const nodeInfo = await this.client.send('DOM.describeNode', {
                objectId: this.handle.id,
            });
            const fieldId = nodeInfo.node.backendNodeId;
            const frameId = this.frame._id;
            await this.client.send('Autofill.trigger', {
                fieldId,
                frameId,
                card: data.creditCard,
                address: data.address,
            });
        }
        async *queryAXTree(name, role) {
            const { nodes } = await this.client.send('Accessibility.queryAXTree', {
                objectId: this.id,
                accessibleName: name,
                role,
            });
            const results = nodes.filter(node => {
                if (node.ignored) {
                    return false;
                }
                if (!node.role) {
                    return false;
                }
                if (NON_ELEMENT_NODE_ROLES.has(node.role.value)) {
                    return false;
                }
                return true;
            });
            return yield* AsyncIterableUtil.map(results, node => {
                return this.realm.adoptBackendNode(node.backendDOMNodeId);
            });
        }
        async backendNodeId() {
            if (this.#backendNodeId) {
                return this.#backendNodeId;
            }
            const { node } = await this.client.send('DOM.describeNode', {
                objectId: this.handle.id,
            });
            this.#backendNodeId = node.backendNodeId;
            return this.#backendNodeId;
        }
    };
})();
export { CdpElementHandle };
//# sourceMappingURL=ElementHandle.js.map