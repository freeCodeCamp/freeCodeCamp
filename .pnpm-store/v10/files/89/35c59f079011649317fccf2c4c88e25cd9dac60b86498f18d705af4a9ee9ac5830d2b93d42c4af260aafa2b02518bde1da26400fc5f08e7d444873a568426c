/**
 * @license
 * Copyright 2017 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */

import type {Protocol} from 'devtools-protocol';

import {firstValueFrom, from, raceWith} from '../../third_party/rxjs/rxjs.js';
import type {BluetoothEmulation} from '../api/BluetoothEmulation.js';
import type {Browser, WindowId} from '../api/Browser.js';
import type {BrowserContext} from '../api/BrowserContext.js';
import {CDPSessionEvent, type CDPSession} from '../api/CDPSession.js';
import type {DeviceRequestPrompt} from '../api/DeviceRequestPrompt.js';
import type {ElementHandle} from '../api/ElementHandle.js';
import type {Extension} from '../api/Extension.js';
import type {Frame, WaitForOptions} from '../api/Frame.js';
import type {HTTPResponse} from '../api/HTTPResponse.js';
import type {JSHandle} from '../api/JSHandle.js';
import type {
  Credentials,
  HeapSnapshotOptions,
  ReloadOptions,
} from '../api/Page.js';
import {
  Page,
  PageEvent,
  type GeolocationOptions,
  type MediaFeature,
  type Metrics,
  type NewDocumentScriptEvaluation,
  type ScreenshotClip,
  type ScreenshotOptions,
  type WaitTimeoutOptions,
} from '../api/Page.js';
import {WebWorker, WebWorkerEvent} from '../api/WebWorker.js';
import {ConsoleMessage} from '../common/ConsoleMessage.js';
import type {
  Cookie,
  DeleteCookiesRequest,
  CookieParam,
  CookiePartitionKey,
  CookieSameSite,
} from '../common/Cookie.js';
import {TargetCloseError} from '../common/Errors.js';
import {EventEmitter} from '../common/EventEmitter.js';
import {FileChooser} from '../common/FileChooser.js';
import {NetworkManagerEvent} from '../common/NetworkManagerEvents.js';
import type {PDFOptions} from '../common/PDFOptions.js';
import type {BindingPayload, HandleFor} from '../common/types.js';
import {
  debugError,
  evaluationString,
  getReadableAsTypedArray,
  getReadableFromProtocolStream,
  parsePDFOptions,
  timeout,
  validateDialogType,
} from '../common/util.js';
import type {Viewport} from '../common/Viewport.js';
import {environment} from '../environment.js';
import type {Realm} from '../index-browser.js';
import {assert} from '../util/assert.js';
import {Deferred} from '../util/Deferred.js';
import {AsyncDisposableStack} from '../util/disposable.js';
import {isErrorLike} from '../util/ErrorLike.js';

import {Binding} from './Binding.js';
import {CdpBluetoothEmulation} from './BluetoothEmulation.js';
import type {CdpBrowser} from './Browser.js';
import {CdpCDPSession} from './CdpSession.js';
import {isTargetClosedError} from './Connection.js';
import {Coverage} from './Coverage.js';
import {CdpDialog} from './Dialog.js';
import {EmulationManager} from './EmulationManager.js';
import type {CdpFrame} from './Frame.js';
import {FrameManager} from './FrameManager.js';
import {FrameManagerEvent} from './FrameManagerEvents.js';
import {CdpKeyboard, CdpMouse, CdpTouchscreen} from './Input.js';
import type {IsolatedWorld} from './IsolatedWorld.js';
import {MAIN_WORLD} from './IsolatedWorlds.js';
import {releaseObject} from './JSHandle.js';
import type {NetworkConditions} from './NetworkManager.js';
import type {CdpTarget} from './Target.js';
import {TargetManagerEvent} from './TargetManageEvents.js';
import type {TargetManager} from './TargetManager.js';
import {Tracing} from './Tracing.js';
import {
  convertConsoleMessageLevel,
  createClientError,
  createConsoleMessage,
  pageBindingInitString,
} from './utils.js';
import {WebMCP} from './WebMCP.js';
import {CdpWebWorker} from './WebWorker.js';

/**
 * @internal
 */
export function convertSameSiteFromPuppeteerToCdp(
  sameSite: CookieSameSite | undefined,
): Protocol.Network.CookieSameSite | undefined {
  switch (sameSite) {
    case 'Strict':
    case 'Lax':
    case 'None':
      return sameSite;
    default:
      return undefined;
  }
}

/**
 * @internal
 */
export class CdpPage extends Page {
  static async _create(
    client: CdpCDPSession,
    target: CdpTarget,
    defaultViewport: Viewport | null,
  ): Promise<CdpPage> {
    const page = new CdpPage(client, target);
    await page.#initialize();
    if (defaultViewport) {
      try {
        await page.setViewport(defaultViewport);
      } catch (err) {
        if (isErrorLike(err) && isTargetClosedError(err)) {
          debugError(err);
        } else {
          throw err;
        }
      }
    }
    return page;
  }

  #closed = false;
  readonly #targetManager: TargetManager;
  readonly #cdpBluetoothEmulation: CdpBluetoothEmulation;

