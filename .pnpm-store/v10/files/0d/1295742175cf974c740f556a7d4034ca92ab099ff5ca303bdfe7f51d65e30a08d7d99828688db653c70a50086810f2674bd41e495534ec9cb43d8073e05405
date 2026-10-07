type s = number;

declare namespace Cookies {
    interface Cookie {
        name: string;
        value?: string | undefined;
        expires?: Date | undefined;
        path?: string | undefined;
        domain?: string | undefined;
        secure?: boolean | undefined;
        httponly?: boolean | undefined;
    }

    interface Options {
        sessionTimeout?: s | undefined;
    }
}

/** Creates a biskviit cookie jar for managing cookie values in memory */
declare class Cookies {
    options: Cookies.Options;
    cookies: Cookies.Cookie[];

    constructor(options?: Cookies.Options);

    /** Stores a cookie string to the cookie storage */
    set(cookieStr: string, url: string): boolean;

    /** Returns cookie string for the 'Cookie:' header. */
    get(url: string): string;

    /** Lists all valied cookie objects for the specified URL */
    list(url: string): Cookies.Cookie[];

    /** Parses cookie string from the 'Set-Cookie:' header */
    parse(cookieStr: string): Cookies.Cookie;

    /** Checks if a cookie object is valid for a specified URL */
    match(cookie: Cookies.Cookie, url: string): boolean;

    /** Adds (or updates/removes if needed) a cookie object to the cookie storage */
    add(cookie: Cookies.Cookie): boolean;

    /** Checks if two cookie objects are the same */
    compare(a: Cookies.Cookie, b: Cookies.Cookie): boolean;

    /** Checks if a cookie is expired */
    isExpired(cookie: Cookies.Cookie): boolean;

    /** Returns normalized cookie path for an URL path argument */
    getPath(pathname: string): string;
}

export = Cookies;
