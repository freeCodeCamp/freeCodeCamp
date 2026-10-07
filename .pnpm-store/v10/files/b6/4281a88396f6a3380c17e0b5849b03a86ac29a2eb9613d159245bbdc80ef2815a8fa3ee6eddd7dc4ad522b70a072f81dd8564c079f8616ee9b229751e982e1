/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */

import type * as Bidi from 'webdriver-bidi-protocol';

import {EventEmitter} from '../../common/EventEmitter.js';
import {inertIfDisposed, throwIfDisposed} from '../../util/decorators.js';
import {DisposableStack, disposeSymbol} from '../../util/disposable.js';
import type {BidiConnection} from '../Connection.js';

import type {Browser} from './Browser.js';
import type {BrowsingContext} from './BrowsingContext.js';
import type {Session} from './Session.js';

/**
 * @internal
 */
export type CallFunctionOptions = Omit<
  Bidi.Script.CallFunctionParameters,
  'functionDeclaration' | 'awaitPromise' | 'target'
>;

/**
 * @internal
 */
export type EvaluateOptions = Omit<
  Bidi.Script.EvaluateParameters,
  'expression' | 'awaitPromise' | 'target'
>;

/**
 * @internal
 */
export abstract class Realm extends EventEmitter<{
  /** Emitted whenever the realm has updated. */
  updated: Realm;
  /** Emitted when the realm is destroyed. */
  destroyed: string;
  /** Emitted when a dedicated worker is created in the realm. */
  worker: DedicatedWorkerRealm;
  /** Emitted when a shared worker is created in the realm. */
  sharedworker: SharedWorkerRealm;
  /** Emitted whenever a log entry is added to the realm. */
  log: Bidi.Log.Entry;
}> {
  #reason?: string;
  protected readonly disposables = new DisposableStack();
  readonly id: string;
  readonly origin: string;
  protected executionContextId?: number;

  protected constructor(id: string, origin: string) {
    super();

    this.id = id;
    this.origin = origin;
  }

  get disposed(): boolean {
    return this.#reason !== undefined;
  }
  protected abstract get session(): Session;
  get target(): Bidi.Script.Target {
    return {realm: this.id};
  }

  @inertIfDisposed
  protected dispose(reason?: string): void {
    this.#reason = reason;
    this[disposeSymbol]();
  }

  @throwIfDisposed<Realm>(realm => {
    // SAFETY: Disposal implies this exists.
    return realm.#reason!;
  })
  async disown(handles: string[]): Promise<void> {
    await this.session.send('script.disown', {
      target: this.target,
      handles,
    });
  }

  @throwIfDisposed<Realm>(realm => {
    // SAFETY: Disposal implies this exists.
    return realm.#reason!;
  })
  async callFunction(
    functionDeclaration: string,
    awaitPromise: boolean,
    options: CallFunctionOptions = {},
  ): Promise<Bidi.Script.EvaluateResult> {
    const {result} = await this.session.send('script.callFunction', {
      functionDeclaration,
      awaitPromise,
      target: this.target,
      ...options,
    });
    return result;
  }

  @throwIfDisposed<Realm>(realm => {
    // SAFETY: Disposal implies this exists.
    return realm.#reason!;
  })
  async evaluate(
    expression: string,
    awaitPromise: boolean,
    options: EvaluateOptions = {},
  ): Promise<Bidi.Script.EvaluateResult> {
    const {result} = await this.session.send('script.evaluate', {
      expression,
      awaitPromise,
      target: this.target,
      ...options,
    });
    return result;
  }

  @throwIfDisposed<Realm>(realm => {
    // SAFETY: Disposal implies this exists.
    return realm.#reason!;
  })
  async resolveExecutionContextId(): Promise<number> {
    if (!this.executionContextId) {
      const {result} = await (this.session.connection as BidiConnection).send(
        'goog:cdp.resolveRealm',
        {realm: this.id},
      );
      this.executionContextId = result.executionContextId;
    }

    return this.executionContextId;
  }

  override [disposeSymbol](): void {
    this.#reason ??=
      'Realm already destroyed, probably because all associated browsing contexts closed.';
    this.emit('destroyed', this.#reason);

    this.disposables.dispose();
    super[disposeSymbol]();
  }
}

/**
 * @internal
 */
export class WindowRealm extends Realm {
  static from(context: BrowsingContext, sandbox?: string): WindowRealm {
    const realm = new WindowRealm(context, sandbox);
    realm.#initialize();
    return realm;
  }

  readonly browsingContext: BrowsingContext;
  readonly sandbox?: string;

  readonly #workers = new Map<string, DedicatedWorkerRealm>();

  private constructor(context: BrowsingContext, sandbox?: string) {
    super('', '');

    this.browsingContext = context;
    this.sandbox = sandbox;
  }

  #initialize(): void {
    const browsingContextEmitter = this.disposables.use(
      new EventEmitter(this.browsingContext),
    );
    browsingContextEmitter.on('closed', reason => {
      this.dispose(reason);
    });

    const sessionEmitter = this.disposables.use(new EventEmitter(this.session));
    sessionEmitter.on('script.realmCreated', info => {
      if (
        info.type !== 'window' ||
        info.context !== this.browsingContext.id ||
        info.sandbox !== this.sandbox
      ) {
        return;
      }
      (this as any).id = info.realm;
      (this as any).origin = info.origin;
      this.executionContextId = undefined;
      this.emit('updated', this);
    });
    sessionEmitter.on('script.realmCreated', info => {
      if (info.type !== 'dedicated-worker') {
        return;
      }
      if (!info.owners.includes(this.id)) {
        return;
      }

      const realm = DedicatedWorkerRealm.from(this, info.realm, info.origin);
      this.#workers.set(realm.id, realm);

      const realmEmitter = this.disposables.use(new EventEmitter(realm));
      realmEmitter.once('destroyed', () => {
        realmEmitter.removeAllListeners();
        this.#workers.delete(realm.id);
      });

      this.emit('worker', realm);
    });

    sessionEmitter.on('log.entryAdded', entry => {
      if (entry.source.realm !== this.id) {
        return;
      }
      this.emit('log', entry);
    });
  }

  override get session(): Session {
    return this.browsingContext.userContext.browser.session;
  }

  override get target(): Bidi.Script.Target {
    return {context: this.browsingContext.id, sandbox: this.sandbox};
  }
}

