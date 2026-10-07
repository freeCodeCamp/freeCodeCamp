/**
 * @license
 * Copyright 2017 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */

import type {Protocol} from 'devtools-protocol';

import {type CDPSession, CDPSessionEvent} from '../api/CDPSession.js';
import {FrameEvent} from '../api/Frame.js';
import {PageEvent, type NewDocumentScriptEvaluation} from '../api/Page.js';
import {EventEmitter} from '../common/EventEmitter.js';
import type {TimeoutSettings} from '../common/TimeoutSettings.js';
import {debugError, PuppeteerURL, UTILITY_WORLD_NAME} from '../common/util.js';
import {assert} from '../util/assert.js';
import {Deferred} from '../util/Deferred.js';
import {disposeSymbol} from '../util/disposable.js';
import {isErrorLike} from '../util/ErrorLike.js';

import type {Binding} from './Binding.js';
import {CdpIssue} from './CdpIssue.js';
import {CdpPreloadScript} from './CdpPreloadScript.js';
import type {CdpCDPSession} from './CdpSession.js';
import {isTargetClosedError} from './Connection.js';
import {CdpDeviceRequestPromptManager} from './DeviceRequestPrompt.js';
import {ExecutionContext} from './ExecutionContext.js';
import {CdpFrame} from './Frame.js';
import type {FrameManagerEvents} from './FrameManagerEvents.js';
import {FrameManagerEvent} from './FrameManagerEvents.js';
import {FrameTree} from './FrameTree.js';
import {IsolatedWorld} from './IsolatedWorld.js';
import {MAIN_WORLD, PUPPETEER_WORLD} from './IsolatedWorlds.js';
import {NetworkManager} from './NetworkManager.js';
import type {CdpPage} from './Page.js';
import type {CdpTarget} from './Target.js';

const TIME_FOR_WAITING_FOR_SWAP = 100; // ms.
const CHROME_EXTENSION_PREFIX = 'chrome-extension://';
/**
 * A frame manager manages the frames for a given {@link Page | page}.
 *
 * @internal
 */
export class FrameManager extends EventEmitter<FrameManagerEvents> {
  #page: CdpPage;
  #networkManager: NetworkManager;
  #timeoutSettings: TimeoutSettings;
  #isolatedWorlds = new Set<string>();
  #client: CdpCDPSession;
  #scriptsToEvaluateOnNewDocument = new Map<string, CdpPreloadScript>();
  #bindings = new Set<Binding>();

  _frameTree = new FrameTree<CdpFrame>();

  /**
   * Set of frame IDs stored to indicate if a frame has received a
   * frameNavigated event so that frame tree responses could be ignored as the
   * frameNavigated event usually contains the latest information.
   */
  #frameNavigatedReceived = new Set<string>();

  #deviceRequestPromptManagerMap = new WeakMap<
    CDPSession,
    CdpDeviceRequestPromptManager
  >();

  #frameTreeHandled?: Deferred<void>;

  get timeoutSettings(): TimeoutSettings {
    return this.#timeoutSettings;
  }

  get networkManager(): NetworkManager {
    return this.#networkManager;
  }

  get client(): CdpCDPSession {
    return this.#client;
  }

  constructor(
    client: CdpCDPSession,
    page: CdpPage,
    timeoutSettings: TimeoutSettings,
  ) {
    super();
    this.#client = client;
    this.#page = page;
    this.#networkManager = new NetworkManager(
      this,
      page.browser().isNetworkEnabled(),
    );
    this.#timeoutSettings = timeoutSettings;
    this.setupEventListeners(this.#client);
    client.once(CDPSessionEvent.Disconnected, () => {
      this.#onClientDisconnect().catch(debugError);
    });
  }

  /**
   * Called when the frame's client is disconnected. We don't know if the
   * disconnect means that the frame is removed or if it will be replaced by a
   * new frame. Therefore, we wait for a swap event.
   */
  async #onClientDisconnect() {
    const mainFrame = this._frameTree.getMainFrame();
    if (!mainFrame) {
      return;
    }

