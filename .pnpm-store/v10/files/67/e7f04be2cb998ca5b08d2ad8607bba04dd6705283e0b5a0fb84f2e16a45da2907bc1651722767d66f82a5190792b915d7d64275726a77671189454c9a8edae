declare class URLSearchParamsImpl {
    constructor(
        globalObject: object,
        constructorArgs: readonly [
            init?: ReadonlyArray<readonly [name: string, value: string]> | { readonly [name: string]: string } | string,
        ],
        privateData: { readonly doNotStripQMark?: boolean | undefined },
    );

    append(name: string, value: string): void;
    delete(name: string): void;
    get(name: string): string | null;
    getAll(name: string): string[];
    has(name: string): boolean;
    set(name: string, value: string): void;
    sort(): void;

    [Symbol.iterator](): IterableIterator<[name: string, value: string]>;
}
export { URLSearchParamsImpl as implementation };
