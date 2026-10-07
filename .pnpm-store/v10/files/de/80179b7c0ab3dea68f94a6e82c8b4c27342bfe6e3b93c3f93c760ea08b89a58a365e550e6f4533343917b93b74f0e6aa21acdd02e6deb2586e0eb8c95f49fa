import { Context } from "../context/Context.js";
import { Seconds } from "../type/Units.js";
import { ToneAudioBuffer } from "./ToneAudioBuffer.js";
/**
 * Wrapper around the OfflineAudioContext
 * @category Core
 * @example
 * // generate a single channel, 0.5 second buffer
 * const context = new Tone.OfflineContext(1, 0.5, 44100);
 * const osc = new Tone.Oscillator({ context });
 * context.render().then(buffer => {
 * 	console.log(buffer.numberOfChannels, buffer.duration);
 * });
 */
export declare class OfflineContext extends Context {
    readonly name: string;
    /**
     * A private reference to the duration
     */
    private readonly _duration;
    /**
     * An artificial clock source
     */
    private _currentTime;
    /**
     * Private reference to the OfflineAudioContext.
     */
    protected _context: OfflineAudioContext;
    readonly isOffline: boolean;
    /**
     * @param  channels  The number of channels to render
     * @param  duration  The duration to render in seconds
     * @param sampleRate the sample rate to render at
     */
    constructor(channels: number, duration: Seconds, sampleRate: number);
    constructor(context: OfflineAudioContext);
    /**
     * Override the now method to point to the internal clock time
     */
    now(): Seconds;
    /**
     * Same as this.now()
     */
    get currentTime(): Seconds;
    /**
     * Render just the clock portion of the audio context.
     */
    private _renderClock;
    /**
     * Render the output of the OfflineContext
     * @param asynchronous If the clock should be rendered asynchronously, which will not block the main thread, but be slightly slower.
     */
    render(asynchronous?: boolean): Promise<ToneAudioBuffer>;
    /**
     * Close the context
     */
    close(): Promise<void>;
}
