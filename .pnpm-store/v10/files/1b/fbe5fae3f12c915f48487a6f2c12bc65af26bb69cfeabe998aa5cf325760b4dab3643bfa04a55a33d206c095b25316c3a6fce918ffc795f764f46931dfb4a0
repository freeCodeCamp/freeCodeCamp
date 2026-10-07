import { HookifiedOptions, Hookified } from 'hookified';

/**
 * Configuration options for the Cache class.
 */
type CacheOptions = {
    /**
     * Enable or disable the cache.
     * Defaults to true (enabled).
     */
    enabled?: boolean;
    /**
     * Maximum number of items to store in the cache.
     * Defaults to 4000. When limit is reached, oldest entries are evicted (FIFO).
     *
     * Note: JavaScript Map can hold up to 2^24 (~16.7 million) entries in most
     * environments, but practical limits depend on available memory and key/value sizes.
     * For hash caching, 4000-10000 entries is typically sufficient for most use cases.
     */
    maxSize?: number;
};
/**
 * A simple FIFO (First In, First Out) cache for storing hash values.
 * When the cache reaches its maximum size, the oldest entries are evicted.
 *
 * The cache uses a JavaScript Map internally, which can theoretically hold up to
 * 2^24 (~16.7 million) entries. However, practical limits depend on available memory
 * and the size of cached keys/values. The default maxSize of 4000 provides a good
 * balance between performance and memory usage for typical hash caching scenarios.
 */
declare class Cache {
    private _enabled;
    private _maxSize;
    private _store;
    private _keys;
    constructor(options?: CacheOptions);
    /**
     * Gets whether the cache is enabled.
     */
    get enabled(): boolean;
    /**
     * Sets whether the cache is enabled.
     */
    set enabled(value: boolean);
    /**
     * Gets the maximum number of items the cache can hold.
     */
    get maxSize(): number;
    /**
     * Sets the maximum number of items the cache can hold.
     */
    set maxSize(value: number);
    /**
     * Gets the underlying Map store.
     */
    get store(): Map<string, string>;
    /**
     * Gets the current number of items in the cache.
     */
    get size(): number;
    /**
     * Gets a value from the cache.
     * @param key - The cache key
     * @returns The cached value, or undefined if not found
     */
    get(key: string): string | undefined;
    /**
     * Sets a value in the cache with FIFO eviction.
     * If the cache is disabled, this method does nothing.
     * If the cache is at capacity, the oldest entry is removed before adding the new one.
     * @param key - The cache key
     * @param value - The value to cache
     */
    set(key: string, value: string): void;
    /**
     * Checks if a key exists in the cache.
     * @param key - The cache key
     * @returns True if the key exists, false otherwise
     */
    has(key: string): boolean;
    /**
     * Clears all entries from the cache.
     */
    clear(): void;
}

/**
 * Configuration options for Hashery instances.
 * Extends HookifiedOptions to include parse and stringify functionality.
 */
