import Logger from 'bunyan';
import express from 'express';
export declare const createServer: (args: ServerArgs) => express.Application;
export interface ServerArgs {
    webhook: express.Application;
    logger: Logger;
}
