type MinimalCloudflareContext = {
    waitUntil(promise: Promise<any>): void;
};
/**
 *  Flushes the event queue with a timeout in serverless environments to ensure that events are sent to Sentry before the
 *  serverless function execution ends.
 *
 * The function is async, but in environments that support a `waitUntil` mechanism, it will run synchronously.
 *
 * This function is aware of the following serverless platforms:
 * - Cloudflare: If a Cloudflare context is provided, it will use `ctx.waitUntil()` to flush events (keeps the `this` context of `ctx`).
 *               If a `cloudflareWaitUntil` function is provided, it will use that to flush events (looses the `this` context of `ctx`).
 * - Vercel: It detects the Vercel environment and uses Vercel's `waitUntil` function.
 * - Other Serverless (AWS Lambda, Google Cloud, etc.): It detects the environment via environment variables
 *   and uses a regular `await flush()`.
 *
 *  @internal This function is supposed for internal Sentry SDK usage only.
 *  @hidden
 */
export declare function flushIfServerless(params?: {
    timeout?: number;
    cloudflareWaitUntil?: (task: Promise<any>) => void;
} | {
    timeout?: number;
    cloudflareCtx?: MinimalCloudflareContext;
}): Promise<void>;
export {};
//# sourceMappingURL=flushIfServerless.d.ts.map