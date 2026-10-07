import {immerable} from "../immer"
import {
	ImmerState,
	Patch,
	SetState,
	ProxyArrayState,
	MapState,
	ProxyObjectState,
	PatchPath,
	get,
	each,
	has,
	getArchtype,
	getPrototypeOf,
	isSet,
	isMap,
	loadPlugin,
	ArchType,
	die,
	isDraft,
	isDraftable,
	NOTHING,
	errors,
	DRAFT_STATE,
	getProxyDraft,
	ImmerScope,
	isObjectish,
	isFunction,
	CONSTRUCTOR,
	PluginPatches,
	isArray,
	PROTOTYPE
} from "../internal"

export function enablePatches() {
	const errorOffset = 16
	if (process.env.NODE_ENV !== "production") {
		errors.push(
			'Sets cannot have "replace" patches.',
			function(op: string) {
				return "Unsupported patch operation: " + op
			},
			function(path: string) {
				return "Cannot apply patch, path doesn't resolve: " + path
			},
			"Patching reserved attributes like __proto__, prototype and constructor is not allowed"
		)
	}

	function getPath(state: ImmerState, path: PatchPath = []): PatchPath | null {
		// Step 1: Check if state has a stored key
		if (state.key_ !== undefined) {
			// Step 2: Validate the key is still valid in parent

			const parentCopy = state.parent_!.copy_ ?? state.parent_!.base_
			const proxyDraft = getProxyDraft(get(parentCopy, state.key_!))
			const valueAtKey = get(parentCopy, state.key_!)

			if (valueAtKey === undefined) {
				return null
			}

			// Check if the value at the key is still related to this draft
			// It should be either the draft itself, the base, or the copy
			if (
				valueAtKey !== state.draft_ &&
				valueAtKey !== state.base_ &&
				valueAtKey !== state.copy_
			) {
				return null // Value was replaced with something else
			}
			if (proxyDraft != null && proxyDraft.base_ !== state.base_) {
				return null // Different draft
			}

			// Step 3: Handle Set case specially
			const isSet = state.parent_!.type_ === ArchType.Set
			let key: string | number

			if (isSet) {
				// For Sets, find the index in the drafts_ map
				const setParent = state.parent_ as SetState
				key = Array.from(setParent.drafts_.keys()).indexOf(state.key_)
			} else {
				key = state.key_ as string | number
			}

			// Step 4: Validate key still exists in parent
			if (!((isSet && parentCopy.size > key) || has(parentCopy, key))) {
				return null // Key deleted
			}

			// Step 5: Add key to path
			path.push(key)
		}

		// Step 6: Recurse to parent if exists
		if (state.parent_) {
			return getPath(state.parent_, path)
		}

		// Step 7: At root - reverse path and validate
		path.reverse()

		try {
			// Validate path can be resolved from ROOT
			resolvePath(state.copy_, path)
		} catch (e) {
			return null // Path invalid
		}

		return path
	}

	// NEW: Add resolvePath helper function
	function resolvePath(base: any, path: PatchPath): any {
		let current = base
		for (let i = 0; i < path.length - 1; i++) {
			const key = path[i]
			current = get(current, key)
			if (!isObjectish(current) || current === null) {
				throw new Error(`Cannot resolve path at '${path.join("/")}'`)
			}
		}
		return current
	}

	const REPLACE = "replace"
	const ADD = "add"
	const REMOVE = "remove"

	function generatePatches_(
		state: ImmerState,
		basePath: PatchPath,
		scope: ImmerScope
	): void {
		if (state.scope_.processedForPatches_.has(state)) {
			return
		}

		state.scope_.processedForPatches_.add(state)

		const {patches_, inversePatches_} = scope

		switch (state.type_) {
			case ArchType.Object:
			case ArchType.Map:
				return generatePatchesFromAssigned(
					state,
					basePath,
					patches_!,
					inversePatches_!
				)
			case ArchType.Array:
				return generateArrayPatches(
					state,
					basePath,
					patches_!,
					inversePatches_!
				)
			case ArchType.Set:
				return generateSetPatches(
					(state as any) as SetState,
					basePath,
					patches_!,
					inversePatches_!
				)
		}
	}

	function generateArrayPatches(
		state: ProxyArrayState,
		basePath: PatchPath,
		patches: Patch[],
		inversePatches: Patch[]
	) {
		let {base_, assigned_} = state
		let copy_ = state.copy_!

		// Reduce complexity by ensuring `base` is never longer.
		if (copy_.length < base_.length) {
			// @ts-ignore
			;[base_, copy_] = [copy_, base_]
			;[patches, inversePatches] = [inversePatches, patches]
		}

		const allReassigned = state.allIndicesReassigned_ === true

		// Process replaced indices.
		for (let i = 0; i < base_.length; i++) {
			const copiedItem = copy_[i]
			const baseItem = base_[i]

			const isAssigned = allReassigned || assigned_?.get(i.toString())
			if (isAssigned && copiedItem !== baseItem) {
				const childState = copiedItem?.[DRAFT_STATE]
				if (childState && childState.modified_) {
					// Skip - let the child generate its own patches
					continue
				}
				const path = basePath.concat([i])
				patches.push({
					op: REPLACE,
					path,
					// Need to maybe clone it, as it can in fact be the original value
					// due to the base/copy inversion at the start of this function
					value: clonePatchValueIfNeeded(copiedItem)
				})
				inversePatches.push({
					op: REPLACE,
					path,
					value: clonePatchValueIfNeeded(baseItem)
				})
			}
		}

		// Process added indices.
		for (let i = base_.length; i < copy_.length; i++) {
			const path = basePath.concat([i])
			patches.push({
				op: ADD,
				path,
				// Need to maybe clone it, as it can in fact be the original value
				// due to the base/copy inversion at the start of this function
				value: clonePatchValueIfNeeded(copy_[i])
			})
		}
		for (let i = copy_.length - 1; base_.length <= i; --i) {
			const path = basePath.concat([i])
			inversePatches.push({
				op: REMOVE,
				path
			})
		}
	}

	// This is used for both Map objects and normal objects.
	function generatePatchesFromAssigned(
		state: MapState | ProxyObjectState,
		basePath: PatchPath,
		patches: Patch[],
		inversePatches: Patch[]
	) {
		const {base_, copy_, type_} = state
		each(state.assigned_!, (key, assignedValue) => {
			const origValue = get(base_, key, type_)
			const value = get(copy_!, key, type_)
			const op = !assignedValue ? REMOVE : has(base_, key) ? REPLACE : ADD
			if (origValue === value && op === REPLACE) return
			const path = basePath.concat(key as any)
			patches.push(
				op === REMOVE
					? {op, path}
					: {op, path, value: clonePatchValueIfNeeded(value)}
			)
			inversePatches.push(
				op === ADD
					? {op: REMOVE, path}
					: op === REMOVE
					? {op: ADD, path, value: clonePatchValueIfNeeded(origValue)}
					: {op: REPLACE, path, value: clonePatchValueIfNeeded(origValue)}
			)
		})
	}

	function generateSetPatches(
		state: SetState,
		basePath: PatchPath,
		patches: Patch[],
		inversePatches: Patch[]
	) {
		let {base_, copy_} = state

		let i = 0
		base_.forEach((value: any) => {
			if (!copy_!.has(value)) {
				const path = basePath.concat([i])
				patches.push({
					op: REMOVE,
					path,
					value
				})
				inversePatches.unshift({
					op: ADD,
					path,
					value
				})
			}
			i++
		})
		i = 0
		copy_!.forEach((value: any) => {
			if (!base_.has(value)) {
				const path = basePath.concat([i])
				patches.push({
					op: ADD,
					path,
					value
				})
				inversePatches.unshift({
					op: REMOVE,
					path,
					value
				})
			}
			i++
		})
	}

	function generateReplacementPatches_(
		baseValue: any,
		replacement: any,
		scope: ImmerScope
	): void {
		const {patches_, inversePatches_} = scope
		patches_!.push({
			op: REPLACE,
			path: [],
			value: replacement === NOTHING ? undefined : replacement
		})
		inversePatches_!.push({
			op: REPLACE,
			path: [],
			value: baseValue
		})
	}

	function applyPatches_<T>(draft: T, patches: readonly Patch[]): T {
		patches.forEach(patch => {
			const {path, op} = patch

			let base: any = draft
			for (let i = 0; i < path.length - 1; i++) {
				const parentType = getArchtype(base)
				let p = path[i]
				if (typeof p !== "string" && typeof p !== "number") {
					p = "" + p
				}

				// See #738, avoid prototype pollution
				if (
					(parentType === ArchType.Object || parentType === ArchType.Array) &&
					(p === "__proto__" || p === CONSTRUCTOR)
				)
					die(errorOffset + 3)
				if (isFunction(base) && p === PROTOTYPE) die(errorOffset + 3)
				base = get(base, p)
				if (!isObjectish(base)) die(errorOffset + 2, path.join("/"))
			}

			const type = getArchtype(base)
			const value = deepClonePatchValue(patch.value) // used to clone patch to ensure original patch is not modified, see #411
			const key = path[path.length - 1]
			switch (op) {
				case REPLACE:
					switch (type) {
						case ArchType.Map:
							return base.set(key, value)
						/* istanbul ignore next */
						case ArchType.Set:
							die(errorOffset)
						default:
							// if value is an object, then it's assigned by reference
							// in the following add or remove ops, the value field inside the patch will also be modifyed
							// so we use value from the cloned patch
							// @ts-ignore
							return (base[key] = value)
					}
				case ADD:
					switch (type) {
						case ArchType.Array:
							return key === "-"
								? base.push(value)
								: base.splice(key as any, 0, value)
						case ArchType.Map:
							return base.set(key, value)
						case ArchType.Set:
							return base.add(value)
						default:
							return (base[key] = value)
					}
				case REMOVE:
					switch (type) {
						case ArchType.Array:
							return base.splice(key as any, 1)
						case ArchType.Map:
							return base.delete(key)
						case ArchType.Set:
							return base.delete(patch.value)
						default:
							return delete base[key]
					}
				default:
					die(errorOffset + 1, op)
			}
		})

		return draft
	}

	// optimize: this is quite a performance hit, can we detect intelligently when it is needed?
	// E.g. auto-draft when new objects from outside are assigned and modified?
	// (See failing test when deepClone just returns obj)
	function deepClonePatchValue<T>(obj: T): T
	function deepClonePatchValue(obj: any) {
		if (!isDraftable(obj)) return obj
		if (isArray(obj)) return obj.map(deepClonePatchValue)
		if (isMap(obj))
			return new Map(
				Array.from(obj.entries()).map(([k, v]) => [k, deepClonePatchValue(v)])
			)
		if (isSet(obj)) return new Set(Array.from(obj).map(deepClonePatchValue))
		const cloned = Object.create(getPrototypeOf(obj))
		for (const key in obj) cloned[key] = deepClonePatchValue(obj[key])
		if (has(obj, immerable)) cloned[immerable] = obj[immerable]
		return cloned
	}

	function clonePatchValueIfNeeded<T>(obj: T): T {
		if (isDraft(obj)) {
			return deepClonePatchValue(obj)
		} else return obj
	}

	loadPlugin(PluginPatches, {
		applyPatches_,
		generatePatches_,
		generateReplacementPatches_,
		getPath
	})
}
