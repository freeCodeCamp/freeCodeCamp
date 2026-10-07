import { Event } from '../types/event';
import { StackFrame } from '../types/stackframe';
import { StackLineParser, StackParser } from '../types/stacktrace';
import { VNode, VueViewModel } from '../types/vue';
export declare const UNKNOWN_FUNCTION = "?";
/**
 * Creates a stack parser with the supplied line parsers
 *
 * StackFrames are returned in the correct order for Sentry Exception
 * frames and with Sentry SDK internal frames removed from the top and bottom
 *
 */
export declare function createStackParser(...parsers: StackLineParser[]): StackParser;
/**
 * Gets a stack parser implementation from Options.stackParser
 * @see Options
 *
 * If options contains an array of line parsers, it is converted into a parser
 */
export declare function stackParserFromStackParserOptions(stackParser: StackParser | StackLineParser[]): StackParser;
/**
 * Removes Sentry frames from the top and bottom of the stack if present and enforces a limit of max number of frames.
 * Assumes stack input is ordered from top to bottom and returns the reverse representation so call site of the
 * function that caused the crash is the last frame in the array.
 * @hidden
 */
export declare function stripSentryFramesAndReverse(stack: ReadonlyArray<StackFrame>): StackFrame[];
/**
 * Safely extract function name from itself
 */
export declare function getFunctionName(fn: unknown): string;
/**
 * Get's stack frames from an event without needing to check for undefined properties.
 */
export declare function getFramesFromEvent(event: Event): StackFrame[] | undefined;
/**
 * Get the internal name of an internal Vue value, to represent it in a stacktrace.
 *
 * @param value The value to get the internal name of.
 * @deprecated This is Vue-specific and will be removed from `@sentry/core` in a future major version.
 * The `@sentry/vue` SDK inlines its own equivalent — there's no replacement export from core.
 */
export declare function getVueInternalName(value: VueViewModel | VNode): string;
/**
 * Normalizes stack line paths by removing file:// prefix and leading slashes for Windows paths
 */
export declare function normalizeStackTracePath(path: string | undefined): string | undefined;
//# sourceMappingURL=stacktrace.d.ts.map
