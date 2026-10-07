import { Gain } from "../core/context/Gain.js";
import { ToneAudioNode, ToneAudioNodeOptions } from "../core/context/ToneAudioNode.js";
import { GainFactor, Seconds, Time } from "../core/type/Units.js";
import { BasicPlaybackState } from "../core/util/StateTimeline.js";
export type OneShotSourceCurve = "linear" | "exponential";
type onEndedCallback = (source: OneShotSource<any>) => void;
export interface OneShotSourceOptions extends ToneAudioNodeOptions {
    onended: onEndedCallback;
    fadeIn: Time;
    fadeOut: Time;
    curve: OneShotSourceCurve;
}
/**
 * Base class for fire-and-forget nodes
 */
export declare abstract class OneShotSource<Options extends ToneAudioNodeOptions> extends ToneAudioNode<Options> {
    /**
     * The callback to invoke after the
     * source is done playing.
     */
    onended: onEndedCallback;
    /**
     * Sources do not have input nodes
     */
    input: undefined;
    /**
     * The start time
     */
    protected _startTime: number;
    /**
     * The stop time
     */
    protected _stopTime: number;
    /**
     * The id of the timeout
     */
    private _timeout;
    /**
     * The public output node
     */
    output: Gain;
    /**
     * The output gain node.
     */
    protected _gainNode: Gain<"gain">;
    /**
     * The fadeIn time of the amplitude envelope.
     */
    protected _fadeIn: Time;
    /**
     * The fadeOut time of the amplitude envelope.
     */
    protected _fadeOut: Time;
    /**
     * The curve applied to the fades, either "linear" or "exponential"
     */
    protected _curve: OneShotSourceCurve;
    constructor(options: OneShotSourceOptions);
    static getDefaults(): OneShotSourceOptions;
    /**
     * Stop the source node
     */
    protected abstract _stopSource(time: Seconds): void;
    /**
     * Start the source node at the given time
     * @param  time When to start the node
     */
    protected abstract start(time?: Time): this;
    /**
     * Start the source at the given time
     * @param  time When to start the source
     */
    protected _startGain(time: Seconds, gain?: GainFactor): this;
    /**
     * Stop the source node at the given time.
     * @param time When to stop the source
     */
    stop(time?: Time): this;
    /**
     * Stop the source at the given time
     * @param  time When to stop the source
     */
    protected _stopGain(time: Seconds): this;
    /**
     * Invoke the onended callback
     */
    protected _onended(): void;
    /**
     * Get the playback state at the given time
     */
    getStateAtTime: (time: Time) => BasicPlaybackState;
    /**
     * Get the playback state at the current time
     */
    get state(): BasicPlaybackState;
    /**
     * Cancel a scheduled stop event
     */
    cancelStop(): this;
    dispose(): this;
}
export {};
