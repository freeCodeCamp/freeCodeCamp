import { t as unrun } from "../src-GU5PtktT.mjs";
import { runAsWorker } from "synckit";
//#region src/sync/worker.ts
function cloneForTransfer(value, seen = /* @__PURE__ */ new WeakMap()) {
	if (typeof value === "function") throw new TypeError("[unrun] unrunSync cannot return functions");
	if (value === null || typeof value !== "object") return value;
	const objectValue = value;
	if (seen.has(objectValue)) return seen.get(objectValue);
	if (Array.isArray(value)) {
		const clone = [];
		seen.set(objectValue, clone);
		for (const item of value) clone.push(cloneForTransfer(item, seen));
		return clone;
	}
	if (isModuleNamespace(value)) {
		const clone = Object.create(null);
		seen.set(objectValue, clone);
		for (const key of Object.keys(value)) {
			const nestedValue = value[key];
			clone[key] = cloneForTransfer(nestedValue, seen);
		}
		return clone;
	}
	if (typeof structuredClone === "function") try {
		return structuredClone(value);
	} catch (error) {
		if (!isDataCloneError(error)) throw error;
	}
	const clone = {};
	seen.set(objectValue, clone);
	for (const [key, child] of Object.entries(value)) clone[key] = cloneForTransfer(child, seen);
	return clone;
}
function isModuleNamespace(value) {
	if (!value || typeof value !== "object") return false;
	return Object.prototype.toString.call(value) === "[object Module]";
}
function isDataCloneError(error) {
	if (!error || typeof error !== "object") return false;
	if (!("name" in error)) return false;
	return error.name === "DataCloneError";
}
runAsWorker(async (...args) => {
	const options = args[0];
	return cloneForTransfer(await unrun(options));
});
//#endregion
export {};
