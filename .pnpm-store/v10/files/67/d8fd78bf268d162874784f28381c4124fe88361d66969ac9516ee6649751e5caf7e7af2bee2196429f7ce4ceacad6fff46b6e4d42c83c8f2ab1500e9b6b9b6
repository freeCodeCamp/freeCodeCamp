/**
 * @license
 * Copyright 2022 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */

import type {ChildProcess} from 'node:child_process';

import * as Bidi from 'webdriver-bidi-protocol';

import type {BrowserEvents, CreatePageOptions} from '../api/Browser.js';
import {
  Browser,
  BrowserEvent,
  type BrowserCloseCallback,
  type BrowserContextOptions,
  type ScreenInfo,
  type AddScreenParams,
  type WindowBounds,
  type WindowId,
  type DebugInfo,
} from '../api/Browser.js';
import {BrowserContextEvent} from '../api/BrowserContext.js';
import type {Extension} from '../api/Extension.js';
import type {Page} from '../api/Page.js';
import type {Target} from '../api/Target.js';
import type {Connection as CdpConnection} from '../cdp/Connection.js';
import type {SupportedWebDriverCapabilities} from '../common/ConnectOptions.js';
import {ProtocolError, UnsupportedOperation} from '../common/Errors.js';
import {EventEmitter} from '../common/EventEmitter.js';
import {debugError} from '../common/util.js';
import type {Viewport} from '../common/Viewport.js';
import {bubble} from '../util/decorators.js';

import {BidiBrowserContext} from './BrowserContext.js';
import type {BidiConnection, CdpEvent} from './Connection.js';
import type {Browser as BrowserCore} from './core/Browser.js';
import {Session} from './core/Session.js';
import type {UserContext} from './core/UserContext.js';
import {BidiBrowserTarget} from './Target.js';

/**
 * @internal
 */
export interface BidiBrowserOptions {
  process?: ChildProcess;
  closeCallback?: BrowserCloseCallback;
  connection: BidiConnection;
  cdpConnection?: CdpConnection;
  defaultViewport: Viewport | null;
  acceptInsecureCerts?: boolean;
  capabilities?: SupportedWebDriverCapabilities;
  networkEnabled: boolean;
  issuesEnabled: boolean;
}

/**
 * @internal
 */
export class BidiBrowser extends Browser {
  readonly protocol = 'webDriverBiDi';

  static readonly subscribeModules: [string, ...string[]] = [
    'browsingContext',
    'network',
    'log',
    'script',
    'input',
  ];
  static readonly subscribeCdpEvents: Array<CdpEvent['method']> = [
    // Coverage
    'goog:cdp.Debugger.scriptParsed',
    'goog:cdp.CSS.styleSheetAdded',
    'goog:cdp.Runtime.executionContextsCleared',
    // Tracing
    'goog:cdp.Tracing.tracingComplete',
    // TODO: subscribe to all CDP events in the future.
    'goog:cdp.Network.requestWillBeSent',
    'goog:cdp.Debugger.scriptParsed',
    'goog:cdp.Page.screencastFrame',
  ];

