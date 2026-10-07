/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.isWindows = void 0;
if (typeof process === 'object') {
    exports.isWindows = process.platform === 'win32';
}
else if (typeof navigator === 'object') {
    let userAgent = navigator.userAgent;
    exports.isWindows = userAgent.indexOf('Windows') >= 0;
}
