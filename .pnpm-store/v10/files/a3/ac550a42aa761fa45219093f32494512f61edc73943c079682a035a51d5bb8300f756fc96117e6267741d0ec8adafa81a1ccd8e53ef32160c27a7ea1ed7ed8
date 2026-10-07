/**
 * All of the classes or functions which are loaded into the AudioWorkletGlobalScope
 */
const workletContext = new Set();
/**
 * Add a class to the AudioWorkletGlobalScope
 */
export function addToWorklet(classOrFunction) {
    workletContext.add(classOrFunction);
}
/**
 * Register a processor in the AudioWorkletGlobalScope with the given name
 */
export function registerProcessor(name, classDesc) {
    const processor = /* javascript */ `registerProcessor("${name}", ${classDesc})`;
    workletContext.add(processor);
}
/**
 * Get all of the modules which have been registered to the AudioWorkletGlobalScope
 */
export function getWorkletGlobalScope() {
    return Array.from(workletContext).join("\n");
}
//# sourceMappingURL=WorkletGlobalScope.js.map