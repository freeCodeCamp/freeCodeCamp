import { Gain } from "../../core/context/Gain.js";
import { ToneAudioNode, ToneAudioNodeOptions } from "../../core/context/ToneAudioNode.js";
import { Frequency, Positive } from "../../core/type/Units.js";
import { Signal } from "../../signal/Signal.js";
import { Filter } from "../filter/Filter.js";
interface MultibandSplitOptions extends ToneAudioNodeOptions {
    Q: Positive;
    lowFrequency: Frequency;
    highFrequency: Frequency;
}
/**
 * Split the incoming signal into three bands (low, mid, high)
 * with two crossover frequency controls.
 * ```
 *            +----------------------+
 *          +-> input < lowFrequency +------------------> low
 *          | +----------------------+
 *          |
 *          | +--------------------------------------+
 * input ---+-> lowFrequency < input < highFrequency +--> mid
 *          | +--------------------------------------+
 *          |
 *          | +-----------------------+
 *          +-> highFrequency < input +-----------------> high
 *            +-----------------------+
 * ```
 * @category Component
 */
export declare class MultibandSplit extends ToneAudioNode<MultibandSplitOptions> {
    readonly name: string;
    /**
     * the input
     */
    readonly input: Gain<"gain">;
    /**
     * no output node, use either low, mid or high outputs
     */
    readonly output: undefined;
    /**
     * The low band.
     */
    readonly low: Filter;
    /**
     * the lower filter of the mid band
     */
    private _lowMidFilter;
    /**
     * The mid band output.
     */
    readonly mid: Filter;
    /**
     * The high band output.
     */
    readonly high: Filter;
    /**
     * The low/mid crossover frequency.
     */
    readonly lowFrequency: Signal<"frequency">;
    /**
     * The mid/high crossover frequency.
     */
    readonly highFrequency: Signal<"frequency">;
    protected _internalChannels: Filter[];
    /**
     * The Q or Quality of the filter
     */
    readonly Q: Signal<"positive">;
    /**
     * @param lowFrequency the low/mid crossover frequency
     * @param highFrequency the mid/high crossover frequency
     */
    constructor(lowFrequency?: Frequency, highFrequency?: Frequency);
    constructor(options?: Partial<MultibandSplitOptions>);
    static getDefaults(): MultibandSplitOptions;
    /**
     * Clean up.
     */
    dispose(): this;
}
export {};
