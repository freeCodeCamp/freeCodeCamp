/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
import { BrowserPlatform, ChromeReleaseChannel } from './types.js';
export declare function resolveDownloadUrl(platform: BrowserPlatform, buildId: string, baseUrl?: string): string;
export declare function resolveDownloadPath(platform: BrowserPlatform, buildId: string): string[];
export declare function relativeExecutablePath(platform: BrowserPlatform, _buildId: string): string;
export declare function changeBaseVersionUrlForTesting(url: string): void;
export declare function resetBaseVersionUrlForTesting(): void;
export declare function getLastKnownGoodReleaseForChannel(channel: ChromeReleaseChannel): Promise<{
    version: string;
    revision: string;
}>;
export declare function getLastKnownGoodReleaseForMilestone(milestone: string): Promise<{
    version: string;
    revision: string;
} | undefined>;
export declare function getLastKnownGoodReleaseForBuild(
/**
 * @example `112.0.23`,
 */
buildPrefix: string): Promise<{
    version: string;
    revision: string;
} | undefined>;
export declare function resolveBuildId(channel: ChromeReleaseChannel): Promise<string>;
export declare function resolveBuildId(channel: string): Promise<string | undefined>;
export declare function resolveSystemExecutablePaths(platform: BrowserPlatform, channel: ChromeReleaseChannel): [string, ...string[]];
export declare function resolveDefaultUserDataDir(platform: BrowserPlatform, channel: ChromeReleaseChannel): string;
export declare function compareVersions(a: string, b: string): number;
//# sourceMappingURL=chrome.d.ts.map