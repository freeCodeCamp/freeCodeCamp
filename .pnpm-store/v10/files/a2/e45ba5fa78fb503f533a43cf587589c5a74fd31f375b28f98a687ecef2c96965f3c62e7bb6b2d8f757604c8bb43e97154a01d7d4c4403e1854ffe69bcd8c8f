/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */

import type {Protocol} from 'devtools-protocol';

import type {CreatePageOptions} from '../api/Browser.js';
import {
  WEB_PERMISSION_TO_PROTOCOL_PERMISSION,
  type Permission,
  type PermissionDescriptor,
  type PermissionState,
} from '../api/Browser.js';
import {BrowserContext} from '../api/BrowserContext.js';
import type {Page} from '../api/Page.js';
import type {Cookie, CookieData} from '../common/Cookie.js';
import type {DownloadBehavior} from '../common/DownloadBehavior.js';
import {assert} from '../util/assert.js';

import type {CdpBrowser} from './Browser.js';
import type {Connection} from './Connection.js';
import {
  convertCookiesPartitionKeyFromPuppeteerToCdp,
  convertSameSiteFromPuppeteerToCdp,
} from './Page.js';
import type {CdpTarget} from './Target.js';

/**
 * @internal
 */
export class CdpBrowserContext extends BrowserContext {
  #connection: Connection;
  #browser: CdpBrowser;
  #id?: string;

  constructor(connection: Connection, browser: CdpBrowser, contextId?: string) {
    super();
    this.#connection = connection;
    this.#browser = browser;
    this.#id = contextId;
  }

  override get id(): string | undefined {
    return this.#id;
  }

  override targets(): CdpTarget[] {
    return this.#browser.targets().filter(target => {
      return target.browserContext() === this;
    });
  }

  override async pages(includeAll = false): Promise<Page[]> {
    const pages = await Promise.all(
      this.targets()
        .filter(target => {
          return (
            target.type() === 'page' ||
            ((target.type() === 'other' || includeAll) &&
              this.#browser._getIsPageTargetCallback()?.(target))
          );
        })
        .map(target => {
          return target.page();
        }),
    );
    return pages.filter(page => {
      return !!page;
    });
  }

  override async overridePermissions(
    origin: string,
    permissions: Permission[],
  ): Promise<void> {
    const protocolPermissions = permissions.map(permission => {
      const protocolPermission =
        WEB_PERMISSION_TO_PROTOCOL_PERMISSION.get(permission);
      if (!protocolPermission) {
        throw new Error('Unknown permission: ' + permission);
      }
      return protocolPermission;
    });
    await this.#connection.send('Browser.grantPermissions', {
      origin,
      browserContextId: this.#id || undefined,
      permissions: protocolPermissions,
    });
  }

  override async setPermission(
    origin: string | '*',
    ...permissions: Array<{
      permission: PermissionDescriptor;
      state: PermissionState;
    }>
  ): Promise<void> {
    await Promise.all(
      permissions.map(async permission => {
        const protocolPermission: Protocol.Browser.PermissionDescriptor = {
          name: permission.permission.name,
          userVisibleOnly: permission.permission.userVisibleOnly,
          sysex: permission.permission.sysex,
          allowWithoutSanitization:
            permission.permission.allowWithoutSanitization,
          panTiltZoom: permission.permission.panTiltZoom,
        };
        await this.#connection.send('Browser.setPermission', {
          origin: origin === '*' ? undefined : origin,
          browserContextId: this.#id || undefined,
          permission: protocolPermission,
          setting: permission.state as Protocol.Browser.PermissionSetting,
        });
      }),
    );
  }

  override async clearPermissionOverrides(): Promise<void> {
    await this.#connection.send('Browser.resetPermissions', {
      browserContextId: this.#id || undefined,
    });
  }

  override async newPage(options?: CreatePageOptions): Promise<Page> {
    using _guard = await this.waitForScreenshotOperations();
    return await this.#browser._createPageInContext(this.#id, options);
  }

  override browser(): CdpBrowser {
    return this.#browser;
  }

  override async close(): Promise<void> {
    assert(this.#id, 'Default BrowserContext cannot be closed!');
    await this.#browser._disposeContext(this.#id);
  }

  override async cookies(): Promise<Cookie[]> {
    const {cookies} = await this.#connection.send('Storage.getCookies', {
      browserContextId: this.#id,
    });
    return cookies.map(cookie => {
      return {
        ...cookie,
        partitionKey: cookie.partitionKey
          ? {
              sourceOrigin: cookie.partitionKey.topLevelSite,
              hasCrossSiteAncestor: cookie.partitionKey.hasCrossSiteAncestor,
            }
          : undefined,
      };
    });
  }

  override async setCookie(...cookies: CookieData[]): Promise<void> {
    return await this.#connection.send('Storage.setCookies', {
      browserContextId: this.#id,
      cookies: cookies.map(cookie => {
        return {
          ...cookie,
          partitionKey: convertCookiesPartitionKeyFromPuppeteerToCdp(
            cookie.partitionKey,
          ),
          sameSite: convertSameSiteFromPuppeteerToCdp(cookie.sameSite),
        };
      }),
    });
  }

  public async setDownloadBehavior(
    downloadBehavior: DownloadBehavior,
  ): Promise<void> {
    await this.#connection.send('Browser.setDownloadBehavior', {
      behavior: downloadBehavior.policy,
      downloadPath: downloadBehavior.downloadPath,
      browserContextId: this.#id,
    });
  }
}
