declare global {
    const StopIteration: (object & { readonly __brand__?: unique symbol }) | undefined;
}

declare function getStopIterationIterator<T>(origIterator: { next(): IteratorResult<T> }): Iterator<T, unknown, T>;

export = getStopIterationIterator;