import {EventEmitter} from 'events';

type WithRequiredProperties<T, K extends keyof T> = T & Required<Pick<T, K>>;

declare class Keyv<Value = any, Options extends Record<string, any> = Record<string, unknown>> extends EventEmitter {
	/**
     * `this.opts` is an object containing at least the properties listed
     * below. However, `Keyv.Options` allows arbitrary properties as well.
     * These properties can be specified as the second type parameter to `Keyv`.
     */
	opts: WithRequiredProperties<
	Keyv.Options<Value>,
	'deserialize' | 'namespace' | 'serialize' | 'store' | 'uri'
	> &
	Options;

	/**
     * @param opts The options object is also passed through to the storage adapter. Check your storage adapter docs for any extra options.
     */
	constructor(options?: Keyv.Options<Value> & Options);
	/**
     * @param uri The connection string URI.
     *
     * Merged into the options object as options.uri.
     * @param opts The options object is also passed through to the storage adapter. Check your storage adapter docs for any extra options.
     */
	constructor(uri?: string, options?: Keyv.Options<Value> & Options);

	/** Returns the value. */
	get(key: string, options?: {raw?: false}): Promise<Value | undefined>;
	/** Returns the raw value. */
	get(key: string, options: {raw: true}): Promise<Keyv.DeserializedData<Value> | undefined>;

	/** Returns an array of values. Uses `store.getMany` if it exists, otherwise uses parallel calls to `store.get`. */
	get(key: string[], options?: {raw?: false}): Promise<Array<Value | undefined>>;
	/** Returns an array of raw values. Uses `store.getMany` if it exists, otherwise uses parallel calls to `store.get`. */
	get(key: string[], options: {raw: true}): Promise<Array<Keyv.DeserializedData<Value> | undefined>>;

	/**
     * Set a value.
     *
     * By default keys are persistent. You can set an expiry TTL in milliseconds.
     */
	set(key: string, value: Value, ttl?: number): Promise<true>;
	/**
     * Deletes an entry.
     *
     * Returns `true` if the key existed, `false` if not.
     */
	delete(key: string | string[]): Promise<boolean>;
	/** Delete all entries in the current namespace. */
	clear(): Promise<void>;
	/** Check if key exists in current namespace. */
	has(key: string): Promise<boolean>;
	/** Iterator */
	iterator(namespace?: string): AsyncGenerator<any, void, any>;
	/**
	 * Closes the connection.
	 *
	 * Returns `undefined` when the connection closes.
	 */
	disconnect(): Promise<void>;
}

declare namespace Keyv {
	interface Options<Value> {
		[key: string]: any;

		/** Namespace for the current instance. */
		namespace?: string | undefined;
		/** A custom serialization function. */
		serialize?: ((data: DeserializedData<Value>) => string) | undefined;
		/** A custom deserialization function. */
		deserialize?: ((data: string) => DeserializedData<Value> | undefined) | undefined;
		/** The connection string URI. */
		uri?: string | undefined;
		/** The storage adapter instance to be used by Keyv. */
		store?: Store<string | undefined> | undefined;
		/** Default TTL. Can be overridden by specififying a TTL on `.set()`. */
		ttl?: number | undefined;
		/** Specify an adapter to use. e.g `'redis'` or `'mongodb'`. */
		adapter?: 'redis' | 'mongodb' | 'mongo' | 'sqlite' | 'postgresql' | 'postgres' | 'mysql' | undefined;
		/** Enable compression option **/
		compression?: CompressionAdapter | undefined;
	}

	interface CompressionAdapter {
		compress(value: any, options?: any): Promise<any>;
		decompress(value: any, options?: any): Promise<any>;
		serialize(value: any): Promise<any>;
		deserialize(value: any): Promise<any>;
	}

	interface DeserializedData<Value> {
		value: Value; expires: number | undefined;
	}

	type StoredData<Value> = DeserializedData<Value> | string | undefined;

	interface Store<Value> {
		get(key: string): Value | Promise<Value | undefined> | undefined;
		set(key: string, value: Value, ttl?: number): any;
		delete(key: string): boolean | Promise<boolean>;
		clear(): void | Promise<void>;
		has?(key: string): boolean | Promise<boolean>;
		getMany?(
			keys: string[]
		): Array<StoredData<Value>> | Promise<Array<StoredData<Value>>> | undefined;
	}
}

export = Keyv;
