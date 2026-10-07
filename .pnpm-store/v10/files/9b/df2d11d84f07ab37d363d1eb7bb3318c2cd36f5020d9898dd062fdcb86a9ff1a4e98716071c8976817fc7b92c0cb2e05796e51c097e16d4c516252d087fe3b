import {
	ToneAudioNode,
	ToneAudioNodeOptions,
} from "../../core/context/ToneAudioNode.js";
import { Frequency } from "../../core/type/Units.js";
import { optionsFromArguments } from "../../core/util/Defaults.js";
import { Gain } from "../../core/context/Gain.js";

export type OnePoleFilterType = "highpass" | "lowpass";

export interface OnePoleFilterOptions extends ToneAudioNodeOptions {
	frequency: Frequency;
	type: OnePoleFilterType;
}

/**
 * A one pole filter with 6db-per-octave rolloff. Either "highpass" or "lowpass".
 * Note that changing the type or frequency may result in a discontinuity which
 * can sound like a click or pop.
 * References:
 * * http://www.earlevel.com/main/2012/12/15/a-one-pole-filter/
 * * http://www.dspguide.com/ch19/2.htm
 * * https://github.com/vitaliy-bobrov/js-rocks/blob/master/src/app/audio/effects/one-pole-filters.ts
 * @category Component
 */
export class OnePoleFilter extends ToneAudioNode<OnePoleFilterOptions> {
	readonly name: string = "OnePoleFilter";

	/**
	 * Hold the current frequency
	 */
	private _frequency: Frequency;

	/**
	 * the current one pole type
	 */
	private _type: OnePoleFilterType;

	/**
	 * the current one pole filter
	 */
	private _filter!: IIRFilterNode;

	readonly input: Gain;
	readonly output: Gain;

	/**
	 * @param frequency The frequency
	 * @param type The  filter type, either "lowpass" or "highpass"
	 */
	constructor(frequency?: Frequency, type?: OnePoleFilterType);
	constructor(options?: Partial<OnePoleFilterOptions>);
	constructor() {
		const options = optionsFromArguments(
			OnePoleFilter.getDefaults(),
			arguments,
			["frequency", "type"]
		);
		super(options);

		this._frequency = options.frequency;
		this._type = options.type;
		this.input = new Gain({ context: this.context });
		this.output = new Gain({ context: this.context });
		this._createFilter();
	}

	static getDefaults(): OnePoleFilterOptions {
		return Object.assign(ToneAudioNode.getDefaults(), {
			frequency: 880,
			type: "lowpass" as OnePoleFilterType,
		});
	}

	/**
	 * Create a filter and dispose the old one
	 */
	private _createFilter() {
		const oldFilter = this._filter;
		const freq = this.toFrequency(this._frequency);
		const t = 1 / (2 * Math.PI * freq);
		if (this._type === "lowpass") {
			const a0 = 1 / (t * this.context.sampleRate);
			const b1 = a0 - 1;
			this._filter = this.context.createIIRFilter([a0, 0], [1, b1]);
		} else {
			const b1 = 1 / (t * this.context.sampleRate) - 1;
			this._filter = this.context.createIIRFilter([1, -1], [1, b1]);
		}

		this.input.chain(this._filter, this.output);
		if (oldFilter) {
			// dispose it on the next block
			this.context.setTimeout(() => {
				if (!this.disposed) {
					this.input.disconnect(oldFilter);
					oldFilter.disconnect();
				}
			}, this.blockTime);
		}
	}

	/**
	 * The frequency value.
	 */
	get frequency(): Frequency {
		return this._frequency;
	}
	set frequency(fq) {
		this._frequency = fq;
		this._createFilter();
	}

	/**
	 * The OnePole Filter type, either "highpass" or "lowpass"
	 */
	get type(): OnePoleFilterType {
		return this._type;
	}
	set type(t) {
		this._type = t;
		this._createFilter();
	}

	/**
	 * Get the frequency response curve. This curve represents how the filter
	 * responses to frequencies between 20hz-20khz.
	 * @param  len The number of values to return
	 * @return The frequency response curve between 20-20kHz
	 */
	getFrequencyResponse(len = 128): Float32Array {
		const freqValues = new Float32Array(len);
		for (let i = 0; i < len; i++) {
			const norm = Math.pow(i / len, 2);
			const freq = norm * (20000 - 20) + 20;
			freqValues[i] = freq;
		}
		const magValues = new Float32Array(len);
		const phaseValues = new Float32Array(len);
		this._filter.getFrequencyResponse(freqValues, magValues, phaseValues);
		return magValues;
	}

	dispose(): this {
		super.dispose();
		this.input.dispose();
		this.output.dispose();
		this._filter.disconnect();
		return this;
	}
}
