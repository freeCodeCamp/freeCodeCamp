/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
import path from 'node:path';

import {BrowserPlatform} from './types.js';

function folder(platform: BrowserPlatform): string {
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

export function resolveDownloadUrl(
  platform: BrowserPlatform,
  buildId: string,
  baseUrl = 'https://storage.googleapis.com/chrome-for-testing-public',
): string {
  return `${baseUrl}/${resolveDownloadPath(platform, buildId).join('/')}`;
}

export function resolveDownloadPath(
  platform: BrowserPlatform,
  buildId: string,
): string[] {
  return [
    buildId,
    folder(platform),
    `chrome-headless-shell-${folder(platform)}.zip`,
  ];
}

export function relativeExecutablePath(
  platform: BrowserPlatform,
  _buildId: string,
): string {
  switch (platform) {
    case BrowserPlatform.MAC:
    case BrowserPlatform.MAC_ARM:
      return path.join(
        'chrome-headless-shell-' + folder(platform),
        'chrome-headless-shell',
      );
    case BrowserPlatform.LINUX_ARM:
    case BrowserPlatform.LINUX:
      return path.join(
        'chrome-headless-shell-linux64',
        'chrome-headless-shell',
      );
    case BrowserPlatform.WIN32:
    case BrowserPlatform.WIN64:
      return path.join(
        'chrome-headless-shell-' + folder(platform),
        'chrome-headless-shell.exe',
      );
  }
}

export {resolveBuildId, compareVersions} from './chrome.js';
