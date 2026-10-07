import { LRUMap } from '../../utils/lru';
import { HttpClientRequest } from './types';
/**
 * Inject Sentry trace-propagation headers into an outgoing request if the
 * target URL matches the configured `tracePropagationTargets`.
 *
 * Note: this must be called *before* calling `request.end()` (or firing the
 * `http.client.request.start` diagnostics channel), because at that point,
 * the headers have already been sent, and cannot be modified.
 */
export declare function injectTracePropagationHeaders(request: HttpClientRequest, propagationDecisionMap: LRUMap<string, boolean>): void;
//# sourceMappingURL=inject-trace-propagation-headers.d.ts.map
