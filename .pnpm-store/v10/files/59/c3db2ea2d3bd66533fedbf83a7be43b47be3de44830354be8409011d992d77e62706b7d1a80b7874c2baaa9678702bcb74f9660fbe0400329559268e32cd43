import { Gain } from "../../core/context/Gain.js";
import { Degrees, Frequency, Seconds } from "../../core/type/Units.js";
import { optionsFromArguments } from "../../core/util/Defaults.js";
import { readOnly } from "../../core/util/Interface.js";
import { AudioToGain } from "../../signal/AudioToGain.js";
import { Multiply } from "../../signal/Multiply.js";
import { Signal } from "../../signal/Signal.js";
import { Source } from "../Source.js";
import { Oscillator } from "./Oscillator.js";
import {
	AMConstructorOptions,
	AMOscillatorOptions,
	generateWaveform,
	NonCustomOscillatorType,
	ToneOscillatorInterface,
	ToneOscillatorType,
} from "./OscillatorInterface.js";

export { AMOscillatorOptions } from "./OscillatorInterface.js";

/**
 * An amplitude modulated oscillator node. It is implemented with
 * two oscillators, one which modulators the other's amplitude
 * through a gain node.
 * ```
 *    +-------------+       +----------+
 *    | Carrier Osc +>------> GainNode |
 *    +-------------+       |          +--->Output
 *                      +---> gain     |
 * +---------------+    |   +----------+
 * | Modulator Osc +>---+
 * +---------------+
 * ```
 * @example
 * return Tone.Offline(() => {
 * 	const amOsc = new Tone.AMOscillator(30, "sine", "square").toDestination().start();
 * }, 0.2, 1);
 * @category Source
 */
export class AMOscillator
	extends Source<AMOscillatorOptions>
	implements ToneOscillatorInterface
{
	readonly name: string = "AMOscillator";

	/**
	 * The carrier oscillator
	 */
	private _carrier: Oscillator;

	readonly frequency: Signal<"frequency">;
	readonly detune: Signal<"cents">;

	/**
	 * The modulating oscillator
	 */
	private _modulator: Oscillator;

	/**
	 * convert the -1,1 output to 0,1
	 */
	private _modulationScale = new AudioToGain({ context: this.context });

	/**
	 * Harmonicity is the frequency ratio between the carrier and the modulator oscillators.
	 * A harmonicity of 1 gives both oscillators the same frequency.
	 * Harmonicity = 2 means a change of an octave.
	 * @example
	 * const amOsc = new Tone.AMOscillator("D2").toDestination().start();
	 * Tone.Transport.scheduleRepeat(time => {
	 * 	amOsc.harmonicity.setValueAtTime(1, time);
	 * 	amOsc.harmonicity.setValueAtTime(0.5, time + 0.5);
	 * 	amOsc.harmonicity.setValueAtTime(1.5, time + 1);
	 * 	amOsc.harmonicity.setValueAtTime(1, time + 2);
	 * 	amOsc.harmonicity.linearRampToValueAtTime(2, time + 4);
	 * }, 4);
	 * Tone.Transport.start();
	 */
	readonly harmonicity: Signal<"positive">;

	/**
	 * the node where the modulation happens
	 */
	private _modulationNode = new Gain({
		context: this.context,
	});

	/**
	 * @param frequency The starting frequency of the oscillator.
	 * @param type The type of the carrier oscillator.
	 * @param modulationType The type of the modulator oscillator.
	 */
	constructor(
		frequency?: Frequency,
		type?: ToneOscillatorType,
		modulationType?: ToneOscillatorType
	);
	constructor(options?: Partial<AMConstructorOptions>);
	constructor() {
		const options = optionsFromArguments(
			AMOscillator.getDefaults(),
			arguments,
			["frequency", "type", "modulationType"]
		);
		super(options);

		this._carrier = new Oscillator({
			context: this.context,
			detune: options.detune,
			frequency: options.frequency,
			onstop: () => this.onstop(this),
			phase: options.phase,
			type: options.type,
		} as OscillatorOptions);
		(this.frequency = this._carrier.frequency),
			(this.detune = this._carrier.detune);

		this._modulator = new Oscillator({
			context: this.context,
			phase: options.phase,
			type: options.modulationType,
		} as OscillatorOptions);

		this.harmonicity = new Multiply({
			context: this.context,
			units: "positive",
			value: options.harmonicity,
		});

		// connections
		this.frequency.chain(this.harmonicity, this._modulator.frequency);
		this._modulator.chain(this._modulationScale, this._modulationNode.gain);
		this._carrier.chain(this._modulationNode, this.output);

		readOnly(this, ["frequency", "detune", "harmonicity"]);
	}

	static getDefaults(): AMOscillatorOptions {
		return Object.assign(Oscillator.getDefaults(), {
			harmonicity: 1,
			modulationType: "square" as NonCustomOscillatorType,
		});
	}

	/**
	 * start the oscillator
	 */
	protected _start(time: Seconds): void {
		this._modulator.start(time);
		this._carrier.start(time);
	}

	/**
	 * stop the oscillator
	 */
	protected _stop(time: Seconds): void {
		this._modulator.stop(time);
		this._carrier.stop(time);
	}

	protected _restart(time: Seconds): void {
		this._modulator.restart(time);
		this._carrier.restart(time);
	}

	/**
	 * The type of the carrier oscillator
	 */
	get type(): ToneOscillatorType {
		return this._carrier.type;
	}
	set type(type: ToneOscillatorType) {
		this._carrier.type = type;
	}

	get baseType(): OscillatorType {
		return this._carrier.baseType;
	}
	set baseType(baseType: OscillatorType) {
		this._carrier.baseType = baseType;
	}

	get partialCount(): number {
		return this._carrier.partialCount;
	}
	set partialCount(partialCount: number) {
		this._carrier.partialCount = partialCount;
	}

	/**
	 * The type of the modulator oscillator
	 */
	get modulationType(): ToneOscillatorType {
		return this._modulator.type;
	}
	set modulationType(type: ToneOscillatorType) {
		this._modulator.type = type;
	}

	get phase(): Degrees {
		return this._carrier.phase;
	}
	set phase(phase: Degrees) {
		this._carrier.phase = phase;
		this._modulator.phase = phase;
	}

	get partials(): number[] {
		return this._carrier.partials;
	}
	set partials(partials: number[]) {
		this._carrier.partials = partials;
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
		this.harmonicity.dispose();
		this._carrier.dispose();
		this._modulator.dispose();
		this._modulationNode.dispose();
		this._modulationScale.dispose();
		return this;
	}
}
