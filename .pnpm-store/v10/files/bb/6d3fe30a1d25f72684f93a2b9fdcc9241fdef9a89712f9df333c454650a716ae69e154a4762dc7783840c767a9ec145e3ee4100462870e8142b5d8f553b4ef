import { isSafari, isWebkitWebView } from '../../../base/browser/browser.js';
import { onDidRegisterWindow, addDisposableListener, getActiveWindow, getActiveDocument, $, isHTMLElement } from '../../../base/browser/dom.js';
import { mainWindow } from '../../../base/browser/window.js';
import { DeferredPromise } from '../../../base/common/async.js';
import { Event } from '../../../base/common/event.js';
import { hash } from '../../../base/common/hash.js';
import { Disposable } from '../../../base/common/lifecycle.js';
import { URI } from '../../../base/common/uri.js';
import { ILayoutService } from '../../layout/browser/layoutService.js';
import { ILogService } from '../../log/common/log.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var BrowserClipboardService_1;
/**
 * Custom mime type used for storing a list of uris in the clipboard.
 *
 * Requires support for custom web clipboards https://github.com/w3c/clipboard-apis/pull/175
 */
const vscodeResourcesMime = 'application/vnd.code.resources';
let BrowserClipboardService = class BrowserClipboardService extends Disposable {
    static { BrowserClipboardService_1 = this; }
    constructor(layoutService, logService) {
        super();
        this.layoutService = layoutService;
        this.logService = logService;
        this.mapTextToType = new Map(); // unsupported in web (only in-memory)
        this.findText = ''; // unsupported in web (only in-memory)
        this.resources = []; // unsupported in web (only in-memory)
        this.resourcesStateHash = undefined;
        if (isSafari || isWebkitWebView) {
            this.installWebKitWriteTextWorkaround();
        }
        // Keep track of copy operations to reset our set of
        // copied resources: since we keep resources in memory
        // and not in the clipboard, we have to invalidate
        // that state when the user copies other data.
        this._register(Event.runAndSubscribe(onDidRegisterWindow, ({ window, disposables }) => {
            disposables.add(addDisposableListener(window.document, 'copy', () => this.clearResourcesState()));
        }, { window: mainWindow, disposables: this._store }));
    }
    triggerPaste() {
        this.logService.trace('BrowserClipboardService#triggerPaste');
        return undefined;
    }
    // In Safari, it has the following note:
    //
    // "The request to write to the clipboard must be triggered during a user gesture.
    // A call to clipboard.write or clipboard.writeText outside the scope of a user
    // gesture(such as "click" or "touch" event handlers) will result in the immediate
    // rejection of the promise returned by the API call."
    // From: https://webkit.org/blog/10855/async-clipboard-api/
    //
    // Since extensions run in a web worker, and handle gestures in an asynchronous way,
    // they are not classified by Safari as "in response to a user gesture" and will reject.
    //
    // This function sets up some handlers to work around that behavior.
    installWebKitWriteTextWorkaround() {
        const handler = () => {
            const currentWritePromise = new DeferredPromise();
            // Cancel the previous promise since we just created a new one in response to this new event
            if (this.webKitPendingClipboardWritePromise && !this.webKitPendingClipboardWritePromise.isSettled) {
                this.webKitPendingClipboardWritePromise.cancel();
            }
            this.webKitPendingClipboardWritePromise = currentWritePromise;
            // The ctor of ClipboardItem allows you to pass in a promise that will resolve to a string.
            // This allows us to pass in a Promise that will either be cancelled by another event or
            // resolved with the contents of the first call to this.writeText.
            // see https://developer.mozilla.org/en-US/docs/Web/API/ClipboardItem/ClipboardItem#parameters
            getActiveWindow().navigator.clipboard.write([new ClipboardItem({
                    'text/plain': currentWritePromise.p,
                })]).catch(async (err) => {
                if (!(err instanceof Error) || err.name !== 'NotAllowedError' || !currentWritePromise.isRejected) {
                    this.logService.error(err);
                }
            });
        };
        this._register(Event.runAndSubscribe(this.layoutService.onDidAddContainer, ({ container, disposables }) => {
            disposables.add(addDisposableListener(container, 'click', handler));
            disposables.add(addDisposableListener(container, 'keydown', handler));
        }, { container: this.layoutService.mainContainer, disposables: this._store }));
    }
    async writeText(text, type) {
        this.logService.trace('BrowserClipboardService#writeText called with type:', type, ' text.length:', text.length);
        // Clear resources given we are writing text
        this.clearResourcesState();
        // With type: only in-memory is supported
        if (type) {
            this.mapTextToType.set(type, text);
            this.logService.trace('BrowserClipboardService#writeText');
            return;
        }
        if (this.webKitPendingClipboardWritePromise) {
            // For Safari, we complete this Promise which allows the call to `navigator.clipboard.write()`
            // above to resolve and successfully copy to the clipboard. If we let this continue, Safari
            // would throw an error because this call stack doesn't appear to originate from a user gesture.
            return this.webKitPendingClipboardWritePromise.complete(text);
        }
        // Guard access to navigator.clipboard with try/catch
        // as we have seen DOMExceptions in certain browsers
        // due to security policies.
        try {
            this.logService.trace('before navigator.clipboard.writeText');
            return await getActiveWindow().navigator.clipboard.writeText(text);
        }
        catch (error) {
            console.error(error);
        }
        // Fallback to textarea and execCommand solution
        this.fallbackWriteText(text);
    }
    fallbackWriteText(text) {
        this.logService.trace('BrowserClipboardService#fallbackWriteText');
        const activeDocument = getActiveDocument();
        const activeElement = activeDocument.activeElement;
        const textArea = activeDocument.body.appendChild($('textarea', { 'aria-hidden': true }));
        textArea.style.height = '1px';
        textArea.style.width = '1px';
        textArea.style.position = 'absolute';
        textArea.value = text;
        textArea.focus();
        textArea.select();
        activeDocument.execCommand('copy');
        if (isHTMLElement(activeElement)) {
            activeElement.focus();
        }
        textArea.remove();
    }
    async readText(type) {
        this.logService.trace('BrowserClipboardService#readText called with type:', type);
        // With type: only in-memory is supported
        if (type) {
            const readText = this.mapTextToType.get(type) || '';
            this.logService.trace('BrowserClipboardService#readText text.length:', readText.length);
            return readText;
        }
        // Guard access to navigator.clipboard with try/catch
        // as we have seen DOMExceptions in certain browsers
        // due to security policies.
        try {
            const readText = await getActiveWindow().navigator.clipboard.readText();
            this.logService.trace('BrowserClipboardService#readText text.length:', readText.length);
            return readText;
        }
        catch (error) {
            console.error(error);
        }
        return '';
    }
    async readFindText() {
        return this.findText;
    }
    async writeFindText(text) {
        this.findText = text;
    }
    static { this.MAX_RESOURCE_STATE_SOURCE_LENGTH = 1000; }
    async readResources() {
        // Guard access to navigator.clipboard with try/catch
        // as we have seen DOMExceptions in certain browsers
        // due to security policies.
        try {
            const items = await getActiveWindow().navigator.clipboard.read();
            for (const item of items) {
                if (item.types.includes(`web ${vscodeResourcesMime}`)) {
                    const blob = await item.getType(`web ${vscodeResourcesMime}`);
                    const resources = JSON.parse(await blob.text()).map(x => URI.from(x));
                    return resources;
                }
            }
        }
        catch (error) {
            // Noop
        }
        const resourcesStateHash = await this.computeResourcesStateHash();
        if (this.resourcesStateHash !== resourcesStateHash) {
            this.clearResourcesState(); // state mismatch, resources no longer valid
        }
        return this.resources;
    }
    async computeResourcesStateHash() {
        if (this.resources.length === 0) {
            return undefined; // no resources, no hash needed
        }
        // Resources clipboard is managed in-memory only and thus
        // fails to invalidate when clipboard data is changing.
        // As such, we compute the hash of the current clipboard
        // and use that to later validate the resources clipboard.
        const clipboardText = await this.readText();
        return hash(clipboardText.substring(0, BrowserClipboardService_1.MAX_RESOURCE_STATE_SOURCE_LENGTH));
    }
    clearInternalState() {
        this.clearResourcesState();
    }
    clearResourcesState() {
        this.resources = [];
        this.resourcesStateHash = undefined;
    }
};
BrowserClipboardService = BrowserClipboardService_1 = __decorate([
    __param(0, ILayoutService),
    __param(1, ILogService)
], BrowserClipboardService);

export { BrowserClipboardService };
