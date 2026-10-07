import type { Session, SessionContext, SessionStatus } from './types/session';
/**
 * Creates a new `Session` object by setting certain default parameters. If optional @param context
 * is passed, the passed properties are applied to the session object.
 *
 * @param context (optional) additional properties to be applied to the returned session object
 *
 * @returns a new `Session` object
 */
export declare function makeSession(context?: Omit<SessionContext, 'started' | 'status'>): Session;
/**
 * Updates a session object with the properties passed in the context.
 *
 * Note that this function mutates the passed object and returns void.
 * (Had to do this instead of returning a new and updated session because closing and sending a session
 * makes an update to the session after it was passed to the sending logic.
 * @see Client.captureSession )
 *
 * @param session the `Session` to update
 * @param context the `SessionContext` holding the properties that should be updated in @param session
 */
export declare function updateSession(session: Session, context?: SessionContext): void;
/**
 * Closes a session by setting its status and updating the session object with it.
 * Internally calls `updateSession` to update the passed session object.
 *
 * Note that this function mutates the passed session (@see updateSession for explanation).
 *
 * @param session the `Session` object to be closed
 * @param status the `SessionStatus` with which the session was closed. If you don't pass a status,
 *               this function will keep the previously set status, unless it was `'ok'` in which case
 *               it is changed to `'exited'`.
 */
export declare function closeSession(session: Session, status?: Exclude<SessionStatus, 'ok'>): void;
//# sourceMappingURL=session.d.ts.map