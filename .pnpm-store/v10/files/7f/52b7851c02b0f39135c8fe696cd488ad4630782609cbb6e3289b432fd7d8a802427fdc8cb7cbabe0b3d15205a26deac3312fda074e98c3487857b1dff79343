import { Polling } from "./polling.js";
/**
 * HTTP long-polling based on the built-in `fetch()` method.
 *
 * Usage: browser, Node.js (since v18), Deno, Bun
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/fetch
 * @see https://caniuse.com/fetch
 * @see https://nodejs.org/api/globals.html#fetch
 */
export declare class Fetch extends Polling {
    doPoll(): void;
    doWrite(data: string, callback: () => void): void;
    private _fetch;
}
