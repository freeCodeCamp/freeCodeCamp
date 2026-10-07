import { Cents, Degrees, Frequency, Seconds, Time } from "../../core/type/Units.js";
import { Signal } from "../../signal/Signal.js";
import { Source } from "../Source.js";
import { AMOscillator } from "./AMOscillator.js";
import { FatOscillator } from "./FatOscillator.js";
import { FMOscillator } from "./FMOscillator.js";
import { Oscillator } from "./Oscillator.js";
import { OmniOscillatorOptions, OmniOscillatorType, ToneOscillatorInterface, ToneOscillatorType } from "./OscillatorInterface.js";
import { PulseOscillator } from "./PulseOscillator.js";
import { PWMOscillator } from "./PWMOscillator.js";
export { OmniOscillatorOptions } from "./OscillatorInterface.js";
/**
 * All of the oscillator types that OmniOscillator can take on
 */
type AnyOscillator = Oscillator | PWMOscillator | PulseOscillator | FatOscillator | AMOscillator | FMOscillator;
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
type IsAmOrFmOscillator<Osc, Ret> = Osc extends AMOscillator ? Ret : Osc extends FMOscillator ? Ret : undefined;
type IsFatOscillator<Osc, Ret> = Osc extends FatOscillator ? Ret : undefined;
type IsPWMOscillator<Osc, Ret> = Osc extends PWMOscillator ? Ret : undefined;
type IsPulseOscillator<Osc, Ret> = Osc extends PulseOscillator ? Ret : undefined;
type IsFMOscillator<Osc, Ret> = Osc extends FMOscillator ? Ret : undefined;
/**
 * OmniOscillator aggregates all of the oscillator types into one.
 * @example
 * return Tone.Offline(() => {
 * 	const omniOsc = new Tone.OmniOscillator("C#4", "pwm").toDestination().start();
 * }, 0.1, 1);
 * @category Source
 */
export declare class OmniOscillator<OscType extends AnyOscillator> extends Source<OmniOscillatorOptions> implements Omit<ToneOscillatorInterface, "type"> {
    readonly name: string;
    readonly frequency: Signal<"frequency">;
    readonly detune: Signal<"cents">;
    /**
     * The oscillator that can switch types
     */
    private _oscillator;
    /**
     * the type of the oscillator source
     */
    private _sourceType;
    /**
     * @param frequency The initial frequency of the oscillator.
     * @param type The type of the oscillator.
     */
    constructor(frequency?: Frequency, type?: OmniOscillatorType);
    constructor(options?: Partial<OmniOscillatorOptions>);
    static getDefaults(): OmniOscillatorOptions;
    /**
     * start the oscillator
     */
    protected _start(time: Time): void;
    /**
     * start the oscillator
     */
    protected _stop(time: Time): void;
    protected _restart(time: Seconds): this;
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
    get type(): OmniOscillatorType;
    set type(type: OmniOscillatorType);
    /**
     * The value is an empty array when the type is not "custom".
     * This is not available on "pwm" and "pulse" oscillator types.
     * @see {@link Oscillator.partials}
     */
    get partials(): number[];
    set partials(partials: number[]);
    get partialCount(): number;
    set partialCount(partialCount: number);
    set(props: Partial<OmniOscillatorOptions>): this;
    /**
     * connect the oscillator to the frequency and detune signals
     */
    private _createNewOscillator;
    get phase(): Degrees;
    set phase(phase: Degrees);
    /**
     * The source type of the oscillator.
     * @example
     * const omniOsc = new Tone.OmniOscillator(440, "fmsquare");
     * console.log(omniOsc.sourceType); // 'fm'
     */
    get sourceType(): OmniOscSourceType;
    set sourceType(sType: OmniOscSourceType);
    private _getOscType;
    /**
     * The base type of the oscillator.
     * @see {@link Oscillator.baseType}
     * @example
     * const omniOsc = new Tone.OmniOscillator(440, "fmsquare4");
     * console.log(omniOsc.sourceType, omniOsc.baseType, omniOsc.partialCount);
     */
    get baseType(): OscillatorType | "pwm" | "pulse";
    set baseType(baseType: OscillatorType | "pwm" | "pulse");
    /**
     * The width of the oscillator when sourceType === "pulse".
     * @see {@link PWMOscillator}
     */
    get width(): IsPulseOscillator<OscType, Signal<"audioRange">>;
    /**
     * The number of detuned oscillators when sourceType === "fat".
     * @see {@link FatOscillator.count}
     */
    get count(): IsFatOscillator<OscType, number>;
    set count(count: IsFatOscillator<OscType, number>);
    /**
     * The detune spread between the oscillators when sourceType === "fat".
     * @see {@link FatOscillator.count}
     */
    get spread(): IsFatOscillator<OscType, Cents>;
    set spread(spread: IsFatOscillator<OscType, Cents>);
    /**
     * The type of the modulator oscillator. Only if the oscillator is set to "am" or "fm" types.
     * @see {@link AMOscillator} or {@link FMOscillator}
     */
    get modulationType(): IsAmOrFmOscillator<OscType, ToneOscillatorType>;
    set modulationType(mType: IsAmOrFmOscillator<OscType, ToneOscillatorType>);
    /**
     * The modulation index when the sourceType === "fm"
     * @see {@link FMOscillator}.
     */
    get modulationIndex(): IsFMOscillator<OscType, Signal<"positive">>;
    /**
     * Harmonicity is the frequency ratio between the carrier and the modulator oscillators.
     * @see {@link AMOscillator} or {@link FMOscillator}
     */
    get harmonicity(): IsAmOrFmOscillator<OscType, Signal<"positive">>;
    /**
     * The modulationFrequency Signal of the oscillator when sourceType === "pwm"
     * see {@link PWMOscillator}
     * @min 0.1
     * @max 5
     */
    get modulationFrequency(): IsPWMOscillator<OscType, Signal<"frequency">>;
    asArray(length?: number): Promise<Float32Array>;
    dispose(): this;
}
