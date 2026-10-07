/**
 * @internal
 */
export declare const loadConfigsForDefaultMode: (mode: ResolvedDefaultsMode) => DefaultsModeConfigs;
/**
 * Option determining how certain default configuration options are resolved in the SDK. It can be one of the value listed below:
 * * `"standard"`: <p>The STANDARD mode provides the latest recommended default values that should be safe to run in most scenarios</p><p>Note that the default values vended from this mode might change as best practices may evolve. As a result, it is encouraged to perform tests when upgrading the SDK</p>
 * * `"in-region"`: <p>The IN_REGION mode builds on the standard mode and includes optimization tailored for applications which call AWS services from within the same AWS region</p><p>Note that the default values vended from this mode might change as best practices may evolve. As a result, it is encouraged to perform tests when upgrading the SDK</p>
 * * `"cross-region"`: <p>The CROSS_REGION mode builds on the standard mode and includes optimization tailored for applications which call AWS services in a different region</p><p>Note that the default values vended from this mode might change as best practices may evolve. As a result, it is encouraged to perform tests when upgrading the SDK</p>
 * * `"mobile"`: <p>The MOBILE mode builds on the standard mode and includes optimization tailored for mobile applications</p><p>Note that the default values vended from this mode might change as best practices may evolve. As a result, it is encouraged to perform tests when upgrading the SDK</p>
 * * `"auto"`: <p>The AUTO mode is an experimental mode that builds on the standard mode. The SDK will attempt to discover the execution environment to determine the appropriate settings automatically.</p><p>Note that the auto detection is heuristics-based and does not guarantee 100% accuracy. STANDARD mode will be used if the execution environment cannot be determined. The auto detection might query <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-metadata.html">EC2 Instance Metadata service</a>, which might introduce latency. Therefore we recommend choosing an explicit defaults_mode instead if startup latency is critical to your application</p>
 * * `"legacy"`: <p>The LEGACY mode provides default settings that vary per SDK and were used prior to establishment of defaults_mode</p>
 *
 * @defaultValue "legacy"
 */
export type DefaultsMode = "standard" | "in-region" | "cross-region" | "mobile" | "auto" | "legacy";
/**
 * @internal
 */
export type ResolvedDefaultsMode = Exclude<DefaultsMode, "auto">;
/**
 * @internal
 */
export interface DefaultsModeConfigs {
    retryMode?: string;
    connectionTimeout?: number;
    requestTimeout?: number;
}
