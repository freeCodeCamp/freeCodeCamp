/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */

import {homedir} from 'node:os';
import {join} from 'node:path';

import {cosmiconfig} from 'cosmiconfig';
import type {
  ChromeHeadlessShellSettings,
  ChromeSettings,
  Configuration,
  FirefoxSettings,
  SupportedBrowser,
} from 'puppeteer-core';

function getBooleanEnvVar(name: string): boolean | undefined {
  const env = process.env[name];
  if (env === undefined) {
    return;
  }
  switch (env.toLowerCase()) {
    case '':
    case '0':
    case 'false':
    case 'off':
      return false;
    default:
      return true;
  }
}

/**
 * @internal
 */
function isSupportedBrowser(product: unknown): product is SupportedBrowser {
  switch (product) {
    case 'chrome':
    case 'firefox':
      return true;
    default:
      return false;
  }
}

/**
 * @internal
 */
function getDefaultBrowser(browser: unknown): SupportedBrowser {
  // Validate configuration.
  if (browser && !isSupportedBrowser(browser)) {
    throw new Error(`Unsupported browser ${browser}`);
  }
  switch (browser) {
    case 'firefox':
      return 'firefox';
    default:
      return 'chrome';
  }
}

/**
 * @internal
 */
function getLogLevel(logLevel: unknown): 'silent' | 'error' | 'warn' {
  switch (logLevel) {
    case 'silent':
      return 'silent';
    case 'error':
      return 'error';
    default:
      return 'warn';
  }
}

function getBrowserSetting(
  browser: 'chrome' | 'chrome-headless-shell' | 'firefox',
  configuration: Configuration,
  defaultConfig:
    | ChromeSettings
    | ChromeHeadlessShellSettings
    | FirefoxSettings = {},
): ChromeSettings | ChromeHeadlessShellSettings | FirefoxSettings {
  if (configuration.skipDownload) {
    return {
      skipDownload: true,
    };
  }
  const browserSetting:
    | ChromeSettings
    | ChromeHeadlessShellSettings
    | FirefoxSettings = {};
  const browserEnvName = browser.replaceAll('-', '_').toUpperCase();

  browserSetting.version =
    process.env[`PUPPETEER_${browserEnvName}_VERSION`] ??
    configuration[browser]?.version ??
    defaultConfig.version;
  browserSetting.downloadBaseUrl =
    process.env[`PUPPETEER_${browserEnvName}_DOWNLOAD_BASE_URL`] ??
    configuration[browser]?.downloadBaseUrl ??
    defaultConfig.downloadBaseUrl;

  browserSetting.skipDownload =
    getBooleanEnvVar(`PUPPETEER_${browserEnvName}_SKIP_DOWNLOAD`) ??
    getBooleanEnvVar(`PUPPETEER_SKIP_${browserEnvName}_DOWNLOAD`) ??
    configuration[browser]?.skipDownload ??
    defaultConfig.skipDownload;

  return browserSetting;
}

/**
 * @internal
 */
export const getConfiguration = async (): Promise<Configuration> => {
  const result = await cosmiconfig('puppeteer', {
    searchStrategy: 'global',
  }).search();
  const configuration: Configuration = result ? {...result.config} : {};

  configuration.logLevel = getLogLevel(
    process.env['PUPPETEER_LOGLEVEL'] ?? configuration.logLevel,
  );

  // Merging environment variables.
  configuration.defaultBrowser = getDefaultBrowser(
    process.env['PUPPETEER_BROWSER'] ?? configuration.defaultBrowser,
  );

  configuration.executablePath =
    process.env['PUPPETEER_EXECUTABLE_PATH'] ?? configuration.executablePath;

  // Default to skipDownload if executablePath is set
  if (configuration.executablePath) {
    configuration.skipDownload = true;
  }

  // Set skipDownload explicitly or from default
  configuration.skipDownload =
    getBooleanEnvVar('PUPPETEER_SKIP_DOWNLOAD') ?? configuration.skipDownload;

  // Prepare variables used in browser downloading
  configuration.chrome = getBrowserSetting('chrome', configuration);
  configuration['chrome-headless-shell'] = getBrowserSetting(
    'chrome-headless-shell',
    configuration,
  );
  configuration.firefox = getBrowserSetting('firefox', configuration, {
    skipDownload: true,
  });

  configuration.cacheDirectory =
    process.env['PUPPETEER_CACHE_DIR'] ??
    configuration.cacheDirectory ??
    join(homedir(), '.cache', 'puppeteer');

  configuration.temporaryDirectory =
    process.env['PUPPETEER_TMP_DIR'] ?? configuration.temporaryDirectory;

  configuration.experiments ??= {};

  return configuration;
};
