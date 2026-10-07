/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
import type * as Bidi from 'webdriver-bidi-protocol';
import { EventEmitter } from '../../common/EventEmitter.js';
import { disposeSymbol } from '../../util/disposable.js';
import { Browser } from './Browser.js';
import type { BidiEvents, Commands, Connection } from './Connection.js';
/**
 * @internal
 */
export declare class Session extends EventEmitter<BidiEvents & {
    ended: string;
}> implements Connection<BidiEvents & {
    ended: string;
}> {
    #private;
    static from(connection: Connection, capabilities: Bidi.Session.CapabilitiesRequest): Promise<Session>;
    readonly browser: Browser;
    accessor connection: Connection;
    private constructor();
    get capabilities(): Bidi.Session.NewResult['capabilities'];
    get disposed(): boolean;
    get ended(): boolean;
    get id(): string;
    private dispose;
    /**
     * Currently, there is a 1:1 relationship between the session and the
     * session. In the future, we might support multiple sessions and in that
     * case we always needs to make sure that the session for the right session
     * object is used, so we implement this method here, although it's not defined
     * in the spec.
     */
    send<T extends keyof Commands>(method: T, params: Commands[T]['params']): Promise<{
        result: Commands[T]['returnType'];
    }>;
    subscribe(events: [string, ...string[]], contexts?: [string, ...string[]]): Promise<void>;
    addIntercepts(events: [string, ...string[]], contexts?: [string, ...string[]]): Promise<void>;
    end(): Promise<void>;
    [disposeSymbol](): void;
}
//# sourceMappingURL=Session.d.ts.map