    if (!this.#page.browser().connected) {
      // If the browser is not connected we know
      // that activation will not happen
      this.#removeFramesRecursively(mainFrame);
      return;
    }

    for (const child of mainFrame.childFrames()) {
      this.#removeFramesRecursively(child);
    }
    const swapped = Deferred.create<void>({
      timeout: TIME_FOR_WAITING_FOR_SWAP,
      message: 'Frame was not swapped',
    });
    mainFrame.once(FrameEvent.FrameSwappedByActivation, () => {
      swapped.resolve();
    });
    try {
      await swapped.valueOrThrow();
    } catch {
      this.#removeFramesRecursively(mainFrame);
    }
  }

  /**
   * When the main frame is replaced by another main frame,
   * we maintain the main frame object identity while updating
   * its frame tree and ID.
   */
  async swapFrameTree(client: CdpCDPSession): Promise<void> {
    this.#client = client;
    const frame = this._frameTree.getMainFrame();
    if (frame) {
      this.#frameNavigatedReceived.add(this.#client.target()._targetId);
      this._frameTree.removeFrame(frame);
      frame.updateId(this.#client.target()._targetId);
      this._frameTree.addFrame(frame);
      frame.updateClient(client);
    }
    this.setupEventListeners(client);
    client.once(CDPSessionEvent.Disconnected, () => {
      this.#onClientDisconnect().catch(debugError);
    });
    await this.initialize(client, frame);
    await this.#networkManager.addClient(client);
    if (frame) {
      frame.emit(FrameEvent.FrameSwappedByActivation, undefined);
    }
  }

  async registerSpeculativeSession(client: CdpCDPSession): Promise<void> {
    await this.#networkManager.addClient(client);
  }

  private setupEventListeners(session: CDPSession) {
    session.on('Page.frameAttached', async event => {
      await this.#frameTreeHandled?.valueOrThrow();
      this.#onFrameAttached(session, event.frameId, event.parentFrameId);
    });
    session.on('Page.frameNavigated', async event => {
      this.#frameNavigatedReceived.add(event.frame.id);
      await this.#frameTreeHandled?.valueOrThrow();
      void this.#onFrameNavigated(event.frame, event.type);
    });
    session.on('Page.navigatedWithinDocument', async event => {
      await this.#frameTreeHandled?.valueOrThrow();
      this.#onFrameNavigatedWithinDocument(event.frameId, event.url);
    });
    session.on(
      'Page.frameDetached',
      async (event: Protocol.Page.FrameDetachedEvent) => {
        await this.#frameTreeHandled?.valueOrThrow();
        this.#onFrameDetached(
          event.frameId,
          event.reason as Protocol.Page.FrameDetachedEventReason,
        );
      },
    );
    session.on('Page.frameStartedLoading', async event => {
      await this.#frameTreeHandled?.valueOrThrow();
      this.#onFrameStartedLoading(event.frameId);
    });
    session.on('Page.frameStoppedLoading', async event => {
      await this.#frameTreeHandled?.valueOrThrow();
      this.#onFrameStoppedLoading(event.frameId);
    });
    session.on('Runtime.executionContextCreated', async event => {
      await this.#frameTreeHandled?.valueOrThrow();
      this.#onExecutionContextCreated(event.context, session);
    });
    session.on('Page.lifecycleEvent', async event => {
      await this.#frameTreeHandled?.valueOrThrow();
      this.#onLifecycleEvent(event);
    });
    session.on('Audits.issueAdded', event => {
      this.#page.emit(PageEvent.Issue, new CdpIssue(event.issue));
    });
  }

  async initialize(client: CDPSession, frame?: CdpFrame | null): Promise<void> {
    try {
      this.#frameTreeHandled?.resolve();
      this.#frameTreeHandled = Deferred.create();
      // We need to schedule all these commands while the target is paused,
      // therefore, it needs to happen synchronously. At the same time we
      // should not start processing execution context and frame events before
      // we received the initial information about the frame tree.
      await Promise.all([
        this.#networkManager.addClient(client),
        client.send('Page.enable'),
        client.send('Page.getFrameTree').then(({frameTree}) => {
          this.#handleFrameTree(client, frameTree);
          this.#frameTreeHandled?.resolve();
        }),
        client.send('Page.setLifecycleEventsEnabled', {enabled: true}),
        client.send('Runtime.enable').then(() => {
          return this.#createIsolatedWorld(client, UTILITY_WORLD_NAME);
        }),
        ...(frame
          ? Array.from(this.#scriptsToEvaluateOnNewDocument.values())
          : []
        ).map(script => {
          return frame?.addPreloadScript(script);
        }),
        ...(frame ? Array.from(this.#bindings.values()) : []).map(binding => {
          return frame?.addExposedFunctionBinding(binding);
        }),
        this.#page.browser().isIssuesEnabled() && client.send('Audits.enable'),
      ]);
    } catch (error) {
      this.#frameTreeHandled?.resolve();
      // The target might have been closed before the initialization finished.
      if (isErrorLike(error) && isTargetClosedError(error)) {
        return;
      }

      throw error;
    }
  }

  page(): CdpPage {
    return this.#page;
  }

  mainFrame(): CdpFrame {
    const mainFrame = this._frameTree.getMainFrame();
    assert(mainFrame, 'Requesting main frame too early!');
    return mainFrame;
  }

  frames(): CdpFrame[] {
    return Array.from(this._frameTree.frames());
  }

  frame(frameId: string): CdpFrame | null {
    return this._frameTree.getById(frameId) || null;
  }

  async addExposedFunctionBinding(binding: Binding): Promise<void> {
    this.#bindings.add(binding);
    await Promise.all(
      this.frames().map(async frame => {
        return await frame.addExposedFunctionBinding(binding);
      }),
    );
  }

  async removeExposedFunctionBinding(binding: Binding): Promise<void> {
    this.#bindings.delete(binding);
    await Promise.all(
      this.frames().map(async frame => {
        return await frame.removeExposedFunctionBinding(binding);
      }),
    );
  }

  async evaluateOnNewDocument(
    source: string,
  ): Promise<NewDocumentScriptEvaluation> {
    const {identifier} = await this.mainFrame()
      ._client()
      .send('Page.addScriptToEvaluateOnNewDocument', {
        source,
      });

    const preloadScript = new CdpPreloadScript(
      this.mainFrame(),
      identifier,
      source,
    );

    this.#scriptsToEvaluateOnNewDocument.set(identifier, preloadScript);

    await Promise.all(
      this.frames().map(async frame => {
        return await frame.addPreloadScript(preloadScript);
      }),
    );

    return {identifier};
  }

  async removeScriptToEvaluateOnNewDocument(identifier: string): Promise<void> {
    const preloadScript = this.#scriptsToEvaluateOnNewDocument.get(identifier);
    if (!preloadScript) {
      throw new Error(
        `Script to evaluate on new document with id ${identifier} not found`,
      );
    }

    this.#scriptsToEvaluateOnNewDocument.delete(identifier);

    await Promise.all(
      this.frames().map(frame => {
        const identifier = preloadScript.getIdForFrame(frame);
        if (!identifier) {
          return;
        }
        return frame
          ._client()
          .send('Page.removeScriptToEvaluateOnNewDocument', {
            identifier,
          })
          .catch(debugError);
      }),
    );
  }

  onAttachedToTarget(target: CdpTarget): void {
    if (target._getTargetInfo().type !== 'iframe') {
      return;
    }

    const frame = this.frame(target._getTargetInfo().targetId);
    if (frame) {
      frame.updateClient(target._session()!);
    }
    this.setupEventListeners(target._session()!);
    void this.initialize(target._session()!, frame).catch(debugError);
  }

  _deviceRequestPromptManager(
    client: CDPSession,
  ): CdpDeviceRequestPromptManager {
    let manager = this.#deviceRequestPromptManagerMap.get(client);
    if (manager === undefined) {
      manager = new CdpDeviceRequestPromptManager(
        client,
        this.#timeoutSettings,
      );
      this.#deviceRequestPromptManagerMap.set(client, manager);
    }
    return manager;
  }

  #onLifecycleEvent(event: Protocol.Page.LifecycleEventEvent): void {
    const frame = this.frame(event.frameId);
    if (!frame) {
      return;
    }
    frame._onLifecycleEvent(event.loaderId, event.name);
    this.emit(FrameManagerEvent.LifecycleEvent, frame);
    frame.emit(FrameEvent.LifecycleEvent, undefined);
  }

  #onFrameStartedLoading(frameId: string): void {
    const frame = this.frame(frameId);
    if (!frame) {
      return;
    }
    frame._onLoadingStarted();
  }

  #onFrameStoppedLoading(frameId: string): void {
    const frame = this.frame(frameId);
    if (!frame) {
      return;
    }
    frame._onLoadingStopped();
    this.emit(FrameManagerEvent.LifecycleEvent, frame);
    frame.emit(FrameEvent.LifecycleEvent, undefined);
  }

  #handleFrameTree(
    session: CDPSession,
    frameTree: Protocol.Page.FrameTree,
  ): void {
    if (frameTree.frame.parentId) {
      this.#onFrameAttached(
        session,
        frameTree.frame.id,
        frameTree.frame.parentId,
      );
    }
    if (!this.#frameNavigatedReceived.has(frameTree.frame.id)) {
      void this.#onFrameNavigated(frameTree.frame, 'Navigation');
    } else {
      this.#frameNavigatedReceived.delete(frameTree.frame.id);
    }

    if (!frameTree.childFrames) {
      return;
    }

    for (const child of frameTree.childFrames) {
      this.#handleFrameTree(session, child);
    }
  }

  #onFrameAttached(
    session: CDPSession,
    frameId: string,
    parentFrameId: string,
  ): void {
    let frame = this.frame(frameId);
    if (frame) {
      const parentFrame = this.frame(parentFrameId);
      if (session && parentFrame && frame.client !== parentFrame?.client) {
        // If an OOP iframes becomes a normal iframe
        // again it is first attached to the parent frame before the
        // target is removed.
        frame.updateClient(session);
      }
      return;
    }

    frame = new CdpFrame(this, frameId, parentFrameId, session);
    this._frameTree.addFrame(frame);
    this.emit(FrameManagerEvent.FrameAttached, frame);
  }

  async #onFrameNavigated(
    framePayload: Protocol.Page.Frame,
    navigationType: Protocol.Page.NavigationType,
  ): Promise<void> {
    const frameId = framePayload.id;
    const isMainFrame = !framePayload.parentId;

    let frame = this._frameTree.getById(frameId);

    // Detach all child frames first.
    if (frame) {
      for (const child of frame.childFrames()) {
        this.#removeFramesRecursively(child);
      }
    }

    // Update or create main frame.
    if (isMainFrame) {
      if (frame) {
        // Update frame id to retain frame identity on cross-process navigation.
        this._frameTree.removeFrame(frame);
        frame._id = frameId;
      } else {
        // Initial main frame navigation.
        frame = new CdpFrame(this, frameId, undefined, this.#client);
      }
      this._frameTree.addFrame(frame);
    }

    frame = await this._frameTree.waitForFrame(frameId);
    frame._navigated(framePayload);
    this.emit(FrameManagerEvent.FrameNavigated, frame);
    frame.emit(FrameEvent.FrameNavigated, navigationType);
  }

  async #createIsolatedWorld(session: CDPSession, name: string): Promise<void> {
    const key = `${session.id()}:${name}`;

    if (this.#isolatedWorlds.has(key)) {
      return;
    }

    await session.send('Page.addScriptToEvaluateOnNewDocument', {
      source: `//# sourceURL=${PuppeteerURL.INTERNAL_URL}`,
      worldName: name,
    });

    await Promise.all(
      this.frames()
        .filter(frame => {
          return frame.client === session;
        })
        .map(frame => {
          // Frames might be removed before we send this, so we don't want to
          // throw an error.
          return session
            .send('Page.createIsolatedWorld', {
              frameId: frame._id,
              worldName: name,
              grantUniveralAccess: true,
            })
            .catch(debugError);
        }),
    );

    this.#isolatedWorlds.add(key);
  }

  #onFrameNavigatedWithinDocument(frameId: string, url: string): void {
    const frame = this.frame(frameId);
    if (!frame) {
      return;
    }
    frame._navigatedWithinDocument(url);
    this.emit(FrameManagerEvent.FrameNavigatedWithinDocument, frame);
    frame.emit(FrameEvent.FrameNavigatedWithinDocument, undefined);
    this.emit(FrameManagerEvent.FrameNavigated, frame);
    frame.emit(FrameEvent.FrameNavigated, 'Navigation');
  }

  #onFrameDetached(
    frameId: string,
    reason: Protocol.Page.FrameDetachedEventReason,
  ): void {
    const frame = this.frame(frameId);
    if (!frame) {
      return;
    }
    switch (reason) {
      case 'remove':
        // Only remove the frame if the reason for the detached event is
        // an actual removement of the frame.
        // For frames that become OOP iframes, the reason would be 'swap'.
        this.#removeFramesRecursively(frame);
        break;
      case 'swap':
        this.emit(FrameManagerEvent.FrameSwapped, frame);
        frame.emit(FrameEvent.FrameSwapped, undefined);
        break;
    }
  }

  #isExtensionOrigin(origin: string) {
    return origin.startsWith(CHROME_EXTENSION_PREFIX);
  }

  #extractExtensionId(origin: string): string | null {
    if (!origin || !this.#isExtensionOrigin(origin)) {
      return null;
    }

    const pathPart = origin.substring(CHROME_EXTENSION_PREFIX.length);
    const slashIndex = pathPart.indexOf('/');

    // if there's no / it means that pathPart is now the extensionId, otherwise
    // we take everything until the first /
    return slashIndex === -1 ? pathPart : pathPart.substring(0, slashIndex);
  }

  #onExecutionContextCreated(
    contextPayload: Protocol.Runtime.ExecutionContextDescription,
    session: CDPSession,
  ): void {
    const auxData = contextPayload.auxData as {frameId?: string} | undefined;
    const origin = contextPayload.origin;
    const frameId = auxData && auxData.frameId;
    const frame = typeof frameId === 'string' ? this.frame(frameId) : undefined;
    let world: IsolatedWorld | undefined;
    if (frame) {
      // Only care about execution contexts created for the current session.
      if (frame.client !== session) {
        return;
      }
      if (contextPayload.auxData && contextPayload.auxData['isDefault']) {
        world = frame.worlds[MAIN_WORLD];
      } else if (contextPayload.name === UTILITY_WORLD_NAME) {
        // In case of multiple sessions to the same target, there's a race between
        // connections so we might end up creating multiple isolated worlds.
        // We can use either.
        world = frame.worlds[PUPPETEER_WORLD];
      } else if (this.#isExtensionOrigin(origin)) {
        const extId = this.#extractExtensionId(origin);

        if (!extId) {
          debugError('Error while parsing extension id');
          return;
        }

        if (frame.extensionWorlds[extId]) {
          world = frame.extensionWorlds[extId];
        } else {
          world = new IsolatedWorld(frame, this.timeoutSettings, extId);
          frame.extensionWorlds[extId] = world;
          frame.registerWorldListeners(world);
          world.origin = origin;
          world.setWorldId(extId);
        }
      }
    }

    // If there is no world, the context is not meant to be handled by us.
    if (!world) {
      return;
    }
    const context = new ExecutionContext(
      frame?.client || this.#client,
      contextPayload,
      world,
    );
    world.setContext(context);
  }

  #removeFramesRecursively(frame: CdpFrame): void {
    for (const child of frame.childFrames()) {
      this.#removeFramesRecursively(child);
    }
    this._frameTree.removeFrame(frame);
    this.emit(FrameManagerEvent.FrameDetached, frame);
    frame.emit(FrameEvent.FrameDetached, frame);
    // Needs to be last to ensure events
    // sent before handlers are cleared.
    frame[disposeSymbol]();
  }
}
