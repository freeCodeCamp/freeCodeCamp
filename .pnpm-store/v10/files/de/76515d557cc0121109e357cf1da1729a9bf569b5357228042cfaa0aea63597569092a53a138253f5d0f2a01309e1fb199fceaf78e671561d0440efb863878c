import { Reporter } from '../Reporter';
import { RpcMessageChannel } from '../../rpc';
interface ReporterRpcClient extends Reporter {
    isConnected: () => boolean;
    connect: () => Promise<void>;
    disconnect: () => Promise<void>;
}
declare function createReporterRpcClient<TConfiguration extends object>(channel: RpcMessageChannel, configuration: TConfiguration): ReporterRpcClient;
declare function composeReporterRpcClients(clients: ReporterRpcClient[]): ReporterRpcClient;
export { ReporterRpcClient, createReporterRpcClient, composeReporterRpcClients };
