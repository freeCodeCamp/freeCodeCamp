import { Time } from "../../core/type/Units.js";
import { InputNode, OutputNode, ToneAudioNode, ToneAudioNodeOptions } from "../../core/context/ToneAudioNode.js";
export interface FollowerOptions extends ToneAudioNodeOptions {
    smoothing: Time;
}
/**
 * Follower is a simple envelope follower.
 * It's implemented by applying a lowpass filter to the absolute value of the incoming signal.
 * ```
 *          +-----+    +---------------+
 * Input +--> Abs +----> OnePoleFilter +--> Output
 *          +-----+    +---------------+
 * ```
 * @category Component
 */
export declare class Follower extends ToneAudioNode<FollowerOptions> {
    readonly name: string;
    readonly input: InputNode;
    readonly output: OutputNode;
    /**
     * Private reference to the smoothing parameter
     */
    private _smoothing;
    /**
     * The lowpass filter
     */
    private _lowpass;
    /**
     * The absolute value
     */
    private _abs;
    /**
     * @param smoothing The rate of change of the follower.
     */
    constructor(smoothing?: Time);
    constructor(options?: Partial<FollowerOptions>);
    static getDefaults(): FollowerOptions;
    /**
     * The amount of time it takes a value change to arrive at the updated value.
     */
    get smoothing(): Time;
    set smoothing(smoothing: Time);
    dispose(): this;
}
