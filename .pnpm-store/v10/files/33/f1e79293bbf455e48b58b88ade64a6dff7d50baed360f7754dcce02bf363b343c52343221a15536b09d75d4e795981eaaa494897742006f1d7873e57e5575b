interface RpcProcedure<TPayload = unknown, TResult = unknown> extends String {
}
declare type RpcProcedurePayload<TProcedure> = TProcedure extends RpcProcedure<infer TPayload, infer TResult> ? TPayload : never;
declare type RpcProcedureResult<TProcedure> = TProcedure extends RpcProcedure<infer TPayload, infer TResult> ? TResult : never;
export { RpcProcedure, RpcProcedurePayload, RpcProcedureResult };
