import type { LRUMap } from '@sentry/core';
import type { UndiciRequest, UndiciResponse } from '../integrations/node-fetch/types';
/**
 * Add trace propagation headers to an outgoing fetch/undici request.
 *
 * Checks if the request URL matches trace propagation targets,
 * then injects sentry-trace, traceparent, and baggage headers.
 */
export declare function addTracePropagationHeadersToFetchRequest(request: UndiciRequest, propagationDecisionMap: LRUMap<string, boolean>): void;
/** Add a breadcrumb for an outgoing fetch/undici request. */
export declare function addFetchRequestBreadcrumb(request: UndiciRequest, response: UndiciResponse): void;
/** Get the absolute URL from an origin and path. */
export declare function getAbsoluteUrl(origin: string, path?: string): string;
//# sourceMappingURL=outgoingFetchRequest.d.ts.map