type HasheryOptions = {
    /**
     * Custom parse function to deserialize string data.
     * Defaults to JSON.parse if not provided.
     * @example
     * ```ts
     * import superjson from 'superjson';
     *
     * const hashery = new Hashery({
     *   parse: (data) => superjson.parse(data)
     * });
     * ```
     */
    parse?: ParseFn;
    /**
     * Custom stringify function to serialize data to string format.
     * Defaults to JSON.stringify if not provided.
     * @example
     * ```ts
     * import superjson from 'superjson';
     *
     * const hashery = new Hashery({
     *   stringify: (data) => superjson.stringify(data)
     * });
     * ```
     */
    stringify?: StringifyFn;
    /**
     * Array of hash providers to add to base providers
     * Providers implement the HashProvider interface and enable custom hashing algorithms.
     * @example
     * ```ts
     * const customProvider = {
     *   name: 'custom-hash',
     *   toHash: async (data) => {
     *     // Custom hash implementation
     *     return 'hash-value';
     *   }
     * };
     *
     * const hashery = new Hashery({
     *   providers: [customProvider]
     * });
     * ```
     */
    providers?: Array<HashProvider>;
    /**
     * Whether to include base WebCrypto providers (SHA-256, SHA-384, SHA-512).
     * Defaults to true.
     * @example
     * ```ts
     * // Create instance without base providers
     * const hashery = new Hashery({
     *   includeBase: false,
     *   providers: [customProvider]
     * });
     * ```
     */
    includeBase?: boolean;
    /**
     * Default hash algorithm to use when none is specified.
     * Defaults to 'SHA-256'.
     * @example
     * ```ts
     * const hashery = new Hashery({
     *   defaultAlgorithm: 'SHA-512'
     * });
     *
     * // This will use SHA-512 instead of SHA-256
     * const hash = await hashery.toHash({ data: 'example' });
     * ```
     */
    defaultAlgorithm?: HashAlgorithm | (string & {});
    /**
     * Default synchronous hash algorithm to use when none is specified.
     * Defaults to 'djb2'.
     * @example
     * ```ts
     * const hashery = new Hashery({
     *   defaultAlgorithmSync: 'fnv1'
     * });
     *
     * // This will use fnv1 for synchronous operations by default
     * ```
     */
    defaultAlgorithmSync?: HashAlgorithm | (string & {});
    /**
     * Cache configuration options.
     * Pass { enabled: true } to enable caching of hash results.
     * @example
     * ```ts
     * const hashery = new Hashery({
     *   cache: { enabled: true, maxSize: 500 }
     * });
     *
     * // Hashes will be cached and reused for identical inputs
     * ```
     */
    cache?: CacheOptions;
} & HookifiedOptions;
/**
 * Options for the toHash method.
 * @example
 * ```ts
 * const hashery = new Hashery();
 *
 * // Using a specific algorithm
 * const hash = await hashery.toHash({ data: 'example' }, { algorithm: 'SHA-512' });
 *
 * // Truncating the hash output
 * const shortHash = await hashery.toHash(
 *   { data: 'example' },
 *   { algorithm: 'SHA-256', maxLength: 16 }
 * );
 * ```
 */
type HasheryToHashOptions = {
    /**
     * The hash algorithm to use.
     * Defaults to 'SHA-256' if not specified.
     * Supported algorithms include: 'SHA-256', 'SHA-384', 'SHA-512', 'djb2', 'fnv1', 'murmur', 'crc32'
     */
    algorithm?: HashAlgorithm | (string & {});
    /**
     * Maximum length for the hash output.
     * If specified, the hash will be truncated to this length.
     * @example
     * ```ts
     * // Get a 16-character hash instead of the full 64-character SHA-256 hash
     * const hash = await hashery.toHash({ data: 'example' }, { maxLength: 16 });
     * ```
     */
    maxLength?: number;
};
/**
 * Options for the toNumber method.
 * @example
 * ```ts
 * const hashery = new Hashery();
 *
 * // Using default range (0-100)
 * const num = await hashery.toNumber({ user: 'john' });
 *
 * // Using custom range
 * const slot = await hashery.toNumber({ user: 'john' }, { min: 0, max: 9 });
 *
 * // Using different algorithm
 * const num512 = await hashery.toNumber(
 *   { user: 'john' },
 *   { min: 0, max: 255, algorithm: 'SHA-512' }
 * );
 * ```
 */
