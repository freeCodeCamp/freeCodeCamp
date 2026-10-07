import { H as HttpResponse } from './HttpResponse-aGiIzO91.js';
import '@mswjs/interceptors';
import './utils/internal/isIterable.js';
import './typeUtils.js';
import 'graphql';
import './utils/matching/matchRequestUrl.js';

/**
 * Performs the intercepted request as-is.
 *
 * This stops request handler lookup so no other handlers
 * can affect this request past this point.
 * Unlike `bypass()`, this will not trigger an additional request.
 *
 * @example
 * http.get('/resource', () => {
 *   return passthrough()
 * })
 *
 * @see {@link https://mswjs.io/docs/api/passthrough `passthrough()` API reference}
 */
declare function passthrough(): HttpResponse<any>;

export { passthrough };
