export {};

// These interfaces are absent from lib.webworker, so the conditionals use `onabort` rather than `onmessage`
type _Storage = typeof globalThis extends { onabort: any } ? {} : Storage;
interface Storage {
    readonly length: number;
    clear(): void;
    getItem(key: string): string | null;
    key(index: number): string | null;
    removeItem(key: string): void;
    setItem(key: string, value: string): void;
    [key: string]: any;
}

declare global {
    interface Storage extends _Storage {}
    var Storage: typeof globalThis extends { onabort: any; Storage: infer T } ? T : {
        prototype: Storage;
        new(): Storage;
    };

    var localStorage: Storage;
    var sessionStorage: Storage;
}
