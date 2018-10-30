/// <reference types="bunyan" />
import { Logger } from './';
export declare const wrapLogger: (logger: Logger, baseLogger?: Logger | undefined) => LoggerWithTarget;
export interface LoggerWithTarget extends Logger {
    (): boolean;
    (...params: any[]): void;
    target: Logger;
    child: (attrs: ChildArgs) => LoggerWithTarget;
    trace: LoggerWithTarget;
    debug: LoggerWithTarget;
    info: LoggerWithTarget;
    warn: LoggerWithTarget;
    error: LoggerWithTarget;
    fatal: LoggerWithTarget;
}
export interface ChildArgs {
    options?: object;
    name?: string;
    id?: string | number | string[];
    installation?: string;
}
