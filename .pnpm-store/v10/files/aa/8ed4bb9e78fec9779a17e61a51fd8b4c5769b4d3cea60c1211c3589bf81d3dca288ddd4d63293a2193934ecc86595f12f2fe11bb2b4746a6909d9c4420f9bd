/**
 * @license
 * Copyright 2021 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
import type { NetworkConditions } from './NetworkManager.js';
/**
 * A list of pre-defined network conditions to be used with
 * {@link Page.emulateNetworkConditions}.
 *
 * @example
 *
 * ```ts
 * import {PredefinedNetworkConditions} from 'puppeteer';
 * const browser = await puppeteer.launch();
 * const page = await browser.newPage();
 * await page.emulateNetworkConditions(PredefinedNetworkConditions['Slow 3G']);
 * await page.goto('https://www.google.com');
 * await page.emulateNetworkConditions(PredefinedNetworkConditions['Fast 3G']);
 * await page.goto('https://www.google.com');
 * // alias to Fast 3G.
 * await page.emulateNetworkConditions(PredefinedNetworkConditions['Slow 4G']);
 * await page.goto('https://www.google.com');
 * await page.emulateNetworkConditions(PredefinedNetworkConditions['Fast 4G']);
 * await page.goto('https://www.google.com');
 * // other actions...
 * await browser.close();
 * ```
 *
 * @public
 */
export declare const PredefinedNetworkConditions: Readonly<{
    'Slow 3G': NetworkConditions;
    'Fast 3G': NetworkConditions;
    'Slow 4G': NetworkConditions;
    'Fast 4G': NetworkConditions;
}>;
//# sourceMappingURL=PredefinedNetworkConditions.d.ts.map