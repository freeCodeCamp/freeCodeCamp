declare type VoidFunc = () => void;
declare type Listener = {
    callback: VoidFunc;
    next: Listener | null;
    prev: Listener | null;
};
declare function createListenerCollection(): {
    clear(): void;
    notify(): void;
    get(): Listener[];
    subscribe(callback: () => void): () => void;
};
declare type ListenerCollection = ReturnType<typeof createListenerCollection>;
export interface Subscription {
    addNestedSub: (listener: VoidFunc) => VoidFunc;
    notifyNestedSubs: VoidFunc;
    handleChangeWrapper: VoidFunc;
    isSubscribed: () => boolean;
    onStateChange?: VoidFunc | null;
    trySubscribe: VoidFunc;
    tryUnsubscribe: VoidFunc;
    getListeners: () => ListenerCollection;
}
export declare function createSubscription(store: any, parentSub?: Subscription): Subscription;
export {};
