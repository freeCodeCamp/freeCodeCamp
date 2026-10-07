import { FrequencyClass } from "../core/type/Frequency.js";
import {
	Cents,
	Frequency,
	NormalRange,
	Seconds,
	Time,
} from "../core/type/Units.js";
import { optionsFromArguments } from "../core/util/Defaults.js";
import { noOp } from "../core/util/Interface.js";
import { Instrument, InstrumentOptions } from "../instrument/Instrument.js";
import { Signal } from "../signal/Signal.js";
import { timeRange } from "../core/util/Decorator.js";

type onSilenceCallback = (instrument: Monophonic<any>) => void;

export interface MonophonicOptions extends InstrumentOptions {
	portamento: Seconds;
	onsilence: onSilenceCallback;
	detune: Cents;
}

/**
 * Abstract base class for other monophonic instruments to extend.
 */
export abstract class Monophonic<
	Options extends MonophonicOptions,
> extends Instrument<Options> {
	/**
	 * The glide time between notes.
	 */
	@timeRange(0)
	portamento: Seconds;

	/**
	 * Invoked when the release has finished and the output is silent.
	 */
	onsilence: onSilenceCallback;

	/**
	 * The instrument's frequency signal.
	 */
	abstract readonly frequency: Signal<"frequency">;

	/**
	 * The instrument's detune control signal.
	 */
	abstract readonly detune: Signal<"cents">;

	constructor(options?: Partial<MonophonicOptions>);
	constructor() {
		const options = optionsFromArguments(
			Monophonic.getDefaults(),
			arguments
		);
		super(options);

		this.portamento = options.portamento;
		this.onsilence = options.onsilence;
	}

	static getDefaults(): MonophonicOptions {
		return Object.assign(Instrument.getDefaults(), {
			detune: 0,
			onsilence: noOp,
			portamento: 0,
		});
	}

	/**
	 * Trigger the attack of the note optionally with a given velocity.
	 * @param  note The note to trigger.
	 * @param  time When the note should start.
	 * @param  velocity The velocity determines how "loud" the note will be.
	 * @example
	 * const synth = new Tone.Synth().toDestination();
	 * // trigger the note a half second from now at half velocity
	 * synth.triggerAttack("C4", "+0.5", 0.5);
	 */
	triggerAttack(
		note: Frequency | FrequencyClass,
		time?: Time,
		velocity: NormalRange = 1
	): this {
		this.log("triggerAttack", note, time, velocity);
		const seconds = this.toSeconds(time);
		this._triggerEnvelopeAttack(seconds, velocity);
		this.setNote(note, seconds);
		return this;
	}

	/**
	 * Trigger the release portion of the envelope.
	 * @param  time If no time is given, the release happens immediately.
	 * @example
	 * const synth = new Tone.Synth().toDestination();
	 * synth.triggerAttack("C4");
	 * // trigger the release a second from now
	 * synth.triggerRelease("+1");
	 */
	triggerRelease(time?: Time): this {
		this.log("triggerRelease", time);
		const seconds = this.toSeconds(time);
		this._triggerEnvelopeRelease(seconds);
		return this;
	}

	/**
	 * Internal method which starts the envelope attack
	 */
	protected abstract _triggerEnvelopeAttack(
		time: Seconds,
		velocity: NormalRange
	): void;

	/**
	 * Internal method which starts the envelope release
	 */
	protected abstract _triggerEnvelopeRelease(time: Seconds): void;

	/**
	 * Get the level of the output at the given time. Measures
	 * the envelope(s) value at the time.
	 * @param time The time to query the envelope value
	 * @return The output level between 0-1
	 */
	abstract getLevelAtTime(time: Time): NormalRange;

	/**
	 * Set the note at the given time. If no time is given, the note
	 * will set immediately.
	 * @param note The note to change to.
	 * @param  time The time when the note should be set.
	 * @example
	 * const synth = new Tone.Synth().toDestination();
	 * synth.triggerAttack("C4");
	 * // change to F#6 in one quarter note from now.
	 * synth.setNote("F#6", "+4n");
	 */
	setNote(note: Frequency | FrequencyClass, time?: Time): this {
		const computedTime = this.toSeconds(time);
		const computedFrequency =
			note instanceof FrequencyClass ? note.toFrequency() : note;
		if (this.portamento > 0 && this.getLevelAtTime(computedTime) > 0.05) {
			const portTime = this.toSeconds(this.portamento);
			this.frequency.exponentialRampTo(
				computedFrequency,
				portTime,
				computedTime
			);
		} else {
			this.frequency.setValueAtTime(computedFrequency, computedTime);
		}
		return this;
	}
}
