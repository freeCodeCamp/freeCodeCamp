import { optionsFromArguments } from "../../core/util/Defaults.js";
import { Frequency, Hertz, NormalRange, Time } from "../../core/type/Units.js";
import { Envelope, EnvelopeOptions } from "./Envelope.js";
import { Scale } from "../../signal/Scale.js";
import { Pow } from "../../signal/Pow.js";
import { assertRange } from "../../core/util/Debug.js";

export interface FrequencyEnvelopeOptions extends EnvelopeOptions {
	baseFrequency: Frequency;
	octaves: number;
	exponent: number;
}
/**
 * FrequencyEnvelope is an {@link Envelope} which ramps between {@link baseFrequency}
 * and {@link octaves}. It can also have an optional {@link exponent} to adjust the curve
 * which it ramps.
 * @example
 * const oscillator = new Tone.Oscillator().toDestination().start();
 * const freqEnv = new Tone.FrequencyEnvelope({
 * 	attack: 0.2,
 * 	baseFrequency: "C2",
 * 	octaves: 4
 * });
 * freqEnv.connect(oscillator.frequency);
 * freqEnv.triggerAttack();
 * @category Component
 */
export class FrequencyEnvelope extends Envelope {
	readonly name: string = "FrequencyEnvelope";

	/**
	 * Private reference to the base frequency as a number
	 */
	private _baseFrequency: Hertz;

	/**
	 * The number of octaves
	 */
	private _octaves: number;

	/**
	 * Internal scaler from 0-1 to the final output range
	 */
	private _scale: Scale;

	/**
	 * Apply a power curve to the output
	 */
	private _exponent: Pow;

	/**
	 * @param attack	the attack time in seconds
	 * @param decay		the decay time in seconds
	 * @param sustain 	a percentage (0-1) of the full amplitude
	 * @param release	the release time in seconds
	 */
	constructor(
		attack?: Time,
		decay?: Time,
		sustain?: NormalRange,
		release?: Time
	);
	constructor(options?: Partial<FrequencyEnvelopeOptions>);
	constructor() {
		const options = optionsFromArguments(
			FrequencyEnvelope.getDefaults(),
			arguments,
			["attack", "decay", "sustain", "release"]
		);
		super(options);

		this._octaves = options.octaves;
		this._baseFrequency = this.toFrequency(options.baseFrequency);

		this._exponent = this.input = new Pow({
			context: this.context,
			value: options.exponent,
		});
		this._scale = this.output = new Scale({
			context: this.context,
			min: this._baseFrequency,
			max: this._baseFrequency * Math.pow(2, this._octaves),
		});
		this._sig.chain(this._exponent, this._scale);
	}

	static getDefaults(): FrequencyEnvelopeOptions {
		return Object.assign(Envelope.getDefaults(), {
			baseFrequency: 200,
			exponent: 1,
			octaves: 4,
		});
	}

	/**
	 * The envelope's minimum output value. This is the value which it
	 * starts at.
	 */
	get baseFrequency(): Frequency {
		return this._baseFrequency;
	}
	set baseFrequency(min) {
		const freq = this.toFrequency(min);
		assertRange(freq, 0);
		this._baseFrequency = freq;
		this._scale.min = this._baseFrequency;
		// update the max value when the min changes
		this.octaves = this._octaves;
	}

	/**
	 * The number of octaves above the baseFrequency that the
	 * envelope will scale to.
	 */
	get octaves(): number {
		return this._octaves;
	}
	set octaves(octaves: number) {
		this._octaves = octaves;
		this._scale.max = this._baseFrequency * Math.pow(2, octaves);
	}

	/**
	 * The envelope's exponent value.
	 */
	get exponent(): number {
		return this._exponent.value;
	}
	set exponent(exponent) {
		this._exponent.value = exponent;
	}

	/**
	 * Clean up
	 */
	dispose(): this {
		super.dispose();
		this._exponent.dispose();
		this._scale.dispose();
		return this;
	}
}
