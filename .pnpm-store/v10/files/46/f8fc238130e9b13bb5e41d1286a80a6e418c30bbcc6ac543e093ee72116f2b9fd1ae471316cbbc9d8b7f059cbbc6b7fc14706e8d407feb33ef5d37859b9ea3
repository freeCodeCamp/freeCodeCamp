import { connect } from "../../core/context/ToneAudioNode.js";
import { Param } from "../../core/context/Param.js";
import { Cents, Frequency, Seconds, Time } from "../../core/type/Units.js";
import { optionsFromArguments } from "../../core/util/Defaults.js";
import { OneShotSource, OneShotSourceOptions } from "../OneShotSource.js";
import { readOnly } from "../../core/util/Interface.js";

export interface ToneOscillatorNodeOptions extends OneShotSourceOptions {
	frequency: Frequency;
	detune: Cents;
	type: OscillatorType;
}

/**
 * Wrapper around the native fire-and-forget OscillatorNode.
 * Adds the ability to reschedule the stop method.
 * ***{@link Oscillator} is better for most use-cases***
 * @category Source
 */
export class ToneOscillatorNode extends OneShotSource<ToneOscillatorNodeOptions> {
	readonly name: string = "ToneOscillatorNode";

	/**
	 * The oscillator
	 */
	private _oscillator = this.context.createOscillator();
	protected _internalChannels = [this._oscillator];

	/**
	 * The frequency of the oscillator
	 */
	readonly frequency: Param<"frequency">;

	/**
	 * The detune of the oscillator
	 */
	readonly detune: Param<"cents">;

	/**
	 * @param  frequency   The frequency value
	 * @param  type  The basic oscillator type
	 */
	constructor(frequency: Frequency, type: OscillatorType);
	constructor(options?: Partial<ToneOscillatorNodeOptions>);
	constructor() {
		const options = optionsFromArguments(
			ToneOscillatorNode.getDefaults(),
			arguments,
			["frequency", "type"]
		);
		super(options);

		connect(this._oscillator, this._gainNode);

		this.type = options.type;

		this.frequency = new Param({
			context: this.context,
			param: this._oscillator.frequency,
			units: "frequency",
			value: options.frequency,
		});

		this.detune = new Param({
			context: this.context,
			param: this._oscillator.detune,
			units: "cents",
			value: options.detune,
		});

		readOnly(this, ["frequency", "detune"]);
	}

	static getDefaults(): ToneOscillatorNodeOptions {
		return Object.assign(OneShotSource.getDefaults(), {
			detune: 0,
			frequency: 440,
			type: "sine" as OscillatorType,
		});
	}

	/**
	 * Start the oscillator node at the given time
	 * @param  time When to start the oscillator
	 */
	start(time?: Time): this {
		const computedTime = this.toSeconds(time);
		this.log("start", computedTime);
		this._startGain(computedTime);
		this._oscillator.start(computedTime);
		return this;
	}

	protected _stopSource(time?: Seconds): void {
		this._oscillator.stop(time);
	}

	/**
	 * Sets an arbitrary custom periodic waveform given a PeriodicWave.
	 * @param  periodicWave PeriodicWave should be created with context.createPeriodicWave
	 */
	setPeriodicWave(periodicWave: PeriodicWave): this {
		this._oscillator.setPeriodicWave(periodicWave);
		return this;
	}

	/**
	 * The oscillator type. Either 'sine', 'sawtooth', 'square', or 'triangle'
	 */
	get type(): OscillatorType {
		return this._oscillator.type;
	}
	set type(type: OscillatorType) {
		this._oscillator.type = type;
	}

	/**
	 * Clean up.
	 */
	dispose(): this {
		super.dispose();
		if (this.state === "started") {
			this.stop();
		}
		this._oscillator.disconnect();
		this.frequency.dispose();
		this.detune.dispose();
		return this;
	}
}
