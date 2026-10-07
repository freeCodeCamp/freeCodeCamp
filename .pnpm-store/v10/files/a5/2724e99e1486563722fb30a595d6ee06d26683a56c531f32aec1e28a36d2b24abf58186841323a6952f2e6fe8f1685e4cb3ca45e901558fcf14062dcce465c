const errors = {
	0: "Illegal state",
	1: "Immer drafts cannot have computed properties",
	2: "This object has been frozen and should not be mutated",
	3(data: any) {
		return (
			"Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " +
			data
		)
	},
	4: "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",
	5: "Immer forbids circular references",
	6: "The first or second argument to `produce` must be a function",
	7: "The third argument to `produce` must be a function or undefined",
	8: "First argument to `createDraft` must be a plain object, an array, or an immerable object",
	9: "First argument to `finishDraft` must be a draft returned by `createDraft`",
	10: "The given draft is already finalized",
	11: "Object.defineProperty() cannot be used on an Immer draft",
	12: "Object.setPrototypeOf() cannot be used on an Immer draft",
	13: "Immer only supports deleting array indices",
	14: "Immer only supports setting array indices and the 'length' property",
	15(path: string) {
		return "Cannot apply patch, path doesn't resolve: " + path
	},
	16: 'Sets cannot have "replace" patches.',
	17(op: string) {
		return "Unsupported patch operation: " + op
	},
	18(plugin: string) {
		return `The plugin for '${plugin}' has not been loaded into Immer. To enable the plugin, import and call \`enable${plugin}()\` when initializing your application.`
	},
	20: "Cannot use proxies if Proxy, Proxy.revocable or Reflect are not available",
	21(thing: string) {
		return `produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '${thing}'`
	},
	22(thing: string) {
		return `'current' expects a draft, got: ${thing}`
	},
	23(thing: string) {
		return `'original' expects a draft, got: ${thing}`
	},
	24: "Patching reserved attributes like __proto__, prototype and constructor is not allowed"
} as const

export function die(error: keyof typeof errors, ...args: any[]): never {
	if (__DEV__) {
		const e = errors[error]
		const msg = !e
			? "unknown error nr: " + error
			: typeof e === "function"
			? e.apply(null, args as any)
			: e
		throw new Error(`[Immer] ${msg}`)
	}
	throw new Error(
		`[Immer] minified error nr: ${error}${
			args.length ? " " + args.map(s => `'${s}'`).join(",") : ""
		}. Find the full error at: https://bit.ly/3cXEKWf`
	)
}
