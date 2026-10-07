export interface IsFQDNOptions {
    /**
     * If `require_tld` is set to false, the validator will not check if the domain includes a TLD.
     * @default true
     */
    require_tld?: boolean | undefined;
    /**
     * If `allow_underscores` is set to true, the validator will allow underscores in the domain.
     * @default false
     */
    allow_underscores?: boolean | undefined;
    /**
     * If `allow_trailing_dot` is set to true, the validator will allow the domain to end with a `.` character.
     * @default false
     */
    allow_trailing_dot?: boolean | undefined;
    /**
     * If `allow_numeric_tld` is set to true, the validator will allow the TLD of the domain to be made up solely of numbers.
     * @default false
     */
    allow_numeric_tld?: boolean | undefined;
    /**
     * If `allow_wildcard` is set to true, the validator will allow domain starting with `*.` (e.g. `*.example.com` or `*.shop.example.com`).
     * @default false
     */
    allow_wildcard?: boolean | undefined;
    /**
     * If `ignore_max_length` is set to true, the validator will not check for the standard max length of a domain.
     * @default false
     */
    ignore_max_length?: boolean | undefined;
}

/**
 * Check if the string is a fully qualified domain name (e.g. `domain.com`).
 *
 * @param [options] - Options
 */
export default function isFQDN(str: string, options?: IsFQDNOptions): boolean;
