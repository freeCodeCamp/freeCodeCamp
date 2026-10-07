type Callback = (...args: any[]) => void;
type Defer = {
    wait: () => Promise<void>;
    cancel: () => void;
};
export declare function defer<TCallback extends Callback>(callback: TCallback): TCallback & Defer;
export {};
