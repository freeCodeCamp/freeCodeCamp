import { Param } from "../../core/context/Param.js";
import { ToneAudioNode, ToneAudioNodeOptions } from "../../core/context/ToneAudioNode.js";
import { Decibels, Positive, Time } from "../../core/type/Units.js";
export interface CompressorOptions extends ToneAudioNodeOptions {
    attack: Time;
    knee: Decibels;
    ratio: Positive;
    release: Time;
    threshold: Decibels;
}
/**
 * Compressor is a thin wrapper around the Web Audio
 * [DynamicsCompressorNode](http://webaudio.github.io/web-audio-api/#the-dynamicscompressornode-interface).
 * Compression reduces the volume of loud sounds or amplifies quiet sounds
 * by narrowing or "compressing" an audio signal's dynamic range.
 * Read more on [Wikipedia](https://en.wikipedia.org/wiki/Dynamic_range_compression).
 * @example
 * const comp = new Tone.Compressor(-30, 3);
 * @category Component
 */
export declare class Compressor extends ToneAudioNode<CompressorOptions> {
    readonly name: string;
    /**
     * the compressor node
     */
    private _compressor;
    readonly input: DynamicsCompressorNode;
    readonly output: DynamicsCompressorNode;
    /**
     * The decibel value above which the compression will start taking effect.
     * @min -100
     * @max 0
     */
    readonly threshold: Param<"decibels">;
    /**
     * The amount of time (in seconds) to reduce the gain by 10dB.
     * @min 0
     * @max 1
     */
    readonly attack: Param<"time">;
    /**
     * The amount of time (in seconds) to increase the gain by 10dB.
     * @min 0
     * @max 1
     */
    readonly release: Param<"time">;
    /**
     * A decibel value representing the range above the threshold where the
     * curve smoothly transitions to the "ratio" portion.
     * @min 0
     * @max 40
     */
    readonly knee: Param<"decibels">;
    /**
     * The amount of dB change in input for a 1 dB change in output.
     * @min 1
     * @max 20
     */
    readonly ratio: Param<"positive">;
    /**
     * @param threshold The value above which the compression starts to be applied.
     * @param ratio The gain reduction ratio.
     */
    constructor(threshold?: Decibels, ratio?: Positive);
    constructor(options?: Partial<CompressorOptions>);
    static getDefaults(): CompressorOptions;
    /**
     * A read-only decibel value for metering purposes, representing the current amount of gain
     * reduction that the compressor is applying to the signal. If fed no signal the value will be 0 (no gain reduction).
     */
    get reduction(): Decibels;
    dispose(): this;
}
