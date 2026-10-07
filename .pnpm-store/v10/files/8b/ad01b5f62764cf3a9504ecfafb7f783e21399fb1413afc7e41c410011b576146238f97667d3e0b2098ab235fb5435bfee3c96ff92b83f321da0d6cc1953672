/// <reference types="node" />
import { signals } from './signals.js';
export { signals };
/**
 * A function that takes an exit code and signal as arguments
 *
 * In the case of signal exits *only*, a return value of true
 * will indicate that the signal is being handled, and we should
 * not synthetically exit with the signal we received. Regardless
 * of the handler return value, the handler is unloaded when an
 * otherwise fatal signal is received, so you get exactly 1 shot
 * at it, unless you add another onExit handler at that point.
 *
 * In the case of numeric code exits, we may already have committed
 * to exiting the process, for example via a fatal exception or
 * unhandled promise rejection, so it is impossible to stop safely.
 */
export type Handler = (code: number | null | undefined, signal: NodeJS.Signals | null) => true | void;
export declare const 
/**
 * Called when the process is exiting, whether via signal, explicit
 * exit, or running out of stuff to do.
 *
 * If the global process object is not suitable for instrumentation,
 * then this will be a no-op.
 *
 * Returns a function that may be used to unload signal-exit.
 */
onExit: (cb: Handler, opts?: {
    alwaysLast?: boolean | undefined;
} | undefined) => () => void, 
/**
 * Load the listeners.  Likely you never need to call this, unless
 * doing a rather deep integration with signal-exit functionality.
 * Mostly exposed for the benefit of testing.
 *
 * @internal
 */
load: () => void, 
/**
 * Unload the listeners.  Likely you never need to call this, unless
 * doing a rather deep integration with signal-exit functionality.
 * Mostly exposed for the benefit of testing.
 *
 * @internal
 */
unload: () => void;
//# sourceMappingURL=index.d.ts.map