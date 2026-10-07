/**
 * @license
 * Copyright 2020 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
import { ChromeReleaseChannel as BrowsersChromeReleaseChannel } from '@puppeteer/browsers';
/**
 * @internal
 */
export function convertPuppeteerChannelToBrowsersChannel(channel) {
    switch (channel) {
        case 'chrome':
            return BrowsersChromeReleaseChannel.STABLE;
        case 'chrome-dev':
            return BrowsersChromeReleaseChannel.DEV;
        case 'chrome-beta':
            return BrowsersChromeReleaseChannel.BETA;
        case 'chrome-canary':
            return BrowsersChromeReleaseChannel.CANARY;
    }
}
//# sourceMappingURL=LaunchOptions.js.map