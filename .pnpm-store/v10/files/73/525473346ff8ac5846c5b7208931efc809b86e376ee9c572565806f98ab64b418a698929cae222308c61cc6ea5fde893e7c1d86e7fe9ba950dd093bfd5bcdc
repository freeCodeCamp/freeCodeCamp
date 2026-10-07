import { RpcProcedure, RpcProcedurePayload, RpcProcedureResult } from './RpcProcedure';
import { RpcMessagePort } from './RpcMessagePort';
interface RpcClient {
    readonly isConnected: () => boolean;
    readonly connect: () => Promise<void>;
    readonly disconnect: () => Promise<void>;
    readonly dispatchCall: <TProcedure extends RpcProcedure>(procedure: TProcedure, payload: RpcProcedurePayload<TProcedure>) => Promise<RpcProcedureResult<TProcedure>>;
}
declare function createRpcClient(port: RpcMessagePort): RpcClient;
export { RpcClient, createRpcClient };