/**
 * @internal
 */
export type DedicatedWorkerOwnerRealm =
  | DedicatedWorkerRealm
  | SharedWorkerRealm
  | WindowRealm;

/**
 * @internal
 */
export class DedicatedWorkerRealm extends Realm {
  static from(
    owner: DedicatedWorkerOwnerRealm,
    id: string,
    origin: string,
  ): DedicatedWorkerRealm {
    const realm = new DedicatedWorkerRealm(owner, id, origin);
    realm.#initialize();
    return realm;
  }

  readonly #workers = new Map<string, DedicatedWorkerRealm>();
  readonly owners: Set<DedicatedWorkerOwnerRealm>;

  private constructor(
    owner: DedicatedWorkerOwnerRealm,
    id: string,
    origin: string,
  ) {
    super(id, origin);
    this.owners = new Set([owner]);
  }

  #initialize(): void {
    const sessionEmitter = this.disposables.use(new EventEmitter(this.session));
    sessionEmitter.on('script.realmDestroyed', info => {
      if (info.realm !== this.id) {
        return;
      }
      this.dispose('Realm already destroyed.');
    });
    sessionEmitter.on('script.realmCreated', info => {
      if (info.type !== 'dedicated-worker') {
        return;
      }
      if (!info.owners.includes(this.id)) {
        return;
      }

      const realm = DedicatedWorkerRealm.from(this, info.realm, info.origin);
      this.#workers.set(realm.id, realm);

      const realmEmitter = this.disposables.use(new EventEmitter(realm));
      realmEmitter.once('destroyed', () => {
        this.#workers.delete(realm.id);
      });

      this.emit('worker', realm);
    });

    sessionEmitter.on('log.entryAdded', entry => {
      if (entry.source.realm !== this.id) {
        return;
      }
      this.emit('log', entry);
    });
  }

  override get session(): Session {
    // SAFETY: At least one owner will exist.
    return this.owners.values().next().value!.session;
  }
}

/**
 * @internal
 */
export class SharedWorkerRealm extends Realm {
  static from(browser: Browser, id: string, origin: string): SharedWorkerRealm {
    const realm = new SharedWorkerRealm(browser, id, origin);
    realm.#initialize();
    return realm;
  }

  readonly #workers = new Map<string, DedicatedWorkerRealm>();
  readonly browser: Browser;

  private constructor(browser: Browser, id: string, origin: string) {
    super(id, origin);
    this.browser = browser;
  }

  #initialize(): void {
    const sessionEmitter = this.disposables.use(new EventEmitter(this.session));
    sessionEmitter.on('script.realmDestroyed', info => {
      if (info.realm !== this.id) {
        return;
      }
      this.dispose('Realm already destroyed.');
    });
    sessionEmitter.on('script.realmCreated', info => {
      if (info.type !== 'dedicated-worker') {
        return;
      }
      if (!info.owners.includes(this.id)) {
        return;
      }

      const realm = DedicatedWorkerRealm.from(this, info.realm, info.origin);
      this.#workers.set(realm.id, realm);

      const realmEmitter = this.disposables.use(new EventEmitter(realm));
      realmEmitter.once('destroyed', () => {
        this.#workers.delete(realm.id);
      });

      this.emit('worker', realm);
    });

    sessionEmitter.on('log.entryAdded', entry => {
      if (entry.source.realm !== this.id) {
        return;
      }
      this.emit('log', entry);
    });
  }

  override get session(): Session {
    return this.browser.session;
  }
}
