/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
import { BrowserLauncher, type ResolvedLaunchArgs } from './BrowserLauncher.js';
import type { LaunchOptions } from './LaunchOptions.js';
import type { PuppeteerNode } from './PuppeteerNode.js';
/**
 * @internal
 */
export declare class FirefoxLauncher extends BrowserLauncher {
    constructor(puppeteer: PuppeteerNode);
    static getPreferences(extraPrefsFirefox?: Record<string, unknown>): Record<string, unknown>;
    /**
     * @internal
     */
    computeLaunchArguments(options?: LaunchOptions): Promise<ResolvedLaunchArgs>;
    /**
     * @internal
     */
    cleanUserDataDir(userDataDir: string, opts: {
        isTemp: boolean;
    }): Promise<void>;
    executablePath(_: unknown, validatePath?: boolean): Promise<string>;
    defaultArgs(options?: LaunchOptions): string[];
}
//# sourceMappingURL=FirefoxLauncher.d.ts.map