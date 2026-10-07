import { MeterBase, MeterBaseOptions } from "./MeterBase.js";
export type DCMeterOptions = MeterBaseOptions;
/**
 * DCMeter gets the raw value of the input signal at the current time.
 * @see {@link Meter}.
 *
 * @example
 * const meter = new Tone.DCMeter();
 * const mic = new Tone.UserMedia();
 * mic.open();
 * // connect mic to the meter
 * mic.connect(meter);
 * // the current level of the mic
 * const level = meter.getValue();
 * @category Component
 */
export declare class DCMeter extends MeterBase<DCMeterOptions> {
    readonly name: string;
    constructor(options?: Partial<DCMeterOptions>);
    /**
     * Get the signal value of the incoming signal
     */
    getValue(): number;
}
