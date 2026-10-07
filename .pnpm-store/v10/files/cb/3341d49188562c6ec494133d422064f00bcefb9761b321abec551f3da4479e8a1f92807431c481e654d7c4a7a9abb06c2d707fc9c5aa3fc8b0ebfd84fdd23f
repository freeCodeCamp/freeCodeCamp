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
	isDraftable,
	createProxy,
	loadPlugin,
	markChanged,
	die,
	ArchType,
	each,
	getValue,
	PluginMapSet,
	handleCrossReference
} from "../internal"

export function enableMapSet() {
	class DraftMap extends Map {
		[DRAFT_STATE]: MapState

		constructor(target: AnyMap, parent?: ImmerState) {
			super()
			this[DRAFT_STATE] = {
				type_: ArchType.Map,
				parent_: parent,
				scope_: parent ? parent.scope_ : getCurrentScope()!,
				modified_: false,
				finalized_: false,
				copy_: undefined,
				assigned_: undefined,
				base_: target,
				draft_: this as any,
				isManual_: false,
				revoked_: false,
				callbacks_: []
			}
		}

		get size(): number {
			return latest(this[DRAFT_STATE]).size
		}

		has(key: any): boolean {
			return latest(this[DRAFT_STATE]).has(key)
		}

		set(key: any, value: any) {
			const state: MapState = this[DRAFT_STATE]
			assertUnrevoked(state)
			if (!latest(state).has(key) || latest(state).get(key) !== value) {
				prepareMapCopy(state)
				markChanged(state)
				state.assigned_!.set(key, true)
				state.copy_!.set(key, value)
				state.assigned_!.set(key, true)
				handleCrossReference(state, key, value)
			}
			return this
		}

		delete(key: any): boolean {
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

		clear() {
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

		forEach(cb: (value: any, key: any, self: any) => void, thisArg?: any) {
			const state: MapState = this[DRAFT_STATE]
			latest(state).forEach((_value: any, key: any, _map: any) => {
				cb.call(thisArg, this.get(key), key, this)
			})
		}

		get(key: any): any {
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
			const draft = createProxy(state.scope_, value, state, key)
			prepareMapCopy(state)
			state.copy_!.set(key, draft)
			return draft
		}

		keys(): IterableIterator<any> {
			return latest(this[DRAFT_STATE]).keys()
		}

		values(): IterableIterator<any> {
			const iterator = this.keys()
			return {
				[Symbol.iterator]: () => this.values(),
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

		entries(): IterableIterator<[any, any]> {
			const iterator = this.keys()
			return {
				[Symbol.iterator]: () => this.entries(),
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

		[Symbol.iterator]() {
			return this.entries()
		}
	}

	function proxyMap_<T extends AnyMap>(
		target: T,
		parent?: ImmerState
	): [T, MapState] {
		// @ts-ignore
		const map = new DraftMap(target, parent)
		return [map as any, map[DRAFT_STATE]]
	}

	function prepareMapCopy(state: MapState) {
		if (!state.copy_) {
			state.assigned_ = new Map()
			state.copy_ = new Map(state.base_)
		}
	}

	class DraftSet extends Set {
		[DRAFT_STATE]: SetState
		constructor(target: AnySet, parent?: ImmerState) {
			super()
			this[DRAFT_STATE] = {
				type_: ArchType.Set,
				parent_: parent,
				scope_: parent ? parent.scope_ : getCurrentScope()!,
				modified_: false,
				finalized_: false,
				copy_: undefined,
				base_: target,
				draft_: this,
				drafts_: new Map(),
				revoked_: false,
				isManual_: false,
				assigned_: undefined,
				callbacks_: []
			}
		}

		get size(): number {
			return latest(this[DRAFT_STATE]).size
		}

		has(value: any): boolean {
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

		add(value: any): any {
			const state: SetState = this[DRAFT_STATE]
			assertUnrevoked(state)
			if (!this.has(value)) {
				prepareSetCopy(state)
				markChanged(state)
				state.copy_!.add(value)
				handleCrossReference(state, value, value)
			}
			return this
		}

		delete(value: any): any {
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

		clear() {
			const state: SetState = this[DRAFT_STATE]
			assertUnrevoked(state)
			if (latest(state).size) {
				prepareSetCopy(state)
				markChanged(state)
				state.copy_!.clear()
			}
		}

		values(): IterableIterator<any> {
			const state: SetState = this[DRAFT_STATE]
			assertUnrevoked(state)
			prepareSetCopy(state)
			return state.copy_!.values()
		}

		entries(): IterableIterator<[any, any]> {
			const state: SetState = this[DRAFT_STATE]
			assertUnrevoked(state)
			prepareSetCopy(state)
			return state.copy_!.entries()
		}

		keys(): IterableIterator<any> {
			return this.values()
		}

		[Symbol.iterator]() {
			return this.values()
		}

		forEach(cb: any, thisArg?: any) {
			const iterator = this.values()
			let result = iterator.next()
			while (!result.done) {
				cb.call(thisArg, result.value, result.value, this)
				result = iterator.next()
			}
		}
	}
	function proxySet_<T extends AnySet>(
		target: T,
		parent?: ImmerState
	): [T, SetState] {
		// @ts-ignore
		const set = new DraftSet(target, parent)
		return [set as any, set[DRAFT_STATE]]
	}

	function prepareSetCopy(state: SetState) {
		if (!state.copy_) {
			// create drafts for all entries to preserve insertion order
			state.copy_ = new Set()
			state.base_.forEach(value => {
				if (isDraftable(value)) {
					const draft = createProxy(state.scope_, value, state, value)
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

	function fixSetContents(target: ImmerState) {
		// For sets we clone before iterating, otherwise we can get in endless loop due to modifying during iteration, see #628
		// To preserve insertion order in all cases we then clear the set
		if (target.type_ === ArchType.Set && target.copy_) {
			const copy = new Set(target.copy_)
			target.copy_.clear()
			copy.forEach(value => {
				target.copy_!.add(getValue(value))
			})
		}
	}

	loadPlugin(PluginMapSet, {proxyMap_, proxySet_, fixSetContents})
}
