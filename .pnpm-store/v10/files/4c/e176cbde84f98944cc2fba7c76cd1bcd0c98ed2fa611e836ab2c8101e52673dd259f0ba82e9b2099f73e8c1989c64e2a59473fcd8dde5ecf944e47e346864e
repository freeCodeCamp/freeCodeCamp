import { User } from './user';
export interface Session {
    sid: string;
    did?: string | number;
    init: boolean;
    timestamp: number;
    started: number;
    duration?: number;
    status: SessionStatus;
    release?: string;
    environment?: string;
    userAgent?: string;
    ipAddress?: string;
    errors: number;
    user?: User | null;
    ignoreDuration: boolean;
    abnormal_mechanism?: string;
    /**
     * Overrides default JSON serialization of the Session because
     * the Sentry servers expect a slightly different schema of a session
     * which is described in the interface @see SerializedSession in this file.
     *
     * @return a Sentry-backend conforming JSON object of the session
     */
    toJSON(): SerializedSession;
}
export type SessionContext = Partial<Session>;
export type SessionStatus = 'ok' | 'exited' | 'crashed' | 'abnormal';
/** JSDoc */
export interface SessionAggregates {
    attrs?: {
        environment?: string;
        release?: string;
        ip_address?: string | null;
    };
    aggregates: Array<AggregationCounts>;
}
export interface AggregationCounts {
    /** ISO Timestamp rounded to the second */
    started: string;
    /** Number of sessions that did not have errors */
    exited?: number;
    /** Number of sessions that had handled errors */
    errored?: number;
    /** Number of sessions that had unhandled errors */
    crashed?: number;
}
export interface SerializedSession {
    init: boolean;
    sid: string;
    did?: string;
    timestamp: string;
    started: string;
    duration?: number;
    status: SessionStatus;
    errors: number;
    abnormal_mechanism?: string;
    attrs?: {
        release?: string;
        environment?: string;
        user_agent?: string;
        ip_address?: string;
    };
}
//# sourceMappingURL=session.d.ts.map
