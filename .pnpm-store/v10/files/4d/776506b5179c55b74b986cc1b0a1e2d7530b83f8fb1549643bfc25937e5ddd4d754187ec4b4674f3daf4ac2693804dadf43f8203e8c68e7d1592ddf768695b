declare type Task<T> = (done: () => void) => Promise<T>;
interface Pool {
    submit<T>(task: Task<T>): Promise<T>;
    size: number;
    readonly pending: number;
}
declare function createPool(size: number): Pool;
export { Pool, createPool };
