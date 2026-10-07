import '../../nls.js';
import { getNLSLanguage } from '../../nls.messages.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
const LANGUAGE_DEFAULT = 'en';
let _isWindows = false;
let _isMacintosh = false;
let _isLinux = false;
let _isNative = false;
let _isWeb = false;
let _isIOS = false;
let _isMobile = false;
let _locale = undefined;
let _language = LANGUAGE_DEFAULT;
let _platformLocale = LANGUAGE_DEFAULT;
let _translationsConfigFile = undefined;
let _userAgent = undefined;
const $globalThis = globalThis;
let nodeProcess = undefined;
if (typeof $globalThis.vscode !== 'undefined' && typeof $globalThis.vscode.process !== 'undefined') {
    // Native environment (sandboxed)
    nodeProcess = $globalThis.vscode.process;
}
else if (typeof process !== 'undefined' && typeof process?.versions?.node === 'string') {
    // Native environment (non-sandboxed)
    nodeProcess = process;
}
const isElectronProcess = typeof nodeProcess?.versions?.electron === 'string';
const isElectronRenderer = isElectronProcess && nodeProcess?.type === 'renderer';
// Native environment
if (typeof nodeProcess === 'object') {
    _isWindows = (nodeProcess.platform === 'win32');
    _isMacintosh = (nodeProcess.platform === 'darwin');
    _isLinux = (nodeProcess.platform === 'linux');
    _isLinux && !!nodeProcess.env['SNAP'] && !!nodeProcess.env['SNAP_REVISION'];
    !!nodeProcess.env['CI'] || !!nodeProcess.env['BUILD_ARTIFACTSTAGINGDIRECTORY'] || !!nodeProcess.env['GITHUB_WORKSPACE'];
    _locale = LANGUAGE_DEFAULT;
    _language = LANGUAGE_DEFAULT;
    const rawNlsConfig = nodeProcess.env['VSCODE_NLS_CONFIG'];
    if (rawNlsConfig) {
        try {
            const nlsConfig = JSON.parse(rawNlsConfig);
            _locale = nlsConfig.userLocale;
            _platformLocale = nlsConfig.osLocale;
            _language = nlsConfig.resolvedLanguage || LANGUAGE_DEFAULT;
            _translationsConfigFile = nlsConfig.languagePack?.translationsConfigFile;
        }
        catch (e) {
        }
    }
    _isNative = true;
}
// Web environment
else if (typeof navigator === 'object' && !isElectronRenderer) {
    _userAgent = navigator.userAgent;
    _isWindows = _userAgent.indexOf('Windows') >= 0;
    _isMacintosh = _userAgent.indexOf('Macintosh') >= 0;
    _isIOS = (_userAgent.indexOf('Macintosh') >= 0 || _userAgent.indexOf('iPad') >= 0 || _userAgent.indexOf('iPhone') >= 0) && !!navigator.maxTouchPoints && navigator.maxTouchPoints > 0;
    _isLinux = _userAgent.indexOf('Linux') >= 0;
    _isMobile = _userAgent?.indexOf('Mobi') >= 0;
    _isWeb = true;
    _language = getNLSLanguage() || LANGUAGE_DEFAULT;
    _locale = navigator.language.toLowerCase();
    _platformLocale = _locale;
}
// Unknown environment
else {
    console.error('Unable to resolve platform.');
}
let _platform = 0 /* Platform.Web */;
if (_isMacintosh) {
    _platform = 1 /* Platform.Mac */;
}
else if (_isWindows) {
    _platform = 3 /* Platform.Windows */;
}
else if (_isLinux) {
    _platform = 2 /* Platform.Linux */;
}
const isWindows = _isWindows;
const isMacintosh = _isMacintosh;
const isLinux = _isLinux;
const isNative = _isNative;
const isWeb = _isWeb;
const isWebWorker = (_isWeb && typeof $globalThis.importScripts === 'function');
const webWorkerOrigin = isWebWorker ? $globalThis.origin : undefined;
const isIOS = _isIOS;
const isMobile = _isMobile;
const platform = _platform;
const userAgent = _userAgent;
/**
 * The language used for the user interface. The format of
 * the string is all lower case (e.g. zh-tw for Traditional
 * Chinese or de for German)
 */
const language = _language;
const setTimeout0IsFaster = (typeof $globalThis.postMessage === 'function' && !$globalThis.importScripts);
/**
 * See https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#:~:text=than%204%2C%20then-,set%20timeout%20to%204,-.
 *
 * Works similarly to `setTimeout(0)` but doesn't suffer from the 4ms artificial delay
 * that browsers set when the nesting level is > 5.
 */
const setTimeout0 = (() => {
    if (setTimeout0IsFaster) {
        const pending = [];
        $globalThis.addEventListener('message', (e) => {
            if (e.data && e.data.vscodeScheduleAsyncWork) {
                for (let i = 0, len = pending.length; i < len; i++) {
                    const candidate = pending[i];
                    if (candidate.id === e.data.vscodeScheduleAsyncWork) {
                        pending.splice(i, 1);
                        candidate.callback();
                        return;
                    }
                }
            }
        });
        let lastId = 0;
        return (callback) => {
            const myId = ++lastId;
            pending.push({
                id: myId,
                callback: callback
            });
            $globalThis.postMessage({ vscodeScheduleAsyncWork: myId }, '*');
        };
    }
    return (callback) => setTimeout(callback);
})();
const OS = (_isMacintosh || _isIOS ? 2 /* OperatingSystem.Macintosh */ : (_isWindows ? 1 /* OperatingSystem.Windows */ : 3 /* OperatingSystem.Linux */));
let _isLittleEndian = true;
let _isLittleEndianComputed = false;
function isLittleEndian() {
    if (!_isLittleEndianComputed) {
        _isLittleEndianComputed = true;
        const test = new Uint8Array(2);
        test[0] = 1;
        test[1] = 2;
        const view = new Uint16Array(test.buffer);
        _isLittleEndian = (view[0] === (2 << 8) + 1);
    }
    return _isLittleEndian;
}
const isChrome = !!(userAgent && userAgent.indexOf('Chrome') >= 0);
const isFirefox = !!(userAgent && userAgent.indexOf('Firefox') >= 0);
const isSafari = !!(!isChrome && (userAgent && userAgent.indexOf('Safari') >= 0));
const isEdge = !!(userAgent && userAgent.indexOf('Edg/') >= 0);
const isAndroid = !!(userAgent && userAgent.indexOf('Android') >= 0);

export { LANGUAGE_DEFAULT, OS, isAndroid, isChrome, isEdge, isFirefox, isIOS, isLinux, isLittleEndian, isMacintosh, isMobile, isNative, isSafari, isWeb, isWebWorker, isWindows, language, platform, setTimeout0, setTimeout0IsFaster, userAgent, webWorkerOrigin };
