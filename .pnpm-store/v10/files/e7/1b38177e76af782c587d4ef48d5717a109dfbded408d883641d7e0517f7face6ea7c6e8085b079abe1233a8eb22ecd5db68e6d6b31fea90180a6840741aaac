import type { Client } from '../client';
import type { Log, SerializedLog } from '../types/log';
/**
 * Captures a serialized log event and adds it to the log buffer for the given client.
 *
 * @param client - A client. Uses the current client if not provided.
 * @param serializedLog - The serialized log event to capture.
 *
 * @experimental This method will experience breaking changes. This is not yet part of
 * the stable Sentry SDK API and can be changed or removed without warning.
 */
export declare function _INTERNAL_captureSerializedLog(client: Client, serializedLog: SerializedLog): void;
/**
 * Captures a log event and sends it to Sentry.
 *
 * @param log - The log event to capture.
 * @param scope - A scope. Uses the current scope if not provided.
 * @param client - A client. Uses the current client if not provided.
 * @param captureSerializedLog - A function to capture the serialized log.
 *
 * @experimental This method will experience breaking changes. This is not yet part of
 * the stable Sentry SDK API and can be changed or removed without warning.
 */
export declare function _INTERNAL_captureLog(beforeLog: Log, currentScope?: import("..").Scope, captureSerializedLog?: (client: Client, log: SerializedLog) => void): void;
/**
 * Flushes the logs buffer to Sentry.
 *
 * @param client - A client.
 * @param maybeLogBuffer - A log buffer. Uses the log buffer for the given client if not provided.
 *
 * @experimental This method will experience breaking changes. This is not yet part of
 * the stable Sentry SDK API and can be changed or removed without warning.
 */
export declare function _INTERNAL_flushLogsBuffer(client: Client, maybeLogBuffer?: Array<SerializedLog>): void;
/**
 * Returns the log buffer for a given client.
 *
 * Exported for testing purposes.
 *
 * @param client - The client to get the log buffer for.
 * @returns The log buffer for the given client.
 */
export declare function _INTERNAL_getLogBuffer(client: Client): Array<SerializedLog> | undefined;
/**
 * Replaces unpaired UTF-16 surrogates with U+FFFD (replacement character).
 *
 * Lone surrogates (U+D800–U+DFFF not part of a valid pair) cause `serde_json`
 * on the server to reject the entire log batch when they appear in
 * JSON-escaped form (e.g. `\uD800`). Replacing them at the SDK level ensures
 * only the offending characters are lost instead of the whole payload.
 *
 * Uses the native `String.prototype.toWellFormed()` when available
 * (Node 20+, Chrome 111+, Safari 15.4+, Firefox 119+, Hermes).
 * On older runtimes without native support, returns the string as-is.
 *
 * Exported for testing
 */
export declare function _removeLoneSurrogates(str: string): string;
//# sourceMappingURL=internal.d.ts.map