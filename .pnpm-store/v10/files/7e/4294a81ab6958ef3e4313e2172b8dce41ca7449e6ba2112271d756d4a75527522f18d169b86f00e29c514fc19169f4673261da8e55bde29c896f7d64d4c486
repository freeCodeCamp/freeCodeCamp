import { GrowthBook } from "../GrowthBook";
import { Attributes, FeatureApiResponse, LogUnion, Plugin } from "../types/growthbook";
import { UserScopedGrowthBook } from "../GrowthBookClient";
export type DevtoolsState = {
    attributes?: Record<string, any>;
    features?: Record<string, any>;
    experiments?: Record<string, number>;
};
export interface NextjsReadonlyRequestCookiesCompat {
    get: (name: string) => {
        name: string;
        value: string;
    } | undefined;
}
export interface NextjsRequestCompat {
    nextUrl: {
        searchParams: URLSearchParams;
    };
    cookies: {
        get: (name: string) => {
            name: string;
            value: string;
        } | undefined;
    };
}
export interface ExpressRequestCompat {
    cookies: Record<string, string | string[]>;
    query: Record<string, string>;
    [key: string]: unknown;
}
export declare function devtoolsPlugin(devtoolsState?: DevtoolsState): Plugin;
/**
 * For NextJS environments.
 * When using server components, use the `searchParams` and `requestCookies` fields.
 *  - Note: In NextJS 15+, you should await these values before passing them to the plugin
 * When using middleware / api routes, provide the `request` field instead.
 */
export declare function devtoolsNextjsPlugin({ searchParams, requestCookies, request, }: {
    searchParams?: {
        _gbdebug?: string;
    };
    requestCookies?: NextjsReadonlyRequestCookiesCompat;
    request?: NextjsRequestCompat;
}): Plugin;
/**
 * Intended to be used with cookieParser() middleware from npm: 'cookie-parser'.
 */
export declare function devtoolsExpressPlugin({ request, }: {
    request?: ExpressRequestCompat;
}): Plugin;
export type SdkInfo = {
    apiHost: string;
    clientKey: string;
    source?: string;
    version?: string;
    payload?: FeatureApiResponse;
    attributes?: Attributes;
};
export type LogEvent = {
    logs: LogUnion[];
    sdkInfo?: SdkInfo;
};
/**
 * Helper method to get debug script contents for DevTools
 * @param gb - GrowthBook instance. DevMode must be enabled to view log events.
 * @param {string} [source] - Label these events for ease of reading in DevTools
 * @example
 * A React logger component (implement yourself):
 ```
  return (
    <script dangerouslySetInnerHTML={{
      __html: getDebugScriptContents(gb, "nextjs")
    }} />
  );
 ```
 */
export declare function getDebugScriptContents(gb: GrowthBook, source?: string): string;
export declare function getDebugEvent(gb: GrowthBook | UserScopedGrowthBook, source?: string): LogEvent | null;
//# sourceMappingURL=devtools.d.ts.map