/**
 * Check if the string is an URL.
 *
 * @param [options] - Options
 */
export default function isURL(str: string, options?: IsURLOptions): boolean;

export interface IsURLOptions {
    /**
     * @default ['http','https','ftp']
     */
    protocols?: string[] | undefined;
    /**
     * @default true
     */
    require_tld?: boolean | undefined;
    /**
     * @default false
     */
    require_protocol?: boolean | undefined;
    /**
     * @default true
     */
    require_host?: boolean | undefined;
    /**
     * if set as true isURL will check if port is present in the URL
     * @default false
     */
    require_port?: boolean | undefined;
    /**
     * @default true
     */
    require_valid_protocol?: boolean | undefined;
    /**
     * @default false
     */
    allow_underscores?: boolean | undefined;
    /**
     * @default false
     */
    host_whitelist?: Array<string | RegExp> | undefined;
    /**
     * @default false
     */
    host_blacklist?: Array<string | RegExp> | undefined;
    /**
     * @default false
     */
    allow_trailing_dot?: boolean | undefined;
    /**
     * @default false
     */
    allow_protocol_relative_urls?: boolean | undefined;
    /**
     * @default false
     */
    disallow_auth?: boolean | undefined;
    /**
     * @default true
     */
    allow_fragments?: boolean | undefined;
    /**
     * @default true
     */
    allow_query_components?: boolean | undefined;
    /**
     * @default true
     */
    validate_length?: boolean | undefined;
    /**
     * @default 2084
     */
    max_allowed_length?: number | false | undefined;
}
