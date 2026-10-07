import type { Client } from '../../client';
import type { Scope } from '../../scope';
import type { HttpServerResponse } from './types';
/**
 * Starts a session and tracks it in the context of a given isolation scope.
 * When the passed response is finished, the session is put into a task and
 * is aggregated with other sessions that may happen in a certain time window
 * (sessionFlushingDelayMs).
 *
 * The sessions are always aggregated by the client that is on the current
 * scope at the time of ending the response (if there is one).
 */
export declare function recordRequestSession(client: Client, { requestIsolationScope, response, sessionFlushingDelayMS, }: {
    requestIsolationScope: Scope;
    response: HttpServerResponse;
    sessionFlushingDelayMS?: number;
}): void;
//# sourceMappingURL=record-request-session.d.ts.map