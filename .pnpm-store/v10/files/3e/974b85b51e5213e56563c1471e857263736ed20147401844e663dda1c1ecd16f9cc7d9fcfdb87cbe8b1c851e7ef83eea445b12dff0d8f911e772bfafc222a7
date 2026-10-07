/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
import type { Browser } from '../api/Browser.js';
import { BrowserLauncher, type ResolvedLaunchArgs } from './BrowserLauncher.js';
import { type ChromeReleaseChannel, type LaunchOptions } from './LaunchOptions.js';
import type { PuppeteerNode } from './PuppeteerNode.js';
/**
 * @internal
 */
export declare class ChromeLauncher extends BrowserLauncher {
    constructor(puppeteer: PuppeteerNode);
    launch(options?: LaunchOptions): Promise<Browser>;
    /**
     * @internal
     */
    computeLaunchArguments(options?: LaunchOptions): Promise<ResolvedLaunchArgs>;
    /**
     * @internal
     */
    cleanUserDataDir(path: string, opts: {
        isTemp: boolean;
    }): Promise<void>;
    defaultArgs(options?: LaunchOptions): string[];
    executablePath(channel?: ChromeReleaseChannel, validatePath?: boolean): Promise<string>;
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
export declare function getFeatures(flag: string, options?: string[]): string[];
/**
 * Removes all elements in-place from the given string array
 * that match the given command-line flag.
 *
 * @internal
 */
export declare function removeMatchingFlags(array: string[], flag: string): string[];
//# sourceMappingURL=ChromeLauncher.d.ts.map