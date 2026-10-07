/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */

import {mkdtemp} from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';

import {
  computeSystemExecutablePath,
  Browser as SupportedBrowsers,
} from '@puppeteer/browsers';

import type {Browser} from '../api/Browser.js';
import {debugError} from '../common/util.js';
import {assert} from '../util/assert.js';

import {BrowserLauncher, type ResolvedLaunchArgs} from './BrowserLauncher.js';
import {
  convertPuppeteerChannelToBrowsersChannel,
  type ChromeReleaseChannel,
  type LaunchOptions,
} from './LaunchOptions.js';
import type {PuppeteerNode} from './PuppeteerNode.js';
import {rm} from './util/fs.js';

/**
 * @internal
 */
export class ChromeLauncher extends BrowserLauncher {
  constructor(puppeteer: PuppeteerNode) {
    super(puppeteer, 'chrome');
  }

  override async launch(options: LaunchOptions = {}): Promise<Browser> {
    const config = await this.puppeteer.configuration();
    if (
      config.logLevel === 'warn' &&
      process.platform === 'darwin' &&
      process.arch === 'x64'
    ) {
      const cpus = os.cpus();
      if (cpus[0]?.model.includes('Apple')) {
        console.warn(
          [
            '\x1B[1m\x1B[43m\x1B[30m',
            'Degraded performance warning:\x1B[0m\x1B[33m',
            'Launching Chrome on Mac Silicon (arm64) from an x64 Node installation results in',
            'Rosetta translating the Chrome binary, even if Chrome is already arm64. This would',
            'result in huge performance issues. To resolve this, you must run Puppeteer with',
            'a version of Node built for arm64.',
          ].join('\n  '),
        );
      }
    }

    return await super.launch(options);
  }

  /**
   * @internal
   */
  override async computeLaunchArguments(
    options: LaunchOptions = {},
  ): Promise<ResolvedLaunchArgs> {
    const {
      ignoreDefaultArgs = false,
      args = [],
      pipe = false,
      debuggingPort,
      channel,
      executablePath,
    } = options;

    const chromeArguments = [];
    if (!ignoreDefaultArgs) {
      chromeArguments.push(...this.defaultArgs(options));
    } else if (Array.isArray(ignoreDefaultArgs)) {
      chromeArguments.push(
        ...this.defaultArgs(options).filter(arg => {
          return !ignoreDefaultArgs.includes(arg);
        }),
      );
    } else {
      chromeArguments.push(...args);
    }

    if (
      !chromeArguments.some(argument => {
        return argument.startsWith('--remote-debugging-');
      })
    ) {
      if (pipe) {
        assert(
          !debuggingPort,
          'Browser should be launched with either pipe or debugging port - not both.',
        );
        chromeArguments.push('--remote-debugging-pipe');
      } else {
        chromeArguments.push(`--remote-debugging-port=${debuggingPort || 0}`);
      }
    }

    let isTempUserDataDir = false;

    // Check for the user data dir argument, which will always be set even
    // with a custom directory specified via the userDataDir option.
    let userDataDirIndex = chromeArguments.findIndex(arg => {
      return arg.startsWith('--user-data-dir');
    });
    if (userDataDirIndex < 0) {
      isTempUserDataDir = true;
      chromeArguments.push(
        `--user-data-dir=${await mkdtemp(await this.getProfilePath())}`,
      );
      userDataDirIndex = chromeArguments.length - 1;
    }

    const userDataDir = chromeArguments[userDataDirIndex]!.split('=', 2)[1];
    assert(typeof userDataDir === 'string', '`--user-data-dir` is malformed');

    let chromeExecutable = executablePath;
    if (!chromeExecutable) {
      assert(
        channel || !this.puppeteer._isPuppeteerCore,
        `An \`executablePath\` or \`channel\` must be specified for \`puppeteer-core\``,
      );
      chromeExecutable = channel
        ? await this.executablePath(channel)
        : await this.resolveExecutablePath(options.headless ?? true);
    }

    return {
      executablePath: chromeExecutable,
      args: chromeArguments,
      isTempUserDataDir,
      userDataDir,
    };
  }

  /**
   * @internal
   */
  override async cleanUserDataDir(
    path: string,
    opts: {isTemp: boolean},
  ): Promise<void> {
    if (opts.isTemp) {
      try {
        await rm(path);
      } catch (error) {
        debugError(error);
        throw error;
      }
    }
  }

