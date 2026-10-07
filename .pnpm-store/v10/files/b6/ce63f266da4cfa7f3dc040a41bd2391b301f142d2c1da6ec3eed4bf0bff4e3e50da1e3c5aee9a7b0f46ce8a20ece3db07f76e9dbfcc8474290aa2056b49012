/**
 * @license
 * Copyright 2020 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */

import type {BrowserPlatform} from '@puppeteer/browsers';
import {
  install,
  Browser,
  resolveBuildId,
  detectBrowserPlatform,
} from '@puppeteer/browsers';
import type {
  ChromeHeadlessShellSettings,
  ChromeSettings,
  FirefoxSettings,
} from 'puppeteer-core';
import {PUPPETEER_REVISIONS} from 'puppeteer-core/internal/revisions.js';

import {getConfiguration} from '../getConfiguration.js';

async function downloadBrowser({
  browser,
  configuration,
  cacheDir,
  platform,
}: {
  browser: Extract<
    Browser,
    Browser.CHROME | Browser.CHROMEHEADLESSSHELL | Browser.FIREFOX
  >;
  configuration: ChromeSettings | ChromeHeadlessShellSettings | FirefoxSettings;
  platform: BrowserPlatform;
  cacheDir: string;
}) {
  const unresolvedBuildId =
    configuration?.version || PUPPETEER_REVISIONS[browser] || 'latest';
  const baseUrl = configuration?.downloadBaseUrl;
  const buildId = await resolveBuildId(browser, platform, unresolvedBuildId);

  try {
    const result = await install({
      browser,
      cacheDir,
      platform,
      buildId,
      downloadProgressCallback: 'default',
      baseUrl,
      buildIdAlias:
        buildId !== unresolvedBuildId ? unresolvedBuildId : undefined,
    });
    logPolitely(`${browser} (${result.buildId}) downloaded to ${result.path}`);
  } catch (error) {
    throw new Error(
      `ERROR: Failed to set up ${browser} v${buildId}! Set "PUPPETEER_SKIP_DOWNLOAD" env variable to skip download.`,
      {
        cause: error,
      },
    );
  }
}

/**
 * @internal
 */
export async function downloadBrowsers(): Promise<void> {
  overrideProxy();

  const configuration = await getConfiguration();
  if (configuration.skipDownload) {
    logPolitely('**INFO** Skipping downloading browsers as instructed.');
    return;
  }

  const platform = detectBrowserPlatform();
  if (!platform) {
    throw new Error('The current platform is not supported.');
  }
  const cacheDir = configuration.cacheDirectory!;

  const installationJobs = [];
  if (configuration.chrome?.skipDownload) {
    logPolitely('**INFO** Skipping Chrome download as instructed.');
  } else {
    const browser = Browser.CHROME;
    installationJobs.push(
      downloadBrowser({
        browser,
        configuration: configuration[browser] ?? {},
        cacheDir,
        platform,
      }),
    );
  }

  if (configuration['chrome-headless-shell']?.skipDownload) {
    logPolitely('**INFO** Skipping Chrome download as instructed.');
  } else {
    const browser = Browser.CHROMEHEADLESSSHELL;

    installationJobs.push(
      downloadBrowser({
        browser,
        configuration: configuration[browser] ?? {},
        cacheDir,
        platform,
      }),
    );
  }

  if (configuration.firefox?.skipDownload) {
    logPolitely('**INFO** Skipping Firefox download as instructed.');
  } else {
    const browser = Browser.FIREFOX;

    installationJobs.push(
      downloadBrowser({
        browser,
        configuration: configuration[browser] ?? {},
        cacheDir,
        platform,
      }),
    );
  }

  try {
    await Promise.all(installationJobs);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

/**
 * @internal
 */
function logPolitely(toBeLogged: unknown): void {
  const logLevel = process.env['npm_config_loglevel'] || '';
  const logLevelDisplay = ['silent', 'error', 'warn'].indexOf(logLevel) > -1;

  if (!logLevelDisplay) {
    console.log(toBeLogged);
  }
}

/**
 * @internal
 */
function overrideProxy() {
  // Override current environment proxy settings with npm configuration, if any.
  const NPM_HTTPS_PROXY =
    process.env['npm_config_https_proxy'] || process.env['npm_config_proxy'];
  const NPM_HTTP_PROXY =
    process.env['npm_config_http_proxy'] || process.env['npm_config_proxy'];
  const NPM_NO_PROXY = process.env['npm_config_no_proxy'];

  if (NPM_HTTPS_PROXY) {
    process.env['HTTPS_PROXY'] = NPM_HTTPS_PROXY;
  }
  if (NPM_HTTP_PROXY) {
    process.env['HTTP_PROXY'] = NPM_HTTP_PROXY;
  }
  if (NPM_NO_PROXY) {
    process.env['NO_PROXY'] = NPM_NO_PROXY;
  }
}
