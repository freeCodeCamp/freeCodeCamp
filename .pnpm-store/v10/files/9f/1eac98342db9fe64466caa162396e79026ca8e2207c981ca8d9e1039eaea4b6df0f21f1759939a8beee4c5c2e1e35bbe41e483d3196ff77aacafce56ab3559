import { RpcProcedure } from './RpcProcedure';
import { RpcMessagePort } from './RpcMessagePort';
declare type RpcCallHandler<TPayload = any, TResult = any> = (payload: TPayload) => Promise<TResult>;
interface RpcService {
    readonly isOpen: () => boolean;
    readonly open: () => Promise<void>;
    readonly close: () => Promise<void>;
    readonly addCallHandler: <TPayload, TResult>(procedure: RpcProcedure<TPayload, TResult>, handler: RpcCallHandler<TPayload, TResult>) => void;
    readonly removeCallHandler: <TPayload, TResult>(procedure: RpcProcedure<TPayload, TResult>) => void;
}
declare function createRpcService(port: RpcMessagePort): RpcService;
export { RpcService, createRpcService };
