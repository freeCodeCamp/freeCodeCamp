import {
	ImmerScope,
	DRAFT_STATE,
	isDraftable,
	NOTHING,
	PatchPath,
	each,
	freeze,
	ImmerState,
	isDraft,
	SetState,
	set,
	ArchType,
	getPlugin,
	die,
	revokeScope,
	isFrozen,
	get,
	Patch,
	latest,
	prepareCopy,
	getFinalValue,
	getValue,
	ProxyArrayState
} from "../internal"

export function processResult(result: any, scope: ImmerScope) {
	scope.unfinalizedDrafts_ = scope.drafts_.length
	const baseDraft = scope.drafts_![0]
	const isReplaced = result !== undefined && result !== baseDraft

	if (isReplaced) {
		if (baseDraft[DRAFT_STATE].modified_) {
			revokeScope(scope)
			die(4)
		}
		if (isDraftable(result)) {
			// Finalize the result in case it contains (or is) a subset of the draft.
			result = finalize(scope, result)
		}
		const {patchPlugin_} = scope
		if (patchPlugin_) {
			patchPlugin_.generateReplacementPatches_(
				baseDraft[DRAFT_STATE].base_,
				result,
				scope
			)
		}
	} else {
		// Finalize the base draft.
		result = finalize(scope, baseDraft)
	}

	maybeFreeze(scope, result, true)

	revokeScope(scope)
	if (scope.patches_) {
		scope.patchListener_!(scope.patches_, scope.inversePatches_!)
	}
	return result !== NOTHING ? result : undefined
}

function finalize(rootScope: ImmerScope, value: any) {
	// Don't recurse in tho recursive data structures
	if (isFrozen(value)) return value

	const state: ImmerState = value[DRAFT_STATE]
	if (!state) {
		const finalValue = handleValue(value, rootScope.handledSet_, rootScope)
		return finalValue
	}

	// Never finalize drafts owned by another scope
	if (!isSameScope(state, rootScope)) {
		return value
	}

	// Unmodified draft, return the (frozen) original
	if (!state.modified_) {
		return state.base_
	}

	if (!state.finalized_) {
		// Execute all registered draft finalization callbacks
		const {callbacks_} = state
		if (callbacks_) {
			while (callbacks_.length > 0) {
				const callback = callbacks_.pop()!
				callback(rootScope)
			}
		}

		generatePatchesAndFinalize(state, rootScope)
	}

	// By now the root copy has been fully updated throughout its tree
	return state.copy_
}

function maybeFreeze(scope: ImmerScope, value: any, deep = false) {
	// we never freeze for a non-root scope; as it would prevent pruning for drafts inside wrapping objects
	if (!scope.parent_ && scope.immer_.autoFreeze_ && scope.canAutoFreeze_) {
		freeze(value, deep)
	}
}

function markStateFinalized(state: ImmerState) {
	state.finalized_ = true
	state.scope_.unfinalizedDrafts_--
}

let isSameScope = (state: ImmerState, rootScope: ImmerScope) =>
	state.scope_ === rootScope

// A reusable empty array to avoid allocations
const EMPTY_LOCATIONS_RESULT: (string | symbol | number)[] = []

// Updates all references to a draft in its parent to the finalized value.
// This handles cases where the same draft appears multiple times in the parent, or has been moved around.
export function updateDraftInParent(
	parent: ImmerState,
	draftValue: any,
	finalizedValue: any,
	originalKey?: string | number | symbol
): void {
	const parentCopy = latest(parent)
	const parentType = parent.type_

	// Fast path: Check if draft is still at original key
	if (originalKey !== undefined) {
		const currentValue = get(parentCopy, originalKey, parentType)
		if (currentValue === draftValue) {
			// Still at original location, just update it
			set(parentCopy, originalKey, finalizedValue, parentType)
			return
		}
	}

	// Slow path: Build reverse mapping of all children
	// to their indices in the parent, so that we can
	// replace all locations where this draft appears.
	// We only have to build this once per parent.
	if (!parent.draftLocations_) {
		const draftLocations = (parent.draftLocations_ = new Map())

		// Use `each` which works on Arrays, Maps, and Objects
		each(parentCopy, (key, value) => {
			if (isDraft(value)) {
				const keys = draftLocations.get(value) || []
				keys.push(key)
				draftLocations.set(value, keys)
			}
		})
	}

	// Look up all locations where this draft appears
	const locations =
		parent.draftLocations_.get(draftValue) ?? EMPTY_LOCATIONS_RESULT

	// Update all locations
	for (const location of locations) {
		set(parentCopy, location, finalizedValue, parentType)
	}
}