type HasheryToNumberOptions = {
    /**
     * The hash algorithm to use.
     * Defaults to 'SHA-256' if not specified.
     * Supported algorithms include: 'SHA-256', 'SHA-384', 'SHA-512', 'djb2', 'fnv1', 'murmur', 'crc32'
     */
    algorithm?: HashAlgorithm | (string & {});
    /**
     * The minimum value of the range (inclusive).
     * Defaults to 0 if not specified.
     * @example
     * ```ts
     * // Generate number between 1 and 100
     * const num = await hashery.toNumber({ data: 'example' }, { min: 1, max: 100 });
     * ```
     */
    min?: number;
    /**
     * The maximum value of the range (inclusive).
     * Defaults to 100 if not specified.
     * @example
     * ```ts
     * // Generate number between 0 and 1000
     * const num = await hashery.toNumber({ data: 'example' }, { min: 0, max: 1000 });
     * ```
     */
    max?: number;
    /**
     * Number of characters from the hash to use for conversion.
     * Defaults to 16 if not specified.
     * This provides good distribution while avoiding precision issues with JavaScript numbers.
     * @example
     * ```ts
     * // Use more hash characters for better distribution
     * const num = await hashery.toNumber({ data: 'example' }, { hashLength: 32 });
     * ```
     */
    hashLength?: number;
};
/**
 * Options for the toHashSync method.
 * @example
 * ```ts
 * const hashery = new Hashery();
 *
 * // Using a specific algorithm
 * const hash = hashery.toHashSync({ data: 'example' }, { algorithm: 'fnv1' });
 *
 * // Truncating the hash output
 * const shortHash = hashery.toHashSync(
 *   { data: 'example' },
 *   { algorithm: 'djb2', maxLength: 16 }
 * );
 * ```
 */
type HasheryToHashSyncOptions = {
    /**
     * The hash algorithm to use.
     * Defaults to 'djb2' if not specified.
     * Supported synchronous algorithms include: 'djb2', 'fnv1', 'murmur', 'crc32'
     * Note: WebCrypto algorithms (SHA-256, SHA-384, SHA-512) are not supported in sync mode.
     */
    algorithm?: HashAlgorithm | (string & {});
    /**
     * Maximum length for the hash output.
     * If specified, the hash will be truncated to this length.
     * @example
     * ```ts
     * // Get a 16-character hash
     * const hash = hashery.toHashSync({ data: 'example' }, { maxLength: 16 });
     * ```
     */
    maxLength?: number;
};
/**
 * Options for the toNumberSync method.
 * @example
 * ```ts
 * const hashery = new Hashery();
 *
 * // Using default range (0-100)
 * const num = hashery.toNumberSync({ user: 'john' });
 *
 * // Using custom range
 * const slot = hashery.toNumberSync({ user: 'john' }, { min: 0, max: 9 });
 *
 * // Using different algorithm
 * const num = hashery.toNumberSync(
 *   { user: 'john' },
 *   { min: 0, max: 255, algorithm: 'fnv1' }
 * );
 * ```
 */
type HasheryToNumberSyncOptions = {
    /**
     * The hash algorithm to use.
     * Defaults to 'djb2' if not specified.
     * Supported synchronous algorithms include: 'djb2', 'fnv1', 'murmur', 'crc32'
     * Note: WebCrypto algorithms (SHA-256, SHA-384, SHA-512) are not supported in sync mode.
     */
    algorithm?: HashAlgorithm | (string & {});
    /**
     * The minimum value of the range (inclusive).
     * Defaults to 0 if not specified.
     * @example
     * ```ts
     * // Generate number between 1 and 100
     * const num = hashery.toNumberSync({ data: 'example' }, { min: 1, max: 100 });
     * ```
     */
    min?: number;
    /**
     * The maximum value of the range (inclusive).
     * Defaults to 100 if not specified.
     * @example
     * ```ts
     * // Generate number between 0 and 1000
     * const num = hashery.toNumberSync({ data: 'example' }, { min: 0, max: 1000 });
     * ```
     */
    max?: number;
    /**
     * Number of characters from the hash to use for conversion.
     * Defaults to 16 if not specified.
     * This provides good distribution while avoiding precision issues with JavaScript numbers.
     * @example
     * ```ts
     * // Use more hash characters for better distribution
     * const num = hashery.toNumberSync({ data: 'example' }, { hashLength: 32 });
     * ```
     */
    hashLength?: number;
};
/**
 * Function type for serializing data to a string.
 * @param data - The data to stringify
 * @returns The stringified representation
 */
type StringifyFn = (data: unknown) => string;
/**
 * Function type for parsing string data.
 * @param data - The string data to parse
 * @returns The parsed data
 */
