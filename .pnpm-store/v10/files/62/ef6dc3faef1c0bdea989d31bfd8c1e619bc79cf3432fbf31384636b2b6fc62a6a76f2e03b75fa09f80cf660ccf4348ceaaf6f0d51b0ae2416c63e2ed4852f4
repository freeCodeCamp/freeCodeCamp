export type TResult<Value extends unknown = unknown> = TOk<Value> | TFail;
export type TFail = undefined;
export type TOk<Value extends unknown = unknown> = {
    value: Value;
};
export declare function IsOk<Result extends TResult>(value: Result): value is Exclude<Result, TFail>;
export declare function Ok<Value extends unknown>(value: Value): TOk<Value>;
export declare function Fail(): undefined;