  static async create(opts: BidiBrowserOptions): Promise<BidiBrowser> {
    const session = await Session.from(opts.connection, {
      firstMatch: opts.capabilities?.firstMatch,
      alwaysMatch: {
        ...opts.capabilities?.alwaysMatch,
        // Capabilities that come from Puppeteer's API take precedence.
        acceptInsecureCerts: opts.acceptInsecureCerts,
        unhandledPromptBehavior: {
          default: Bidi.Session.UserPromptHandlerType.Ignore,
        },
        webSocketUrl: true,
        // Puppeteer with WebDriver BiDi does not support prerendering
        // yet because WebDriver BiDi behavior is not specified. See
        // https://github.com/w3c/webdriver-bidi/issues/321.
        'goog:prerenderingDisabled': true,
        // TODO: remove after Puppeteer rolled Chrome to 142 after Oct 28, 2025.
        'goog:disableNetworkDurableMessages': true,
      },
    });

    // Subscribe to all WebDriver BiDi events. Also subscribe to CDP events if CDP
    // connection is available.
    await session.subscribe(
      (opts.cdpConnection
        ? [...BidiBrowser.subscribeModules, ...BidiBrowser.subscribeCdpEvents]
        : BidiBrowser.subscribeModules
      ).filter(module => {
        if (!opts.networkEnabled) {
          return (
            module !== 'network' &&
            module !== 'goog:cdp.Network.requestWillBeSent'
          );
        }
        return true;
      }) as [string, ...string[]],
    );

    await Promise.all(
      [Bidi.Network.DataType.Request, Bidi.Network.DataType.Response].map(
        // Data collectors might be not implemented for specific data type, so create them
        // separately and ignore protocol errors.
        async dataType => {
          try {
            await session.send('network.addDataCollector', {
              dataTypes: [dataType],
              // Buffer size of 20 MB is equivalent to the CDP:
              maxEncodedDataSize: 20_000_000,
            });
          } catch (err) {
            if (err instanceof ProtocolError) {
              debugError(err);
            } else {
              throw err;
            }
          }
        },
      ),
    );

    const browser = new BidiBrowser(session.browser, opts);
    browser.#initialize();
    return browser;
  }

  @bubble()
  accessor #trustedEmitter = new EventEmitter<BrowserEvents>();

  #process?: ChildProcess;
  #closeCallback?: BrowserCloseCallback;
  #browserCore: BrowserCore;
  #defaultViewport: Viewport | null;
  #browserContexts = new WeakMap<UserContext, BidiBrowserContext>();
  #target = new BidiBrowserTarget(this);
  #cdpConnection?: CdpConnection;
  #networkEnabled: boolean;
  #issuesEnabled: boolean;

  private constructor(browserCore: BrowserCore, opts: BidiBrowserOptions) {
    super();
    this.#process = opts.process;
    this.#closeCallback = opts.closeCallback;
    this.#browserCore = browserCore;
    this.#defaultViewport = opts.defaultViewport;
    this.#cdpConnection = opts.cdpConnection;
    this.#networkEnabled = opts.networkEnabled;
    this.#issuesEnabled = opts.issuesEnabled;
  }

  #initialize() {
    // Initializing existing contexts.
    for (const userContext of this.#browserCore.userContexts) {
      this.#createBrowserContext(userContext);
    }

