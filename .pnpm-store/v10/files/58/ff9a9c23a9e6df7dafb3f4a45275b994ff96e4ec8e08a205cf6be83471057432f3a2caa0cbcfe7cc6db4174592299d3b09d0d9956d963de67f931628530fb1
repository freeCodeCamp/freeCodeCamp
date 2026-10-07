/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */

import childProcess from 'node:child_process';
import {EventEmitter} from 'node:events';
import {accessSync} from 'node:fs';
import os from 'node:os';
import readline from 'node:readline';
import type Stream from 'node:stream';

import {
  type Browser,
  type BrowserPlatform,
  type ChromeReleaseChannel,
  executablePathByBrowser,
  resolveSystemExecutablePaths,
} from './browser-data/browser-data.js';
import {Cache} from './Cache.js';
import {debug} from './debug.js';
import {detectBrowserPlatform} from './detectPlatform.js';

const debugLaunch = debug('puppeteer:browsers:launcher');

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
export function computeExecutablePath(
  options: ComputeExecutablePathOptions,
): string {
  if (options.cacheDir === null) {
    options.platform ??= detectBrowserPlatform();
    if (options.platform === undefined) {
      throw new Error(
        `No platform specified. Couldn't auto-detect browser platform.`,
      );
    }
    return executablePathByBrowser[options.browser](
      options.platform,
      options.buildId,
    );
  }

  return new Cache(options.cacheDir).computeExecutablePath(options);
}

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
export function computeSystemExecutablePath(options: SystemOptions): string {
  options.platform ??= detectBrowserPlatform();
  if (!options.platform) {
    throw new Error(
      `Cannot download a binary for the provided platform: ${os.platform()} (${os.arch()})`,
    );
  }
  const paths = resolveSystemExecutablePaths(
    options.browser,
    options.platform,
    options.channel,
  );
  for (const path of paths) {
    try {
      accessSync(path);
      return path;
    } catch {}
  }
  throw new Error(
    `Could not find Google Chrome executable for channel '${options.channel}' at:${paths.map(
      path => {
        return `\n - ${path}`;
      },
    )}.`,
  );
}

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
export function launch(opts: LaunchOptions): Process {
  return new Process(opts);
}

/**
 * @public
 */
export const CDP_WEBSOCKET_ENDPOINT_REGEX =
  /^DevTools listening on (ws:\/\/.*)$/;

/**
 * @public
 */
export const WEBDRIVER_BIDI_WEBSOCKET_ENDPOINT_REGEX =
  /^WebDriver BiDi listening on (ws:\/\/.*)$/;

type EventHandler = (...args: any[]) => void;
const processListeners = new Map<string, EventHandler[]>();
const dispatchers = {
  exit: (...args: any[]) => {
    processListeners.get('exit')?.forEach(handler => {
      return handler(...args);
    });
  },
  SIGINT: (...args: any[]) => {
    processListeners.get('SIGINT')?.forEach(handler => {
      return handler(...args);
    });
  },
  SIGHUP: (...args: any[]) => {
    processListeners.get('SIGHUP')?.forEach(handler => {
      return handler(...args);
    });
  },
  SIGTERM: (...args: any[]) => {
    processListeners.get('SIGTERM')?.forEach(handler => {
      return handler(...args);
    });
  },
};

function subscribeToProcessEvent(
  event: 'exit' | 'SIGINT' | 'SIGHUP' | 'SIGTERM',
  handler: EventHandler,
): void {
  const listeners = processListeners.get(event) || [];
  if (listeners.length === 0) {
    process.on(event, dispatchers[event]);
  }
  listeners.push(handler);
  processListeners.set(event, listeners);
}

