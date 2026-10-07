import { RpcProcedure, RpcProcedurePayload, RpcProcedureResult } from './RpcProcedure';
interface RpcMessage<TType extends string = string, TProcedure extends RpcProcedure = RpcProcedure, TPayload = unknown> {
    rpc: true;
    type: TType;
    procedure: TProcedure;
    id: number;
    payload: TPayload;
    source?: string;
}
interface RpcRemoteError {
    message: string;
    stack?: string;
}
declare type RpcCall<TProcedure extends RpcProcedure> = RpcMessage<'call', TProcedure, RpcProcedurePayload<TProcedure>>;
declare type RpcReturn<TProcedure extends RpcProcedure> = RpcMessage<'return', TProcedure, RpcProcedureResult<TProcedure>>;
declare type RpcThrow<TProcedure extends RpcProcedure> = RpcMessage<'throw', TProcedure, RpcRemoteError>;
declare function createRpcMessage<TType extends string = string, TProcedure extends RpcProcedure = RpcProcedure, TPayload = unknown>(procedure: TProcedure, id: number, type: TType, payload: TPayload, source?: string): RpcMessage<TType, TProcedure, TPayload>;
declare function createRpcCall<TProcedure extends RpcProcedure>(procedure: TProcedure, index: number, payload: RpcProcedurePayload<TProcedure>): RpcCall<TProcedure>;
declare function createRpcReturn<TProcedure extends RpcProcedure>(procedure: TProcedure, index: number, payload: RpcProcedureResult<TProcedure>): RpcReturn<TProcedure>;
declare function createRpcThrow<TProcedure extends RpcProcedure, TError = Error>(procedure: TProcedure, index: number, payload: RpcRemoteError): RpcThrow<TProcedure>;
declare function isRpcMessage<TType extends string = string, TProcedure extends RpcProcedure = RpcProcedure>(candidate: unknown): candidate is RpcMessage<TType, TProcedure>;
declare function isRpcCallMessage<TType extends string = string, TProcedure extends RpcProcedure = RpcProcedure>(candidate: unknown): candidate is RpcCall<TProcedure>;
declare function isRpcReturnMessage<TType extends string = string, TProcedure extends RpcProcedure = RpcProcedure>(candidate: unknown): candidate is RpcReturn<TProcedure>;
declare function isRpcThrowMessage<TType extends string = string, TProcedure extends RpcProcedure = RpcProcedure>(candidate: unknown): candidate is RpcThrow<TProcedure>;
declare function getRpcMessageKey(message: RpcMessage): string;
export { RpcMessage, RpcCall, RpcReturn, RpcThrow, createRpcMessage, createRpcCall, createRpcReturn, createRpcThrow, isRpcMessage, isRpcCallMessage, isRpcReturnMessage, isRpcThrowMessage, getRpcMessageKey, };
