import * as reporterActionsForTypes from "./redux/actions";
import { Span } from "opentracing";
interface ICreatePhantomReporterArguments {
    text: string;
    id: string;
    span: Span;
    reporterActions: typeof reporterActionsForTypes;
}
export interface IPhantomReporter {
    start(): void;
    end(): void;
    span: Span;
}
export declare const createPhantomReporter: ({ text, id, span, reporterActions, }: ICreatePhantomReporterArguments) => IPhantomReporter;
export {};
