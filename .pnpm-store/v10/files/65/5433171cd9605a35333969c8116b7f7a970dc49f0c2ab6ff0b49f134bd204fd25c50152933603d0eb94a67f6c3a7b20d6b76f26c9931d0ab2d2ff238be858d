/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
import { Browser, type BrowserPlatform } from './browser-data/browser-data.js';
/**
 * @public
 */
export declare class InstalledBrowser {
    #private;
    browser: Browser;
    buildId: string;
    platform: BrowserPlatform;
    readonly executablePath: string;
    /**
     * @internal
     */
    constructor(cache: Cache, browser: Browser, buildId: string, platform: BrowserPlatform);
    /**
     * Path to the root of the installation folder. Use
     * {@link computeExecutablePath} to get the path to the executable binary.
     */
    get path(): string;
    readMetadata(): Metadata;
    writeMetadata(metadata: Metadata): void;
}
/**
 * @internal
 */
export interface ComputeExecutablePathOptions {
    /**
     * Determines which platform the browser will be suited for.
     *
     * @defaultValue **Auto-detected.**
     */
    platform?: BrowserPlatform;
    /**
     * Determines which browser to launch.
     */
    browser: Browser;
    /**
     * Determines which buildId to download. BuildId should uniquely identify
     * binaries and they are used for caching.
     */
    buildId: string;
}
/**
 * @public
 */
export interface Metadata {
    aliases: Record<string, string>;
    executablePaths?: Record<string, string>;
}
/**
 * The cache used by Puppeteer relies on the following structure:
 *
 * - rootDir
 *   -- <browser1> | browserRoot(browser1)
 *   ---- <platform>-<buildId> | installationDir()
 *   ------ the browser-platform-buildId
 *   ------ specific structure.
 *   -- <browser2> | browserRoot(browser2)
 *   ---- <platform>-<buildId> | installationDir()
 *   ------ the browser-platform-buildId
 *   ------ specific structure.
 *   @internal
 */
export declare class Cache {
    #private;
    constructor(rootDir: string);
    /**
     * @internal
     */
    get rootDir(): string;
    browserRoot(browser: Browser): string;
    metadataFile(browser: Browser): string;
    readMetadata(browser: Browser): Metadata;
    writeMetadata(browser: Browser, metadata: Metadata): void;
    readExecutablePath(browser: Browser, platform: BrowserPlatform, buildId: string): string | null;
    writeExecutablePath(browser: Browser, platform: BrowserPlatform, buildId: string, executablePath: string): void;
    resolveAlias(browser: Browser, alias: string): string | undefined;
    installationDir(browser: Browser, platform: BrowserPlatform, buildId: string): string;
    clear(): void;
    uninstall(browser: Browser, platform: BrowserPlatform, buildId: string): void;
    getInstalledBrowsers(): InstalledBrowser[];
    computeExecutablePath(options: ComputeExecutablePathOptions): string;
}
//# sourceMappingURL=Cache.d.ts.map