/// <reference types="node" />
/// <reference types="node" />
/// <reference types="node" />
/// <reference types="node" />
/// <reference types="node" />
import * as http from 'http';
import * as https from 'https';
import type { Readable } from 'stream';
export type ThenableRequest = http.ClientRequest & {
    then: Promise<http.IncomingMessage>['then'];
};
export declare function toBuffer(stream: Readable): Promise<Buffer>;
export declare function json(stream: Readable): Promise<any>;
export declare function req(url: string | URL, opts?: https.RequestOptions): ThenableRequest;
//# sourceMappingURL=helpers.d.ts.map