type ParseFn = (data: string) => unknown;
/**
 * Supported hash algorithms for the Web Crypto API.
 * - SHA-256: Recommended algorithm (256-bit) - good balance of security and performance
 * - SHA-384: High security algorithm (384-bit)
 * - SHA-512: Highest security algorithm (512-bit)
 */
type WebCryptoHashAlgorithm = "SHA-256" | "SHA-384" | "SHA-512";
/**
 * All built-in hash algorithm names supported by Hashery.
 * Includes both WebCrypto (async-only) and non-cryptographic (sync & async) algorithms.
 */
type HashAlgorithm = "SHA-256" | "SHA-384" | "SHA-512" | "djb2" | "fnv1" | "murmur" | "crc32";
type HashProvider = {
    name: string;
    toHash(data: BufferSource): Promise<string>;
    toHashSync?(data: BufferSource): string;
};
type HashProvidersOptions = {
    providers?: Array<HashProvider>;
    getFuzzy?: boolean;
};
type HashProvidersGetOptions = {
    fuzzy?: boolean;
};
type HasheryLoadProviderOptions = {
    includeBase?: boolean;
};

/**
 * Manages a collection of hash providers for the Hashery system.
 * Provides methods to add, remove, and load multiple hash providers.
 */
declare class HashProviders {
    private _providers;
    private _getFuzzy;
    /**
     * Creates a new HashProviders instance.
     * @param options - Optional configuration including initial providers to load
     * @example
     * ```ts
     * const providers = new HashProviders({
     *   providers: [{ name: 'custom', toHash: async (data) => '...' }]
     * });
     * ```
     */
    constructor(options?: HashProvidersOptions);
    /**
     * Loads multiple hash providers at once.
     * Each provider is added to the internal map using its name as the key.
     * @param providers - Array of HashProvider objects to load
     * @example
     * ```ts
     * const providers = new HashProviders();
     * providers.loadProviders([
     *   { name: 'md5', toHash: async (data) => '...' },
     *   { name: 'sha1', toHash: async (data) => '...' }
     * ]);
     * ```
     */
    loadProviders(providers: Array<HashProvider>): void;
    /**
     * Gets the internal Map of all registered hash providers.
     * @returns Map of provider names to HashProvider objects
     */
    get providers(): Map<string, HashProvider>;
    /**
     * Sets the internal Map of hash providers, replacing all existing providers.
     * @param providers - Map of provider names to HashProvider objects
     */
    set providers(providers: Map<string, HashProvider>);
    /**
     * Gets an array of all provider names.
     * @returns Array of provider names
     * @example
     * ```ts
     * const providers = new HashProviders();
     * providers.add({ name: 'sha256', toHash: async (data) => '...' });
     * providers.add({ name: 'md5', toHash: async (data) => '...' });
     * console.log(providers.names); // ['sha256', 'md5']
     * ```
     */
    get names(): Array<string>;
    /**
     * Gets a hash provider by name with optional fuzzy matching.
     *
     * Fuzzy matching (enabled by default) attempts to find providers by:
     * 1. Exact match (after trimming whitespace)
     * 2. Case-insensitive match (lowercase)
     * 3. Dash-removed match (e.g., "SHA-256" matches "sha256")
     *
     * @param name - The name of the provider to retrieve
     * @param options - Optional configuration for the get operation
     * @param options.fuzzy - Enable/disable fuzzy matching (overrides constructor setting)
     * @returns The HashProvider if found, undefined otherwise
     * @example
     * ```ts
     * const providers = new HashProviders();
     * providers.add({ name: 'sha256', toHash: async (data) => '...' });
     *
     * // Exact match
     * const provider = providers.get('sha256');
     *
     * // Fuzzy match (case-insensitive)
     * const provider2 = providers.get('SHA256');
     *
     * // Fuzzy match (with dash)
     * const provider3 = providers.get('SHA-256');
     *
     * // Disable fuzzy matching
     * const provider4 = providers.get('SHA256', { fuzzy: false }); // returns undefined
     * ```
     */
    get(name: string, options?: HashProvidersGetOptions): HashProvider | undefined;
    /**
     * Adds a single hash provider to the collection.
     * If a provider with the same name already exists, it will be replaced.
     * @param provider - The HashProvider object to add
     * @example
     * ```ts
     * const providers = new HashProviders();
     * providers.add({
     *   name: 'custom-hash',
     *   toHash: async (data) => {
     *     // Custom hashing logic
     *     return 'hash-result';
     *   }
     * });
     * ```
     */
    add(provider: HashProvider): void;
    /**
     * Removes a hash provider from the collection by name.
     * @param name - The name of the provider to remove
     * @returns true if the provider was found and removed, false otherwise
     * @example
     * ```ts
     * const providers = new HashProviders();
     * providers.add({ name: 'custom', toHash: async (data) => '...' });
     * const removed = providers.remove('custom'); // returns true
     * const removed2 = providers.remove('nonexistent'); // returns false
     * ```
     */
    remove(name: string): boolean;
}

