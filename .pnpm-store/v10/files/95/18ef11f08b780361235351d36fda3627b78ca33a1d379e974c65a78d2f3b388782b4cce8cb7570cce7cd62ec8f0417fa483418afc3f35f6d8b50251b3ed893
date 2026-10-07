import { InputNode, OutputNode, ToneAudioNode, ToneAudioNodeOptions } from "../../core/context/ToneAudioNode.js";
import { Decibels } from "../../core/type/Units.js";
import { Param } from "../../core/context/Param.js";
export interface LimiterOptions extends ToneAudioNodeOptions {
    threshold: Decibels;
}
/**
 * Limiter will limit the loudness of an incoming signal.
 * Under the hood it's composed of a {@link Compressor} with a fast attack
 * and release and max compression ratio.
 *
 * @example
 * const limiter = new Tone.Limiter(-20).toDestination();
 * const oscillator = new Tone.Oscillator().connect(limiter);
 * oscillator.start();
 * @category Component
 */
export declare class Limiter extends ToneAudioNode<LimiterOptions> {
    readonly name: string;
    readonly input: InputNode;
    readonly output: OutputNode;
    /**
     * The compressor which does the limiting
     */
    private _compressor;
    readonly threshold: Param<"decibels">;
    /**
     * @param threshold The threshold above which the gain reduction is applied.
     */
    constructor(threshold?: Decibels);
    constructor(options?: Partial<LimiterOptions>);
    static getDefaults(): LimiterOptions;
    /**
     * A read-only decibel value for metering purposes, representing the current amount of gain
     * reduction that the compressor is applying to the signal.
     */
    get reduction(): Decibels;
    dispose(): this;
}
