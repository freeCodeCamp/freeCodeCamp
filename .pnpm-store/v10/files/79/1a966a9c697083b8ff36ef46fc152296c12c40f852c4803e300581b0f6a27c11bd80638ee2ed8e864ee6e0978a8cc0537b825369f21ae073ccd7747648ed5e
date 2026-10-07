export default class Batcher<Callback extends (...args: Array<any>) => any> {
    private threshold;
    private queue;
    private callbacks;
    private bulkCallbacks;
    constructor(threshold: number);
    /** Add a call to the batcher */
    add(...args: Parameters<Callback>): void;
    /** Call all of our callbacks and clear out the queue */
    flush(): void;
    /** Sets up a callback for each batcher item */
    call(callback: (...args: Parameters<Callback>) => void): void;
    /** Sets up a bulk callback that takes the entire queue */
    bulkCall(callback: (args: Array<Parameters<Callback>>) => void): void;
}
