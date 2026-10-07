/**
 * @license
 * Copyright 2019 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */

import type {Protocol} from 'devtools-protocol';

import type {Browser} from '../api/Browser.js';
import type {BrowserContext} from '../api/BrowserContext.js';
import {PageEvent, type Page} from '../api/Page.js';
import {Target, TargetType} from '../api/Target.js';
import {debugError} from '../common/util.js';
import type {Viewport} from '../common/Viewport.js';
import {Deferred} from '../util/Deferred.js';

import type {CdpCDPSession} from './CdpSession.js';
import {CdpPage} from './Page.js';
import type {TargetManager} from './TargetManager.js';
import {CdpWebWorker} from './WebWorker.js';

/**
 * @internal
 */
export enum InitializationStatus {
  SUCCESS = 'success',
  ABORTED = 'aborted',
}

/**
 * @internal
 */
export class CdpTarget extends Target {
  #browserContext?: BrowserContext;
  #session?: CdpCDPSession;
  #targetInfo: Protocol.Target.TargetInfo;
  #targetManager?: TargetManager;
  #sessionFactory:
    | ((isAutoAttachEmulated: boolean) => Promise<CdpCDPSession>)
    | undefined;
  #childTargets = new Set<CdpTarget>();
  _initializedDeferred = Deferred.create<InitializationStatus>();
  _isClosedDeferred = Deferred.create<void>();
  _targetId: string;
  _asPagePromise?: Promise<Page>;
  /** @internal */
  pagePromise?: Promise<Page>;

  /**
   * To initialize the target for use, call initialize.
   *
   * @internal
   */
  constructor(
    targetInfo: Protocol.Target.TargetInfo,
    session: CdpCDPSession | undefined,
    browserContext: BrowserContext | undefined,
    targetManager: TargetManager | undefined,
    sessionFactory:
      | ((isAutoAttachEmulated: boolean) => Promise<CdpCDPSession>)
      | undefined,
  ) {
    super();
    this.#session = session;
    this.#targetManager = targetManager;
    this.#targetInfo = targetInfo;
    this.#browserContext = browserContext;
    this._targetId = targetInfo.targetId;
    this.#sessionFactory = sessionFactory;
    if (this.#session) {
      this.#session.setTarget(this);
    }
  }

  override async asPage(): Promise<Page> {
    if (this.pagePromise) {
      const page = await this.pagePromise;
      if (page) {
        return page;
      }
    }
    if (!this._asPagePromise) {
      const session = this._session();
      this._asPagePromise = (
        session
          ? Promise.resolve(session)
          : this._sessionFactory()(/* isAutoAttachEmulated=*/ false)
      ).then(client => {
        return CdpPage._create(client, this, null);
      });
    }
    return (await this._asPagePromise) ?? null;
  }

  _subtype(): string | undefined {
    return this.#targetInfo.subtype;
  }

  _session(): CdpCDPSession | undefined {
    return this.#session;
  }

  _addChildTarget(target: CdpTarget): void {
    this.#childTargets.add(target);
  }

  _removeChildTarget(target: CdpTarget): void {
    this.#childTargets.delete(target);
  }

  _childTargets(): ReadonlySet<CdpTarget> {
    return this.#childTargets;
  }

  protected _sessionFactory(): (
    isAutoAttachEmulated: boolean,
  ) => Promise<CdpCDPSession> {
    if (!this.#sessionFactory) {
      throw new Error('sessionFactory is not initialized');
    }
    return this.#sessionFactory;
  }

