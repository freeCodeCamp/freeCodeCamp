declare type RpcMessageDispatch = <TMessage>(message: TMessage) => Promise<void>;
declare type RpcMessageListener = RpcMessageDispatch;
declare type RpcErrorListener = (error: Error) => void;
interface RpcMessagePort {
    readonly dispatchMessage: RpcMessageDispatch;
    readonly addMessageListener: (listener: RpcMessageListener) => void;
    readonly removeMessageListener: (listener: RpcMessageListener) => void;
    readonly addErrorListener: (listener: RpcErrorListener) => void;
    readonly removeErrorListener: (listener: RpcErrorListener) => void;
    readonly isOpen: () => boolean;
    readonly open: () => Promise<void>;
    readonly close: () => Promise<void>;
}
export { RpcMessagePort, RpcMessageDispatch, RpcMessageListener, RpcErrorListener };
