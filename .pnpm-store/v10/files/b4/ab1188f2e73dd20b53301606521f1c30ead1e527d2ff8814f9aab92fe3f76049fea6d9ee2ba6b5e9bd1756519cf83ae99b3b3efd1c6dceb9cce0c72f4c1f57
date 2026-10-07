/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
import type * as Bidi from 'webdriver-bidi-protocol';
import type { BrowserContextOptions } from '../../api/Browser.js';
import { EventEmitter } from '../../common/EventEmitter.js';
import { disposeSymbol } from '../../util/disposable.js';
import type { BrowsingContext } from './BrowsingContext.js';
import { SharedWorkerRealm } from './Realm.js';
import type { Session } from './Session.js';
import { UserContext } from './UserContext.js';
/**
 * @internal
 */
export type AddPreloadScriptOptions = Omit<Bidi.Script.AddPreloadScriptParameters, 'functionDeclaration' | 'contexts'> & {
    contexts?: [BrowsingContext, ...BrowsingContext[]];
};
/**
 * @internal
 */
export declare class Browser extends EventEmitter<{
    /** Emitted before the browser closes. */
    closed: string;
    /** Emitted after the browser disconnects. */
    disconnected: string;
    /** Emitted when a shared worker is created. */
    sharedworker: SharedWorkerRealm;
}> {
    #private;
    static from(session: Session): Promise<Browser>;
    readonly session: Session;
    private constructor();
    get closed(): boolean;
    get defaultUserContext(): UserContext;
    get disconnected(): boolean;
    get disposed(): boolean;
    get userContexts(): Iterable<UserContext>;
    dispose(reason?: string, closed?: boolean): void;
    close(): Promise<void>;
    addPreloadScript(functionDeclaration: string, options?: AddPreloadScriptOptions): Promise<string>;
    removeIntercept(intercept: Bidi.Network.Intercept): Promise<void>;
    removePreloadScript(script: string): Promise<void>;
    createUserContext(options: BrowserContextOptions): Promise<UserContext>;
    installExtension(path: string): Promise<string>;
    uninstallExtension(id: string): Promise<void>;
    setClientWindowState(params: Bidi.Browser.SetClientWindowStateParameters): Promise<void>;
    getClientWindowInfo(windowId: string): Promise<Bidi.Browser.ClientWindowInfo>;
    [disposeSymbol](): void;
}
//# sourceMappingURL=Browser.d.ts.map