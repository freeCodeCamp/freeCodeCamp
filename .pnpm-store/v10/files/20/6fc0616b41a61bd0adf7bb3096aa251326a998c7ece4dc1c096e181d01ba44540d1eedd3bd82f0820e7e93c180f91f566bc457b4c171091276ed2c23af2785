import {
	IProduceWithPatches,
	IProduce,
	ImmerState,
	Drafted,
	isDraftable,
	processResult,
	Patch,
	Objectish,
	DRAFT_STATE,
	Draft,
	PatchListener,
	isDraft,
	isMap,
	isSet,
	createProxyProxy,
	getPlugin,
	die,
	enterScope,
	revokeScope,
	leaveScope,
	usePatchesInScope,
	getCurrentScope,
	NOTHING,
	freeze,
	current,
	ImmerScope,
	registerChildFinalizationCallback,
	ArchType,
	MapSetPlugin,
	AnyMap,
	AnySet,
	isObjectish,
	isFunction,
	isBoolean,
	PluginMapSet,
	PluginPatches
} from "../internal"

interface ProducersFns {
	produce: IProduce
	produceWithPatches: IProduceWithPatches
}

export type StrictMode = boolean | "class_only"

export class Immer implements ProducersFns {
	autoFreeze_: boolean = true
	useStrictShallowCopy_: StrictMode = false
	useStrictIteration_: boolean = false

	constructor(config?: {
		autoFreeze?: boolean
		useStrictShallowCopy?: StrictMode
		useStrictIteration?: boolean
	}) {
		if (isBoolean(config?.autoFreeze)) this.setAutoFreeze(config!.autoFreeze)
		if (isBoolean(config?.useStrictShallowCopy))
			this.setUseStrictShallowCopy(config!.useStrictShallowCopy)
		if (isBoolean(config?.useStrictIteration))
			this.setUseStrictIteration(config!.useStrictIteration)
	}

	/**
	 * The `produce` function takes a value and a "recipe function" (whose
	 * return value often depends on the base state). The recipe function is
	 * free to mutate its first argument however it wants. All mutations are
	 * only ever applied to a __copy__ of the base state.
	 *
	 * Pass only a function to create a "curried producer" which relieves you
	 * from passing the recipe function every time.
	 *
	 * Only plain objects and arrays are made mutable. All other objects are
	 * considered uncopyable.
	 *
	 * Note: This function is __bound__ to its `Immer` instance.
	 *
	 * @param {any} base - the initial state
	 * @param {Function} recipe - function that receives a proxy of the base state as first argument and which can be freely modified
	 * @param {Function} patchListener - optional function that will be called with all the patches produced here
	 * @returns {any} a new state, or the initial state if nothing was modified
	 */
	produce: IProduce = (base: any, recipe?: any, patchListener?: any) => {
		// curried invocation
		if (isFunction(base) && !isFunction(recipe)) {
			const defaultBase = recipe
			recipe = base

			const self = this
			return function curriedProduce(
				this: any,
				base = defaultBase,
				...args: any[]
			) {
				return self.produce(base, (draft: Drafted) => recipe.call(this, draft, ...args)) // prettier-ignore
			}
		}

		if (!isFunction(recipe)) die(6)
		if (patchListener !== undefined && !isFunction(patchListener)) die(7)

		let result

		// Only plain objects, arrays, and "immerable classes" are drafted.
		if (isDraftable(base)) {
			const scope = enterScope(this)
			const proxy = createProxy(scope, base, undefined)
			let hasError = true
			try {
				result = recipe(proxy)
				hasError = false
			} finally {
				// finally instead of catch + rethrow better preserves original stack
				if (hasError) revokeScope(scope)
				else leaveScope(scope)
			}
			usePatchesInScope(scope, patchListener)
			return processResult(result, scope)
		} else if (!base || !isObjectish(base)) {
			result = recipe(base)
			if (result === undefined) result = base
			if (result === NOTHING) result = undefined
			if (this.autoFreeze_) freeze(result, true)
			if (patchListener) {
				const p: Patch[] = []
				const ip: Patch[] = []
				getPlugin(PluginPatches).generateReplacementPatches_(base, result, {
					patches_: p,
					inversePatches_: ip
				} as ImmerScope) // dummy scope
				patchListener(p, ip)
			}
			return result
		} else die(1, base)
	}

