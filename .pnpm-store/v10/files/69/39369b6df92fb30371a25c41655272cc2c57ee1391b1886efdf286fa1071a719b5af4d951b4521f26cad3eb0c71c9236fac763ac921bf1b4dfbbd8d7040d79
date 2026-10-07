/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import * as browser from 'vs/base/browser/browser';
import { mainWindow } from 'vs/base/browser/window';
import * as platform from 'vs/base/common/platform';

export const enum KeyboardSupport {
	Always,
	FullScreen,
	None
}

const safeNavigator = typeof navigator === 'object' ? navigator : {} as { [key: string]: any };

/**
 * Browser feature we can support in current platform, browser and environment.
 */
export const BrowserFeatures = {
	clipboard: {
		writeText: (
			platform.isNative
			|| (document.queryCommandSupported && document.queryCommandSupported('copy'))
			|| !!(safeNavigator && safeNavigator.clipboard && safeNavigator.clipboard.writeText)
		),
		readText: (
			platform.isNative
			|| !!(safeNavigator && safeNavigator.clipboard && safeNavigator.clipboard.readText)
		)
	},
	keyboard: (() => {
		if (platform.isNative || browser.isStandalone()) {
			return KeyboardSupport.Always;
		}

		if ((<any>safeNavigator).keyboard || browser.isSafari) {
			return KeyboardSupport.FullScreen;
		}

		return KeyboardSupport.None;
	})(),

	// 'ontouchstart' in window always evaluates to true with typescript's modern typings. This causes `window` to be
	// `never` later in `window.navigator`. That's why we need the explicit `window as Window` cast
	touch: 'ontouchstart' in mainWindow || safeNavigator.maxTouchPoints > 0,
	pointerEvents: mainWindow.PointerEvent && ('ontouchstart' in mainWindow || navigator.maxTouchPoints > 0)
};
