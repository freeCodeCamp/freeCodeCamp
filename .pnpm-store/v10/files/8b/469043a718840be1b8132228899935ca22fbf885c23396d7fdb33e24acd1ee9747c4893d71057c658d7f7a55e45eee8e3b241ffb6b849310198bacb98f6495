/// <reference types="node" />
import { ConnectionPool } from "@smithy/types";
import { ClientHttp2Session } from "http2";
export declare class NodeHttp2ConnectionPool implements ConnectionPool<ClientHttp2Session> {
    private sessions;
    constructor(sessions?: ClientHttp2Session[]);
    poll(): ClientHttp2Session | void;
    offerLast(session: ClientHttp2Session): void;
    contains(session: ClientHttp2Session): boolean;
    remove(session: ClientHttp2Session): void;
    [Symbol.iterator](): IterableIterator<ClientHttp2Session>;
    destroy(connection: ClientHttp2Session): void;
}
