import { Frequency, NormalRange, Time } from "../core/type/Units.js";
import { LowpassCombFilter } from "../component/filter/LowpassCombFilter.js";
import { deepMerge } from "../core/util/Defaults.js";
import { optionsFromArguments } from "../core/util/Defaults.js";
import { RecursivePartial } from "../core/util/Interface.js";
import { Noise } from "../source/Noise.js";
import { Instrument, InstrumentOptions } from "./Instrument.js";

export interface PluckSynthOptions extends InstrumentOptions {
	attackNoise: number;
	dampening: Frequency;
	resonance: NormalRange;
	release: Time;
}

/**
 * Karplus-Strong string synthesis.
 * @example
 * const plucky = new Tone.PluckSynth().toDestination();
 * plucky.triggerAttack("C4", "+0.5");
 * plucky.triggerAttack("C3", "+1");
 * plucky.triggerAttack("C2", "+1.5");
 * plucky.triggerAttack("C1", "+2");
 * @category Instrument
 */
export class PluckSynth extends Instrument<PluckSynthOptions> {
	readonly name = "PluckSynth";

	/**
	 * Noise burst at the beginning
	 */
	private _noise: Noise;
	private _lfcf: LowpassCombFilter;

	/**
	 * The amount of noise at the attack.
	 * Nominal range of [0.1, 20]
	 * @min 0.1
	 * @max 20
	 */
	attackNoise: number;

	/**
	 * The amount of resonance of the pluck. Also correlates to the sustain duration.
	 */
	resonance: NormalRange;

	/**
	 * The release time which corresponds to a resonance ramp down to 0
	 */
	release: Time;

	constructor(options?: RecursivePartial<PluckSynthOptions>);
	constructor() {
		const options = optionsFromArguments(
			PluckSynth.getDefaults(),
			arguments
		);
		super(options);

		this._noise = new Noise({
			context: this.context,
			type: "pink",
		});

		this.attackNoise = options.attackNoise;

		this._lfcf = new LowpassCombFilter({
			context: this.context,
			dampening: options.dampening,
			resonance: options.resonance,
		});

		this.resonance = options.resonance;
		this.release = options.release;

		this._noise.connect(this._lfcf);
		this._lfcf.connect(this.output);
	}

	static getDefaults(): PluckSynthOptions {
		return deepMerge(Instrument.getDefaults(), {
			attackNoise: 1,
			dampening: 4000,
			resonance: 0.7,
			release: 1,
		});
	}

	/**
	 * The dampening control. i.e. the lowpass filter frequency of the comb filter
	 * @min 0
	 * @max 7000
	 */
	get dampening(): Frequency {
		return this._lfcf.dampening;
	}
	set dampening(fq) {
		this._lfcf.dampening = fq;
	}

	triggerAttack(note: Frequency, time?: Time): this {
		const freq = this.toFrequency(note);
		time = this.toSeconds(time);
		const delayAmount = 1 / freq;
		this._lfcf.delayTime.setValueAtTime(delayAmount, time);
		this._noise.start(time);
		this._noise.stop(time + delayAmount * this.attackNoise);
		this._lfcf.resonance.cancelScheduledValues(time);
		this._lfcf.resonance.setValueAtTime(this.resonance, time);
		return this;
	}

	/**
	 * Ramp down the {@link resonance} to 0 over the duration of the release time.
	 */
	triggerRelease(time?: Time): this {
		this._lfcf.resonance.linearRampTo(0, this.release, time);
		return this;
	}

	dispose(): this {
		super.dispose();
		this._noise.dispose();
		this._lfcf.dispose();
		return this;
	}
}
