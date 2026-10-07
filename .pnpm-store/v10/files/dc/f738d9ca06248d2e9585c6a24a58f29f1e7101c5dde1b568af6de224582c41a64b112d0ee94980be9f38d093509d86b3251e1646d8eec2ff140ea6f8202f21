/**
 * @license
 * Copyright 2021 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */

import type {NetworkConditions} from './NetworkManager.js';

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
export const PredefinedNetworkConditions = Object.freeze({
  // Generally aligned with DevTools
  // https://source.chromium.org/chromium/chromium/src/+/main:third_party/devtools-frontend/src/front_end/core/sdk/NetworkManager.ts;l=398;drc=225e1240f522ca684473f541ae6dae6cd766dd33.
  'Slow 3G': {
    // ~500Kbps down
    download: ((500 * 1000) / 8) * 0.8,
    // ~500Kbps up
    upload: ((500 * 1000) / 8) * 0.8,
    // 400ms RTT
    latency: 400 * 5,
  } as NetworkConditions,
  'Fast 3G': {
    // ~1.6 Mbps down
    download: ((1.6 * 1000 * 1000) / 8) * 0.9,
    // ~0.75 Mbps up
    upload: ((750 * 1000) / 8) * 0.9,
    // 150ms RTT
    latency: 150 * 3.75,
  } as NetworkConditions,
  // alias to Fast 3G to align with Lighthouse (crbug.com/342406608)
  // and DevTools (crbug.com/342406608),
  'Slow 4G': {
    // ~1.6 Mbps down
    download: ((1.6 * 1000 * 1000) / 8) * 0.9,
    // ~0.75 Mbps up
    upload: ((750 * 1000) / 8) * 0.9,
    // 150ms RTT
    latency: 150 * 3.75,
  } as NetworkConditions,
  'Fast 4G': {
    // 9 Mbps down
    download: ((9 * 1000 * 1000) / 8) * 0.9,
    // 1.5 Mbps up
    upload: ((1.5 * 1000 * 1000) / 8) * 0.9,
    // 60ms RTT
    latency: 60 * 2.75,
  } as NetworkConditions,
});
