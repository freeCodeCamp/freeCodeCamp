import { Param } from "../../core/context/Param.js";
import { InputNode, OutputNode, ToneAudioNode, ToneAudioNodeOptions } from "../../core/context/ToneAudioNode.js";
import { Frequency, NormalRange, Time } from "../../core/type/Units.js";
import { RecursivePartial } from "../../core/util/Interface.js";
interface LowpassCombFilterOptions extends ToneAudioNodeOptions {
    delayTime: Time;
    resonance: NormalRange;
    dampening: Frequency;
}
/**
 * A lowpass feedback comb filter. It is similar to
 * {@link FeedbackCombFilter}, but includes a lowpass filter.
 * @category Component
 */
export declare class LowpassCombFilter extends ToneAudioNode<LowpassCombFilterOptions> {
    readonly name = "LowpassCombFilter";
    /**
     * The delay node
     */
    private _combFilter;
    /**
     * The lowpass filter
     */
    private _lowpass;
    /**
     * The delayTime of the comb filter.
     */
    readonly delayTime: Param<"time">;
    /**
     * The amount of feedback of the delayed signal.
     */
    readonly resonance: Param<"normalRange">;
    readonly input: InputNode;
    readonly output: OutputNode;
    /**
     * @param delayTime The delay time of the comb filter
     * @param resonance The resonance (feedback) of the comb filter
     * @param dampening The cutoff of the lowpass filter dampens the signal as it is fedback.
     */
    constructor(delayTime?: Time, resonance?: NormalRange, dampening?: Frequency);
    constructor(options?: RecursivePartial<LowpassCombFilterOptions>);
    static getDefaults(): LowpassCombFilterOptions;
    /**
     * The dampening control of the feedback
     */
    get dampening(): Frequency;
    set dampening(fq: Frequency);
    dispose(): this;
}
export {};
