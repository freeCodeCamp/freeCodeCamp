import type { RecordWithObjectID } from './Recommend';
type BuiltInSendEventForHits = (eventType: string, hits: RecordWithObjectID<any> | Array<RecordWithObjectID<any>>, eventName?: string, additionalData?: Record<string, any>) => void;
type CustomSendEventForHits = (customPayload: any) => void;
export type SendEventForHits = BuiltInSendEventForHits & CustomSendEventForHits;
export {};
