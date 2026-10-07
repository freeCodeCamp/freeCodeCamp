export interface WebFetchHeaders {
    append(name: string, value: string): void;
    delete(name: string): void;
    get(name: string): string | null;
    has(name: string): boolean;
    set(name: string, value: string): void;
    forEach(callbackfn: (value: string, key: string, parent: WebFetchHeaders) => void): void;
}
export interface WebFetchRequest {
    readonly headers: WebFetchHeaders;
    readonly method: string;
    readonly url: string;
    readonly body?: unknown;
    clone(): WebFetchRequest;
    text(): Promise<string>;
}
//# sourceMappingURL=webfetchapi.d.ts.map