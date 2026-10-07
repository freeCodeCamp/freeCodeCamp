/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
function ensureCodeWindow(targetWindow, fallbackWindowId) {
    const codeWindow = targetWindow;
    if (typeof codeWindow.vscodeWindowId !== 'number') {
        Object.defineProperty(codeWindow, 'vscodeWindowId', {
            get: () => fallbackWindowId
        });
    }
}
// eslint-disable-next-line no-restricted-globals
const mainWindow = window;

export { ensureCodeWindow, mainWindow };
