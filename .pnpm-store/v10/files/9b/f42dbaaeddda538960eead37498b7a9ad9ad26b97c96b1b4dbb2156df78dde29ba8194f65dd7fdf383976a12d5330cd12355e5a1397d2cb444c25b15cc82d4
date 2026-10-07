import { ProfilingIntegration } from '@sentry/core';
import { NodeClient } from '@sentry/node';
/** Exported only for tests. */
export declare const _nodeProfilingIntegration: () => ProfilingIntegration<NodeClient>;
/**
 * We need this integration in order to send data to Sentry. We hook into the event processor
 * and inspect each event to see if it is a transaction event and if that transaction event
 * contains a profile on it's metadata. If that is the case, we create a profiling event envelope
 * and delete the profile from the transaction metadata.
 */
export declare const nodeProfilingIntegration: () => import("@sentry/core").Integration;
//# sourceMappingURL=integration.d.ts.map
