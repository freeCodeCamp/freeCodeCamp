import { StereoXFeedbackEffect, StereoXFeedbackEffectOptions } from "./StereoXFeedbackEffect.js";
import { NormalRange, Seconds, Time } from "../core/type/Units.js";
import { Signal } from "../signal/Signal.js";
export interface PingPongDelayOptions extends StereoXFeedbackEffectOptions {
    delayTime: Time;
    maxDelay: Seconds;
}
/**
 * PingPongDelay is a feedback delay effect where the echo is heard
 * first in one channel and next in the opposite channel. In a stereo
 * system these are the right and left channels.
 * PingPongDelay in more simplified terms is two Tone.FeedbackDelays
 * with independent delay values. Each delay is routed to one channel
 * (left or right), and the channel triggered second will always
 * trigger at the same interval after the first.
 * @example
 * const pingPong = new Tone.PingPongDelay("4n", 0.2).toDestination();
 * const drum = new Tone.MembraneSynth().connect(pingPong);
 * drum.triggerAttackRelease("C4", "32n");
 * @category Effect
 */
export declare class PingPongDelay extends StereoXFeedbackEffect<PingPongDelayOptions> {
    readonly name: string;
    /**
     * the delay node on the left side
     */
    private _leftDelay;
    /**
     * the delay node on the right side
     */
    private _rightDelay;
    /**
     * the predelay on the right side
     */
    private _rightPreDelay;
    /**
     * the delay time signal
     */
    readonly delayTime: Signal<"time">;
    /**
     * @param delayTime The delayTime between consecutive echos.
     * @param feedback The amount of the effected signal which is fed back through the delay.
     */
    constructor(delayTime?: Time, feedback?: NormalRange);
    constructor(options?: Partial<PingPongDelayOptions>);
    static getDefaults(): PingPongDelayOptions;
    dispose(): this;
}
