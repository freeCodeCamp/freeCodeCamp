/**
 * Event-like interface that's usable in browser and node.
 *
 * Note: Here we mean the kind of events handled by event listeners, not our `Event` type.
 *
 * Property availability taken from https://developer.mozilla.org/en-US/docs/Web/API/Event#browser_compatibility
 */
export interface PolymorphicEvent {
    [key: string]: unknown;
    readonly type: string;
    readonly target?: unknown;
    readonly currentTarget?: unknown;
}
/** A `Request` type compatible with Node, Express, browser, etc., because everything is optional */
export type PolymorphicRequest = BaseRequest & NodeRequest & ExpressRequest & KoaRequest & NextjsRequest;
type BaseRequest = {
    method?: string;
    url?: string;
};
type NodeRequest = BaseRequest & {
    headers?: {
        [key: string]: string | string[] | undefined;
    };
    protocol?: string;
    socket?: {
        encrypted?: boolean;
        remoteAddress?: string;
    };
};
type KoaRequest = NodeRequest & {
    host?: string;
    hostname?: string;
    ip?: string;
    originalUrl?: string;
};
type NextjsRequest = NodeRequest & {
    cookies?: {
        [key: string]: string;
    };
    query?: {
        [key: string]: any;
    };
};
type ExpressRequest = NodeRequest & {
    baseUrl?: string;
    body?: string | {
        [key: string]: any;
    };
    host?: string;
    hostname?: string;
    ip?: string;
    originalUrl?: string;
    route?: {
        path: string;
        stack: [
            {
                name: string;
            }
        ];
    };
    query?: {
        [key: string]: any;
    };
    user?: {
        [key: string]: any;
    };
    _reconstructedRoute?: string;
};
export {};
//# sourceMappingURL=polymorphics.d.ts.map
