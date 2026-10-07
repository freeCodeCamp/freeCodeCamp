import { InputNode, ToneAudioNode, ToneAudioNodeOptions } from "../../core/context/ToneAudioNode.js";
import { Compressor, CompressorOptions } from "./Compressor.js";
import { RecursivePartial } from "../../core/util/Interface.js";
import { Frequency } from "../../core/type/Units.js";
import { Signal } from "../../signal/Signal.js";
export interface MultibandCompressorOptions extends ToneAudioNodeOptions {
    mid: Omit<CompressorOptions, keyof ToneAudioNodeOptions>;
    low: Omit<CompressorOptions, keyof ToneAudioNodeOptions>;
    high: Omit<CompressorOptions, keyof ToneAudioNodeOptions>;
    lowFrequency: Frequency;
    highFrequency: Frequency;
}
/**
 * A compressor with separate controls over low/mid/high dynamics.
 * @see {@link Compressor} and {@link MultibandSplit}
 *
 * @example
 * const multiband = new Tone.MultibandCompressor({
 * 	lowFrequency: 200,
 * 	highFrequency: 1300,
 * 	low: {
 * 		threshold: -12
 * 	}
 * });
 * @category Component
 */
export declare class MultibandCompressor extends ToneAudioNode<MultibandCompressorOptions> {
    readonly name: string;
    readonly input: InputNode;
    readonly output: ToneAudioNode;
    /**
     * Split the incoming signal into high/mid/low
     */
    private _splitter;
    /**
     * low/mid crossover frequency.
     */
    readonly lowFrequency: Signal<"frequency">;
    /**
     * mid/high crossover frequency.
     */
    readonly highFrequency: Signal<"frequency">;
    /**
     * The compressor applied to the low frequencies
     */
    readonly low: Compressor;
    /**
     * The compressor applied to the mid frequencies
     */
    readonly mid: Compressor;
    /**
     * The compressor applied to the high frequencies
     */
    readonly high: Compressor;
    constructor(options?: RecursivePartial<MultibandCompressorOptions>);
    static getDefaults(): MultibandCompressorOptions;
    dispose(): this;
}
