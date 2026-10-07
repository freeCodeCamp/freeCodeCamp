import {
	SetState,
	ImmerScope,
	ProxyObjectState,
	ProxyArrayState,
	ES5ObjectState,
	ES5ArrayState,
	MapState,
	DRAFT_STATE
} from "../internal"

export type Objectish = AnyObject | AnyArray | AnyMap | AnySet
export type ObjectishNoSet = AnyObject | AnyArray | AnyMap

export type AnyObject = {[key: string]: any}
export type AnyArray = Array<any>
export type AnySet = Set<any>
export type AnyMap = Map<any, any>

export const enum Archtype {
	Object,
	Array,
	Map,
	Set
}

export const enum ProxyType {
	ProxyObject,
	ProxyArray,
	Map,
	Set,
	ES5Object,
	ES5Array
}

export interface ImmerBaseState {
	parent_?: ImmerState
	scope_: ImmerScope
	modified_: boolean
	finalized_: boolean
	isManual_: boolean
}

export type ImmerState =
	| ProxyObjectState
	| ProxyArrayState
	| ES5ObjectState
	| ES5ArrayState
	| MapState
	| SetState

// The _internal_ type used for drafts (not to be confused with Draft, which is public facing)
export type Drafted<Base = any, T extends ImmerState = ImmerState> = {
	[DRAFT_STATE]: T
} & Base
