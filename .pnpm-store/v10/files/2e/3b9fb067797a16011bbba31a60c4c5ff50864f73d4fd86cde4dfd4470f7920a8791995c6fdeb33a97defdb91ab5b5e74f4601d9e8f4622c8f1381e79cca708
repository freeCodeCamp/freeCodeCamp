/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
import path from 'node:path';
import { BrowserPlatform } from './types.js';
function folder(platform) {
    switch (platform) {
        case BrowserPlatform.LINUX_ARM:
        case BrowserPlatform.LINUX:
            return 'linux64';
        case BrowserPlatform.MAC_ARM:
            return 'mac-arm64';
        case BrowserPlatform.MAC:
            return 'mac-x64';
        case BrowserPlatform.WIN32:
            return 'win32';
        case BrowserPlatform.WIN64:
            return 'win64';
    }
}
export function resolveDownloadUrl(platform, buildId, baseUrl = 'https://storage.googleapis.com/chrome-for-testing-public') {
    return `${baseUrl}/${resolveDownloadPath(platform, buildId).join('/')}`;
}
export function resolveDownloadPath(platform, buildId) {
    return [buildId, folder(platform), `chromedriver-${folder(platform)}.zip`];
}
export function relativeExecutablePath(platform, _buildId) {
    switch (platform) {
        case BrowserPlatform.MAC:
        case BrowserPlatform.MAC_ARM:
            return path.join('chromedriver-' + folder(platform), 'chromedriver');
        case BrowserPlatform.LINUX_ARM:
        case BrowserPlatform.LINUX:
            return path.join('chromedriver-linux64', 'chromedriver');
        case BrowserPlatform.WIN32:
        case BrowserPlatform.WIN64:
            return path.join('chromedriver-' + folder(platform), 'chromedriver.exe');
    }
}
export { resolveBuildId, compareVersions } from './chrome.js';
//# sourceMappingURL=chromedriver.js.map