function unsubscribeFromProcessEvent(
  event: 'exit' | 'SIGINT' | 'SIGHUP' | 'SIGTERM',
  handler: EventHandler,
): void {
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
  #args: string[];
  #browserProcess: childProcess.ChildProcess;
  #exited = false;
  // The browser process can be closed externally or from the driver process. We
  // need to invoke the hooks only once though but we don't know how many times
  // we will be invoked.
  #hooksRan = false;
  #onExitHook = async () => {};
  #browserProcessExiting: Promise<void>;
  #logs: string[] = [];
  #maxLogLinesSize = 1000;
  #lineEmitter = new EventEmitter();
  #onAbort = (): void => {
    this.kill();
  };
  #signal?: AbortSignal;

  constructor(opts: LaunchOptions) {
    this.#executablePath = opts.executablePath;
    this.#args = opts.args ?? [];

    this.#signal = opts.signal;
    if (this.#signal?.aborted) {
      throw new Error(
        this.#signal.reason ? this.#signal.reason : 'Launch aborted',
      );
    }
    this.#signal?.addEventListener('abort', this.#onAbort, {once: true});

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
      env: Object.keys(env).reduce<Record<string, string | undefined>>(
        (res, key) => {
          if (key.toLowerCase().startsWith('puppeteer_')) {
            res[key] = env[key];
          }
          return res;
        },
        {},
      ),
      stdio,
    });

    this.#browserProcess = childProcess.spawn(
      this.#executablePath,
      this.#args,
      {
        detached: opts.detached,
        env,
        stdio,
      },
    );
    this.#recordStream(this.#browserProcess.stderr!);
    this.#recordStream(this.#browserProcess.stdout!);

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
        } catch (err) {
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

  get nodeProcess(): childProcess.ChildProcess {
    return this.#browserProcess;
  }

  #configureStdio(opts: {pipe: boolean}): Array<'ignore' | 'pipe'> {
    if (opts.pipe) {
      return ['pipe', 'pipe', 'pipe', 'pipe', 'pipe'];
    } else {
      return ['pipe', 'pipe', 'pipe'];
    }
  }

  #clearListeners(): void {
    unsubscribeFromProcessEvent('exit', this.#onDriverProcessExit);
    unsubscribeFromProcessEvent('SIGINT', this.#onDriverProcessSignal);
    unsubscribeFromProcessEvent('SIGTERM', this.#onDriverProcessSignal);
    unsubscribeFromProcessEvent('SIGHUP', this.#onDriverProcessSignal);
    this.#signal?.removeEventListener('abort', this.#onAbort);
  }

  #onDriverProcessExit = (_code: number) => {
    this.kill();
  };

  #onDriverProcessSignal = (signal: string): void => {
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

  async close(): Promise<void> {
    await this.#runHooks();
    if (!this.#exited) {
      this.kill();
    }
    return await this.#browserProcessExiting;
  }

  hasClosed(): Promise<void> {
    return this.#browserProcessExiting;
  }

  kill(): void {
    debugLaunch?.(`Trying to kill ${this.#browserProcess.pid}`);
    // If the process failed to launch (for example if the browser executable path
    // is invalid), then the process does not get a pid assigned. A call to
    // `proc.kill` would error, as the `pid` to-be-killed can not be found.
    if (
      this.#browserProcess &&
      this.#browserProcess.pid &&
      pidExists(this.#browserProcess.pid)
    ) {
      try {
        debugLaunch?.(`Browser process ${this.#browserProcess.pid} exists`);
        if (process.platform === 'win32') {
          try {
            childProcess.execSync(
              `taskkill /pid ${this.#browserProcess.pid} /T /F`,
            );
          } catch (error) {
            debugLaunch?.(
              `Killing ${this.#browserProcess.pid} using taskkill failed`,
              error,
            );
            // taskkill can fail to kill the process e.g. due to missing permissions.
            // Let's kill the process via Node API. This delays killing of all child
            // processes of `this.proc` until the main Node.js process dies.
            this.#browserProcess.kill();
          }
        } else {
          // on linux the process group can be killed with the group id prefixed with
          // a minus sign. The process group id is the group leader's pid.
          const processGroupId = -this.#browserProcess.pid;

          try {
            process.kill(processGroupId, 'SIGKILL');
          } catch (error) {
            debugLaunch?.(
              `Killing ${this.#browserProcess.pid} using process.kill failed`,
              error,
            );
            // Killing the process group can fail due e.g. to missing permissions.
            // Let's kill the process via Node API. This delays killing of all child
            // processes of `this.proc` until the main Node.js process dies.
            this.#browserProcess.kill('SIGKILL');
          }
        }
      } catch (error) {
        throw new Error(
          `${PROCESS_ERROR_EXPLANATION}\nError cause: ${
            isErrorLike(error) ? error.stack : error
          }`,
        );
      }
    }
    this.#clearListeners();
  }

  #recordStream(stream: Stream.Readable): void {
    const rl = readline.createInterface(stream);
    const cleanup = (): void => {
      rl.off('line', onLine);
      rl.off('close', onClose);
      try {
        rl.close();
      } catch {}
    };
    const onLine = (line: string) => {
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
    const onClose = (): void => {
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
  getRecentLogs(): string[] {
    return [...this.#logs];
  }

  waitForLineOutput(regex: RegExp, timeout = 0): Promise<string> {
    return new Promise((resolve, reject) => {
      const onClose = (errorOrCode?: Error | number): void => {
        cleanup();
        reject(
          new Error(
            [
              `Failed to launch the browser process: ${
                errorOrCode instanceof Error
                  ? ` ${errorOrCode.message}`
                  : ` Code: ${errorOrCode}`
              }`,
              '',
              `stderr:`,
              this.getRecentLogs().join('\n'),
              '',
              'TROUBLESHOOTING: https://pptr.dev/troubleshooting',
              '',
            ].join('\n'),
          ),
        );
      };

      this.#browserProcess.on('exit', onClose);
      this.#browserProcess.on('error', onClose);
      const timeoutId =
        timeout > 0 ? setTimeout(onTimeout, timeout) : undefined;

      this.#lineEmitter.on('line', onLine);
      const cleanup = (): void => {
        clearTimeout(timeoutId);
        this.#lineEmitter.off('line', onLine);
        this.#browserProcess.off('exit', onClose);
        this.#browserProcess.off('error', onClose);
      };

      function onTimeout(): void {
        cleanup();
        reject(
          new TimeoutError(
            `Timed out after ${timeout} ms while waiting for the WS endpoint URL to appear in stdout!`,
          ),
        );
      }

      for (const line of this.#logs) {
        onLine(line);
      }

      function onLine(line: string): void {
        const match = line.match(regex);
        if (!match) {
          return;
        }
        cleanup();
        // The RegExp matches, so this will obviously exist.
        resolve(match[1]!);
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
function pidExists(pid: number): boolean {
  try {
    return process.kill(pid, 0);
  } catch (error) {
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
export interface ErrorLike extends Error {
  name: string;
  message: string;
}

/**
 * @internal
 */
export function isErrorLike(obj: unknown): obj is ErrorLike {
  return (
    typeof obj === 'object' && obj !== null && 'name' in obj && 'message' in obj
  );
}
/**
 * @internal
 */
export function isErrnoException(obj: unknown): obj is NodeJS.ErrnoException {
  return (
    isErrorLike(obj) &&
    ('errno' in obj || 'code' in obj || 'path' in obj || 'syscall' in obj)
  );
}

/**
 * @public
 */
export class TimeoutError extends Error {
  /**
   * @internal
   */
  constructor(message?: string) {
    super(message);
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }
}
