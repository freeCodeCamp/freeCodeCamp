import { Degrees, Frequency, Seconds, Time } from "../../core/type/Units.js";
import { optionsFromArguments } from "../../core/util/Defaults.js";
import { readOnly } from "../../core/util/Interface.js";
import { Multiply } from "../../signal/Multiply.js";
import { Signal } from "../../signal/Signal.js";
import { Source } from "../Source.js";
import { Oscillator } from "./Oscillator.js";
import {
	generateWaveform,
	PWMOscillatorOptions,
	ToneOscillatorInterface,
} from "./OscillatorInterface.js";
import { PulseOscillator } from "./PulseOscillator.js";

export { PWMOscillatorOptions } from "./OscillatorInterface.js";

/**
 * PWMOscillator modulates the width of a Tone.PulseOscillator
 * at the modulationFrequency. This has the effect of continuously
 * changing the timbre of the oscillator by altering the harmonics
 * generated.
 * @example
 * return Tone.Offline(() => {
 * 	const pwm = new Tone.PWMOscillator(60, 0.3).toDestination().start();
 * }, 0.1, 1);
 * @category Source
 */
export class PWMOscillator
	extends Source<PWMOscillatorOptions>
	implements ToneOscillatorInterface
{
	readonly name: string = "PWMOscillator";

	readonly sourceType = "pwm";

	/**
	 * the pulse oscillator
	 */
	private _pulse: PulseOscillator;
	/**
	 * the modulator
	 */
	private _modulator: Oscillator;

	/**
	 * Scale the oscillator so it doesn't go silent
	 * at the extreme values.
	 */
	private _scale: Multiply = new Multiply({
		context: this.context,
		value: 2,
	});

	/**
	 * The frequency control.
	 */
	readonly frequency: Signal<"frequency">;

	/**
	 * The detune of the oscillator.
	 */
	readonly detune: Signal<"cents">;

	/**
	 * The width modulation rate of the oscillator.
	 * @example
	 * return Tone.Offline(() => {
	 * 	const osc = new Tone.PWMOscillator(20, 2).toDestination().start();
	 * }, 0.1, 1);
	 */
	readonly modulationFrequency: Signal<"frequency">;

	/**
	 * @param {Frequency} frequency The starting frequency of the oscillator.
	 * @param {Frequency} modulationFrequency The modulation frequency of the width of the pulse.
	 */
	constructor(frequency?: Frequency, modulationFrequency?: Frequency);
	constructor(options?: Partial<PWMOscillatorOptions>);
	constructor() {
		const options = optionsFromArguments(
			PWMOscillator.getDefaults(),
			arguments,
			["frequency", "modulationFrequency"]
		);
		super(options);

		this._pulse = new PulseOscillator({
			context: this.context,
			frequency: options.modulationFrequency,
		});
		// change the pulse oscillator type
		this._pulse.carrierType = "sine";

		this.modulationFrequency = this._pulse.frequency;

		this._modulator = new Oscillator({
			context: this.context,
			detune: options.detune,
			frequency: options.frequency,
			onstop: () => this.onstop(this),
			phase: options.phase,
		});

		this.frequency = this._modulator.frequency;
		this.detune = this._modulator.detune;

		// connections
		this._modulator.chain(this._scale, this._pulse.width);
		this._pulse.connect(this.output);
		readOnly(this, ["modulationFrequency", "frequency", "detune"]);
	}

	static getDefaults(): PWMOscillatorOptions {
		return Object.assign(Source.getDefaults(), {
			detune: 0,
			frequency: 440,
			modulationFrequency: 0.4,
			phase: 0,
			type: "pwm" as const,
		});
	}
	/**
	 * start the oscillator
	 */
	protected _start(time: Time): void {
		time = this.toSeconds(time);
		this._modulator.start(time);
		this._pulse.start(time);
	}

	/**
	 * stop the oscillator
	 */
	protected _stop(time: Time): void {
		time = this.toSeconds(time);
		this._modulator.stop(time);
		this._pulse.stop(time);
	}

	/**
	 * restart the oscillator
	 */
	protected _restart(time: Seconds): void {
		this._modulator.restart(time);
		this._pulse.restart(time);
	}

	/**
	 * The type of the oscillator. Always returns "pwm".
	 */
	get type(): "pwm" {
		return "pwm";
	}

	/**
	 * The baseType of the oscillator. Always returns "pwm".
	 */
	get baseType(): "pwm" {
		return "pwm";
	}

	/**
	 * The partials of the waveform. Cannot set partials for this waveform type
	 */
	get partials(): number[] {
		return [];
	}

	/**
	 * No partials for this waveform type.
	 */
	get partialCount(): number {
		return 0;
	}

	/**
	 * The phase of the oscillator in degrees.
	 */
	get phase(): Degrees {
		return this._modulator.phase;
	}
	set phase(phase: Degrees) {
		this._modulator.phase = phase;
	}

	async asArray(length = 1024): Promise<Float32Array> {
		return generateWaveform(this, length);
	}

	/**
	 * Clean up.
	 */
	dispose(): this {
		super.dispose();
		this._pulse.dispose();
		this._scale.dispose();
		this._modulator.dispose();
		return this;
	}
}
