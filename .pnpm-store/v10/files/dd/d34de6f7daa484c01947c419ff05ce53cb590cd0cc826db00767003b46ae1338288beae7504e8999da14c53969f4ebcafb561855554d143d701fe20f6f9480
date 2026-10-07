//-------------------------------------
// INITIALIZING NEW CONTEXT
//-------------------------------------
import type { Context } from "./Context.js";

/**
 * Array of callbacks to invoke when a new context is created
 */
const notifyNewContext: Array<(ctx: Context) => void> = [];

/**
 * Used internally to setup a new Context
 */
export function onContextInit(cb: (ctx: Context) => void): void {
	notifyNewContext.push(cb);
}

/**
 * Invoke any classes which need to also be initialized when a new context is created.
 */
export function initializeContext(ctx: Context): void {
	// add any additional modules
	notifyNewContext.forEach((cb) => cb(ctx));
}

/**
 * Array of callbacks to invoke when a new context is closed
 */
const notifyCloseContext: Array<(ctx: Context) => void> = [];

/**
 * Used internally to tear down a Context
 */
export function onContextClose(cb: (ctx: Context) => void): void {
	notifyCloseContext.push(cb);
}

export function closeContext(ctx: Context): void {
	// remove any additional modules
	notifyCloseContext.forEach((cb) => cb(ctx));
}
