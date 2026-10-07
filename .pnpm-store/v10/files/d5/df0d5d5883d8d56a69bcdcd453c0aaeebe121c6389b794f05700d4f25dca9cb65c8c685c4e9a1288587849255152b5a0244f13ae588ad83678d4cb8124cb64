import { AuthScheme } from "./auth/auth";
/**
 * @public
 */
export interface EndpointPartition {
    name: string;
    dnsSuffix: string;
    dualStackDnsSuffix: string;
    supportsFIPS: boolean;
    supportsDualStack: boolean;
}
/**
 * @public
 */
export interface EndpointARN {
    partition: string;
    service: string;
    region: string;
    accountId: string;
    resourceId: Array<string>;
}
/**
 * @public
 */
export declare enum EndpointURLScheme {
    HTTP = "http",
    HTTPS = "https"
}
/**
 * @public
 */
export interface EndpointURL {
    /**
     * The URL scheme such as http or https.
     */
    scheme: EndpointURLScheme;
    /**
     * The authority is the host and optional port component of the URL.
     */
    authority: string;
    /**
     * The parsed path segment of the URL.
     * This value is as-is as provided by the user.
     */
    path: string;
    /**
     * The parsed path segment of the URL.
     * This value is guranteed to start and end with a "/".
     */
    normalizedPath: string;
    /**
     * A boolean indicating whether the authority is an IP address.
     */
    isIp: boolean;
}
/**
 * @public
 */
export type EndpointObjectProperty = string | boolean | {
    [key: string]: EndpointObjectProperty;
} | EndpointObjectProperty[];
/**
 * @public
 */
export interface EndpointV2 {
    url: URL;
    properties?: {
        authSchemes?: AuthScheme[];
    } & Record<string, EndpointObjectProperty>;
    headers?: Record<string, string[]>;
}
/**
 * @public
 */
export type EndpointParameters = {
    [name: string]: undefined | string | boolean;
};
