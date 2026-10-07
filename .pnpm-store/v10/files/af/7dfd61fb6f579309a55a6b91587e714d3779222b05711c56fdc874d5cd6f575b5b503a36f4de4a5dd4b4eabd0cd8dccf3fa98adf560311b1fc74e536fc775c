import { Gain } from "../../core/context/Gain.js";
import { Param } from "../../core/context/Param.js";
import { ToneAudioNodeOptions } from "../../core/context/ToneAudioNode.js";
import { NormalRange, Time } from "../../core/type/Units.js";
import { RecursivePartial } from "../../core/util/Interface.js";
import { ToneAudioWorklet } from "../../core/worklet/ToneAudioWorklet.js";
export interface FeedbackCombFilterOptions extends ToneAudioNodeOptions {
    delayTime: Time;
    resonance: NormalRange;
}
/**
 * Comb filters are basic building blocks for physical modeling. Read more
 * about comb filters on [CCRMA's website](https://ccrma.stanford.edu/~jos/pasp/Feedback_Comb_Filters.html).
 *
 * This comb filter is implemented with the AudioWorkletNode which allows it to have feedback delays less than the
 * Web Audio processing block of 128 samples. There is a polyfill for browsers that don't yet support the
 * AudioWorkletNode, but it will add some latency and have slower performance than the AudioWorkletNode.
 * @category Component
 */
export declare class FeedbackCombFilter extends ToneAudioWorklet<FeedbackCombFilterOptions> {
    readonly name = "FeedbackCombFilter";
    /**
     * The amount of delay of the comb filter.
     */
    readonly delayTime: Param<"time">;
    /**
     * The amount of feedback of the delayed signal.
     */
    readonly resonance: Param<"normalRange">;
    readonly input: Gain;
    readonly output: Gain;
    /**
     * @param delayTime The delay time of the filter.
     * @param resonance The amount of feedback the filter has.
     */
    constructor(delayTime?: Time, resonance?: NormalRange);
    constructor(options?: RecursivePartial<FeedbackCombFilterOptions>);
    protected _audioWorkletName(): string;
    /**
     * The default parameters
     */
    static getDefaults(): FeedbackCombFilterOptions;
    onReady(node: AudioWorkletNode): void;
    dispose(): this;
}
