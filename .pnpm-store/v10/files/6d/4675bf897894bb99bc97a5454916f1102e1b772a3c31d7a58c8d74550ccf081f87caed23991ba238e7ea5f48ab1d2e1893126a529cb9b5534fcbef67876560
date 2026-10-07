export { getContext, setContext } from "./core/Global.js";
export * from "./classes.js";
export * from "./version.js";
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
export declare function now(): Seconds;
/**
 * The current audio context time of the global {@link Context} without the {@link Context.lookAhead}
 * @see {@link Context.immediate}
 * @category Core
 */
export declare function immediate(): Seconds;
/**
 * The Transport object belonging to the global Tone.js Context.
 * @see {@link TransportClass}
 * @category Core
 * @deprecated Use {@link getTransport} instead
 */
export declare const Transport: TransportClass;
/**
 * The Transport object belonging to the global Tone.js Context.
 * @see {@link TransportClass}
 * @category Core
 */
export declare function getTransport(): TransportClass;
/**
 * The Destination (output) belonging to the global Tone.js Context.
 * @see {@link DestinationClass}
 * @category Core
 * @deprecated Use {@link getDestination} instead
 */
export declare const Destination: DestinationClass;
/**
 * @deprecated Use {@link getDestination} instead
 */
export declare const Master: DestinationClass;
/**
 * The Destination (output) belonging to the global Tone.js Context.
 * @see {@link DestinationClass}
 * @category Core
 */
export declare function getDestination(): DestinationClass;
/**
 * The {@link ListenerClass} belonging to the global Tone.js Context.
 * @category Core
 * @deprecated Use {@link getListener} instead
 */
export declare const Listener: ListenerClass;
/**
 * The {@link ListenerClass} belonging to the global Tone.js Context.
 * @category Core
 */
export declare function getListener(): ListenerClass;
/**
 * Draw is used to synchronize the draw frame with the Transport's callbacks.
 * @see {@link DrawClass}
 * @category Core
 * @deprecated Use {@link getDraw} instead
 */
export declare const Draw: DrawClass;
/**
 * Get the singleton attached to the global context.
 * Draw is used to synchronize the draw frame with the Transport's callbacks.
 * @see {@link DrawClass}
 * @category Core
 */
export declare function getDraw(): DrawClass;
/**
 * A reference to the global context
 * @see {@link Context}
 * @deprecated Use {@link getContext} instead
 */
export declare const context: import("./classes.js").BaseContext;
/**
 * Promise which resolves when all of the loading promises are resolved.
 * Alias for static {@link ToneAudioBuffer.loaded} method.
 * @category Core
 */
export declare function loaded(): Promise<void>;
import { ToneAudioBuffers } from "./core/context/ToneAudioBuffers.js";
import { ToneBufferSource } from "./source/buffer/ToneBufferSource.js";
/** @deprecated Use {@link ToneAudioBuffer} */
export declare const Buffer: typeof ToneAudioBuffer;
/** @deprecated Use {@link ToneAudioBuffers} */
export declare const Buffers: typeof ToneAudioBuffers;
/** @deprecated Use {@link ToneBufferSource} */
export declare const BufferSource: typeof ToneBufferSource;