  override defaultArgs(options: LaunchOptions = {}): string[] {
    // See https://github.com/GoogleChrome/chrome-launcher/blob/main/docs/chrome-flags-for-tools.md

    const userDisabledFeatures = getFeatures(
      '--disable-features',
      options.args,
    );
    if (options.args && userDisabledFeatures.length > 0) {
      removeMatchingFlags(options.args, '--disable-features');
    }

    const turnOnExperimentalFeaturesForTesting =
      process.env['PUPPETEER_TEST_EXPERIMENTAL_CHROME_FEATURES'] === 'true';

    const userEnabledFeatures = getFeatures('--enable-features', options.args);
    if (options.args && userEnabledFeatures.length > 0) {
      removeMatchingFlags(options.args, '--enable-features');
    }

    // Merge default enabled features with user-provided ones, if any.
    const enabledFeatures = [
      'PdfOopif',
      // Add features to enable by default here.
      ...userEnabledFeatures,
    ].filter(feature => {
      return feature !== '';
    });

    // Merge default disabled features with user-provided ones, if any.
    const disabledFeatures = [
      'Translate',
      // AcceptCHFrame disabled because of crbug.com/1348106.
      'AcceptCHFrame',
      'MediaRouter',
      'OptimizationHints',
      'WebUIReloadButton',
      ...(turnOnExperimentalFeaturesForTesting
        ? []
        : [
            // https://crbug.com/1492053
            'ProcessPerSiteUpToMainFrameThreshold',
            // https://github.com/puppeteer/puppeteer/issues/10715
            'IsolateSandboxedIframes',
          ]),
      ...userDisabledFeatures,
    ]
      .filter(feature => {
        return feature !== '';
      })
      .filter(disabledFeature => {
        return !enabledFeatures.includes(disabledFeature);
      });

    const chromeArguments = [
      '--allow-pre-commit-input',
      '--disable-background-networking',
      '--disable-background-timer-throttling',
      '--disable-backgrounding-occluded-windows',
      '--disable-breakpad',
      '--disable-client-side-phishing-detection',
      '--disable-component-extensions-with-background-pages',
      '--disable-crash-reporter', // No crash reporting in CfT.
      '--disable-default-apps',
      '--disable-dev-shm-usage',
      '--disable-hang-monitor',
      '--disable-infobars',
      '--disable-ipc-flooding-protection',
      '--disable-popup-blocking',
      '--disable-prompt-on-repost',
      '--disable-renderer-backgrounding',
      '--disable-search-engine-choice-screen',
      '--disable-sync',
      '--enable-automation',
      '--export-tagged-pdf',
      '--force-color-profile=srgb',
      '--generate-pdf-document-outline',
      '--metrics-recording-only',
      '--no-first-run',
      '--password-store=basic',
      '--use-mock-keychain',
      `--disable-features=${disabledFeatures.join(',')}`,
      `--enable-features=${enabledFeatures.join(',')}`,
    ].filter(arg => {
      return arg !== '';
    });
    const {
      devtools = false,
      headless = !devtools,
      args = [],
      userDataDir,
      enableExtensions = false,
    } = options;

    if (
      process.env['PUPPETEER_DANGEROUS_NO_SANDBOX'] === 'true' &&
      !args.includes('--no-sandbox')
    ) {
      chromeArguments.push('--no-sandbox');
    }

    if (userDataDir) {
      // If absolute (for any platform) path is given, we should not resolve it.
      chromeArguments.push(
        `--user-data-dir=${path.posix.isAbsolute(userDataDir) || path.win32.isAbsolute(userDataDir) ? userDataDir : path.resolve(userDataDir)}`,
      );
    }
    if (devtools) {
      chromeArguments.push('--auto-open-devtools-for-tabs');
    }
    if (headless) {
      chromeArguments.push(
        headless === 'shell' ? '--headless' : '--headless=new',
        '--hide-scrollbars',
        '--mute-audio',
      );
    }
    chromeArguments.push(
      enableExtensions
        ? '--enable-unsafe-extension-debugging'
        : '--disable-extensions',
    );
    if (
      args.every(arg => {
        return arg.startsWith('-');
      })
    ) {
      chromeArguments.push('about:blank');
    }
    chromeArguments.push(...args);
    return chromeArguments;
  }

  override async executablePath(
    channel?: ChromeReleaseChannel,
    validatePath = true,
  ): Promise<string> {
    if (channel) {
      return computeSystemExecutablePath({
        browser: SupportedBrowsers.CHROME,
        channel: convertPuppeteerChannelToBrowsersChannel(channel),
      });
    } else {
      return await this.resolveExecutablePath(undefined, validatePath);
    }
  }
}

/**
 * Extracts all features from the given command-line flag
 * (e.g. `--enable-features`, `--enable-features=`).
 *
 * Example input:
 * ["--enable-features=NetworkService,NetworkServiceInProcess", "--enable-features=Foo"]
 *
 * Example output:
 * ["NetworkService", "NetworkServiceInProcess", "Foo"]
 *
 * @internal
 */
export function getFeatures(flag: string, options: string[] = []): string[] {
  const prefix = flag.endsWith('=') ? flag : `${flag}=`;
  return options
    .filter(s => {
      return s.startsWith(prefix);
    })
    .flatMap(s => {
      return s
        .substring(s.indexOf('=') + 1)
        .trim()
        .split(',')
        .map(feature => {
          return feature.trim();
        });
    })
    .filter(s => {
      return s;
    });
}

/**
 * Removes all elements in-place from the given string array
 * that match the given command-line flag.
 *
 * @internal
 */
export function removeMatchingFlags(array: string[], flag: string): string[] {
  const prefix = flag.endsWith('=') ? flag : `${flag}=`;
  let i = 0;
  while (i < array.length) {
    if (array[i]!.startsWith(prefix)) {
      array.splice(i, 1);
    } else {
      i++;
    }
  }
  return array;
}
