import { ToneAudioNode, ToneAudioNodeOptions } from "../../core/context/ToneAudioNode.js";
import { Decibels, Time } from "../../core/type/Units.js";
export interface GateOptions extends ToneAudioNodeOptions {
    threshold: Decibels;
    smoothing: Time;
}
/**
 * Gate only passes a signal through when the incoming
 * signal exceeds a specified threshold. It uses {@link Follower} to follow the ampltiude
 * of the incoming signal and compares it to the {@link threshold} value using {@link GreaterThan}.
 *
 * @example
 * const gate = new Tone.Gate(-30, 0.2).toDestination();
 * const mic = new Tone.UserMedia().connect(gate);
 * // the gate will only pass through the incoming
 * // signal when it's louder than -30db
 * @category Component
 */
export declare class Gate extends ToneAudioNode<GateOptions> {
    readonly name: string;
    readonly input: ToneAudioNode;
    readonly output: ToneAudioNode;
    /**
     * Follow the incoming signal
     */
    private _follower;
    /**
     * Test if it's greater than the threshold
     */
    private _gt;
    /**
     * Gate the incoming signal when it does not exceed the threshold
     */
    private _gate;
    /**
     * @param threshold The threshold above which the gate will open.
     * @param smoothing The follower's smoothing time
     */
    constructor(threshold?: Decibels, smoothing?: Time);
    constructor(options?: Partial<GateOptions>);
    static getDefaults(): GateOptions;
    /**
     * The threshold of the gate in decibels
     */
    get threshold(): Decibels;
    set threshold(thresh: Decibels);
    /**
     * The attack/decay speed of the gate.
     * @see {@link Follower.smoothing}
     */
    get smoothing(): Time;
    set smoothing(smoothingTime: Time);
    dispose(): this;
}
