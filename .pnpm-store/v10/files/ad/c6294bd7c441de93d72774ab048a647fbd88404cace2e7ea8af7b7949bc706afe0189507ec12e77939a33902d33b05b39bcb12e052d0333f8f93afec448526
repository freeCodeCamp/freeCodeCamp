/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import * as dom from 'vs/base/browser/dom';
import { DisposableStore, IDisposable, toDisposable } from 'vs/base/common/lifecycle';

export interface IPointerMoveCallback {
	(event: PointerEvent): void;
}

export interface IOnStopCallback {
	(browserEvent?: PointerEvent | KeyboardEvent): void;
}

export class GlobalPointerMoveMonitor implements IDisposable {

	private readonly _hooks = new DisposableStore();
	private _pointerMoveCallback: IPointerMoveCallback | null = null;
	private _onStopCallback: IOnStopCallback | null = null;

	public dispose(): void {
		this.stopMonitoring(false);
		this._hooks.dispose();
	}

	public stopMonitoring(invokeStopCallback: boolean, browserEvent?: PointerEvent | KeyboardEvent): void {
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

	public isMonitoring(): boolean {
		return !!this._pointerMoveCallback;
	}

	public startMonitoring(
		initialElement: Element,
		pointerId: number,
		initialButtons: number,
		pointerMoveCallback: IPointerMoveCallback,
		onStopCallback: IOnStopCallback
	): void {
		if (this.isMonitoring()) {
			this.stopMonitoring(false);
		}
		this._pointerMoveCallback = pointerMoveCallback;
		this._onStopCallback = onStopCallback;

		let eventSource: Element | Window = initialElement;

		try {
			initialElement.setPointerCapture(pointerId);
			this._hooks.add(toDisposable(() => {
				try {
					initialElement.releasePointerCapture(pointerId);
				} catch (err) {
					// See https://github.com/microsoft/vscode/issues/161731
					//
					// `releasePointerCapture` sometimes fails when being invoked with the exception:
					//     DOMException: Failed to execute 'releasePointerCapture' on 'Element':
					//     No active pointer with the given id is found.
					//
					// There's no need to do anything in case of failure
				}
			}));
		} catch (err) {
			// See https://github.com/microsoft/vscode/issues/144584
			// See https://github.com/microsoft/vscode/issues/146947
			// `setPointerCapture` sometimes fails when being invoked
			// from a `mousedown` listener on macOS and Windows
			// and it always fails on Linux with the exception:
			//     DOMException: Failed to execute 'setPointerCapture' on 'Element':
			//     No active pointer with the given id is found.
			// In case of failure, we bind the listeners on the window
			eventSource = dom.getWindow(initialElement);
		}

		this._hooks.add(dom.addDisposableListener(
			eventSource,
			dom.EventType.POINTER_MOVE,
			(e) => {
				if (e.buttons !== initialButtons) {
					// Buttons state has changed in the meantime
					this.stopMonitoring(true);
					return;
				}

				e.preventDefault();
				this._pointerMoveCallback!(e);
			}
		));

		this._hooks.add(dom.addDisposableListener(
			eventSource,
			dom.EventType.POINTER_UP,
			(e: PointerEvent) => this.stopMonitoring(true)
		));
	}
}
