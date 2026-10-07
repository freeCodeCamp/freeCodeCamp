interface Options {
    /**
     * The required CIDR mode.
     *
     * @default 'optional'
     */
    readonly cidr?: Cidr;
    /**
     * The allowed versions.
     *
     * @default ['ipv4', 'ipv6', 'ipvfuture']
     */
    readonly version?: Version | Version[];
}
type Cidr = 'optional' | 'required' | 'forbidden';
type Version = 'ipv4' | 'ipv6' | 'ipvfuture';
interface Expression {
    /** The CIDR mode. */
    cidr: Cidr;
    /** The raw regular expression string. */
    raw: string;
    /** The regular expression. */
    regex: RegExp;
    /** The array of versions allowed. */
    versions: Version[];
}
/**
 * Generates a regular expression used to validate IP addresses.
 *
 * @param options - optional settings.
 *
 * @returns an object with the regular expression and meta data.
 */
export declare function ipRegex(options?: Options): Expression;
export {};
