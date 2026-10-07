/**
 * @license
 * Copyright 2022 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */

import * as Bidi from 'webdriver-bidi-protocol';

import type {
  CreatePageOptions,
  Permission,
  PermissionDescriptor,
  PermissionState,
} from '../api/Browser.js';
import {WEB_PERMISSION_TO_PROTOCOL_PERMISSION} from '../api/Browser.js';
import type {BrowserContextEvents} from '../api/BrowserContext.js';
import {BrowserContext, BrowserContextEvent} from '../api/BrowserContext.js';
import {PageEvent, type Page} from '../api/Page.js';
import type {Target} from '../api/Target.js';
import type {Cookie, CookieData} from '../common/Cookie.js';
import {UnsupportedOperation} from '../common/Errors.js';
import {EventEmitter} from '../common/EventEmitter.js';
import {debugError} from '../common/util.js';
import type {Viewport} from '../common/Viewport.js';
import {assert} from '../util/assert.js';
import {bubble} from '../util/decorators.js';

import type {BidiBrowser} from './Browser.js';
import type {BrowsingContext} from './core/BrowsingContext.js';
import {UserContext} from './core/UserContext.js';
import type {BidiFrame} from './Frame.js';
import {
  BidiPage,
  bidiToPuppeteerCookie,
  cdpSpecificCookiePropertiesFromPuppeteerToBidi,
  convertCookiesExpiryCdpToBiDi,
  convertCookiesPartitionKeyFromPuppeteerToBiDi,
  convertCookiesSameSiteCdpToBiDi,
} from './Page.js';
import {BidiWorkerTarget} from './Target.js';
import {BidiFrameTarget, BidiPageTarget} from './Target.js';
import type {BidiWebWorker} from './WebWorker.js';

/**
 * @internal
 */
export interface BidiBrowserContextOptions {
  defaultViewport: Viewport | null;
}

/**
 * @internal
 */
export class BidiBrowserContext extends BrowserContext {
  static from(
    browser: BidiBrowser,
    userContext: UserContext,
    options: BidiBrowserContextOptions,
  ): BidiBrowserContext {
    const context = new BidiBrowserContext(browser, userContext, options);
    context.#initialize();
    return context;
  }

  @bubble()
  accessor trustedEmitter = new EventEmitter<BrowserContextEvents>();

  readonly #browser: BidiBrowser;
  readonly #defaultViewport: Viewport | null;
  // This is public because of cookies.
  readonly userContext: UserContext;
  readonly #pages = new WeakMap<BrowsingContext, BidiPage>();
  readonly #targets = new Map<
    BidiPage,
    [
      BidiPageTarget,
      Map<BidiFrame | BidiWebWorker, BidiFrameTarget | BidiWorkerTarget>,
    ]
  >();

  #overrides: Array<{origin: string; permission: Permission}> = [];

  private constructor(
    browser: BidiBrowser,
    userContext: UserContext,
    options: BidiBrowserContextOptions,
  ) {
    super();
    this.#browser = browser;
    this.userContext = userContext;
    this.#defaultViewport = options.defaultViewport;
  }

  #initialize() {
    // Create targets for existing browsing contexts.
    for (const browsingContext of this.userContext.browsingContexts) {
      this.#createPage(browsingContext);
    }

