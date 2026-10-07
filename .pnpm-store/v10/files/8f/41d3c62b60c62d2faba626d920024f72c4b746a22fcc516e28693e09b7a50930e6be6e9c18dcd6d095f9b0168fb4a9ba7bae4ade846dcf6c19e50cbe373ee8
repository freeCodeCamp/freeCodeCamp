import { Param } from "../core/context/Param.js";
import { NormalRange, Time } from "../core/type/Units.js";
import { FeedbackEffect, FeedbackEffectOptions } from "./FeedbackEffect.js";
export interface FeedbackDelayOptions extends FeedbackEffectOptions {
    delayTime: Time;
    maxDelay: Time;
}
/**
 * FeedbackDelay is a DelayNode in which part of output signal is fed back into the delay.
 *
 * @param delayTime The delay applied to the incoming signal.
 * @param feedback The amount of the effected signal which is fed back through the delay.
 * @example
 * const feedbackDelay = new Tone.FeedbackDelay("8n", 0.5).toDestination();
 * const tom = new Tone.MembraneSynth({
 * 	octaves: 4,
 * 	pitchDecay: 0.1
 * }).connect(feedbackDelay);
 * tom.triggerAttackRelease("A2", "32n");
 * @category Effect
 */
export declare class FeedbackDelay extends FeedbackEffect<FeedbackDelayOptions> {
    readonly name: string;
    /**
     * the delay node
     */
    private _delayNode;
    /**
     * The delayTime of the FeedbackDelay.
     */
    readonly delayTime: Param<"time">;
    constructor(delayTime?: Time, feedback?: NormalRange);
    constructor(options?: Partial<FeedbackDelayOptions>);
    static getDefaults(): FeedbackDelayOptions;
    dispose(): this;
}