// Register a callback to finalize a child draft when the parent draft is finalized.
// This assumes there is a parent -> child relationship between the two drafts,
// and we have a key to locate the child in the parent.
export function registerChildFinalizationCallback(
	parent: ImmerState,
	child: ImmerState,
	key: string | number | symbol
) {
	parent.callbacks_.push(function childCleanup(rootScope) {
		const state: ImmerState = child

		// Can only continue if this is a draft owned by this scope
		if (!state || !isSameScope(state, rootScope)) {
			return
		}

		// Handle potential set value finalization first
		rootScope.mapSetPlugin_?.fixSetContents(state)

		const finalizedValue = getFinalValue(state)

		// Update all locations in the parent that referenced this draft
		updateDraftInParent(parent, state.draft_ ?? state, finalizedValue, key)

		generatePatchesAndFinalize(state, rootScope)
	})
}

function generatePatchesAndFinalize(state: ImmerState, rootScope: ImmerScope) {
	const shouldFinalize =
		state.modified_ &&
		!state.finalized_ &&
		(state.type_ === ArchType.Set ||
			(state.type_ === ArchType.Array &&
				(state as ProxyArrayState).allIndicesReassigned_) ||
			(state.assigned_?.size ?? 0) > 0)

	if (shouldFinalize) {
		const {patchPlugin_} = rootScope
		if (patchPlugin_) {
			const basePath = patchPlugin_!.getPath(state)

			if (basePath) {
				patchPlugin_!.generatePatches_(state, basePath, rootScope)
			}
		}

		markStateFinalized(state)
	}
}

export function handleCrossReference(
	target: ImmerState,
	key: string | number | symbol,
	value: any
) {
	const {scope_} = target
	// Check if value is a draft from this scope
	if (isDraft(value)) {
		const state: ImmerState = value[DRAFT_STATE]
		if (isSameScope(state, scope_)) {
			// Register callback to update this location when the draft finalizes

			state.callbacks_.push(function crossReferenceCleanup() {
				// Update the target location with finalized value
				prepareCopy(target)

				const finalizedValue = getFinalValue(state)

				updateDraftInParent(target, value, finalizedValue, key)
			})
		}
	} else if (isDraftable(value)) {
		// Handle non-draft objects that might contain drafts
		target.callbacks_.push(function nestedDraftCleanup() {
			const targetCopy = latest(target)

			// For Sets, check if value is still in the set
			if (target.type_ === ArchType.Set) {
				if (targetCopy.has(value)) {
					// Process the value to replace any nested drafts
					handleValue(value, scope_.handledSet_, scope_)
				}
			} else {
				// Maps/objects
				if (get(targetCopy, key, target.type_) === value) {
					if (
						scope_.drafts_.length > 1 &&
						((target as Exclude<ImmerState, SetState>).assigned_!.get(key) ??
							false) === true &&
						target.copy_
					) {
						// This might be a non-draft value that has drafts
						// inside. We do need to recurse here to handle those.
						handleValue(
							get(target.copy_, key, target.type_),
							scope_.handledSet_,
							scope_
						)
					}
				}
			}
		})
	}
}

export function handleValue(
	target: any,
	handledSet: Set<any>,
	rootScope: ImmerScope
) {
	if (!rootScope.immer_.autoFreeze_ && rootScope.unfinalizedDrafts_ < 1) {
		// optimization: if an object is not a draft, and we don't have to
		// deepfreeze everything, and we are sure that no drafts are left in the remaining object
		// cause we saw and finalized all drafts already; we can stop visiting the rest of the tree.
		// This benefits especially adding large data tree's without further processing.
		// See add-data.js perf test
		return target
	}

	// Skip if already handled, frozen, or not draftable
	if (
		isDraft(target) ||
		handledSet.has(target) ||
		!isDraftable(target) ||
		isFrozen(target)
	) {
		return target
	}

	handledSet.add(target)

	// Process ALL properties/entries
	each(target, (key, value) => {
		if (isDraft(value)) {
			const state: ImmerState = value[DRAFT_STATE]
			if (isSameScope(state, rootScope)) {
				// Replace draft with finalized value

				const updatedValue = getFinalValue(state)

				set(target, key, updatedValue, target.type_)

				markStateFinalized(state)
			}
		} else if (isDraftable(value)) {
			// Recursively handle nested values
			handleValue(value, handledSet, rootScope)
		}
	})

	return target
}
