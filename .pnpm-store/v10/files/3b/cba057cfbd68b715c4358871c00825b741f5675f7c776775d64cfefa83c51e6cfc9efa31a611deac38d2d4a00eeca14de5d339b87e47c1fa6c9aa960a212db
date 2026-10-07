Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const FILTERED_VALUE = "[Filtered]";
const PII_HEADER_SNIPPETS = ["forwarded", "-ip", "remote-", "via", "-user"];
const SENSITIVE_KEY_SNIPPETS = [
  "auth",
  "token",
  "secret",
  "session",
  // for the user_session cookie
  "password",
  "passwd",
  "pwd",
  "key",
  "jwt",
  "bearer",
  "sso",
  "saml",
  "csrf",
  "xsrf",
  "credentials",
  "sid",
  "identity",
  // Always treat cookie headers as sensitive in case individual key-value cookie pairs cannot properly be extracted
  "set-cookie",
  "cookie"
];
const SENSITIVE_COOKIE_NAME_SNIPPETS = [
  // Express / Connect default session cookie
  ".sid",
  // Opaque session ids (PHPSESSID, ASPSESSIONID*, BIGipServer*, *sessid*, …)
  "sessid",
  // Laravel etc. "remember me" tokens
  "remember",
  // OIDC / OAuth auxiliary (`oauth*` covered by header snippet `auth`)
  "oidc",
  "pkce",
  "nonce",
  // RFC 6265bis high-security cookie name prefixes
  "__secure-",
  "__host-",
  // Load balancer / CDN sticky-session cookies (opaque routing tokens)
  "awsalb",
  "awselb",
  "akamai",
  // BaaS / IdP session cookies (names often omit "session")
  "__stripe",
  "cognito",
  "firebase",
  "supabase",
  "sb-",
  // Step-up / MFA cookies
  "mfa",
  "2fa"
];

exports.FILTERED_VALUE = FILTERED_VALUE;
exports.PII_HEADER_SNIPPETS = PII_HEADER_SNIPPETS;
exports.SENSITIVE_COOKIE_NAME_SNIPPETS = SENSITIVE_COOKIE_NAME_SNIPPETS;
exports.SENSITIVE_KEY_SNIPPETS = SENSITIVE_KEY_SNIPPETS;
//# sourceMappingURL=filtering-snippets.js.map
