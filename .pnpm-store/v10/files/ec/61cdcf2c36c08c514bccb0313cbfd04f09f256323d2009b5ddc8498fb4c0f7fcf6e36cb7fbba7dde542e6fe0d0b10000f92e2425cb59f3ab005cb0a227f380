import type { Log, LogSeverityLevel, ParameterizedString, Scope } from '@sentry/core';
/**
 * Additional metadata to capture the log with.
 */
interface CaptureLogMetadata {
    scope?: Scope;
}
type CaptureLogArgWithTemplate = [
    messageTemplate: string,
    messageParams: Array<unknown>,
    attributes?: Log['attributes'],
    metadata?: CaptureLogMetadata
];
type CaptureLogArgWithoutTemplate = [
    message: ParameterizedString,
    attributes?: Log['attributes'],
    metadata?: CaptureLogMetadata
];
export type CaptureLogArgs = CaptureLogArgWithTemplate | CaptureLogArgWithoutTemplate;
/**
 * Capture a log with the given level.
 *
 * @param level - The level of the log.
 * @param message - The message to log.
 * @param attributes - Arbitrary structured data that stores information about the log - e.g., userId: 100.
 */
export declare function captureLog(level: LogSeverityLevel, ...args: CaptureLogArgs): void;
export {};
//# sourceMappingURL=capture.d.ts.map