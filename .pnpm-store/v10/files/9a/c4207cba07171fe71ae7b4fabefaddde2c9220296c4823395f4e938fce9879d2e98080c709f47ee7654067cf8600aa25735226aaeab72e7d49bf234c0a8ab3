import type { RequestHandler } from "express";
import { IAPIFunctionWarning } from "./config";
import type { IGatsbyFunction } from "../../redux/types";
interface ICreateMiddlewareConfig {
    getFunctions: () => Array<IGatsbyFunction>;
    prepareFn?: (functionObj: IGatsbyFunction) => Promise<void> | void;
    showDebugMessageInResponse?: boolean;
}
export declare function printConfigWarnings(warnings: Array<IAPIFunctionWarning>, functionObj: IGatsbyFunction): void;
export declare function functionMiddlewares(middlewareConfig: ICreateMiddlewareConfig): Array<RequestHandler>;
export {};
