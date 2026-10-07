import './browser.js';
import { mainWindow } from './window.js';
import { isNative } from '../common/platform.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
/**
 * Browser feature we can support in current platform, browser and environment.
 */
const BrowserFeatures = {
    clipboard: {
        writeText: (isNative
            || (document.queryCommandSupported && document.queryCommandSupported('copy'))
            || !!(navigator && navigator.clipboard && navigator.clipboard.writeText)),
        readText: (isNative
            || !!(navigator && navigator.clipboard && navigator.clipboard.readText))
    },
    pointerEvents: mainWindow.PointerEvent && ('ontouchstart' in mainWindow || navigator.maxTouchPoints > 0)
};

export { BrowserFeatures };
