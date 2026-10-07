import { Interval, Seconds, Time } from "../core/type/Units.js";
import { FeedbackEffect, FeedbackEffectOptions } from "./FeedbackEffect.js";
import { Param } from "../core/context/Param.js";
export interface PitchShiftOptions extends FeedbackEffectOptions {
    pitch: Interval;
    windowSize: Seconds;
    delayTime: Time;
}
/**
 * PitchShift does near-realtime pitch shifting to the incoming signal.
 * The effect is achieved by speeding up or slowing down the delayTime
 * of a DelayNode using a sawtooth wave.
 * Algorithm found in [this pdf](http://dsp-book.narod.ru/soundproc.pdf).
 * Additional reference by [Miller Pucket](http://msp.ucsd.edu/techniques/v0.11/book-html/node115.html).
 * @category Effect
 */
export declare class PitchShift extends FeedbackEffect<PitchShiftOptions> {
    readonly name: string;
    /**
     * The pitch signal
     */
    private _frequency;
    /**
     * Uses two DelayNodes to cover up the jump in the sawtooth wave.
     */
    private _delayA;
    /**
     * The first LFO.
     */
    private _lfoA;
    /**
     * The second DelayNode
     */
    private _delayB;
    /**
     * The second LFO.
     */
    private _lfoB;
    /**
     * Cross fade quickly between the two delay lines to cover up the jump in the sawtooth wave
     */
    private _crossFade;
    /**
     * LFO which alternates between the two delay lines to cover up the disparity in the
     * sawtooth wave.
     */
    private _crossFadeLFO;
    /**
     * The delay node
     */
    private _feedbackDelay;
    /**
     * The amount of delay on the input signal
     */
    readonly delayTime: Param<"time">;
    /**
     * Hold the current pitch
     */
    private _pitch;
    /**
     * Hold the current windowSize
     */
    private _windowSize;
    /**
     * @param pitch The interval to transpose the incoming signal by.
     */
    constructor(pitch?: Interval);
    constructor(options?: Partial<PitchShiftOptions>);
    static getDefaults(): PitchShiftOptions;
    /**
     * Repitch the incoming signal by some interval (measured in semi-tones).
     * @example
     * const pitchShift = new Tone.PitchShift().toDestination();
     * const osc = new Tone.Oscillator().connect(pitchShift).start().toDestination();
     * pitchShift.pitch = -12; // down one octave
     * pitchShift.pitch = 7; // up a fifth
     */
    get pitch(): number;
    set pitch(interval: number);
    /**
     * The window size corresponds roughly to the sample length in a looping sampler.
     * Smaller values are desirable for a less noticeable delay time of the pitch shifted
     * signal, but larger values will result in smoother pitch shifting for larger intervals.
     * A nominal range of 0.03 to 0.1 is recommended.
     */
    get windowSize(): Seconds;
    set windowSize(size: Seconds);
    dispose(): this;
}
