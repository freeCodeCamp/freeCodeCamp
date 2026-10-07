import { mainWindow } from './window.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
class WindowManager {
    constructor() {
        // --- Zoom Factor
        this.mapWindowIdToZoomFactor = new Map();
    }
    static { this.INSTANCE = new WindowManager(); }
    getZoomFactor(targetWindow) {
        return this.mapWindowIdToZoomFactor.get(this.getWindowId(targetWindow)) ?? 1;
    }
    getWindowId(targetWindow) {
        return targetWindow.vscodeWindowId;
    }
}
function addMatchMediaChangeListener(targetWindow, query, callback) {
    if (typeof query === 'string') {
        query = targetWindow.matchMedia(query);
    }
    query.addEventListener('change', callback);
}
/** The zoom scale for an index, e.g. 1, 1.2, 1.4 */
function getZoomFactor(targetWindow) {
    return WindowManager.INSTANCE.getZoomFactor(targetWindow);
}
const userAgent = navigator.userAgent;
const isFirefox = (userAgent.indexOf('Firefox') >= 0);
const isWebKit = (userAgent.indexOf('AppleWebKit') >= 0);
const isChrome = (userAgent.indexOf('Chrome') >= 0);
const isSafari = (!isChrome && (userAgent.indexOf('Safari') >= 0));
const isWebkitWebView = (!isChrome && !isSafari && isWebKit);
(userAgent.indexOf('Electron/') >= 0);
const isAndroid = (userAgent.indexOf('Android') >= 0);
let standalone = false;
if (typeof mainWindow.matchMedia === 'function') {
    const standaloneMatchMedia = mainWindow.matchMedia('(display-mode: standalone) or (display-mode: window-controls-overlay)');
    const fullScreenMatchMedia = mainWindow.matchMedia('(display-mode: fullscreen)');
    standalone = standaloneMatchMedia.matches;
    addMatchMediaChangeListener(mainWindow, standaloneMatchMedia, ({ matches }) => {
        // entering fullscreen would change standaloneMatchMedia.matches to false
        // if standalone is true (running as PWA) and entering fullscreen, skip this change
        if (standalone && fullScreenMatchMedia.matches) {
            return;
        }
        // otherwise update standalone (browser to PWA or PWA to browser)
        standalone = matches;
    });
}
function getMonacoEnvironment() {
    return globalThis.MonacoEnvironment;
}

export { addMatchMediaChangeListener, getMonacoEnvironment, getZoomFactor, isAndroid, isChrome, isFirefox, isSafari, isWebKit, isWebkitWebView };
