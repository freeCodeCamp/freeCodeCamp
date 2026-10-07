import type { Event, EventHint } from '../event';
import type { Primitive } from '../misc';
import type { User } from '../user';
/**
 * Crash report feedback object
 */
export interface UserFeedback {
    event_id: string;
    email: User['email'];
    name: string;
    comments: string;
}
interface FeedbackContext extends Record<string, unknown> {
    message: string;
    contact_email?: string;
    name?: string;
    replay_id?: string;
    url?: string;
    associated_event_id?: string;
    source?: string;
}
/**
 * NOTE: These types are still considered Alpha and subject to change.
 * @hidden
 */
export interface FeedbackEvent extends Event {
    type: 'feedback';
    contexts: Event['contexts'] & {
        feedback: FeedbackContext;
    };
}
export interface SendFeedbackParams {
    message: string;
    name?: string;
    email?: string;
    url?: string;
    source?: string;
    associatedEventId?: string;
    /**
     * Set an object that will be merged sent as tags data with the event.
     */
    tags?: {
        [key: string]: Primitive;
    };
}
export type FeedbackErrorCode = 'ERROR_EMPTY_MESSAGE' | 'ERROR_NO_CLIENT' | 'ERROR_TIMEOUT' | 'ERROR_FORBIDDEN' | 'ERROR_GENERIC';
export type FeedbackErrorMessages = Partial<Record<FeedbackErrorCode, string>>;
export type SendFeedback = (params: SendFeedbackParams, hint?: EventHint & {
    includeReplay?: boolean;
    errorMessages?: FeedbackErrorMessages;
}) => Promise<string>;
export {};
//# sourceMappingURL=sendFeedback.d.ts.map