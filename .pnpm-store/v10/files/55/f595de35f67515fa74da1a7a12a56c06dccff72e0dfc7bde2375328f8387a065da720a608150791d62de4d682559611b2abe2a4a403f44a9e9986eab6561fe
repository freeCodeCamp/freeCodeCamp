import pLimit from 'p-limit';
export function useQueue(options) {
    const queue = [];
    const limit = (options === null || options === void 0 ? void 0 : options.concurrency) ? pLimit(options.concurrency) : async (fn) => fn();
    return {
        add(fn) {
            queue.push(() => limit(fn));
        },
        runAll() {
            return Promise.all(queue.map(fn => fn()));
        },
    };
}
export function useSyncQueue() {
    const queue = [];
    return {
        add(fn) {
            queue.push(fn);
        },
        runAll() {
            for (const fn of queue) {
                fn();
            }
        },
    };
}
