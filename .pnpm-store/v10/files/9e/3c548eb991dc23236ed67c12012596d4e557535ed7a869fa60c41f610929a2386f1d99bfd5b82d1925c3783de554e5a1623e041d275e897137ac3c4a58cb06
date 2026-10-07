/// <reference types="node" />

type ms = number;

import _Cookies = require("./cookies");

import * as http from "http";
import { Writable } from "stream";
import * as tls from "tls";

declare namespace fetch {
    type Cookies = _Cookies;

    interface WritableResponse extends Writable {
        statusCode: number;
        headers: http.IncomingHttpHeaders;
    }

    interface Options {
        fetchRes?: Writable | undefined;
        cookies?: Cookies | undefined;
        cookie?: string | undefined;
        redirects?: number | undefined;
        maxRedirects?: number | undefined;
        method?: string | undefined;
        headers?: { [key: string]: string } | undefined;
        userAgent?: string | undefined;
        body?: Buffer | string | { [key: string]: string } | undefined;
        contentType?: string | false | undefined;
        tls?: tls.TlsOptions | undefined;
        timeout?: ms | undefined;
        allowErrorResponse?: boolean | undefined;
    }
}

declare function fetch(url: string, options?: fetch.Options): fetch.WritableResponse;

export = fetch;
