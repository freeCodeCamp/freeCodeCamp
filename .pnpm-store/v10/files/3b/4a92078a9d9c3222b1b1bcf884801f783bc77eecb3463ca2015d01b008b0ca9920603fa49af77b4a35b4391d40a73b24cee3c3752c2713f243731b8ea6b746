declare namespace lmdb {
	export function open<V = any, K extends Key = Key>(path: string, options: RootDatabaseOptions): RootDatabase<V, K>
	export function open<V = any, K extends Key = Key>(options: RootDatabaseOptionsWithPath): RootDatabase<V, K>
	export function openAsClass<V = any, K extends Key = Key>(options: RootDatabaseOptionsWithPath): DatabaseClass<V, K>

	class Database<V = any, K extends Key = Key> {
		/**
		* Get the value stored by given id/key
		* @param id The key for the entry
		**/
		get(id: K): V | undefined
		/**
		* Get the entry stored by given id/key, which includes both the value and the version number (if available)
		* @param id The key for the entry
		**/
		getEntry(id: K): {
			value: V
			version?: number
		} | undefined

		/**
		* Get the value stored by given id/key in binary format, as a Buffer
		* @param id The key for the entry
		**/
		getBinary(id: K): Buffer | undefined

		/**
		* Get the value stored by given id/key in binary format, as a temporary Buffer.
		* This is faster, but the data is only valid until the next get operation (then it will be overwritten).
		* @param id The key for the entry
		**/
		getBinaryFast(id: K): Buffer | undefined

		/**
		* Asynchronously fetch the values stored by the given ids and accesses all 
		* pages to ensure that any hard page faults and disk I/O are performed
		* asynchronously in a separate thread. Once completed, synchronous
		* gets to the same entries will most likely be in memory and fast.
		* @param ids The keys for the entries to prefetch
		**/
		prefetch(ids: K[], callback?: Function): Promise<void>

		/**
		* Asynchronously get the values stored by the given ids and return the
		* values in array corresponding to the array of ids.
		* @param ids The keys for the entries to get
		**/
		getMany(ids: K[], callback?: (error: any, values: V[]) => any): Promise<(V | undefined)[]>

		/**
		* Store the provided value, using the provided id/key
		* @param id The key for the entry
		* @param value The value to store
		**/
		put(id: K, value: V): Promise<boolean>
		/**
		* Store the provided value, using the provided id/key and version number, and optionally the required
		* existing version
		* @param id The key for the entry
		* @param value The value to store
		* @param version The version number to assign to this entry
		* @param ifVersion If provided the put will only succeed if the previous version number matches this (atomically checked)
		**/
		put(id: K, value: V, version: number, ifVersion?: number): Promise<boolean>
		/**
		* Remove the entry with the provided id/key
		* @param id The key for the entry to remove
		**/
		remove(id: K): Promise<boolean>
		/**
		* Remove the entry with the provided id/key, conditionally based on the provided existing version number
		* @param id The key for the entry to remove
		* @param ifVersion If provided the remove will only succeed if the previous version number matches this (atomically checked)
		**/
		remove(id: K, ifVersion: number): Promise<boolean>
		/**
		* Remove the entry with the provided id/key and value (mainly used for dupsort databases) and optionally the required
		* existing version
		* @param id The key for the entry to remove
		* @param valueToRemove The value for the entry to remove
		**/
		remove(id: K, valueToRemove: V): Promise<boolean>
		/**
		* Syncronously store the provided value, using the provided id/key, will return after the data has been written.
		* @param id The key for the entry
		* @param value The value to store
		**/
		putSync(id: K, value: V): void
		/**
		* Syncronously store the provided value, using the provided id/key and version number
		* @param id The key for the entry
		* @param value The value to store
		* @param version The version number to assign to this entry
		**/
		putSync(id: K, value: V, version: number): void
		/**
		* Syncronously store the provided value, using the provided id/key and options
		* @param id The key for the entry
		* @param value The value to store
		* @param options The version number to assign to this entry
		**/
		putSync(id: K, value: V, options: PutOptions): void
		/**
		* Syncronously remove the entry with the provided id/key
		* existing version
		* @param id The key for the entry to remove
		**/
		removeSync(id: K): boolean
		/**
		* Synchronously remove the entry with the provided id/key and value (mainly used for dupsort databases)
		* existing version
		* @param id The key for the entry to remove
		* @param valueToRemove The value for the entry to remove
		**/
		removeSync(id: K, valueToRemove: V): boolean
		/**
		* Get all the values for the given key (for dupsort databases)
		* existing version
		* @param key The key for the entry to remove
		* @param options The options for the iterator
		**/
		getValues(key: K, options?: RangeOptions): ArrayLikeIterable<V>
		/**
		* Get the count of all the values for the given key (for dupsort databases)
		* existing version
		* @param options The options for the range/iterator
		**/
		getValuesCount(key: K, options?: RangeOptions): number
		/**
		* Get all the unique keys for the given range
		* existing version
		* @param options The options for the range/iterator
		**/
		getKeys(options?: RangeOptions): ArrayLikeIterable<K>
		/**
		* Get the count of all the unique keys for the given range
		* existing version
		* @param options The options for the range/iterator
		**/
		getKeysCount(options?: RangeOptions): number
		/**
		* Get all the entries for the given range
		* existing version
		* @param options The options for the range/iterator
		**/
		getRange(options?: RangeOptions): ArrayLikeIterable<{ key: K, value: V, version?: number }>
		/**
		* Get the count of all the entries for the given range
		* existing version
		* @param options The options for the range/iterator
		**/
		getCount(options?: RangeOptions): number
		/**
		 * @deprecated since version 2.0, use transaction() instead
		 */
		transactionAsync<T>(action: () => T): T
		/**
		* Execute a transaction asyncronously, running all the actions within the action callback in the transaction,
		* and committing the transaction after the action callback completes.
		* existing version
		* @param action The function to execute within the transaction
		**/
		transaction<T>(action: () => T): Promise<T>
		/**
		* Execute a transaction syncronously, running all the actions within the action callback in the transaction,
		* and committing the transaction after the action callback completes.
		* existing version
		* @param action The function to execute within the transaction
		* @params flags Additional flags specifying transaction behavior, this is optional and defaults to abortable, synchronous commits that are flushed to disk before returning
		**/
		transactionSync<T>(action: () => T, flags?: TransactionFlags): T
		/**
		* Execute a transaction asyncronously, running all the actions within the action callback in the transaction,
		* and committing the transaction after the action callback completes.
		* existing version
		* @param action The function to execute within the transaction
		**/
		childTransaction<T>(action: () => T): Promise<T>
		/**
		* Execute a set of write operations that will all be batched together in next queued asynchronous transaction.
		* @param action The function to execute with a set of write operations.
		**/
		batch<T>(action: () => any): Promise<boolean>
		/**
		* Execute writes actions that are all conditionally dependent on the entry with the provided key having the provided
		* version number (checked atomically).
		* @param id Key of the entry to check
		* @param ifVersion The require version number of the entry for all actions to succeed
		* @param action The function to execute with actions that will be dependent on this condition
		**/
		ifVersion(id: K, ifVersion: number, action: () => any): Promise<boolean>
		/**
		* Execute writes actions that are all conditionally dependent on the entry with the provided key
		* not existing (checked atomically).
		* @param id Key of the entry to check
		* @param action The function to execute with actions that will be dependent on this condition
		**/
		ifNoExists(id: K, action: () => any): Promise<boolean>
		/**
		* Check if an entry for the provided key exists
		* @param id Key of the entry to check
		*/
		doesExist(key: K): boolean
		/**
		* Check if an entry for the provided key/value exists
		* @param id Key of the entry to check
		* @param value Value of the entry to check
		*/
		doesExist(key: K, value: V): boolean
		/**
		* Check if an entry for the provided key exists with the expected version
		* @param id Key of the entry to check
		* @param version Expected version
		*/
		doesExist(key: K, version: number): boolean
		/**
		* @deprecated since version 2.0, use drop() or dropSync() instead
		*/
		deleteDB(): Promise<void>
		/**
		* Delete this database/store (asynchronously).
		**/
		drop(): Promise<void>
		/**
		* Synchronously delete this database/store.
		**/
		dropSync(): void
		/**
		* @deprecated since version 2.0, use clearAsync() or clearSync() instead
		*/
		clear(): Promise<void>
		/**
		* Asynchronously clear all the entries from this database/store.
		**/
		clearAsync(): Promise<void>
		/**
		* Synchronously clear all the entries from this database/store.
		**/
		clearSync(): void
		/** A promise-like object that resolves when previous writes have been committed.  */
		committed: Promise<boolean>
		/** A promise-like object that resolves when previous writes have been committed and fully flushed/synced to disk/storage.  */
		flushed: Promise<boolean>
		/**
		* Check the reader locks and remove any stale reader locks. Returns the number of stale locks that were removed.
		**/
		readerCheck(): number
		/**
		* Returns a string that describes all the current reader locks, useful for debugging if reader locks aren't being removed.
		**/
		readerList(): string
		/**
		* Returns statistics about the current database
		**/
		getStats(): {}
		/**
		* Explicitly force the read transaction to reset to the latest snapshot/version of the database
		**/
		resetReadTxn(): void
		/**
		* Make a snapshot copy of the current database at the indicated path
		**/
		backup(path: string): Promise<void>
		/**
		* Close the current database.
		**/
		close(): Promise<void>
		/**
		 * Add event listener
		 */
		on(event: 'beforecommit' | 'aftercommit', callback: (event: any) => void): void
	}
	/* A constant that can be returned from a transaction to indicate that the transaction should be aborted */
	export const ABORT: {};
	/* A constant that can be used as a conditional versions for put and ifVersion to indicate that the write should conditional on the key/entry existing */
	export const IF_EXISTS: number;
	class RootDatabase<V = any, K extends Key = Key> extends Database<V, K> {
		/**
		* Open a database store using the provided options.
		**/
		openDB<OV = V, OK extends Key = K>(options: DatabaseOptions & { name: string }): Database<OV, OK>
		/**
		* Open a database store using the provided options.
		**/
		openDB<OV = V, OK extends Key = K>(dbName: string, dbOptions: DatabaseOptions): Database<OV, OK>
	}
	class DatabaseClass<V = any, K extends Key = Key> {
		new(name: string | null, options: DatabaseOptions): Database<V, K>
	}

	type Key = Key[] | string | symbol | number | boolean | Uint8Array;

	interface DatabaseOptions {
		name?: string
		cache?: boolean | {}
		compression?: boolean | CompressionOptions
		encoding?: 'msgpack' | 'json' | 'string' | 'binary' | 'ordered-binary'
		sharedStructuresKey?: Key
		useVersions?: boolean
		keyEncoding?: 'uint32' | 'binary' | 'ordered-binary'
		dupSort?: boolean
		strictAsyncOrder?: boolean
	}
	interface RootDatabaseOptions extends DatabaseOptions {
		/** The maximum number of databases to be able to open (there is some extra overhead if this is set very high).*/
		maxDbs?: number
		/** Set a longer delay (in milliseconds) to wait longer before committing writes to increase the number of writes per transaction (higher latency, but more efficient) **/
		commitDelay?: number
		mapSize?: number
		pageSize?: number
		overlappingSync?: boolean
		separateFlushed?: boolean
		remapChunks?: boolean
		/** This provides a small performance boost (when not using useWritemap) for writes, by skipping zero'ing out malloc'ed data, but can leave application data in unused portions of the database. This is recommended unless there are concerns of database files being accessible. */
		noMemInit?: boolean
		/** Use writemaps, discouraged at this. This improves performance by reducing malloc calls, but it is possible for a stray pointer to corrupt data. */
		useWritemap?: boolean
		noSubdir?: boolean
		noSync?: boolean
		noMetaSync?: boolean
		readOnly?: boolean
		maxReaders?: number
	}
	interface RootDatabaseOptionsWithPath extends RootDatabaseOptions {
		path: string
	}
	interface CompressionOptions {
		threshold?: number
		dictionary?: Buffer
	}
	interface RangeOptions {
		/** Starting key for a range **/
		start?: Key
		/** Ending key for a range **/
		end?: Key
		/** Iterate through the entries in reverse order **/
		reverse?: boolean
		/** Include version numbers in each entry returned **/
		versions?: boolean
		/** The maximum number of entries to return **/
		limit?: number
		/** The number of entries to skip **/
		offset?: number
		/** Use a snapshot of the database from when the iterator started **/
		snapshot?: boolean
	}
	interface PutOptions {
		/* Append to the database using MDB_APPEND, which can be faster */
		append?: boolean
		/* Append to a dupsort database using MDB_APPENDDUP, which can be faster */
		appendDup?: boolean
		/* Perform put with MDB_NOOVERWRITE which will fail if the entry for the key already exists */
		noOverwrite?: boolean
		/* Perform put with MDB_NODUPDATA which will fail if the entry for the key/value already exists */
		noDupData?: boolean
		/* The version of the entry to set */
		version?: number
	}
	export enum TransactionFlags {
		/* Indicates that the transaction needs to be abortable */
		ABORTABLE = 1,
		/* Indicates that the transaction needs to be committed before returning */
		SYNCHRONOUS_COMMIT = 2,
		/* Indicates that the function can return before the transaction has been flushed to disk */
		NO_SYNC_FLUSH = 0x10000
	}
	class ArrayLikeIterable<T> implements Iterable<T> {
		map<U>(callback: (entry: T) => U): ArrayLikeIterable<U>
		filter(callback: (entry: T) => any): ArrayLikeIterable<T>
		[Symbol.iterator]() : Iterator<T>
		forEach(callback: (entry: T) => any): void
		asArray: T[]
	}
	export function getLastVersion(): number
	export function compareKeys(a: Key, b: Key): number
	class Binary {}
	/* Wrap a Buffer/Uint8Array for direct assignment as a value bypassing any encoding, for put (and doesExist) operations.
	*/
	export function asBinary(buffer: Uint8Array): Binary
	/* Indicates if V8 accelerated functions are enabled. If this is false, some functions will be a little slower, and you may want to npm install --build-from-source to enable maximum performance */
	export let v8AccelerationEnabled: boolean
	/* Return database augmented with methods to better conform to levelup */ 
	export function levelup(database: Database): Database
}
export = lmdb
