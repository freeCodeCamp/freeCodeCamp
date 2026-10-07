import type { ConsoleLevel } from '../types/instrument';
interface CaptureConsoleOptions {
    levels: ConsoleLevel[];
}
/**
 * Captures calls to the `console` API as logs in Sentry. Requires the `enableLogs` option to be enabled.
 *
 * @experimental This feature is experimental and may be changed or removed in future versions.
 *
 * By default the integration instruments `console.debug`, `console.info`, `console.warn`, `console.error`,
 * `console.log`, `console.trace`, and `console.assert`. You can use the `levels` option to customize which
 * levels are captured.
 *
 * @example
 *
 * ```ts
 * import * as Sentry from '@sentry/browser';
 *
 * Sentry.init({
 *   enableLogs: true,
 *   integrations: [Sentry.consoleLoggingIntegration({ levels: ['error', 'warn'] })],
 * });
 * ```
 */
export declare const consoleLoggingIntegration: (options?: Partial<CaptureConsoleOptions> | undefined) => import("..").Integration;
export {};
//# sourceMappingURL=console-integration.d.ts.map