/**
 * @license
 * Copyright 2017 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */

import type {Protocol} from 'devtools-protocol';

import type {CDPSession} from '../api/CDPSession.js';
import type {DeviceRequestPrompt} from '../api/DeviceRequestPrompt.js';
import type {ElementHandle} from '../api/ElementHandle.js';
import type {SetContentWaitForOptions, WaitForOptions} from '../api/Frame.js';
import {Frame, FrameEvent, throwIfDetached} from '../api/Frame.js';
import type {HTTPResponse} from '../api/HTTPResponse.js';
import type {WaitTimeoutOptions} from '../api/Page.js';
import {UnsupportedOperation} from '../common/Errors.js';
import {debugError} from '../common/util.js';
import type {Realm} from '../puppeteer-core.js';
import {Deferred} from '../util/Deferred.js';
import {disposeSymbol} from '../util/disposable.js';
import {isErrorLike} from '../util/ErrorLike.js';

import {Accessibility} from './Accessibility.js';
import type {Binding} from './Binding.js';
import type {CdpPreloadScript} from './CdpPreloadScript.js';
import type {CdpDeviceRequestPromptManager} from './DeviceRequestPrompt.js';
import type {FrameManager} from './FrameManager.js';
import {FrameManagerEvent} from './FrameManagerEvents.js';
import type {IsolatedWorldChart} from './IsolatedWorld.js';
import {IsolatedWorld} from './IsolatedWorld.js';
import {MAIN_WORLD, PUPPETEER_WORLD} from './IsolatedWorlds.js';
import {
  LifecycleWatcher,
  type PuppeteerLifeCycleEvent,
} from './LifecycleWatcher.js';
import type {CdpPage} from './Page.js';
import {CDP_BINDING_PREFIX} from './utils.js';

/**
 * @internal
 */
export class CdpFrame extends Frame {
  #url = '';
  #detached = false;
  #client: CDPSession;

  _frameManager: FrameManager;
  _loaderId = '';
  _lifecycleEvents = new Set<string>();

  override _id: string;
  override _parentId?: string;
  override accessibility: Accessibility;

  worlds: IsolatedWorldChart;
  extensionWorlds: Record<string, IsolatedWorld> = {};

  constructor(
    frameManager: FrameManager,
    frameId: string,
    parentFrameId: string | undefined,
    client: CDPSession,
  ) {
    super();
    this._frameManager = frameManager;
    this.#url = '';
    this._id = frameId;
    this._parentId = parentFrameId;
    this.#detached = false;
    this.#client = client;

    this._loaderId = '';
    this.worlds = {
      [MAIN_WORLD]: new IsolatedWorld(
        this,
        this._frameManager.timeoutSettings,
        MAIN_WORLD,
      ),
      [PUPPETEER_WORLD]: new IsolatedWorld(
        this,
        this._frameManager.timeoutSettings,
        PUPPETEER_WORLD,
      ),
    };

    this.accessibility = new Accessibility(this.worlds[MAIN_WORLD], frameId);

    this.on(FrameEvent.FrameSwappedByActivation, () => {
      // Emulate loading process for swapped frames.
      this._onLoadingStarted();
      this._onLoadingStopped();
    });

    this.registerWorldListeners(this.worlds[MAIN_WORLD]);
  }

  /**
   * @internal
   */
  registerWorldListeners(world: IsolatedWorld): void {
    world.emitter.on('consoleapicalled', event => {
      this._frameManager.emit(FrameManagerEvent.ConsoleApiCalled, [
        world,
        event,
      ]);
    });

    world.emitter.on('bindingcalled', event => {
      this._frameManager.emit(FrameManagerEvent.BindingCalled, [world, event]);
    });
  }

  /**
   * This is used internally in DevTools.
   *
   * @internal
   */
  _client(): CDPSession {
    return this.#client;
  }

  /**
   * Updates the frame ID with the new ID. This happens when the main frame is
   * replaced by a different frame.
   */
  updateId(id: string): void {
    this._id = id;
  }

  updateClient(client: CDPSession): void {
    this.#client = client;
  }

  override page(): CdpPage {
    return this._frameManager.page();
  }

