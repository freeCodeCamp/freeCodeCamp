declare type RpcDispatcher = <TMessage>(message: TMessage) => Promise<void>;
interface RpcHost {
    dispatch: RpcDispatcher;
    register: (dispatch: RpcDispatcher) => void;
}
export { RpcHost, RpcDispatcher };
