import type { Request } from "express";
import type { IGatsbyPage } from "../redux/types";
export interface IServerData {
    headers?: Record<string, string>;
    props?: Record<string, unknown>;
    status?: number;
}
interface IModuleWithServerData {
    getServerData?: (args: {
        headers: Map<string, unknown>;
        method: string;
        url: string;
        query?: Record<string, unknown>;
        params?: Record<string, unknown>;
        pageContext: Record<string, unknown>;
    }) => Promise<IServerData>;
}
export declare function getServerData(req: Partial<Pick<Request, "query" | "method" | "url" | "headers">> | undefined, page: Pick<IGatsbyPage, "path" | "matchPath" | "context">, pagePath: string, mod: IModuleWithServerData | undefined): Promise<IServerData>;
export {};
