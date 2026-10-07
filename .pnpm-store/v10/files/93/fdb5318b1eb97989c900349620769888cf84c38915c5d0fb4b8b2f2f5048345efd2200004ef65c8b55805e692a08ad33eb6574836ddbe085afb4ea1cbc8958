import { Tone } from "../Tone.js";
import { Samples, Seconds } from "../type/Units.js";
interface ToneAudioBufferOptions {
    url?: string | AudioBuffer | ToneAudioBuffer;
    reverse: boolean;
    onload: (buffer?: ToneAudioBuffer) => void;
    onerror: (error: Error) => void;
}
/**
 * AudioBuffer loading and storage. ToneAudioBuffer is used internally by all
 * classes that make requests for audio files such as Tone.Player,
 * Tone.Sampler and Tone.Convolver.
 * @example
 * const buffer = new Tone.ToneAudioBuffer("https://tonejs.github.io/audio/casio/A1.mp3", () => {
 * 	console.log("loaded");
 * });
 * @category Core
 */
export declare class ToneAudioBuffer extends Tone {
    readonly name: string;
    /**
     * stores the loaded AudioBuffer
     */
    private _buffer?;
    /**
     * indicates if the buffer should be reversed or not
     */
    private _reversed;
    /**
     * Callback when the buffer is loaded.
     */
    onload: (buffer: ToneAudioBuffer) => void;
    /**
     *
     * @param url The url to load, or the audio buffer to set.
     * @param onload A callback which is invoked after the buffer is loaded.
     *                           It's recommended to use `ToneAudioBuffer.on('load', callback)` instead
     *                           since it will give you a callback when _all_ buffers are loaded.
     * @param onerror The callback to invoke if there is an error
     */
    constructor(url?: string | ToneAudioBuffer | AudioBuffer, onload?: (buffer: ToneAudioBuffer) => void, onerror?: (error: Error) => void);
    constructor(options?: Partial<ToneAudioBufferOptions>);
    static getDefaults(): ToneAudioBufferOptions;
    /**
     * The sample rate of the AudioBuffer
     */
    get sampleRate(): number;
    /**
     * Pass in an AudioBuffer or ToneAudioBuffer to set the value of this buffer.
     */
    set(buffer: AudioBuffer | ToneAudioBuffer): this;
    /**
     * The audio buffer stored in the object.
     */
    get(): AudioBuffer | undefined;
    /**
     * Makes an fetch request for the selected url then decodes the file as an audio buffer.
     * Invokes the callback once the audio buffer loads.
     * @param url The url of the buffer to load. filetype support depends on the browser.
     * @returns A Promise which resolves with this ToneAudioBuffer
     */
    load(url: string): Promise<this>;
    /**
     * clean up
     */
    dispose(): this;
    /**
     * Set the audio buffer from the array.
     * To create a multichannel AudioBuffer, pass in a multidimensional array.
     * @param array The array to fill the audio buffer
     */
    fromArray(array: Float32Array | Float32Array[]): this;
    /**
     * Sums multiple channels into 1 channel
     * @param chanNum Optionally only copy a single channel from the array.
     */
    toMono(chanNum?: number): this;
    /**
     * Get the buffer as an array. Single channel buffers will return a 1-dimensional
     * Float32Array, and multichannel buffers will return multidimensional arrays.
     * @param channel Optionally only copy a single channel from the array.
     */
    toArray(channel?: number): Float32Array | Float32Array[];
    /**
     * Returns the Float32Array representing the PCM audio data for the specific channel.
     * @param  channel  The channel number to return
     * @return The audio as a TypedArray
     */
    getChannelData(channel: number): Float32Array;
    /**
     * Cut a subsection of the array and return a buffer of the
     * subsection. Does not modify the original buffer
     * @param start The time to start the slice
     * @param end The end time to slice. If none is given will default to the end of the buffer
     */
    slice(start: Seconds, end?: Seconds): ToneAudioBuffer;
    /**
     * Reverse the buffer.
     */
    private _reverse;
    /**
     * If the buffer is loaded or not
     */
    get loaded(): boolean;
    /**
     * The duration of the buffer in seconds.
     */
    get duration(): Seconds;
    /**
     * The length of the buffer in samples
     */
    get length(): Samples;
    /**
     * The number of discrete audio channels. Returns 0 if no buffer is loaded.
     */
    get numberOfChannels(): number;
    /**
     * Reverse the buffer.
     */
    get reverse(): boolean;
    set reverse(rev: boolean);
    /**
     * A path which is prefixed before every url.
     */
    static baseUrl: string;
    /**
     * Create a ToneAudioBuffer from the array. To create a multichannel AudioBuffer,
     * pass in a multidimensional array.
     * @param array The array to fill the audio buffer
     * @return A ToneAudioBuffer created from the array
     */
    static fromArray(array: Float32Array | Float32Array[]): ToneAudioBuffer;
    /**
     * Creates a ToneAudioBuffer from a URL, returns a promise which resolves to a ToneAudioBuffer
     * @param  url The url to load.
     * @return A promise which resolves to a ToneAudioBuffer
     */
    static fromUrl(url: string): Promise<ToneAudioBuffer>;
    /**
     * All of the downloads
     */
    static downloads: Array<Promise<void>>;
    /**
     * Loads a url using fetch and returns the AudioBuffer.
     */
    static load(url: string): Promise<AudioBuffer>;
    /**
     * Checks a url's extension to see if the current browser can play that file type.
     * @param url The url/extension to test
     * @return If the file extension can be played
     * @static
     * @example
     * Tone.ToneAudioBuffer.supportsType("wav"); // returns true
     * Tone.ToneAudioBuffer.supportsType("path/to/file.wav"); // returns true
     */
    static supportsType(url: string): boolean;
    /**
     * Returns a Promise which resolves when all of the buffers have loaded
     */
    static loaded(): Promise<void>;
}
export {};
