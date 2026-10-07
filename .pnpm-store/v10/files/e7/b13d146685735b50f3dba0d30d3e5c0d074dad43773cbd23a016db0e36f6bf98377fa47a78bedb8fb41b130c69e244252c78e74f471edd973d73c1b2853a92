import { Response } from "express";
/**
 * Add preload link headers to responses for .html files. This allows browser to schedule fetching critical resources
 * to render a page faster. Without them it would result in network waterfall (fetch js script -> parse and execute -> start downloading data)
 * With them we can start downloading data before JS executes.
 */
export declare function appendPreloadHeaders(requestPath: string, res: Response): Promise<void>;
