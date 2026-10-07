declare class Mutex {
    private mutex;
    lock(): PromiseLike<() => void>;
    dispatch<T>(fn: () => PromiseLike<T>): Promise<T>;
}
export default Mutex;
