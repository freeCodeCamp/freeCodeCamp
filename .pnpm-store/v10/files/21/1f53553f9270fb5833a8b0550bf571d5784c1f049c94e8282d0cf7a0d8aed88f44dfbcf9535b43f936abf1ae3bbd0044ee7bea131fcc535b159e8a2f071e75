/**
 * @license
 * Copyright 2017 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */

import type {ChildProcess} from 'node:child_process';

import type {Protocol} from 'devtools-protocol';

import type {CreatePageOptions, DebugInfo} from '../api/Browser.js';
import {
  Browser as BrowserBase,
  BrowserEvent,
  type BrowserCloseCallback,
  type BrowserContextOptions,
  type IsPageTargetCallback,
  type TargetFilterCallback,
  type ScreenInfo,
  type AddScreenParams,
  type WindowBounds,
  type WindowId,
} from '../api/Browser.js';
import {BrowserContextEvent} from '../api/BrowserContext.js';
import {CDPSessionEvent} from '../api/CDPSession.js';
import type {Extension} from '../api/Extension.js';
import type {Page} from '../api/Page.js';
import type {Target} from '../api/Target.js';
import type {DownloadBehavior} from '../common/DownloadBehavior.js';
import type {Viewport} from '../common/Viewport.js';

import {CdpBrowserContext} from './BrowserContext.js';
import type {CdpCDPSession} from './CdpSession.js';
import type {Connection} from './Connection.js';
import {CdpExtension} from './Extension.js';
import {
  DevToolsTarget,
  InitializationStatus,
  OtherTarget,
  PageTarget,
  WorkerTarget,
  type CdpTarget,
} from './Target.js';
import {TargetManagerEvent} from './TargetManageEvents.js';
import {TargetManager} from './TargetManager.js';

/**
 * @internal
 */
function isDevToolsPageTarget(url: string): boolean {
  return url.startsWith('devtools://devtools/bundled/devtools_app.html');
}

/**
 * @internal
 */
export class CdpBrowser extends BrowserBase {
  readonly protocol = 'cdp';

  static async _create(
    connection: Connection,
    contextIds: string[],
    acceptInsecureCerts: boolean,
    defaultViewport?: Viewport | null,
    downloadBehavior?: DownloadBehavior,
    process?: ChildProcess,
    closeCallback?: BrowserCloseCallback,
    targetFilterCallback?: TargetFilterCallback,
    isPageTargetCallback?: IsPageTargetCallback,
    waitForInitiallyDiscoveredTargets = true,
    networkEnabled = true,
    issuesEnabled = true,
    handleDevToolsAsPage = false,
    blocklist?: string[],
    allowlist?: string[],
  ): Promise<CdpBrowser> {
    const browser = new CdpBrowser(
      connection,
      contextIds,
      defaultViewport,
      process,
      closeCallback,
      targetFilterCallback,
      isPageTargetCallback,
      waitForInitiallyDiscoveredTargets,
      networkEnabled,
      issuesEnabled,
      handleDevToolsAsPage,
      blocklist,
      allowlist,
    );

    if (allowlist) {
      const version = await browser.#getVersion();
      const majorVersion = parseInt(
        version.product.match(/\d+/)?.[0] ?? '0',
        10,
      );
      if (majorVersion < 149) {
        throw new Error('The allowlist option require Chrome 149 or greater.');
      }
    }
    if (acceptInsecureCerts) {
      await connection.send('Security.setIgnoreCertificateErrors', {
        ignore: true,
      });
    }
    await browser._attach(downloadBehavior);
    return browser;
  }
  #defaultViewport?: Viewport | null;
  #process?: ChildProcess;
  #connection: Connection;
  #closeCallback: BrowserCloseCallback;
  #targetFilterCallback: TargetFilterCallback;
  #isPageTargetCallback!: IsPageTargetCallback;
  #defaultContext: CdpBrowserContext;
  #contexts = new Map<string, CdpBrowserContext>();
  #networkEnabled = true;
  #issuesEnabled = true;
  #targetManager: TargetManager;
  #handleDevToolsAsPage = false;
  #extensions = new Map<string, Extension>();

