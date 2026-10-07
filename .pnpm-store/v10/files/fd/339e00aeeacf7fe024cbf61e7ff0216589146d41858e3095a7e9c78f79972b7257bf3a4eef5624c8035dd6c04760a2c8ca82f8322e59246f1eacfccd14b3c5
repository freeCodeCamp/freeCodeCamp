import type { IncomingHttpHeaders } from "http";
import type { ParsedUrlQuery } from "querystring";
export type DisconnectReason = "transport error" | "transport close" | "forced close" | "ping timeout" | "parse error" | "server shutting down" | "forced server close" | "client namespace disconnect" | "server namespace disconnect";
export interface SocketReservedEventsMap {
    disconnect: (reason: DisconnectReason, description?: any) => void;
    disconnecting: (reason: DisconnectReason, description?: any) => void;
    error: (err: Error) => void;
}
export interface EventEmitterReservedEventsMap {
    newListener: (eventName: string | Symbol, listener: (...args: any[]) => void) => void;
    removeListener: (eventName: string | Symbol, listener: (...args: any[]) => void) => void;
}
export declare const RESERVED_EVENTS: ReadonlySet<string | Symbol>;
/**
 * The handshake details
 */
export interface Handshake {
    /**
     * The headers sent as part of the handshake
     */
    headers: IncomingHttpHeaders;
    /**
     * The date of creation (as string)
     */
    time: string;
    /**
     * The ip of the client
     */
    address: string;
    /**
     * Whether the connection is cross-domain
     */
    xdomain: boolean;
    /**
     * Whether the connection is secure
     */
    secure: boolean;
    /**
     * The date of creation (as unix timestamp)
     */
    issued: number;
    /**
     * The request URL string
     */
    url: string;
    /**
     * The query object
     */
    query: ParsedUrlQuery;
    /**
     * The auth object
     */
    auth: {
        [key: string]: any;
    };
}
