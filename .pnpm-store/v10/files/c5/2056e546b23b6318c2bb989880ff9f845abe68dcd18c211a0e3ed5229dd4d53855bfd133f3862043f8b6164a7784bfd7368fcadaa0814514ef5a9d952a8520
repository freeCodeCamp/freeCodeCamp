import { Volume } from "../component/channel/Volume.js";
import { Param } from "../core/context/Param.js";
import {
	OutputNode,
	ToneAudioNode,
	ToneAudioNodeOptions,
} from "../core/context/ToneAudioNode.js";
import { Decibels, Frequency, NormalRange, Time } from "../core/type/Units.js";
import { optionsFromArguments } from "../core/util/Defaults.js";
import { readOnly } from "../core/util/Interface.js";

export interface InstrumentOptions extends ToneAudioNodeOptions {
	volume: Decibels;
}

/**
 * Base-class for all instruments
 */
export abstract class Instrument<
	Options extends InstrumentOptions,
> extends ToneAudioNode<Options> {
	/**
	 * The output and volume triming node
	 */
	private _volume: Volume;
	output: OutputNode;

	/**
	 * The instrument only has an output
	 */
	input: undefined;

	/**
	 * The volume of the output in decibels.
	 * @example
	 * const amSynth = new Tone.AMSynth().toDestination();
	 * amSynth.volume.value = -6;
	 * amSynth.triggerAttackRelease("G#3", 0.2);
	 */
	volume: Param<"decibels">;

	/**
	 * Keep track of all events scheduled to the transport
	 * when the instrument is 'synced'
	 */
	private _scheduledEvents: number[] = [];

	/**
	 * If the instrument is currently synced
	 */
	private _synced = false;

	constructor(options?: Partial<InstrumentOptions>);
	constructor() {
		const options = optionsFromArguments(
			Instrument.getDefaults(),
			arguments
		);
		super(options);

		this._volume = this.output = new Volume({
			context: this.context,
			volume: options.volume,
		});
		this.volume = this._volume.volume;
		readOnly(this, "volume");
	}

	static getDefaults(): InstrumentOptions {
		return Object.assign(ToneAudioNode.getDefaults(), {
			volume: 0,
		});
	}

	/**
	 * Sync the instrument to the Transport. All subsequent calls of
	 * {@link triggerAttack} and {@link triggerRelease} will be scheduled along the transport.
	 * @example
	 * const fmSynth = new Tone.FMSynth().toDestination();
	 * fmSynth.volume.value = -6;
	 * fmSynth.sync();
	 * // schedule 3 notes when the transport first starts
	 * fmSynth.triggerAttackRelease("C4", "8n", 0);
	 * fmSynth.triggerAttackRelease("E4", "8n", "8n");
	 * fmSynth.triggerAttackRelease("G4", "8n", "4n");
	 * // start the transport to hear the notes
	 * Tone.Transport.start();
	 */
	sync(): this {
		if (this._syncState()) {
			this._syncMethod("triggerAttack", 1);
			this._syncMethod("triggerRelease", 0);

			this.context.transport.on("stop", this._syncedRelease);
			this.context.transport.on("pause", this._syncedRelease);
			this.context.transport.on("loopEnd", this._syncedRelease);
		}
		return this;
	}

	/**
	 * set _sync
	 */
	protected _syncState(): boolean {
		let changed = false;
		if (!this._synced) {
			this._synced = true;
			changed = true;
		}
		return changed;
	}

	/**
	 * Wrap the given method so that it can be synchronized
	 * @param method Which method to wrap and sync
	 * @param  timePosition What position the time argument appears in
	 */
	protected _syncMethod(method: string, timePosition: number): void {
		const originalMethod = (this["_original_" + method] = this[method]);
		this[method] = (...args: any[]) => {
			const time = args[timePosition];
			const id = this.context.transport.schedule((t) => {
				args[timePosition] = t;
				originalMethod.apply(this, args);
			}, time);
			this._scheduledEvents.push(id);
		};
	}

	/**
	 * Unsync the instrument from the Transport
	 */
	unsync(): this {
		this._scheduledEvents.forEach((id) => this.context.transport.clear(id));
		this._scheduledEvents = [];
		if (this._synced) {
			this._synced = false;
			this.triggerAttack = this._original_triggerAttack;
			this.triggerRelease = this._original_triggerRelease;

			this.context.transport.off("stop", this._syncedRelease);
			this.context.transport.off("pause", this._syncedRelease);
			this.context.transport.off("loopEnd", this._syncedRelease);
		}
		return this;
	}

	/**
	 * Trigger the attack and then the release after the duration.
	 * @param  note     The note to trigger.
	 * @param  duration How long the note should be held for before
	 *                         triggering the release. This value must be greater than 0.
	 * @param time  When the note should be triggered.
	 * @param  velocity The velocity the note should be triggered at.
	 * @example
	 * const synth = new Tone.Synth().toDestination();
	 * // trigger "C4" for the duration of an 8th note
	 * synth.triggerAttackRelease("C4", "8n");
	 */
	triggerAttackRelease(
		note: Frequency,
		duration: Time,
		time?: Time,
		velocity?: NormalRange
	): this {
		const computedTime = this.toSeconds(time);
		const computedDuration = this.toSeconds(duration);
		this.triggerAttack(note, computedTime, velocity);
		this.triggerRelease(computedTime + computedDuration);
		return this;
	}

	/**
	 * Start the instrument's note.
	 * @param note the note to trigger
	 * @param time the time to trigger the note
	 * @param velocity the velocity to trigger the note (between 0-1)
	 */
	abstract triggerAttack(
		note: Frequency,
		time?: Time,
		velocity?: NormalRange
	): this;
	private _original_triggerAttack = this.triggerAttack;

	/**
	 * Trigger the release phase of the current note.
	 * @param time when to trigger the release
	 */
	abstract triggerRelease(...args: any[]): this;
	private _original_triggerRelease = this.triggerRelease;

	/**
	 * The release which is scheduled to the timeline.
	 */
	protected _syncedRelease = (time: number) =>
		this._original_triggerRelease(time);

	/**
	 * clean up
	 * @returns {Instrument} this
	 */
	dispose(): this {
		super.dispose();
		this._volume.dispose();
		this.unsync();
		this._scheduledEvents = [];
		return this;
	}
}
