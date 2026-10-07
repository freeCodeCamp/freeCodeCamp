import { Gain } from "../../core/context/Gain.js";
import {
	connectSeries,
	ToneAudioNode,
} from "../../core/context/ToneAudioNode.js";
import { Frequency } from "../../core/type/Units.js";
import { optionsFromArguments } from "../../core/util/Defaults.js";
import { readOnly, writable } from "../../core/util/Interface.js";
import { isNumber } from "../../core/util/TypeCheck.js";
import { Signal } from "../../signal/Signal.js";
import { assert } from "../../core/util/Debug.js";
import { BiquadFilter, BiquadFilterOptions } from "./BiquadFilter.js";

export type FilterRollOff = -12 | -24 | -48 | -96;

export type FilterOptions = BiquadFilterOptions & {
	rolloff: FilterRollOff;
};

/**
 * Tone.Filter is a filter which allows for all of the same native methods
 * as the [BiquadFilterNode](http://webaudio.github.io/web-audio-api/#the-biquadfilternode-interface).
 * Tone.Filter has the added ability to set the filter rolloff at -12
 * (default), -24 and -48.
 * @example
 * const filter = new Tone.Filter(1500, "highpass").toDestination();
 * filter.frequency.rampTo(20000, 10);
 * const noise = new Tone.Noise().connect(filter).start();
 * @category Component
 */
export class Filter extends ToneAudioNode<FilterOptions> {
	readonly name: string = "Filter";

	readonly input = new Gain({ context: this.context });
	readonly output = new Gain({ context: this.context });
	private _filters: BiquadFilter[] = [];

	/**
	 * the rolloff value of the filter
	 */
	private _rolloff!: FilterRollOff;
	private _type: BiquadFilterType;

	/**
	 * The Q or Quality of the filter
	 */
	readonly Q: Signal<"positive">;

	/**
	 * The cutoff frequency of the filter.
	 */
	readonly frequency: Signal<"frequency">;

	/**
	 * The detune parameter
	 */
	readonly detune: Signal<"cents">;

	/**
	 * The gain of the filter, only used in certain filter types
	 */
	readonly gain: Signal<"decibels">;

	/**
	 * @param frequency The cutoff frequency of the filter.
	 * @param type The type of filter.
	 * @param rolloff The drop in decibels per octave after the cutoff frequency
	 */
	constructor(
		frequency?: Frequency,
		type?: BiquadFilterType,
		rolloff?: FilterRollOff
	);
	constructor(options?: Partial<FilterOptions>);
	constructor() {
		const options = optionsFromArguments(Filter.getDefaults(), arguments, [
			"frequency",
			"type",
			"rolloff",
		]);
		super(options);

		this._filters = [];

		this.Q = new Signal({
			context: this.context,
			units: "positive",
			value: options.Q,
		});
		this.frequency = new Signal({
			context: this.context,
			units: "frequency",
			value: options.frequency,
		});
		this.detune = new Signal({
			context: this.context,
			units: "cents",
			value: options.detune,
		});
		this.gain = new Signal({
			context: this.context,
			units: "decibels",
			convert: false,
			value: options.gain,
		});
		this._type = options.type;
		this.rolloff = options.rolloff;
		readOnly(this, ["detune", "frequency", "gain", "Q"]);
	}

	static getDefaults(): FilterOptions {
		return Object.assign(ToneAudioNode.getDefaults(), {
			Q: 1,
			detune: 0,
			frequency: 350,
			gain: 0,
			rolloff: -12 as FilterRollOff,
			type: "lowpass" as BiquadFilterType,
		});
	}

	/**
	 * The type of the filter. Types: "lowpass", "highpass",
	 * "bandpass", "lowshelf", "highshelf", "notch", "allpass", or "peaking".
	 */
	get type(): BiquadFilterType {
		return this._type;
	}
	set type(type: BiquadFilterType) {
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
		this._type = type;
		this._filters.forEach((filter) => (filter.type = type));
	}

	/**
	 * The rolloff of the filter which is the drop in db
	 * per octave. Implemented internally by cascading filters.
	 * Only accepts the values -12, -24, -48 and -96.
	 */
	get rolloff(): FilterRollOff {
		return this._rolloff;
	}
	set rolloff(rolloff) {
		const rolloffNum = isNumber(rolloff)
			? rolloff
			: (parseInt(rolloff, 10) as FilterRollOff);
		const possibilities = [-12, -24, -48, -96];
		let cascadingCount = possibilities.indexOf(rolloffNum);
		// check the rolloff is valid
		assert(
			cascadingCount !== -1,
			`rolloff can only be ${possibilities.join(", ")}`
		);
		cascadingCount += 1;

		this._rolloff = rolloffNum;
		this.input.disconnect();
		this._filters.forEach((filter) => filter.disconnect());

		this._filters = new Array(cascadingCount);
		for (let count = 0; count < cascadingCount; count++) {
			const filter = new BiquadFilter({
				context: this.context,
			});
			filter.type = this._type;
			this.frequency.connect(filter.frequency);
			this.detune.connect(filter.detune);
			this.Q.connect(filter.Q);
			this.gain.connect(filter.gain);
			this._filters[count] = filter;
		}
		this._internalChannels = this._filters;
		connectSeries(this.input, ...this._internalChannels, this.output);
	}

	/**
	 * Get the frequency response curve. This curve represents how the filter
	 * responses to frequencies between 20hz-20khz.
	 * @param  len The number of values to return
	 * @return The frequency response curve between 20-20kHz
	 */
	getFrequencyResponse(len = 128): Float32Array {
		const filterClone = new BiquadFilter({
			context: this.context,
			frequency: this.frequency.value,
			gain: this.gain.value,
			Q: this.Q.value,
			type: this._type,
			detune: this.detune.value,
		});
		// start with all 1s
		const totalResponse = new Float32Array(len).map(() => 1);
		this._filters.forEach(() => {
			const response = filterClone.getFrequencyResponse(len);
			response.forEach((val, i) => (totalResponse[i] *= val));
		});
		filterClone.dispose();
		return totalResponse;
	}

	/**
	 * Clean up.
	 */
	dispose(): this {
		super.dispose();
		this._filters.forEach((filter) => {
			filter.dispose();
		});
		writable(this, ["detune", "frequency", "gain", "Q"]);
		this.frequency.dispose();
		this.Q.dispose();
		this.detune.dispose();
		this.gain.dispose();
		return this;
	}
}
