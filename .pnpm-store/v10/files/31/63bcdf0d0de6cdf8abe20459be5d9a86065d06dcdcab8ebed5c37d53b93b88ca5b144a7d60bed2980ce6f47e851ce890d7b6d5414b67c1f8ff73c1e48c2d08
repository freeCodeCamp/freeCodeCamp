import type { AttachmentType } from './attachment';
import type { SerializedCheckIn } from './checkin';
import type { ClientReport } from './clientreport';
import type { LegacyCSPReport } from './csp';
import type { DsnComponents } from './dsn';
import type { Event } from './event';
import type { FeedbackEvent, UserFeedback } from './feedback';
import type { SerializedLogContainer } from './log';
import type { SerializedMetricContainer } from './metric';
import type { Profile, ProfileChunk } from './profiling';
import type { ReplayEvent, ReplayRecordingData } from './replay';
import type { SdkInfo } from './sdkinfo';
import type { SerializedSession, SessionAggregates } from './session';
import type { SerializedStreamedSpanContainer, SpanJSON } from './span';
export type DynamicSamplingContext = {
    trace_id: string;
    public_key: DsnComponents['publicKey'];
    sample_rate?: string;
    release?: string;
    environment?: string;
    transaction?: string;
    replay_id?: string;
    sampled?: string;
    sample_rand?: string;
    org_id?: string;
};
export type EnvelopeItemType = 'client_report' | 'user_report' | 'feedback' | 'session' | 'sessions' | 'transaction' | 'attachment' | 'event' | 'profile' | 'profile_chunk' | 'replay_event' | 'replay_recording' | 'check_in' | 'span' | 'log' | 'metric' | 'trace_metric' | 'raw_security';
export type BaseEnvelopeHeaders = {
    [key: string]: unknown;
    dsn?: string;
    sdk?: SdkInfo;
};
export type BaseEnvelopeItemHeaders = {
    [key: string]: unknown;
    type: EnvelopeItemType;
    length?: number;
};
type BaseEnvelopeItem<ItemHeader, P> = [ItemHeader & BaseEnvelopeItemHeaders, P];
type BaseEnvelope<EnvelopeHeader, Item> = [
    EnvelopeHeader & BaseEnvelopeHeaders,
    Array<Item & BaseEnvelopeItem<BaseEnvelopeItemHeaders, unknown>>
];
type EventItemHeaders = {
    type: 'event' | 'transaction' | 'profile' | 'feedback';
};
type AttachmentItemHeaders = {
    type: 'attachment';
    length: number;
    filename: string;
    content_type?: string;
    attachment_type?: AttachmentType;
};
type UserFeedbackItemHeaders = {
    type: 'user_report';
};
type FeedbackItemHeaders = {
    type: 'feedback';
};
type SessionItemHeaders = {
    type: 'session';
};
type SessionAggregatesItemHeaders = {
    type: 'sessions';
};
type ClientReportItemHeaders = {
    type: 'client_report';
};
type ReplayEventItemHeaders = {
    type: 'replay_event';
};
type ReplayRecordingItemHeaders = {
    type: 'replay_recording';
    length: number;
};
type CheckInItemHeaders = {
    type: 'check_in';
};
type ProfileItemHeaders = {
    type: 'profile';
};
type ProfileChunkItemHeaders = {
    type: 'profile_chunk';
};
type SpanItemHeaders = {
    type: 'span';
};
type SpanContainerItemHeaders = {
    /**
     * Same as v1 span item type but this envelope is distinguished by {@link SpanContainerItemHeaders.content_type}.
     */
    type: 'span';
    /**
     * The number of span items in the container. This must be the same as the number of span items in the payload.
     */
    item_count: number;
    /**
     * The content type of the span items. This must be `application/vnd.sentry.items.span.v2+json`.
     * (the presence of this field also distinguishes the span item from the v1 span item)
     */
    content_type: 'application/vnd.sentry.items.span.v2+json';
};
type LogContainerItemHeaders = {
    type: 'log';
    /**
     * The number of log items in the container. This must be the same as the number of log items in the payload.
     */
    item_count: number;
    /**
     * The content type of the log items. This must be `application/vnd.sentry.items.log+json`.
     */
    content_type: 'application/vnd.sentry.items.log+json';
};
type MetricContainerItemHeaders = {
    type: 'trace_metric';
    item_count: number;
    content_type: 'application/vnd.sentry.items.trace-metric+json';
};
type RawSecurityHeaders = {
    type: 'raw_security';
    sentry_release?: string;
    sentry_environment?: string;
};
export type EventItem = BaseEnvelopeItem<EventItemHeaders, Event>;
export type AttachmentItem = BaseEnvelopeItem<AttachmentItemHeaders, string | Uint8Array>;
export type UserFeedbackItem = BaseEnvelopeItem<UserFeedbackItemHeaders, UserFeedback>;
export type SessionItem = BaseEnvelopeItem<SessionItemHeaders, SerializedSession> | BaseEnvelopeItem<SessionAggregatesItemHeaders, SessionAggregates>;
export type ClientReportItem = BaseEnvelopeItem<ClientReportItemHeaders, ClientReport>;
export type CheckInItem = BaseEnvelopeItem<CheckInItemHeaders, SerializedCheckIn>;
type ReplayEventItem = BaseEnvelopeItem<ReplayEventItemHeaders, ReplayEvent>;
type ReplayRecordingItem = BaseEnvelopeItem<ReplayRecordingItemHeaders, ReplayRecordingData>;
export type FeedbackItem = BaseEnvelopeItem<FeedbackItemHeaders, FeedbackEvent>;
export type ProfileItem = BaseEnvelopeItem<ProfileItemHeaders, Profile>;
export type ProfileChunkItem = BaseEnvelopeItem<ProfileChunkItemHeaders, ProfileChunk>;
export type SpanItem = BaseEnvelopeItem<SpanItemHeaders, Partial<SpanJSON>>;
export type SpanContainerItem = BaseEnvelopeItem<SpanContainerItemHeaders, SerializedStreamedSpanContainer>;
export type LogContainerItem = BaseEnvelopeItem<LogContainerItemHeaders, SerializedLogContainer>;
export type MetricContainerItem = BaseEnvelopeItem<MetricContainerItemHeaders, SerializedMetricContainer>;
export type RawSecurityItem = BaseEnvelopeItem<RawSecurityHeaders, LegacyCSPReport>;
export type EventEnvelopeHeaders = {
    event_id: string;
    sent_at: string;
    trace?: Partial<DynamicSamplingContext>;
};
type SessionEnvelopeHeaders = {
    sent_at: string;
};
type CheckInEnvelopeHeaders = {
    trace?: DynamicSamplingContext;
};
type ClientReportEnvelopeHeaders = BaseEnvelopeHeaders;
type ReplayEnvelopeHeaders = BaseEnvelopeHeaders;
type SpanEnvelopeHeaders = BaseEnvelopeHeaders & {
    trace?: DynamicSamplingContext;
};
type StreamedSpanEnvelopeHeaders = BaseEnvelopeHeaders & {
    trace?: DynamicSamplingContext;
};
type LogEnvelopeHeaders = BaseEnvelopeHeaders;
type MetricEnvelopeHeaders = BaseEnvelopeHeaders;
export type EventEnvelope = BaseEnvelope<EventEnvelopeHeaders, EventItem | AttachmentItem | UserFeedbackItem | FeedbackItem | ProfileItem | SpanContainerItem>;
export type SessionEnvelope = BaseEnvelope<SessionEnvelopeHeaders, SessionItem>;
export type ClientReportEnvelope = BaseEnvelope<ClientReportEnvelopeHeaders, ClientReportItem>;
export type ReplayEnvelope = [ReplayEnvelopeHeaders, [ReplayEventItem, ReplayRecordingItem]];
export type CheckInEnvelope = BaseEnvelope<CheckInEnvelopeHeaders, CheckInItem>;
export type SpanEnvelope = BaseEnvelope<SpanEnvelopeHeaders, SpanItem>;
export type StreamedSpanEnvelope = BaseEnvelope<StreamedSpanEnvelopeHeaders, SpanContainerItem>;
export type ProfileChunkEnvelope = BaseEnvelope<BaseEnvelopeHeaders, ProfileChunkItem>;
export type RawSecurityEnvelope = BaseEnvelope<BaseEnvelopeHeaders, RawSecurityItem>;
export type LogEnvelope = BaseEnvelope<LogEnvelopeHeaders, LogContainerItem>;
export type MetricEnvelope = BaseEnvelope<MetricEnvelopeHeaders, MetricContainerItem>;
export type Envelope = EventEnvelope | SessionEnvelope | ClientReportEnvelope | ProfileChunkEnvelope | ReplayEnvelope | CheckInEnvelope | SpanEnvelope | StreamedSpanEnvelope | RawSecurityEnvelope | LogEnvelope | MetricEnvelope;
export type EnvelopeItem = Envelope[1][number];
export {};
//# sourceMappingURL=envelope.d.ts.map