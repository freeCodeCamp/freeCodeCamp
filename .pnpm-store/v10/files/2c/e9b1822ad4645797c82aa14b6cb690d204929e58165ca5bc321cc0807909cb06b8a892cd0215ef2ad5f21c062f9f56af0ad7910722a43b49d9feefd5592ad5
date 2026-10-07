import { Key } from "./Key";
/**
 * Represents a cryptographic operation that has been instantiated but not
 * necessarily fed all data or finalized.
 *
 * @see https://msdn.microsoft.com/en-us/library/dn280996(v=vs.85).aspx
 */
export interface CryptoOperation {
    readonly algorithm: string;
    readonly key: Key;
    onabort: (event: Event) => void;
    oncomplete: (event: Event) => void;
    onerror: (event: Event) => void;
    onprogress: (event: Event) => void;
    readonly result: ArrayBuffer | undefined;
    abort(): void;
    finish(): void;
    process(buffer: ArrayBufferView): void;
}
