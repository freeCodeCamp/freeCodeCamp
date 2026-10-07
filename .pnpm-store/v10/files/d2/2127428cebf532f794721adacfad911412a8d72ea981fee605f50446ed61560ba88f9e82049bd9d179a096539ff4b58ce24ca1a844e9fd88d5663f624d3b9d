import type { ConsoleLevel } from '@sentry/core';
interface ConsoleIntegrationOptions {
    levels: ConsoleLevel[];
    /**
     * Filter out console messages that match the given strings or regular expressions.
     * These will neither be passed to the handler, and they will also not be logged to the user, unless they have debug enabled.
     */
    filter?: (string | RegExp)[];
}
/**
 * Node-specific console integration that captures breadcrumbs and handles
 * the AWS Lambda runtime replacing console methods after our patch.
 *
 * In Lambda, console methods are patched via `Object.defineProperty` so that
 * external replacements (by the Lambda runtime) are absorbed as the delegate
 * while our wrapper stays in place. Outside Lambda, this delegates entirely
 * to the core `consoleIntegration` which uses the simpler `fill`-based patch.
 */
export declare const consoleIntegration: (options?: Partial<ConsoleIntegrationOptions> | undefined) => import("@sentry/core").Integration;
export {};
//# sourceMappingURL=console.d.ts.map