  #primaryTargetClient: CdpCDPSession;
  #primaryTarget: CdpTarget;
  #tabTargetClient: CDPSession;
  #tabTarget: CdpTarget;
  #keyboard: CdpKeyboard;
  #mouse: CdpMouse;
  #touchscreen: CdpTouchscreen;
  #frameManager: FrameManager;
  #emulationManager: EmulationManager;
  #tracing: Tracing;
  #webmcp: WebMCP;
  #bindings = new Map<string, Binding>();
  #exposedFunctions = new Map<string, string>();
  #coverage: Coverage;
  #viewport: Viewport | null;
  #workers = new Map<string, CdpWebWorker>();
  #fileChooserDeferreds = new Set<Deferred<FileChooser>>();
  #sessionCloseDeferred = Deferred.create<never, TargetCloseError>();
  #serviceWorkerBypassed = false;
  #userDragInterceptionEnabled = false;

  constructor(client: CdpCDPSession, target: CdpTarget) {
    super();
    this.#primaryTargetClient = client;
    this.#tabTargetClient = client.parentSession()!;
    assert(this.#tabTargetClient, 'Tab target session is not defined.');
    this.#tabTarget = (this.#tabTargetClient as CdpCDPSession).target();
    assert(this.#tabTarget, 'Tab target is not defined.');
    this._tabId = this.#tabTarget._getTargetInfo().targetId;
    this.#primaryTarget = target;
    this.#targetManager = target._targetManager();
    this.#keyboard = new CdpKeyboard(client);
    this.#mouse = new CdpMouse(client, this.#keyboard);
    this.#touchscreen = new CdpTouchscreen(client, this.#keyboard);
    this.#frameManager = new FrameManager(client, this, this._timeoutSettings);
    this.#emulationManager = new EmulationManager(client);
    this.#tracing = new Tracing(client);
    this.#webmcp = new WebMCP(client, this.#frameManager);
    this.#coverage = new Coverage(client);
    this.#viewport = null;

    // Use browser context's connection, as current Bluetooth emulation in Chromium is
    // implemented on the browser context level, and not tight to the specific tab.
    this.#cdpBluetoothEmulation = new CdpBluetoothEmulation(
      this.#primaryTargetClient.connection(),
    );

    const frameManagerEmitter = new EventEmitter(this.#frameManager);
    frameManagerEmitter.on(FrameManagerEvent.FrameAttached, frame => {
      this.emit(PageEvent.FrameAttached, frame);
    });
    frameManagerEmitter.on(FrameManagerEvent.FrameDetached, frame => {
      this.emit(PageEvent.FrameDetached, frame);
    });
    frameManagerEmitter.on(FrameManagerEvent.FrameNavigated, frame => {
      this.emit(PageEvent.FrameNavigated, frame);
    });
    frameManagerEmitter.on(
      FrameManagerEvent.ConsoleApiCalled,
      ([world, event]) => {
        this.#onConsoleAPI(world, event);
      },
    );
    frameManagerEmitter.on(
      FrameManagerEvent.BindingCalled,
      ([world, event]) => {
        void this.#onBindingCalled(world, event);
      },
    );

    const networkManagerEmitter = new EventEmitter(
      this.#frameManager.networkManager,
    );
    networkManagerEmitter.on(NetworkManagerEvent.Request, request => {
      this.emit(PageEvent.Request, request);
    });
    networkManagerEmitter.on(
      NetworkManagerEvent.RequestServedFromCache,
      request => {
        this.emit(PageEvent.RequestServedFromCache, request!);
      },
    );
    networkManagerEmitter.on(NetworkManagerEvent.Response, response => {
      this.emit(PageEvent.Response, response);
    });
    networkManagerEmitter.on(NetworkManagerEvent.RequestFailed, request => {
      this.emit(PageEvent.RequestFailed, request);
    });
    networkManagerEmitter.on(NetworkManagerEvent.RequestFinished, request => {
      this.emit(PageEvent.RequestFinished, request);
    });

    this.#tabTargetClient.on(
      CDPSessionEvent.Swapped,
      this.#onActivation.bind(this),
    );

    this.#tabTargetClient.on(
      CDPSessionEvent.Ready,
      this.#onSecondaryTarget.bind(this),
    );

    this.#targetManager.on(
      TargetManagerEvent.TargetGone,
      this.#onDetachedFromTarget,
    );

