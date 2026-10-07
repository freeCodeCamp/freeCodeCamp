/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
import path from 'node:path';
import { getText } from '../httpUtil.js';
import { BrowserPlatform } from './types.js';
function archive(platform, buildId) {
    switch (platform) {
        case BrowserPlatform.LINUX_ARM:
        case BrowserPlatform.LINUX:
            return 'chrome-linux';
        case BrowserPlatform.MAC_ARM:
        case BrowserPlatform.MAC:
            return 'chrome-mac';
        case BrowserPlatform.WIN32:
        case BrowserPlatform.WIN64:
            // Windows archive name changed at r591479.
            return parseInt(buildId, 10) > 591479 ? 'chrome-win' : 'chrome-win32';
    }
}
function folder(platform) {
    switch (platform) {
        case BrowserPlatform.LINUX_ARM:
        case BrowserPlatform.LINUX:
            return 'Linux_x64';
        case BrowserPlatform.MAC_ARM:
            return 'Mac_Arm';
        case BrowserPlatform.MAC:
            return 'Mac';
        case BrowserPlatform.WIN32:
            return 'Win';
        case BrowserPlatform.WIN64:
            return 'Win_x64';
    }
}
export function resolveDownloadUrl(platform, buildId, baseUrl = 'https://storage.googleapis.com/chromium-browser-snapshots') {
    return `${baseUrl}/${resolveDownloadPath(platform, buildId).join('/')}`;
}
export function resolveDownloadPath(platform, buildId) {
    return [folder(platform), buildId, `${archive(platform, buildId)}.zip`];
}
export function relativeExecutablePath(platform, _buildId) {
    switch (platform) {
        case BrowserPlatform.MAC:
        case BrowserPlatform.MAC_ARM:
            return path.join('chrome-mac', 'Chromium.app', 'Contents', 'MacOS', 'Chromium');
        case BrowserPlatform.LINUX_ARM:
        case BrowserPlatform.LINUX:
            return path.join('chrome-linux', 'chrome');
        case BrowserPlatform.WIN32:
        case BrowserPlatform.WIN64:
            return path.join('chrome-win', 'chrome.exe');
    }
}
export async function resolveBuildId(platform) {
    return await getText(new URL(`https://storage.googleapis.com/chromium-browser-snapshots/${folder(platform)}/LAST_CHANGE`));
}
export function compareVersions(a, b) {
    return Number(a) - Number(b);
}
//# sourceMappingURL=chromium.js.map