/**
 * Array of callbacks to invoke when a new context is created
 */
const notifyNewContext = [];
/**
 * Used internally to setup a new Context
 */
export function onContextInit(cb) {
    notifyNewContext.push(cb);
}
/**
 * Invoke any classes which need to also be initialized when a new context is created.
 */
export function initializeContext(ctx) {
    // add any additional modules
    notifyNewContext.forEach((cb) => cb(ctx));
}
/**
 * Array of callbacks to invoke when a new context is closed
 */
const notifyCloseContext = [];
/**
 * Used internally to tear down a Context
 */
export function onContextClose(cb) {
    notifyCloseContext.push(cb);
}
export function closeContext(ctx) {
    // remove any additional modules
    notifyCloseContext.forEach((cb) => cb(ctx));
}
//# sourceMappingURL=ContextInitialization.js.map