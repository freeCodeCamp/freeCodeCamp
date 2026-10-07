import { Monophonic, MonophonicOptions } from "./Monophonic.js";
import { MonoSynth, MonoSynthOptions } from "./MonoSynth.js";
import { Signal } from "../signal/Signal.js";
import { readOnly, RecursivePartial } from "../core/util/Interface.js";
import { LFO } from "../source/oscillator/LFO.js";
import { Gain } from "../core/context/Gain.js";
import { Multiply } from "../signal/Multiply.js";
import {
	Frequency,
	NormalRange,
	Positive,
	Seconds,
	Time,
} from "../core/type/Units.js";
import {
	deepMerge,
	omitFromObject,
	optionsFromArguments,
} from "../core/util/Defaults.js";
import { Param } from "../core/context/Param.js";

export interface DuoSynthOptions extends MonophonicOptions {
	voice0: Omit<MonoSynthOptions, keyof MonophonicOptions>;
	voice1: Omit<MonoSynthOptions, keyof MonophonicOptions>;
	harmonicity: Positive;
	vibratoRate: Frequency;
	vibratoAmount: Positive;
}

/**
 * DuoSynth is a monophonic synth composed of two {@link MonoSynth}s run in parallel with control over the
 * frequency ratio between the two voices and vibrato effect.
 * @example
 * const duoSynth = new Tone.DuoSynth().toDestination();
 * duoSynth.triggerAttackRelease("C4", "2n");
 * @category Instrument
 */
export class DuoSynth extends Monophonic<DuoSynthOptions> {
	readonly name: string = "DuoSynth";

	readonly frequency: Signal<"frequency">;
	readonly detune: Signal<"cents">;

	/**
	 * the first voice
	 */
	readonly voice0: MonoSynth;

	/**
	 * the second voice
	 */
	readonly voice1: MonoSynth;

	/**
	 * The amount of vibrato
	 */
	public vibratoAmount: Param<"normalRange">;

	/**
	 * the vibrato frequency
	 */
	public vibratoRate: Signal<"frequency">;

	/**
	 * Harmonicity is the ratio between the two voices. A harmonicity of
	 * 1 is no change. Harmonicity = 2 means a change of an octave.
	 * @example
	 * const duoSynth = new Tone.DuoSynth().toDestination();
	 * duoSynth.triggerAttackRelease("C4", "2n");
	 * // pitch voice1 an octave below voice0
	 * duoSynth.harmonicity.value = 0.5;
	 */
	public harmonicity: Signal<"positive">;

	/**
	 * The vibrato LFO.
	 */
	private _vibrato: LFO;

	/**
	 * the vibrato gain
	 */
	private _vibratoGain: Gain<"normalRange">;

	constructor(options?: RecursivePartial<DuoSynthOptions>);
	constructor() {
		const options = optionsFromArguments(DuoSynth.getDefaults(), arguments);
		super(options);

		this.voice0 = new MonoSynth(
			Object.assign(options.voice0, {
				context: this.context,
				onsilence: () => this.onsilence(this),
			})
		);
		this.voice1 = new MonoSynth(
			Object.assign(options.voice1, {
				context: this.context,
			})
		);

		this.harmonicity = new Multiply({
			context: this.context,
			units: "positive",
			value: options.harmonicity,
		});

		this._vibrato = new LFO({
			frequency: options.vibratoRate,
			context: this.context,
			min: -50,
			max: 50,
		});
		// start the vibrato immediately
		this._vibrato.start();
		this.vibratoRate = this._vibrato.frequency;
		this._vibratoGain = new Gain({
			context: this.context,
			units: "normalRange",
			gain: options.vibratoAmount,
		});
		this.vibratoAmount = this._vibratoGain.gain;

		this.frequency = new Signal({
			context: this.context,
			units: "frequency",
			value: 440,
		});
		this.detune = new Signal({
			context: this.context,
			units: "cents",
			value: options.detune,
		});

		// control the two voices frequency
		this.frequency.connect(this.voice0.frequency);
		this.frequency.chain(this.harmonicity, this.voice1.frequency);

		this._vibrato.connect(this._vibratoGain);
		this._vibratoGain.fan(this.voice0.detune, this.voice1.detune);

		this.detune.fan(this.voice0.detune, this.voice1.detune);

		this.voice0.connect(this.output);
		this.voice1.connect(this.output);

		readOnly(this, [
			"voice0",
			"voice1",
			"frequency",
			"vibratoAmount",
			"vibratoRate",
		]);
	}

	getLevelAtTime(time: Time): NormalRange {
		time = this.toSeconds(time);
		return (
			this.voice0.envelope.getValueAtTime(time) +
			this.voice1.envelope.getValueAtTime(time)
		);
	}

	static getDefaults(): DuoSynthOptions {
		return deepMerge(Monophonic.getDefaults(), {
			vibratoAmount: 0.5,
			vibratoRate: 5,
			harmonicity: 1.5,
			voice0: deepMerge(
				omitFromObject(
					MonoSynth.getDefaults(),
					Object.keys(Monophonic.getDefaults())
				),
				{
					filterEnvelope: {
						attack: 0.01,
						decay: 0.0,
						sustain: 1,
						release: 0.5,
					},
					envelope: {
						attack: 0.01,
						decay: 0.0,
						sustain: 1,
						release: 0.5,
					},
				}
			),
			voice1: deepMerge(
				omitFromObject(
					MonoSynth.getDefaults(),
					Object.keys(Monophonic.getDefaults())
				),
				{
					filterEnvelope: {
						attack: 0.01,
						decay: 0.0,
						sustain: 1,
						release: 0.5,
					},
					envelope: {
						attack: 0.01,
						decay: 0.0,
						sustain: 1,
						release: 0.5,
					},
				}
			),
		}) as unknown as DuoSynthOptions;
	}
	/**
	 * Trigger the attack portion of the note
	 */
	protected _triggerEnvelopeAttack(time: Seconds, velocity: number): void {
		// @ts-ignore
		this.voice0._triggerEnvelopeAttack(time, velocity);
		// @ts-ignore
		this.voice1._triggerEnvelopeAttack(time, velocity);
	}

	/**
	 * Trigger the release portion of the note
	 */
	protected _triggerEnvelopeRelease(time: Seconds) {
		// @ts-ignore
		this.voice0._triggerEnvelopeRelease(time);
		// @ts-ignore
		this.voice1._triggerEnvelopeRelease(time);
		return this;
	}

	dispose(): this {
		super.dispose();
		this.voice0.dispose();
		this.voice1.dispose();
		this.frequency.dispose();
		this.detune.dispose();
		this._vibrato.dispose();
		this.vibratoRate.dispose();
		this._vibratoGain.dispose();
		this.harmonicity.dispose();
		return this;
	}
}
