import { invariant } from "outvariant";

//#region src/utils/emitAsync.ts
/**
* Emits an event on the given emitter but executes
* the listeners sequentially. This accounts for asynchronous
* listeners (e.g. those having "sleep" and handling the request).
*/
async function emitAsync(emitter, eventName, ...data) {
	const listeners = emitter.listeners(eventName);
	if (listeners.length === 0) return;
	for (const listener of listeners) await listener.apply(emitter, data);
}

//#endregion
//#region src/utils/patchesRegistry.ts
var PatchesRegistry = class {
	#replacements = /* @__PURE__ */ new Map();
	applyPatch(owner, key, getNextValue) {
		const ownerReplacements = this.#replacements.get(owner);
		invariant(!ownerReplacements?.has(key), `Failed to replace a global value at "${String(key)}": already replaced.`);
		const match = getDeepPropertyDescriptor(owner, key);
		if (typeof match === "undefined") {
			console.warn(`Failed to replace a global value at "${String(key)}": not a global value.`);
			return () => {};
		}
		Object.defineProperty(owner, key, {
			value: getNextValue(owner[key]),
			enumerable: true,
			configurable: true
		});
		const restorePatch = () => {
			const currentReplacements = this.#replacements.get(owner);
			if (!currentReplacements?.has(key)) return;
			if (match.owner === owner) Object.defineProperty(match.owner, key, match.descriptor);
			else
 /**
			* @todo Delete the proxy property set by the registry.
			* If the match's owner isn't the original owner, the property is likely nested in the prototype.
			* The registry does not meddle with those, they are left intact.
			*/
			Reflect.deleteProperty(owner, key);
			currentReplacements.delete(key);
			if (currentReplacements.size === 0) this.#replacements.delete(owner);
		};
		if (ownerReplacements) ownerReplacements.set(key, restorePatch);
		else this.#replacements.set(owner, new Map([[key, restorePatch]]));
		return restorePatch;
	}
	restoreAllPatches() {
		const errors = [];
		for (const [, ownerReplacements] of this.#replacements) for (const [, restorePatch] of ownerReplacements) try {
			restorePatch();
		} catch (error) {
			if (error instanceof Error) errors.push(error);
			else throw error;
		}
		if (errors.length > 0) throw new AggregateError(errors, "FOO!");
	}
};
const patchesRegistry = new PatchesRegistry();
/**
* Returns a property descriptor for the given property on the owner.
* Walks down the prototype chain if the property does not exist on the owner.
* Handy for getting a global property descriptor where `globalThis` is
* replaced with a controlled class (e.g. ServiceWorkerGlobalScope).
*/
function getDeepPropertyDescriptor(owner, key) {
	let currentOwner = owner;
	let descriptor;
	while (currentOwner) {
		descriptor = Object.getOwnPropertyDescriptor(currentOwner, key);
		if (descriptor) return {
			owner: currentOwner,
			descriptor
		};
		currentOwner = Object.getPrototypeOf(currentOwner);
	}
}

//#endregion
//#region src/utils/hasConfigurableGlobal.ts
/**
* Returns a boolean indicating whether the given global property
* is defined and is configurable.
*/
function hasConfigurableGlobal(propertyName) {
	const match = getDeepPropertyDescriptor(globalThis, propertyName);
	if (typeof match === "undefined") return false;
	const { descriptor } = match;
	if (typeof descriptor.get === "function" && typeof descriptor.get() === "undefined") return false;
	if (typeof descriptor.get === "undefined" && descriptor.value == null) return false;
	if (typeof descriptor.set === "undefined" && !descriptor.configurable) {
		console.error(`[MSW] Failed to apply interceptor: the global \`${propertyName}\` property is non-configurable. This is likely an issue with your environment. If you are using a framework, please open an issue about this in their repository.`);
		return false;
	}
	return true;
}

//#endregion
export { patchesRegistry as n, emitAsync as r, hasConfigurableGlobal as t };
//# sourceMappingURL=hasConfigurableGlobal-FTYwno1G.mjs.map