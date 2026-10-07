import type { Event } from './event';
/**
 * NOTE: These types are still considered Beta and subject to change.
 * @hidden
 */
export interface ReplayEvent extends Event {
    urls: string[];
    replay_start_timestamp?: number;
    error_ids: string[];
    trace_ids: string[];
    replay_id: string;
    segment_id: number;
    replay_type: ReplayRecordingMode;
}
/**
 * NOTE: These types are still considered Beta and subject to change.
 * @hidden
 */
export type ReplayRecordingData = string | Uint8Array;
/**
 * NOTE: These types are still considered Beta and subject to change.
 * @hidden
 */
export type ReplayRecordingMode = 'session' | 'buffer';
/**
 * Reason a replay recording stopped, passed to the `replayEnd` client hook.
 *
 * - `manual`: user called `replay.stop()`.
 * - `sessionExpired`: session hit `maxReplayDuration` or the idle-expiry threshold.
 * - `sendError`: a replay segment failed to send after retries.
 * - `mutationLimit`: DOM mutation budget for the session was exhausted.
 * - `eventBufferError`: the event buffer threw an unexpected error.
 * - `eventBufferOverflow`: the event buffer ran out of space.
 */
export type ReplayStopReason = 'manual' | 'sessionExpired' | 'sendError' | 'mutationLimit' | 'eventBufferError' | 'eventBufferOverflow';
/**
 * Payload emitted on the `replayStart` client hook when a replay begins recording.
 */
export interface ReplayStartEvent {
    sessionId: string;
    recordingMode: ReplayRecordingMode;
}
/**
 * Payload emitted on the `replayEnd` client hook when a replay stops recording.
 */
export interface ReplayEndEvent {
    sessionId?: string;
    reason: ReplayStopReason;
}
//# sourceMappingURL=replay.d.ts.map