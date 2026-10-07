import { AbsoluteLocation, HandlerOptions, MiddlewareType, Priority, RelativeLocation, Step } from "@smithy/types";
export interface MiddlewareEntry<Input extends object, Output extends object> extends HandlerOptions {
    middleware: MiddlewareType<Input, Output>;
}
export interface AbsoluteMiddlewareEntry<Input extends object, Output extends object> extends MiddlewareEntry<Input, Output>, AbsoluteLocation {
    step: Step;
    priority: Priority;
}
export interface RelativeMiddlewareEntry<Input extends object, Output extends object> extends MiddlewareEntry<Input, Output>, RelativeLocation {
}
export type Normalized<T extends MiddlewareEntry<Input, Output>, Input extends object = {}, Output extends object = {}> = T & {
    after: Normalized<RelativeMiddlewareEntry<Input, Output>, Input, Output>[];
    before: Normalized<RelativeMiddlewareEntry<Input, Output>, Input, Output>[];
};
export interface NormalizedRelativeEntry<Input extends object, Output extends object> extends HandlerOptions {
    step: Step;
    middleware: MiddlewareType<Input, Output>;
    next?: NormalizedRelativeEntry<Input, Output>;
    prev?: NormalizedRelativeEntry<Input, Output>;
    priority: null;
}
export type NamedMiddlewareEntriesMap<Input extends object, Output extends object> = Record<string, MiddlewareEntry<Input, Output>>;
