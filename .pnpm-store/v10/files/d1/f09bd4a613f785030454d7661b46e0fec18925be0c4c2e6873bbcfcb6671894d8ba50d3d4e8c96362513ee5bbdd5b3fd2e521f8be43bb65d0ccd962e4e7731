declare const SET_TIMEOUT_MAX_ALLOWED_INT = 2147483647;
declare const MIN_SERVER_RESPONSE_TIME = 100;
declare const MAX_SERVER_RESPONSE_TIME = 400;
declare const NODE_SERVER_RESPONSE_TIME = 5;
type DelayMode = 'real' | 'infinite';
/**
 * Delays the response by the given duration (ms).
 *
 * @example
 * await delay() // emulate realistic server response time
 * await delay(1200) // delay response by 1200ms
 * await delay('infinite') // delay response infinitely
 *
 * @see {@link https://mswjs.io/docs/api/delay `delay()` API reference}
 */
declare function delay(durationOrMode?: DelayMode | number): Promise<void>;

export { type DelayMode, MAX_SERVER_RESPONSE_TIME, MIN_SERVER_RESPONSE_TIME, NODE_SERVER_RESPONSE_TIME, SET_TIMEOUT_MAX_ALLOWED_INT, delay };
