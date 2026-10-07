import type { Request } from "express";
import { GatsbyReduxStore } from "../../redux";
import { IGatsbyPage } from "../../redux/types";
import { IServerData } from "../get-server-data";
import { IErrorRenderMeta } from "./parse-error";
export declare const initDevWorkerPool: () => void;
export declare const restartWorker: (htmlComponentRendererPath: string) => void;
interface IRenderDevHtmlProps {
    path: string;
    page?: IGatsbyPage;
    skipSsr?: boolean;
    store: GatsbyReduxStore;
    error?: IErrorRenderMeta;
    htmlComponentRendererPath: string;
    directory: string;
    req: Request;
    allowTimedFallback: boolean;
}
export declare const renderDevHTML: ({ path, page, skipSsr, store, error, htmlComponentRendererPath, allowTimedFallback, directory, req, }: IRenderDevHtmlProps) => Promise<{
    html: string;
    serverData?: IServerData;
}>;
export {};
