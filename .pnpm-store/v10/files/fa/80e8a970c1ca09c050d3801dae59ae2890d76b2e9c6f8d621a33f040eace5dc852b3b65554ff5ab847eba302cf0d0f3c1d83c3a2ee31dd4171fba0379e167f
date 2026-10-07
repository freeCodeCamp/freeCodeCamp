/// <reference types="node" />

import { Socket } from "net";
import { TLSSocket } from "tls";

/**
 * Establishes proxied connection to destinationPort
 */
declare function httpProxyClient(
    proxyUrl: string,
    destinationPort: number,
    destinationHost: string,
    callback: (err: Error | null, socket: TLSSocket | Socket) => void,
): void;

export = httpProxyClient;