    this.#tabTarget._isClosedDeferred
      .valueOrThrow()
      .then(() => {
        this.#targetManager.off(
          TargetManagerEvent.TargetGone,
          this.#onDetachedFromTarget,
        );

        this.emit(PageEvent.Close, undefined);
        this.#closed = true;
      })
      .catch(debugError);

    this.#setupPrimaryTargetListeners();
    this.#attachExistingTargets();
  }

  #attachExistingTargets(): void {
    const queue = [];
    for (const childTarget of this.#targetManager.getChildTargets(
      this.#primaryTarget,
    )) {
      queue.push(childTarget);
    }
    let idx = 0;
    while (idx < queue.length) {
      const next = queue[idx] as CdpTarget;
      idx++;
      const session = next._session();
      if (session) {
        this.#onAttachedToTarget(session);
      }
      for (const childTarget of this.#targetManager.getChildTargets(next)) {
        queue.push(childTarget);
      }
    }
  }

  async #onActivation(newSession: CDPSession): Promise<void> {
    // TODO: Remove assert once we have separate Event type for CdpCDPSession.
    assert(
      newSession instanceof CdpCDPSession,
      'CDPSession is not instance of CdpCDPSession',
    );
    this.#primaryTargetClient = newSession;
    this.#primaryTarget = newSession.target();
    assert(this.#primaryTarget, 'Missing target on swap');
    this.#keyboard.updateClient(newSession);
    this.#mouse.updateClient(newSession);
    this.#touchscreen.updateClient(newSession);
    this.#emulationManager.updateClient(newSession);
    this.#tracing.updateClient(newSession);
    this.#webmcp.updateClient(newSession);
    this.#coverage.updateClient(newSession);
    await this.#frameManager.swapFrameTree(newSession);
    this.#setupPrimaryTargetListeners();
  }

  async #onSecondaryTarget(session: CDPSession): Promise<void> {
    assert(session instanceof CdpCDPSession);
    if (session.target()._subtype() !== 'prerender') {
      return;
    }
    this.#frameManager.registerSpeculativeSession(session).catch(debugError);
    this.#emulationManager
      .registerSpeculativeSession(session)
      .catch(debugError);
  }

  /**
   * Sets up listeners for the primary target. The primary target can change
   * during a navigation to a prerended page.
   */
  #setupPrimaryTargetListeners() {
    const clientEmitter = new EventEmitter(this.#primaryTargetClient);
    clientEmitter.on(CDPSessionEvent.Ready, this.#onAttachedToTarget);
    clientEmitter.on(CDPSessionEvent.Disconnected, () => {
      this.#sessionCloseDeferred.reject(new TargetCloseError('Target closed'));
    });
    clientEmitter.on('Page.domContentEventFired', () => {
      this.emit(PageEvent.DOMContentLoaded, undefined);
    });
    clientEmitter.on('Page.loadEventFired', () => {
      this.emit(PageEvent.Load, undefined);
    });
    clientEmitter.on('Page.javascriptDialogOpening', this.#onDialog.bind(this));
    clientEmitter.on(
      'Runtime.exceptionThrown',
      this.#handleException.bind(this),
    );
    clientEmitter.on(
      'Inspector.targetCrashed',
      this.#onTargetCrashed.bind(this),
    );
    clientEmitter.on('Performance.metrics', this.#emitMetrics.bind(this));
    clientEmitter.on('Log.entryAdded', this.#onLogEntryAdded.bind(this));
    clientEmitter.on('Page.fileChooserOpened', this.#onFileChooser.bind(this));
  }

  #onDetachedFromTarget = (target: CdpTarget) => {
    const sessionId = target._session()?.id();
    const worker = this.#workers.get(sessionId!);
    if (!worker) {
      return;
    }
    this.#workers.delete(sessionId!);
    this.emit(PageEvent.WorkerDestroyed, worker);
  };

  #onAttachedToTarget = (session: CDPSession) => {
    assert(session instanceof CdpCDPSession);
    this.#frameManager.onAttachedToTarget(session.target());
    if (session.target()._getTargetInfo().type === 'worker') {
      const worker = new CdpWebWorker(
        session,
        session.target().url(),
        session.target()._targetId,
        session.target().type(),
        this.#handleException.bind(this),
        this.#frameManager.networkManager,
      );
      this.#workers.set(session.id(), worker);
      worker.internalEmitter.on(WebWorkerEvent.Console, message => {
        const noListenersForConsoleOnPage =
          this.listenerCount(PageEvent.Console) === 0;
        const noListenersForConsoleOnWorker =
          worker.listenerCount(WebWorkerEvent.Console) === 0;

        if (noListenersForConsoleOnPage && noListenersForConsoleOnWorker) {
          // eslint-disable-next-line max-len -- The comment is long.
          // eslint-disable-next-line @puppeteer/use-using -- These are not owned by this function.
          for (const arg of message.args()) {
            void arg.dispose().catch(debugError);
          }
          return;
        }

        if (!noListenersForConsoleOnPage) {
          this.emit(PageEvent.Console, message);
        }
      });
      this.emit(PageEvent.WorkerCreated, worker);
    }
    session.on(CDPSessionEvent.Ready, this.#onAttachedToTarget);
  };

  async #initialize(): Promise<void> {
    try {
      await Promise.all([
        this.#frameManager.initialize(this.#primaryTargetClient),
        this.#primaryTargetClient.send('Performance.enable'),
        this.#primaryTargetClient.send('Log.enable'),
        this.#webmcp.initialize(),
      ]);
    } catch (err) {
      if (isErrorLike(err) && isTargetClosedError(err)) {
        debugError(err);
      } else {
        throw err;
      }
    }
  }

  override async resize(params: {
    contentWidth: number;
    contentHeight: number;
  }): Promise<void> {
    const windowId = await this.windowId();
    await this.#primaryTargetClient.send('Browser.setContentsSize', {
      windowId: Number(windowId),
      width: params.contentWidth,
      height: params.contentHeight,
    });
  }

  override async windowId(): Promise<WindowId> {
    const {windowId} = await this.#primaryTargetClient.send(
      'Browser.getWindowForTarget',
    );

    return windowId.toString();
  }

  async #onFileChooser(
    event: Protocol.Page.FileChooserOpenedEvent,
  ): Promise<void> {
    if (!this.#fileChooserDeferreds.size) {
      return;
    }

    const frame = this.#frameManager.frame(event.frameId);
    assert(frame, 'This should never happen.');

    // This is guaranteed to be an HTMLInputElement handle by the event.
    using handle = (await frame.worlds[MAIN_WORLD].adoptBackendNode(
      event.backendNodeId,
    )) as ElementHandle<HTMLInputElement>;

    const fileChooser = new FileChooser(
      handle.move(),
      event.mode !== 'selectSingle',
    );
    for (const promise of this.#fileChooserDeferreds) {
      promise.resolve(fileChooser);
    }
    this.#fileChooserDeferreds.clear();
  }

  _client(): CDPSession {
    return this.#primaryTargetClient;
  }

  _isUrlAllowed(url: string): boolean {
    return this.#targetManager.isUrlAllowed(url);
  }

  override isServiceWorkerBypassed(): boolean {
    return this.#serviceWorkerBypassed;
  }

  override isDragInterceptionEnabled(): boolean {
    return this.#userDragInterceptionEnabled;
  }

  override isJavaScriptEnabled(): boolean {
    return this.#emulationManager.javascriptEnabled;
  }

  override async openDevTools(): Promise<Page> {
    const pageTargetId = this.target()._targetId;
    const browser = this.browser() as CdpBrowser;
    const devtoolsTargetId = await browser._hasDevToolsTarget(
      this.target()._targetId,
    );
    if (devtoolsTargetId) {
      return await browser._getDevToolsTargetPage(devtoolsTargetId);
    }
    const devtoolsPage = await browser._createDevToolsPage(pageTargetId);
    return devtoolsPage;
  }

  override async hasDevTools(): Promise<boolean> {
    const browser = this.browser() as CdpBrowser;
    const targetId = await browser._hasDevToolsTarget(this.target()._targetId);
    return Boolean(targetId);
  }

  override async waitForFileChooser(
    options: WaitTimeoutOptions = {},
  ): Promise<FileChooser> {
    const needsEnable = this.#fileChooserDeferreds.size === 0;
    const {timeout = this._timeoutSettings.timeout()} = options;
    const deferred = Deferred.create<FileChooser>({
      message: `Waiting for \`FileChooser\` failed: ${timeout}ms exceeded`,
      timeout,
    });

    if (options.signal) {
      options.signal.addEventListener(
        'abort',
        () => {
          deferred.reject(options.signal?.reason);
        },
        {once: true},
      );
    }

    this.#fileChooserDeferreds.add(deferred);
    let enablePromise: Promise<void> | undefined;
    if (needsEnable) {
      enablePromise = this.#primaryTargetClient.send(
        'Page.setInterceptFileChooserDialog',
        {
          enabled: true,
        },
      );
    }
    try {
      const [result] = await Promise.all([
        deferred.valueOrThrow(),
        enablePromise,
      ]);
      return result;
    } catch (error) {
      this.#fileChooserDeferreds.delete(deferred);
      throw error;
    }
  }

  override async setGeolocation(options: GeolocationOptions): Promise<void> {
    return await this.#emulationManager.setGeolocation(options);
  }

  override target(): CdpTarget {
    return this.#primaryTarget;
  }

  override browser(): Browser {
    return this.#primaryTarget.browser();
  }

  override browserContext(): BrowserContext {
    return this.#primaryTarget.browserContext();
  }

  #onTargetCrashed(): void {
    this.emit(PageEvent.Error, new Error('Page crashed!'));
  }

  #onLogEntryAdded(event: Protocol.Log.EntryAddedEvent): void {
    const {level, text, args, source, url, lineNumber, stackTrace} =
      event.entry;
    if (args) {
      args.map(arg => {
        void releaseObject(this.#primaryTargetClient, arg);
      });
    }
    if (source !== 'worker') {
      this.emit(
        PageEvent.Console,
        new ConsoleMessage(
          convertConsoleMessageLevel(level),
          text,
          [],
          [{url, lineNumber}],
          undefined,
          stackTrace,
          this.#primaryTarget._targetId,
        ),
      );
    }
  }

  override mainFrame(): CdpFrame {
    return this.#frameManager.mainFrame();
  }

  override get keyboard(): CdpKeyboard {
    return this.#keyboard;
  }

  override get touchscreen(): CdpTouchscreen {
    return this.#touchscreen;
  }

  override get coverage(): Coverage {
    return this.#coverage;
  }

  override get tracing(): Tracing {
    return this.#tracing;
  }

  override get webmcp(): WebMCP {
    return this.#webmcp;
  }

  override frames(): Frame[] {
    return this.#frameManager.frames();
  }

  override workers(): CdpWebWorker[] {
    return Array.from(this.#workers.values());
  }

  override async setRequestInterception(value: boolean): Promise<void> {
    return await this.#frameManager.networkManager.setRequestInterception(
      value,
    );
  }

  override async setBypassServiceWorker(bypass: boolean): Promise<void> {
    this.#serviceWorkerBypassed = bypass;
    return await this.#primaryTargetClient.send(
      'Network.setBypassServiceWorker',
      {bypass},
    );
  }

  override async setDragInterception(enabled: boolean): Promise<void> {
    this.#userDragInterceptionEnabled = enabled;
    return await this.#primaryTargetClient.send('Input.setInterceptDrags', {
      enabled,
    });
  }

  override async setOfflineMode(enabled: boolean): Promise<void> {
    return await this.#frameManager.networkManager.setOfflineMode(enabled);
  }

  override async emulateNetworkConditions(
    networkConditions: NetworkConditions | null,
  ): Promise<void> {
    return await this.#frameManager.networkManager.emulateNetworkConditions(
      networkConditions,
    );
  }

  override async emulateFocusedPage(enabled: boolean): Promise<void> {
    return await this.#emulationManager.emulateFocus(enabled);
  }

  override setDefaultNavigationTimeout(timeout: number): void {
    this._timeoutSettings.setDefaultNavigationTimeout(timeout);
  }

  override setDefaultTimeout(timeout: number): void {
    this._timeoutSettings.setDefaultTimeout(timeout);
  }

  override getDefaultTimeout(): number {
    return this._timeoutSettings.timeout();
  }

  override getDefaultNavigationTimeout(): number {
    return this._timeoutSettings.navigationTimeout();
  }

  override async queryObjects<Prototype>(
    prototypeHandle: JSHandle<Prototype>,
  ): Promise<JSHandle<Prototype[]>> {
    assert(!prototypeHandle.disposed, 'Prototype JSHandle is disposed!');
    assert(
      prototypeHandle.id,
      'Prototype JSHandle must not be referencing primitive value',
    );
    const response = await this.mainFrame().client.send(
      'Runtime.queryObjects',
      {
        prototypeObjectId: prototypeHandle.id,
      },
    );
    return this.mainFrame()
      .mainRealm()
      .createCdpHandle(response.objects) as HandleFor<Prototype[]>;
  }

  override async cookies(...urls: string[]): Promise<Cookie[]> {
    const originalCookies = (
      await this.#primaryTargetClient.send('Network.getCookies', {
        urls: urls.length ? urls : [this.url()],
      })
    ).cookies;

    const unsupportedCookieAttributes = ['sourcePort'];
    const filterUnsupportedAttributes = (
      cookie: Protocol.Network.Cookie,
    ): Protocol.Network.Cookie => {
      for (const attr of unsupportedCookieAttributes) {
        delete (cookie as unknown as Record<string, unknown>)[attr];
      }
      return cookie;
    };
    return originalCookies.map(filterUnsupportedAttributes).map(cookie => {
      return {
        ...cookie,
        // TODO: a breaking change is needed in Puppeteer types to support other
        // partition keys.
        partitionKey: cookie.partitionKey
          ? cookie.partitionKey.topLevelSite
          : undefined,
      };
    });
  }

  override async deleteCookie(
    ...cookies: DeleteCookiesRequest[]
  ): Promise<void> {
    const pageURL = this.url();
    for (const cookie of cookies) {
      const item = {
        ...cookie,
        partitionKey: convertCookiesPartitionKeyFromPuppeteerToCdp(
          cookie.partitionKey,
        ),
      };
      if (!cookie.url && pageURL.startsWith('http')) {
        item.url = pageURL;
      }
      await this.#primaryTargetClient.send('Network.deleteCookies', item);
      if (pageURL.startsWith('http') && !item.partitionKey) {
        const url = new URL(pageURL);
        // Delete also cookies from the page's partition.
        await this.#primaryTargetClient.send('Network.deleteCookies', {
          ...item,
          partitionKey: {
            topLevelSite: url.origin.replace(`:${url.port}`, ''),
            hasCrossSiteAncestor: false,
          },
        });
      }
    }
  }

  override async setCookie(...cookies: CookieParam[]): Promise<void> {
    const pageURL = this.url();
    const startsWithHTTP = pageURL.startsWith('http');
    const items = cookies.map(cookie => {
      const item = Object.assign({}, cookie);
      if (!item.url && startsWithHTTP) {
        item.url = pageURL;
      }
      assert(
        item.url !== 'about:blank',
        `Blank page can not have cookie "${item.name}"`,
      );
      assert(
        !String.prototype.startsWith.call(item.url || '', 'data:'),
        `Data URL page can not have cookie "${item.name}"`,
      );
      return item;
    });
    await this.deleteCookie(...items);
    if (items.length) {
      await this.#primaryTargetClient.send('Network.setCookies', {
        cookies: items.map(cookieParam => {
          return {
            ...cookieParam,
            partitionKey: convertCookiesPartitionKeyFromPuppeteerToCdp(
              cookieParam.partitionKey,
            ),
            sameSite: convertSameSiteFromPuppeteerToCdp(cookieParam.sameSite),
          };
        }),
      });
    }
  }

  override async exposeFunction(
    name: string,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
    pptrFunction: Function | {default: Function},
  ): Promise<void> {
    if (this.#bindings.has(name)) {
      throw new Error(
        `Failed to add page binding with name ${name}: window['${name}'] already exists!`,
      );
    }
    const source = pageBindingInitString('exposedFun', name);
    let binding: Binding;
    switch (typeof pptrFunction) {
      case 'function':
        binding = new Binding(
          name,
          pptrFunction as (...args: unknown[]) => unknown,
          source,
        );
        break;
      default:
        binding = new Binding(
          name,
          pptrFunction.default as (...args: unknown[]) => unknown,
          source,
        );
        break;
    }
    this.#bindings.set(name, binding);
    const [{identifier}] = await Promise.all([
      this.#frameManager.evaluateOnNewDocument(source),
      this.#frameManager.addExposedFunctionBinding(binding),
    ]);
    this.#exposedFunctions.set(name, identifier);
  }

  override async removeExposedFunction(name: string): Promise<void> {
    const exposedFunctionId = this.#exposedFunctions.get(name);
    if (!exposedFunctionId) {
      throw new Error(`Function with name "${name}" does not exist`);
    }
    // #bindings must be updated together with #exposedFunctions.
    const binding = this.#bindings.get(name)!;
    this.#exposedFunctions.delete(name);
    this.#bindings.delete(name);
    await Promise.all([
      this.#frameManager.removeScriptToEvaluateOnNewDocument(exposedFunctionId),
      this.#frameManager.removeExposedFunctionBinding(binding),
    ]);
  }

  override async authenticate(credentials: Credentials | null): Promise<void> {
    return await this.#frameManager.networkManager.authenticate(credentials);
  }

  override async setExtraHTTPHeaders(
    headers: Record<string, string>,
  ): Promise<void> {
    return await this.#frameManager.networkManager.setExtraHTTPHeaders(headers);
  }

  override async setUserAgent(
    userAgentOrOptions:
      | string
      | {
          userAgent?: string;
          userAgentMetadata?: Protocol.Emulation.UserAgentMetadata;
          platform?: string;
        },
    userAgentMetadata?: Protocol.Emulation.UserAgentMetadata,
  ): Promise<void> {
    if (typeof userAgentOrOptions === 'string') {
      return await this.#frameManager.networkManager.setUserAgent(
        userAgentOrOptions,
        userAgentMetadata,
      );
    } else {
      const userAgent =
        userAgentOrOptions.userAgent ?? (await this.browser().userAgent());
      return await this.#frameManager.networkManager.setUserAgent(
        userAgent,
        userAgentOrOptions.userAgentMetadata,
        userAgentOrOptions.platform,
      );
    }
  }

  override async metrics(): Promise<Metrics> {
    const response = await this.#primaryTargetClient.send(
      'Performance.getMetrics',
    );
    return this.#buildMetricsObject(response.metrics);
  }

  override async captureHeapSnapshot(
    options: HeapSnapshotOptions,
  ): Promise<void> {
    const {createWriteStream} = environment.value.fs;
    const stream = createWriteStream(options.path);
    const streamPromise = new Promise<void>((resolve, reject) => {
      stream.on('error', reject);
      stream.on('finish', resolve);
    });

    const client = this.#primaryTargetClient;
    await client.send('HeapProfiler.enable');
    await client.send('HeapProfiler.collectGarbage');

    const handler = (
      event: Protocol.HeapProfiler.AddHeapSnapshotChunkEvent,
    ) => {
      stream.write(event.chunk);
    };
    client.on('HeapProfiler.addHeapSnapshotChunk', handler);

    try {
      await client.send('HeapProfiler.takeHeapSnapshot', {
        reportProgress: false,
      });
    } finally {
      client.off('HeapProfiler.addHeapSnapshotChunk', handler);
      await client.send('HeapProfiler.disable');
    }

    stream.end();
    await streamPromise;
  }

  #emitMetrics(event: Protocol.Performance.MetricsEvent): void {
    this.emit(PageEvent.Metrics, {
      title: event.title,
      metrics: this.#buildMetricsObject(event.metrics),
    });
  }

  #buildMetricsObject(metrics?: Protocol.Performance.Metric[]): Metrics {
    const result: Record<
      Protocol.Performance.Metric['name'],
      Protocol.Performance.Metric['value']
    > = {};
    for (const metric of metrics || []) {
      if (supportedMetrics.has(metric.name)) {
        result[metric.name] = metric.value;
      }
    }
    return result;
  }

  #handleException(exception: Protocol.Runtime.ExceptionThrownEvent): void {
    this.emit(
      PageEvent.PageError,
      createClientError(exception.exceptionDetails),
    );
  }

  #onConsoleAPI(
    world: IsolatedWorld,
    event: Protocol.Runtime.ConsoleAPICalledEvent,
    values?: JSHandle[],
  ): void {
    if (!values) {
      values = event.args.map(arg => {
        return world.createCdpHandle(arg);
      });
    }

    const hasPageConsoleListeners = this.listenerCount(PageEvent.Console) > 0;
    const hasWorkerConsoleListeners =
      world.environment instanceof WebWorker &&
      world.environment.listenerCount(WebWorkerEvent.Console) > 0;

    if (!hasPageConsoleListeners) {
      if (!hasWorkerConsoleListeners) {
        // eslint-disable-next-line max-len -- The comment is long.
        // eslint-disable-next-line @puppeteer/use-using -- These are not owned by this function.
        for (const value of values) {
          void value.dispose().catch(debugError);
        }
      }
      return;
    }

    let targetId;
    if (world.environment.client instanceof CdpCDPSession) {
      targetId = world.environment.client.target()._targetId;
    }

    this.emit(PageEvent.Console, createConsoleMessage(event, values, targetId));
  }

  async #onBindingCalled(
    world: IsolatedWorld,
    event: Protocol.Runtime.BindingCalledEvent,
  ): Promise<void> {
    let payload: BindingPayload;
    try {
      payload = JSON.parse(event.payload);
    } catch {
      // The binding was either called by something in the page or it was
      // called before our wrapper was initialized.
      return;
    }
    const {type, name, seq, args, isTrivial} = payload;
    if (type !== 'exposedFun') {
      return;
    }

    const context = world.context;
    if (!context) {
      return;
    }

    const binding = this.#bindings.get(name);
    await binding?.run(context, seq, args, isTrivial);
  }

  #onDialog(event: Protocol.Page.JavascriptDialogOpeningEvent): void {
    const type = validateDialogType(event.type);
    const dialog = new CdpDialog(
      this.#primaryTargetClient,
      type,
      event.message,
      event.defaultPrompt,
    );
    this.emit(PageEvent.Dialog, dialog);
  }

  override async reload(options?: ReloadOptions): Promise<HTTPResponse | null> {
    const [result] = await Promise.all([
      this.waitForNavigation({
        ...options,
        ignoreSameDocumentNavigation: true,
      }),
      this.#primaryTargetClient.send('Page.reload', {
        ignoreCache: options?.ignoreCache ?? false,
      }),
    ]);

    return result;
  }

  override async createCDPSession(): Promise<CDPSession> {
    return await this.target().createCDPSession();
  }

  override async goBack(
    options: WaitForOptions = {},
  ): Promise<HTTPResponse | null> {
    return await this.#go(-1, options);
  }

  override async goForward(
    options: WaitForOptions = {},
  ): Promise<HTTPResponse | null> {
    return await this.#go(+1, options);
  }

  async #go(
    delta: number,
    options: WaitForOptions,
  ): Promise<HTTPResponse | null> {
    const history = await this.#primaryTargetClient.send(
      'Page.getNavigationHistory',
    );
    const entry = history.entries[history.currentIndex + delta];
    if (!entry) {
      throw new Error('History entry to navigate to not found.');
    }
    const result = await Promise.all([
      this.waitForNavigation(options),
      this.#primaryTargetClient.send('Page.navigateToHistoryEntry', {
        entryId: entry.id,
      }),
    ]);
    return result[0];
  }

  override async bringToFront(): Promise<void> {
    await this.#primaryTargetClient.send('Page.bringToFront');
  }

  override async setJavaScriptEnabled(enabled: boolean): Promise<void> {
    return await this.#emulationManager.setJavaScriptEnabled(enabled);
  }

  override async setBypassCSP(enabled: boolean): Promise<void> {
    await this.#primaryTargetClient.send('Page.setBypassCSP', {enabled});
  }

  override async triggerExtensionAction(extension: Extension): Promise<void> {
    return await extension.triggerAction(this);
  }

  override async emulateMediaType(type?: string): Promise<void> {
    return await this.#emulationManager.emulateMediaType(type);
  }

  override async emulateCPUThrottling(factor: number | null): Promise<void> {
    return await this.#emulationManager.emulateCPUThrottling(factor);
  }

  override async emulateMediaFeatures(
    features?: MediaFeature[],
  ): Promise<void> {
    return await this.#emulationManager.emulateMediaFeatures(features);
  }

  override async emulateTimezone(timezoneId?: string): Promise<void> {
    return await this.#emulationManager.emulateTimezone(timezoneId);
  }

  override async emulateIdleState(overrides?: {
    isUserActive: boolean;
    isScreenUnlocked: boolean;
  }): Promise<void> {
    return await this.#emulationManager.emulateIdleState(overrides);
  }

  override async emulateVisionDeficiency(
    type?: Protocol.Emulation.SetEmulatedVisionDeficiencyRequest['type'],
  ): Promise<void> {
    return await this.#emulationManager.emulateVisionDeficiency(type);
  }

  override async setViewport(viewport: Viewport | null): Promise<void> {
    const needsReload = await this.#emulationManager.emulateViewport(viewport);
    this.#viewport = viewport;
    if (needsReload) {
      await this.reload();
    }
  }

  override viewport(): Viewport | null {
    return this.#viewport;
  }

  override async evaluateOnNewDocument<
    Params extends unknown[],
    Func extends (...args: Params) => unknown = (...args: Params) => unknown,
  >(
    pageFunction: Func | string,
    ...args: Params
  ): Promise<NewDocumentScriptEvaluation> {
    const source = evaluationString(pageFunction, ...args);
    return await this.#frameManager.evaluateOnNewDocument(source);
  }

  override async removeScriptToEvaluateOnNewDocument(
    identifier: string,
  ): Promise<void> {
    return await this.#frameManager.removeScriptToEvaluateOnNewDocument(
      identifier,
    );
  }

  override async setCacheEnabled(enabled = true): Promise<void> {
    await this.#frameManager.networkManager.setCacheEnabled(enabled);
  }

  override async _screenshot(
    options: Readonly<ScreenshotOptions>,
  ): Promise<string> {
    const {
      fromSurface,
      omitBackground,
      optimizeForSpeed,
      quality,
      clip: userClip,
      type,
      captureBeyondViewport,
    } = options;

    await using stack = new AsyncDisposableStack();
    if (omitBackground && (type === 'png' || type === 'webp')) {
      await this.#emulationManager.setTransparentBackgroundColor();
      stack.defer(async () => {
        await this.#emulationManager
          .resetDefaultBackgroundColor()
          .catch(debugError);
      });
    }

    let clip = userClip;
    if (clip && !captureBeyondViewport) {
      const viewport = await this.mainFrame()
        .isolatedRealm()
        .evaluate(() => {
          const {
            height,
            pageLeft: x,
            pageTop: y,
            width,
          } = window.visualViewport!;
          return {x, y, height, width};
        });
      clip = getIntersectionRect(clip, viewport);
    }

    const {data} = await this.#primaryTargetClient.send(
      'Page.captureScreenshot',
      {
        format: type,
        optimizeForSpeed,
        fromSurface,
        ...(quality !== undefined ? {quality: Math.round(quality)} : {}),
        ...(clip ? {clip: {...clip, scale: clip.scale ?? 1}} : {}),
        captureBeyondViewport,
      },
    );
    return data;
  }

  override async createPDFStream(
    options: PDFOptions = {},
  ): Promise<ReadableStream<Uint8Array>> {
    const {timeout: ms = this._timeoutSettings.timeout()} = options;
    const {
      landscape,
      displayHeaderFooter,
      headerTemplate,
      footerTemplate,
      printBackground,
      scale,
      width: paperWidth,
      height: paperHeight,
      margin,
      pageRanges,
      preferCSSPageSize,
      omitBackground,
      tagged: generateTaggedPDF,
      outline: generateDocumentOutline,
      waitForFonts,
    } = parsePDFOptions(options);

    if (omitBackground) {
      await this.#emulationManager.setTransparentBackgroundColor();
    }

    if (waitForFonts) {
      await firstValueFrom(
        from(
          this.mainFrame()
            .isolatedRealm()
            .evaluate(() => {
              return document.fonts.ready;
            }),
        ).pipe(raceWith(timeout(ms))),
      );
    }

    const printCommandPromise = this.#primaryTargetClient.send(
      'Page.printToPDF',
      {
        transferMode: 'ReturnAsStream',
        landscape,
        displayHeaderFooter,
        headerTemplate,
        footerTemplate,
        printBackground,
        scale,
        paperWidth,
        paperHeight,
        marginTop: margin.top,
        marginBottom: margin.bottom,
        marginLeft: margin.left,
        marginRight: margin.right,
        pageRanges,
        preferCSSPageSize,
        generateTaggedPDF,
        generateDocumentOutline,
      },
    );

    const result = await firstValueFrom(
      from(printCommandPromise).pipe(raceWith(timeout(ms))),
    );

    if (omitBackground) {
      await this.#emulationManager.resetDefaultBackgroundColor();
    }

    assert(result.stream, '`stream` is missing from `Page.printToPDF');
    return await getReadableFromProtocolStream(
      this.#primaryTargetClient,
      result.stream,
    );
  }

  override async pdf(options: PDFOptions = {}): Promise<Uint8Array> {
    const {path = undefined} = options;
    const readable = await this.createPDFStream(options);
    const typedArray = await getReadableAsTypedArray(readable, path);
    assert(typedArray, 'Could not create typed array');
    return typedArray;
  }

  override async close(
    options: {runBeforeUnload?: boolean} = {runBeforeUnload: undefined},
  ): Promise<void> {
    using _guard = await this.browserContext().waitForScreenshotOperations();
    const connection = this.#primaryTargetClient.connection();
    assert(
      connection,
      'Connection closed. Most likely the page has been closed.',
    );
    const runBeforeUnload = !!options.runBeforeUnload;
    if (runBeforeUnload) {
      await this.#primaryTargetClient.send('Page.close');
    } else {
      await connection.send('Target.closeTarget', {
        targetId: this.#primaryTarget._targetId,
      });
      await this.#tabTarget._isClosedDeferred.valueOrThrow();
    }
  }

  override isClosed(): boolean {
    return this.#closed;
  }

  override get mouse(): CdpMouse {
    return this.#mouse;
  }

  /**
   * This method is typically coupled with an action that triggers a device
   * request from an api such as WebBluetooth.
   *
   * :::caution
   *
   * This must be called before the device request is made. It will not return a
   * currently active device prompt.
   *
   * :::
   *
   * @example
   *
   * ```ts
   * const [devicePrompt] = Promise.all([
   *   page.waitForDevicePrompt(),
   *   page.click('#connect-bluetooth'),
   * ]);
   * await devicePrompt.select(
   *   await devicePrompt.waitForDevice(({name}) => name.includes('My Device')),
   * );
   * ```
   */
  override async waitForDevicePrompt(
    options: WaitTimeoutOptions = {},
  ): Promise<DeviceRequestPrompt> {
    return await this.mainFrame().waitForDevicePrompt(options);
  }

  override get bluetooth(): BluetoothEmulation {
    return this.#cdpBluetoothEmulation;
  }

  override extensionRealms(): Realm[] {
    return this.mainFrame().extensionRealms();
  }
}

