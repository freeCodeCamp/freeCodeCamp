import {
	die,
	isDraft,
	shallowCopy,
	each,
	DRAFT_STATE,
	get,
	set,
	ImmerState,
	isDraftable,
	Archtype,
	getArchtype,
	getPlugin
} from "../internal"

/** Takes a snapshot of the current state of a draft and finalizes it (but without freezing). This is a great utility to print the current state during debugging (no Proxies in the way). The output of current can also be safely leaked outside the producer. */
export function current<T>(value: T): T
export function current(value: any): any {
	if (!isDraft(value)) die(22, value)
	return currentImpl(value)
}

function currentImpl(value: any): any {
	if (!isDraftable(value)) return value
	const state: ImmerState | undefined = value[DRAFT_STATE]
	let copy: any
	const archType = getArchtype(value)
	if (state) {
		if (
			!state.modified_ &&
			(state.type_ < 4 || !getPlugin("ES5").hasChanges_(state as any))
		)
			return state.base_
		// Optimization: avoid generating new drafts during copying
		state.finalized_ = true
		copy = copyHelper(value, archType)
		state.finalized_ = false
	} else {
		copy = copyHelper(value, archType)
	}

	each(copy, (key, childValue) => {
		if (state && get(state.base_, key) === childValue) return // no need to copy or search in something that didn't change
		set(copy, key, currentImpl(childValue))
	})
	// In the future, we might consider freezing here, based on the current settings
	return archType === Archtype.Set ? new Set(copy) : copy
}

function copyHelper(value: any, archType: number): any {
	// creates a shallow copy, even if it is a map or set
	switch (archType) {
		case Archtype.Map:
			return new Map(value)
		case Archtype.Set:
			// Set will be cloned as array temporarily, so that we can replace individual items
			return Array.from(value)
	}
	return shallowCopy(value)
}
