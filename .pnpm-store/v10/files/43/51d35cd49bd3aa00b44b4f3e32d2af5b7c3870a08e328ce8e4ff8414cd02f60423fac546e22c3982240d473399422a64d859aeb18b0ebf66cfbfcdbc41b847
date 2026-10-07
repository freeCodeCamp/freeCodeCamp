import {
	Patch,
	PatchListener,
	Drafted,
	Immer,
	DRAFT_STATE,
	ImmerState,
	ArchType,
	getPlugin,
	PatchesPlugin,
	MapSetPlugin,
	isPluginLoaded,
	PluginMapSet,
	PluginPatches,
	ArrayMethodsPlugin,
	PluginArrayMethods
} from "../internal"

/** Each scope represents a `produce` call. */

export interface ImmerScope {
	patches_?: Patch[]
	inversePatches_?: Patch[]
	patchPlugin_?: PatchesPlugin
	mapSetPlugin_?: MapSetPlugin
	arrayMethodsPlugin_?: ArrayMethodsPlugin
	canAutoFreeze_: boolean
	drafts_: any[]
	parent_?: ImmerScope
	patchListener_?: PatchListener
	immer_: Immer
	unfinalizedDrafts_: number
	handledSet_: Set<any>
	processedForPatches_: Set<any>
}

let currentScope: ImmerScope | undefined

export let getCurrentScope = () => currentScope!

let createScope = (
	parent_: ImmerScope | undefined,
	immer_: Immer
): ImmerScope => ({
	drafts_: [],
	parent_,
	immer_,
	// Whenever the modified draft contains a draft from another scope, we
	// need to prevent auto-freezing so the unowned draft can be finalized.
	canAutoFreeze_: true,
	unfinalizedDrafts_: 0,
	handledSet_: new Set(),
	processedForPatches_: new Set(),
	mapSetPlugin_: isPluginLoaded(PluginMapSet)
		? getPlugin(PluginMapSet)
		: undefined,
	arrayMethodsPlugin_: isPluginLoaded(PluginArrayMethods)
		? getPlugin(PluginArrayMethods)
		: undefined
})

export function usePatchesInScope(
	scope: ImmerScope,
	patchListener?: PatchListener
) {
	if (patchListener) {
		scope.patchPlugin_ = getPlugin(PluginPatches) // assert we have the plugin
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

export let enterScope = (immer: Immer) =>
	(currentScope = createScope(currentScope, immer))

function revokeDraft(draft: Drafted) {
	const state: ImmerState = draft[DRAFT_STATE]
	if (state.type_ === ArchType.Object || state.type_ === ArchType.Array)
		state.revoke_()
	else state.revoked_ = true
}
