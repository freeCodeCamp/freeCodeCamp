/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
import childProcess from 'node:child_process';
import { EventEmitter } from 'node:events';
import { accessSync } from 'node:fs';
import os from 'node:os';
import readline from 'node:readline';
import { executablePathByBrowser, resolveSystemExecutablePaths, } from './browser-data/browser-data.js';
import { Cache } from './Cache.js';
import { debug } from './debug.js';
import { detectBrowserPlatform } from './detectPlatform.js';
const debugLaunch = debug('puppeteer:browsers:launcher');
/**
 * @public
 */
export function computeExecutablePath(options) {
    if (options.cacheDir === null) {
        options.platform ??= detectBrowserPlatform();
        if (options.platform === undefined) {
            throw new Error(`No platform specified. Couldn't auto-detect browser platform.`);
        }
        return executablePathByBrowser[options.browser](options.platform, options.buildId);
    }
    return new Cache(options.cacheDir).computeExecutablePath(options);
}
/**
 * Returns a path to a system-wide Chrome installation given a release channel
 * name by checking known installation locations (using
 * {@link https://pptr.dev/browsers-api/browsers.computesystemexecutablepath}).
 * If Chrome instance is not found at the expected path, an error is thrown.
 *
 * @public
 */
export function computeSystemExecutablePath(options) {
    options.platform ??= detectBrowserPlatform();
    if (!options.platform) {
        throw new Error(`Cannot download a binary for the provided platform: ${os.platform()} (${os.arch()})`);
    }
    const paths = resolveSystemExecutablePaths(options.browser, options.platform, options.channel);
    for (const path of paths) {
        try {
            accessSync(path);
            return path;
        }
        catch { }
    }
    throw new Error(`Could not find Google Chrome executable for channel '${options.channel}' at:${paths.map(path => {
        return `\n - ${path}`;
    })}.`);
}
/**
 * Launches a browser process according to {@link LaunchOptions}.
 *
 * @public
 */
export function launch(opts) {
    return new Process(opts);
}
/**
 * @public
 */
export const CDP_WEBSOCKET_ENDPOINT_REGEX = /^DevTools listening on (ws:\/\/.*)$/;
/**
 * @public
 */
export const WEBDRIVER_BIDI_WEBSOCKET_ENDPOINT_REGEX = /^WebDriver BiDi listening on (ws:\/\/.*)$/;
const processListeners = new Map();
const dispatchers = {
    exit: (...args) => {
        processListeners.get('exit')?.forEach(handler => {
            return handler(...args);
        });
    },
    SIGINT: (...args) => {
        processListeners.get('SIGINT')?.forEach(handler => {
            return handler(...args);
        });
    },
    SIGHUP: (...args) => {
        processListeners.get('SIGHUP')?.forEach(handler => {
            return handler(...args);
        });
    },
    SIGTERM: (...args) => {
        processListeners.get('SIGTERM')?.forEach(handler => {
            return handler(...args);
        });
    },
};
function subscribeToProcessEvent(event, handler) {
    const listeners = processListeners.get(event) || [];
    if (listeners.length === 0) {
        process.on(event, dispatchers[event]);
    }
    listeners.push(handler);
    processListeners.set(event, listeners);
}
function unsubscribeFromProcessEvent(event, handler) {
    const listeners = processListeners.get(event) || [];
    const existingListenerIdx = listeners.indexOf(handler);
    if (existingListenerIdx === -1) {
        return;
    }
    listeners.splice(existingListenerIdx, 1);
    processListeners.set(event, listeners);
    if (listeners.length === 0) {
        process.off(event, dispatchers[event]);
    }
}
/**
 * @public
 */
