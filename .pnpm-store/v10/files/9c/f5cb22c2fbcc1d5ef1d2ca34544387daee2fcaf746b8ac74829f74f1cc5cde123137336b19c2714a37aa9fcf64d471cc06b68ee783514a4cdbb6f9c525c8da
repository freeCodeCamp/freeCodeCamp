/**
 * All of the classes or functions which are loaded into the AudioWorkletGlobalScope
 */
const workletContext: Set<string> = new Set();

/**
 * Add a class to the AudioWorkletGlobalScope
 */
export function addToWorklet(classOrFunction: string) {
	workletContext.add(classOrFunction);
}

/**
 * Register a processor in the AudioWorkletGlobalScope with the given name
 */
export function registerProcessor(name: string, classDesc: string) {
	const processor = /* javascript */ `registerProcessor("${name}", ${classDesc})`;
	workletContext.add(processor);
}

/**
 * Get all of the modules which have been registered to the AudioWorkletGlobalScope
 */
export function getWorkletGlobalScope(): string {
	return Array.from(workletContext).join("\n");
}
