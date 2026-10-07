import { Server as HttpServer } from "http";
import { Server, AttachOptions, ServerOptions } from "./server";
import transports from "./transports/index";
import * as parser from "engine.io-parser";
export { Server, transports, listen, attach, parser };
export type { AttachOptions, ServerOptions, BaseServer, ErrorCallback, } from "./server";
export { uServer } from "./userver";
export { Socket } from "./socket";
export { Transport } from "./transport";
export declare const protocol = 4;
/**
 * Creates an http.Server exclusively used for WS upgrades, and starts listening.
 *
 * @param port
 * @param options
 * @param listenCallback - callback for http.Server.listen()
 * @return engine.io server
 */
declare function listen(port: number, options?: AttachOptions & ServerOptions, listenCallback?: () => void): Server;
/**
 * Captures upgrade requests for a http.Server.
 *
 * @param server
 * @param options
 * @return engine.io server
 */
declare function attach(server: HttpServer, options: AttachOptions & ServerOptions): Server;
