/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */

import type * as Bidi from 'webdriver-bidi-protocol';

import type {BluetoothEmulation} from '../../api/BluetoothEmulation.js';
import type {DeviceRequestPrompt} from '../../api/DeviceRequestPrompt.js';
import {EventEmitter} from '../../common/EventEmitter.js';
import {isString} from '../../common/util.js';
import {assert} from '../../util/assert.js';
import {inertIfDisposed, throwIfDisposed} from '../../util/decorators.js';
import {DisposableStack, disposeSymbol} from '../../util/disposable.js';
import {BidiBluetoothEmulation} from '../BluetoothEmulation.js';
import {BidiDeviceRequestPromptManager} from '../DeviceRequestPrompt.js';

import type {AddPreloadScriptOptions} from './Browser.js';
import {Navigation} from './Navigation.js';
import type {DedicatedWorkerRealm} from './Realm.js';
import {WindowRealm} from './Realm.js';
import {Request} from './Request.js';
import type {UserContext} from './UserContext.js';
import {UserPrompt} from './UserPrompt.js';

/**
 * @internal
 */
export type AddInterceptOptions = Omit<
  Bidi.Network.AddInterceptParameters,
  'contexts'
>;

/**
 * @internal
 */
export type CaptureScreenshotOptions = Omit<
  Bidi.BrowsingContext.CaptureScreenshotParameters,
  'context'
>;

/**
 * @internal
 */
export type ReloadOptions = Omit<
  Bidi.BrowsingContext.ReloadParameters,
  'context'
>;

/**
 * @internal
 */
export type PrintOptions = Omit<
  Bidi.BrowsingContext.PrintParameters,
  'context'
>;

/**
 * @internal
 */
export type HandleUserPromptOptions = Omit<
  Bidi.BrowsingContext.HandleUserPromptParameters,
  'context'
>;

/**
 * @internal
 */
export type SetViewportOptions = Omit<
  Bidi.BrowsingContext.SetViewportParameters,
  'context'
>;

/**
 * @internal
 */
export type GetCookiesOptions = Omit<
  Bidi.Storage.GetCookiesParameters,
  'partition'
>;

/**
 * @internal
 */
export type SetGeoLocationOverrideOptions =
  Bidi.Emulation.SetGeolocationOverrideParameters;

/**
 * @internal
 */
