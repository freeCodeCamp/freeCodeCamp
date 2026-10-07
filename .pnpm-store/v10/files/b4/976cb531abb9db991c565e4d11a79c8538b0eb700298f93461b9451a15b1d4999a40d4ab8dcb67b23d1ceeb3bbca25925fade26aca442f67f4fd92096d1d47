import * as reporterActionsForTypes from "./redux/actions";
import { Span } from "opentracing";
import { reporter as gatsbyReporter } from "./reporter";
import { IStructuredError } from "../structured-errors/types";
import { ErrorMeta } from "./types";
interface ICreateTimerReporterArguments {
    text: string;
    id: string;
    span: Span;
    reporter: typeof gatsbyReporter;
    reporterActions: typeof reporterActionsForTypes;
    pluginName?: string;
}
export interface ITimerReporter {
    start(): void;
    setStatus(statusText: string): void;
    panicOnBuild(errorMeta: ErrorMeta, error?: Error | Array<Error>): IStructuredError | Array<IStructuredError>;
    panic(errorMeta: ErrorMeta, error?: Error | Array<Error>): never;
    end(): void;
    span: Span;
}
export declare const createTimerReporter: ({ text, id, span, reporter, reporterActions, pluginName, }: ICreateTimerReporterArguments) => ITimerReporter;
export {};
