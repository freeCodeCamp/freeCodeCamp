import Logger from 'bunyan';
export declare const createWebhookProxy: (opts: WebhookProxyOptions) => any;
export interface WebhookProxyOptions {
    url?: string;
    port?: number;
    path?: string;
    logger: Logger;
}
