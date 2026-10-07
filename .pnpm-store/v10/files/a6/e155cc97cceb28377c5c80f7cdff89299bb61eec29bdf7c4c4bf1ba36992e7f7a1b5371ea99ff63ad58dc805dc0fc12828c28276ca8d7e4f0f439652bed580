/// <reference types="node" resolution-mode="require"/>
/// <reference types="node" resolution-mode="require"/>
/// <reference types="node" resolution-mode="require"/>
/// <reference types="node" resolution-mode="require"/>
/// <reference types="node" resolution-mode="require"/>
import { Duplex } from 'node:stream';
import { URL } from 'node:url';
import type { ClientRequest } from 'node:http';
import type { Socket } from 'node:net';
import type { Timings } from '@szmarczak/http-timer';
import Options from './options.js';
import { type PlainResponse, type Response } from './response.js';
import { RequestError } from './errors.js';
type Error = NodeJS.ErrnoException;
export type Progress = {
    percent: number;
    transferred: number;
    total?: number;
};
export type GotEventFunction<T> = 
/**
`request` event to get the request object of the request.

 __Tip__: You can use `request` event to abort requests.

@example
```
import got from 'got';

got.stream('https://github.com')
    .on('request', request => setTimeout(() => request.destroy(), 50));
```
*/
((name: 'request', listener: (request: ClientRequest) => void) => T)
/**
The `response` event to get the response object of the final request.
*/
 & (<R extends Response>(name: 'response', listener: (response: R) => void) => T)
/**
The `redirect` event to get the response object of a redirect. The second argument is options for the next request to the redirect location.
*/
 & (<R extends Response, N extends Options>(name: 'redirect', listener: (response: R, nextOptions: N) => void) => T)
/**
Progress events for uploading (sending a request) and downloading (receiving a response).
The `progress` argument is an object like:

```
{
    percent: 0.1,
    transferred: 1024,
    total: 10240
}
```

If the `content-length` header is missing, `total` will be `undefined`.

@example
```
import got from 'got';

const response = await got('https://sindresorhus.com')
    .on('downloadProgress', progress => {
        // Report download progress
    })
    .on('uploadProgress', progress => {
        // Report upload progress
    });

console.log(response);
```
*/
 & ((name: 'uploadProgress' | 'downloadProgress', listener: (progress: Progress) => void) => T)
/**
To enable retrying on a Got stream, it is required to have a `retry` handler attached.

When this event is emitted, you should reset the stream you were writing to and prepare the body again.

See `got.options.retry` for more information.
*/
 & ((name: 'retry', listener: (retryCount: number, error: RequestError) => void) => T);
export type RequestEvents<T> = {
    on: GotEventFunction<T>;
    once: GotEventFunction<T>;
    off: GotEventFunction<T>;
};
type UrlType = ConstructorParameters<typeof Options>[0];
type OptionsType = ConstructorParameters<typeof Options>[1];
type DefaultsType = ConstructorParameters<typeof Options>[2];
export default class Request extends Duplex implements RequestEvents<Request> {
    ['constructor']: typeof Request;
    _noPipe?: boolean;
    options: Options;
    response?: PlainResponse;
    requestUrl?: URL;
    redirectUrls: URL[];
    retryCount: number;
    private _requestOptions;
    private _stopRetry;
    private _downloadedSize;
    private _uploadedSize;
    private _stopReading;
    private readonly _pipedServerResponses;
    private _request?;
    private _responseSize?;
    private _bodySize?;
    private _unproxyEvents;
    private _isFromCache?;
    private _cannotHaveBody;
    private _triggerRead;
    private _jobs;
    private _cancelTimeouts;
    private readonly _removeListeners;
    private _nativeResponse?;
    private _flushed;
    private _aborted;
    private _requestInitialized;
    constructor(url: UrlType, options?: OptionsType, defaults?: DefaultsType);
    flush(): Promise<void>;
    _beforeError(error: Error): void;
    _read(): void;
    _write(chunk: unknown, encoding: BufferEncoding | undefined, callback: (error?: Error | null) => void): void;
    _final(callback: (error?: Error | null) => void): void;
    _destroy(error: Error | null, callback: (error: Error | null) => void): void;
    pipe<T extends NodeJS.WritableStream>(destination: T, options?: {
        end?: boolean;
    }): T;
    unpipe<T extends NodeJS.WritableStream>(destination: T): this;
    private _finalizeBody;
    private _onResponseBase;
    private _setRawBody;
    private _onResponse;
    private _onRequest;
    private _asyncWrite;
    private _sendBody;
    private _prepareCache;
    private _createCacheableRequest;
    private _makeRequest;
    private _error;
    private _writeRequest;
    /**
    The remote IP address.
    */
    get ip(): string | undefined;
    /**
    Indicates whether the request has been aborted or not.
    */
    get isAborted(): boolean;
    get socket(): Socket | undefined;
    /**
    Progress event for downloading (receiving a response).
    */
    get downloadProgress(): Progress;
    /**
    Progress event for uploading (sending a request).
    */
    get uploadProgress(): Progress;
    /**
    The object contains the following properties:

    - `start` - Time when the request started.
    - `socket` - Time when a socket was assigned to the request.
    - `lookup` - Time when the DNS lookup finished.
    - `connect` - Time when the socket successfully connected.
    - `secureConnect` - Time when the socket securely connected.
    - `upload` - Time when the request finished uploading.
    - `response` - Time when the request fired `response` event.
    - `end` - Time when the response fired `end` event.
    - `error` - Time when the request fired `error` event.
    - `abort` - Time when the request fired `abort` event.
    - `phases`
        - `wait` - `timings.socket - timings.start`
        - `dns` - `timings.lookup - timings.socket`
        - `tcp` - `timings.connect - timings.lookup`
        - `tls` - `timings.secureConnect - timings.connect`
        - `request` - `timings.upload - (timings.secureConnect || timings.connect)`
        - `firstByte` - `timings.response - timings.upload`
        - `download` - `timings.end - timings.response`
        - `total` - `(timings.end || timings.error || timings.abort) - timings.start`

    If something has not been measured yet, it will be `undefined`.

    __Note__: The time is a `number` representing the milliseconds elapsed since the UNIX epoch.
    */
    get timings(): Timings | undefined;
    /**
    Whether the response was retrieved from the cache.
    */
    get isFromCache(): boolean | undefined;
    get reusedSocket(): boolean | undefined;
}
export {};
