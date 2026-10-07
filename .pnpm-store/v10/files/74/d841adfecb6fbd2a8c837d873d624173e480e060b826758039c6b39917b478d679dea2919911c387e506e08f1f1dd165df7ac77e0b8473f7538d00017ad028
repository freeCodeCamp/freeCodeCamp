import { Cookie } from 'tough-cookie';

declare class CookieStore {
    #private;
    constructor();
    getCookies(url: string): Array<Cookie>;
    setCookie(cookieName: string, url: string): Promise<void>;
    private getCookieStoreIndex;
    private persist;
}
declare const cookieStore: CookieStore;

export { cookieStore };
