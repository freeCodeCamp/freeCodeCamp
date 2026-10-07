import {
	Patch,
	PatchListener,
	Drafted,
	Immer,
	DRAFT_STATE,
	ImmerState,
	ProxyType,
	getPlugin
} from "../internal"
import {die} from "../utils/errors"

/** Each scope represents a `produce` call. */

export interface ImmerScope {
	patches_?: Patch[]
	inversePatches_?: Patch[]
	canAutoFreeze_: boolean
	drafts_: any[]
	parent_?: ImmerScope
	patchListener_?: PatchListener
	immer_: Immer
	unfinalizedDrafts_: number
}

let currentScope: ImmerScope | undefined

export function getCurrentScope() {
	if (__DEV__ && !currentScope) die(0)
	return currentScope!
}

function createScope(
	parent_: ImmerScope | undefined,
	immer_: Immer
): ImmerScope {
	return {
		drafts_: [],
		parent_,
		immer_,
		// Whenever the modified draft contains a draft from another scope, we
		// need to prevent auto-freezing so the unowned draft can be finalized.
		canAutoFreeze_: true,
		unfinalizedDrafts_: 0
	}
}

export function usePatchesInScope(
	scope: ImmerScope,
	patchListener?: PatchListener
) {
	if (patchListener) {
		getPlugin("Patches") // assert we have the plugin
		scope.patches_ = []
		scope.inversePatches_ = []
		scope.patchListener_ = patchListener
	}
}

export function revokeScope(scope: ImmerScope) {
	leaveScope(scope)
	scope.drafts_.forEach(revokeDraft)
	// @ts-ignore
	scope.drafts_ = null
}

export function leaveScope(scope: ImmerScope) {
	if (scope === currentScope) {
		currentScope = scope.parent_
	}
}

export function enterScope(immer: Immer) {
	return (currentScope = createScope(currentScope, immer))
}

function revokeDraft(draft: Drafted) {
	const state: ImmerState = draft[DRAFT_STATE]
	if (
		state.type_ === ProxyType.ProxyObject ||
		state.type_ === ProxyType.ProxyArray
	)
		state.revoke_()
	else state.revoked_ = true
}
