/**
 * @license
 * Copyright 2022 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */

import type {Protocol} from 'devtools-protocol';

import {URLPattern} from '../../third_party/urlpattern-polyfill/urlpattern-polyfill.js';
import type {TargetFilterCallback} from '../api/Browser.js';
import type {CDPSession} from '../api/CDPSession.js';
import {CDPSessionEvent} from '../api/CDPSession.js';
import {EventEmitter} from '../common/EventEmitter.js';
import {debugError} from '../common/util.js';
import {assert} from '../util/assert.js';
import {Deferred} from '../util/Deferred.js';

import {CdpCDPSession} from './CdpSession.js';
import type {Connection} from './Connection.js';
import type {CdpTarget} from './Target.js';
import {InitializationStatus} from './Target.js';
import type {TargetManagerEvents} from './TargetManageEvents.js';
import {TargetManagerEvent} from './TargetManageEvents.js';

/**
 * @internal
 */
export type TargetFactory = (
  targetInfo: Protocol.Target.TargetInfo,
  session?: CdpCDPSession,
  parentSession?: CdpCDPSession,
) => CdpTarget;

function isPageTargetBecomingPrimary(
  target: CdpTarget,
  newTargetInfo: Protocol.Target.TargetInfo,
): boolean {
  return Boolean(target._subtype()) && !newTargetInfo.subtype;
}

/**
 * TargetManager encapsulates all interactions with CDP targets and is
 * responsible for coordinating the configuration of targets with the rest of
 * Puppeteer. Code outside of this class should not subscribe `Target.*` events
 * and only use the TargetManager events.
 *
 * TargetManager uses the CDP's auto-attach mechanism to intercept
 * new targets and allow the rest of Puppeteer to configure listeners while
 * the target is paused.
 *
 * @internal
 */