export class BrowsingContext extends EventEmitter<{
  /** Emitted when this context is closed. */
  closed: string;
  /** Emitted when a child browsing context is created. */
  browsingcontext: BrowsingContext;
  /** Emitted whenever a navigation occurs. */
  navigation: Navigation;
  /** Emitted whenever a file dialog is opened occurs. */
  filedialogopened: Bidi.Input.FileDialogInfo;
  /** Emitted whenever a request is made. */
  request: Request;
  /** Emitted whenever a log entry is added. */
  log: Bidi.Log.Entry;
  /** Emitted whenever a prompt is opened. */
  userprompt: UserPrompt;
  /** Emitted whenever the frame history is updated. */
  historyUpdated: void;
  /** Emitted whenever the frame emits `DOMContentLoaded` */
  DOMContentLoaded: void;
  /** Emitted whenever the frame emits `load` */
  load: void;
  /** Emitted whenever a dedicated worker is created */
  worker: DedicatedWorkerRealm;
}> {
  static from(
    userContext: UserContext,
    parent: BrowsingContext | undefined,
    id: string,
    url: string,
    originalOpener: string | null,
    clientWindow: string,
  ): BrowsingContext {
    const browsingContext = new BrowsingContext(
      userContext,
      parent,
      id,
      url,
      originalOpener,
      clientWindow,
    );
    browsingContext.#initialize();
    return browsingContext;
  }

  #navigation: Navigation | undefined;
  #reason?: string;
  #url: string;
  // Indicated whether client hints have been set to non-default.
  #clientHintsAreSet = false;
  readonly #children = new Map<string, BrowsingContext>();
  readonly #disposables = new DisposableStack();
  readonly #realms = new Map<string, WindowRealm>();
  readonly defaultRealm: WindowRealm;
  readonly id: string;
  readonly parent: BrowsingContext | undefined;
  readonly userContext: UserContext;
  readonly originalOpener: string | null;
  readonly windowId: string;
  readonly #emulationState: {
    javaScriptEnabled: boolean;
  } = {javaScriptEnabled: true};
  readonly #bluetoothEmulation: BluetoothEmulation;
  readonly #deviceRequestPromptManager: BidiDeviceRequestPromptManager;

  private constructor(
    userContext: UserContext,
    parent: BrowsingContext | undefined,
    id: string,
    url: string,
    originalOpener: string | null,
    clientWindow: string,
  ) {
    super();

    this.#url = url;
    this.id = id;
    this.parent = parent;
    this.userContext = userContext;
    this.originalOpener = originalOpener;
    this.windowId = clientWindow;

    this.defaultRealm = this.#createWindowRealm();
    this.#bluetoothEmulation = new BidiBluetoothEmulation(
      this.id,
      this.#session,
    );
    this.#deviceRequestPromptManager = new BidiDeviceRequestPromptManager(
      this.id,
      this.#session,
    );
  }

  #initialize() {
    const userContextEmitter = this.#disposables.use(
      new EventEmitter(this.userContext),
    );
    userContextEmitter.once('closed', reason => {
      this.dispose(`Browsing context already closed: ${reason}`);
    });

    const sessionEmitter = this.#disposables.use(
      new EventEmitter(this.#session),
    );
    sessionEmitter.on('input.fileDialogOpened', info => {
      if (this.id !== info.context) {
        return;
      }
      this.emit('filedialogopened', info);
    });
    sessionEmitter.on('browsingContext.contextCreated', info => {
      if (info.parent !== this.id) {
        return;
      }

      const browsingContext = BrowsingContext.from(
        this.userContext,
        this,
        info.context,
        info.url,
        info.originalOpener,
        info.clientWindow,
      );
      this.#children.set(info.context, browsingContext);

      const browsingContextEmitter = this.#disposables.use(
        new EventEmitter(browsingContext),
      );
      browsingContextEmitter.once('closed', () => {
        browsingContextEmitter.removeAllListeners();

        this.#children.delete(browsingContext.id);
      });

      this.emit('browsingcontext', browsingContext);
    });
    sessionEmitter.on('browsingContext.contextDestroyed', info => {
      if (info.context !== this.id) {
        return;
      }
      this.dispose('Browsing context already closed.');
    });

    sessionEmitter.on('browsingContext.historyUpdated', info => {
      if (info.context !== this.id) {
        return;
      }
      this.#url = info.url;
      this.emit('historyUpdated', undefined);
    });

    sessionEmitter.on('browsingContext.domContentLoaded', info => {
      if (info.context !== this.id) {
        return;
      }
      this.#url = info.url;
      this.emit('DOMContentLoaded', undefined);
    });

    sessionEmitter.on('browsingContext.load', info => {
      if (info.context !== this.id) {
        return;
      }
      this.#url = info.url;
      this.emit('load', undefined);
    });

    sessionEmitter.on('browsingContext.navigationStarted', info => {
      if (info.context !== this.id) {
        return;
      }
      // Note: we should not update this.#url at this point since the context
      // has not finished navigating to the info.url yet.

      // If the navigation hasn't finished, then this is nested navigation. The
      // current navigation will handle this.
      if (this.#navigation !== undefined && !this.#navigation.disposed) {
        return;
      }

      // Note the navigation ID is null for this event.
      this.#navigation = Navigation.from(this);

      const navigationEmitter = this.#disposables.use(
        new EventEmitter(this.#navigation),
      );
      for (const eventName of ['fragment', 'failed', 'aborted'] as const) {
        navigationEmitter.once(eventName, ({url}) => {
          navigationEmitter[disposeSymbol]();

          this.#url = url;
        });
      }

      this.emit('navigation', this.#navigation);
    });
    sessionEmitter.on('network.beforeRequestSent', event => {
      if (event.context !== this.id) {
        return;
      }
      if (event.redirectCount > 0) {
        // Means the request is a redirect. This is handled in Request.
        // Or an Auth event was issued
        return;
      }

      const request = Request.from(this, event);
      this.emit('request', request);
    });

    sessionEmitter.on('log.entryAdded', entry => {
      if (entry.source.context !== this.id) {
        return;
      }

      this.emit('log', entry);
    });

    sessionEmitter.on('browsingContext.userPromptOpened', info => {
      if (info.context !== this.id) {
        return;
      }

      const userPrompt = UserPrompt.from(this, info);
      this.emit('userprompt', userPrompt);
    });
  }

  get #session() {
    return this.userContext.browser.session;
  }
  get children(): Iterable<BrowsingContext> {
    return this.#children.values();
  }
  get closed(): boolean {
    return this.#reason !== undefined;
  }
  get disposed(): boolean {
    return this.closed;
  }
  get realms(): Iterable<WindowRealm> {
    // eslint-disable-next-line @typescript-eslint/no-this-alias -- Required
    const self = this;
    return (function* () {
      yield self.defaultRealm;
      yield* self.#realms.values();
    })();
  }
  get top(): BrowsingContext {
    let context = this as BrowsingContext;
    for (let {parent} = context; parent; {parent} = context) {
      context = parent;
    }
    return context;
  }
  get url(): string {
    return this.#url;
  }

  #createWindowRealm(sandbox?: string) {
    const realm = WindowRealm.from(this, sandbox);
    realm.on('worker', realm => {
      this.emit('worker', realm);
    });
    return realm;
  }

  @inertIfDisposed
  private dispose(reason?: string): void {
    this.#reason = reason;
    for (const context of this.#children.values()) {
      context.dispose('Parent browsing context was disposed');
    }
    this[disposeSymbol]();
  }

  @throwIfDisposed<BrowsingContext>(context => {
    // SAFETY: Disposal implies this exists.
    return context.#reason!;
  })
  async activate(): Promise<void> {
    await this.#session.send('browsingContext.activate', {
      context: this.id,
    });
  }

  @throwIfDisposed<BrowsingContext>(context => {
    // SAFETY: Disposal implies this exists.
    return context.#reason!;
  })
  async captureScreenshot(
    options: CaptureScreenshotOptions = {},
  ): Promise<string> {
    const {
      result: {data},
    } = await this.#session.send('browsingContext.captureScreenshot', {
      context: this.id,
      ...options,
    });
    return data;
  }

  @throwIfDisposed<BrowsingContext>(context => {
    // SAFETY: Disposal implies this exists.
    return context.#reason!;
  })
  async close(promptUnload?: boolean): Promise<void> {
    // The WebDriver BiDi specification only allows closing top-level browsing contexts.
    // Closing a top-level context automatically closes all its children, so there is
    // no need to explicitly close nested contexts.
    await this.#session.send('browsingContext.close', {
      context: this.id,
      promptUnload,
    });
  }

  @throwIfDisposed<BrowsingContext>(context => {
    // SAFETY: Disposal implies this exists.
    return context.#reason!;
  })
  async traverseHistory(delta: number): Promise<void> {
    await this.#session.send('browsingContext.traverseHistory', {
      context: this.id,
      delta,
    });
  }

  @throwIfDisposed<BrowsingContext>(context => {
    // SAFETY: Disposal implies this exists.
    return context.#reason!;
  })
  async navigate(
    url: string,
    wait?: Bidi.BrowsingContext.ReadinessState,
  ): Promise<void> {
    await this.#session.send('browsingContext.navigate', {
      context: this.id,
      url,
      wait,
    });
  }

  @throwIfDisposed<BrowsingContext>(context => {
    // SAFETY: Disposal implies this exists.
    return context.#reason!;
  })
  async reload(options: ReloadOptions = {}): Promise<void> {
    await this.#session.send('browsingContext.reload', {
      context: this.id,
      ...options,
    });
  }

  @throwIfDisposed<BrowsingContext>(context => {
    // SAFETY: Disposal implies this exists.
    return context.#reason!;
  })
  async setCacheBehavior(cacheBehavior: 'default' | 'bypass'): Promise<void> {
    await this.#session.send('network.setCacheBehavior', {
      contexts: [this.id],
      cacheBehavior,
    });
  }

  @throwIfDisposed<BrowsingContext>(context => {
    // SAFETY: Disposal implies this exists.
    return context.#reason!;
  })
  async print(options: PrintOptions = {}): Promise<string> {
    const {
      result: {data},
    } = await this.#session.send('browsingContext.print', {
      context: this.id,
      ...options,
    });
    return data;
  }

  @throwIfDisposed<BrowsingContext>(context => {
    // SAFETY: Disposal implies this exists.
    return context.#reason!;
  })
  async handleUserPrompt(options: HandleUserPromptOptions = {}): Promise<void> {
    await this.#session.send('browsingContext.handleUserPrompt', {
      context: this.id,
      ...options,
    });
  }

  @throwIfDisposed<BrowsingContext>(context => {
    // SAFETY: Disposal implies this exists.
    return context.#reason!;
  })
  async setViewport(options: SetViewportOptions = {}): Promise<void> {
    await this.#session.send('browsingContext.setViewport', {
      context: this.id,
      ...options,
    });
  }

  @throwIfDisposed<BrowsingContext>(context => {
    // SAFETY: Disposal implies this exists.
    return context.#reason!;
  })
  async setTouchOverride(maxTouchPoints: number | null): Promise<void> {
    await this.#session.send('emulation.setTouchOverride', {
      contexts: [this.id],
      maxTouchPoints,
    });
  }

  @throwIfDisposed<BrowsingContext>(context => {
    // SAFETY: Disposal implies this exists.
    return context.#reason!;
  })
  async performActions(actions: Bidi.Input.SourceActions[]): Promise<void> {
    await this.#session.send('input.performActions', {
      context: this.id,
      actions,
    });
  }

  @throwIfDisposed<BrowsingContext>(context => {
    // SAFETY: Disposal implies this exists.
    return context.#reason!;
  })
  async releaseActions(): Promise<void> {
    await this.#session.send('input.releaseActions', {
      context: this.id,
    });
  }

  @throwIfDisposed<BrowsingContext>(context => {
    // SAFETY: Disposal implies this exists.
    return context.#reason!;
  })
  createWindowRealm(sandbox: string): WindowRealm {
    return this.#createWindowRealm(sandbox);
  }

  @throwIfDisposed<BrowsingContext>(context => {
    // SAFETY: Disposal implies this exists.
    return context.#reason!;
  })
  async addPreloadScript(
    functionDeclaration: string,
    options: AddPreloadScriptOptions = {},
  ): Promise<string> {
    return await this.userContext.browser.addPreloadScript(
      functionDeclaration,
      {
        ...options,
        contexts: [this],
      },
    );
  }

  @throwIfDisposed<BrowsingContext>(context => {
    // SAFETY: Disposal implies this exists.
    return context.#reason!;
  })
  async addIntercept(options: AddInterceptOptions): Promise<string> {
    const {
      result: {intercept},
    } = await this.userContext.browser.session.send('network.addIntercept', {
      ...options,
      contexts: [this.id],
    });

    return intercept;
  }

  @throwIfDisposed<BrowsingContext>(context => {
    // SAFETY: Disposal implies this exists.
    return context.#reason!;
  })
  async removePreloadScript(script: string): Promise<void> {
    await this.userContext.browser.removePreloadScript(script);
  }

  @throwIfDisposed<BrowsingContext>(context => {
    // SAFETY: Disposal implies this exists.
    return context.#reason!;
  })
  async setGeolocationOverride(
    options: SetGeoLocationOverrideOptions,
  ): Promise<void> {
    if (!('coordinates' in options)) {
      throw new Error('Missing coordinates');
    }
    await this.userContext.browser.session.send(
      'emulation.setGeolocationOverride',
      {
        coordinates: options.coordinates,
        contexts: [this.id],
      },
    );
  }

  @throwIfDisposed<BrowsingContext>(context => {
    // SAFETY: Disposal implies this exists.
    return context.#reason!;
  })
  async setTimezoneOverride(timezoneId?: string): Promise<void> {
    if (timezoneId?.startsWith('GMT')) {
      // CDP requires `GMT` prefix before timezone offset, while BiDi does not. Remove the
      // `GMT` for interop between CDP and BiDi.
      timezoneId = timezoneId?.replace('GMT', '');
    }
    await this.userContext.browser.session.send(
      'emulation.setTimezoneOverride',
      {
        timezone: timezoneId ?? null,
        contexts: [this.id],
      },
    );
  }

  @throwIfDisposed<BrowsingContext>(context => {
    // SAFETY: Disposal implies this exists.
    return context.#reason!;
  })
  async setScreenOrientationOverride(
    screenOrientation: Bidi.Emulation.ScreenOrientation | null,
  ): Promise<void> {
    await this.#session.send('emulation.setScreenOrientationOverride', {
      screenOrientation,
      contexts: [this.id],
    });
  }

  @throwIfDisposed<BrowsingContext>(context => {
    // SAFETY: Disposal implies this exists.
    return context.#reason!;
  })
  async getCookies(
    options: GetCookiesOptions = {},
  ): Promise<Bidi.Network.Cookie[]> {
    const {
      result: {cookies},
    } = await this.#session.send('storage.getCookies', {
      ...options,
      partition: {
        type: 'context',
        context: this.id,
      },
    });
    return cookies;
  }

  @throwIfDisposed<BrowsingContext>(context => {
    // SAFETY: Disposal implies this exists.
    return context.#reason!;
  })
  async setCookie(cookie: Bidi.Storage.PartialCookie): Promise<void> {
    await this.#session.send('storage.setCookie', {
      cookie,
      partition: {
        type: 'context',
        context: this.id,
      },
    });
  }

  @throwIfDisposed<BrowsingContext>(context => {
    // SAFETY: Disposal implies this exists.
    return context.#reason!;
  })
  async setFiles(
    element: Bidi.Script.SharedReference,
    files: string[],
  ): Promise<void> {
    await this.#session.send('input.setFiles', {
      context: this.id,
      element,
      files,
    });
  }

  @throwIfDisposed<BrowsingContext>(context => {
    // SAFETY: Disposal implies this exists.
    return context.#reason!;
  })
  async subscribe(events: [string, ...string[]]): Promise<void> {
    await this.#session.subscribe(events, [this.id]);
  }

  @throwIfDisposed<BrowsingContext>(context => {
    // SAFETY: Disposal implies this exists.
    return context.#reason!;
  })
  async addInterception(events: [string, ...string[]]): Promise<void> {
    await this.#session.subscribe(events, [this.id]);
  }

  override [disposeSymbol](): void {
    this.#reason ??=
      'Browsing context already closed, probably because the user context closed.';
    this.emit('closed', this.#reason);

    this.#disposables.dispose();
    super[disposeSymbol]();
  }

  @throwIfDisposed<BrowsingContext>(context => {
    // SAFETY: Disposal implies this exists.
    return context.#reason!;
  })
  async deleteCookie(
    ...cookieFilters: Bidi.Storage.CookieFilter[]
  ): Promise<void> {
    await Promise.all(
      cookieFilters.map(async filter => {
        await this.#session.send('storage.deleteCookies', {
          filter: filter,
          partition: {
            type: 'context',
            context: this.id,
          },
        });
      }),
    );
  }

  @throwIfDisposed<BrowsingContext>(context => {
    // SAFETY: Disposal implies this exists.
    return context.#reason!;
  })
  async locateNodes(
    locator: Bidi.BrowsingContext.Locator,
    startNodes: Bidi.Script.SharedReference[] = [],
  ): Promise<Bidi.Script.NodeRemoteValue[]> {
    // TODO: add other locateNodes options if needed.
    const result = await this.#session.send('browsingContext.locateNodes', {
      context: this.id,
      locator,
      startNodes: startNodes.length
        ? (startNodes as [
            Bidi.Script.SharedReference,
            ...Bidi.Script.SharedReference[],
          ])
        : undefined,
    });
    return result.result.nodes;
  }

  async setJavaScriptEnabled(enabled: boolean): Promise<void> {
    await this.userContext.browser.session.send(
      'emulation.setScriptingEnabled',
      {
        // Enabled `null` means `default`, `false` means `disabled`.
        enabled: enabled ? null : false,
        contexts: [this.id],
      },
    );
    this.#emulationState.javaScriptEnabled = enabled;
  }

  isJavaScriptEnabled(): boolean {
    return this.#emulationState.javaScriptEnabled;
  }

  async setUserAgent(userAgent: string | null): Promise<void> {
    await this.#session.send('emulation.setUserAgentOverride', {
      userAgent,
      contexts: [this.id],
    });
  }

  async setClientHintsOverride(
    clientHints: Bidi.BidiUaClientHints.UserAgentClientHints.ClientHintsMetadata | null,
  ): Promise<void> {
    if (clientHints === null && !this.#clientHintsAreSet) {
      // Ignore the call, as the client hints are not supposed to be changed. Required to
      // avoid breakage with browsers that don't support client hints emulation.
      return;
    }
    this.#clientHintsAreSet = true;

    await this.#session.send('userAgentClientHints.setClientHintsOverride', {
      clientHints,
      contexts: [this.id],
    });
  }

  async setOfflineMode(enabled: boolean): Promise<void> {
    await this.#session.send('emulation.setNetworkConditions', {
      networkConditions: enabled
        ? {
            type: 'offline',
          }
        : null,
      contexts: [this.id],
    });
  }

  get bluetooth(): BluetoothEmulation {
    return this.#bluetoothEmulation;
  }

  async waitForDevicePrompt(
    timeout: number,
    signal?: AbortSignal,
  ): Promise<DeviceRequestPrompt> {
    return await this.#deviceRequestPromptManager.waitForDevicePrompt(
      timeout,
      signal,
    );
  }

  async setExtraHTTPHeaders(headers: Record<string, string>): Promise<void> {
    await this.#session.send('network.setExtraHeaders', {
      headers: Object.entries(headers).map(([key, value]) => {
        assert(
          isString(value),
          `Expected value of header "${key}" to be String, but "${typeof value}" is found.`,
        );

        return {
          name: key.toLowerCase(),
          value: {type: 'string', value: value},
        };
      }),
      contexts: [this.id],
    });
  }
}
