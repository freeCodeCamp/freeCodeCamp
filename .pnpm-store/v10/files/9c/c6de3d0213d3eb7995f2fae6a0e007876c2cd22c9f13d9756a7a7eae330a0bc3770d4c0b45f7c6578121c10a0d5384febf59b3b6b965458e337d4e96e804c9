import { NormalRange } from "../../core/type/Units.js";
import { MeterBase, MeterBaseOptions } from "./MeterBase.js";
export interface MeterOptions extends MeterBaseOptions {
    smoothing: NormalRange;
    normalRange: boolean;
    channelCount: number;
}
/**
 * Meter gets the [RMS](https://en.wikipedia.org/wiki/Root_mean_square)
 * of an input signal. It can also get the raw value of the input signal.
 * Setting `normalRange` to `true` will covert the output to a range of
 * 0-1. See an example using a graphical display
 * [here](https://tonejs.github.io/examples/meter).
 * @see {@link DCMeter}.
 *
 * @example
 * const meter = new Tone.Meter();
 * const mic = new Tone.UserMedia();
 * mic.open();
 * // connect mic to the meter
 * mic.connect(meter);
 * // the current level of the mic
 * setInterval(() => console.log(meter.getValue()), 100);
 * @category Component
 */
export declare class Meter extends MeterBase<MeterOptions> {
    readonly name: string;
    /**
     * If the output should be in decibels or normal range between 0-1. If `normalRange` is false,
     * the output range will be the measured decibel value, otherwise the decibel value will be converted to
     * the range of 0-1
     */
    normalRange: boolean;
    /**
     * A value from between 0 and 1 where 0 represents no time averaging with the last analysis frame.
     */
    smoothing: number;
    /**
     * The previous frame's value for each channel.
     */
    private _rms;
    /**
     * @param smoothing The amount of smoothing applied between frames.
     */
    constructor(smoothing?: NormalRange);
    constructor(options?: Partial<MeterOptions>);
    static getDefaults(): MeterOptions;
    /**
     * Use {@link getValue} instead. For the previous getValue behavior, use DCMeter.
     * @deprecated
     */
    getLevel(): number | number[];
    /**
     * Get the current value of the incoming signal.
     * Output is in decibels when {@link normalRange} is `false`.
     * If {@link channels} = 1, then the output is a single number
     * representing the value of the input signal. When {@link channels} > 1,
     * then each channel is returned as a value in a number array.
     */
    getValue(): number | number[];
    /**
     * The number of channels of analysis.
     */
    get channels(): number;
    dispose(): this;
}