    this.#browserCore.once('disconnected', () => {
      this.#trustedEmitter.emit(BrowserEvent.Disconnected, undefined);
      this.#trustedEmitter.removeAllListeners();
    });
    this.#process?.once('close', () => {
      this.#browserCore.dispose('Browser process exited.', true);
      this.connection.dispose();
    });
  }

  get #browserName() {
    return this.#browserCore.session.capabilities.browserName;
  }
  get #browserVersion() {
    return this.#browserCore.session.capabilities.browserVersion;
  }

  get cdpSupported(): boolean {
    return this.#cdpConnection !== undefined;
  }

  get cdpConnection(): CdpConnection | undefined {
    return this.#cdpConnection;
  }

  override async userAgent(): Promise<string> {
    return this.#browserCore.session.capabilities.userAgent;
  }

  #createBrowserContext(userContext: UserContext) {
    const browserContext = BidiBrowserContext.from(this, userContext, {
      defaultViewport: this.#defaultViewport,
    });
    this.#browserContexts.set(userContext, browserContext);

    browserContext.trustedEmitter.on(
      BrowserContextEvent.TargetCreated,
      target => {
        this.#trustedEmitter.emit(BrowserEvent.TargetCreated, target);
      },
    );
    browserContext.trustedEmitter.on(
      BrowserContextEvent.TargetChanged,
      target => {
        this.#trustedEmitter.emit(BrowserEvent.TargetChanged, target);
      },
    );
    browserContext.trustedEmitter.on(
      BrowserContextEvent.TargetDestroyed,
      target => {
        this.#trustedEmitter.emit(BrowserEvent.TargetDestroyed, target);
      },
    );

    return browserContext;
  }

  get connection(): BidiConnection {
    // SAFETY: We only have one implementation.
    return this.#browserCore.session.connection as BidiConnection;
  }

  override wsEndpoint(): string {
    return this.connection.url;
  }

  override async close(): Promise<void> {
    if (this.connection.closed) {
      return;
    }

    try {
      await this.#browserCore.close();
      await this.#closeCallback?.call(null);
    } catch (error) {
      // Fail silently.
      debugError(error);
    } finally {
      this.connection.dispose();
    }
  }

  override get connected(): boolean {
    return !this.#browserCore.disconnected;
  }

  override process(): ChildProcess | null {
    return this.#process ?? null;
  }

  override async createBrowserContext(
    options: BrowserContextOptions = {},
  ): Promise<BidiBrowserContext> {
    const userContext = await this.#browserCore.createUserContext(options);
    return this.#createBrowserContext(userContext);
  }

  override async version(): Promise<string> {
    return `${this.#browserName}/${this.#browserVersion}`;
  }

  override browserContexts(): BidiBrowserContext[] {
    return [...this.#browserCore.userContexts].map(context => {
      return this.#browserContexts.get(context)!;
    });
  }

  override defaultBrowserContext(): BidiBrowserContext {
    return this.#browserContexts.get(this.#browserCore.defaultUserContext)!;
  }

  override newPage(options?: CreatePageOptions): Promise<Page> {
    return this.defaultBrowserContext().newPage(options);
  }

  override installExtension(path: string): Promise<string> {
    return this.#browserCore.installExtension(path);
  }

  override async uninstallExtension(id: string): Promise<void> {
    await this.#browserCore.uninstallExtension(id);
  }

  override screens(): Promise<ScreenInfo[]> {
    throw new UnsupportedOperation();
  }

  override addScreen(_params: AddScreenParams): Promise<ScreenInfo> {
    throw new UnsupportedOperation();
  }

  override removeScreen(_screenId: string): Promise<void> {
    throw new UnsupportedOperation();
  }

  override async getWindowBounds(windowId: WindowId): Promise<WindowBounds> {
    const clientWindowInfo =
      await this.#browserCore.getClientWindowInfo(windowId);
    return {
      left: clientWindowInfo.x,
      top: clientWindowInfo.y,
      width: clientWindowInfo.width,
      height: clientWindowInfo.height,
      windowState: clientWindowInfo.state,
    };
  }

  override async setWindowBounds(
    windowId: WindowId,
    windowBounds: WindowBounds,
  ): Promise<void> {
    let params: Bidi.Browser.SetClientWindowStateParameters | undefined;
    const windowState = windowBounds.windowState ?? 'normal';
    if (windowState === 'normal') {
      params = {
        clientWindow: windowId,
        state: 'normal',
        x: windowBounds.left,
        y: windowBounds.top,
        width: windowBounds.width,
        height: windowBounds.height,
      };
    } else {
      params = {
        clientWindow: windowId,
        state: windowState,
      };
    }

    await this.#browserCore.setClientWindowState(params);
  }

  override targets(): Target[] {
    return [
      this.#target,
      ...this.browserContexts().flatMap(context => {
        return context.targets();
      }),
    ];
  }

  override target(): BidiBrowserTarget {
    return this.#target;
  }

  override async disconnect(): Promise<void> {
    try {
      await this.#browserCore.session.end();
    } catch (error) {
      // Fail silently.
      debugError(error);
    } finally {
      this.connection.dispose();
    }
  }

  override get debugInfo(): DebugInfo {
    return {
      pendingProtocolErrors: this.connection.getPendingProtocolErrors(),
    };
  }

  override isNetworkEnabled(): boolean {
    return this.#networkEnabled;
  }

  override extensions(): Promise<Map<string, Extension>> {
    throw new UnsupportedOperation();
  }

  override isIssuesEnabled(): boolean {
    return this.#issuesEnabled;
  }
}
