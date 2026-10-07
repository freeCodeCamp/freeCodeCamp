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
