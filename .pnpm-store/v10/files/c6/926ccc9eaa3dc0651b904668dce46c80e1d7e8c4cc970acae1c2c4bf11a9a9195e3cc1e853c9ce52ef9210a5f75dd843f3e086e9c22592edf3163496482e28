import type { Event } from '../types/event';
import type { Mechanism } from '../types/mechanism';
import type { StackFrame } from '../types/stackframe';
interface CryptoInternal {
    randomUUID?(): string;
}
/**
 * UUID4 generator
 * @param crypto Object that provides the crypto API.
 * @returns string Generated UUID4.
 */
export declare function uuid4(crypto?: CryptoInternal | undefined): string;
/**
 * Extracts either message or type+value from an event that can be used for user-facing logs
 * @returns event's description
 */
export declare function getEventDescription(event: Event): string;
/**
 * Adds exception values, type and value to an synthetic Exception.
 * @param event The event to modify.
 * @param value Value of the exception.
 * @param type Type of the exception.
 * @hidden
 */
export declare function addExceptionTypeValue(event: Event, value?: string, type?: string): void;
/**
 * Adds exception mechanism data to a given event. Uses defaults if the second parameter is not passed.
 *
 * @param event The event to modify.
 * @param newMechanism Mechanism data to add to the event.
 * @hidden
 */
export declare function addExceptionMechanism(event: Event, newMechanism?: Partial<Mechanism>): void;
/**
 * Represents Semantic Versioning object
 */
interface SemVer {
    major?: number;
    minor?: number;
    patch?: number;
    prerelease?: string;
    buildmetadata?: string;
}
/**
 * Parses input into a SemVer interface
 * @param input string representation of a semver version
 */
export declare function parseSemver(input: string): SemVer;
/**
 * This function adds context (pre/post/line) lines to the provided frame
 *
 * @param lines string[] containing all lines
 * @param frame StackFrame that will be mutated
 * @param linesOfContext number of context lines we want to add pre/post
 */
export declare function addContextToFrame(lines: string[], frame: StackFrame, linesOfContext?: number): void;
/**
 * Checks whether or not we've already captured the given exception (note: not an identical exception - the very object
 * in question), and marks it captured if not.
 *
 * This is useful because it's possible for an error to get captured by more than one mechanism. After we intercept and
 * record an error, we rethrow it (assuming we've intercepted it before it's reached the top-level global handlers), so
 * that we don't interfere with whatever effects the error might have had were the SDK not there. At that point, because
 * the error has been rethrown, it's possible for it to bubble up to some other code we've instrumented. If it's not
 * caught after that, it will bubble all the way up to the global handlers (which of course we also instrument). This
 * function helps us ensure that even if we encounter the same error more than once, we only record it the first time we
 * see it.
 *
 * Note: It will ignore primitives (always return `false` and not mark them as seen), as properties can't be set on
 * them. {@link: Object.objectify} can be used on exceptions to convert any that are primitives into their equivalent
 * object wrapper forms so that this check will always work. However, because we need to flag the exact object which
 * will get rethrown, and because that rethrowing happens outside of the event processing pipeline, the objectification
 * must be done before the exception captured.
 *
 * @param A thrown exception to check or flag as having been seen
 * @returns `true` if the exception has already been captured, `false` if not (with the side effect of marking it seen)
 */
export declare function checkOrSetAlreadyCaught(exception: unknown): boolean;
/**
 * Checks whether we've already captured the given exception (note: not an identical exception - the very object).
 * It is considered already captured if it has the `__sentry_captured__` property set to `true`.
 *
 * @internal Only considered for internal usage
 */
export declare function isAlreadyCaptured(exception: unknown): boolean | void;
export {};
//# sourceMappingURL=misc.d.ts.map