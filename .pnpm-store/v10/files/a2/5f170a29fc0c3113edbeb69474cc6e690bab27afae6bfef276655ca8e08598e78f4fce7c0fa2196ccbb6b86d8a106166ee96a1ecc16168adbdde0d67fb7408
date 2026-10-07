import { Client, ContinuousThreadCpuProfile, DebugImage, DsnComponents, Envelope, Event, EventEnvelopeHeaders, Profile, ProfileChunk, ProfileChunkEnvelope, SdkInfo, ThreadCpuProfile } from '@sentry/core';
import { RawChunkCpuProfile, RawThreadCpuProfile } from '@sentry-internal/node-cpu-profiler';
export declare const PROFILER_THREAD_ID_STRING: string;
export declare const PROFILER_THREAD_NAME: string;
/**
 * Enriches the profile with threadId of the current thread.
 * This is done in node as we seem to not be able to get the info from C native code.
 *
 * @param {ThreadCpuProfile | RawThreadCpuProfile} profile
 * @returns {ThreadCpuProfile}
 */
export declare function enrichWithThreadInformation(profile: ThreadCpuProfile | RawThreadCpuProfile | ContinuousThreadCpuProfile | RawChunkCpuProfile): ThreadCpuProfile | ContinuousThreadCpuProfile;
/**
 * Creates a profiling envelope item, if the profile does not pass validation, returns null.
 * @param {RawThreadCpuProfile}
 * @param {Event}
 * @returns {Profile | null}
 */
export declare function createProfilingEvent(client: Client, profile: RawThreadCpuProfile, event: Event): Profile | null;
/**
 * Creates a profiling chunk envelope item, if the profile does not pass validation, returns null.
 */
export declare function createProfilingChunkEvent(client: Client, options: {
    release?: string;
    environment?: string;
}, profile: RawChunkCpuProfile, sdk: SdkInfo | undefined, identifiers: {
    trace_id: string | undefined;
    chunk_id: string;
    profiler_id: string;
}): ProfileChunk | null;
/**
 * Checks the given sample rate to make sure it is valid type and value (a boolean, or a number between 0 and 1).
 * @param {unknown} rate
 * @returns {boolean}
 */
export declare function isValidSampleRate(rate: unknown): boolean;
/**
 * Checks if the profile is valid and can be sent to Sentry.
 * @param {RawThreadCpuProfile} profile
 * @returns {boolean}
 */
export declare function isValidProfile(profile: RawThreadCpuProfile): profile is RawThreadCpuProfile & {
    profile_id: string;
};
/**
 * Checks if the profile chunk is valid and can be sent to Sentry.
 * @param profile
 * @returns
 */
export declare function isValidProfileChunk(profile: RawChunkCpuProfile): profile is RawChunkCpuProfile;
/**
 * Adds items to envelope if they are not already present - mutates the envelope.
 * @param {Envelope} envelope
 * @param {Profile[]} profiles
 * @returns {Envelope}
 */
export declare function addProfilesToEnvelope(envelope: Envelope, profiles: Profile[]): Envelope;
/**
 * Finds transactions with profile_id context in the envelope
 * @param {Envelope} envelope
 * @returns {Event[]}
 */
export declare function findProfiledTransactionsFromEnvelope(envelope: Envelope): Event[];
/**
 * Creates event envelope headers for a profile chunk. This is separate from createEventEnvelopeHeaders util
 * as the profile chunk does not conform to the sentry event type
 */
export declare function createEventEnvelopeHeaders(sdkInfo: SdkInfo | undefined, tunnel: string | undefined, dsn?: DsnComponents): EventEnvelopeHeaders;
/**
 * Creates a standalone profile_chunk envelope.
 */
export declare function makeProfileChunkEnvelope(platform: 'node', chunk: ProfileChunk, sdkInfo: SdkInfo | undefined, tunnel: string | undefined, dsn?: DsnComponents): ProfileChunkEnvelope;
/**
 * Cross reference profile collected resources with debug_ids and return a list of debug images.
 * @param {string[]} resource_paths
 * @returns {DebugImage[]}
 */
export declare function applyDebugMetadata(client: Client, resource_paths: ReadonlyArray<string>): DebugImage[];
//# sourceMappingURL=utils.d.ts.map
