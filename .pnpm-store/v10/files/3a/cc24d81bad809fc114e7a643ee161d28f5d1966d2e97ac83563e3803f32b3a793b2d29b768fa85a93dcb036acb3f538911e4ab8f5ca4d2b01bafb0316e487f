import { ToneAudioNode } from "../../core/context/ToneAudioNode.js";
import { dbToGain } from "../../core/type/Conversions.js";
import { optionsFromArguments } from "../../core/util/Defaults.js";
import { MeterBase } from "./MeterBase.js";
import { assert } from "../../core/util/Debug.js";
/**
 * Get the current frequency data of the connected audio source using a fast Fourier transform.
 * Read more about FFT algorithms on [Wikipedia] (https://en.wikipedia.org/wiki/Fast_Fourier_transform).
 * @category Component
 */
export class FFT extends MeterBase {
    constructor() {
        const options = optionsFromArguments(FFT.getDefaults(), arguments, [
            "size",
        ]);
        super(options);
        this.name = "FFT";
        this.normalRange = options.normalRange;
        this._analyser.type = "fft";
        this.size = options.size;
    }
    static getDefaults() {
        return Object.assign(ToneAudioNode.getDefaults(), {
            normalRange: false,
            size: 1024,
            smoothing: 0.8,
        });
    }
    /**
     * Gets the current frequency data from the connected audio source.
     * Returns the frequency data of length {@link size} as a Float32Array of decibel values.
     */
    getValue() {
        const values = this._analyser.getValue();
        return values.map((v) => (this.normalRange ? dbToGain(v) : v));
    }
    /**
     * The size of analysis. This must be a power of two in the range 16 to 16384.
     * Determines the size of the array returned by {@link getValue} (i.e. the number of
     * frequency bins). Large FFT sizes may be costly to compute.
     */
    get size() {
        return this._analyser.size;
    }
    set size(size) {
        this._analyser.size = size;
    }
    /**
     * 0 represents no time averaging with the last analysis frame.
     */
    get smoothing() {
        return this._analyser.smoothing;
    }
    set smoothing(val) {
        this._analyser.smoothing = val;
    }
    /**
     * Returns the frequency value in hertz of each of the indices of the FFT's {@link getValue} response.
     * @example
     * const fft = new Tone.FFT(32);
     * console.log([0, 1, 2, 3, 4].map(index => fft.getFrequencyOfIndex(index)));
     */
    getFrequencyOfIndex(index) {
        assert(0 <= index && index < this.size, `index must be greater than or equal to 0 and less than ${this.size}`);
        return (index * this.context.sampleRate) / (this.size * 2);
    }
}
//# sourceMappingURL=FFT.js.map