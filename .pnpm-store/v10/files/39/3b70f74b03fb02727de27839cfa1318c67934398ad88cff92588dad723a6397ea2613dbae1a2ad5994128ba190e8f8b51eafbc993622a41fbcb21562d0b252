export declare class AddressError extends Error {
    /**
     * The offending address with the portion that failed to parse wrapped in
     * `<span class="parse-error">`, e.g. `2001:db8<span
     * class="parse-error">:::</span>1`. Present only on errors thrown from a
     * parse path that can point at a specific substring.
     *
     * This is an HTML fragment intended for an address-inspector UI. The
     * address content is HTML-escaped, so it is safe to insert as-is; treat it
     * as markup rather than as a plain-text message, and use `message` for
     * anything that renders as text.
     */
    parseMessage?: string;
    constructor(message: string, parseMessage?: string);
}
