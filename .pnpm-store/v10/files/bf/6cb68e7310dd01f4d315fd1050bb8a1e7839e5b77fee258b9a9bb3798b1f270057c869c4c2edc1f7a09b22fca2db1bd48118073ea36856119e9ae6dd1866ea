import * as reporterActionsForTypes from "./redux/actions";
import { Span } from "opentracing";
import { reporter as gatsbyReporter } from "./reporter";
import { IStructuredError } from "../structured-errors/types";
import { ErrorMeta } from "./types";
interface ICreateProgressReporterArguments {
    id: string;
    text: string;
    start: number;
    total: number;
    span: Span;
    reporter: typeof gatsbyReporter;
    reporterActions: typeof reporterActionsForTypes;
    pluginName?: string;
}
export interface IProgressReporter {
    start(): void;
    setStatus(statusText: string): void;
    tick(increment?: number): void;
    panicOnBuild(errorMeta: ErrorMeta, error?: Error | Array<Error>): IStructuredError | Array<IStructuredError>;
    panic(errorMeta: ErrorMeta, error?: Error | Array<Error>): never;
    end(): void;
    done(): void;
    total: number;
    span: Span;
}
export declare const createProgressReporter: ({ id, text, start, total, span, reporter, reporterActions, pluginName, }: ICreateProgressReporterArguments) => IProgressReporter;
export {};
