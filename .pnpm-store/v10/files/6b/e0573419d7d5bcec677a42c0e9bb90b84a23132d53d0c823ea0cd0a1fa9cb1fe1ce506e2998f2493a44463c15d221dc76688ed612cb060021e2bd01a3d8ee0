import { Gain } from "../../core/context/Gain.js";
import { ToneAudioNode, ToneAudioNodeOptions } from "../../core/context/ToneAudioNode.js";
/**
 * PhaseShiftAllpass is an very efficient implementation of a Hilbert Transform
 * using two Allpass filter banks whose outputs have a phase difference of 90°.
 * Here the `offset90` phase is offset by +90° in relation to `output`.
 * Coefficients and structure was developed by Olli Niemitalo.
 * For more details see: http://yehar.com/blog/?p=368
 * @category Component
 */
export declare class PhaseShiftAllpass extends ToneAudioNode<ToneAudioNodeOptions> {
    readonly name: string;
    readonly input: Gain<"gain">;
    /**
     * The Allpass filter in the first bank
     */
    private _bank0;
    /**
     * The Allpass filter in the seconds bank
     */
    private _bank1;
    /**
     * A IIR filter implementing a delay by one sample used by the first bank
     */
    private _oneSampleDelay;
    /**
     * The phase shifted output
     */
    readonly output: Gain<"gain">;
    /**
     * The PhaseShifted allpass output
     */
    readonly offset90: Gain<"gain">;
    constructor(options?: Partial<ToneAudioNodeOptions>);
    /**
     * Create all of the IIR filters from an array of values using the coefficient calculation.
     */
    private _createAllPassFilterBank;
    dispose(): this;
}
