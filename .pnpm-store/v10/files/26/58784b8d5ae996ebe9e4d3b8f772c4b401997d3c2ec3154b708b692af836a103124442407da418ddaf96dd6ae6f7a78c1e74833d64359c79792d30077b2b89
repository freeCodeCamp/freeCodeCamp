import { Provider, UserAgent } from "@smithy/types";
export interface UserAgentInputConfig {
  customUserAgent?: string | UserAgent;
}
interface PreviouslyResolved {
  defaultUserAgentProvider: Provider<UserAgent>;
  runtime: string;
}
export interface UserAgentResolvedConfig {
  defaultUserAgentProvider: Provider<UserAgent>;
  customUserAgent?: UserAgent;
  runtime: string;
}
export declare function resolveUserAgentConfig<T>(
  input: T & PreviouslyResolved & UserAgentInputConfig
): T & UserAgentResolvedConfig;
export {};
