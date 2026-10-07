/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
import * as Bidi from 'webdriver-bidi-protocol';
import { EventEmitter } from '../../common/EventEmitter.js';
import { disposeSymbol } from '../../util/disposable.js';
import type { BrowsingContext } from './BrowsingContext.js';
/**
 * @internal
 */
export type HandleOptions = Omit<Bidi.BrowsingContext.HandleUserPromptParameters, 'context'>;
/**
 * @internal
 */
export type UserPromptResult = Omit<Bidi.BrowsingContext.UserPromptClosedParameters, 'context'>;
/**
 * @internal
 */
export declare class UserPrompt extends EventEmitter<{
    /** Emitted when the user prompt is handled. */
    handled: UserPromptResult;
    /** Emitted when the user prompt is closed. */
    closed: string;
}> {
    #private;
    static from(browsingContext: BrowsingContext, info: Bidi.BrowsingContext.UserPromptOpenedParameters): UserPrompt;
    readonly browsingContext: BrowsingContext;
    readonly info: Bidi.BrowsingContext.UserPromptOpenedParameters;
    private constructor();
    get closed(): boolean;
    get disposed(): boolean;
    get handled(): boolean;
    get result(): UserPromptResult | undefined;
    private dispose;
    handle(options?: HandleOptions): Promise<UserPromptResult>;
    [disposeSymbol](): void;
}
//# sourceMappingURL=UserPrompt.d.ts.map