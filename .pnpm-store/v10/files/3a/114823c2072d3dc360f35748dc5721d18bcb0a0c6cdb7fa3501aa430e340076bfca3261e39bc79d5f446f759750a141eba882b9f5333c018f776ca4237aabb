import {
	ToneAudioNode,
	ToneAudioNodeOptions,
} from "../../core/context/ToneAudioNode.js";
import { Cents, Frequency, GainFactor } from "../../core/type/Units.js";
import { optionsFromArguments } from "../../core/util/Defaults.js";
import { Param } from "../../core/context/Param.js";
import { assert } from "../../core/util/Debug.js";

export interface BiquadFilterOptions extends ToneAudioNodeOptions {
	frequency: Frequency;
	detune: Cents;
	Q: number;
	type: BiquadFilterType;
	gain: GainFactor;
}

/**
 * Thin wrapper around the native Web Audio [BiquadFilterNode](https://webaudio.github.io/web-audio-api/#biquadfilternode).
 * BiquadFilter is similar to {@link Filter} but doesn't have the option to set the "rolloff" value.
 * @category Component
 */
export class BiquadFilter extends ToneAudioNode<BiquadFilterOptions> {
	readonly name: string = "BiquadFilter";

	readonly input: BiquadFilterNode;
	readonly output: BiquadFilterNode;

	/**
	 * The frequency of the filter
	 */
	readonly frequency: Param<"frequency">;

	/**
	 * A detune value, in cents, for the frequency.
	 */
	readonly detune: Param<"cents">;

	/**
	 * The Q factor of the filter.
	 * For lowpass and highpass filters the Q value is interpreted to be in dB.
	 * For these filters the nominal range is [−𝑄𝑙𝑖𝑚,𝑄𝑙𝑖𝑚] where 𝑄𝑙𝑖𝑚 is the largest value for which 10𝑄/20 does not overflow. This is approximately 770.63678.
	 * For the bandpass, notch, allpass, and peaking filters, this value is a linear value.
	 * The value is related to the bandwidth of the filter and hence should be a positive value. The nominal range is
	 * [0,3.4028235𝑒38], the upper limit being the most-positive-single-float.
	 * This is not used for the lowshelf and highshelf filters.
	 */
	readonly Q: Param<"number">;

	/**
	 * The gain of the filter. Its value is in dB units. The gain is only used for lowshelf, highshelf, and peaking filters.
	 */
	readonly gain: Param<"decibels">;

	private readonly _filter: BiquadFilterNode;

	/**
	 * @param frequency The cutoff frequency of the filter.
	 * @param type The type of filter.
	 */
	constructor(frequency?: Frequency, type?: BiquadFilterType);
	constructor(options?: Partial<BiquadFilterOptions>);
	constructor() {
		const options = optionsFromArguments(
			BiquadFilter.getDefaults(),
			arguments,
			["frequency", "type"]
		);
		super(options);

		this._filter = this.context.createBiquadFilter();
		this.input = this.output = this._filter;

		this.Q = new Param({
			context: this.context,
			units: "number",
			value: options.Q,
			param: this._filter.Q,
		});

		this.frequency = new Param({
			context: this.context,
			units: "frequency",
			value: options.frequency,
			param: this._filter.frequency,
		});

		this.detune = new Param({
			context: this.context,
			units: "cents",
			value: options.detune,
			param: this._filter.detune,
		});

		this.gain = new Param({
			context: this.context,
			units: "decibels",
			convert: false,
			value: options.gain,
			param: this._filter.gain,
		});

		this.type = options.type;
	}

	static getDefaults(): BiquadFilterOptions {
		return Object.assign(ToneAudioNode.getDefaults(), {
			Q: 1,
			type: "lowpass" as const,
			frequency: 350,
			detune: 0,
			gain: 0,
		});
	}

	/**
	 * The type of this BiquadFilterNode. For a complete list of types and their attributes, see the
	 * [Web Audio API](https://webaudio.github.io/web-audio-api/#dom-biquadfiltertype-lowpass)
	 */
	get type(): BiquadFilterType {
		return this._filter.type;
	}
	set type(type) {
		const types: BiquadFilterType[] = [
			"lowpass",
			"highpass",
			"bandpass",
			"lowshelf",
			"highshelf",
			"notch",
			"allpass",
			"peaking",
		];
		assert(types.indexOf(type) !== -1, `Invalid filter type: ${type}`);
		this._filter.type = type;
	}

	/**
	 * Get the frequency response curve. This curve represents how the filter
	 * responses to frequencies between 20hz-20khz.
	 * @param  len The number of values to return
	 * @return The frequency response curve between 20-20kHz
	 */
	getFrequencyResponse(len = 128): Float32Array {
		// start with all 1s
		const freqValues = new Float32Array(len);
		for (let i = 0; i < len; i++) {
			const norm = Math.pow(i / len, 2);
			const freq = norm * (20000 - 20) + 20;
			freqValues[i] = freq;
		}
		const magValues = new Float32Array(len);
		const phaseValues = new Float32Array(len);
		// clone the filter to remove any connections which may be changing the value
		const filterClone = this.context.createBiquadFilter();
		filterClone.type = this.type;
		filterClone.Q.value = this.Q.value;
		filterClone.frequency.value = this.frequency.value as number;
		filterClone.gain.value = this.gain.value as number;
		filterClone.getFrequencyResponse(freqValues, magValues, phaseValues);
		return magValues;
	}

	dispose(): this {
		super.dispose();
		this._filter.disconnect();
		this.Q.dispose();
		this.frequency.dispose();
		this.gain.dispose();
		this.detune.dispose();
		return this;
	}
}
