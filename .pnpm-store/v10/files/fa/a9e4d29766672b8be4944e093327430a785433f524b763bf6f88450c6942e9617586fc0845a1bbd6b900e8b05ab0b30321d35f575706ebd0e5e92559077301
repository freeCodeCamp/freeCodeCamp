'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const PINNED_IN_MEMORY = 0x7fffffff;
const NOT_IN_LRU = 0x40000000;
const EXPIRED_ENTRY = {
	description: 'This cache entry value has been expired from the LRFU cache, and is waiting for garbage collection to be removed.'
};
/* bit pattern:
*  < is-in-lru 1 bit > ...< mask/or bits 6 bits > <lru index 2 bits > < position in cache - 22 bits >
*/
class LRFUExpirer {
	constructor(options) {
		this.lruSize = options && options.lruSize || 0x2000;
		if (this.lruSize > 0x400000)
			throw new Error('The LRU/cache size was larger than the maximum cache size of 16777216 (LRU size of 4194304)')
		this.reset();
		startTimedCleanup(new WeakRef(this), options && options.cleanupInterval || 60000);
	}
	delete(entry) {
		if (entry.position < NOT_IN_LRU) {
			this.lru[(entry.position >> 22) & 3][entry.position & 0x3fffff] = null;
		}
		entry.position |= NOT_IN_LRU;
	}
	used(entry, expirationPriority) {
		let originalPosition = entry.position;
		if (expirationPriority < 0) {
			// pin this in memory, first remove from LRFU and then mark it as pinned in memory
			if (entry.position < NOT_IN_LRU) {
				this.lru[(entry.position >> 22) & 3][entry.position & 0x3fffff] = null;
			}
			entry.position = PINNED_IN_MEMORY;
			return
		} else if (entry.position == PINNED_IN_MEMORY && expirationPriority == undefined) {
			return
		} else if (expirationPriority >= 0) {
			let bits = 0;
			if (expirationPriority > (this.lruSize >> 2))
				expirationPriority = this.lruSize >> 2;
			while (expirationPriority > 0) {
				expirationPriority = expirationPriority >> 1;
				bits++;
			}
			expirationPriority = bits;
		} else {
			if (originalPosition >= 0)
				expirationPriority = (originalPosition >> 24) & 0x3f;
			else
				expirationPriority = 0;
		}
		
		let lruPosition;
		let lruIndex;
		if (originalPosition < NOT_IN_LRU) {
			lruIndex = (originalPosition >> 22) & 3;
			if (lruIndex >= 3)
				return // can't get any higher than this, don't do anything
			let lru = this.lru[lruIndex];
			// check to see if it is in the same generation
			lruPosition = lru.position;
			if ((originalPosition > lruPosition ? lruPosition + this.lruSize : lruPosition) - originalPosition < (this.lruSize >> 2))
				return // only recently added, don't promote
			lru[originalPosition & 0x3fffff] = null; // remove it, we are going to move/promote it
			lruIndex++;
		} else
			lruIndex = 0;
		this.insertEntry(entry, lruIndex, expirationPriority);
	}
	insertEntry(entry, lruIndex, expirationPriority) {
		let lruPosition, nextLru = this.lru[lruIndex];
		let orMask = 0x3fffff >> (22 - expirationPriority);
		do {
			// put it in the next lru
			lruPosition = nextLru.position | orMask;
			let previousEntry = nextLru[lruPosition & 0x3fffff];
			nextLru[lruPosition & 0x3fffff] = entry;
			if (entry)
				entry.position = lruPosition | (expirationPriority << 24);
			nextLru.position = ++lruPosition;
			if ((lruPosition & 0x3fffff) >= this.lruSize) {
				// reset at the beginning of the lru cache
				lruPosition &= 0x7fc00000;
				nextLru.position = lruPosition;
				nextLru.cycles++;
			}
			entry = previousEntry;
			if (entry && (nextLru = this.lru[--lruIndex])) {
				expirationPriority = ((entry.position || 0) >> 24) & 0x3f;
				orMask = 0x3fffff >> (22 - expirationPriority);
			} else
				break
		} while (true)
		if (entry) {// this one was removed
			entry.position |= NOT_IN_LRU;
			if (entry.cache)
				entry.cache.onRemove(entry);
			else if (entry.deref) // if we have already registered the entry in the finalization registry, just clear it
				entry.value = EXPIRED_ENTRY;
		}
	}
	reset() {
	/*	if (this.lru) {
			for (let i = 0; i < 4; i++) {
				for (let j = 0, l = this.lru.length; j < l; j++) {
					let entry =	this.lru[i][j]
					if (entry) {// this one was removed
						entry.position |= NOT_IN_LRU
						if (entry.cache)
							entry.cache.onRemove(entry)
						else if (entry.deref) // if we have already registered the entry in the finalization registry, just clear it
							entry.value = EXPIRED_ENTRY
					}
				}
			}
		}*/
		this.lru = [];
		for (let i = 0; i < 4; i++) {
			this.lru[i] = new Array(this.lruSize);
			this.lru[i].position = i << 22;
			this.lru[i].cycles = 0;
		}
	}
	cleanup() { // clean out a portion of the cache, so we can clean up over time if idle
		let toClear = this.lruSize >> 4; // 1/16 of the lru cache at a time
		for (let i = 3; i >= 0; i--) {
			let lru = this.lru[i];
			for (let j = 0, l = toClear; j < l; j++) {
				if (lru[lru.position & 0x3fffff]) {
					toClear--;
					this.insertEntry(null, i, 0);
				} else {
					if ((++lru.position & 0x3fffff) >= this.lruSize) {
						// reset at the beginning of the lru cache
						lru.position &= 0x7fc00000;
						lru.cycles++;
					}
				}
			}
		}
	}
}
function startTimedCleanup(reference, cleanupInterval) {
	let interval = setInterval(() => {
		let expirer = reference.deref();
		if (expirer)
			expirer.cleanup();
		else
			clearInterval(interval);
	}, cleanupInterval);
	if (interval.unref)
		interval.unref();
}

