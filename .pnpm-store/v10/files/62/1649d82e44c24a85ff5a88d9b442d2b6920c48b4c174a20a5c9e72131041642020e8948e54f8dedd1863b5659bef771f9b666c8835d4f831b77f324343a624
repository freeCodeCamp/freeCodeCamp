import {
	Cents,
	Degrees,
	Frequency,
	Seconds,
	Time,
} from "../../core/type/Units.js";
import { optionsFromArguments } from "../../core/util/Defaults.js";
import { readOnly } from "../../core/util/Interface.js";
import { isNumber, isString } from "../../core/util/TypeCheck.js";
import { Signal } from "../../signal/Signal.js";
import { Source } from "../Source.js";
import { AMOscillator } from "./AMOscillator.js";
import { FatOscillator } from "./FatOscillator.js";
import { FMOscillator } from "./FMOscillator.js";
import { Oscillator } from "./Oscillator.js";
import {
	generateWaveform,
	OmniOscillatorOptions,
	OmniOscillatorType,
	ToneOscillatorInterface,
	ToneOscillatorType,
} from "./OscillatorInterface.js";
import { PulseOscillator } from "./PulseOscillator.js";
import { PWMOscillator } from "./PWMOscillator.js";

export { OmniOscillatorOptions } from "./OscillatorInterface.js";

/**
 * All of the oscillator types that OmniOscillator can take on
 */
type AnyOscillator =
	| Oscillator
	| PWMOscillator
	| PulseOscillator
	| FatOscillator
	| AMOscillator
	| FMOscillator;

/**
 * All of the Oscillator constructor types mapped to their name.
 */
interface OmniOscillatorSource {
	fm: FMOscillator;
	am: AMOscillator;
	pwm: PWMOscillator;
	pulse: PulseOscillator;
	oscillator: Oscillator;
	fat: FatOscillator;
}

/**
 * The available oscillator types.
 */
export type OmniOscSourceType = keyof OmniOscillatorSource;

// Conditional Types
type IsAmOrFmOscillator<Osc, Ret> = Osc extends AMOscillator
	? Ret
	: Osc extends FMOscillator
		? Ret
		: undefined;
type IsFatOscillator<Osc, Ret> = Osc extends FatOscillator ? Ret : undefined;
type IsPWMOscillator<Osc, Ret> = Osc extends PWMOscillator ? Ret : undefined;
type IsPulseOscillator<Osc, Ret> = Osc extends PulseOscillator
	? Ret
	: undefined;
type IsFMOscillator<Osc, Ret> = Osc extends FMOscillator ? Ret : undefined;

type AnyOscillatorConstructor = new (...args: any[]) => AnyOscillator;

const OmniOscillatorSourceMap: {
	[key in OmniOscSourceType]: AnyOscillatorConstructor;
} = {
	am: AMOscillator,
	fat: FatOscillator,
	fm: FMOscillator,
	oscillator: Oscillator,
	pulse: PulseOscillator,
	pwm: PWMOscillator,
};

/**
 * OmniOscillator aggregates all of the oscillator types into one.
 * @example
 * return Tone.Offline(() => {
 * 	const omniOsc = new Tone.OmniOscillator("C#4", "pwm").toDestination().start();
 * }, 0.1, 1);
 * @category Source
 */
