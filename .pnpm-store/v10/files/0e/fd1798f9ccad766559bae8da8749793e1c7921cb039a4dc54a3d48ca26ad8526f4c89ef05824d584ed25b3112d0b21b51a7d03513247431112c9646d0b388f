import { RpcMessagePort } from './RpcMessagePort';
interface RpcMessageChannel {
    readonly servicePort: RpcMessagePort;
    readonly clientPort: RpcMessagePort;
    readonly isOpen: () => boolean;
    readonly open: () => Promise<void>;
    readonly close: () => Promise<void>;
}
declare function createRpcMessageChannel(servicePort: RpcMessagePort, clientPort: RpcMessagePort, linkPorts?: () => Promise<void>, unlinkPorts?: () => Promise<void>): RpcMessageChannel;
export { RpcMessageChannel, createRpcMessageChannel };
