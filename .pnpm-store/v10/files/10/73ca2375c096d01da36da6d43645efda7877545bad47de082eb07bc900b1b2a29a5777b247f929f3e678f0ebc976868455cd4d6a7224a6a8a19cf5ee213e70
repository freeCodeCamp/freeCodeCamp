import { ConsoleLevel } from '../types/instrument';
interface ConsoleIntegrationOptions {
    levels: ConsoleLevel[];
    /**
     * Filter out console messages that match the given strings or regular expressions.
     * These will neither be passed to the handler, and they will also not be logged to the user, unless they have debug enabled.
     */
    filter?: (string | RegExp)[];
}
/**
 * Captures calls to the `console` API as breadcrumbs in Sentry.
 *
 * By default the integration instruments `console.debug`, `console.info`, `console.warn`, `console.error`,
 * `console.log`, `console.trace`, and `console.assert`. You can use the `levels` option to customize which
 * levels are captured.
 *
 * @example
 *
 * ```js
 * Sentry.init({
 *   integrations: [Sentry.consoleIntegration({ levels: ['error', 'warn'] })],
 * });
 * ```
 */
export declare const consoleIntegration: (options?: Partial<ConsoleIntegrationOptions> | undefined) => import("..").Integration;
/**
 * Capture a console breadcrumb.
 *
 * Exported just for tests.
 */
export declare function addConsoleBreadcrumb(level: ConsoleLevel, args: unknown[]): void;
export {};
//# sourceMappingURL=console.d.ts.map
