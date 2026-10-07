import type { DsnComponents } from '../types/dsn';
import type { LogContainerItem, LogEnvelope } from '../types/envelope';
import type { SerializedLog } from '../types/log';
import type { SdkMetadata } from '../types/sdkmetadata';
/**
 * Creates a log container envelope item for a list of logs.
 *
 * @param items - The logs to include in the envelope.
 * @param inferUserData - If true, tells Relay to infer the end-user IP and User-Agent from the incoming request.
 *                        Only emitted as `ingest_settings` in browser environments.
 * @returns The created log container envelope item.
 */
export declare function createLogContainerEnvelopeItem(items: Array<SerializedLog>, inferUserData?: boolean): LogContainerItem;
/**
 * Creates an envelope for a list of logs.
 *
 * Logs from multiple traces can be included in the same envelope.
 *
 * @param logs - The logs to include in the envelope.
 * @param metadata - The metadata to include in the envelope.
 * @param tunnel - The tunnel to include in the envelope.
 * @param dsn - The DSN to include in the envelope.
 * @param inferUserData - If true, tells Relay to infer the end-user IP and User-Agent from the incoming request.
 * @returns The created envelope.
 */
export declare function createLogEnvelope(logs: Array<SerializedLog>, metadata?: SdkMetadata, tunnel?: string, dsn?: DsnComponents, inferUserData?: boolean): LogEnvelope;
//# sourceMappingURL=envelope.d.ts.map