  constructor(
    connection: Connection,
    contextIds: string[],
    defaultViewport?: Viewport | null,
    process?: ChildProcess,
    closeCallback?: BrowserCloseCallback,
    targetFilterCallback?: TargetFilterCallback,
    isPageTargetCallback?: IsPageTargetCallback,
    waitForInitiallyDiscoveredTargets = true,
    networkEnabled = true,
    issuesEnabled = true,
    handleDevToolsAsPage = false,
    blocklist?: string[],
    allowlist?: string[],
  ) {
    super();
    this.#networkEnabled = networkEnabled;
    this.#issuesEnabled = issuesEnabled;
    this.#defaultViewport = defaultViewport;
    this.#process = process;
    this.#connection = connection;
    this.#closeCallback = closeCallback || (() => {});
    this.#targetFilterCallback =
      targetFilterCallback ||
      (() => {
        return true;
      });
    this.#handleDevToolsAsPage = handleDevToolsAsPage;
    this.#setIsPageTargetCallback(isPageTargetCallback);
    connection.rejectEmulateNetworkConditionsCalls = Boolean(
      (blocklist && blocklist.length > 0) ||
      (allowlist && allowlist.length > 0),
    );
    this.#targetManager = new TargetManager(
      connection,
      this.#createTarget,
      this.#targetFilterCallback,
      waitForInitiallyDiscoveredTargets,
      blocklist,
      allowlist,
    );
    this.#defaultContext = new CdpBrowserContext(this.#connection, this);
    for (const contextId of contextIds) {
      this.#contexts.set(
        contextId,
        new CdpBrowserContext(this.#connection, this, contextId),
      );
    }
  }

  #emitDisconnected = () => {
    this.emit(BrowserEvent.Disconnected, undefined);
  };

  async _attach(downloadBehavior: DownloadBehavior | undefined): Promise<void> {
    this.#connection.on(CDPSessionEvent.Disconnected, this.#emitDisconnected);
    if (downloadBehavior) {
      await this.#defaultContext.setDownloadBehavior(downloadBehavior);
    }
    this.#targetManager.on(
      TargetManagerEvent.TargetAvailable,
      this.#onAttachedToTarget,
    );
    this.#targetManager.on(
      TargetManagerEvent.TargetGone,
      this.#onDetachedFromTarget,
    );
    this.#targetManager.on(
      TargetManagerEvent.TargetChanged,
      this.#onTargetChanged,
    );
    this.#targetManager.on(
      TargetManagerEvent.TargetDiscovered,
      this.#onTargetDiscovered,
    );
    await this.#targetManager.initialize();
  }

  _detach(): void {
    this.#connection.off(CDPSessionEvent.Disconnected, this.#emitDisconnected);
    this.#targetManager.off(
      TargetManagerEvent.TargetAvailable,
      this.#onAttachedToTarget,
    );
    this.#targetManager.off(
      TargetManagerEvent.TargetGone,
      this.#onDetachedFromTarget,
    );
    this.#targetManager.off(
      TargetManagerEvent.TargetChanged,
      this.#onTargetChanged,
    );
    this.#targetManager.off(
      TargetManagerEvent.TargetDiscovered,
      this.#onTargetDiscovered,
    );
  }

  override process(): ChildProcess | null {
    return this.#process ?? null;
  }

  _targetManager(): TargetManager {
    return this.#targetManager;
  }

  #setIsPageTargetCallback(isPageTargetCallback?: IsPageTargetCallback): void {
    this.#isPageTargetCallback =
      isPageTargetCallback ||
      ((target: Target): boolean => {
        return (
          target.type() === 'page' ||
          target.type() === 'background_page' ||
          target.type() === 'webview' ||
          (this.#handleDevToolsAsPage &&
            target.type() === 'other' &&
            isDevToolsPageTarget(target.url()))
        );
      });
  }

  _getIsPageTargetCallback(): IsPageTargetCallback | undefined {
    return this.#isPageTargetCallback;
  }

  override async createBrowserContext(
    options: BrowserContextOptions = {},
  ): Promise<CdpBrowserContext> {
    const {proxyServer, proxyBypassList, downloadBehavior} = options;

    const {browserContextId} = await this.#connection.send(
      'Target.createBrowserContext',
      {
        proxyServer,
        proxyBypassList: proxyBypassList && proxyBypassList.join(','),
      },
    );
    const context = new CdpBrowserContext(
      this.#connection,
      this,
      browserContextId,
    );
    if (downloadBehavior) {
      await context.setDownloadBehavior(downloadBehavior);
    }
    this.#contexts.set(browserContextId, context);
    return context;
  }

  override browserContexts(): CdpBrowserContext[] {
    return [this.#defaultContext, ...Array.from(this.#contexts.values())];
  }

  override defaultBrowserContext(): CdpBrowserContext {
    return this.#defaultContext;
  }

  async _disposeContext(contextId?: string): Promise<void> {
    if (!contextId) {
      return;
    }
    await this.#connection.send('Target.disposeBrowserContext', {
      browserContextId: contextId,
    });
    this.#contexts.delete(contextId);
  }

  #createTarget = (
    targetInfo: Protocol.Target.TargetInfo,
    session?: CdpCDPSession,
  ) => {
    const {browserContextId} = targetInfo;
    const context =
      browserContextId && this.#contexts.has(browserContextId)
        ? this.#contexts.get(browserContextId)
        : this.#defaultContext;

    if (!context) {
      throw new Error('Missing browser context');
    }

    const createSession = (isAutoAttachEmulated: boolean) => {
      return this.#connection._createSession(targetInfo, isAutoAttachEmulated);
    };
    const otherTarget = new OtherTarget(
      targetInfo,
      session,
      context,
      this.#targetManager,
      createSession,
    );
    if (targetInfo.url && isDevToolsPageTarget(targetInfo.url)) {
      return new DevToolsTarget(
        targetInfo,
        session,
        context,
        this.#targetManager,
        createSession,
        this.#defaultViewport ?? null,
      );
    }
    if (this.#isPageTargetCallback(otherTarget)) {
      return new PageTarget(
        targetInfo,
        session,
        context,
        this.#targetManager,
        createSession,
        this.#defaultViewport ?? null,
      );
    }
    if (
      targetInfo.type === 'service_worker' ||
      targetInfo.type === 'shared_worker'
    ) {
      return new WorkerTarget(
        targetInfo,
        session,
        context,
        this.#targetManager,
        createSession,
      );
    }
    return otherTarget;
  };

  #onAttachedToTarget = async (target: CdpTarget) => {
    if (
      target._isTargetExposed() &&
      (await target._initializedDeferred.valueOrThrow()) ===
        InitializationStatus.SUCCESS
    ) {
      this.emit(BrowserEvent.TargetCreated, target);
      target.browserContext().emit(BrowserContextEvent.TargetCreated, target);
    }
  };

  #onDetachedFromTarget = async (target: CdpTarget): Promise<void> => {
    target._initializedDeferred.resolve(InitializationStatus.ABORTED);
    target._isClosedDeferred.resolve();
    if (
      target._isTargetExposed() &&
      (await target._initializedDeferred.valueOrThrow()) ===
        InitializationStatus.SUCCESS
    ) {
      this.emit(BrowserEvent.TargetDestroyed, target);
      target.browserContext().emit(BrowserContextEvent.TargetDestroyed, target);
    }
  };

  #onTargetChanged = ({target}: {target: CdpTarget}): void => {
    this.emit(BrowserEvent.TargetChanged, target);
    target.browserContext().emit(BrowserContextEvent.TargetChanged, target);
  };

  #onTargetDiscovered = (targetInfo: Protocol.Target.TargetInfo): void => {
    this.emit(BrowserEvent.TargetDiscovered, targetInfo);
  };

  override wsEndpoint(): string {
    return this.#connection.url();
  }

  override async newPage(options?: CreatePageOptions): Promise<Page> {
    return await this.#defaultContext.newPage(options);
  }

  async _createPageInContext(
    contextId?: string,
    options?: CreatePageOptions,
  ): Promise<Page> {
    const hasTargets =
      this.targets().filter(t => {
        return t.browserContext().id === contextId;
      }).length > 0;
    const windowBounds =
      options?.type === 'window' ? options.windowBounds : undefined;
    const {targetId} = await this.#connection.send('Target.createTarget', {
      url: 'about:blank',
      browserContextId: contextId || undefined,
      left: windowBounds?.left,
      top: windowBounds?.top,
      width: windowBounds?.width,
      height: windowBounds?.height,
      windowState: windowBounds?.windowState,
      // Works around crbug.com/454825274.
      newWindow: hasTargets && options?.type === 'window' ? true : undefined,
      background: options?.background,
    });
    const target = (await this.waitForTarget(t => {
      return (t as CdpTarget)._targetId === targetId;
    })) as CdpTarget;
    if (!target) {
      throw new Error(`Missing target for page (id = ${targetId})`);
    }
    const initialized =
      (await target._initializedDeferred.valueOrThrow()) ===
      InitializationStatus.SUCCESS;
    if (!initialized) {
      throw new Error(`Failed to create target for page (id = ${targetId})`);
    }
    const page = await target.page();
    if (!page) {
      throw new Error(
        `Failed to create a page for context (id = ${contextId})`,
      );
    }
    return page;
  }

  async _createDevToolsPage(pageTargetId: string): Promise<Page> {
    const openDevToolsResponse = await this.#connection.send(
      'Target.openDevTools',
      {
        targetId: pageTargetId,
      },
    );
    return await this._getDevToolsTargetPage(openDevToolsResponse.targetId);
  }

  async _getDevToolsTargetPage(devtoolsTargetId: string): Promise<Page> {
    const target = (await this.waitForTarget(t => {
      return (t as CdpTarget)._targetId === devtoolsTargetId;
    })) as CdpTarget;
    if (!target) {
      throw new Error(
        `Missing target for DevTools page (id = ${devtoolsTargetId})`,
      );
    }
    const initialized =
      (await target._initializedDeferred.valueOrThrow()) ===
      InitializationStatus.SUCCESS;
    if (!initialized) {
      throw new Error(
        `Failed to create target for DevTools page (id = ${devtoolsTargetId})`,
      );
    }
    const page = await target.page();
    if (!page) {
      throw new Error(
        `Failed to create a DevTools Page for target (id = ${devtoolsTargetId})`,
      );
    }
    return page;
  }

  async _hasDevToolsTarget(pageTargetId: string): Promise<string | undefined> {
    const response = await this.#connection.send('Target.getDevToolsTarget', {
      targetId: pageTargetId,
    });
    return response.targetId;
  }

  override async installExtension(path: string): Promise<string> {
    const {id} = await this.#connection.send('Extensions.loadUnpacked', {path});
    this.#extensions.delete(id);
    return id;
  }

  override async uninstallExtension(id: string): Promise<void> {
    await this.#connection.send('Extensions.uninstall', {id});

    // Currently sending the Extensions.uninstall command does not trigger
    // the Target.targetDestroyed event for service workers. This causes
    // flakiness in the extension tests.
    // TODO(nroscino): Remove this once the event is correctly emitted.
    const targetDestroyedPromises = [];
    for (const [targetId, targetInfo] of this._targetManager()
      .getDiscoveredTargetInfos()
      .entries()) {
      if (targetInfo.url.includes(id) && targetInfo.type === 'service_worker') {
        this._targetManager().addToIgnoreTarget(targetId);
        targetDestroyedPromises.push(
          new Promise(resolve => {
            return setTimeout(() => {
              this.#connection.emit('Target.targetDestroyed', {
                targetId: targetId,
              });
              resolve(null);
            }, 0);
          }),
        );
      }
    }
    await Promise.all(targetDestroyedPromises);

    this.#extensions.delete(id);
  }

  override async screens(): Promise<ScreenInfo[]> {
    const {screenInfos} = await this.#connection.send(
      'Emulation.getScreenInfos',
    );
    return screenInfos;
  }

  override async addScreen(params: AddScreenParams): Promise<ScreenInfo> {
    const {screenInfo} = await this.#connection.send(
      'Emulation.addScreen',
      params,
    );
    return screenInfo;
  }

  override async removeScreen(screenId: string): Promise<void> {
    return await this.#connection.send('Emulation.removeScreen', {screenId});
  }

  override async getWindowBounds(windowId: WindowId): Promise<WindowBounds> {
    const {bounds} = await this.#connection.send('Browser.getWindowBounds', {
      windowId: Number(windowId),
    });
    return bounds;
  }

  override async setWindowBounds(
    windowId: WindowId,
    windowBounds: WindowBounds,
  ): Promise<void> {
    await this.#connection.send('Browser.setWindowBounds', {
      windowId: Number(windowId),
      bounds: windowBounds,
    });
  }

  override targets(): CdpTarget[] {
    return Array.from(
      this.#targetManager.getAvailableTargets().values(),
    ).filter(target => {
      return (
        target._isTargetExposed() &&
        target._initializedDeferred.value() === InitializationStatus.SUCCESS
      );
    });
  }

  override target(): CdpTarget {
    const browserTarget = this.targets().find(target => {
      return target.type() === 'browser';
    });
    if (!browserTarget) {
      throw new Error('Browser target is not found');
    }
    return browserTarget;
  }

  override async version(): Promise<string> {
    const version = await this.#getVersion();
    return version.product;
  }

  override async userAgent(): Promise<string> {
    const version = await this.#getVersion();
    return version.userAgent;
  }

  override async close(): Promise<void> {
    await this.#closeCallback.call(null);
    await this.disconnect();
  }

  override disconnect(): Promise<void> {
    this.#targetManager.dispose();
    this.#connection.dispose();
    this._detach();
    return Promise.resolve();
  }

  /**
   * @internal
   */
  get _connection(): Connection {
    return this.#connection;
  }

  override get connected(): boolean {
    return !this.#connection._closed;
  }

  #getVersion(): Promise<Protocol.Browser.GetVersionResponse> {
    return this.#connection.send('Browser.getVersion');
  }

  override get debugInfo(): DebugInfo {
    return {
      pendingProtocolErrors: this.#connection.getPendingProtocolErrors(),
    };
  }

  override isNetworkEnabled(): boolean {
    return this.#networkEnabled;
  }

  override async extensions(): Promise<Map<string, Extension>> {
    const response = await this.#connection.send('Extensions.getExtensions');

    const extensionsMap = new Map<string, Extension>();

    for (const currExtension of response.extensions) {
      if (this.#extensions.has(currExtension.id)) {
        extensionsMap.set(
          currExtension.id,
          this.#extensions.get(currExtension.id)!,
        );
      } else {
        const newExtension = new CdpExtension(
          currExtension.id,
          currExtension.version,
          currExtension.name,
          currExtension.path,
          currExtension.enabled,
          this,
        );

        extensionsMap.set(currExtension.id, newExtension);
      }
    }

    this.#extensions = extensionsMap;
    return this.#extensions;
  }

  override isIssuesEnabled(): boolean {
    return this.#issuesEnabled;
  }
}
