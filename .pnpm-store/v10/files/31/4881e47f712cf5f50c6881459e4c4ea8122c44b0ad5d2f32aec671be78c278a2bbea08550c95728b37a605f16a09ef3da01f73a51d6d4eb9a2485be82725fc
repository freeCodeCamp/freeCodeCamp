export declare const FILTERED_VALUE = "[Filtered]";
export declare const PII_HEADER_SNIPPETS: string[];
export declare const SENSITIVE_KEY_SNIPPETS: string[];
/**
 * Extra substrings matched only against individual Cookie / Set-Cookie **names** (not header names),
 * so we can cover common session secrets that do not match {@link SENSITIVE_KEY_SNIPPETS}
 * (e.g. `connect.sid` does not contain `session`) without false positives on arbitrary HTTP headers.
 *
 * Cookie names are checked with the same `includes()` list as headers plus these entries; omit redundant
 * cookie-only snippets that are already implied by a header match (e.g. `oauth` → `auth`, `id_token` → `token`,
 * `next-auth` → `auth`).
 */
export declare const SENSITIVE_COOKIE_NAME_SNIPPETS: string[];
//# sourceMappingURL=filtering-snippets.d.ts.map