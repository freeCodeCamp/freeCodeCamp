import { PowerOfTwo } from "../../core/type/Units.js";
import { MeterBase, MeterBaseOptions } from "./MeterBase.js";
export interface WaveformOptions extends MeterBaseOptions {
    /**
     * The size of the Waveform. Value must be a power of two in the range 16 to 16384.
     */
    size: PowerOfTwo;
}
/**
 * Get the current waveform data of the connected audio source.
 * @category Component
 */
export declare class Waveform extends MeterBase<WaveformOptions> {
    readonly name: string;
    /**
     * @param size The size of the Waveform. Value must be a power of two in the range 16 to 16384.
     */
    constructor(size?: PowerOfTwo);
    constructor(options?: Partial<WaveformOptions>);
    static getDefaults(): WaveformOptions;
    /**
     * Return the waveform for the current time as a Float32Array where each value in the array
     * represents a sample in the waveform.
     */
    getValue(): Float32Array;
    /**
     * The size of analysis. This must be a power of two in the range 16 to 16384.
     * Determines the size of the array returned by {@link getValue}.
     */
    get size(): PowerOfTwo;
    set size(size: PowerOfTwo);
}
