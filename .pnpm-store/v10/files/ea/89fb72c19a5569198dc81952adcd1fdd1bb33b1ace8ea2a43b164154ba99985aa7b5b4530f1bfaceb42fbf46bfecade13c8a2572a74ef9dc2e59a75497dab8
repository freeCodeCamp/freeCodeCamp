import type * as http from 'http';
export type IncomingMessage = http.IncomingMessage & {
    originalUrl?: http.IncomingMessage['url'] | undefined;
};
export type NextFunction = (err?: any) => void;
export type SimpleHandleFunction = (req: IncomingMessage, res: http.ServerResponse) => void;
export type NextHandleFunction = (req: IncomingMessage, res: http.ServerResponse, next: NextFunction) => void;
export type ErrorHandleFunction = (err: any, req: IncomingMessage, res: http.ServerResponse, next: NextFunction) => void;
export type HandleFunction = SimpleHandleFunction | NextHandleFunction | ErrorHandleFunction;
export interface Server extends NodeJS.EventEmitter {
    (req: http.IncomingMessage, res: http.ServerResponse, next?: Function): void;
    route: string;
    stack: Array<{
        route: string;
        handle: HandleFunction | http.Server;
    }>;
    use(fn: NextHandleFunction): Server;
    use(fn: HandleFunction): Server;
    use(route: string, fn: NextHandleFunction): Server;
    use(route: string, fn: HandleFunction): Server;
    handle(req: http.IncomingMessage, res: http.ServerResponse, next: Function): void;
}
export declare const _LAYERS_STORE_PROPERTY: unique symbol;
export type UseArgs1 = [HandleFunction];
export type UseArgs2 = [string, HandleFunction];
export type UseArgs = UseArgs1 | UseArgs2;
export type Use = (...args: UseArgs) => Server;
export type PatchedRequest = {
    [_LAYERS_STORE_PROPERTY]: string[];
} & IncomingMessage;
//# sourceMappingURL=internal-types.d.ts.map