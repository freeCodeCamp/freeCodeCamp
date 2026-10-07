// types only!
import {
	ImmerState,
	AnyMap,
	AnySet,
	MapState,
	SetState,
	DRAFT_STATE,
	getCurrentScope,
	latest,
	iteratorSymbol,
	isDraftable,
	createProxy,
	loadPlugin,
	markChanged,
	ProxyType,
	die,
	each
} from "../internal"

export function enableMapSet() {
	/* istanbul ignore next */
	var extendStatics = function(d: any, b: any): any {
		extendStatics =
			Object.setPrototypeOf ||
			({__proto__: []} instanceof Array &&
				function(d, b) {
					d.__proto__ = b
				}) ||
			function(d, b) {
				for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]
			}
		return extendStatics(d, b)
	}

	// Ugly hack to resolve #502 and inherit built in Map / Set
	function __extends(d: any, b: any): any {
		extendStatics(d, b)
		function __(this: any): any {
			this.constructor = d
		}
		d.prototype =
			// @ts-ignore
			((__.prototype = b.prototype), new __())
	}

	const DraftMap = (function(_super) {
		__extends(DraftMap, _super)
		// Create class manually, cause #502
		function DraftMap(this: any, target: AnyMap, parent?: ImmerState): any {
			this[DRAFT_STATE] = {
				type_: ProxyType.Map,
				parent_: parent,
				scope_: parent ? parent.scope_ : getCurrentScope()!,
				modified_: false,
				finalized_: false,
				copy_: undefined,
				assigned_: undefined,
				base_: target,
				draft_: this as any,
				isManual_: false,
				revoked_: false
			} as MapState
			return this
		}
		const p = DraftMap.prototype

		Object.defineProperty(p, "size", {
			get: function() {
				return latest(this[DRAFT_STATE]).size
			}
			// enumerable: false,
			// configurable: true
		})

		p.has = function(key: any): boolean {
			return latest(this[DRAFT_STATE]).has(key)
		}

		p.set = function(key: any, value: any) {
			const state: MapState = this[DRAFT_STATE]
			assertUnrevoked(state)
			if (!latest(state).has(key) || latest(state).get(key) !== value) {
				prepareMapCopy(state)
				markChanged(state)
				state.assigned_!.set(key, true)
				state.copy_!.set(key, value)
				state.assigned_!.set(key, true)
			}
			return this
		}

		p.delete = function(key: any): boolean {
			if (!this.has(key)) {
				return false
			}

			const state: MapState = this[DRAFT_STATE]
			assertUnrevoked(state)
			prepareMapCopy(state)
			markChanged(state)
			if (state.base_.has(key)) {
				state.assigned_!.set(key, false)
			} else {
				state.assigned_!.delete(key)
			}
			state.copy_!.delete(key)
			return true
		}

		p.clear = function() {
			const state: MapState = this[DRAFT_STATE]
			assertUnrevoked(state)
			if (latest(state).size) {
				prepareMapCopy(state)
				markChanged(state)
				state.assigned_ = new Map()
				each(state.base_, key => {
					state.assigned_!.set(key, false)
				})
				state.copy_!.clear()
			}
		}

		p.forEach = function(
			cb: (value: any, key: any, self: any) => void,
			thisArg?: any
		) {
			const state: MapState = this[DRAFT_STATE]
			latest(state).forEach((_value: any, key: any, _map: any) => {
				cb.call(thisArg, this.get(key), key, this)
			})
		}

		p.get = function(key: any): any {
			const state: MapState = this[DRAFT_STATE]
			assertUnrevoked(state)
			const value = latest(state).get(key)
			if (state.finalized_ || !isDraftable(value)) {
				return value
			}
			if (value !== state.base_.get(key)) {
				return value // either already drafted or reassigned
			}
			// despite what it looks, this creates a draft only once, see above condition
			const draft = createProxy(state.scope_.immer_, value, state)
			prepareMapCopy(state)
			state.copy_!.set(key, draft)
			return draft
		}

		p.keys = function(): IterableIterator<any> {
			return latest(this[DRAFT_STATE]).keys()
		}

		p.values = function(): IterableIterator<any> {
			const iterator = this.keys()
			return {
				[iteratorSymbol]: () => this.values(),
				next: () => {
					const r = iterator.next()
					/* istanbul ignore next */
					if (r.done) return r
					const value = this.get(r.value)
					return {
						done: false,
						value
					}
				}
			} as any
		}

		p.entries = function(): IterableIterator<[any, any]> {
			const iterator = this.keys()
			return {
				[iteratorSymbol]: () => this.entries(),
				next: () => {
					const r = iterator.next()
					/* istanbul ignore next */
					if (r.done) return r
					const value = this.get(r.value)
					return {
						done: false,
						value: [r.value, value]
					}
				}
			} as any
		}

		p[iteratorSymbol] = function() {
			return this.entries()
		}

		return DraftMap
	})(Map)

	function proxyMap_<T extends AnyMap>(target: T, parent?: ImmerState): T {
		// @ts-ignore
		return new DraftMap(target, parent)
	}

	function prepareMapCopy(state: MapState) {
		if (!state.copy_) {
			state.assigned_ = new Map()
			state.copy_ = new Map(state.base_)
		}
	}

	const DraftSet = (function(_super) {
		__extends(DraftSet, _super)
		// Create class manually, cause #502
		function DraftSet(this: any, target: AnySet, parent?: ImmerState) {
			this[DRAFT_STATE] = {
				type_: ProxyType.Set,
				parent_: parent,
				scope_: parent ? parent.scope_ : getCurrentScope()!,
				modified_: false,
				finalized_: false,
				copy_: undefined,
				base_: target,
				draft_: this,
				drafts_: new Map(),
				revoked_: false,
				isManual_: false
			} as SetState
			return this
		}
		const p = DraftSet.prototype

		Object.defineProperty(p, "size", {
			get: function() {
				return latest(this[DRAFT_STATE]).size
			}
			// enumerable: true,
		})

		p.has = function(value: any): boolean {
			const state: SetState = this[DRAFT_STATE]
			assertUnrevoked(state)
			// bit of trickery here, to be able to recognize both the value, and the draft of its value
			if (!state.copy_) {
				return state.base_.has(value)
			}
			if (state.copy_.has(value)) return true
			if (state.drafts_.has(value) && state.copy_.has(state.drafts_.get(value)))
				return true
			return false
		}

		p.add = function(value: any): any {
			const state: SetState = this[DRAFT_STATE]
			assertUnrevoked(state)
			if (!this.has(value)) {
				prepareSetCopy(state)
				markChanged(state)
				state.copy_!.add(value)
			}
			return this
		}

		p.delete = function(value: any): any {
			if (!this.has(value)) {
				return false
			}

			const state: SetState = this[DRAFT_STATE]
			assertUnrevoked(state)
			prepareSetCopy(state)
			markChanged(state)
			return (
				state.copy_!.delete(value) ||
				(state.drafts_.has(value)
					? state.copy_!.delete(state.drafts_.get(value))
					: /* istanbul ignore next */ false)
			)
		}

		p.clear = function() {
			const state: SetState = this[DRAFT_STATE]
			assertUnrevoked(state)
			if (latest(state).size) {
				prepareSetCopy(state)
				markChanged(state)
				state.copy_!.clear()
			}
		}

		p.values = function(): IterableIterator<any> {
			const state: SetState = this[DRAFT_STATE]
			assertUnrevoked(state)
			prepareSetCopy(state)
			return state.copy_!.values()
		}

		p.entries = function entries(): IterableIterator<[any, any]> {
			const state: SetState = this[DRAFT_STATE]
			assertUnrevoked(state)
			prepareSetCopy(state)
			return state.copy_!.entries()
		}

		p.keys = function(): IterableIterator<any> {
			return this.values()
		}

		p[iteratorSymbol] = function() {
			return this.values()
		}

		p.forEach = function forEach(cb: any, thisArg?: any) {
			const iterator = this.values()
			let result = iterator.next()
			while (!result.done) {
				cb.call(thisArg, result.value, result.value, this)
				result = iterator.next()
			}
		}

		return DraftSet
	})(Set)

	function proxySet_<T extends AnySet>(target: T, parent?: ImmerState): T {
		// @ts-ignore
		return new DraftSet(target, parent)
	}

	function prepareSetCopy(state: SetState) {
		if (!state.copy_) {
			// create drafts for all entries to preserve insertion order
			state.copy_ = new Set()
			state.base_.forEach(value => {
				if (isDraftable(value)) {
					const draft = createProxy(state.scope_.immer_, value, state)
					state.drafts_.set(value, draft)
					state.copy_!.add(draft)
				} else {
					state.copy_!.add(value)
				}
			})
		}
	}

	function assertUnrevoked(state: any /*ES5State | MapState | SetState*/) {
		if (state.revoked_) die(3, JSON.stringify(latest(state)))
	}

	loadPlugin("MapSet", {proxyMap_, proxySet_})
}
