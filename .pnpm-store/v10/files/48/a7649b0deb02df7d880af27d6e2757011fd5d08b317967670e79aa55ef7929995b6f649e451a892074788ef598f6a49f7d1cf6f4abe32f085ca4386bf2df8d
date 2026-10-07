import {
	SetState,
	ImmerScope,
	ProxyObjectState,
	ProxyArrayState,
	MapState,
	DRAFT_STATE,
	Patch,
	PatchPath
} from "../internal"

export type Objectish = AnyObject | AnyArray | AnyMap | AnySet
export type ObjectishNoSet = AnyObject | AnyArray | AnyMap

export type AnyObject = {[key: string]: any}
export type AnyArray = Array<any>
export type AnySet = Set<any>
export type AnyMap = Map<any, any>

export const enum ArchType {
	Object,
	Array,
	Map,
	Set
}

export interface ImmerBaseState {
	parent_?: ImmerState
	scope_: ImmerScope
	modified_: boolean
	finalized_: boolean
	isManual_: boolean
	assigned_: Map<any, boolean> | undefined
	key_?: string | number | symbol
	callbacks_: ((scope: ImmerScope) => void)[]
	draftLocations_?: Map<any, (string | number | symbol)[]>
}

export type ImmerState =
	| ProxyObjectState
	| ProxyArrayState
	| MapState
	| SetState

// The _internal_ type used for drafts (not to be confused with Draft, which is public facing)
export type Drafted<Base = any, T extends ImmerState = ImmerState> = {
	[DRAFT_STATE]: T
} & Base

export type GeneratePatches = (
	state: ImmerState,
	basePath: PatchPath,
	patches: Patch[],
	inversePatches: Patch[]
) => void
