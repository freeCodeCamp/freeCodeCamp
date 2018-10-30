import Webhooks, { WebhookEvent } from '@octokit/webhooks';
import Logger from 'bunyan';
import express from 'express';
import { Application } from './application';
import { Context } from './context';
export declare class Probot {
    server: express.Application;
    webhook: Webhooks;
    logger: Logger;
    private options;
    private apps;
    private app;
    private githubToken?;
    constructor(options: Options);
    errorHandler(err: Error): void;
    receive(event: WebhookEvent): Promise<[void, void, void][]>;
    load(appFn: string | ApplicationFunction): Application;
    setup(appFns: Array<string | ApplicationFunction>): void;
    start(): void;
}
export declare const createProbot: (options: Options) => Probot;
export declare type ApplicationFunction = (app: Application) => void;
export interface Options {
    webhookPath?: string;
    secret?: string;
    id?: number;
    cert?: string;
    githubToken?: string;
    webhookProxy?: string;
    port?: number;
}
export { Logger, Context, Application };
