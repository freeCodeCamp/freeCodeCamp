/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
import { execSync } from 'node:child_process';
import os from 'node:os';
import path from 'node:path';
import semver from 'semver';
import { getJSON } from '../httpUtil.js';
import { BrowserPlatform, ChromeReleaseChannel } from './types.js';
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
    return [buildId, folder(platform), `chrome-${folder(platform)}.zip`];
}
export function relativeExecutablePath(platform, _buildId) {
    switch (platform) {
        case BrowserPlatform.MAC:
        case BrowserPlatform.MAC_ARM:
            return path.join('chrome-' + folder(platform), 'Google Chrome for Testing.app', 'Contents', 'MacOS', 'Google Chrome for Testing');
        case BrowserPlatform.LINUX_ARM:
        case BrowserPlatform.LINUX:
            return path.join('chrome-linux64', 'chrome');
        case BrowserPlatform.WIN32:
        case BrowserPlatform.WIN64:
            return path.join('chrome-' + folder(platform), 'chrome.exe');
    }
}
let baseVersionUrl = 'https://googlechromelabs.github.io/chrome-for-testing';
export function changeBaseVersionUrlForTesting(url) {
    baseVersionUrl = url;
}
export function resetBaseVersionUrlForTesting() {
    baseVersionUrl = 'https://googlechromelabs.github.io/chrome-for-testing';
}
export async function getLastKnownGoodReleaseForChannel(channel) {
    const data = (await getJSON(new URL(`${baseVersionUrl}/last-known-good-versions.json`)));
    for (const channel of Object.keys(data.channels)) {
        data.channels[channel.toLowerCase()] = data.channels[channel];
        delete data.channels[channel];
    }
    return data.channels[channel];
}
export async function getLastKnownGoodReleaseForMilestone(milestone) {
    const data = (await getJSON(new URL(`${baseVersionUrl}/latest-versions-per-milestone.json`)));
    return data.milestones[milestone];
}
export async function getLastKnownGoodReleaseForBuild(
/**
 * @example `112.0.23`,
 */
buildPrefix) {
    const data = (await getJSON(new URL(`${baseVersionUrl}/latest-patch-versions-per-build.json`)));
    return data.builds[buildPrefix];
}
export async function resolveBuildId(channel) {
    if (Object.values(ChromeReleaseChannel).includes(channel)) {
        return (await getLastKnownGoodReleaseForChannel(channel)).version;
    }
    if (channel.match(/^\d+$/)) {
        // Potentially a milestone.
        return (await getLastKnownGoodReleaseForMilestone(channel))?.version;
    }
    if (channel.match(/^\d+\.\d+\.\d+$/)) {
        // Potentially a build prefix without the patch version.
        return (await getLastKnownGoodReleaseForBuild(channel))?.version;
    }
    return;
}
const WINDOWS_ENV_PARAM_NAMES = [
    'PROGRAMFILES',
    'ProgramW6432',
    'ProgramFiles(x86)',
    // https://source.chromium.org/chromium/chromium/src/+/main:chrome/installer/mini_installer/README.md
    'LOCALAPPDATA',
];
function getChromeWindowsLocation(channel, locationsPrefixes) {
    if (locationsPrefixes.size === 0) {
        throw new Error('Non of the common Windows Env variables were set');
    }
    let suffix;
    switch (channel) {
        case ChromeReleaseChannel.STABLE:
            suffix = 'Google\\Chrome\\Application\\chrome.exe';
            break;
        case ChromeReleaseChannel.BETA:
            suffix = 'Google\\Chrome Beta\\Application\\chrome.exe';
            break;
        case ChromeReleaseChannel.CANARY:
            suffix = 'Google\\Chrome SxS\\Application\\chrome.exe';
            break;
        case ChromeReleaseChannel.DEV:
            suffix = 'Google\\Chrome Dev\\Application\\chrome.exe';
            break;
    }
    return [...locationsPrefixes.values()].map(l => {
        return path.win32.join(l, suffix);
    });
}
function getWslVariable(variable) {
    try {
        // The Windows env for the paths are not passed down
        // to WSL, so we evoke `cmd.exe` which is usually on the PATH
        // from which the env can be access with all uppercase names.
        // The return value is a Windows Path - `C:\Program Files`.
        const result = execSync(`cmd.exe /c echo %${variable.toLocaleUpperCase()}%`, {
            // We need to ignore the stderr as cmd.exe
            // prints a message about wrong UNC path not supported.
            stdio: ['ignore', 'pipe', 'ignore'],
            encoding: 'utf-8',
        }).trim();
        if (result) {
            return result;
        }
    }
    catch { }
    return;
}
function getWslLocation(channel) {
    const wslVersion = execSync('wslinfo --version', {
        stdio: ['ignore', 'pipe', 'ignore'],
        encoding: 'utf-8',
    }).trim();
    if (!wslVersion) {
        throw new Error('Not in WSL or unsupported version of WSL.');
    }
    const wslPrefixes = new Set();
    for (const name of WINDOWS_ENV_PARAM_NAMES) {
        const wslPrefix = getWslVariable(name);
        if (wslPrefix) {
            wslPrefixes.add(wslPrefix);
        }
    }
    const windowsPath = getChromeWindowsLocation(channel, wslPrefixes);
    return windowsPath.map(path => {
        // The above command returned the Windows paths `C:\Program Files\...\chrome.exe`
        // Use the `wslpath` utility tool to transform into the mounted disk
        return execSync(`wslpath "${path}"`).toString().trim();
    });
}
function getChromeLinuxOrWslLocation(channel) {
    const locations = [];
    switch (channel) {
        case ChromeReleaseChannel.STABLE:
            locations.push('/opt/google/chrome/chrome');
            break;
        case ChromeReleaseChannel.BETA:
            locations.push('/opt/google/chrome-beta/chrome');
            break;
        case ChromeReleaseChannel.CANARY:
            locations.push('/opt/google/chrome-canary/chrome');
            break;
        case ChromeReleaseChannel.DEV:
            locations.push('/opt/google/chrome-unstable/chrome');
            break;
    }
    try {
        const wslPath = getWslLocation(channel);
        if (wslPath) {
            locations.push(...wslPath);
        }
    }
    catch {
        // Ignore WSL errors
    }
    return locations;
}
export function resolveSystemExecutablePaths(platform, channel) {
    switch (platform) {
        case BrowserPlatform.WIN64:
        case BrowserPlatform.WIN32:
            const prefixLocation = new Set(WINDOWS_ENV_PARAM_NAMES.map(name => {
                return process.env[name];
            }).filter((l) => {
                return !!l;
            }));
            // Fallbacks in case env vars are misconfigured.
            prefixLocation.add('C:\\Program Files');
            prefixLocation.add('C:\\Program Files (x86)');
            prefixLocation.add('D:\\Program Files');
            prefixLocation.add('D:\\Program Files (x86)');
            return getChromeWindowsLocation(channel, prefixLocation);
        case BrowserPlatform.MAC_ARM:
        case BrowserPlatform.MAC:
            switch (channel) {
                case ChromeReleaseChannel.STABLE:
                    return [
                        '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
                    ];
                case ChromeReleaseChannel.BETA:
                    return [
                        '/Applications/Google Chrome Beta.app/Contents/MacOS/Google Chrome Beta',
                    ];
                case ChromeReleaseChannel.CANARY:
                    return [
                        '/Applications/Google Chrome Canary.app/Contents/MacOS/Google Chrome Canary',
                    ];
                case ChromeReleaseChannel.DEV:
                    return [
                        '/Applications/Google Chrome Dev.app/Contents/MacOS/Google Chrome Dev',
                    ];
            }
        case BrowserPlatform.LINUX_ARM:
        case BrowserPlatform.LINUX:
            return getChromeLinuxOrWslLocation(channel);
    }
}
export function resolveDefaultUserDataDir(platform, channel) {
    switch (platform) {
        case BrowserPlatform.WIN64:
        case BrowserPlatform.WIN32:
            // https://source.chromium.org/chromium/chromium/src/+/main:chrome/common/chrome_paths_win.cc;l=42;drc=4c86c7940a47c36b8bf52c134483ef2da86caa62
            switch (channel) {
                case ChromeReleaseChannel.STABLE:
                    return path.join(getLocalAppDataWin(), 'Google', 'Chrome', 'User Data');
                case ChromeReleaseChannel.BETA:
                    return path.join(getLocalAppDataWin(), 'Google', 'Chrome Beta', 'User Data');
                case ChromeReleaseChannel.CANARY:
                    return path.join(getLocalAppDataWin(), 'Google', 'Chrome SxS', 'User Data');
                case ChromeReleaseChannel.DEV:
                    return path.join(getLocalAppDataWin(), 'Google', 'Chrome Dev', 'User Data');
            }
        case BrowserPlatform.MAC_ARM:
        case BrowserPlatform.MAC:
            // https://source.chromium.org/chromium/chromium/src/+/main:chrome/common/chrome_paths_mac.mm;l=86;drc=4c86c7940a47c36b8bf52c134483ef2da86caa62
            switch (channel) {
                case ChromeReleaseChannel.STABLE:
                    return path.join(getBaseUserDataDirPathMac(), 'Chrome');
                case ChromeReleaseChannel.BETA:
                    return path.join(getBaseUserDataDirPathMac(), 'Chrome Beta');
                case ChromeReleaseChannel.DEV:
                    return path.join(getBaseUserDataDirPathMac(), 'Chrome Dev');
                case ChromeReleaseChannel.CANARY:
                    return path.join(getBaseUserDataDirPathMac(), 'Chrome Canary');
            }
        case BrowserPlatform.LINUX_ARM:
        case BrowserPlatform.LINUX:
            // https://source.chromium.org/chromium/chromium/src/+/main:chrome/common/chrome_paths_linux.cc;l=80;drc=4c86c7940a47c36b8bf52c134483ef2da86caa62
            switch (channel) {
                case ChromeReleaseChannel.STABLE:
                    return path.join(getConfigHomeLinux(), 'google-chrome');
                case ChromeReleaseChannel.BETA:
                    return path.join(getConfigHomeLinux(), 'google-chrome-beta');
                case ChromeReleaseChannel.CANARY:
                    return path.join(getConfigHomeLinux(), 'google-chrome-canary');
                case ChromeReleaseChannel.DEV:
                    return path.join(getConfigHomeLinux(), 'google-chrome-unstable');
            }
    }
}
function getLocalAppDataWin() {
    return (process.env['LOCALAPPDATA'] || path.join(os.homedir(), 'AppData', 'Local'));
}
function getConfigHomeLinux() {
    return (process.env['CHROME_CONFIG_HOME'] ||
        process.env['XDG_CONFIG_HOME'] ||
        path.join(os.homedir(), '.config'));
}
function getBaseUserDataDirPathMac() {
    return path.join(os.homedir(), 'Library', 'Application Support', 'Google');
}
export function compareVersions(a, b) {
    if (!semver.valid(a)) {
        throw new Error(`Version ${a} is not a valid semver version`);
    }
    if (!semver.valid(b)) {
        throw new Error(`Version ${b} is not a valid semver version`);
    }
    if (semver.gt(a, b)) {
        return 1;
    }
    else if (semver.lt(a, b)) {
        return -1;
    }
    else {
        return 0;
    }
}
//# sourceMappingURL=chrome.js.map