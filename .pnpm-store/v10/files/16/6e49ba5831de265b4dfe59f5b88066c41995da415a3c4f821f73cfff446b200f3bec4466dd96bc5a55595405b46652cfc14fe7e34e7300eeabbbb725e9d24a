import type { Client } from '../client';
import type { CaptureContext, ScopeContext } from '../scope';
import { Scope } from '../scope';
import type { Event, EventHint } from '../types/event';
import type { ClientOptions } from '../types/options';
import type { StackParser } from '../types/stacktrace';
/**
 * This type makes sure that we get either a CaptureContext, OR an EventHint.
 * It does not allow mixing them, which could lead to unexpected outcomes, e.g. this is disallowed:
 * { user: { id: '123' }, mechanism: { handled: false } }
 */
export type ExclusiveEventHintOrCaptureContext = (CaptureContext & Partial<{
    [key in keyof EventHint]: never;
}>) | (EventHint & Partial<{
    [key in keyof ScopeContext]: never;
}>);
/**
 * Adds common information to events.
 *
 * The information includes release and environment from `options`,
 * breadcrumbs and context (extra, tags and user) from the scope.
 *
 * Information that is already present in the event is never overwritten. For
 * nested objects, such as the context, keys are merged.
 *
 * @param event The original event.
 * @param hint May contain additional information about the original exception.
 * @param scope A scope containing event metadata.
 * @returns A new event with more information.
 * @hidden
 */
export declare function prepareEvent(options: ClientOptions, event: Event, hint: EventHint, scope?: Scope, client?: Client, isolationScope?: Scope): PromiseLike<Event | null>;
/**
 * Enhances event using the client configuration.
 * It takes care of all "static" values like environment, release and `dist`,
 * as well as truncating overly long values.
 *
 * Only exported for tests.
 *
 * @param event event instance to be enhanced
 */
export declare function applyClientOptions(event: Event, options: ClientOptions): void;
/**
 * Puts debug IDs into the stack frames of an error event.
 */
export declare function applyDebugIds(event: Event, stackParser: StackParser): void;
/**
 * Moves debug IDs from the stack frames of an error event into the debug_meta field.
 */
export declare function applyDebugMeta(event: Event): void;
/**
 * Parse either an `EventHint` directly, or convert a `CaptureContext` to an `EventHint`.
 * This is used to allow to update method signatures that used to accept a `CaptureContext` but should now accept an `EventHint`.
 */
export declare function parseEventHintOrCaptureContext(hint: ExclusiveEventHintOrCaptureContext | undefined): EventHint | undefined;
//# sourceMappingURL=prepareEvent.d.ts.map