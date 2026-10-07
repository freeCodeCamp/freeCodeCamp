export declare const ipVersions: {
    v4Cidr: string;
    v6Cidr: string;
    ipv4: string;
    ipv6: string;
    ipvfuture: string;
};
interface Expression {
    /** The raw regular expression string. */
    raw: string;
    /** The regular expression. */
    regex: RegExp;
    /** The specified URI scheme */
    scheme: string | null;
}
/**
 * Generates a regular expression used to validate URI addresses.
 *
 * @param options - optional settings.
 *
 * @returns an object with the regular expression and meta data.
 */
export declare function uriRegex(options?: Options): Expression;
type Scheme = string | RegExp;
interface Options {
    /**
     * Allow the use of [] in query parameters.
     *
     * @default false
     */
    readonly allowQuerySquareBrackets?: boolean;
    /**
     * Allow relative URIs.
     *
     * @default false
     */
    readonly allowRelative?: boolean;
    /**
     * Requires the URI to be relative.
     *
     * @default false
     */
    readonly relativeOnly?: boolean;
    /**
     * Capture domain segment ($1).
     *
     * @default false
     */
    readonly domain?: boolean;
    /**
     * The allowed URI schemes.
     */
    readonly scheme?: Scheme | Scheme[];
}
export {};
