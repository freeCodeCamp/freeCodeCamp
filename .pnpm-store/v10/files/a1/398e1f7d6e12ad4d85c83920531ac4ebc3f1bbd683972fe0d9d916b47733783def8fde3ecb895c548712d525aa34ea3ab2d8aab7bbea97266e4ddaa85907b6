import { getWindow, addDisposableListener, EventType } from './dom.js';
import { DisposableStore, toDisposable } from '../common/lifecycle.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
class GlobalPointerMoveMonitor {
    constructor() {
        this._hooks = new DisposableStore();
        this._pointerMoveCallback = null;
        this._onStopCallback = null;
    }
    dispose() {
        this.stopMonitoring(false);
        this._hooks.dispose();
    }
    stopMonitoring(invokeStopCallback, browserEvent) {
        if (!this.isMonitoring()) {
            // Not monitoring
            return;
        }
        // Unhook
        this._hooks.clear();
        this._pointerMoveCallback = null;
        const onStopCallback = this._onStopCallback;
        this._onStopCallback = null;
        if (invokeStopCallback && onStopCallback) {
            onStopCallback(browserEvent);
        }
    }
    isMonitoring() {
        return !!this._pointerMoveCallback;
    }
    startMonitoring(initialElement, pointerId, initialButtons, pointerMoveCallback, onStopCallback) {
        if (this.isMonitoring()) {
            this.stopMonitoring(false);
        }
        this._pointerMoveCallback = pointerMoveCallback;
        this._onStopCallback = onStopCallback;
        let eventSource = initialElement;
        try {
            initialElement.setPointerCapture(pointerId);
            this._hooks.add(toDisposable(() => {
                try {
                    initialElement.releasePointerCapture(pointerId);
                }
                catch (err) {
                    // See https://github.com/microsoft/vscode/issues/161731
                    //
                    // `releasePointerCapture` sometimes fails when being invoked with the exception:
                    //     DOMException: Failed to execute 'releasePointerCapture' on 'Element':
                    //     No active pointer with the given id is found.
                    //
                    // There's no need to do anything in case of failure
                }
            }));
        }
        catch (err) {
            // See https://github.com/microsoft/vscode/issues/144584
            // See https://github.com/microsoft/vscode/issues/146947
            // `setPointerCapture` sometimes fails when being invoked
            // from a `mousedown` listener on macOS and Windows
            // and it always fails on Linux with the exception:
            //     DOMException: Failed to execute 'setPointerCapture' on 'Element':
            //     No active pointer with the given id is found.
            // In case of failure, we bind the listeners on the window
            eventSource = getWindow(initialElement);
        }
        this._hooks.add(addDisposableListener(eventSource, EventType.POINTER_MOVE, (e) => {
            if (e.buttons !== initialButtons) {
                // Buttons state has changed in the meantime
                this.stopMonitoring(true);
                return;
            }
            e.preventDefault();
            this._pointerMoveCallback(e);
        }));
        this._hooks.add(addDisposableListener(eventSource, EventType.POINTER_UP, (e) => this.stopMonitoring(true)));
    }
}

export { GlobalPointerMoveMonitor };
