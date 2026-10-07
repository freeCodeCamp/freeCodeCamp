export { getContext, setContext } from "./core/Global.js";
import { Context } from "./core/context/Context.js";
export * from "./classes.js";
export * from "./version.js";
import { getContext } from "./core/Global.js";
import { ToneAudioBuffer } from "./core/context/ToneAudioBuffer.js";
export { start } from "./core/Global.js";
import { Seconds } from "./core/type/Units.js";
export { supported } from "./core/context/AudioContext.js";
import type { TransportClass } from "./core/clock/Transport.js";
import type { DestinationClass } from "./core/context/Destination.js";
import type { DrawClass } from "./core/util/Draw.js";
import type { ListenerClass } from "./core/context/Listener.js";

/**
 * The current audio context time of the global {@link BaseContext}.
 * @see {@link Context.now}
 * @category Core
 */
export function now(): Seconds {
	return getContext().now();
}

/**
 * The current audio context time of the global {@link Context} without the {@link Context.lookAhead}
 * @see {@link Context.immediate}
 * @category Core
 */
export function immediate(): Seconds {
	return getContext().immediate();
}

/**
 * The Transport object belonging to the global Tone.js Context.
 * @see {@link TransportClass}
 * @category Core
 * @deprecated Use {@link getTransport} instead
 */
export const Transport = getContext().transport;

/**
 * The Transport object belonging to the global Tone.js Context.
 * @see {@link TransportClass}
 * @category Core
 */
export function getTransport(): TransportClass {
	return getContext().transport;
}

/**
 * The Destination (output) belonging to the global Tone.js Context.
 * @see {@link DestinationClass}
 * @category Core
 * @deprecated Use {@link getDestination} instead
 */
export const Destination = getContext().destination;

/**
 * @deprecated Use {@link getDestination} instead
 */
export const Master = getContext().destination;

/**
 * The Destination (output) belonging to the global Tone.js Context.
 * @see {@link DestinationClass}
 * @category Core
 */
export function getDestination(): DestinationClass {
	return getContext().destination;
}

/**
 * The {@link ListenerClass} belonging to the global Tone.js Context.
 * @category Core
 * @deprecated Use {@link getListener} instead
 */
export const Listener = getContext().listener;

/**
 * The {@link ListenerClass} belonging to the global Tone.js Context.
 * @category Core
 */
export function getListener(): ListenerClass {
	return getContext().listener;
}

/**
 * Draw is used to synchronize the draw frame with the Transport's callbacks.
 * @see {@link DrawClass}
 * @category Core
 * @deprecated Use {@link getDraw} instead
 */
export const Draw = getContext().draw;

/**
 * Get the singleton attached to the global context.
 * Draw is used to synchronize the draw frame with the Transport's callbacks.
 * @see {@link DrawClass}
 * @category Core
 */
export function getDraw(): DrawClass {
	return getContext().draw;
}

/**
 * A reference to the global context
 * @see {@link Context}
 * @deprecated Use {@link getContext} instead
 */
export const context = getContext();

/**
 * Promise which resolves when all of the loading promises are resolved.
 * Alias for static {@link ToneAudioBuffer.loaded} method.
 * @category Core
 */
export function loaded() {
	return ToneAudioBuffer.loaded();
}

// this fills in name changes from 13.x to 14.x
import { ToneAudioBuffers } from "./core/context/ToneAudioBuffers.js";
import { ToneBufferSource } from "./source/buffer/ToneBufferSource.js";
/** @deprecated Use {@link ToneAudioBuffer} */
export const Buffer: typeof ToneAudioBuffer = ToneAudioBuffer;
/** @deprecated Use {@link ToneAudioBuffers} */
export const Buffers: typeof ToneAudioBuffers = ToneAudioBuffers;
/** @deprecated Use {@link ToneBufferSource} */
export const BufferSource: typeof ToneBufferSource = ToneBufferSource;
