import { Positive, Time } from "../core/type/Units.js";
import { Source, SourceOptions } from "../source/Source.js";
export type NoiseType = "white" | "brown" | "pink";
export interface NoiseOptions extends SourceOptions {
    type: NoiseType;
    playbackRate: Positive;
    fadeIn: Time;
    fadeOut: Time;
}
/**
 * Noise is a noise generator. It uses looped noise buffers to save on performance.
 * Noise supports the noise types: "pink", "white", and "brown". Read more about
 * colors of noise on [Wikipedia](https://en.wikipedia.org/wiki/Colors_of_noise).
 *
 * @example
 * // initialize the noise and start
 * const noise = new Tone.Noise("pink").start();
 * // make an autofilter to shape the noise
 * const autoFilter = new Tone.AutoFilter({
 * 	frequency: "8n",
 * 	baseFrequency: 200,
 * 	octaves: 8
 * }).toDestination().start();
 * // connect the noise
 * noise.connect(autoFilter);
 * // start the autofilter LFO
 * autoFilter.start();
 * @category Source
 */
export declare class Noise extends Source<NoiseOptions> {
    readonly name: string;
    /**
     * Private reference to the source
     */
    private _source;
    /**
     * private reference to the type
     */
    private _type;
    /**
     * The playback rate of the noise. Affects
     * the "frequency" of the noise.
     */
    private _playbackRate;
    /**
     * The fadeIn time of the amplitude envelope.
     */
    protected _fadeIn: Time;
    /**
     * The fadeOut time of the amplitude envelope.
     */
    protected _fadeOut: Time;
    /**
     * @param type the noise type (white|pink|brown)
     */
    constructor(type?: NoiseType);
    constructor(options?: Partial<NoiseOptions>);
    static getDefaults(): NoiseOptions;
    /**
     * The type of the noise. Can be "white", "brown", or "pink".
     * @example
     * const noise = new Tone.Noise().toDestination().start();
     * noise.type = "brown";
     */
    get type(): NoiseType;
    set type(type: NoiseType);
    /**
     * The playback rate of the noise. Affects
     * the "frequency" of the noise.
     */
    get playbackRate(): Positive;
    set playbackRate(rate: Positive);
    /**
     * internal start method
     */
    protected _start(time?: Time): void;
    /**
     * internal stop method
     */
    protected _stop(time?: Time): void;
    /**
     * The fadeIn time of the amplitude envelope.
     */
    get fadeIn(): Time;
    set fadeIn(time: Time);
    /**
     * The fadeOut time of the amplitude envelope.
     */
    get fadeOut(): Time;
    set fadeOut(time: Time);
    protected _restart(time?: Time): void;
    /**
     * Clean up.
     */
    dispose(): this;
}