declare class CRC implements HashProvider {
    get name(): string;
    toHashSync(data: BufferSource): string;
    toHash(data: BufferSource): Promise<string>;
}

type WebCryptoOptions = {
    algorithm?: WebCryptoHashAlgorithm;
};
declare class WebCrypto implements HashProvider {
    private _algorithm;
    constructor(options?: WebCryptoOptions);
    get name(): string;
    toHash(data: BufferSource): Promise<string>;
}

/**
 * DJB2 hash algorithm implementation.
 *
 * DJB2 is a non-cryptographic hash function created by Daniel J. Bernstein.
 * It produces a 32-bit hash value, making it suitable for hash tables and checksums,
 * but NOT for cryptographic purposes.
 *
 * Algorithm: hash = hash * 33 + c (where c is each byte)
 * Initial value: 5381
 *
 * @example
 * ```typescript
 * import { Hashery } from 'hashery';
 * import { DJB2 } from 'hashery/providers/djb2';
 *
 * const hashery = new Hashery();
 * hashery.providers.add(new DJB2());
 *
 * const hash = await hashery.toHash({ data: 'hello' }, 'djb2');
 * console.log(hash); // "7c9df5ea"
 * ```
 */
declare class DJB2 implements HashProvider {
    /**
     * The name identifier for this hash provider.
     */
    get name(): string;
    /**
     * Computes the DJB2 hash of the provided data synchronously.
     *
     * @param data - The data to hash (Uint8Array, ArrayBuffer, or DataView)
     * @returns An 8-character lowercase hexadecimal string
     *
     * @example
     * ```typescript
     * const djb2 = new DJB2();
     * const data = new TextEncoder().encode('hello');
     * const hash = djb2.toHashSync(data);
     * console.log(hash); // "7c9df5ea"
     * ```
     */
    toHashSync(data: BufferSource): string;
    /**
     * Computes the DJB2 hash of the provided data.
     *
     * @param data - The data to hash (Uint8Array, ArrayBuffer, or DataView)
     * @returns A Promise resolving to an 8-character lowercase hexadecimal string
     *
     * @example
     * ```typescript
     * const djb2 = new DJB2();
     * const data = new TextEncoder().encode('hello');
     * const hash = await djb2.toHash(data);
     * console.log(hash); // "7c9df5ea"
     * ```
     */
    toHash(data: BufferSource): Promise<string>;
}

/**
 * FNV-1 (Fowler-Noll-Vo) hash algorithm implementation.
 *
 * FNV-1 is a non-cryptographic hash function created by Glenn Fowler, Landon Curt Noll,
 * and Kiem-Phong Vo. It produces a 32-bit hash value, making it suitable for hash tables
 * and checksums, but NOT for cryptographic purposes.
 *
 * Algorithm: hash = (hash * FNV_prime) XOR octet_of_data
 * FNV-1 32-bit offset basis: 2166136261
 * FNV-1 32-bit prime: 16777619
 */
