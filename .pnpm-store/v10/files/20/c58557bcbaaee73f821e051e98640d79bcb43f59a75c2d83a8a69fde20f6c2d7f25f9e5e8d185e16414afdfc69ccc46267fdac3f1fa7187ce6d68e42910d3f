import { addDisposableListener, getShadowRoot, getActiveElement } from '../../../../../base/browser/dom.js';
import { Disposable } from '../../../../../base/common/lifecycle.js';
import { ILogService } from '../../../../../platform/log/common/log.js';

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
let FocusTracker = class FocusTracker extends Disposable {
    constructor(_logService, _domNode, _onFocusChange) {
        super();
        this._domNode = _domNode;
        this._onFocusChange = _onFocusChange;
        this._isFocused = false;
        this._isPaused = false;
        this._register(addDisposableListener(this._domNode, 'focus', () => {
            _logService.trace('NativeEditContext.focus');
            if (this._isPaused) {
                return;
            }
            // Here we don't trust the browser and instead we check
            // that the active element is the one we are tracking
            // (this happens when cmd+tab is used to switch apps)
            this.refreshFocusState();
        }));
        this._register(addDisposableListener(this._domNode, 'blur', () => {
            _logService.trace('NativeEditContext.blur');
            if (this._isPaused) {
                return;
            }
            this._handleFocusedChanged(false);
        }));
    }
    pause() {
        this._isPaused = true;
    }
    resume() {
        this._isPaused = false;
        this.refreshFocusState();
    }
    _handleFocusedChanged(focused) {
        if (this._isFocused === focused) {
            return;
        }
        this._isFocused = focused;
        this._onFocusChange(this._isFocused);
    }
    focus() {
        this._domNode.focus();
        this.refreshFocusState();
    }
    refreshFocusState() {
        const shadowRoot = getShadowRoot(this._domNode);
        const activeElement = shadowRoot ? shadowRoot.activeElement : getActiveElement();
        const focused = this._domNode === activeElement;
        this._handleFocusedChanged(focused);
    }
    get isFocused() {
        return this._isFocused;
    }
};
FocusTracker = __decorate([
    __param(0, ILogService)
], FocusTracker);
function editContextAddDisposableListener(target, type, listener, options) {
    // eslint-disable-next-line local/code-no-any-casts, @typescript-eslint/no-explicit-any
    target.addEventListener(type, listener, options);
    return {
        dispose() {
            // eslint-disable-next-line local/code-no-any-casts, @typescript-eslint/no-explicit-any
            target.removeEventListener(type, listener);
        }
    };
}

export { FocusTracker, editContextAddDisposableListener };