  @throwIfDetached
  override async goto(
    url: string,
    options: {
      referer?: string;
      referrerPolicy?: string;
      timeout?: number;
      waitUntil?: PuppeteerLifeCycleEvent | PuppeteerLifeCycleEvent[];
    } = {},
  ): Promise<HTTPResponse | null> {
    if (!this.page()._isUrlAllowed(url)) {
      throw new Error(
        `Navigation to ${url} is blocked by blocklist/allowlist rules`,
      );
    }

    const {
      referer = this._frameManager.networkManager.extraHTTPHeaders()['referer'],
      referrerPolicy = this._frameManager.networkManager.extraHTTPHeaders()[
        'referer-policy'
      ],
      waitUntil = ['load'],
      timeout = this._frameManager.timeoutSettings.navigationTimeout(),
    } = options;

    let ensureNewDocumentNavigation = false;
    const watcher = new LifecycleWatcher(
      this._frameManager.networkManager,
      this,
      waitUntil,
      timeout,
    );
    let error = await Deferred.race([
      navigate(
        this.#client,
        url,
        referer,
        referrerPolicy ? referrerPolicyToProtocol(referrerPolicy) : undefined,
        this._id,
      ),
      watcher.terminationPromise(),
    ]);
    if (!error) {
      error = await Deferred.race([
        watcher.terminationPromise(),
        ensureNewDocumentNavigation
          ? watcher.newDocumentNavigationPromise()
          : watcher.sameDocumentNavigationPromise(),
      ]);
    }

    try {
      if (error) {
        throw error;
      }
      return await watcher.navigationResponse();
    } finally {
      watcher.dispose();
    }

    async function navigate(
      client: CDPSession,
      url: string,
      referrer: string | undefined,
      referrerPolicy: Protocol.Page.ReferrerPolicy | undefined,
      frameId: string,
    ): Promise<Error | null> {
      try {
        const response = await client.send('Page.navigate', {
          url,
          referrer,
          frameId,
          referrerPolicy,
        });
        ensureNewDocumentNavigation = !!response.loaderId;
        if (response.errorText === 'net::ERR_HTTP_RESPONSE_CODE_FAILURE') {
          return null;
        }
        return response.errorText
          ? new Error(`${response.errorText} at ${url}`)
          : null;
      } catch (error) {
        if (isErrorLike(error)) {
          return error;
        }
        throw error;
      }
    }
  }

  @throwIfDetached
  override async waitForNavigation(
    options: WaitForOptions = {},
  ): Promise<HTTPResponse | null> {
    const {
      waitUntil = ['load'],
      timeout = this._frameManager.timeoutSettings.navigationTimeout(),
      signal,
    } = options;
    const watcher = new LifecycleWatcher(
      this._frameManager.networkManager,
      this,
      waitUntil,
      timeout,
      signal,
    );
    const error = await Deferred.race([
      watcher.terminationPromise(),
      ...(options.ignoreSameDocumentNavigation
        ? []
        : [watcher.sameDocumentNavigationPromise()]),
      watcher.newDocumentNavigationPromise(),
    ]);
    try {
      if (error) {
        throw error;
      }
      const result = await Deferred.race<
        Error | HTTPResponse | null | undefined
      >([watcher.terminationPromise(), watcher.navigationResponse()]);
      if (result instanceof Error) {
        throw error;
      }
      return result || null;
    } finally {
      watcher.dispose();
    }
  }

  override get client(): CDPSession {
    return this.#client;
  }

  override mainRealm(): IsolatedWorld {
    return this.worlds[MAIN_WORLD];
  }

  override isolatedRealm(): IsolatedWorld {
    return this.worlds[PUPPETEER_WORLD];
  }

  @throwIfDetached
  override async setContent(
    html: string,
    options: SetContentWaitForOptions = {},
  ): Promise<void> {
    const {
      waitUntil = ['load'],
      timeout = this._frameManager.timeoutSettings.navigationTimeout(),
    } = options;

    // We rely upon the fact that document.open() will reset frame lifecycle with "init"
    // lifecycle event. @see https://crrev.com/608658
    await this.setFrameContent(html);

    const watcher = new LifecycleWatcher(
      this._frameManager.networkManager,
      this,
      waitUntil,
      timeout,
    );
    const error = await Deferred.race<void | Error | undefined>([
      watcher.terminationPromise(),
      watcher.lifecyclePromise(),
    ]);
    watcher.dispose();
    if (error) {
      throw error;
    }
  }

  override url(): string {
    return this.#url;
  }

  override parentFrame(): CdpFrame | null {
    return this._frameManager._frameTree.parentFrame(this._id) || null;
  }

  override childFrames(): CdpFrame[] {
    return this._frameManager._frameTree.childFrames(this._id);
  }

