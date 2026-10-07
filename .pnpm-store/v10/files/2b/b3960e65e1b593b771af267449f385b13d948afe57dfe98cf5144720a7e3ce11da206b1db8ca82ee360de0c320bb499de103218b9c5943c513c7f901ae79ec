import {isFunction} from "../internal"

export const errors =
	process.env.NODE_ENV !== "production"
		? [
				// All error codes, starting by 0:
				function(plugin: string) {
					return `The plugin for '${plugin}' has not been loaded into Immer. To enable the plugin, import and call \`enable${plugin}()\` when initializing your application.`
				},
				function(thing: string) {
					return `produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '${thing}'`
				},
				"This object has been frozen and should not be mutated",
				function(data: any) {
					return (
						"Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " +
						data
					)
				},
				"An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",
				"Immer forbids circular references",
				"The first or second argument to `produce` must be a function",
				"The third argument to `produce` must be a function or undefined",
				"First argument to `createDraft` must be a plain object, an array, or an immerable object",
				"First argument to `finishDraft` must be a draft returned by `createDraft`",
				function(thing: string) {
					return `'current' expects a draft, got: ${thing}`
				},
				"Object.defineProperty() cannot be used on an Immer draft",
				"Object.setPrototypeOf() cannot be used on an Immer draft",
				"Immer only supports deleting array indices",
				"Immer only supports setting array indices and the 'length' property",
				function(thing: string) {
					return `'original' expects a draft, got: ${thing}`
				}
				// Note: if more errors are added, the errorOffset in Patches.ts should be increased
				// See Patches.ts for additional errors
		  ]
		: []

export function die(error: number, ...args: any[]): never {
	if (process.env.NODE_ENV !== "production") {
		const e = errors[error]
		const msg = isFunction(e) ? e.apply(null, args as any) : e
		throw new Error(`[Immer] ${msg}`)
	}
	throw new Error(
		`[Immer] minified error nr: ${error}. Full error at: https://bit.ly/3cXEKWf`
	)
}
