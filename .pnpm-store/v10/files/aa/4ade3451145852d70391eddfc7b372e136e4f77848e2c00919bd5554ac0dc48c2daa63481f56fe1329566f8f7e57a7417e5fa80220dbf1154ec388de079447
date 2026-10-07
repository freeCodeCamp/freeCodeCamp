/**
 * @license
 * Copyright 2022 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
import type { CreatePageOptions, Permission, PermissionDescriptor, PermissionState } from '../api/Browser.js';
import type { BrowserContextEvents } from '../api/BrowserContext.js';
import { BrowserContext } from '../api/BrowserContext.js';
import { type Page } from '../api/Page.js';
import type { Target } from '../api/Target.js';
import type { Cookie, CookieData } from '../common/Cookie.js';
import { EventEmitter } from '../common/EventEmitter.js';
import type { Viewport } from '../common/Viewport.js';
import type { BidiBrowser } from './Browser.js';
import { UserContext } from './core/UserContext.js';
import { BidiPage } from './Page.js';
import { BidiPageTarget } from './Target.js';
/**
 * @internal
 */
export interface BidiBrowserContextOptions {
    defaultViewport: Viewport | null;
}
/**
 * @internal
 */
export declare class BidiBrowserContext extends BrowserContext {
    #private;
    static from(browser: BidiBrowser, userContext: UserContext, options: BidiBrowserContextOptions): BidiBrowserContext;
    accessor trustedEmitter: EventEmitter<BrowserContextEvents>;
    readonly userContext: UserContext;
    private constructor();
    targets(): Target[];
    /**
     * @internal
     */
    getTargetForPage(page: BidiPage): BidiPageTarget | undefined;
    newPage(options?: CreatePageOptions): Promise<Page>;
    close(): Promise<void>;
    browser(): BidiBrowser;
    pages(_includeAll?: boolean): Promise<BidiPage[]>;
    overridePermissions(origin: string, permissions: Permission[]): Promise<void>;
    setPermission(origin: string | '*', ...permissions: Array<{
        permission: PermissionDescriptor;
        state: PermissionState;
    }>): Promise<void>;
    clearPermissionOverrides(): Promise<void>;
    get id(): string | undefined;
    cookies(): Promise<Cookie[]>;
    setCookie(...cookies: CookieData[]): Promise<void>;
}
//# sourceMappingURL=BrowserContext.d.ts.map