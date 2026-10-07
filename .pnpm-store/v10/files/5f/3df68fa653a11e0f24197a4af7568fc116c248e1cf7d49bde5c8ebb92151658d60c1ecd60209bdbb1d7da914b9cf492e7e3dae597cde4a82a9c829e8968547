// Backwards-compatible iterator interfaces, augmented with iterator helper methods by lib.esnext.iterator in TypeScript 5.6.
// The IterableIterator interface does not contain these methods, which creates assignability issues in places where IteratorObjects
// are expected (eg. DOM-compatible APIs) if lib.esnext.iterator is loaded.
// Also ensures that iterators returned by the Node API, which inherit from Iterator.prototype, correctly expose the iterator helper methods
// if lib.esnext.iterator is loaded.
// TODO: remove once this package no longer supports TS 5.5, and replace NodeJS.BuiltinIteratorReturn with BuiltinIteratorReturn.

// Placeholders for TS <5.6
interface IteratorObject<T, TReturn, TNext> {}
interface AsyncIteratorObject<T, TReturn, TNext> {}

declare namespace NodeJS {
    // Populate iterator methods for TS <5.6
    interface Iterator<T, TReturn, TNext> extends globalThis.Iterator<T, TReturn, TNext> {}
    interface AsyncIterator<T, TReturn, TNext> extends globalThis.AsyncIterator<T, TReturn, TNext> {}

    // Polyfill for TS 5.6's instrinsic BuiltinIteratorReturn type, required for DOM-compatible iterators
    type BuiltinIteratorReturn = ReturnType<any[][typeof Symbol.iterator]> extends
        globalThis.Iterator<any, infer TReturn> ? TReturn
        : any;
}
