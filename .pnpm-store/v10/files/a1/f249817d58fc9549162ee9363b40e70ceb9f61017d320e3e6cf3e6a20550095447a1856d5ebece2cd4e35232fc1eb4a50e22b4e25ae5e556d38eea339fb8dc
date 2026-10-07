export declare const nextTick: (callback: Function, ...args: any[]) => void;
export declare const globalThisShim: typeof globalThis;
export declare const defaultBinaryType = "nodebuffer";
export declare function createCookieJar(): CookieJar;
interface Cookie {
    name: string;
    value: string;
    expires?: Date;
}
/**
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie
 */
export declare function parse(setCookieString: string): Cookie;
export declare class CookieJar {
    private _cookies;
    parseCookies(values: string[]): void;
    get cookies(): IterableIterator<[string, Cookie]>;
    addCookies(xhr: any): void;
    appendCookies(headers: Headers): void;
}
export {};
