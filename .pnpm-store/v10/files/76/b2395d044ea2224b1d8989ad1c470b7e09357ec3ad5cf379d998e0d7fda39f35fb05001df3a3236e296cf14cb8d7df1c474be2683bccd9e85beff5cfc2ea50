import { IAddPendingTemplateDataWriteAction } from "../redux/types";
import { Server as HTTPSServer } from "https";
import { Server as HTTPServer } from "http";
import { IPageDataWithQueryResult } from "../utils/page-data";
import { Server as SocketIO, Socket } from "socket.io";
export interface IPageOrSliceQueryResult {
    id: string;
    result?: IPageDataWithQueryResult;
}
export interface IStaticQueryResult {
    id: string;
    result: unknown;
}
type QueryResultsMap = Map<string, IStaticQueryResult>;
interface IClientInfo {
    activePath: string | null;
    socket: Socket;
}
export declare class WebsocketManager {
    activePaths: Set<string>;
    clients: Set<IClientInfo>;
    errors: Map<string, string>;
    staticQueryResults: QueryResultsMap;
    websocket: SocketIO | undefined;
    init: ({ server }: {
        server: HTTPSServer | HTTPServer;
    }) => SocketIO;
    getSocket: () => SocketIO | undefined;
    emitStaticQueryData: (data: IStaticQueryResult) => void;
    emitPageData: (data: IPageOrSliceQueryResult) => void;
    emitSliceData: (data: IPageOrSliceQueryResult) => void;
    emitError: (id: string, message?: string) => void;
    emitStalePageDataPathsFromDirtyQueryTracking(): void;
    emitStalePageDataPathsFromStaticQueriesAssignment(pendingTemplateDataWrite: IAddPendingTemplateDataWriteAction): void;
    emitStalePageDataPaths(stalePageDataPaths: Array<string>): boolean;
    emitStaleServerData(): boolean;
}
export declare const websocketManager: WebsocketManager;
export {};
