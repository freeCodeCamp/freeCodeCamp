import type { CaptureContext, SdkProcessingMetadata } from '../scope';
import type { Attachment } from './attachment';
import type { Breadcrumb } from './breadcrumb';
import type { Contexts } from './context';
import type { DebugMeta } from './debugMeta';
import type { Exception } from './exception';
import type { Extras } from './extra';
import type { Measurements } from './measurement';
import type { Mechanism } from './mechanism';
import type { Primitive } from './misc';
import type { RequestEventData } from './request';
import type { SdkInfo } from './sdkinfo';
import type { SeverityLevel } from './severity';
import type { SpanJSON } from './span';
import type { Thread } from './thread';
import type { TransactionSource } from './transaction';
import type { User } from './user';
/** An event to be sent to Sentry. */
export interface Event {
    event_id?: string;
    message?: string;
    logentry?: {
        message?: string;
        params?: unknown[];
    };
    timestamp?: number;
    start_timestamp?: number;
    level?: SeverityLevel;
    platform?: string;
    logger?: string;
    server_name?: string;
    release?: string;
    dist?: string;
    environment?: string;
    sdk?: SdkInfo;
    request?: RequestEventData;
    transaction?: string;
    modules?: {
        [key: string]: string;
    };
    fingerprint?: string[];
    exception?: {
        values?: Exception[];
    };
    breadcrumbs?: Breadcrumb[];
    contexts?: Contexts;
    tags?: {
        [key: string]: Primitive;
    };
    extra?: Extras;
    user?: User;
    type?: EventType;
    spans?: SpanJSON[];
    measurements?: Measurements;
    debug_meta?: DebugMeta;
    sdkProcessingMetadata?: SdkProcessingMetadata;
    transaction_info?: {
        source: TransactionSource;
    };
    threads?: {
        values: Thread[];
    };
}
/**
 * The type of an `Event`.
 * Note that `ErrorEvent`s do not have a type (hence its undefined),
 * while all other events are required to have one.
 */
export type EventType = 'transaction' | 'profile' | 'replay_event' | 'feedback' | undefined;
export interface ErrorEvent extends Event {
    type: undefined;
}
export interface TransactionEvent extends Event {
    type: 'transaction';
}
/** JSDoc */
export interface EventHint {
    event_id?: string;
    captureContext?: CaptureContext;
    mechanism?: Partial<Mechanism>;
    syntheticException?: Error | null;
    originalException?: unknown;
    attachments?: Attachment[];
    data?: any;
    integrations?: string[];
}
//# sourceMappingURL=event.d.ts.map