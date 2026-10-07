/**
 * Cookie prefixes are a way to indicate that a given cookie was set with a set of attributes simply by inspecting the
 * first few characters of the cookie's name. These are defined in {@link https://datatracker.ietf.org/doc/html/draft-ietf-httpbis-rfc6265bis-13#section-4.1.3 | RFC6265bis - Section 4.1.3}.
 *
 * The following values can be used to configure how a {@link CookieJar} enforces attribute restrictions for Cookie prefixes:
 *
 * - `silent` - Enable cookie prefix checking but silently ignores the cookie if conditions are not met. This is the default configuration for a {@link CookieJar}.
 *
 * - `strict` - Enables cookie prefix checking and will raise an error if conditions are not met.
 *
 * - `unsafe-disabled` - Disables cookie prefix checking.
 * @public
 */
export declare const PrefixSecurityEnum: {
    readonly SILENT: "silent";
    readonly STRICT: "strict";
    readonly DISABLED: "unsafe-disabled";
};
export declare const IP_V6_REGEX_OBJECT: RegExp;
/**
 * A JSON representation of a {@link CookieJar}.
 * @public
 */
export interface SerializedCookieJar {
    /**
     * The version of `tough-cookie` used during serialization.
     */
    version: string;
    /**
     * The name of the store used during serialization.
     */
    storeType: string | null;
    /**
     * The value of {@link CreateCookieJarOptions.rejectPublicSuffixes} configured on the {@link CookieJar}.
     */
    rejectPublicSuffixes: boolean;
    /**
     * Other configuration settings on the {@link CookieJar}.
     */
    [key: string]: unknown;
    /**
     * The list of {@link Cookie} values serialized as JSON objects.
     */
    cookies: SerializedCookie[];
}
/**
 * A JSON object that is created when {@link Cookie.toJSON} is called. This object will contain the properties defined in {@link Cookie.serializableProperties}.
 * @public
 */
export type SerializedCookie = {
    key?: string;
    value?: string;
    [key: string]: unknown;
};
