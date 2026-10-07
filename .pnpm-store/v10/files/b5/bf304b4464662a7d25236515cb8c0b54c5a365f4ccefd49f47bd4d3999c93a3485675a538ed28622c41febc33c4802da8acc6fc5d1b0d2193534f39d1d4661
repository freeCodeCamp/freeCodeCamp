import { CaptureContext, EventHint, ScopeContext } from '@sentry/core';
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
 * Parse either an `EventHint` directly, or convert a `CaptureContext` to an `EventHint`.
 * This is used to allow to update method signatures that used to accept a `CaptureContext` but should now accept an `EventHint`.
 */
export declare function parseEventHintOrCaptureContext(hint: ExclusiveEventHintOrCaptureContext | undefined): EventHint | undefined;
//# sourceMappingURL=prepareEvent.d.ts.map
