# Installation
> `npm install --save @types/cors`

# Summary
This package contains type definitions for cors (https://github.com/expressjs/cors/).

# Details
Files were exported from https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/cors.
## [index.d.ts](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/cors/index.d.ts)
````ts
/// <reference types="node" />

import { IncomingHttpHeaders } from "http";

type StaticOrigin = boolean | string | RegExp | Array<boolean | string | RegExp>;

type CustomOrigin = (
    requestOrigin: string | undefined,
    callback: (err: Error | null, origin?: StaticOrigin) => void,
) => void;

declare namespace e {
    interface CorsRequest {
        method?: string | undefined;
        headers: IncomingHttpHeaders;
    }
    interface CorsOptions {
        /**
         * @default '*'
         */
        origin?: StaticOrigin | CustomOrigin | undefined;
        /**
         * @default 'GET,HEAD,PUT,PATCH,POST,DELETE'
         */
        methods?: string | string[] | undefined;
        allowedHeaders?: string | string[] | undefined;
        exposedHeaders?: string | string[] | undefined;
        credentials?: boolean | undefined;
        maxAge?: number | undefined;
        /**
         * @default false
         */
        preflightContinue?: boolean | undefined;
        /**
         * @default 204
         */
        optionsSuccessStatus?: number | undefined;
    }
    type CorsOptionsDelegate<T extends CorsRequest = CorsRequest> = (
        req: T,
        callback: (err: Error | null, options?: CorsOptions) => void,
    ) => void;
}

declare function e<T extends e.CorsRequest = e.CorsRequest>(
    options?: e.CorsOptions | e.CorsOptionsDelegate<T>,
): (
    req: T,
    res: {
        statusCode?: number | undefined;
        setHeader(key: string, value: string): any;
        end(): any;
    },
    next: (err?: any) => any,
) => void;
export = e;

````

### Additional Details
 * Last updated: Thu, 08 May 2025 11:03:35 GMT
 * Dependencies: [@types/node](https://npmjs.com/package/@types/node)

# Credits
These definitions were written by [Alan Plum](https://github.com/pluma), and [Gaurav Sharma](https://github.com/gtpan77).
