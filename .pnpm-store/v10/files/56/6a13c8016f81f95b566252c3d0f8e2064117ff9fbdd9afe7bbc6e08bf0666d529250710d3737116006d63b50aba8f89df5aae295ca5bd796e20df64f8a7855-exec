// Type definitions for keyv 3.1
// Project: https://github.com/lukechilds/keyv
// Definitions by: AryloYeung <https://github.com/Arylo>
//                 BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

/// <reference types="node" />
import { EventEmitter } from 'events';

type WithRequiredProperties<T, K extends keyof T> = T & Required<Pick<T, K>>;

declare class Keyv<TValue = any, TOpts extends { [key: string]: any } = {}> extends EventEmitter {
    /**
     * `this.opts` is an object containing at least the properties listed
     * below. However, `Keyv.Options` allows arbitrary properties as well.
     * These properties can be specified as the second type parameter to `Keyv`.
     */
    opts: WithRequiredProperties<
        Keyv.Options<TValue>,
        'deserialize' | 'namespace' | 'serialize' | 'store' | 'uri'
    > &
        TOpts;

    /**
     * @param opts The options object is also passed through to the storage adapter. Check your storage adapter docs for any extra options.
     */
    constructor(opts?: Keyv.Options<TValue> & TOpts);
    /**
     * @param uri The connection string URI.
     *
     * Merged into the options object as options.uri.
     * @param opts The options object is also passed through to the storage adapter. Check your storage adapter docs for any extra options.
     */
    constructor(uri?: string, opts?: Keyv.Options<TValue> & TOpts);

    /** Returns the value. */
    get<TRaw extends boolean = false>(key: string, options?: { raw?: TRaw }):
      Promise<(TRaw extends false
        ? TValue
        : Keyv.DeserializedData<TValue>)  | undefined>;
    /**
     * Set a value.
     *
     * By default keys are persistent. You can set an expiry TTL in milliseconds.
     */
    set(key: string, value: TValue, ttl?: number): Promise<true>;
    /**
     * Deletes an entry.
     *
     * Returns `true` if the key existed, `false` if not.
     */
    delete(key: string): Promise<boolean>;
    /** Delete all entries in the current namespace. */
    clear(): Promise<void>;
}

declare namespace Keyv {
    interface Options<TValue> {
        /** Namespace for the current instance. */
        namespace?: string | undefined;
        /** A custom serialization function. */
        serialize?: ((data: DeserializedData<TValue>) => string) | undefined;
        /** A custom deserialization function. */
        deserialize?: ((data: string) => DeserializedData<TValue> | undefined) | undefined;
        /** The connection string URI. */
        uri?: string | undefined;
        /** The storage adapter instance to be used by Keyv. */
        store?: Store<TValue> | undefined;
        /** Default TTL. Can be overridden by specififying a TTL on `.set()`. */
        ttl?: number | undefined;
        /** Specify an adapter to use. e.g `'redis'` or `'mongodb'`. */
        adapter?: 'redis' | 'mongodb' | 'mongo' | 'sqlite' | 'postgresql' | 'postgres' | 'mysql' | undefined;

        [key: string]: any;
    }

    interface DeserializedData<TValue> {
        value: TValue; expires: number | null;
    }

    interface Store<TValue> {
        get(key: string): TValue | Promise<TValue | undefined> | undefined;
        set(key: string, value: TValue, ttl?: number): any;
        delete(key: string): boolean | Promise<boolean>;
        clear(): void | Promise<void>;
    }
}

export = Keyv;
