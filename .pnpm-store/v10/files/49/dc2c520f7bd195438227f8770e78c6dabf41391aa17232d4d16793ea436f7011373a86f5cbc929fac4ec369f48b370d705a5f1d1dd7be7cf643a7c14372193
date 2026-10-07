import {
	Cents,
	Degrees,
	Frequency,
	Seconds,
	Time,
} from "../../core/type/Units.js";
import { optionsFromArguments } from "../../core/util/Defaults.js";
import { noOp, readOnly } from "../../core/util/Interface.js";
import { Signal } from "../../signal/Signal.js";
import { Source } from "../Source.js";
import { Oscillator } from "./Oscillator.js";
import {
	FatConstructorOptions,
	FatOscillatorOptions,
	generateWaveform,
	NonCustomOscillatorType,
	ToneOscillatorInterface,
	ToneOscillatorType,
} from "./OscillatorInterface.js";
import { assertRange } from "../../core/util/Debug.js";

export { FatOscillatorOptions } from "./OscillatorInterface.js";

/**
 * FatOscillator is an array of oscillators with detune spread between the oscillators
 * @example
 * const fatOsc = new Tone.FatOscillator("Ab3", "sawtooth", 40).toDestination().start();
 * @category Source
 */
export class FatOscillator
	extends Source<FatOscillatorOptions>
	implements ToneOscillatorInterface
{
	readonly name: string = "FatOscillator";

	readonly frequency: Signal<"frequency">;
	readonly detune: Signal<"cents">;

	/**
	 * The array of oscillators
	 */
	private _oscillators: Oscillator[] = [];

	/**
	 * The total spread of the oscillators
	 */
	private _spread: Cents;

	/**
	 * The type of the oscillator
	 */
	private _type: ToneOscillatorType;

	/**
	 * The phase of the oscillators
	 */
	private _phase: Degrees;

	/**
	 * The partials array
	 */
	private _partials: number[];

	/**
	 * The number of partials to use
	 */
	private _partialCount: number;

	/**
	 * @param frequency The oscillator's frequency.
	 * @param type The type of the oscillator.
	 * @param spread The detune spread between the oscillators.
	 */
	constructor(
		frequency?: Frequency,
		type?: ToneOscillatorType,
		spread?: Cents
	);
	constructor(options?: Partial<FatConstructorOptions>);
	constructor() {
		const options = optionsFromArguments(
			FatOscillator.getDefaults(),
			arguments,
			["frequency", "type", "spread"]
		);
		super(options);

		this.frequency = new Signal({
			context: this.context,
			units: "frequency",
			value: options.frequency,
		});
		this.detune = new Signal({
			context: this.context,
			units: "cents",
			value: options.detune,
		});

		this._spread = options.spread;
		this._type = options.type;
		this._phase = options.phase;
		this._partials = options.partials;
		this._partialCount = options.partialCount;

		// set the count initially
		this.count = options.count;

		readOnly(this, ["frequency", "detune"]);
	}

	static getDefaults(): FatOscillatorOptions {
		return Object.assign(Oscillator.getDefaults(), {
			count: 3,
			spread: 20,
			type: "sawtooth",
		});
	}

	/**
	 * start the oscillator
	 */
	protected _start(time: Time): void {
		time = this.toSeconds(time);
		this._forEach((osc) => osc.start(time));
	}

	/**
	 * stop the oscillator
	 */
	protected _stop(time: Time): void {
		time = this.toSeconds(time);
		this._forEach((osc) => osc.stop(time));
	}

	protected _restart(time: Seconds): void {
		this._forEach((osc) => osc.restart(time));
	}

	/**
	 * Iterate over all of the oscillators
	 */
	private _forEach(iterator: (osc: Oscillator, index: number) => void): void {
		for (let i = 0; i < this._oscillators.length; i++) {
			iterator(this._oscillators[i], i);
		}
	}

	/**
	 * The type of the oscillator
	 */
	get type(): ToneOscillatorType {
		return this._type;
	}
	set type(type: ToneOscillatorType) {
		this._type = type;
		this._forEach((osc) => (osc.type = type));
	}

	/**
	 * The detune spread between the oscillators. If "count" is
	 * set to 3 oscillators and the "spread" is set to 40,
	 * the three oscillators would be detuned like this: [-20, 0, 20]
	 * for a total detune spread of 40 cents.
	 * @example
	 * const fatOsc = new Tone.FatOscillator().toDestination().start();
	 * fatOsc.spread = 70;
	 */
	get spread(): Cents {
		return this._spread;
	}
	set spread(spread: Cents) {
		this._spread = spread;
		if (this._oscillators.length > 1) {
			const start = -spread / 2;
			const step = spread / (this._oscillators.length - 1);
			this._forEach((osc, i) => (osc.detune.value = start + step * i));
		}
	}

	/**
	 * The number of detuned oscillators. Must be an integer greater than 1.
	 * @example
	 * const fatOsc = new Tone.FatOscillator("C#3", "sawtooth").toDestination().start();
	 * // use 4 sawtooth oscillators
	 * fatOsc.count = 4;
	 */
	get count(): number {
		return this._oscillators.length;
	}
	set count(count: number) {
		assertRange(count, 1);
		if (this._oscillators.length !== count) {
			// dispose the previous oscillators
			this._forEach((osc) => osc.dispose());
			this._oscillators = [];
			for (let i = 0; i < count; i++) {
				const osc = new Oscillator({
					context: this.context,
					volume: -6 - count * 1.1,
					type: this._type as NonCustomOscillatorType,
					phase: this._phase + (i / count) * 360,
					partialCount: this._partialCount,
					onstop: i === 0 ? () => this.onstop(this) : noOp,
				});
				if (this.type === "custom") {
					osc.partials = this._partials;
				}
				this.frequency.connect(osc.frequency);
				this.detune.connect(osc.detune);
				osc.detune.overridden = false;
				osc.connect(this.output);
				this._oscillators[i] = osc;
			}
			// set the spread
			this.spread = this._spread;
			if (this.state === "started") {
				this._forEach((osc) => osc.start());
			}
		}
	}

	get phase(): Degrees {
		return this._phase;
	}
	set phase(phase: Degrees) {
		this._phase = phase;
		this._forEach(
			(osc, i) => (osc.phase = this._phase + (i / this.count) * 360)
		);
	}

	get baseType(): OscillatorType {
		return this._oscillators[0].baseType;
	}
	set baseType(baseType: OscillatorType) {
		this._forEach((osc) => (osc.baseType = baseType));
		this._type = this._oscillators[0].type;
	}

	get partials(): number[] {
		return this._oscillators[0].partials;
	}
	set partials(partials: number[]) {
		this._partials = partials;
		this._partialCount = this._partials.length;
		if (partials.length) {
			this._type = "custom";
			this._forEach((osc) => (osc.partials = partials));
		}
	}

	get partialCount(): number {
		return this._oscillators[0].partialCount;
	}
	set partialCount(partialCount: number) {
		this._partialCount = partialCount;
		this._forEach((osc) => (osc.partialCount = partialCount));
		this._type = this._oscillators[0].type;
	}

	async asArray(length = 1024): Promise<Float32Array> {
		return generateWaveform(this, length);
	}

	/**
	 * Clean up.
	 */
	dispose(): this {
		super.dispose();
		this.frequency.dispose();
		this.detune.dispose();
		this._forEach((osc) => osc.dispose());
		return this;
	}
}
