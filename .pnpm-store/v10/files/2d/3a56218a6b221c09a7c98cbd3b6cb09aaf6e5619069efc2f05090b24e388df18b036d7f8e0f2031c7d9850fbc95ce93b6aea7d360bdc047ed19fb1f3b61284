import { Gain } from "../../core/context/Gain.js";
import { Param } from "../../core/context/Param.js";
import { ToneAudioNode, ToneAudioNodeOptions } from "../../core/context/ToneAudioNode.js";
import { Decibels, Frequency } from "../../core/type/Units.js";
import { Signal } from "../../signal/Signal.js";
import { MultibandSplit } from "../channel/MultibandSplit.js";
interface EQ3Options extends ToneAudioNodeOptions {
    low: Decibels;
    mid: Decibels;
    high: Decibels;
    lowFrequency: Frequency;
    highFrequency: Frequency;
}
/**
 * EQ3 provides 3 equalizer bins: Low/Mid/High.
 * @category Component
 */
export declare class EQ3 extends ToneAudioNode<EQ3Options> {
    readonly name: string;
    /**
     * the input
     */
    readonly input: MultibandSplit;
    /**
     * the output
     */
    readonly output: Gain<"gain">;
    /**
     * Splits the input into three outputs
     */
    private _multibandSplit;
    /**
     * The gain for the lower signals
     */
    private _lowGain;
    /**
     * The gain for the mid signals
     */
    private _midGain;
    /**
     * The gain for the high signals
     */
    private _highGain;
    /**
     * The gain in decibels of the low part
     */
    readonly low: Param<"decibels">;
    /**
     * The gain in decibels of the mid part
     */
    readonly mid: Param<"decibels">;
    /**
     * The gain in decibels of the high part
     */
    readonly high: Param<"decibels">;
    /**
     * The Q value for all of the filters.
     */
    readonly Q: Signal<"positive">;
    /**
     * The low/mid crossover frequency.
     */
    readonly lowFrequency: Signal<"frequency">;
    /**
     * The mid/high crossover frequency.
     */
    readonly highFrequency: Signal<"frequency">;
    protected _internalChannels: ToneAudioNode[];
    constructor(lowLevel?: Decibels, midLevel?: Decibels, highLevel?: Decibels);
    constructor(options: Partial<EQ3Options>);
    static getDefaults(): EQ3Options;
    /**
     * Clean up.
     */
    dispose(): this;
}
export {};
