# Installation
> `npm install --save @types/responselike`

# Summary
This package contains type definitions for responselike (https://github.com/lukechilds/responselike#readme).

# Details
Files were exported from https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/responselike.
## [index.d.ts](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/responselike/index.d.ts)
````ts
// Type definitions for responselike 1.0
// Project: https://github.com/lukechilds/responselike#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { IncomingMessage } from "http";
import { Stream } from "stream";

export = ResponseLike;

/**
 * Returns a streamable response object similar to a [Node.js HTTP response stream](https://nodejs.org/api/http.html#http_class_http_incomingmessage).
 */
declare class ResponseLike extends Stream.Readable {
    statusCode: number;
    headers: { [header: string]: string | string[] | undefined };
    body: Buffer;
    url: string;

    /**
     * @param statusCode HTTP response status code.
     * @param headers HTTP headers object. Keys will be automatically lowercased.
     * @param body A Buffer containing the response body. The Buffer contents will be streamable but is also exposed directly as `response.body`.
     * @param url Request URL string.
     */
    constructor(
        statusCode: number,
        headers: { [header: string]: string | string[] | undefined },
        body: Buffer,
        url: string,
    );
}

````

### Additional Details
 * Last updated: Wed, 27 Sep 2023 07:12:04 GMT
 * Dependencies: [@types/node](https://npmjs.com/package/@types/node)
 * Global values: none

# Credits
These definitions were written by [BendingBender](https://github.com/BendingBender).
