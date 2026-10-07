import { Reporter } from '../Reporter';
import { RpcMessagePort } from '../../rpc';
interface ReporterRpcService {
    isOpen: () => boolean;
    open: () => Promise<void>;
    close: () => Promise<void>;
}
declare function registerReporterRpcService<TConfiguration extends object>(servicePort: RpcMessagePort, reporterFactory: (configuration: TConfiguration) => Reporter): ReporterRpcService;
export { ReporterRpcService, registerReporterRpcService };
