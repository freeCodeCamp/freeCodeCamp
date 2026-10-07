import { URL } from 'whatwg-url';
import { redactConnectionString, ConnectionStringRedactionOptions } from './redact';
export { redactConnectionString, ConnectionStringRedactionOptions };
declare class CaseInsensitiveMap<K extends string = string> extends Map<K, string> {
    delete(name: K): boolean;
    get(name: K): string | undefined;
    has(name: K): boolean;
    set(name: K, value: any): this;
    _normalizeKey(name: any): K;
}
declare abstract class URLWithoutHost extends URL {
    abstract get host(): never;
    abstract set host(value: never);
    abstract get hostname(): never;
    abstract set hostname(value: never);
    abstract get port(): never;
    abstract set port(value: never);
    abstract get href(): string;
    abstract set href(value: string);
}
export interface ConnectionStringParsingOptions {
    looseValidation?: boolean;
}
export declare class ConnectionString extends URLWithoutHost {
    _hosts: string[];
    constructor(uri: string, options?: ConnectionStringParsingOptions);
    get host(): never;
    set host(_ignored: never);
    get hostname(): never;
    set hostname(_ignored: never);
    get port(): never;
    set port(_ignored: never);
    get href(): string;
    set href(_ignored: string);
    get isSRV(): boolean;
    get hosts(): string[];
    set hosts(list: string[]);
    toString(): string;
    clone(): ConnectionString;
    redact(options?: ConnectionStringRedactionOptions): ConnectionString;
    typedSearchParams<T extends {}>(): {
        append(name: keyof T & string, value: any): void;
        delete(name: keyof T & string): void;
        get(name: keyof T & string): string | null;
        getAll(name: keyof T & string): string[];
        has(name: keyof T & string): boolean;
        set(name: keyof T & string, value: any): void;
        keys(): IterableIterator<keyof T & string>;
        values(): IterableIterator<string>;
        entries(): IterableIterator<[keyof T & string, string]>;
        _normalizeKey(name: keyof T & string): string;
        [Symbol.iterator](): IterableIterator<[keyof T & string, string]>;
        sort(): void;
        forEach<THIS_ARG = void>(callback: (this: THIS_ARG, value: string, name: string, searchParams: any) => void, thisArg?: THIS_ARG | undefined): void;
        readonly [Symbol.toStringTag]: "URLSearchParams";
    };
}
export declare class CommaAndColonSeparatedRecord<K extends {} = Record<string, unknown>> extends CaseInsensitiveMap<keyof K & string> {
    constructor(from?: string | null);
    toString(): string;
}
export default ConnectionString;
