import { Provider, UserAgent } from "@smithy/types";
export { crtAvailability } from "./crt-availability";
/**
 * @internal
 */
export declare const UA_APP_ID_ENV_NAME = "AWS_SDK_UA_APP_ID";
/**
 * @internal
 */
export declare const UA_APP_ID_INI_NAME = "sdk-ua-app-id";
interface DefaultUserAgentOptions {
    serviceId?: string;
    clientVersion: string;
}
/**
 * @internal
 *
 * Collect metrics from runtime to put into user agent.
 */
export declare const defaultUserAgent: ({ serviceId, clientVersion }: DefaultUserAgentOptions) => Provider<UserAgent>;
