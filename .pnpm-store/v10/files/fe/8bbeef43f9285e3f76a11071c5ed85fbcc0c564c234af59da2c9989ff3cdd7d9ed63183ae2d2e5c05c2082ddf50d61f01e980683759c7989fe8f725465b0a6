/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
import { EventEmitter } from '../../common/EventEmitter.js';
import { disposeSymbol } from '../../util/disposable.js';
import type { BrowsingContext } from './BrowsingContext.js';
import type { Request } from './Request.js';
/**
 * @internal
 */
export interface NavigationInfo {
    url: string;
    timestamp: Date;
}
/**
 * @internal
 */
export declare class Navigation extends EventEmitter<{
    /** Emitted when navigation has a request associated with it. */
    request: Request;
    /** Emitted when fragment navigation occurred. */
    fragment: NavigationInfo;
    /** Emitted when navigation failed. */
    failed: NavigationInfo;
    /** Emitted when navigation was aborted. */
    aborted: NavigationInfo;
}> {
    #private;
    static from(context: BrowsingContext): Navigation;
    private constructor();
    get disposed(): boolean;
    get request(): Request | undefined;
    get navigation(): Navigation | undefined;
    private dispose;
    [disposeSymbol](): void;
}
//# sourceMappingURL=Navigation.d.ts.map