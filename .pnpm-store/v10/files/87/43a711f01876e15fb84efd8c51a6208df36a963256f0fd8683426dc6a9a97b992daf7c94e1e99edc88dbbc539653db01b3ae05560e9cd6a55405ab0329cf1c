import { ToneAudioNode } from "../../core/context/ToneAudioNode.js";
import { dbToGain } from "../../core/type/Conversions.js";
import { Hertz, NormalRange, PowerOfTwo } from "../../core/type/Units.js";
import { optionsFromArguments } from "../../core/util/Defaults.js";
import { MeterBase, MeterBaseOptions } from "./MeterBase.js";
import { assert } from "../../core/util/Debug.js";

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
export class FFT extends MeterBase<FFTOptions> {
	readonly name: string = "FFT";

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
	constructor() {
		const options = optionsFromArguments(FFT.getDefaults(), arguments, [
			"size",
		]);
		super(options);

		this.normalRange = options.normalRange;
		this._analyser.type = "fft";
		this.size = options.size;
	}

	static getDefaults(): FFTOptions {
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
	getValue(): Float32Array {
		const values = this._analyser.getValue() as Float32Array;
		return values.map((v) => (this.normalRange ? dbToGain(v) : v));
	}

	/**
	 * The size of analysis. This must be a power of two in the range 16 to 16384.
	 * Determines the size of the array returned by {@link getValue} (i.e. the number of
	 * frequency bins). Large FFT sizes may be costly to compute.
	 */
	get size(): PowerOfTwo {
		return this._analyser.size;
	}
	set size(size) {
		this._analyser.size = size;
	}

	/**
	 * 0 represents no time averaging with the last analysis frame.
	 */
	get smoothing(): NormalRange {
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
	getFrequencyOfIndex(index: number): Hertz {
		assert(
			0 <= index && index < this.size,
			`index must be greater than or equal to 0 and less than ${this.size}`
		);
		return (index * this.context.sampleRate) / (this.size * 2);
	}
}
