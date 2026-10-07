import { Tone } from "../Tone.js";
import { ToneAudioBuffer } from "./ToneAudioBuffer.js";
export interface ToneAudioBuffersUrlMap {
    [name: string]: string | AudioBuffer | ToneAudioBuffer;
    [name: number]: string | AudioBuffer | ToneAudioBuffer;
}
interface ToneAudioBuffersOptions {
    urls: ToneAudioBuffersUrlMap;
    onload: () => void;
    onerror?: (error: Error) => void;
    baseUrl: string;
}
/**
 * A data structure for holding multiple buffers in a Map-like datastructure.
 *
 * @example
 * const pianoSamples = new Tone.ToneAudioBuffers({
 * 	A1: "https://tonejs.github.io/audio/casio/A1.mp3",
 * 	A2: "https://tonejs.github.io/audio/casio/A2.mp3",
 * }, () => {
 * 	const player = new Tone.Player().toDestination();
 * 	// play one of the samples when they all load
 * 	player.buffer = pianoSamples.get("A2");
 * 	player.start();
 * });
 * @example
 * // To pass in additional parameters in the second parameter
 * const buffers = new Tone.ToneAudioBuffers({
 * 	 urls: {
 * 		 A1: "A1.mp3",
 * 		 A2: "A2.mp3",
 * 	 },
 * 	 onload: () => console.log("loaded"),
 * 	 baseUrl: "https://tonejs.github.io/audio/casio/"
 * });
 * @category Core
 */
export declare class ToneAudioBuffers extends Tone {
    readonly name: string;
    /**
     * All of the buffers
     */
    private _buffers;
    /**
     * A path which is prefixed before every url.
     */
    baseUrl: string;
    /**
     * Keep track of the number of loaded buffers
     */
    private _loadingCount;
    /**
     * @param  urls  An object literal or array of urls to load.
     * @param onload  The callback to invoke when the buffers are loaded.
     * @param baseUrl A prefix url to add before all the urls
     */
    constructor(urls?: ToneAudioBuffersUrlMap, onload?: () => void, baseUrl?: string);
    constructor(options?: Partial<ToneAudioBuffersOptions>);
    static getDefaults(): ToneAudioBuffersOptions;
    /**
     * True if the buffers object has a buffer by that name.
     * @param  name  The key or index of the buffer.
     */
    has(name: string | number): boolean;
    /**
     * Get a buffer by name. If an array was loaded,
     * then use the array index.
     * @param  name  The key or index of the buffer.
     */
    get(name: string | number): ToneAudioBuffer;
    /**
     * A buffer was loaded. decrement the counter.
     */
    private _bufferLoaded;
    /**
     * If the buffers are loaded or not
     */
    get loaded(): boolean;
    /**
     * Add a buffer by name and url to the Buffers
     * @param  name      A unique name to give the buffer
     * @param  url  Either the url of the bufer, or a buffer which will be added with the given name.
     * @param  callback  The callback to invoke when the url is loaded.
     * @param  onerror  Invoked if the buffer can't be loaded
     */
    add(name: string | number, url: string | AudioBuffer | ToneAudioBuffer, callback?: () => void, onerror?: (e: Error) => void): this;
    dispose(): this;
}
export {};
