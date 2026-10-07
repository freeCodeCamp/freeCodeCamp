/// <reference types="node" />
/// <reference types="node" />
import { type Watching } from "webpack-dev-middleware";
import webpack from "webpack";
import http from "http";
import https from "https";
import * as WorkerPool from "../utils/worker/pool";
import { WebsocketManager } from "../utils/websocket-manager";
import { IProgram } from "../commands/types";
import type { Express } from "express";
type ActivityTracker = any;
export type WebpackWatching = NonNullable<Watching>;
interface IServer {
    compiler: webpack.Compiler;
    listener: http.Server | https.Server;
    webpackActivity: ActivityTracker;
    websocketManager: WebsocketManager;
    workerPool: WorkerPool.GatsbyWorkerPool;
    webpackWatching: WebpackWatching;
}
export declare function startServer(program: IProgram, app: Express, workerPool?: WorkerPool.GatsbyWorkerPool): Promise<IServer>;
export {};
