import { Provider, UserAgent } from "@smithy/types";
/**
 * @public
 */
export interface UserAgentInputConfig {
    /**
     * The custom user agent header that would be appended to default one
     */
    customUserAgent?: string | UserAgent;
}
interface PreviouslyResolved {
    defaultUserAgentProvider: Provider<UserAgent>;
    runtime: string;
}
export interface UserAgentResolvedConfig {
    /**
     * The provider populating default tracking information to be sent with `user-agent`, `x-amz-user-agent` header.
     * @internal
     */
    defaultUserAgentProvider: Provider<UserAgent>;
    /**
     * The custom user agent header that would be appended to default one
     */
    customUserAgent?: UserAgent;
    /**
     * The runtime environment
     */
    runtime: string;
}
export declare function resolveUserAgentConfig<T>(input: T & PreviouslyResolved & UserAgentInputConfig): T & UserAgentResolvedConfig;
export {};