export class OmniOscillator<OscType extends AnyOscillator>
	extends Source<OmniOscillatorOptions>
	implements Omit<ToneOscillatorInterface, "type">
{
	readonly name: string = "OmniOscillator";

	readonly frequency: Signal<"frequency">;
	readonly detune: Signal<"cents">;

	/**
	 * The oscillator that can switch types
	 */
	private _oscillator!: AnyOscillator;

	/**
	 * the type of the oscillator source
	 */
	private _sourceType!: OmniOscSourceType;

	/**
	 * @param frequency The initial frequency of the oscillator.
	 * @param type The type of the oscillator.
	 */
	constructor(frequency?: Frequency, type?: OmniOscillatorType);
	constructor(options?: Partial<OmniOscillatorOptions>);
	constructor() {
		const options = optionsFromArguments(
			OmniOscillator.getDefaults(),
			arguments,
			["frequency", "type"]
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
		readOnly(this, ["frequency", "detune"]);

		// set the options
		this.set(options);
	}

	static getDefaults(): OmniOscillatorOptions {
		return Object.assign(
			Oscillator.getDefaults(),
			FMOscillator.getDefaults(),
			AMOscillator.getDefaults(),
			FatOscillator.getDefaults(),
			PulseOscillator.getDefaults(),
			PWMOscillator.getDefaults()
		);
	}

	/**
	 * start the oscillator
	 */
	protected _start(time: Time): void {
		this._oscillator.start(time);
	}

	/**
	 * start the oscillator
	 */
	protected _stop(time: Time): void {
		this._oscillator.stop(time);
	}

	protected _restart(time: Seconds): this {
		this._oscillator.restart(time);
		return this;
	}

	/**
	 * The type of the oscillator. Can be any of the basic types: sine, square, triangle, sawtooth. Or
	 * prefix the basic types with "fm", "am", or "fat" to use the FMOscillator, AMOscillator or FatOscillator
	 * types. The oscillator could also be set to "pwm" or "pulse". All of the parameters of the
	 * oscillator's class are accessible when the oscillator is set to that type, but throws an error
	 * when it's not.
	 * @example
	 * const omniOsc = new Tone.OmniOscillator().toDestination().start();
	 * omniOsc.type = "pwm";
	 * // modulationFrequency is parameter which is available
	 * // only when the type is "pwm".
	 * omniOsc.modulationFrequency.value = 0.5;
	 */
	get type(): OmniOscillatorType {
		let prefix = "";
		if (["am", "fm", "fat"].some((p) => this._sourceType === p)) {
			prefix = this._sourceType;
		}
		return (prefix + this._oscillator.type) as OmniOscillatorType;
	}
	set type(type) {
		if (type.substr(0, 2) === "fm") {
			this._createNewOscillator("fm");
			this._oscillator = this._oscillator as FMOscillator;
			this._oscillator.type = type.substr(2) as ToneOscillatorType;
		} else if (type.substr(0, 2) === "am") {
			this._createNewOscillator("am");
			this._oscillator = this._oscillator as AMOscillator;
			this._oscillator.type = type.substr(2) as ToneOscillatorType;
		} else if (type.substr(0, 3) === "fat") {
			this._createNewOscillator("fat");
			this._oscillator = this._oscillator as FatOscillator;
			this._oscillator.type = type.substr(3) as ToneOscillatorType;
		} else if (type === "pwm") {
			this._createNewOscillator("pwm");
			this._oscillator = this._oscillator as PWMOscillator;
		} else if (type === "pulse") {
			this._createNewOscillator("pulse");
		} else {
			this._createNewOscillator("oscillator");
			this._oscillator = this._oscillator as Oscillator;
			this._oscillator.type = type as ToneOscillatorType;
		}
	}

	/**
	 * The value is an empty array when the type is not "custom".
	 * This is not available on "pwm" and "pulse" oscillator types.
	 * @see {@link Oscillator.partials}
	 */
	get partials(): number[] {
		return this._oscillator.partials;
	}
	set partials(partials) {
		if (
			!this._getOscType(this._oscillator, "pulse") &&
			!this._getOscType(this._oscillator, "pwm")
		) {
			this._oscillator.partials = partials;
		}
	}

	get partialCount(): number {
		return this._oscillator.partialCount;
	}
	set partialCount(partialCount) {
		if (
			!this._getOscType(this._oscillator, "pulse") &&
			!this._getOscType(this._oscillator, "pwm")
		) {
			this._oscillator.partialCount = partialCount;
		}
	}

	set(props: Partial<OmniOscillatorOptions>): this {
		// make sure the type is set first
		if (Reflect.has(props, "type") && props.type) {
			this.type = props.type;
		}
		// then set the rest
		super.set(props);
		return this;
	}

	/**
	 * connect the oscillator to the frequency and detune signals
	 */
	private _createNewOscillator(oscType: OmniOscSourceType): void {
		if (oscType !== this._sourceType) {
			this._sourceType = oscType;
			const OscConstructor = OmniOscillatorSourceMap[oscType];
			// short delay to avoid clicks on the change
			const now = this.now();
			if (this._oscillator) {
				const oldOsc = this._oscillator;
				oldOsc.stop(now);
				// dispose the old one
				this.context.setTimeout(() => oldOsc.dispose(), this.blockTime);
			}
			this._oscillator = new OscConstructor({
				context: this.context,
			});
			this.frequency.connect(this._oscillator.frequency);
			this.detune.connect(this._oscillator.detune);
			this._oscillator.connect(this.output);
			this._oscillator.onstop = () => this.onstop(this);
			if (this.state === "started") {
				this._oscillator.start(now);
			}
		}
	}

	get phase(): Degrees {
		return this._oscillator.phase;
	}
	set phase(phase) {
		this._oscillator.phase = phase;
	}

	/**
	 * The source type of the oscillator.
	 * @example
	 * const omniOsc = new Tone.OmniOscillator(440, "fmsquare");
	 * console.log(omniOsc.sourceType); // 'fm'
	 */
	get sourceType(): OmniOscSourceType {
		return this._sourceType;
	}
	set sourceType(sType) {
		// the basetype defaults to sine
		let baseType = "sine";
		if (
			this._oscillator.type !== "pwm" &&
			this._oscillator.type !== "pulse"
		) {
			baseType = this._oscillator.type;
		}

		// set the type
		if (sType === "fm") {
			this.type = ("fm" + baseType) as OmniOscillatorType;
		} else if (sType === "am") {
			this.type = ("am" + baseType) as OmniOscillatorType;
		} else if (sType === "fat") {
			this.type = ("fat" + baseType) as OmniOscillatorType;
		} else if (sType === "oscillator") {
			this.type = baseType as OmniOscillatorType;
		} else if (sType === "pulse") {
			this.type = "pulse";
		} else if (sType === "pwm") {
			this.type = "pwm";
		}
	}

	private _getOscType<SourceType extends OmniOscSourceType>(
		osc: AnyOscillator,
		sourceType: SourceType
	): osc is OmniOscillatorSource[SourceType] {
		return osc instanceof OmniOscillatorSourceMap[sourceType];
	}

	/**
	 * The base type of the oscillator.
	 * @see {@link Oscillator.baseType}
	 * @example
	 * const omniOsc = new Tone.OmniOscillator(440, "fmsquare4");
	 * console.log(omniOsc.sourceType, omniOsc.baseType, omniOsc.partialCount);
	 */
	get baseType(): OscillatorType | "pwm" | "pulse" {
		return this._oscillator.baseType;
	}
	set baseType(baseType) {
		if (
			!this._getOscType(this._oscillator, "pulse") &&
			!this._getOscType(this._oscillator, "pwm") &&
			baseType !== "pulse" &&
			baseType !== "pwm"
		) {
			this._oscillator.baseType = baseType;
		}
	}

	/**
	 * The width of the oscillator when sourceType === "pulse".
	 * @see {@link PWMOscillator}
	 */
	get width(): IsPulseOscillator<OscType, Signal<"audioRange">> {
		if (this._getOscType(this._oscillator, "pulse")) {
			return this._oscillator.width as IsPulseOscillator<
				OscType,
				Signal<"audioRange">
			>;
		} else {
			return undefined as IsPulseOscillator<
				OscType,
				Signal<"audioRange">
			>;
		}
	}

	/**
	 * The number of detuned oscillators when sourceType === "fat".
	 * @see {@link FatOscillator.count}
	 */
	get count(): IsFatOscillator<OscType, number> {
		if (this._getOscType(this._oscillator, "fat")) {
			return this._oscillator.count as IsFatOscillator<OscType, number>;
		} else {
			return undefined as IsFatOscillator<OscType, number>;
		}
	}
	set count(count) {
		if (this._getOscType(this._oscillator, "fat") && isNumber(count)) {
			this._oscillator.count = count;
		}
	}

	/**
	 * The detune spread between the oscillators when sourceType === "fat".
	 * @see {@link FatOscillator.count}
	 */
	get spread(): IsFatOscillator<OscType, Cents> {
		if (this._getOscType(this._oscillator, "fat")) {
			return this._oscillator.spread as IsFatOscillator<OscType, Cents>;
		} else {
			return undefined as IsFatOscillator<OscType, Cents>;
		}
	}
	set spread(spread) {
		if (this._getOscType(this._oscillator, "fat") && isNumber(spread)) {
			this._oscillator.spread = spread;
		}
	}

	/**
	 * The type of the modulator oscillator. Only if the oscillator is set to "am" or "fm" types.
	 * @see {@link AMOscillator} or {@link FMOscillator}
	 */
	get modulationType(): IsAmOrFmOscillator<OscType, ToneOscillatorType> {
		if (
			this._getOscType(this._oscillator, "fm") ||
			this._getOscType(this._oscillator, "am")
		) {
			return this._oscillator.modulationType as IsAmOrFmOscillator<
				OscType,
				ToneOscillatorType
			>;
		} else {
			return undefined as IsAmOrFmOscillator<OscType, ToneOscillatorType>;
		}
	}
	set modulationType(mType) {
		if (
			(this._getOscType(this._oscillator, "fm") ||
				this._getOscType(this._oscillator, "am")) &&
			isString(mType)
		) {
			this._oscillator.modulationType = mType;
		}
	}

	/**
	 * The modulation index when the sourceType === "fm"
	 * @see {@link FMOscillator}.
	 */
	get modulationIndex(): IsFMOscillator<OscType, Signal<"positive">> {
		if (this._getOscType(this._oscillator, "fm")) {
			return this._oscillator.modulationIndex as IsFMOscillator<
				OscType,
				Signal<"positive">
			>;
		} else {
			return undefined as IsFMOscillator<OscType, Signal<"positive">>;
		}
	}

	/**
	 * Harmonicity is the frequency ratio between the carrier and the modulator oscillators.
	 * @see {@link AMOscillator} or {@link FMOscillator}
	 */
	get harmonicity(): IsAmOrFmOscillator<OscType, Signal<"positive">> {
		if (
			this._getOscType(this._oscillator, "fm") ||
			this._getOscType(this._oscillator, "am")
		) {
			return this._oscillator.harmonicity as IsAmOrFmOscillator<
				OscType,
				Signal<"positive">
			>;
		} else {
			return undefined as IsAmOrFmOscillator<OscType, Signal<"positive">>;
		}
	}

	/**
	 * The modulationFrequency Signal of the oscillator when sourceType === "pwm"
	 * see {@link PWMOscillator}
	 * @min 0.1
	 * @max 5
	 */
	get modulationFrequency(): IsPWMOscillator<OscType, Signal<"frequency">> {
		if (this._getOscType(this._oscillator, "pwm")) {
			return this._oscillator.modulationFrequency as IsPWMOscillator<
				OscType,
				Signal<"frequency">
			>;
		} else {
			return undefined as IsPWMOscillator<OscType, Signal<"frequency">>;
		}
	}

	async asArray(length = 1024): Promise<Float32Array> {
		return generateWaveform(this, length);
	}

	dispose(): this {
		super.dispose();
		this.detune.dispose();
		this.frequency.dispose();
		this._oscillator.dispose();
		return this;
	}
}