	produceWithPatches: IProduceWithPatches = (base: any, recipe?: any): any => {
		// curried invocation
		if (isFunction(base)) {
			return (state: any, ...args: any[]) =>
				this.produceWithPatches(state, (draft: any) => base(draft, ...args))
		}

		let patches: Patch[], inversePatches: Patch[]
		const result = this.produce(base, recipe, (p: Patch[], ip: Patch[]) => {
			patches = p
			inversePatches = ip
		})
		return [result, patches!, inversePatches!]
	}

	createDraft<T extends Objectish>(base: T): Draft<T> {
		if (!isDraftable(base)) die(8)
		if (isDraft(base)) base = current(base)
		const scope = enterScope(this)
		const proxy = createProxy(scope, base, undefined)
		proxy[DRAFT_STATE].isManual_ = true
		leaveScope(scope)
		return proxy as any
	}

	finishDraft<D extends Draft<any>>(
		draft: D,
		patchListener?: PatchListener
	): D extends Draft<infer T> ? T : never {
		const state: ImmerState = draft && (draft as any)[DRAFT_STATE]
		if (!state || !state.isManual_) die(9)
		const {scope_: scope} = state
		usePatchesInScope(scope, patchListener)
		return processResult(undefined, scope)
	}

	/**
	 * Pass true to automatically freeze all copies created by Immer.
	 *
	 * By default, auto-freezing is enabled.
	 */
	setAutoFreeze(value: boolean) {
		this.autoFreeze_ = value
	}

	/**
	 * Pass true to enable strict shallow copy.
	 *
	 * By default, immer does not copy the object descriptors such as getter, setter and non-enumrable properties.
	 */
	setUseStrictShallowCopy(value: StrictMode) {
		this.useStrictShallowCopy_ = value
	}

	/**
	 * Pass false to use faster iteration that skips non-enumerable properties
	 * but still handles symbols for compatibility.
	 *
	 * By default, strict iteration is enabled (includes all own properties).
	 */
	setUseStrictIteration(value: boolean) {
		this.useStrictIteration_ = value
	}

	shouldUseStrictIteration(): boolean {
		return this.useStrictIteration_
	}

	applyPatches<T extends Objectish>(base: T, patches: readonly Patch[]): T {
		// If a patch replaces the entire state, take that replacement as base
		// before applying patches
		let i: number
		for (i = patches.length - 1; i >= 0; i--) {
			const patch = patches[i]
			if (patch.path.length === 0 && patch.op === "replace") {
				base = patch.value
				break
			}
		}
		// If there was a patch that replaced the entire state, start from the
		// patch after that.
		if (i > -1) {
			patches = patches.slice(i + 1)
		}

		const applyPatchesImpl = getPlugin(PluginPatches).applyPatches_
		if (isDraft(base)) {
			// N.B: never hits if some patch a replacement, patches are never drafts
			return applyPatchesImpl(base, patches)
		}
		// Otherwise, produce a copy of the base state.
		return this.produce(base, (draft: Drafted) =>
			applyPatchesImpl(draft, patches)
		)
	}
}

export function createProxy<T extends Objectish>(
	rootScope: ImmerScope,
	value: T,
	parent?: ImmerState,
	key?: string | number | symbol
): Drafted<T, ImmerState> {
	// precondition: createProxy should be guarded by isDraftable, so we know we can safely draft
	// returning a tuple here lets us skip a proxy access
	// to DRAFT_STATE later
	const [draft, state] = isMap(value)
		? getPlugin(PluginMapSet).proxyMap_(value, parent)
		: isSet(value)
		? getPlugin(PluginMapSet).proxySet_(value, parent)
		: createProxyProxy(value, parent)

	const scope = parent?.scope_ ?? getCurrentScope()
	scope.drafts_.push(draft)

	// Ensure the parent callbacks are passed down so we actually
	// track all callbacks added throughout the tree
	state.callbacks_ = parent?.callbacks_ ?? []
	state.key_ = key

	if (parent && key !== undefined) {
		registerChildFinalizationCallback(parent, state, key)
	} else {
		// It's a root draft, register it with the scope
		state.callbacks_.push(function rootDraftCleanup(rootScope) {
			rootScope.mapSetPlugin_?.fixSetContents(state)

			const {patchPlugin_} = rootScope

			if (state.modified_ && patchPlugin_) {
				patchPlugin_.generatePatches_(state, [], rootScope)
			}
		})
	}

	return draft as any
}
