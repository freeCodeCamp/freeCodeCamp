// Type definitions for CookieJar 2.1
// Project: https://github.com/bmeck/node-cookiejar
// Definitions by: Rafal Proszowski <https://github.com/paroxp>, Charles Samborski <https://github.com/demurgos>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

export class CookieAccessInfo {
    /**
     * Class to determine matching qualities of a cookie
     * @param domain string domain to match
     * @param path string path to match
     * @param secure boolean access is secure (ssl generally)
     * @param script boolean access is from a script
     */
    constructor(domain: string, path?: string, secure?: boolean, script?: boolean);

    static All: CookieAccessInfo;
    domain: string; // domain to match
    path: string; // path to match
    secure: boolean; // access is secure (ssl generally)
    script: boolean; // access is from a script
}

export class Cookie {
    name: string; // name of the cookie
    value: string; // string associated with the cookie
    domain: string; // domain to match (on a cookie a '.' at the start means a wildcard matching anything ending in the rest)
    explicit_domain: boolean; // if the domain was explicitly set via the cookie string
    path: string; // base path to match (matches any path starting with this '/' is root)
    explicit_path: boolean; // if the path was explicitly set via the cookie string
    noscript: boolean; // if it should be kept from scripts
    secure: boolean; // should it only be transmitted over secure means
    expiration_date: number; // number of millis since 1970 at which this should be removed

    /**
     * It turns input into a Cookie (singleton if given a Cookie), the
     * request_domain argument is used to default the domain if it is not
     * explicit in the cookie string, the request_path argument is used to set
     * the path if it is not explicit in a cookie String.
     *
     * Explicit domains/paths will cascade, implied domains/paths must exactly
     * match (see http://en.wikipedia.org/wiki/HTTP_cookie#Domain_and_Pat).
     * @param cookie string or a cookie to work on
     * @param requestDomain string argument is used to default the domain if it is not explicit in the cookie string
     * @param requestPath string argument is used to set the path if it is not explicit in a cookie String
     */
    constructor(cookie: string | Cookie, requestDomain?: string, requestPath?: string);

    /**
     * the set-cookie: string for this cookie
     */
    toString(): string;

    /**
     * the cookie: string for this cookie
     */
    toValueString(): string;

    /**
     * parses the string onto this cookie or a new one if called directly
     * @param cookie string to be parsed into a Cookie
     * @param requestDomain string definind the requesting domain
     * @param requestPath string defining the requesting path
     */
    parse(cookie: string, requestDomain?: string, requestPath?: string): Cookie;

    /**
     * returns true if the access_info allows retrieval of this cookie
     * @param accessInfo CookieAccessInfo
     */
    matches(accessInfo: CookieAccessInfo): boolean;

    /**
     * returns true if the cookies cannot exist in the same space
     * (domain and path match)
     * @param cookie Cookie
     */
    collidesWith(cookie: Cookie): boolean;
}

export class CookieJar {
    /**
     * class to hold numerous cookies from multiple domains correctly
     */
    constructor();

    /**
     * modify (or add if not already-existing) a cookie to the jar
     * @param cookie string | Cookie
     * @param requestDomain string argument is used to default the domain if it is not explicit in the cookie string
     * @param requestPath string argument is used to set the path if it is not explicit in a cookie String
     */
    setCookie(cookie: string | Cookie, requestDomain?: string, requestPath?: string): Cookie | false;

    /**
     * modify (or add if not already-existing) a large number of cookies to the
     * jar
     * @param cookie string or list of strings defining cookies
     * @param requestDomain string argument is used to default the domain if it is not explicit in the cookie string
     * @param requestPath string argument is used to set the path if it is not explicit in a cookie String
     */
    setCookies(cookie: string | ReadonlyArray<string>, requestDomain?: string, requestPath?: string): Cookie[];

    /**
     * get a cookie with the name and access_info matching
     * @param cookieName string to be parsed into a Cookie
     * @param accessInfo CookieAccessInfo
     */
    getCookie(cookieName: string, accessInfo: CookieAccessInfo): Cookie | undefined;

    /**
     * grab all cookies matching this access_info
     * @param accessInfo CookieAccessInfo
     */
    getCookies(accessInfo: CookieAccessInfo): ReadonlyArray<Cookie> & { toValueString(): string };
}