declare class FNV1 implements HashProvider {
    /**
     * The name identifier for this hash provider.
     */
    get name(): string;
    /**
     * Computes the FNV-1 hash of the provided data synchronously.
     *
     * @param data - The data to hash (Uint8Array, ArrayBuffer, or DataView)
     * @returns An 8-character lowercase hexadecimal string
     */
    toHashSync(data: BufferSource): string;
    /**
     * Computes the FNV-1 hash of the provided data.
     *
     * @param data - The data to hash (Uint8Array, ArrayBuffer, or DataView)
     * @returns A Promise resolving to an 8-character lowercase hexadecimal string
     */
    toHash(data: BufferSource): Promise<string>;
}

/**
 * Murmur 32-bit hash algorithm implementation.
 *
 * Murmur is a non-cryptographic hash function based on MurmurHash3 by Austin Appleby.
 * It produces a 32-bit hash value with excellent distribution and performance,
 * making it suitable for hash tables, bloom filters, and checksums,
 * but NOT for cryptographic purposes.
 *
 * This implementation uses the MurmurHash3_x86_32 variant.
 *
 * @example
 * ```typescript
 * import { Hashery } from 'hashery';
 * import { Murmur } from 'hashery/providers/murmur';
 *
 * const hashery = new Hashery();
 * hashery.providers.add(new Murmur());
 *
 * const hash = await hashery.toHash({ data: 'hello' }, 'murmur');
 * console.log(hash); // "248bfa47"
 * ```
 */
declare class Murmur implements HashProvider {
    private _seed;
    /**
     * Creates a new Murmur instance.
     *
     * @param seed - Optional seed value for the hash (default: 0)
     */
    constructor(seed?: number);
    /**
     * The name identifier for this hash provider.
     */
    get name(): string;
    /**
     * Gets the current seed value used for hashing.
     */
    get seed(): number;
    /**
     * Computes the Murmur 32-bit hash of the provided data synchronously.
     *
     * @param data - The data to hash (Uint8Array, ArrayBuffer, or DataView)
     * @returns An 8-character lowercase hexadecimal string
     *
     * @example
     * ```typescript
     * const murmur = new Murmur();
     * const data = new TextEncoder().encode('hello');
     * const hash = murmur.toHashSync(data);
     * console.log(hash); // "248bfa47"
     * ```
     */
    toHashSync(data: BufferSource): string;
    /**
     * Computes the Murmur 32-bit hash of the provided data.
     *
     * @param data - The data to hash (Uint8Array, ArrayBuffer, or DataView)
     * @returns A Promise resolving to an 8-character lowercase hexadecimal string
     *
     * @example
     * ```typescript
     * const murmur = new Murmur();
     * const data = new TextEncoder().encode('hello');
     * const hash = await murmur.toHash(data);
     * console.log(hash); // "248bfa47"
     * ```
     */
    toHash(data: BufferSource): Promise<string>;
    /**
     * 32-bit integer multiplication with proper overflow handling.
     * @private
     */
    private _imul;
    /**
     * Left rotate a 32-bit integer.
     * @private
     */
    private _rotl32;
}

