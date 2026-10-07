export interface Observer<T> {
    next: (value: T) => void;
    error: (error: Error) => void;
    complete: () => void;
}
export interface Observable<T> {
    subscribe(observer: Observer<T>): {
        unsubscribe: () => void;
    };
}
export declare type Callback = (value?: any) => any;
export declare function observableToAsyncIterable<T>(observable: Observable<T>): AsyncIterableIterator<T>;
