import { WeakLRUCache, clearKeptObjects } from './native.js';
import { FAILED_CONDITION, ABORT } from './write.js';
import { when } from './util/when.js';

let getLastVersion;
const mapGet = Map.prototype.get;
export const CachingStore = (Store, env) => {
	let childTxnChanges
	return class extends Store {
	constructor(dbName, options) {
		super(dbName, options);
		if (!env.cacheCommitter) {
			env.cacheCommitter = true;
			this.on('aftercommit', ({ next, last }) => {
				do {
					let meta = next.meta;
					let store = meta && meta.store;
					if (store) {
						if (next.flag & FAILED_CONDITION)
							store.cache.delete(meta.key); // just delete it from the map
						else {
							let expirationPriority = meta.valueSize >> 10;
							let cache = store.cache;
							let entry = mapGet.call(cache, meta.key);
							if (entry)
								cache.used(entry, expirationPriority + 4); // this will enter it into the LRFU (with a little lower priority than a read)
						}
					}
				} while (next != last && (next = next.next))
			});
		}
		this.db.cachingDb = this;
		if (options.cache.clearKeptInterval)
			options.cache.clearKeptObjects = clearKeptObjects;
		this.cache = new WeakLRUCache(options.cache);
	}
	get isCaching() {
		return true
	}
	get(id, cacheMode) {
		let value = this.cache.getValue(id);
		if (value !== undefined)
			return value;
		value = super.get(id);
		if (value && typeof value === 'object' && !cacheMode && typeof id !== 'object') {
			let entry = this.cache.setValue(id, value, this.lastSize >> 10);
			if (this.useVersions) {
				entry.version = getLastVersion();
			}
		}
		return value;
	}
	getEntry(id, cacheMode) {
		let entry = this.cache.get(id);
		if (entry)
			return entry;
		let value = super.get(id);
		if (value === undefined)
			return;
		if (value && typeof value === 'object' && !cacheMode && typeof id !== 'object') {
			entry = this.cache.setValue(id, value, this.lastSize >> 10);
		} else {
			entry = { value };
		}
		if (this.useVersions) {
			entry.version = getLastVersion();
		}
		return entry;
	}
	putEntry(id, entry, ifVersion) {
		let result = super.put(id, entry.value, entry.version, ifVersion);
		if (typeof id === 'object')
			return result;
		if (result && result.then)
			this.cache.setManually(id, entry); // set manually so we can keep it pinned in memory until it is committed
		else // sync operation, immediately add to cache
			this.cache.set(id, entry);
	}
	put(id, value, version, ifVersion) {
		let result = super.put(id, value, version, ifVersion);
		if (typeof id !== 'object') {
			if (value && value['\x10binary-data\x02']) {
				// don't cache binary data, since it will be decoded on get
				this.cache.delete(id);
				return result;
			}	
			// sync operation, immediately add to cache, otherwise keep it pinned in memory until it is committed
			let entry = this.cache.setValue(id, value, !result || result.isSync ? 0 : -1);
			if (childTxnChanges)
				childTxnChanges.add(id);
			if (version !== undefined)
				entry.version = typeof version === 'object' ? version.version : version;
		}
		return result;
	}
	putSync(id, value, version, ifVersion) {
		if (id !== 'object') {
			// sync operation, immediately add to cache, otherwise keep it pinned in memory until it is committed
			if (value && typeof value === 'object') {
				let entry = this.cache.setValue(id, value);
				if (childTxnChanges)
					childTxnChanges.add(id);
				if (version !== undefined) {
					entry.version = typeof version === 'object' ? version.version : version;
				}
			} else // it is possible that  a value used to exist here
				this.cache.delete(id);
		}
		return super.putSync(id, value, version, ifVersion);
	}
	remove(id, ifVersion) {
		this.cache.delete(id);
		return super.remove(id, ifVersion);
	}
	removeSync(id, ifVersion) {
		this.cache.delete(id);
		return super.removeSync(id, ifVersion);
	}
	clearAsync(callback) {
		this.cache.clear();
		return super.clearAsync(callback);
	}
	clearSync() {
		this.cache.clear();
		super.clearSync();
	}
	childTransaction(callback) {
		return super.childTransaction(() => {
			let cache = this.cache;
			let previousChanges = childTxnChanges;
			try {
				childTxnChanges = new Set();
				return when(callback(), (result) => {
					if (result === ABORT)
						return abort();
					childTxnChanges = previousChanges;
					return result;
				}, abort);
			} catch(error) {
				abort(error);
			}
			function abort(error) {
				// if the transaction was aborted, remove all affected entries from cache
				for (let id of childTxnChanges)
					cache.delete(id);
				childTxnChanges = previousChanges;
				if (error)
					throw error;
			}
		});
	}
	};
};
export function setGetLastVersion(get) {
	getLastVersion = get;
}
