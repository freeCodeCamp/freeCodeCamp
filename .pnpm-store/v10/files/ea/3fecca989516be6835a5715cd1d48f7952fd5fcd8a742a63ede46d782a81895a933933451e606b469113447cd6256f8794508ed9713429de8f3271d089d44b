/**
 * Creates a function from a string.
 *
 * @internal
 */
export declare const createFunction: (functionValue: string) => ((...args: unknown[]) => unknown);
/**
 * @internal
 */
export declare function stringifyFunction(fn: (...args: never) => unknown): string;
/**
 * Replaces `PLACEHOLDER`s with the given replacements.
 *
 * All replacements must be valid JS code.
 *
 * @example
 *
 * ```ts
 * interpolateFunction(() => PLACEHOLDER('test'), {test: 'void 0'});
 * // Equivalent to () => void 0
 * ```
 *
 * @internal
 */
export declare const interpolateFunction: <T extends (...args: never[]) => unknown>(fn: T, replacements: Record<string, string>) => T;
declare global {
    /**
     * Used for interpolation with {@link interpolateFunction}.
     *
     * @internal
     */
    function PLACEHOLDER<T>(name: string): T;
}
//# sourceMappingURL=Function.d.ts.map