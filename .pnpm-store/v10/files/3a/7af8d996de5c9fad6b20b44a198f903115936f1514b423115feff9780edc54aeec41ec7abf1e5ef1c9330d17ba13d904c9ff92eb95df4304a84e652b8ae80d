/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
import { BrowserPlatform, type ProfileOptions } from './types.js';
export declare function resolveDownloadUrl(platform: BrowserPlatform, buildId: string, baseUrl?: string): string;
export declare function resolveDownloadPath(platform: BrowserPlatform, buildId: string): string[];
export declare function relativeExecutablePath(platform: BrowserPlatform, buildId: string): string;
export declare enum FirefoxChannel {
    STABLE = "stable",
    ESR = "esr",
    DEVEDITION = "devedition",
    BETA = "beta",
    NIGHTLY = "nightly"
}
export declare function changeBaseVersionUrlForTesting(url: string): void;
export declare function resetBaseVersionUrlForTesting(): void;
export declare function resolveBuildId(channel?: FirefoxChannel): Promise<string>;
export declare function createProfile(options: ProfileOptions): Promise<void>;
export declare function compareVersions(a: string, b: string): number;
//# sourceMappingURL=firefox.d.ts.map