const supportedMetrics = new Set<string>([
  'Timestamp',
  'Documents',
  'Frames',
  'JSEventListeners',
  'Nodes',
  'LayoutCount',
  'RecalcStyleCount',
  'LayoutDuration',
  'RecalcStyleDuration',
  'ScriptDuration',
  'TaskDuration',
  'JSHeapUsedSize',
  'JSHeapTotalSize',
]);

/** @see https://w3c.github.io/webdriver-bidi/#rectangle-intersection */
function getIntersectionRect(
  clip: Readonly<ScreenshotClip>,
  viewport: Readonly<Protocol.DOM.Rect>,
): ScreenshotClip {
  // Note these will already be normalized.
  const x = Math.max(clip.x, viewport.x);
  const y = Math.max(clip.y, viewport.y);
  return {
    x,
    y,
    width: Math.max(
      Math.min(clip.x + clip.width, viewport.x + viewport.width) - x,
      0,
    ),
    height: Math.max(
      Math.min(clip.y + clip.height, viewport.y + viewport.height) - y,
      0,
    ),
  };
}

/**
 * @internal
 */
export function convertCookiesPartitionKeyFromPuppeteerToCdp(
  partitionKey: CookiePartitionKey | string | undefined,
): Protocol.Network.CookiePartitionKey | undefined {
  if (partitionKey === undefined) {
    return undefined;
  }
  if (typeof partitionKey === 'string') {
    return {
      topLevelSite: partitionKey,
      hasCrossSiteAncestor: false,
    };
  }
  return {
    topLevelSite: partitionKey.sourceOrigin,
    hasCrossSiteAncestor: partitionKey.hasCrossSiteAncestor ?? false,
  };
}
