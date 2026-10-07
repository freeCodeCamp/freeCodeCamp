/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
import type * as Bidi from 'webdriver-bidi-protocol';
import { EventEmitter } from '../../common/EventEmitter.js';
import { disposeSymbol } from '../../util/disposable.js';
import type { Browser } from './Browser.js';
import type { GetCookiesOptions } from './BrowsingContext.js';
import { BrowsingContext } from './BrowsingContext.js';
/**
 * @internal
 */
export type CreateBrowsingContextOptions = Omit<Bidi.BrowsingContext.CreateParameters, 'type' | 'referenceContext'> & {
    referenceContext?: BrowsingContext;
    background?: boolean;
};
/**
 * @internal
 */
export declare class UserContext extends EventEmitter<{
    /**
     * Emitted when a new browsing context is created.
     */
    browsingcontext: BrowsingContext;
    /**
     * Emitted when the user context is closed.
     */
    closed: string;
}> {
    #private;
    static DEFAULT: "default";
    static create(browser: Browser, id: string): UserContext;
    readonly browser: Browser;
    private constructor();
    get browsingContexts(): Iterable<BrowsingContext>;
    get closed(): boolean;
    get disposed(): boolean;
    get id(): string;
    private dispose;
    createBrowsingContext(type: Bidi.BrowsingContext.CreateType, options?: CreateBrowsingContextOptions): Promise<BrowsingContext>;
    remove(): Promise<void>;
    getCookies(options?: GetCookiesOptions, sourceOrigin?: string | undefined): Promise<Bidi.Network.Cookie[]>;
    setCookie(cookie: Bidi.Storage.PartialCookie, sourceOrigin?: string): Promise<void>;
    setPermissions(origin: string, descriptor: Bidi.Permissions.PermissionDescriptor, state: Bidi.Permissions.PermissionState): Promise<void>;
    [disposeSymbol](): void;
}
//# sourceMappingURL=UserContext.d.ts.map