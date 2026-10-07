import type { CustomSamplingContext, Span } from '@sentry/core';
import type { NodeClient } from '@sentry/node';
import { type RawThreadCpuProfile } from '@sentry-internal/node-cpu-profiler';
export declare const MAX_PROFILE_DURATION_MS: number;
/**
 * Takes a transaction and determines if it should be profiled or not. If it should be profiled, it returns the
 * profile_id, otherwise returns undefined. Takes care of setting profile context on transaction as well
 */
export declare function maybeProfileSpan(client: NodeClient | undefined, span: Span, customSamplingContext?: CustomSamplingContext): string | undefined;
/**
 * Stops the profiler for profile_id and returns the profile
 * @param transaction
 * @param profile_id
 * @returns
 */
export declare function stopSpanProfile(span: Span, profile_id: string | undefined): RawThreadCpuProfile | null;
//# sourceMappingURL=spanProfileUtils.d.ts.map