export class Process {
    #executablePath;
    #args;
    #browserProcess;
    #exited = false;
    // The browser process can be closed externally or from the driver process. We
    // need to invoke the hooks only once though but we don't know how many times
    // we will be invoked.
    #hooksRan = false;
    #onExitHook = async () => { };
    #browserProcessExiting;
    #logs = [];
    #maxLogLinesSize = 1000;
    #lineEmitter = new EventEmitter();
    #onAbort = () => {
        this.kill();
    };
    #signal;
    constructor(opts) {
        this.#executablePath = opts.executablePath;
        this.#args = opts.args ?? [];
        this.#signal = opts.signal;
        if (this.#signal?.aborted) {
            throw new Error(this.#signal.reason ? this.#signal.reason : 'Launch aborted');
        }
        this.#signal?.addEventListener('abort', this.#onAbort, { once: true });
        opts.pipe ??= false;
        opts.dumpio ??= false;
        opts.handleSIGINT ??= true;
        opts.handleSIGTERM ??= true;
        opts.handleSIGHUP ??= true;
        // On non-windows platforms, `detached: true` makes child process a
        // leader of a new process group, making it possible to kill child
        // process tree with `.kill(-pid)` command. @see
        // https://nodejs.org/api/child_process.html#child_process_options_detached
        opts.detached ??= process.platform !== 'win32';
        const stdio = this.#configureStdio({
            pipe: opts.pipe,
        });
        const env = opts.env || {};
        debugLaunch?.(`Launching ${this.#executablePath} ${this.#args.join(' ')}`, {
            detached: opts.detached,
            env: Object.keys(env).reduce((res, key) => {
                if (key.toLowerCase().startsWith('puppeteer_')) {
                    res[key] = env[key];
                }
                return res;
            }, {}),
            stdio,
        });
        this.#browserProcess = childProcess.spawn(this.#executablePath, this.#args, {
            detached: opts.detached,
            env,
            stdio,
        });
        this.#recordStream(this.#browserProcess.stderr);
        this.#recordStream(this.#browserProcess.stdout);
        debugLaunch?.(`Launched ${this.#browserProcess.pid}`);
        if (opts.dumpio) {
            this.#browserProcess.stderr?.pipe(process.stderr);
            this.#browserProcess.stdout?.pipe(process.stdout);
        }
        subscribeToProcessEvent('exit', this.#onDriverProcessExit);
        if (opts.handleSIGINT) {
            subscribeToProcessEvent('SIGINT', this.#onDriverProcessSignal);
        }
        if (opts.handleSIGTERM) {
            subscribeToProcessEvent('SIGTERM', this.#onDriverProcessSignal);
        }
        if (opts.handleSIGHUP) {
            subscribeToProcessEvent('SIGHUP', this.#onDriverProcessSignal);
        }
        if (opts.onExit) {
            this.#onExitHook = opts.onExit;
        }
        this.#browserProcessExiting = new Promise((resolve, reject) => {
            this.#browserProcess.once('exit', async () => {
                debugLaunch?.(`Browser process ${this.#browserProcess.pid} onExit`);
                this.#clearListeners();
                this.#exited = true;
                try {
                    await this.#runHooks();
                }
                catch (err) {
                    reject(err);
                    return;
                }
                resolve();
            });
        });
    }
    async #runHooks() {
        if (this.#hooksRan) {
            return;
        }
        this.#hooksRan = true;
        await this.#onExitHook();
    }
    get nodeProcess() {
        return this.#browserProcess;
    }
    #configureStdio(opts) {
        if (opts.pipe) {
            return ['pipe', 'pipe', 'pipe', 'pipe', 'pipe'];
        }
        else {
            return ['pipe', 'pipe', 'pipe'];
        }
    }
    #clearListeners() {
        unsubscribeFromProcessEvent('exit', this.#onDriverProcessExit);
        unsubscribeFromProcessEvent('SIGINT', this.#onDriverProcessSignal);
        unsubscribeFromProcessEvent('SIGTERM', this.#onDriverProcessSignal);
        unsubscribeFromProcessEvent('SIGHUP', this.#onDriverProcessSignal);
        this.#signal?.removeEventListener('abort', this.#onAbort);
    }
    #onDriverProcessExit = (_code) => {
        this.kill();
    };
    #onDriverProcessSignal = (signal) => {
        switch (signal) {
            case 'SIGINT':
                this.kill();
                process.exit(130);
            case 'SIGTERM':
            case 'SIGHUP':
                void this.close();
                break;
        }
    };
    async close() {
        await this.#runHooks();
        if (!this.#exited) {
            this.kill();
        }
        return await this.#browserProcessExiting;
    }
    hasClosed() {
        return this.#browserProcessExiting;
    }
    kill() {
        debugLaunch?.(`Trying to kill ${this.#browserProcess.pid}`);
        // If the process failed to launch (for example if the browser executable path
        // is invalid), then the process does not get a pid assigned. A call to
        // `proc.kill` would error, as the `pid` to-be-killed can not be found.
        if (this.#browserProcess &&
            this.#browserProcess.pid &&
            pidExists(this.#browserProcess.pid)) {
            try {
                debugLaunch?.(`Browser process ${this.#browserProcess.pid} exists`);
                if (process.platform === 'win32') {
                    try {
                        childProcess.execSync(`taskkill /pid ${this.#browserProcess.pid} /T /F`);
                    }
                    catch (error) {
                        debugLaunch?.(`Killing ${this.#browserProcess.pid} using taskkill failed`, error);
                        // taskkill can fail to kill the process e.g. due to missing permissions.
                        // Let's kill the process via Node API. This delays killing of all child
                        // processes of `this.proc` until the main Node.js process dies.
                        this.#browserProcess.kill();
                    }
                }
                else {
                    // on linux the process group can be killed with the group id prefixed with
                    // a minus sign. The process group id is the group leader's pid.
                    const processGroupId = -this.#browserProcess.pid;
                    try {
                        process.kill(processGroupId, 'SIGKILL');
                    }
                    catch (error) {
                        debugLaunch?.(`Killing ${this.#browserProcess.pid} using process.kill failed`, error);
                        // Killing the process group can fail due e.g. to missing permissions.
                        // Let's kill the process via Node API. This delays killing of all child
                        // processes of `this.proc` until the main Node.js process dies.
                        this.#browserProcess.kill('SIGKILL');
                    }
                }
            }
            catch (error) {
                throw new Error(`${PROCESS_ERROR_EXPLANATION}\nError cause: ${isErrorLike(error) ? error.stack : error}`);
            }
        }
        this.#clearListeners();
    }
    #recordStream(stream) {
        const rl = readline.createInterface(stream);
        const cleanup = () => {
            rl.off('line', onLine);
            rl.off('close', onClose);
            try {
                rl.close();
            }
            catch { }
        };
        const onLine = (line) => {
            if (line.trim() === '') {
                return;
            }
            this.#logs.push(line);
            const delta = this.#logs.length - this.#maxLogLinesSize;
            if (delta) {
                this.#logs.splice(0, delta);
            }
            this.#lineEmitter.emit('line', line);
        };
        const onClose = () => {
            cleanup();
        };
        rl.on('line', onLine);
        rl.on('close', onClose);
    }
    /**
     * Get recent logs (stderr + stdout) emitted by the browser.
     *
     * @public
     */
    getRecentLogs() {
        return [...this.#logs];
    }
    waitForLineOutput(regex, timeout = 0) {
        return new Promise((resolve, reject) => {
            const onClose = (errorOrCode) => {
                cleanup();
                reject(new Error([
                    `Failed to launch the browser process: ${errorOrCode instanceof Error
                        ? ` ${errorOrCode.message}`
                        : ` Code: ${errorOrCode}`}`,
                    '',
                    `stderr:`,
                    this.getRecentLogs().join('\n'),
                    '',
                    'TROUBLESHOOTING: https://pptr.dev/troubleshooting',
                    '',
                ].join('\n')));
            };
            this.#browserProcess.on('exit', onClose);
            this.#browserProcess.on('error', onClose);
            const timeoutId = timeout > 0 ? setTimeout(onTimeout, timeout) : undefined;
            this.#lineEmitter.on('line', onLine);
            const cleanup = () => {
                clearTimeout(timeoutId);
                this.#lineEmitter.off('line', onLine);
                this.#browserProcess.off('exit', onClose);
                this.#browserProcess.off('error', onClose);
            };
            function onTimeout() {
                cleanup();
                reject(new TimeoutError(`Timed out after ${timeout} ms while waiting for the WS endpoint URL to appear in stdout!`));
            }
            for (const line of this.#logs) {
                onLine(line);
            }
            function onLine(line) {
                const match = line.match(regex);
                if (!match) {
                    return;
                }
                cleanup();
                // The RegExp matches, so this will obviously exist.
                resolve(match[1]);
            }
        });
    }
}
const PROCESS_ERROR_EXPLANATION = `Puppeteer was unable to kill the process which ran the browser binary.
This means that, on future Puppeteer launches, Puppeteer might not be able to launch the browser.
Please check your open processes and ensure that the browser processes that Puppeteer launched have been killed.
If you think this is a bug, please report it on the Puppeteer issue tracker.`;
/**
 * @internal
 */
function pidExists(pid) {
    try {
        return process.kill(pid, 0);
    }
    catch (error) {
        if (isErrnoException(error)) {
            if (error.code && error.code === 'ESRCH') {
                return false;
            }
        }
        throw error;
    }
}
/**
 * @internal
 */
export function isErrorLike(obj) {
    return (typeof obj === 'object' && obj !== null && 'name' in obj && 'message' in obj);
}
/**
 * @internal
 */
export function isErrnoException(obj) {
    return (isErrorLike(obj) &&
        ('errno' in obj || 'code' in obj || 'path' in obj || 'syscall' in obj));
}
/**
 * @public
 */
export class TimeoutError extends Error {
    /**
     * @internal
     */
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
        Error.captureStackTrace(this, this.constructor);
    }
}
//# sourceMappingURL=launch.js.map