/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
import childProcess from 'node:child_process';
import { type Browser, type BrowserPlatform, type ChromeReleaseChannel } from './browser-data/browser-data.js';
/**
 * @public
 */
export interface ComputeExecutablePathOptions {
    /**
     * Root path to the storage directory.
     *
     * Can be set to `null` if the executable path should be relative
     * to the extracted download location. E.g. `./chrome-linux64/chrome`.
     */
    cacheDir: string | null;
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
export declare function computeExecutablePath(options: ComputeExecutablePathOptions): string;
/**
 * @public
 */
export interface SystemOptions {
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
     * Release channel to look for on the system.
     */
    channel: ChromeReleaseChannel;
}
/**
 * Returns a path to a system-wide Chrome installation given a release channel
 * name by checking known installation locations (using
 * {@link https://pptr.dev/browsers-api/browsers.computesystemexecutablepath}).
 * If Chrome instance is not found at the expected path, an error is thrown.
 *
 * @public
 */
export declare function computeSystemExecutablePath(options: SystemOptions): string;
/**
 * @public
 */
export interface LaunchOptions {
    /**
     * Absolute path to the browser's executable.
     */
    executablePath: string;
    /**
     * Configures stdio streams to open two additional streams for automation over
     * those streams instead of WebSocket.
     *
     * @defaultValue `false`.
     */
    pipe?: boolean;
    /**
     * If true, forwards the browser's process stdout and stderr to the Node's
     * process stdout and stderr.
     *
     * @defaultValue `false`.
     */
    dumpio?: boolean;
    /**
     * Additional arguments to pass to the executable when launching.
     */
    args?: string[];
    /**
     * Environment variables to set for the browser process.
     */
    env?: Record<string, string | undefined>;
    /**
     * Handles SIGINT in the Node process and tries to kill the browser process.
     *
     * @defaultValue `true`.
     */
    handleSIGINT?: boolean;
    /**
     * Handles SIGTERM in the Node process and tries to gracefully close the browser
     * process.
     *
     * @defaultValue `true`.
     */
    handleSIGTERM?: boolean;
    /**
     * Handles SIGHUP in the Node process and tries to gracefully close the browser process.
     *
     * @defaultValue `true`.
     */
    handleSIGHUP?: boolean;
    /**
     * Whether to spawn process in the {@link https://nodejs.org/api/child_process.html#optionsdetached | detached}
     * mode.
     *
     * @defaultValue `true` except on Windows.
     */
    detached?: boolean;
    /**
     * A callback to run after the browser process exits or before the process
     * will be closed via the {@link Process.close} call (including when handling
     * signals). The callback is only run once.
     */
    onExit?: () => Promise<void>;
    /**
     * If provided, the process will be killed when the signal is aborted.
     */
    signal?: AbortSignal;
}
/**
 * Launches a browser process according to {@link LaunchOptions}.
 *
 * @public
 */
export declare function launch(opts: LaunchOptions): Process;
/**
 * @public
 */
export declare const CDP_WEBSOCKET_ENDPOINT_REGEX: RegExp;
/**
 * @public
 */
export declare const WEBDRIVER_BIDI_WEBSOCKET_ENDPOINT_REGEX: RegExp;
/**
 * @public
 */
export declare class Process {
    #private;
    constructor(opts: LaunchOptions);
    get nodeProcess(): childProcess.ChildProcess;
    close(): Promise<void>;
    hasClosed(): Promise<void>;
    kill(): void;
    /**
     * Get recent logs (stderr + stdout) emitted by the browser.
     *
     * @public
     */
    getRecentLogs(): string[];
    waitForLineOutput(regex: RegExp, timeout?: number): Promise<string>;
}
/**
 * @internal
 */
export interface ErrorLike extends Error {
    name: string;
    message: string;
}
/**
 * @internal
 */
export declare function isErrorLike(obj: unknown): obj is ErrorLike;
/**
 * @internal
 */
export declare function isErrnoException(obj: unknown): obj is NodeJS.ErrnoException;
/**
 * @public
 */
export declare class TimeoutError extends Error {
    /**
     * @internal
     */
    constructor(message?: string);
}
//# sourceMappingURL=launch.d.ts.map