declare class Hashery extends Hookified {
    private _parse;
    private _stringify;
    private _providers;
    private _defaultAlgorithm;
    private _defaultAlgorithmSync;
    private _cache;
    constructor(options?: HasheryOptions);
    /**
     * Gets the parse function used to deserialize stored values.
     * @returns The current parse function (defaults to JSON.parse)
     */
    get parse(): ParseFn;
    /**
     * Sets the parse function used to deserialize stored values.
     * @param value - The parse function to use for deserialization
     */
    set parse(value: ParseFn);
    /**
     * Gets the stringify function used to serialize values for storage.
     * @returns The current stringify function (defaults to JSON.stringify)
     */
    get stringify(): StringifyFn;
    /**
     * Sets the stringify function used to serialize values for storage.
     * @param value - The stringify function to use for serialization
     */
    set stringify(value: StringifyFn);
    /**
     * Gets the HashProviders instance used to manage hash providers.
     * @returns The current HashProviders instance
     */
    get providers(): HashProviders;
    /**
     * Sets the HashProviders instance used to manage hash providers.
     * @param value - The HashProviders instance to use
     */
    set providers(value: HashProviders);
    /**
     * Gets the names of all registered hash algorithm providers.
     * @returns An array of provider names (e.g., ['SHA-256', 'SHA-384', 'SHA-512'])
     */
    get names(): Array<string>;
    /**
     * Gets the default hash algorithm used when none is specified.
     * @returns The current default algorithm (defaults to 'SHA-256')
     */
    get defaultAlgorithm(): string;
    /**
     * Sets the default hash algorithm to use when none is specified.
     * @param value - The default algorithm to use (e.g., 'SHA-256', 'SHA-512', 'djb2')
     * @example
     * ```ts
     * const hashery = new Hashery();
     * hashery.defaultAlgorithm = 'SHA-512';
     *
     * // Now toHash will use SHA-512 by default
     * const hash = await hashery.toHash({ data: 'example' });
     * ```
     */
    set defaultAlgorithm(value: string);
    /**
     * Gets the default synchronous hash algorithm used when none is specified.
     * @returns The current default synchronous algorithm (defaults to 'djb2')
     */
    get defaultAlgorithmSync(): string;
    /**
     * Sets the default synchronous hash algorithm to use when none is specified.
     * @param value - The default synchronous algorithm to use (e.g., 'djb2', 'fnv1', 'murmur', 'crc32')
     * @example
     * ```ts
     * const hashery = new Hashery();
     * hashery.defaultAlgorithmSync = 'fnv1';
     *
     * // Now synchronous operations will use fnv1 by default
     * ```
     */
    set defaultAlgorithmSync(value: string);
    /**
     * Gets the cache instance used to store computed hash values.
     * @returns The Cache instance
     * @example
     * ```ts
     * const hashery = new Hashery({ cache: { enabled: true } });
     *
     * // Access the cache
     * hashery.cache.enabled; // true
     * hashery.cache.size; // number of cached items
     * hashery.cache.clear(); // clear all cached items
     * ```
     */
    get cache(): Cache;
    /**
     * Generates a cryptographic hash of the provided data using the Web Crypto API.
     * The data is first stringified using the configured stringify function, then hashed.
     *
     * If an invalid algorithm is provided, a 'warn' event is emitted and the method falls back
     * to the default algorithm. You can listen to these warnings:
     * ```ts
     * hashery.on('warn', (message) => console.log(message));
     * ```
     *
     * @param data - The data to hash (will be stringified before hashing)
     * @param options - Optional configuration object
     * @param options.algorithm - The hash algorithm to use (defaults to 'SHA-256')
     * @param options.maxLength - Optional maximum length for the hash output
     * @returns A Promise that resolves to the hexadecimal string representation of the hash
     *
     * @example
     * ```ts
     * const hashery = new Hashery();
     * const hash = await hashery.toHash({ name: 'John', age: 30 });
     * console.log(hash); // "a1b2c3d4..."
     *
     * // Using a different algorithm
     * const hash512 = await hashery.toHash({ name: 'John' }, { algorithm: 'SHA-512' });
     * ```
     */
    toHash(data: unknown, options?: HasheryToHashOptions): Promise<string>;
    /**
     * Generates a deterministic number within a specified range based on the hash of the provided data.
     * This method uses the toHash function to create a consistent hash, then maps it to a number
     * between min and max (inclusive).
     *
     * @param data - The data to hash (will be stringified before hashing)
     * @param options - Configuration options (optional, defaults to min: 0, max: 100)
     * @param options.min - The minimum value of the range (inclusive, defaults to 0)
     * @param options.max - The maximum value of the range (inclusive, defaults to 100)
     * @param options.algorithm - The hash algorithm to use (defaults to 'SHA-256')
     * @param options.hashLength - Number of characters from hash to use for conversion (defaults to 16)
     * @returns A Promise that resolves to a number between min and max (inclusive)
     *
     * @example
     * ```ts
     * const hashery = new Hashery();
     * const num = await hashery.toNumber({ user: 'john' }); // Uses default min: 0, max: 100
     * console.log(num); // Always returns the same number for the same input, e.g., 42
     *
     * // Using custom range
     * const num2 = await hashery.toNumber({ user: 'john' }, { min: 1, max: 100 });
     *
     * // Using a different algorithm
     * const num512 = await hashery.toNumber({ user: 'john' }, { min: 0, max: 255, algorithm: 'SHA-512' });
     * ```
     */
    toNumber(data: unknown, options?: HasheryToNumberOptions): Promise<number>;
    /**
     * Generates a hash of the provided data synchronously using a non-cryptographic hash algorithm.
     * The data is first stringified using the configured stringify function, then hashed.
     *
     * Note: This method only works with synchronous hash providers (djb2, fnv1, murmur, crc32).
     * WebCrypto algorithms (SHA-256, SHA-384, SHA-512) are not supported and will throw an error.
     *
     * If an invalid algorithm is provided, a 'warn' event is emitted and the method falls back
     * to the default synchronous algorithm. You can listen to these warnings:
     * ```ts
     * hashery.on('warn', (message) => console.log(message));
     * ```
     *
     * @param data - The data to hash (will be stringified before hashing)
     * @param options - Optional configuration object
     * @param options.algorithm - The hash algorithm to use (defaults to 'djb2')
     * @param options.maxLength - Optional maximum length for the hash output
     * @returns The hexadecimal string representation of the hash
     *
     * @throws {Error} If the specified algorithm does not support synchronous hashing
     * @throws {Error} If the default algorithm is not found
     *
     * @example
     * ```ts
     * const hashery = new Hashery();
     * const hash = hashery.toHashSync({ name: 'John', age: 30 });
     * console.log(hash); // "7c9df5ea..." (djb2 hash)
     *
     * // Using a different algorithm
     * const hashFnv1 = hashery.toHashSync({ name: 'John' }, { algorithm: 'fnv1' });
     * ```
     */
    toHashSync(data: unknown, options?: HasheryToHashSyncOptions): string;
    /**
     * Generates a deterministic number within a specified range based on the hash of the provided data synchronously.
     * This method uses the toHashSync function to create a consistent hash, then maps it to a number
     * between min and max (inclusive).
     *
     * Note: This method only works with synchronous hash providers (djb2, fnv1, murmur, crc32).
     *
     * @param data - The data to hash (will be stringified before hashing)
     * @param options - Configuration options (optional, defaults to min: 0, max: 100)
     * @param options.min - The minimum value of the range (inclusive, defaults to 0)
     * @param options.max - The maximum value of the range (inclusive, defaults to 100)
     * @param options.algorithm - The hash algorithm to use (defaults to 'djb2')
     * @param options.hashLength - Number of characters from hash to use for conversion (defaults to 16)
     * @returns A number between min and max (inclusive)
     *
     * @throws {Error} If the specified algorithm does not support synchronous hashing
     * @throws {Error} If min is greater than max
     *
     * @example
     * ```ts
     * const hashery = new Hashery();
     * const num = hashery.toNumberSync({ user: 'john' }); // Uses default min: 0, max: 100
     * console.log(num); // Always returns the same number for the same input, e.g., 42
     *
     * // Using custom range
     * const num2 = hashery.toNumberSync({ user: 'john' }, { min: 1, max: 100 });
     *
     * // Using a different algorithm
     * const numFnv1 = hashery.toNumberSync({ user: 'john' }, { min: 0, max: 255, algorithm: 'fnv1' });
     * ```
     */
    toNumberSync(data: unknown, options?: HasheryToNumberSyncOptions): number;
    loadProviders(providers?: Array<HashProvider>, options?: HasheryLoadProviderOptions): void;
}

export { CRC, Cache, type CacheOptions, DJB2, FNV1, type HashAlgorithm, type HashProvider, HashProviders, type HashProvidersGetOptions, type HashProvidersOptions, Hashery, type HasheryLoadProviderOptions, type HasheryOptions, type HasheryToHashOptions, type HasheryToHashSyncOptions, type HasheryToNumberOptions, type HasheryToNumberSyncOptions, Murmur, type ParseFn, type StringifyFn, WebCrypto, type WebCryptoHashAlgorithm, type WebCryptoOptions };
