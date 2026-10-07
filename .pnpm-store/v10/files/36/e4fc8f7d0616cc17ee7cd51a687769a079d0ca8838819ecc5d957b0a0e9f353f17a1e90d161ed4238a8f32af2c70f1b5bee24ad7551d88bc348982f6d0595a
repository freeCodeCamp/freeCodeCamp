import { Gain } from "../../core/context/Gain.js";
import {
	AudioRange,
	Degrees,
	Frequency,
	Seconds,
	Time,
} from "../../core/type/Units.js";
import { optionsFromArguments } from "../../core/util/Defaults.js";
import { readOnly } from "../../core/util/Interface.js";
import { Signal } from "../../signal/Signal.js";
import { WaveShaper } from "../../signal/WaveShaper.js";
import { Source } from "../Source.js";
import { Oscillator } from "./Oscillator.js";
import {
	generateWaveform,
	PulseOscillatorOptions,
	ToneOscillatorInterface,
} from "./OscillatorInterface.js";

export { PulseOscillatorOptions } from "./OscillatorInterface.js";

/**
 * PulseOscillator is an oscillator with control over pulse width,
 * also known as the duty cycle. At 50% duty cycle (width = 0) the wave is
 * a square wave.
 * [Read more](https://wigglewave.wordpress.com/2014/08/16/pulse-waveforms-and-harmonics/).
 * ```
 *    width = -0.25        width = 0.0          width = 0.25
 *
 *   +-----+            +-------+       +    +-------+     +-+
 *   |     |            |       |       |            |     |
 *   |     |            |       |       |            |     |
 * +-+     +-------+    +       +-------+            +-----+
 *
 *
 *    width = -0.5                              width = 0.5
 *
 *     +---+                                 +-------+   +---+
 *     |   |                                         |   |
 *     |   |                                         |   |
 * +---+   +-------+                                 +---+
 *
 *
 *    width = -0.75                             width = 0.75
 *
 *       +-+                                 +-------+ +-----+
 *       | |                                         | |
 *       | |                                         | |
 * +-----+ +-------+                                 +-+
 * ```
 * @example
 * return Tone.Offline(() => {
 * 	const pulse = new Tone.PulseOscillator(50, 0.4).toDestination().start();
 * }, 0.1, 1);
 * @category Source
 */
export class PulseOscillator
	extends Source<PulseOscillatorOptions>
	implements ToneOscillatorInterface
{
	readonly name: string = "PulseOscillator";

	/**
	 * The width of the pulse.
	 * @example
	 * return Tone.Offline(() => {
	 * 	const pulse = new Tone.PulseOscillator(20, 0.8).toDestination().start();
	 * }, 0.1, 1);
	 */
	readonly width: Signal<"audioRange">;

	/**
	 * gate the width amount
	 */
	private _widthGate: Gain = new Gain({
		context: this.context,
		gain: 0,
	});

	/**
	 * the sawtooth oscillator
	 */
	private _triangle: Oscillator;

	/**
	 * The frequency control.
	 */
	readonly frequency: Signal<"frequency">;

	/**
	 * The detune in cents.
	 */
	readonly detune: Signal<"cents">;

	/**
	 * Threshold the signal to turn it into a square
	 */
	private _thresh = new WaveShaper({
		context: this.context,
		mapping: (val) => (val <= 0 ? -1 : 1),
	});

	/**
	 * @param frequency The frequency of the oscillator
	 * @param width The width of the pulse
	 */
	constructor(frequency?: Frequency, width?: AudioRange);
	constructor(options?: Partial<PulseOscillatorOptions>);
	constructor() {
		const options = optionsFromArguments(
			PulseOscillator.getDefaults(),
			arguments,
			["frequency", "width"]
		);
		super(options);

		this.width = new Signal({
			context: this.context,
			units: "audioRange",
			value: options.width,
		});

		this._triangle = new Oscillator({
			context: this.context,
			detune: options.detune,
			frequency: options.frequency,
			onstop: () => this.onstop(this),
			phase: options.phase,
			type: "triangle",
		});
		this.frequency = this._triangle.frequency;
		this.detune = this._triangle.detune;

		// connections
		this._triangle.chain(this._thresh, this.output);
		this.width.chain(this._widthGate, this._thresh);
		readOnly(this, ["width", "frequency", "detune"]);
	}

	static getDefaults(): PulseOscillatorOptions {
		return Object.assign(Source.getDefaults(), {
			detune: 0,
			frequency: 440,
			phase: 0,
			type: "pulse" as const,
			width: 0.2,
		});
	}

	/**
	 * start the oscillator
	 */
	protected _start(time: Time): void {
		time = this.toSeconds(time);
		this._triangle.start(time);
		this._widthGate.gain.setValueAtTime(1, time);
	}

	/**
	 * stop the oscillator
	 */
	protected _stop(time: Time): void {
		time = this.toSeconds(time);
		this._triangle.stop(time);
		// the width is still connected to the output.
		// that needs to be stopped also
		this._widthGate.gain.cancelScheduledValues(time);
		this._widthGate.gain.setValueAtTime(0, time);
	}

	protected _restart(time: Seconds): void {
		this._triangle.restart(time);
		this._widthGate.gain.cancelScheduledValues(time);
		this._widthGate.gain.setValueAtTime(1, time);
	}

	/**
	 * The phase of the oscillator in degrees.
	 */
	get phase(): Degrees {
		return this._triangle.phase;
	}
	set phase(phase: Degrees) {
		this._triangle.phase = phase;
	}

	/**
	 * The type of the oscillator. Always returns "pulse".
	 */
	get type(): "pulse" {
		return "pulse";
	}

	/**
	 * The baseType of the oscillator. Always returns "pulse".
	 */
	get baseType(): "pulse" {
		return "pulse";
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
	 * *Internal use* The carrier oscillator type is fed through the
	 * waveshaper node to create the pulse. Using different carrier oscillators
	 * changes oscillator's behavior.
	 */
	set carrierType(type: "triangle" | "sine") {
		this._triangle.type = type;
	}

	async asArray(length = 1024): Promise<Float32Array> {
		return generateWaveform(this, length);
	}

	/**
	 * Clean up method.
	 */
	dispose(): this {
		super.dispose();
		this._triangle.dispose();
		this.width.dispose();
		this._widthGate.dispose();
		this._thresh.dispose();
		return this;
	}
}