export class TargetManager
  extends EventEmitter<TargetManagerEvents>
  implements TargetManager
{
  #connection: Connection;
  /**
   * Keeps track of the following events: 'Target.targetCreated',
   * 'Target.targetDestroyed', 'Target.targetInfoChanged'.
   *
   * A target becomes discovered when 'Target.targetCreated' is received.
   * A target is removed from this map once 'Target.targetDestroyed' is
   * received.
   *
   * `targetFilterCallback` has no effect on this map.
   */
  #discoveredTargetsByTargetId = new Map<string, Protocol.Target.TargetInfo>();
  /**
   * A target is added to this map once TargetManager has created
   * a Target and attached at least once to it.
   */
  #attachedTargetsByTargetId = new Map<string, CdpTarget>();
  /**
   * Tracks which sessions attach to which target.
   */
  #attachedTargetsBySessionId = new Map<string, CdpTarget>();
  /**
   * If a target was filtered out by `targetFilterCallback`, we still receive
   * events about it from CDP, but we don't forward them to the rest of Puppeteer.
   */
  #ignoredTargets = new Set<string>();
  #targetFilterCallback: TargetFilterCallback | undefined;
  #targetFactory: TargetFactory;

  #attachedToTargetListenersBySession = new WeakMap<
    CDPSession | Connection,
    (event: Protocol.Target.AttachedToTargetEvent) => void
  >();
  #detachedFromTargetListenersBySession = new WeakMap<
    CDPSession | Connection,
    (event: Protocol.Target.DetachedFromTargetEvent) => void
  >();

  #initializeDeferred = Deferred.create<void>();
  #waitForInitiallyDiscoveredTargets = true;

  #discoveryFilter: Protocol.Target.FilterEntry[] = [{}];
  // IDs of tab targets detected while running the initial Target.setAutoAttach
  // request. These are the targets whose initialization we want to await for
  // before resolving puppeteer.connect() or launch() to avoid flakiness.
  // Whenever a sub-target whose parent is a tab target is attached, we remove
  // the tab target from this list. Once the list is empty, we resolve the
  // initializeDeferred.
  #targetsIdsForInit = new Set<string>();
  // This is false until the connection-level Target.setAutoAttach request is
  // done. It indicates whethere we are running the initial auto-attach step or
  // if we are handling targets after that.
  #initialAttachDone = false;
  #blocklist: Array<{pattern: URLPattern; rule: string}> = [];
  #allowlist: Array<{pattern: URLPattern; rule: string}> = [];

  constructor(
    connection: Connection,
    targetFactory: TargetFactory,
    targetFilterCallback?: TargetFilterCallback,
    waitForInitiallyDiscoveredTargets = true,
    blocklist?: string[],
    allowlist?: string[],
  ) {
    super();
    if (blocklist && allowlist) {
      throw new Error('Cannot specify both blockList and allowList');
    }

    this.#connection = connection;
    this.#targetFilterCallback = targetFilterCallback;
    this.#targetFactory = targetFactory;
    this.#waitForInitiallyDiscoveredTargets = waitForInitiallyDiscoveredTargets;

    this.#blocklist = this.#mapPatterns(blocklist);
    this.#allowlist = this.#mapPatterns(allowlist);

    this.#connection.on('Target.targetCreated', this.#onTargetCreated);
    this.#connection.on('Target.targetDestroyed', this.#onTargetDestroyed);
    this.#connection.on('Target.targetInfoChanged', this.#onTargetInfoChanged);
    this.#connection.on(
      CDPSessionEvent.SessionDetached,
      this.#onSessionDetached,
    );
    this.#setupAttachmentListeners(this.#connection);
  }

  async initialize(): Promise<void> {
    await this.#connection.send('Target.setDiscoverTargets', {
      discover: true,
      filter: this.#discoveryFilter,
    });

    await this.#connection.send('Target.setAutoAttach', {
      waitForDebuggerOnStart: true,
      flatten: true,
      autoAttach: true,
      filter: [
        {
          type: 'page',
          exclude: true,
        },
        ...this.#discoveryFilter,
      ],
    });
    this.#initialAttachDone = true;
    this.#finishInitializationIfReady();
    await this.#initializeDeferred.valueOrThrow();
  }

  addToIgnoreTarget(targetId: string): void {
    this.#ignoredTargets.add(targetId);
  }

  getChildTargets(target: CdpTarget): ReadonlySet<CdpTarget> {
    return target._childTargets();
  }

  dispose(): void {
    this.#connection.off('Target.targetCreated', this.#onTargetCreated);
    this.#connection.off('Target.targetDestroyed', this.#onTargetDestroyed);
    this.#connection.off('Target.targetInfoChanged', this.#onTargetInfoChanged);
    this.#connection.off(
      CDPSessionEvent.SessionDetached,
      this.#onSessionDetached,
    );

    this.#removeAttachmentListeners(this.#connection);
  }

  getAvailableTargets(): ReadonlyMap<string, CdpTarget> {
    return this.#attachedTargetsByTargetId;
  }

  getDiscoveredTargetInfos(): ReadonlyMap<string, Protocol.Target.TargetInfo> {
    return this.#discoveredTargetsByTargetId;
  }

  #setupAttachmentListeners(session: CDPSession | Connection): void {
    const listener = (event: Protocol.Target.AttachedToTargetEvent) => {
      void this.#onAttachedToTarget(session, event);
    };
    assert(!this.#attachedToTargetListenersBySession.has(session));
    this.#attachedToTargetListenersBySession.set(session, listener);
    session.on('Target.attachedToTarget', listener);

    const detachedListener = (
      event: Protocol.Target.DetachedFromTargetEvent,
    ) => {
      return this.#onDetachedFromTarget(session, event);
    };
    assert(!this.#detachedFromTargetListenersBySession.has(session));
    this.#detachedFromTargetListenersBySession.set(session, detachedListener);
    session.on('Target.detachedFromTarget', detachedListener);
  }

  #removeAttachmentListeners(session: CDPSession | Connection): void {
    const listener = this.#attachedToTargetListenersBySession.get(session);
    if (listener) {
      session.off('Target.attachedToTarget', listener);
      this.#attachedToTargetListenersBySession.delete(session);
    }

    const detachedListener =
      this.#detachedFromTargetListenersBySession.get(session);
    if (detachedListener) {
      session.off('Target.detachedFromTarget', detachedListener);
      this.#detachedFromTargetListenersBySession.delete(session);
    }
  }

  #silentDetach = async (
    session: CdpCDPSession,
    parentSession: Connection | CDPSession,
  ): Promise<void> => {
    await session.send('Runtime.runIfWaitingForDebugger').catch(debugError);
    // We don't use `session.detach()` because that dispatches all commands on
    // the connection instead of the parent session.
    await parentSession
      .send('Target.detachFromTarget', {
        sessionId: session.id(),
      })
      .catch(debugError);
  };

  #getParentTarget = (
    parentSession: Connection | CDPSession,
  ): CdpTarget | null => {
    return parentSession instanceof CdpCDPSession
      ? parentSession.target()
      : null;
  };

  #onSessionDetached = (session: CDPSession) => {
    this.#removeAttachmentListeners(session);
  };

  #onTargetCreated = async (event: Protocol.Target.TargetCreatedEvent) => {
    this.#discoveredTargetsByTargetId.set(
      event.targetInfo.targetId,
      event.targetInfo,
    );

    this.emit(TargetManagerEvent.TargetDiscovered, event.targetInfo);

    // The connection is already attached to the browser target implicitly,
    // therefore, no new CDPSession is created and we have special handling
    // here.
    if (event.targetInfo.type === 'browser' && event.targetInfo.attached) {
      if (this.#attachedTargetsByTargetId.has(event.targetInfo.targetId)) {
        return;
      }
      const target = this.#targetFactory(event.targetInfo, undefined);
      target._initialize();
      this.#attachedTargetsByTargetId.set(event.targetInfo.targetId, target);
    }
  };

  #onTargetDestroyed = (event: Protocol.Target.TargetDestroyedEvent) => {
    const targetInfo = this.#discoveredTargetsByTargetId.get(event.targetId);
    this.#discoveredTargetsByTargetId.delete(event.targetId);
    this.#finishInitializationIfReady(event.targetId);

    if (targetInfo?.type === 'service_worker') {
      // Special case for service workers: report TargetGone event when
      // the worker is destroyed.
      const target = this.#attachedTargetsByTargetId.get(event.targetId);
      if (target) {
        this.emit(TargetManagerEvent.TargetGone, target);
        this.#attachedTargetsByTargetId.delete(event.targetId);
      }
    }
  };

  #onTargetInfoChanged = (event: Protocol.Target.TargetInfoChangedEvent) => {
    this.#discoveredTargetsByTargetId.set(
      event.targetInfo.targetId,
      event.targetInfo,
    );

    if (
      this.#ignoredTargets.has(event.targetInfo.targetId) ||
      !event.targetInfo.attached
    ) {
      return;
    }

    const target = this.#attachedTargetsByTargetId.get(
      event.targetInfo.targetId,
    );
    if (!target) {
      return;
    }
    const previousURL = target.url();
    const wasInitialized =
      target._initializedDeferred.value() === InitializationStatus.SUCCESS;

    if (isPageTargetBecomingPrimary(target, event.targetInfo)) {
      const session = target._session();
      assert(
        session,
        'Target that is being activated is missing a CDPSession.',
      );
      session.parentSession()?.emit(CDPSessionEvent.Swapped, session);
    }

    target._targetInfoChanged(event.targetInfo);

    if (wasInitialized && previousURL !== target.url()) {
      this.emit(TargetManagerEvent.TargetChanged, {
        target,
        wasInitialized,
        previousURL,
      });
    }
  };

  #onAttachedToTarget = async (
    parentSession: Connection | CDPSession,
    event: Protocol.Target.AttachedToTargetEvent,
  ) => {
    const targetInfo = event.targetInfo;
    const session = this.#connection._session(event.sessionId);
    if (!session) {
      throw new Error(`Session ${event.sessionId} was not created.`);
    }

    if (!this.#connection.isAutoAttached(targetInfo.targetId)) {
      return;
    }

    // If we connect to a browser that is already open,
    // immediately detach from any tab that is on the blocklist.
    if (!this.#initialAttachDone && !this.isUrlAllowed(targetInfo.url)) {
      await this.#silentDetach(session, parentSession);
      return;
    }

    // Special case for service workers: being attached to service workers will
    // prevent them from ever being destroyed. Therefore, we silently detach
    // from service workers unless the connection was manually created via
    // `page.worker()`. To determine this, we use
    // `this.#connection.isAutoAttached(targetInfo.targetId)`. In the future, we
    // should determine if a target is auto-attached or not with the help of
    // CDP.
    if (targetInfo.type === 'service_worker') {
      await this.#silentDetach(session, parentSession);
      if (
        this.#attachedTargetsByTargetId.has(targetInfo.targetId) ||
        this.#ignoredTargets.has(targetInfo.targetId) ||
        !this.#discoveredTargetsByTargetId.has(targetInfo.targetId)
      ) {
        return;
      }
      const target = this.#targetFactory(targetInfo);
      target._initialize();
      this.#attachedTargetsByTargetId.set(targetInfo.targetId, target);
      this.emit(TargetManagerEvent.TargetAvailable, target);
      return;
    }

    let target = this.#attachedTargetsByTargetId.get(targetInfo.targetId);
    const isExistingTarget = target !== undefined;

    if (!target) {
      target = this.#targetFactory(
        targetInfo,
        session,
        parentSession instanceof CdpCDPSession ? parentSession : undefined,
      );
    }

    const parentTarget = this.#getParentTarget(parentSession);

    if (this.#targetFilterCallback && !this.#targetFilterCallback(target)) {
      this.#ignoredTargets.add(targetInfo.targetId);
      if (parentTarget?.type() === 'tab') {
        this.#finishInitializationIfReady(parentTarget._targetId);
      }
      await this.#silentDetach(session, parentSession);
      return;
    }

    if (
      this.#waitForInitiallyDiscoveredTargets &&
      event.targetInfo.type === 'tab' &&
      !this.#initialAttachDone
    ) {
      this.#targetsIdsForInit.add(event.targetInfo.targetId);
    }

    this.#setupAttachmentListeners(session);

    if (isExistingTarget) {
      session.setTarget(target);
      this.#attachedTargetsBySessionId.set(session.id(), target);
    } else {
      target._initialize();
      this.#attachedTargetsByTargetId.set(targetInfo.targetId, target);
      this.#attachedTargetsBySessionId.set(session.id(), target);
    }

    parentTarget?._addChildTarget(target);

    parentSession.emit(CDPSessionEvent.Ready, session);

    if (!isExistingTarget) {
      this.emit(TargetManagerEvent.TargetAvailable, target);
    }
    if (parentTarget?.type() === 'tab') {
      this.#finishInitializationIfReady(parentTarget._targetId);
    }

    // TODO: the browser might be shutting down here. What do we do with the
    // error?
    await Promise.all([
      session.send('Target.setAutoAttach', {
        waitForDebuggerOnStart: true,
        flatten: true,
        autoAttach: true,
        filter: this.#discoveryFilter,
      }),
      this.#maybeSetupNetworkConditions(session),
      session.send('Runtime.runIfWaitingForDebugger'),
    ]).catch(debugError);
  };

  #finishInitializationIfReady(targetId?: string): void {
    if (targetId !== undefined) {
      this.#targetsIdsForInit.delete(targetId);
    }
    // If we are still initializing it might be that we have not learned about
    // some targets yet.
    if (!this.#initialAttachDone) {
      return;
    }
    if (this.#targetsIdsForInit.size === 0) {
      this.#initializeDeferred.resolve();
    }
  }

  #onDetachedFromTarget = (
    parentSession: Connection | CDPSession,
    event: Protocol.Target.DetachedFromTargetEvent,
  ) => {
    const target = this.#attachedTargetsBySessionId.get(event.sessionId);
    this.#attachedTargetsBySessionId.delete(event.sessionId);

    if (!target) {
      return;
    }

    if (parentSession instanceof CdpCDPSession) {
      parentSession.target()._removeChildTarget(target);
    }
    this.#attachedTargetsByTargetId.delete(target._targetId);
    this.emit(TargetManagerEvent.TargetGone, target);
  };

  /**
   * Helper to validate URL against blocklist patterns
   */
  isUrlAllowed = (url: string): boolean => {
    if (this.#blocklist.length === 0 && this.#allowlist.length === 0) {
      return true;
    }

    // Always allow internal or setup pages
    if (!url || url === 'about:blank') {
      return true;
    }

    for (const item of this.#blocklist) {
      if (item.pattern.test(url)) {
        return false;
      }
    }

    if (this.#allowlist.length > 0) {
      for (const item of this.#allowlist) {
        if (item.pattern.test(url)) {
          return true;
        }
      }
      return false;
    }

    return true;
  };

  #mapPatterns(rules?: string[]): Array<{pattern: URLPattern; rule: string}> {
    const result: Array<{pattern: URLPattern; rule: string}> = [];
    for (const rule of rules ?? []) {
      result.push({pattern: new URLPattern(rule), rule});
    }
    return result;
  }

  #maybeSetupNetworkConditions = async (session: CDPSession): Promise<void> => {
    if (this.#blocklist.length === 0 && this.#allowlist.length === 0) {
      return;
    }

    const matchedNetworkConditions = [];
    for (const item of this.#blocklist) {
      matchedNetworkConditions.push({
        urlPattern: item.rule,
        offline: true,
        latency: 0,
        downloadThroughput: -1,
        uploadThroughput: -1,
      });
    }

    if (this.#allowlist.length > 0) {
      for (const item of this.#allowlist) {
        matchedNetworkConditions.push({
          urlPattern: item.rule,
          offline: false,
          latency: 0,
          downloadThroughput: -1,
          uploadThroughput: -1,
        });
      }
      matchedNetworkConditions.push({
        urlPattern: '',
        offline: true,
        latency: 0,
        downloadThroughput: -1,
        uploadThroughput: -1,
      });
    }

    await session.send('Network.emulateNetworkConditionsByRule', {
      // @ts-expect-error offline cannot be undefined before M149.
      offline: this.#blocklist.length > 0 ? true : undefined,
      matchedNetworkConditions,
    });
  };
}