let defaultExpirer;
class WeakLRUCache extends Map  {
	constructor(options) {
		super();
		this.hits = 0;
		this.misses = 0;
		if (options && options.cacheSize) {
			options.lruSize = options.cacheSize >> 2;
		}
		if (options && options.clearKeptInterval) {
			this.clearKeptInterval = options.clearKeptInterval;
			this.clearKeptCount = 0;
			this.clearKeptObjects = options.clearKeptObjects;
		}
		this.expirer = (options ? options.expirer === false ? defaultNoLRUExpirer : options.expirer : null) || defaultExpirer || (defaultExpirer = new LRFUExpirer(options));
		this.deferRegister = Boolean(options && options.deferRegister);
		let registry = this.registry = new FinalizationRegistry(key => {
			let entry = super.get(key);
			if (entry && entry.deref && entry.deref() === undefined)
				super.delete(key);
		});
	}
	onRemove(entry) {
		let target = entry.deref && entry.deref();
		if (target) {
			// remove strong reference, so only a weak reference, wait until it is finalized to remove
			this.registry.register(target, entry.key);
			entry.value = undefined;
		} else if (entry.key) {
			let currentEntry = super.get(entry.key);
			if (currentEntry === entry)
				super.delete(entry.key);
		}
	}
	get(key, mode) {
		let entry = super.get(key);
		let value;
		if (entry) {
			this.hits++;
			value = entry.value;
			if (value === EXPIRED_ENTRY) {
				value = entry.deref && entry.deref();
				if (value === undefined)
					super.delete(key);
				else {
					entry.value = value;
					if (this.clearKeptInterval)
						this.incrementClearKeptCount();
					if (mode !== 1)
						this.expirer.used(entry);
					return mode === 2 ? value : entry
				}
			}
			else {
				if (mode !== 1)
					this.expirer.used(entry);
				return mode === 2 ? value : entry
			}
		} else
			this.misses++;
	}
	getValue(key) {
		return this.get(key, 2)
	}

	setValue(key, value, expirationPriority) {
		let entry;
		if (value && typeof value == 'object') {
			entry = new WeakRef(value);
			if (this.clearKeptInterval)
				this.incrementClearKeptCount();
			entry.value = value;
			if (this.deferRegister) {
				entry.key = key;
				entry.cache = this;
			} else
				this.registry.register(value, key);
		} else if (value !== undefined)
			entry = { value, key, cache: this };
		// else entry is undefined
		this.set(key, entry, expirationPriority);
		return entry
	}
	incrementClearKeptCount() {
		if (++this.clearKeptCount >= this.clearKeptInterval) {
			this.clearKeptCount = 0;
			if (this.clearKeptObjects)
				this.clearKeptObjects();
			if (this.registry.cleanupSome)
				this.registry.cleanupSome();
		}
	}
	set(key, entry, expirationPriority) {
		let oldEntry = super.get(key);
		if (oldEntry)
			this.expirer.delete(oldEntry);
		return this.insert(key, entry, expirationPriority)
	}
	insert(key, entry, expirationPriority) {
		if (entry) {
			this.expirer.used(entry, expirationPriority);
		}
		return super.set(key, entry)
	}
	delete(key) {
		let oldEntry = super.get(key);
		if (oldEntry) {
			this.expirer.delete(oldEntry);
		}
		return super.delete(key)
	}
	used(entry, expirationPriority) {
		this.expirer.used(entry, expirationPriority);
	}
	clear() {
		for (let [ key, entry ] of this) {
			this.expirer.delete(entry);
			super.delete(key);
		}
	}
}

class NoLRUExpirer {
	used(entry) {
		if (entry.cache)
			entry.cache.onRemove(entry);
		else if (entry.deref) // if we have already registered the entry in the finalization registry, just mark it expired from the beginning
			entry.value = EXPIRED_ENTRY;
	}
	delete(entry) {
		// nothing to do here, we don't have a separate cache here
	}
}
const defaultNoLRUExpirer = new NoLRUExpirer();

exports.LRFUExpirer = LRFUExpirer;
exports.WeakLRUCache = WeakLRUCache;
