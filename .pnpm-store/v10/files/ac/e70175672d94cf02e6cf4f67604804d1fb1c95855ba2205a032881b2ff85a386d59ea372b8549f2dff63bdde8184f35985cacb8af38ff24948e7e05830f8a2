interface TldsAllow {
    readonly allow: Set<string>;
}
interface TldsDeny {
    readonly deny: Set<string>;
}
export interface DomainOptions {
    /**
     * Determines whether Unicode characters are allowed.
     *
     * @default true
     */
    readonly allowUnicode?: boolean;
    /**
     * Determines whether underscore (_) characters are allowed.
     *
     * @default false
     */
    readonly allowUnderscore?: boolean;
    /**
     * The maximum number of domain segments (e.g. `x.y.z` has 3 segments) allowed.
     *
     * @default Infinity
     */
    readonly maxDomainSegments?: number;
    /**
     * The minimum number of domain segments (e.g. `x.y.z` has 3 segments) required.
     *
     * @default 2
     */
    readonly minDomainSegments?: number;
    /**
     * Top-level-domain options
     *
     * @default true
     */
    readonly tlds?: TldsAllow | TldsDeny;
    /**
     * Allows passing fully qualified domain (ends with a period)
     *
     * @default false
     */
    readonly allowFullyQualified?: boolean;
}
export interface Analysis {
    /**
     * The reason validation failed.
     */
    error: string;
    /**
     * The error code.
     */
    code: string;
}
/**
 * Analyzes a string to verify it is a valid domain name.
 *
 * @param domain - the domain name to validate.
 * @param options - optional settings.
 *
 * @return - undefined when valid, otherwise an object with single error key with a string message value.
 */
export declare function analyzeDomain(domain: string, options?: DomainOptions): Analysis | null;
/**
 * Analyzes a string to verify it is a valid domain name.
 *
 * @param domain - the domain name to validate.
 * @param options - optional settings.
 *
 * @return - true when valid, otherwise false.
 */
export declare function isDomainValid(domain: string, options?: DomainOptions): boolean;
export declare function validateDomainOptions(options: DomainOptions): void;
export {};
