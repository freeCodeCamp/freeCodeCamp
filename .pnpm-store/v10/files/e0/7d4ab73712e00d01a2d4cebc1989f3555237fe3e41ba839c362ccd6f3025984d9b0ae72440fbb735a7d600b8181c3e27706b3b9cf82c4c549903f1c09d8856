import { LRFUExpirer, EXPIRED_ENTRY } from './LRFUExpirer.js'
export { LRFUExpirer } from './LRFUExpirer.js'

let defaultExpirer
export class WeakLRUCache extends Map  {
	constructor(options) {
		super()
		this.hits = 0
		this.misses = 0
		if (options && options.cacheSize) {
			options.lruSize = options.cacheSize >> 2
		}
		if (options && options.clearKeptInterval) {
			this.clearKeptInterval = options.clearKeptInterval
			this.clearKeptCount = 0
			this.clearKeptObjects = options.clearKeptObjects
		}
		this.expirer = (options ? options.expirer === false ? defaultNoLRUExpirer : options.expirer : null) || defaultExpirer || (defaultExpirer = new LRFUExpirer(options))
		this.deferRegister = Boolean(options && options.deferRegister)
		let registry = this.registry = new FinalizationRegistry(key => {
			let entry = super.get(key)
			if (entry && entry.deref && entry.deref() === undefined)
				super.delete(key)
		})
	}
	onRemove(entry) {
		let target = entry.deref && entry.deref()
		if (target) {
			// remove strong reference, so only a weak reference, wait until it is finalized to remove
			this.registry.register(target, entry.key)
			entry.value = undefined
		} else if (entry.key) {
			let currentEntry = super.get(entry.key)
			if (currentEntry === entry)
				super.delete(entry.key)
		}
	}
	get(key, mode) {
		let entry = super.get(key)
		let value
		if (entry) {
			this.hits++
			value = entry.value
			if (value === EXPIRED_ENTRY) {
				value = entry.deref && entry.deref()
				if (value === undefined)
					super.delete(key)
				else {
					entry.value = value
					if (this.clearKeptInterval)
						this.incrementClearKeptCount()
					if (mode !== 1)
						this.expirer.used(entry)
					return mode === 2 ? value : entry
				}
			}
			else {
				if (mode !== 1)
					this.expirer.used(entry)
				return mode === 2 ? value : entry
			}
		} else
			this.misses++
	}
	getValue(key) {
		return this.get(key, 2)
	}

	setValue(key, value, expirationPriority) {
		let entry
		if (value && typeof value == 'object') {
			entry = new WeakRef(value)
			if (this.clearKeptInterval)
				this.incrementClearKeptCount()
			entry.value = value
			if (this.deferRegister) {
				entry.key = key
				entry.cache = this
			} else
				this.registry.register(value, key)
		} else if (value !== undefined)
			entry = { value, key, cache: this }
		// else entry is undefined
		this.set(key, entry, expirationPriority)
		return entry
	}
	incrementClearKeptCount() {
		if (++this.clearKeptCount >= this.clearKeptInterval) {
			this.clearKeptCount = 0
			if (this.clearKeptObjects)
				this.clearKeptObjects()
			if (this.registry.cleanupSome)
				this.registry.cleanupSome()
		}
	}
	set(key, entry, expirationPriority) {
		let oldEntry = super.get(key)
		if (oldEntry)
			this.expirer.delete(oldEntry)
		return this.insert(key, entry, expirationPriority)
	}
	insert(key, entry, expirationPriority) {
		if (entry) {
			this.expirer.used(entry, expirationPriority)
		}
		return super.set(key, entry)
	}
	delete(key) {
		let oldEntry = super.get(key)
		if (oldEntry) {
			this.expirer.delete(oldEntry)
		}
		return super.delete(key)
	}
	used(entry, expirationPriority) {
		this.expirer.used(entry, expirationPriority)
	}
	clear() {
		for (let [ key, entry ] of this) {
			this.expirer.delete(entry)
			super.delete(key)
		}
	}
}

class NoLRUExpirer {
	used(entry) {
		if (entry.cache)
			entry.cache.onRemove(entry)
		else if (entry.deref) // if we have already registered the entry in the finalization registry, just mark it expired from the beginning
			entry.value = EXPIRED_ENTRY
	}
	delete(entry) {
		// nothing to do here, we don't have a separate cache here
	}
}
const defaultNoLRUExpirer = new NoLRUExpirer()