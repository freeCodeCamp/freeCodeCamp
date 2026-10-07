/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Supported browsers.
 *
 * @public
 */
export enum Browser {
  CHROME = 'chrome',
  CHROMEHEADLESSSHELL = 'chrome-headless-shell',
  CHROMIUM = 'chromium',
  FIREFOX = 'firefox',
  CHROMEDRIVER = 'chromedriver',
}

/**
 * Platform names used to identify a OS platform x architecture combination in the way
 * that is relevant for the browser download.
 *
 * @public
 */
export enum BrowserPlatform {
  LINUX = 'linux',
  LINUX_ARM = 'linux_arm',
  MAC = 'mac',
  MAC_ARM = 'mac_arm',
  WIN32 = 'win32',
  WIN64 = 'win64',
}

/**
 * Enum describing a release channel for a browser.
 *
 * You can use this in combination with {@link resolveBuildId} to resolve
 * a build ID based on a release channel.
 *
 * @public
 */
export enum BrowserTag {
  CANARY = 'canary',
  NIGHTLY = 'nightly',
  BETA = 'beta',
  DEV = 'dev',
  DEVEDITION = 'devedition',
  STABLE = 'stable',
  ESR = 'esr',
  LATEST = 'latest',
}

/**
 * @public
 */
export interface ProfileOptions {
  preferences: Record<string, unknown>;
  path: string;
}

/**
 * @public
 */
export enum ChromeReleaseChannel {
  STABLE = 'stable',
  DEV = 'dev',
  CANARY = 'canary',
  BETA = 'beta',
}
