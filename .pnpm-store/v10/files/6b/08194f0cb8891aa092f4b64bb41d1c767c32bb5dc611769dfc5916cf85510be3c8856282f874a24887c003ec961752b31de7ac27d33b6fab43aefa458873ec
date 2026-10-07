/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */

import type * as Bidi from 'webdriver-bidi-protocol';

import {EventEmitter} from '../../common/EventEmitter.js';
import {assert} from '../../util/assert.js';
import {inertIfDisposed, throwIfDisposed} from '../../util/decorators.js';
import {DisposableStack, disposeSymbol} from '../../util/disposable.js';

import type {Browser} from './Browser.js';
import type {GetCookiesOptions} from './BrowsingContext.js';
import {BrowsingContext} from './BrowsingContext.js';

/**
 * @internal
 */
export type CreateBrowsingContextOptions = Omit<
  Bidi.BrowsingContext.CreateParameters,
  'type' | 'referenceContext'
> & {
  referenceContext?: BrowsingContext;
  background?: boolean;
};

/**
 * @internal
 */
export class UserContext extends EventEmitter<{
  /**
   * Emitted when a new browsing context is created.
   */
  browsingcontext: BrowsingContext;
  /**
   * Emitted when the user context is closed.
   */
  closed: string;
}> {
  static DEFAULT = 'default' as const;

  static create(browser: Browser, id: string): UserContext {
    const context = new UserContext(browser, id);
    context.#initialize();
    return context;
  }

  #reason?: string;
  // Note these are only top-level contexts.
  readonly #browsingContexts = new Map<string, BrowsingContext>();
  readonly #disposables = new DisposableStack();
  readonly #id: string;
  readonly browser: Browser;

  private constructor(browser: Browser, id: string) {
    super();

    this.#id = id;
    this.browser = browser;
  }

  #initialize() {
    const browserEmitter = this.#disposables.use(
      new EventEmitter(this.browser),
    );
    browserEmitter.once('closed', reason => {
      this.dispose(`User context was closed: ${reason}`);
    });
    browserEmitter.once('disconnected', reason => {
      this.dispose(`User context was closed: ${reason}`);
    });

    const sessionEmitter = this.#disposables.use(
      new EventEmitter(this.#session),
    );
    sessionEmitter.on('browsingContext.contextCreated', info => {
      if (info.parent) {
        return;
      }

      if (info.userContext !== this.#id) {
        return;
      }

      const browsingContext = BrowsingContext.from(
        this,
        undefined,
        info.context,
        info.url,
        info.originalOpener,
        info.clientWindow,
      );
      this.#browsingContexts.set(browsingContext.id, browsingContext);

      const browsingContextEmitter = this.#disposables.use(
        new EventEmitter(browsingContext),
      );
      browsingContextEmitter.on('closed', () => {
        browsingContextEmitter.removeAllListeners();

        this.#browsingContexts.delete(browsingContext.id);
      });

      this.emit('browsingcontext', browsingContext);
    });
  }

  get #session() {
    return this.browser.session;
  }
  get browsingContexts(): Iterable<BrowsingContext> {
    return this.#browsingContexts.values();
  }
  get closed(): boolean {
    return this.#reason !== undefined;
  }
  get disposed(): boolean {
    return this.closed;
  }
  get id(): string {
    return this.#id;
  }

  @inertIfDisposed
  private dispose(reason?: string): void {
    this.#reason = reason;
    this[disposeSymbol]();
  }

  @throwIfDisposed<UserContext>(context => {
    // SAFETY: Disposal implies this exists.
    return context.#reason!;
  })
  async createBrowsingContext(
    type: Bidi.BrowsingContext.CreateType,
    options: CreateBrowsingContextOptions = {},
  ): Promise<BrowsingContext> {
    const {
      result: {context: contextId},
    } = await this.#session.send('browsingContext.create', {
      type,
      ...options,
      referenceContext: options.referenceContext?.id,
      background: options.background,
      userContext: this.#id,
    });

    const browsingContext = this.#browsingContexts.get(contextId);
    assert(
      browsingContext,
      'The WebDriver BiDi implementation is failing to create a browsing context correctly.',
    );

    // We use an array to avoid the promise from being awaited.
    return browsingContext;
  }

  @throwIfDisposed<UserContext>(context => {
    // SAFETY: Disposal implies this exists.
    return context.#reason!;
  })
  async remove(): Promise<void> {
    try {
      await this.#session.send('browser.removeUserContext', {
        userContext: this.#id,
      });
    } finally {
      this.dispose('User context already closed.');
    }
  }

  @throwIfDisposed<UserContext>(context => {
    // SAFETY: Disposal implies this exists.
    return context.#reason!;
  })
  async getCookies(
    options: GetCookiesOptions = {},
    sourceOrigin: string | undefined = undefined,
  ): Promise<Bidi.Network.Cookie[]> {
    const {
      result: {cookies},
    } = await this.#session.send('storage.getCookies', {
      ...options,
      partition: {
        type: 'storageKey',
        userContext: this.#id,
        sourceOrigin,
      },
    });
    return cookies;
  }

  @throwIfDisposed<UserContext>(context => {
    // SAFETY: Disposal implies this exists.
    return context.#reason!;
  })
  async setCookie(
    cookie: Bidi.Storage.PartialCookie,
    sourceOrigin?: string,
  ): Promise<void> {
    await this.#session.send('storage.setCookie', {
      cookie,
      partition: {
        type: 'storageKey',
        sourceOrigin,
        userContext: this.id,
      },
    });
  }

  @throwIfDisposed<UserContext>(context => {
    // SAFETY: Disposal implies this exists.
    return context.#reason!;
  })
  async setPermissions(
    origin: string,
    descriptor: Bidi.Permissions.PermissionDescriptor,
    state: Bidi.Permissions.PermissionState,
  ): Promise<void> {
    await this.#session.send('permissions.setPermission', {
      origin,
      descriptor,
      state,
      userContext: this.#id,
    });
  }

  override [disposeSymbol](): void {
    this.#reason ??=
      'User context already closed, probably because the browser disconnected/closed.';
    this.emit('closed', this.#reason);

    this.#disposables.dispose();
    super[disposeSymbol]();
  }
}
