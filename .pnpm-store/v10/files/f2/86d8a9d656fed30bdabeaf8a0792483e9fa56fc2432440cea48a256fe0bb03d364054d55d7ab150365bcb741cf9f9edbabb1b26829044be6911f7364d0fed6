import type { Client } from '../client';
import type { Event, EventHint } from '../types/event';
import type { Exception } from '../types/exception';
import type { ParameterizedString } from '../types/parameterize';
import type { SeverityLevel } from '../types/severity';
import type { StackFrame } from '../types/stackframe';
import type { StackParser } from '../types/stacktrace';
/**
 * Extracts stack frames from the error.stack string
 */
export declare function parseStackFrames(stackParser: StackParser, error: Error): StackFrame[];
/**
 * Enhances the error message with the hostname for better Sentry error reporting.
 * This allows third-party packages to still match on the original error message,
 * while Sentry gets the enhanced version with context.
 *
 * Only used internally
 * @hidden
 */
export declare function _enhanceErrorWithSentryInfo<T extends Error>(error: T): string;
/**
 * Extracts stack frames from the error and builds a Sentry Exception
 */
export declare function exceptionFromError(stackParser: StackParser, error: Error): Exception;
/**
 * Builds and Event from a Exception
 * @hidden
 */
export declare function eventFromUnknownInput(client: Client, stackParser: StackParser, exception: unknown, hint?: EventHint): Event;
/**
 * Builds and Event from a Message
 * @hidden
 */
export declare function eventFromMessage(stackParser: StackParser, message: ParameterizedString, level?: SeverityLevel, hint?: EventHint, attachStacktrace?: boolean): Event;
//# sourceMappingURL=eventbuilder.d.ts.map