  #deviceRequestPromptManager(): CdpDeviceRequestPromptManager {
    return this._frameManager._deviceRequestPromptManager(this.#client);
  }

  @throwIfDetached
  async addPreloadScript(preloadScript: CdpPreloadScript): Promise<void> {
    const parentFrame = this.parentFrame();
    if (parentFrame && this.#client === parentFrame.client) {
      return;
    }
    if (preloadScript.getIdForFrame(this)) {
      return;
    }
    const {identifier} = await this.#client.send(
      'Page.addScriptToEvaluateOnNewDocument',
      {
        source: preloadScript.source,
      },
    );
    preloadScript.setIdForFrame(this, identifier);
  }

  @throwIfDetached
  async addExposedFunctionBinding(binding: Binding): Promise<void> {
    // If a frame has not started loading, it might never start. Rely on
    // addScriptToEvaluateOnNewDocument in that case.
    if (this !== this._frameManager.mainFrame() && !this._hasStartedLoading) {
      return;
    }
    await Promise.all([
      this.#client.send('Runtime.addBinding', {
        name: CDP_BINDING_PREFIX + binding.name,
      }),
      this.evaluate(binding.initSource).catch(debugError),
    ]);
  }

  @throwIfDetached
  async removeExposedFunctionBinding(binding: Binding): Promise<void> {
    // If a frame has not started loading, it might never start. Rely on
    // addScriptToEvaluateOnNewDocument in that case.
    if (this !== this._frameManager.mainFrame() && !this._hasStartedLoading) {
      return;
    }
    await Promise.all([
      this.#client.send('Runtime.removeBinding', {
        name: CDP_BINDING_PREFIX + binding.name,
      }),
      this.evaluate(name => {
        // Removes the dangling Puppeteer binding wrapper.
        // @ts-expect-error: In a different context.
        globalThis[name] = undefined;
      }, binding.name).catch(debugError),
    ]);
  }

  @throwIfDetached
  override async waitForDevicePrompt(
    options: WaitTimeoutOptions = {},
  ): Promise<DeviceRequestPrompt> {
    return await this.#deviceRequestPromptManager().waitForDevicePrompt(
      options,
    );
  }

  _navigated(framePayload: Protocol.Page.Frame): void {
    this._name = framePayload.name;
    this.#url = `${framePayload.url}${framePayload.urlFragment || ''}`;
  }

  _navigatedWithinDocument(url: string): void {
    this.#url = url;
  }

  _onLifecycleEvent(loaderId: string, name: string): void {
    if (name === 'init') {
      this._loaderId = loaderId;
      this._lifecycleEvents.clear();
    }
    this._lifecycleEvents.add(name);
  }

  _onLoadingStopped(): void {
    this._lifecycleEvents.add('DOMContentLoaded');
    this._lifecycleEvents.add('load');
  }

  _onLoadingStarted(): void {
    this._hasStartedLoading = true;
  }

  override get detached(): boolean {
    return this.#detached;
  }

  override [disposeSymbol](): void {
    if (this.#detached) {
      return;
    }
    this.#detached = true;
    this.worlds[MAIN_WORLD][disposeSymbol]();
    this.worlds[PUPPETEER_WORLD][disposeSymbol]();
    for (const extensionWorld of Object.values(this.extensionWorlds)) {
      extensionWorld[disposeSymbol]();
    }
    super[disposeSymbol]();
  }

  exposeFunction(): never {
    throw new UnsupportedOperation();
  }

  override async frameElement(): Promise<ElementHandle<HTMLIFrameElement> | null> {
    const parent = this.parentFrame();
    if (!parent) {
      return null;
    }
    const {backendNodeId} = await parent.client.send('DOM.getFrameOwner', {
      frameId: this._id,
    });
    return (await parent
      .mainRealm()
      .adoptBackendNode(backendNodeId)) as ElementHandle<HTMLIFrameElement>;
  }

  /**
   * @public
   */
  override extensionRealms(): Realm[] {
    return Object.values(this.extensionWorlds);
  }
}

/**
 * @internal
 */
export function referrerPolicyToProtocol(
  referrerPolicy: string,
): Protocol.Page.ReferrerPolicy {
  // See
  // https://chromedevtools.github.io/devtools-protocol/tot/Page/#type-ReferrerPolicy
  // We need to conver from Web-facing phase to CDP's camelCase.
  return referrerPolicy.replaceAll(/-./g, match => {
    return match[1]!.toUpperCase();
  }) as Protocol.Page.ReferrerPolicy;
}
