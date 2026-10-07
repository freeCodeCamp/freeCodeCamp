import { AmplitudeEnvelope } from "../component/envelope/AmplitudeEnvelope.js";
import { Envelope, EnvelopeOptions } from "../component/envelope/Envelope.js";
import { Filter, FilterOptions } from "../component/filter/Filter.js";
import { omitFromObject, optionsFromArguments } from "../core/util/Defaults.js";
import { readOnly, RecursivePartial } from "../core/util/Interface.js";
import { Monophonic, MonophonicOptions } from "../instrument/Monophonic.js";
import { OmniOscillator } from "../source/oscillator/OmniOscillator.js";
import { Source } from "../source/Source.js";
import {
	FrequencyEnvelope,
	FrequencyEnvelopeOptions,
} from "../component/envelope/FrequencyEnvelope.js";
import { NormalRange, Seconds, Time } from "../core/type/Units.js";
import { Signal } from "../signal/Signal.js";
import {
	ToneAudioNode,
	ToneAudioNodeOptions,
} from "../core/context/ToneAudioNode.js";
import { OmniOscillatorSynthOptions } from "../source/oscillator/OscillatorInterface.js";

export interface MonoSynthOptions extends MonophonicOptions {
	oscillator: OmniOscillatorSynthOptions;
	envelope: Omit<EnvelopeOptions, keyof ToneAudioNodeOptions>;
	filterEnvelope: Omit<FrequencyEnvelopeOptions, keyof ToneAudioNodeOptions>;
	filter: Omit<FilterOptions, keyof ToneAudioNodeOptions>;
}

/**
 * MonoSynth is composed of one `oscillator`, one `filter`, and two `envelopes`.
 * The amplitude of the Oscillator and the cutoff frequency of the
 * Filter are controlled by Envelopes.
 * <img src="https://docs.google.com/drawings/d/1gaY1DF9_Hzkodqf8JI1Cg2VZfwSElpFQfI94IQwad38/pub?w=924&h=240">
 * @example
 * const synth = new Tone.MonoSynth({
 * 	oscillator: {
 * 		type: "square"
 * 	},
 * 	envelope: {
 * 		attack: 0.1
 * 	}
 * }).toDestination();
 * synth.triggerAttackRelease("C4", "8n");
 * @category Instrument
 */
export class MonoSynth extends Monophonic<MonoSynthOptions> {
	readonly name = "MonoSynth";

	/**
	 * The oscillator.
	 */
	readonly oscillator: OmniOscillator<any>;

	/**
	 * The frequency control.
	 */
	readonly frequency: Signal<"frequency">;

	/**
	 * The detune control.
	 */
	readonly detune: Signal<"cents">;

	/**
	 * The filter.
	 */
	readonly filter: Filter;

	/**
	 * The filter envelope.
	 */
	readonly filterEnvelope: FrequencyEnvelope;

	/**
	 * The amplitude envelope.
	 */
	readonly envelope: AmplitudeEnvelope;

	constructor(options?: RecursivePartial<MonoSynthOptions>);
	constructor() {
		const options = optionsFromArguments(
			MonoSynth.getDefaults(),
			arguments
		);
		super(options);

		this.oscillator = new OmniOscillator(
			Object.assign(options.oscillator, {
				context: this.context,
				detune: options.detune,
				onstop: () => this.onsilence(this),
			})
		);
		this.frequency = this.oscillator.frequency;
		this.detune = this.oscillator.detune;
		this.filter = new Filter(
			Object.assign(options.filter, { context: this.context })
		);
		this.filterEnvelope = new FrequencyEnvelope(
			Object.assign(options.filterEnvelope, { context: this.context })
		);
		this.envelope = new AmplitudeEnvelope(
			Object.assign(options.envelope, { context: this.context })
		);

		// connect the oscillators to the output
		this.oscillator.chain(this.filter, this.envelope, this.output);

		// connect the filter envelope
		this.filterEnvelope.connect(this.filter.frequency);

		readOnly(this, [
			"oscillator",
			"frequency",
			"detune",
			"filter",
			"filterEnvelope",
			"envelope",
		]);
	}

	static getDefaults(): MonoSynthOptions {
		return Object.assign(Monophonic.getDefaults(), {
			envelope: Object.assign(
				omitFromObject(
					Envelope.getDefaults(),
					Object.keys(ToneAudioNode.getDefaults())
				),
				{
					attack: 0.005,
					decay: 0.1,
					release: 1,
					sustain: 0.9,
				}
			),
			filter: Object.assign(
				omitFromObject(
					Filter.getDefaults(),
					Object.keys(ToneAudioNode.getDefaults())
				),
				{
					Q: 1,
					rolloff: -12,
					type: "lowpass",
				}
			),
			filterEnvelope: Object.assign(
				omitFromObject(
					FrequencyEnvelope.getDefaults(),
					Object.keys(ToneAudioNode.getDefaults())
				),
				{
					attack: 0.6,
					baseFrequency: 200,
					decay: 0.2,
					exponent: 2,
					octaves: 3,
					release: 2,
					sustain: 0.5,
				}
			),
			oscillator: Object.assign(
				omitFromObject(
					OmniOscillator.getDefaults(),
					Object.keys(Source.getDefaults())
				),
				{
					type: "sawtooth",
				}
			) as OmniOscillatorSynthOptions,
		});
	}

	/**
	 * start the attack portion of the envelope
	 * @param time the time the attack should start
	 * @param velocity the velocity of the note (0-1)
	 */
	protected _triggerEnvelopeAttack(time: Seconds, velocity = 1): void {
		this.envelope.triggerAttack(time, velocity);
		this.filterEnvelope.triggerAttack(time);
		this.oscillator.start(time);
		if (this.envelope.sustain === 0) {
			const computedAttack = this.toSeconds(this.envelope.attack);
			const computedDecay = this.toSeconds(this.envelope.decay);
			this.oscillator.stop(time + computedAttack + computedDecay);
		}
	}

	/**
	 * start the release portion of the envelope
	 * @param time the time the release should start
	 */
	protected _triggerEnvelopeRelease(time: Seconds): void {
		this.envelope.triggerRelease(time);
		this.filterEnvelope.triggerRelease(time);
		this.oscillator.stop(time + this.toSeconds(this.envelope.release));
	}

	getLevelAtTime(time: Time): NormalRange {
		time = this.toSeconds(time);
		return this.envelope.getValueAtTime(time);
	}

	dispose(): this {
		super.dispose();
		this.oscillator.dispose();
		this.envelope.dispose();
		this.filterEnvelope.dispose();
		this.filter.dispose();
		return this;
	}
}
