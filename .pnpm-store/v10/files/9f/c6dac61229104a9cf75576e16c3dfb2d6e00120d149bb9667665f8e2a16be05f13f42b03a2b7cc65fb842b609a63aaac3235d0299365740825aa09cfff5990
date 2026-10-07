import { Event, EventHint } from '../types/event';
interface ZodErrorsOptions {
    key?: string;
    /**
     * Limits the number of Zod errors inlined in each Sentry event.
     *
     * @default 10
     */
    limit?: number;
    /**
     * Save full list of Zod issues as an attachment in Sentry
     *
     * @default false
     */
    saveZodIssuesAsAttachment?: boolean;
}
/**
 * Simplified ZodIssue type definition
 */
interface ZodIssue {
    path: (string | number)[];
    message?: string;
    expected?: unknown;
    received?: unknown;
    unionErrors?: unknown[];
    keys?: unknown[];
    invalid_literal?: unknown;
}
interface ZodError extends Error {
    issues: ZodIssue[];
}
type SingleLevelZodIssue<T extends ZodIssue> = {
    [P in keyof T]: T[P] extends string | number | undefined ? T[P] : T[P] extends unknown[] ? string | undefined : unknown;
};
/**
 * Formats child objects or arrays to a string
 * that is preserved when sent to Sentry.
 *
 * Without this, we end up with something like this in Sentry:
 *
 * [
 *  [Object],
 *  [Object],
 *  [Object],
 *  [Object]
 * ]
 */
export declare function flattenIssue(issue: ZodIssue): SingleLevelZodIssue<ZodIssue>;
/**
 * Takes ZodError issue path array and returns a flattened version as a string.
 * This makes it easier to display paths within a Sentry error message.
 *
 * Array indexes are normalized to reduce duplicate entries
 *
 * @param path ZodError issue path
 * @returns flattened path
 *
 * @example
 * flattenIssuePath([0, 'foo', 1, 'bar']) // -> '<array>.foo.<array>.bar'
 */
export declare function flattenIssuePath(path: Array<string | number>): string;
/**
 * Zod error message is a stringified version of ZodError.issues
 * This doesn't display well in the Sentry UI. Replace it with something shorter.
 */
export declare function formatIssueMessage(zodError: ZodError): string;
/**
 * Applies ZodError issues to an event extra and replaces the error message
 */
export declare function applyZodErrorsToEvent(limit: number, saveZodIssuesAsAttachment: boolean | undefined, event: Event, hint: EventHint): Event;
/**
 * Sentry integration to process Zod errors, making them easier to work with in Sentry.
 */
export declare const zodErrorsIntegration: (options?: ZodErrorsOptions | undefined) => import("..").Integration;
export {};
//# sourceMappingURL=zoderrors.d.ts.map
