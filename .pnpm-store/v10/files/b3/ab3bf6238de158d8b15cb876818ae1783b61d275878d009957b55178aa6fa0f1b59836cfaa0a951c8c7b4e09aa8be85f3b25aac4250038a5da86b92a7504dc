import { Compiler } from "webpack";
import { WebpackWatching } from "../utils/start-server";
import { WebsocketManager } from "../utils/websocket-manager";
import { IBuildContext } from "./";
export declare function startWebpackServer({ program, app, workerPool, store, }: Partial<IBuildContext>): Promise<{
    compiler: Compiler;
    websocketManager: WebsocketManager;
    webpackWatching: WebpackWatching;
}>;
