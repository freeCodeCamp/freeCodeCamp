import {
	ImmerState,
	Drafted,
	ES5ArrayState,
	ES5ObjectState,
	each,
	has,
	isDraft,
	latest,
	DRAFT_STATE,
	is,
	loadPlugin,
	ImmerScope,
	ProxyType,
	getCurrentScope,
	die,
	markChanged,
	objectTraps,
	ownKeys,
	getOwnPropertyDescriptors
} from "../internal"

type ES5State = ES5ArrayState | ES5ObjectState

export function enableES5() {
	function willFinalizeES5_(
		scope: ImmerScope,
		result: any,
		isReplaced: boolean
	) {
		if (!isReplaced) {
			if (scope.patches_) {
				markChangesRecursively(scope.drafts_![0])
			}
			// This is faster when we don't care about which attributes changed.
			markChangesSweep(scope.drafts_)
		}
		// When a child draft is returned, look for changes.
		else if (
			isDraft(result) &&
			(result[DRAFT_STATE] as ES5State).scope_ === scope
		) {
			markChangesSweep(scope.drafts_)
		}
	}

	function createES5Draft(isArray: boolean, base: any) {
		if (isArray) {
			const draft = new Array(base.length)
			for (let i = 0; i < base.length; i++)
				Object.defineProperty(draft, "" + i, proxyProperty(i, true))
			return draft
		} else {
			const descriptors = getOwnPropertyDescriptors(base)
			delete descriptors[DRAFT_STATE as any]
			const keys = ownKeys(descriptors)
			for (let i = 0; i < keys.length; i++) {
				const key: any = keys[i]
				descriptors[key] = proxyProperty(
					key,
					isArray || !!descriptors[key].enumerable
				)
			}
			return Object.create(Object.getPrototypeOf(base), descriptors)
		}
	}

	function createES5Proxy_<T>(
		base: T,
		parent?: ImmerState
	): Drafted<T, ES5ObjectState | ES5ArrayState> {
		const isArray = Array.isArray(base)
		const draft = createES5Draft(isArray, base)

		const state: ES5ObjectState | ES5ArrayState = {
			type_: isArray ? ProxyType.ES5Array : (ProxyType.ES5Object as any),
			scope_: parent ? parent.scope_ : getCurrentScope(),
			modified_: false,
			finalized_: false,
			assigned_: {},
			parent_: parent,
			// base is the object we are drafting
			base_: base,
			// draft is the draft object itself, that traps all reads and reads from either the base (if unmodified) or copy (if modified)
			draft_: draft,
			copy_: null,
			revoked_: false,
			isManual_: false
		}

		Object.defineProperty(draft, DRAFT_STATE, {
			value: state,
			// enumerable: false <- the default
			writable: true
		})
		return draft
	}

	// property descriptors are recycled to make sure we don't create a get and set closure per property,
	// but share them all instead
	const descriptors: {[prop: string]: PropertyDescriptor} = {}

	function proxyProperty(
		prop: string | number,
		enumerable: boolean
	): PropertyDescriptor {
		let desc = descriptors[prop]
		if (desc) {
			desc.enumerable = enumerable
		} else {
			descriptors[prop] = desc = {
				configurable: true,
				enumerable,
				get(this: any) {
					const state = this[DRAFT_STATE]
					if (__DEV__) assertUnrevoked(state)
					// @ts-ignore
					return objectTraps.get(state, prop)
				},
				set(this: any, value) {
					const state = this[DRAFT_STATE]
					if (__DEV__) assertUnrevoked(state)
					// @ts-ignore
					objectTraps.set(state, prop, value)
				}
			}
		}
		return desc
	}

	// This looks expensive, but only proxies are visited, and only objects without known changes are scanned.
	function markChangesSweep(drafts: Drafted<any, ImmerState>[]) {
		// The natural order of drafts in the `scope` array is based on when they
		// were accessed. By processing drafts in reverse natural order, we have a
		// better chance of processing leaf nodes first. When a leaf node is known to
		// have changed, we can avoid any traversal of its ancestor nodes.
		for (let i = drafts.length - 1; i >= 0; i--) {
			const state: ES5State = drafts[i][DRAFT_STATE]
			if (!state.modified_) {
				switch (state.type_) {
					case ProxyType.ES5Array:
						if (hasArrayChanges(state)) markChanged(state)
						break
					case ProxyType.ES5Object:
						if (hasObjectChanges(state)) markChanged(state)
						break
				}
			}
		}
	}

	function markChangesRecursively(object: any) {
		if (!object || typeof object !== "object") return
		const state: ES5State | undefined = object[DRAFT_STATE]
		if (!state) return
		const {base_, draft_, assigned_, type_} = state
		if (type_ === ProxyType.ES5Object) {
			// Look for added keys.
			// probably there is a faster way to detect changes, as sweep + recurse seems to do some
			// unnecessary work.
			// also: probably we can store the information we detect here, to speed up tree finalization!
			each(draft_, key => {
				if ((key as any) === DRAFT_STATE) return
				// The `undefined` check is a fast path for pre-existing keys.
				if ((base_ as any)[key] === undefined && !has(base_, key)) {
					assigned_[key] = true
					markChanged(state)
				} else if (!assigned_[key]) {
					// Only untouched properties trigger recursion.
					markChangesRecursively(draft_[key])
				}
			})
			// Look for removed keys.
			each(base_, key => {
				// The `undefined` check is a fast path for pre-existing keys.
				if (draft_[key] === undefined && !has(draft_, key)) {
					assigned_[key] = false
					markChanged(state)
				}
			})
		} else if (type_ === ProxyType.ES5Array) {
			if (hasArrayChanges(state as ES5ArrayState)) {
				markChanged(state)
				assigned_.length = true
			}

			if (draft_.length < base_.length) {
				for (let i = draft_.length; i < base_.length; i++) assigned_[i] = false
			} else {
				for (let i = base_.length; i < draft_.length; i++) assigned_[i] = true
			}

			// Minimum count is enough, the other parts has been processed.
			const min = Math.min(draft_.length, base_.length)

			for (let i = 0; i < min; i++) {
				// Only untouched indices trigger recursion.
				if (!draft_.hasOwnProperty(i)) {
					assigned_[i] = true
				}
				if (assigned_[i] === undefined) markChangesRecursively(draft_[i])
			}
		}
	}

	function hasObjectChanges(state: ES5ObjectState) {
		const {base_, draft_} = state

		// Search for added keys and changed keys. Start at the back, because
		// non-numeric keys are ordered by time of definition on the object.
		const keys = ownKeys(draft_)
		for (let i = keys.length - 1; i >= 0; i--) {
			const key: any = keys[i]
			if (key === DRAFT_STATE) continue
			const baseValue = base_[key]
			// The `undefined` check is a fast path for pre-existing keys.
			if (baseValue === undefined && !has(base_, key)) {
				return true
			}
			// Once a base key is deleted, future changes go undetected, because its
			// descriptor is erased. This branch detects any missed changes.
			else {
				const value = draft_[key]
				const state: ImmerState = value && value[DRAFT_STATE]
				if (state ? state.base_ !== baseValue : !is(value, baseValue)) {
					return true
				}
			}
		}

		// At this point, no keys were added or changed.
		// Compare key count to determine if keys were deleted.
		const baseIsDraft = !!base_[DRAFT_STATE as any]
		return keys.length !== ownKeys(base_).length + (baseIsDraft ? 0 : 1) // + 1 to correct for DRAFT_STATE
	}

	function hasArrayChanges(state: ES5ArrayState) {
		const {draft_} = state
		if (draft_.length !== state.base_.length) return true
		// See #116
		// If we first shorten the length, our array interceptors will be removed.
		// If after that new items are added, result in the same original length,
		// those last items will have no intercepting property.
		// So if there is no own descriptor on the last position, we know that items were removed and added
		// N.B.: splice, unshift, etc only shift values around, but not prop descriptors, so we only have to check
		// the last one
		// last descriptor can be not a trap, if the array was extended
		const descriptor = Object.getOwnPropertyDescriptor(
			draft_,
			draft_.length - 1
		)
		// descriptor can be null, but only for newly created sparse arrays, eg. new Array(10)
		if (descriptor && !descriptor.get) return true
		// if we miss a property, it has been deleted, so array probobaly changed
		for (let i = 0; i < draft_.length; i++) {
			if (!draft_.hasOwnProperty(i)) return true
		}
		// For all other cases, we don't have to compare, as they would have been picked up by the index setters
		return false
	}

	function hasChanges_(state: ES5State) {
		return state.type_ === ProxyType.ES5Object
			? hasObjectChanges(state)
			: hasArrayChanges(state)
	}

	function assertUnrevoked(state: any /*ES5State | MapState | SetState*/) {
		if (state.revoked_) die(3, JSON.stringify(latest(state)))
	}

	loadPlugin("ES5", {
		createES5Proxy_,
		willFinalizeES5_,
		hasChanges_
	})
}