    this.userContext.on('browsingcontext', browsingContext => {
      const page = this.#createPage(browsingContext);

      // We need to wait for the DOMContentLoaded as the
      // browsingContext still may be navigating from the about:blank
      if (browsingContext.originalOpener) {
        for (const context of this.userContext.browsingContexts) {
          if (context.id === browsingContext.originalOpener) {
            this.#pages
              .get(context)!
              .trustedEmitter.emit(PageEvent.Popup, page);
          }
        }
      }
    });
    this.userContext.on('closed', () => {
      this.trustedEmitter.removeAllListeners();
    });
  }

  #createPage(browsingContext: BrowsingContext): BidiPage {
    const page = BidiPage.from(this, browsingContext);
    this.#pages.set(browsingContext, page);
    page.trustedEmitter.on(PageEvent.Close, () => {
      this.#pages.delete(browsingContext);
    });

    // -- Target stuff starts here --
    const pageTarget = new BidiPageTarget(page);
    const pageTargets = new Map();
    this.#targets.set(page, [pageTarget, pageTargets]);

    page.trustedEmitter.on(PageEvent.FrameAttached, frame => {
      const bidiFrame = frame as BidiFrame;
      const target = new BidiFrameTarget(bidiFrame);
      pageTargets.set(bidiFrame, target);
      this.trustedEmitter.emit(BrowserContextEvent.TargetCreated, target);
    });
    page.trustedEmitter.on(PageEvent.FrameNavigated, frame => {
      const bidiFrame = frame as BidiFrame;
      const target = pageTargets.get(bidiFrame);
      // If there is no target, then this is the page's frame.
      if (target === undefined) {
        this.trustedEmitter.emit(BrowserContextEvent.TargetChanged, pageTarget);
      } else {
        this.trustedEmitter.emit(BrowserContextEvent.TargetChanged, target);
      }
    });
    page.trustedEmitter.on(PageEvent.FrameDetached, frame => {
      const bidiFrame = frame as BidiFrame;
      const target = pageTargets.get(bidiFrame);
      if (target === undefined) {
        return;
      }
      pageTargets.delete(bidiFrame);
      this.trustedEmitter.emit(BrowserContextEvent.TargetDestroyed, target);
    });

    page.trustedEmitter.on(PageEvent.WorkerCreated, worker => {
      const bidiWorker = worker as BidiWebWorker;
      const target = new BidiWorkerTarget(bidiWorker);
      pageTargets.set(bidiWorker, target);
      this.trustedEmitter.emit(BrowserContextEvent.TargetCreated, target);
    });
    page.trustedEmitter.on(PageEvent.WorkerDestroyed, worker => {
      const bidiWorker = worker as BidiWebWorker;
      const target = pageTargets.get(bidiWorker);
      if (target === undefined) {
        return;
      }
      pageTargets.delete(worker);
      this.trustedEmitter.emit(BrowserContextEvent.TargetDestroyed, target);
    });

    page.trustedEmitter.on(PageEvent.Close, () => {
      this.#targets.delete(page);
      this.trustedEmitter.emit(BrowserContextEvent.TargetDestroyed, pageTarget);
    });
    this.trustedEmitter.emit(BrowserContextEvent.TargetCreated, pageTarget);
    // -- Target stuff ends here --

    return page;
  }

  override targets(): Target[] {
    return [...this.#targets.values()].flatMap(([target, frames]) => {
      return [target, ...frames.values()];
    });
  }

  /**
   * @internal
   */
  getTargetForPage(page: BidiPage): BidiPageTarget | undefined {
    return this.#targets.get(page)?.[0];
  }

  override async newPage(options?: CreatePageOptions): Promise<Page> {
    using _guard = await this.waitForScreenshotOperations();

    const type =
      options?.type === 'window'
        ? Bidi.BrowsingContext.CreateType.Window
        : Bidi.BrowsingContext.CreateType.Tab;

    const context = await this.userContext.createBrowsingContext(type, {
      background: options?.background,
    });
    const page = this.#pages.get(context)!;
    if (!page) {
      throw new Error('Page is not found');
    }
    if (this.#defaultViewport) {
      try {
        await page.setViewport(this.#defaultViewport);
      } catch (error) {
        // Tolerate not supporting `browsingContext.setViewport`. Only log it.
        debugError(error);
      }
    }
    if (options?.type === 'window' && options?.windowBounds !== undefined) {
      try {
        await this.browser().setWindowBounds(
          context.windowId,
          options.windowBounds,
        );
      } catch (error) {
        // Tolerate not supporting `browser.setClientWindowState`. Only log it.
        debugError(error);
      }
    }

    return page;
  }

  override async close(): Promise<void> {
    assert(
      this.userContext.id !== UserContext.DEFAULT,
      'Default BrowserContext cannot be closed!',
    );

    try {
      await this.userContext.remove();
    } catch (error) {
      debugError(error);
    }

    this.#targets.clear();
  }

  override browser(): BidiBrowser {
    return this.#browser;
  }

  override async pages(_includeAll = false): Promise<BidiPage[]> {
    return [...this.userContext.browsingContexts].map(context => {
      return this.#pages.get(context)!;
    });
  }

  override async overridePermissions(
    origin: string,
    permissions: Permission[],
  ): Promise<void> {
    const permissionsSet = new Set(
      permissions.map(permission => {
        const protocolPermission =
          WEB_PERMISSION_TO_PROTOCOL_PERMISSION.get(permission);
        if (!protocolPermission) {
          throw new Error('Unknown permission: ' + permission);
        }
        return permission;
      }),
    );
    await Promise.all(
      Array.from(WEB_PERMISSION_TO_PROTOCOL_PERMISSION.keys()).map(
        permission => {
          const result = this.userContext.setPermissions(
            origin,
            {
              name: permission,
            },
            permissionsSet.has(permission)
              ? Bidi.Permissions.PermissionState.Granted
              : Bidi.Permissions.PermissionState.Denied,
          );
          this.#overrides.push({origin, permission});
          // TODO: some permissions are outdated and setting them to denied does
          // not work.
          if (!permissionsSet.has(permission)) {
            return result.catch(debugError);
          }
          return result;
        },
      ),
    );
  }

  override async setPermission(
    origin: string | '*',
    ...permissions: Array<{
      permission: PermissionDescriptor;
      state: PermissionState;
    }>
  ): Promise<void> {
    if (origin === '*') {
      throw new UnsupportedOperation(
        'Origin (*) is not supported by WebDriver BiDi',
      );
    }
    await Promise.all(
      permissions.map(permission => {
        if (permission.permission.allowWithoutSanitization) {
          throw new UnsupportedOperation(
            'allowWithoutSanitization is not supported by WebDriver BiDi',
          );
        }
        if (permission.permission.panTiltZoom) {
          throw new UnsupportedOperation(
            'panTiltZoom is not supported by WebDriver BiDi',
          );
        }
        if (permission.permission.userVisibleOnly) {
          throw new UnsupportedOperation(
            'userVisibleOnly is not supported by WebDriver BiDi',
          );
        }
        return this.userContext.setPermissions(
          origin,
          {
            name: permission.permission.name,
          },
          permission.state as Bidi.Permissions.PermissionState,
        );
      }),
    );
  }

  override async clearPermissionOverrides(): Promise<void> {
    const promises = this.#overrides.map(({permission, origin}) => {
      return this.userContext
        .setPermissions(
          origin,
          {
            name: permission,
          },
          Bidi.Permissions.PermissionState.Prompt,
        )
        .catch(debugError);
    });
    this.#overrides = [];
    await Promise.all(promises);
  }

  override get id(): string | undefined {
    if (this.userContext.id === UserContext.DEFAULT) {
      return undefined;
    }
    return this.userContext.id;
  }

  override async cookies(): Promise<Cookie[]> {
    const cookies = await this.userContext.getCookies();
    return cookies.map(cookie => {
      return bidiToPuppeteerCookie(cookie, true);
    });
  }

  override async setCookie(...cookies: CookieData[]): Promise<void> {
    await Promise.all(
      cookies.map(async cookie => {
        const bidiCookie: Bidi.Storage.PartialCookie = {
          domain: cookie.domain,
          name: cookie.name,
          value: {
            type: 'string',
            value: cookie.value,
          },
          ...(cookie.path !== undefined ? {path: cookie.path} : {}),
          ...(cookie.httpOnly !== undefined ? {httpOnly: cookie.httpOnly} : {}),
          ...(cookie.secure !== undefined ? {secure: cookie.secure} : {}),
          ...(cookie.sameSite !== undefined
            ? {sameSite: convertCookiesSameSiteCdpToBiDi(cookie.sameSite)}
            : {}),
          ...{expiry: convertCookiesExpiryCdpToBiDi(cookie.expires)},
          // Chrome-specific properties.
          ...cdpSpecificCookiePropertiesFromPuppeteerToBidi(
            cookie,
            'sourceScheme',
            'priority',
            'url',
          ),
        };
        return await this.userContext.setCookie(
          bidiCookie,
          convertCookiesPartitionKeyFromPuppeteerToBiDi(cookie.partitionKey),
        );
      }),
    );
  }
}
