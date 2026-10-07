/**
 * @internal
 *
 * A subset of the Storage interface defined in the WHATWG HTML specification.
 * Access by index is not supported, as it cannot be replicated without Proxy
 * objects.
 *
 * The interface has been augmented to support asynchronous storage
 *
 * @see https://html.spec.whatwg.org/multipage/webstorage.html#the-storage-interface
 */
export interface Storage {
    getItem(key: string): string | null | Promise<string | null>;
    removeItem(key: string): void | Promise<void>;
    setItem(key: string, data: string): void | Promise<void>;
}