  override createCDPSession(): Promise<CdpCDPSession> {
    if (!this.#sessionFactory) {
      throw new Error('sessionFactory is not initialized');
    }
    return this.#sessionFactory(false).then(session => {
      session.setTarget(this);
      return session;
    });
  }

  override url(): string {
    return this.#targetInfo.url;
  }

  override type(): TargetType {
    const type = this.#targetInfo.type;
    switch (type) {
      case 'page':
        return TargetType.PAGE;
      case 'background_page':
        return TargetType.BACKGROUND_PAGE;
      case 'service_worker':
        return TargetType.SERVICE_WORKER;
      case 'shared_worker':
        return TargetType.SHARED_WORKER;
      case 'browser':
        return TargetType.BROWSER;
      case 'webview':
        return TargetType.WEBVIEW;
      case 'tab':
        return TargetType.TAB;
      default:
        return TargetType.OTHER;
    }
  }

  _targetManager(): TargetManager {
    if (!this.#targetManager) {
      throw new Error('targetManager is not initialized');
    }
    return this.#targetManager;
  }

  _getTargetInfo(): Protocol.Target.TargetInfo {
    return this.#targetInfo;
  }

  override browser(): Browser {
    if (!this.#browserContext) {
      throw new Error('browserContext is not initialized');
    }
    return this.#browserContext.browser();
  }

  override browserContext(): BrowserContext {
    if (!this.#browserContext) {
      throw new Error('browserContext is not initialized');
    }
    return this.#browserContext;
  }

  override opener(): Target | undefined {
    const {openerId} = this.#targetInfo;
    if (!openerId) {
      return;
    }
    return this.browser()
      .targets()
      .find(target => {
        return (target as CdpTarget)._targetId === openerId;
      });
  }

  _targetInfoChanged(targetInfo: Protocol.Target.TargetInfo): void {
    this.#targetInfo = targetInfo;
    this._checkIfInitialized();
  }

  _initialize(): void {
    this._initializedDeferred.resolve(InitializationStatus.SUCCESS);
  }

  _isTargetExposed(): boolean {
    return this.type() !== TargetType.TAB && !this._subtype();
  }

  protected _checkIfInitialized(): void {
    if (!this._initializedDeferred.resolved()) {
      this._initializedDeferred.resolve(InitializationStatus.SUCCESS);
    }
  }
}

/**
 * @internal
 */
export class PageTarget extends CdpTarget {
  #defaultViewport?: Viewport;

  constructor(
    targetInfo: Protocol.Target.TargetInfo,
    session: CdpCDPSession | undefined,
    browserContext: BrowserContext,
    targetManager: TargetManager,
    sessionFactory: (isAutoAttachEmulated: boolean) => Promise<CdpCDPSession>,
    defaultViewport: Viewport | null,
  ) {
    super(targetInfo, session, browserContext, targetManager, sessionFactory);
    this.#defaultViewport = defaultViewport ?? undefined;
  }

  override _initialize(): void {
    this._initializedDeferred
      .valueOrThrow()
      .then(async result => {
        if (result === InitializationStatus.ABORTED) {
          return;
        }
        const opener = this.opener();
        if (!(opener instanceof PageTarget)) {
          return;
        }
        if (!opener || !opener.pagePromise || this.type() !== 'page') {
          return true;
        }
        const openerPage = await opener.pagePromise;
        if (!openerPage.listenerCount(PageEvent.Popup)) {
          return true;
        }
        const popupPage = await this.page();
        openerPage.emit(PageEvent.Popup, popupPage);
        return true;
      })
      .catch(debugError);
    this._checkIfInitialized();
  }

  override async page(): Promise<Page | null> {
    if (!this.pagePromise) {
      const session = this._session();
      this.pagePromise = (
        session
          ? Promise.resolve(session)
          : this._sessionFactory()(/* isAutoAttachEmulated=*/ false)
      ).then(client => {
        return CdpPage._create(client, this, this.#defaultViewport ?? null);
      });
    }
    return (await this.pagePromise) ?? null;
  }

  override _checkIfInitialized(): void {
    if (this._initializedDeferred.resolved()) {
      return;
    }
    if (this._getTargetInfo().url !== '') {
      this._initializedDeferred.resolve(InitializationStatus.SUCCESS);
    }
  }
}

/**
 * @internal
 */
export class DevToolsTarget extends PageTarget {}

/**
 * @internal
 */
export class WorkerTarget extends CdpTarget {
  #workerPromise?: Promise<CdpWebWorker>;

  override async worker(): Promise<CdpWebWorker | null> {
    if (!this.#workerPromise) {
      const session = this._session();
      this.#workerPromise = (
        session
          ? Promise.resolve(session)
          : this._sessionFactory()(/* isAutoAttachEmulated=*/ false)
      ).then(client => {
        return new CdpWebWorker(
          client,
          this._getTargetInfo().url,
          this._targetId,
          this.type(),
          () => {} /* exceptionThrown */,
          undefined /* networkManager */,
        );
      });
    }
    return await this.#workerPromise;
  }
}

/**
 * @internal
 */
export class OtherTarget extends CdpTarget {}
