import { Hertz, NormalRange, PowerOfTwo } from "../../core/type/Units.js";
import { MeterBase, MeterBaseOptions } from "./MeterBase.js";
export interface FFTOptions extends MeterBaseOptions {
    size: PowerOfTwo;
    smoothing: NormalRange;
    normalRange: boolean;
}
/**
 * Get the current frequency data of the connected audio source using a fast Fourier transform.
 * Read more about FFT algorithms on [Wikipedia] (https://en.wikipedia.org/wiki/Fast_Fourier_transform).
 * @category Component
 */
export declare class FFT extends MeterBase<FFTOptions> {
    readonly name: string;
    /**
     * If the output should be in decibels or normal range between 0-1. If `normalRange` is false,
     * the output range will be the measured decibel value, otherwise the decibel value will be converted to
     * the range of 0-1
     */
    normalRange: boolean;
    /**
     * @param size The size of the FFT. Value must be a power of two in the range 16 to 16384.
     */
    constructor(size?: PowerOfTwo);
    constructor(options?: Partial<FFTOptions>);
    static getDefaults(): FFTOptions;
    /**
     * Gets the current frequency data from the connected audio source.
     * Returns the frequency data of length {@link size} as a Float32Array of decibel values.
     */
    getValue(): Float32Array;
    /**
     * The size of analysis. This must be a power of two in the range 16 to 16384.
     * Determines the size of the array returned by {@link getValue} (i.e. the number of
     * frequency bins). Large FFT sizes may be costly to compute.
     */
    get size(): PowerOfTwo;
    set size(size: PowerOfTwo);
    /**
     * 0 represents no time averaging with the last analysis frame.
     */
    get smoothing(): NormalRange;
    set smoothing(val: NormalRange);
    /**
     * Returns the frequency value in hertz of each of the indices of the FFT's {@link getValue} response.
     * @example
     * const fft = new Tone.FFT(32);
     * console.log([0, 1, 2, 3, 4].map(index => fft.getFrequencyOfIndex(index)));
     */
    getFrequencyOfIndex(index: number): Hertz;
}
