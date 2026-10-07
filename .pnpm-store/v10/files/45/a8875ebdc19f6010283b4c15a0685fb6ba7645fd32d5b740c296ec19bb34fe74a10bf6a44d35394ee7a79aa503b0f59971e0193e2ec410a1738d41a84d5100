import { AmplitudeEnvelope } from "../component/envelope/AmplitudeEnvelope.js";
import { NormalRange, Time } from "../core/type/Units.js";
import { omitFromObject, optionsFromArguments } from "../core/util/Defaults.js";
import { RecursivePartial } from "../core/util/Interface.js";
import { Noise, NoiseOptions } from "../source/Noise.js";
import { Instrument, InstrumentOptions } from "./Instrument.js";
import {
	ToneAudioNode,
	ToneAudioNodeOptions,
} from "../core/context/ToneAudioNode.js";
import { Envelope, EnvelopeOptions } from "../component/envelope/Envelope.js";
import { Source } from "../source/Source.js";

export interface NoiseSynthOptions extends InstrumentOptions {
	envelope: Omit<EnvelopeOptions, keyof ToneAudioNodeOptions>;
	noise: Omit<NoiseOptions, keyof ToneAudioNodeOptions>;
}

/**
 * Tone.NoiseSynth is composed of {@link Noise} through an {@link AmplitudeEnvelope}.
 * ```
 * +-------+   +-------------------+
 * | Noise +>--> AmplitudeEnvelope +>--> Output
 * +-------+   +-------------------+
 * ```
 * @example
 * const noiseSynth = new Tone.NoiseSynth().toDestination();
 * noiseSynth.triggerAttackRelease("8n", 0.05);
 * @category Instrument
 */
export class NoiseSynth extends Instrument<NoiseSynthOptions> {
	readonly name = "NoiseSynth";

	/**
	 * The noise source.
	 */
	readonly noise: Noise;

	/**
	 * The amplitude envelope.
	 */
	readonly envelope: AmplitudeEnvelope;

	constructor(options?: RecursivePartial<NoiseSynthOptions>);
	constructor() {
		const options = optionsFromArguments(
			NoiseSynth.getDefaults(),
			arguments
		);
		super(options);

		this.noise = new Noise(
			Object.assign(
				{
					context: this.context,
				},
				options.noise
			)
		);

		this.envelope = new AmplitudeEnvelope(
			Object.assign(
				{
					context: this.context,
				},
				options.envelope
			)
		);

		// connect the noise to the output
		this.noise.chain(this.envelope, this.output);
	}

	static getDefaults(): NoiseSynthOptions {
		return Object.assign(Instrument.getDefaults(), {
			envelope: Object.assign(
				omitFromObject(
					Envelope.getDefaults(),
					Object.keys(ToneAudioNode.getDefaults())
				),
				{
					decay: 0.1,
					sustain: 0.0,
				}
			),
			noise: Object.assign(
				omitFromObject(
					Noise.getDefaults(),
					Object.keys(Source.getDefaults())
				),
				{
					type: "white",
				}
			),
		});
	}

	/**
	 * Start the attack portion of the envelopes. Unlike other
	 * instruments, Tone.NoiseSynth doesn't have a note.
	 * @example
	 * const noiseSynth = new Tone.NoiseSynth().toDestination();
	 * noiseSynth.triggerAttack();
	 */
	triggerAttack(time?: Time, velocity: NormalRange = 1): this {
		time = this.toSeconds(time);
		// the envelopes
		this.envelope.triggerAttack(time, velocity);
		// start the noise
		this.noise.start(time);
		if (this.envelope.sustain === 0) {
			this.noise.stop(
				time +
					this.toSeconds(this.envelope.attack) +
					this.toSeconds(this.envelope.decay)
			);
		}
		return this;
	}

	/**
	 * Start the release portion of the envelopes.
	 */
	triggerRelease(time?: Time): this {
		time = this.toSeconds(time);
		this.envelope.triggerRelease(time);
		this.noise.stop(time + this.toSeconds(this.envelope.release));
		return this;
	}

	sync(): this {
		if (this._syncState()) {
			this._syncMethod("triggerAttack", 0);
			this._syncMethod("triggerRelease", 0);
		}
		return this;
	}

	/**
	 * Trigger the attack and then the release after the duration.
	 * @param duration The amount of time to hold the note for
	 * @param time The time the note should start
	 * @param velocity The volume of the note (0-1)
	 * @example
	 * const noiseSynth = new Tone.NoiseSynth().toDestination();
	 * // hold the note for 0.5 seconds
	 * noiseSynth.triggerAttackRelease(0.5);
	 */
	triggerAttackRelease(
		duration: Time,
		time?: Time,
		velocity: NormalRange = 1
	): this {
		time = this.toSeconds(time);
		duration = this.toSeconds(duration);
		this.triggerAttack(time, velocity);
		this.triggerRelease(time + duration);
		return this;
	}

	dispose(): this {
		super.dispose();
		this.noise.dispose();
		this.envelope.dispose();
		return this;
	}
}
