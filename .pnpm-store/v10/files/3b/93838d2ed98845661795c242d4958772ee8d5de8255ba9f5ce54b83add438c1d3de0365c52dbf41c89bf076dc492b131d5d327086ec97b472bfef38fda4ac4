/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
import os from 'node:os';
import { BrowserPlatform } from './browser-data/browser-data.js';
/**
 * @public
 */
export function detectBrowserPlatform() {
    const platform = os.platform();
    const arch = os.arch();
    switch (platform) {
        case 'darwin':
            return arch === 'arm64' ? BrowserPlatform.MAC_ARM : BrowserPlatform.MAC;
        case 'linux':
            return arch === 'arm64'
                ? BrowserPlatform.LINUX_ARM
                : BrowserPlatform.LINUX;
        case 'win32':
            return arch === 'x64' ||
                // Windows 11 for ARM supports x64 emulation
                (arch === 'arm64' && isWindows11(os.release()))
                ? BrowserPlatform.WIN64
                : BrowserPlatform.WIN32;
        default:
            return undefined;
    }
}
/**
 * Windows 11 is identified by the version 10.0.22000 or greater
 * @internal
 */
function isWindows11(version) {
    const parts = version.split('.');
    if (parts.length > 2) {
        const major = parseInt(parts[0], 10);
        const minor = parseInt(parts[1], 10);
        const patch = parseInt(parts[2], 10);
        return (major > 10 ||
            (major === 10 && minor > 0) ||
            (major === 10 && minor === 0 && patch >= 22000));
    }
    return false;
}
//# sourceMappingURL=detectPlatform.js.map