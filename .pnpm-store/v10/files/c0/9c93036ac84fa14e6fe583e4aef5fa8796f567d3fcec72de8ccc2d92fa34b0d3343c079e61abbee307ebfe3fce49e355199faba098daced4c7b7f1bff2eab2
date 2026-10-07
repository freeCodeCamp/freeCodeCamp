import { NormalRange } from "../core/type/Units.js";
import { StereoEffect, StereoEffectOptions } from "./StereoEffect.js";
import { Signal } from "../signal/Signal.js";
export interface JCReverbOptions extends StereoEffectOptions {
    roomSize: NormalRange;
}
/**
 * JCReverb is a simple [Schroeder Reverberator](https://ccrma.stanford.edu/~jos/pasp/Schroeder_Reverberators.html)
 * tuned by John Chowning in 1970.
 * It is made up of three allpass filters and four {@link FeedbackCombFilter}.
 * JCReverb is now implemented with an AudioWorkletNode which may result on performance degradation on some platforms. Consider using {@link Reverb}.
 * @example
 * const reverb = new Tone.JCReverb(0.4).toDestination();
 * const delay = new Tone.FeedbackDelay(0.5);
 * // connecting the synth to reverb through delay
 * const synth = new Tone.DuoSynth().chain(delay, reverb);
 * synth.triggerAttackRelease("A4", "8n");
 *
 * @category Effect
 */
export declare class JCReverb extends StereoEffect<JCReverbOptions> {
    readonly name: string;
    /**
     * Room size control values.
     */
    readonly roomSize: Signal<"normalRange">;
    /**
     * Scale the room size
     */
    private _scaleRoomSize;
    /**
     * a series of allpass filters
     */
    private _allpassFilters;
    /**
     * parallel feedback comb filters
     */
    private _feedbackCombFilters;
    /**
     * @param roomSize Correlated to the decay time.
     */
    constructor(roomSize?: NormalRange);
    constructor(options?: Partial<JCReverbOptions>);
    static getDefaults(): JCReverbOptions;
    dispose(): this;
}
