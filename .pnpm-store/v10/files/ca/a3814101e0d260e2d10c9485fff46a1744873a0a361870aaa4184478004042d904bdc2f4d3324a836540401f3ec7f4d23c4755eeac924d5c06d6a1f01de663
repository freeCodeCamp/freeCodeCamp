import {
	AudioRange,
	Cents,
	Degrees,
	Frequency,
	Positive,
} from "../../core/type/Units.js";
import { Omit } from "../../core/util/Interface.js";
import { Signal } from "../../signal/Signal.js";
import { SourceOptions } from "../Source.js";
import { OfflineContext } from "../../core/context/OfflineContext.js";

/**
 * The common interface of all Oscillators
 */
export interface ToneOscillatorInterface {
	/**
	 * The oscillator type without the partialsCount appended to the end
	 * @example
	 * const osc = new Tone.Oscillator();
	 * osc.type = "sine2";
	 * console.log(osc.baseType); // "sine"
	 */
	baseType: OscillatorType | "pulse" | "pwm";

	/**
	 * The oscillator's type. Also capable of setting the first x number of partials of the oscillator.
	 * For example: "sine4" would set be the first 4 partials of the sine wave and "triangle8" would
	 * set the first 8 partials of the triangle wave.
	 * @example
	 * return Tone.Offline(() => {
	 * 	const osc = new Tone.Oscillator().toDestination().start();
	 * 	osc.type = "sine2";
	 * }, 0.1, 1);
	 */
	type: ExtendedToneOscillatorType;

	/**
	 * The frequency value of the oscillator
	 * @example
	 * const osc = new Tone.FMOscillator("Bb4").toDestination().start();
	 * osc.frequency.rampTo("D2", 3);
	 */
	readonly frequency: Signal<"frequency">;

	/**
	 * The detune value in cents (100th of a semitone).
	 * @example
	 * const osc = new Tone.PulseOscillator("F3").toDestination().start();
	 * // pitch it 1 octave = 12 semitones = 1200 cents
	 * osc.detune.setValueAtTime(-1200, Tone.now());
	 * osc.detune.setValueAtTime(1200, Tone.now() + 0.5);
	 * osc.detune.linearRampToValueAtTime(0, Tone.now() + 1);
	 * osc.stop(Tone.now() + 1.5);
	 */
	readonly detune: Signal<"cents">;

	/**
	 * The phase is the starting position within the oscillator's cycle. For example
	 * a phase of 180 would start halfway through the oscillator's cycle.
	 * @example
	 * return Tone.Offline(() => {
	 * 	const osc = new Tone.Oscillator({
	 * 		frequency: 20,
	 * 		phase: 90
	 * 	}).toDestination().start();
	 * }, 0.1, 1);
	 */
	phase: Degrees;

	/**
	 * The partials describes the relative amplitude of each of the harmonics of the oscillator.
	 * The first value in the array is the first harmonic (i.e. the fundamental frequency), the
	 * second harmonic is an octave up, the third harmonic is an octave and a fifth, etc. The resulting
	 * oscillator output is composed of a sine tone at the relative amplitude at each of the harmonic intervals.
	 *
	 * Setting this value will automatically set the type to "custom".
	 * The value is an empty array when the type is not "custom".
	 * @example
	 * const osc = new Tone.Oscillator("F3").toDestination().start();
	 * setInterval(() => {
	 * 	// generate 8 random partials
	 * 	osc.partials = new Array(8).fill(0).map(() => Math.random());
	 * }, 1000);
	 */
	partials: number[];

	/**
	 * 'partialCount' offers an alternative way to set the number of used partials.
	 * When partialCount is 0, the maximum number of partials are used when representing
	 * the waveform using the periodicWave. When 'partials' is set, this value is
	 * not settable, but equals the length of the partials array. A square wave wave
	 * is composed of only odd harmonics up through the harmonic series. Partial count
	 * can limit the number of harmonics which are used to generate the waveform.
	 * @example
	 * const osc = new Tone.Oscillator("C3", "square").toDestination().start();
	 * osc.partialCount = 1;
	 * setInterval(() => {
	 * 	osc.partialCount++;
	 * 	console.log(osc.partialCount);
	 * }, 500);
	 */
	partialCount?: number;

	/**
	 * Returns an array of values which represents the waveform.
	 * @param length The length of the waveform to return
	 */
	asArray(length: number): Promise<Float32Array>;
}

/**
 * Render a segment of the oscillator to an offline context and return the results as an array
 */
export async function generateWaveform(
	instance: any,
	length: number
): Promise<Float32Array> {
	const duration = length / instance.context.sampleRate;
	const context = new OfflineContext(
		1,
		duration,
		instance.context.sampleRate
	);
	const clone = new instance.constructor(
		Object.assign(instance.get(), {
			// should do 2 iterations
			frequency: 2 / duration,
			// zero out the detune
			detune: 0,
			context,
		})
	).toDestination();
	clone.start(0);
	const buffer = await context.render();
	return buffer.getChannelData(0);
}

/**
 * The supported number of partials
 */
type PartialsRange =
	| 1
	| 2
	| 3
	| 4
	| 5
	| 6
	| 7
	| 8
	| 9
	| 10
	| 11
	| 12
	| 13
	| 14
	| 15
	| 16
	| 17
	| 18
	| 19
	| 20
	| 21
	| 22
	| 23
	| 24
	| 25
	| 26
	| 27
	| 28
	| 29
	| 30
	| 31
	| 32;

/**
 * Oscillators with partials
 */
type SineWithPartials = `sine${PartialsRange}`;

type SquareWithPartials = `square${PartialsRange}`;

type SawtoothWithPartials = `sawtooth${PartialsRange}`;

type TriangleWithPartials = `triangle${PartialsRange}`;

type TypeWithPartials =
	| SineWithPartials
	| SquareWithPartials
	| TriangleWithPartials
	| SawtoothWithPartials;

interface BaseOscillatorOptions extends SourceOptions {
	frequency: Frequency;
	detune: Cents;
	phase: Degrees;
}

export type NonCustomOscillatorType = Exclude<OscillatorType, "custom">;

type AllNonCustomOscillatorType = NonCustomOscillatorType | TypeWithPartials;

export type ToneOscillatorType = AllNonCustomOscillatorType | "custom";

export type ExtendedToneOscillatorType = ToneOscillatorType | "pwm" | "pulse";

/**
 * Oscillator Interfaces
 */
interface ToneCustomOscillatorOptions extends BaseOscillatorOptions {
	type: "custom";
	partials: number[];
}

interface ToneTypeOscillatorOptions extends BaseOscillatorOptions {
	type: NonCustomOscillatorType;
	partialCount?: number;
}

interface TonePartialOscillatorOptions extends BaseOscillatorOptions {
	type: TypeWithPartials;
}

export type ToneOscillatorConstructorOptions =
	| ToneCustomOscillatorOptions
	| ToneTypeOscillatorOptions
	| TonePartialOscillatorOptions;

export interface ToneOscillatorOptions extends BaseOscillatorOptions {
	type: ToneOscillatorType;
	partialCount: number;
	partials: number[];
}

/**
 * FMOscillator Interface
 */
interface FMBaseOscillatorOptions extends BaseOscillatorOptions {
	harmonicity: Positive;
	modulationIndex: Positive;
	modulationType: AllNonCustomOscillatorType;
}

interface FMCustomOscillatorOptions extends FMBaseOscillatorOptions {
	type: "custom";
	partials: number[];
}

interface FMTypeOscillatorOptions extends FMBaseOscillatorOptions {
	type: NonCustomOscillatorType;
	partialsCount?: number;
}

interface FMPartialsOscillatorOptions extends FMBaseOscillatorOptions {
	type: TypeWithPartials;
}

export type FMConstructorOptions =
	| FMTypeOscillatorOptions
	| FMCustomOscillatorOptions
	| FMPartialsOscillatorOptions;

export interface FMOscillatorOptions extends ToneOscillatorOptions {
	harmonicity: Positive;
	modulationIndex: Positive;
	modulationType: AllNonCustomOscillatorType;
}

/**
 * AMOscillator Interface
 */
interface AMBaseOscillatorOptions extends BaseOscillatorOptions {
	harmonicity: Positive;
	modulationType: AllNonCustomOscillatorType;
}

interface AMCustomOscillatorOptions extends AMBaseOscillatorOptions {
	type: "custom";
	partials: number[];
}

interface AMTypeOscillatorOptions extends AMBaseOscillatorOptions {
	type: NonCustomOscillatorType;
	partialsCount?: number;
}

interface AMPartialsOscillatorOptions extends AMBaseOscillatorOptions {
	type: TypeWithPartials;
}

export type AMConstructorOptions =
	| AMCustomOscillatorOptions
	| AMTypeOscillatorOptions
	| AMPartialsOscillatorOptions;

export interface AMOscillatorOptions extends ToneOscillatorOptions {
	harmonicity: Positive;
	modulationType: AllNonCustomOscillatorType;
}
/**
 * FatOscillator
 */
interface FatBaseOscillatorOptions extends BaseOscillatorOptions {
	spread: Cents;
	count: Positive;
}

interface FatCustomOscillatorOptions extends FatBaseOscillatorOptions {
	type: "custom";
	partials: number[];
}

interface FatTypeOscillatorOptions extends FatBaseOscillatorOptions {
	type: NonCustomOscillatorType;
	partialCount?: number;
}

interface FatPartialsOscillatorOptions extends FatBaseOscillatorOptions {
	type: TypeWithPartials;
}

export type FatConstructorOptions =
	| FatCustomOscillatorOptions
	| FatTypeOscillatorOptions
	| FatPartialsOscillatorOptions;

export interface FatOscillatorOptions extends ToneOscillatorOptions {
	spread: Cents;
	count: Positive;
}

/**
 * Pulse Oscillator
 */
export interface PulseOscillatorOptions extends BaseOscillatorOptions {
	type: "pulse";
	width: AudioRange;
}

/**
 * PWM Oscillator
 */
export interface PWMOscillatorOptions extends BaseOscillatorOptions {
	type: "pwm";
	modulationFrequency: Frequency;
}

/**
 * OMNI OSCILLATOR
 */

/**
 * FM Oscillators with partials
 */
type FMSineWithPartials = `fmsine${PartialsRange}`;

type FMSquareWithPartials = `fmsquare${PartialsRange}`;

type FMSawtoothWithPartials = `fmsawtooth${PartialsRange}`;

type FMTriangleWithPartials = `fmtriangle${PartialsRange}`;

type FMTypeWithPartials =
	| FMSineWithPartials
	| FMSquareWithPartials
	| FMSawtoothWithPartials
	| FMTriangleWithPartials;

/**
 * AM Oscillators with partials
 */
type AMSineWithPartials = `amsine${PartialsRange}`;

type AMSquareWithPartials = `amsquare${PartialsRange}`;

type AMSawtoothWithPartials = `amsawtooth${PartialsRange}`;

type AMTriangleWithPartials = `amtriangle${PartialsRange}`;

type AMTypeWithPartials =
	| AMSineWithPartials
	| AMSquareWithPartials
	| AMSawtoothWithPartials
	| AMTriangleWithPartials;

/**
 * Fat Oscillators with partials
 */
type FatSineWithPartials = `fatsine${PartialsRange}`;

type FatSquareWithPartials = `fatsquare${PartialsRange}`;

type FatSawtoothWithPartials = `fatsawtooth${PartialsRange}`;

type FatTriangleWithPartials = `fattriangle${PartialsRange}`;

type FatTypeWithPartials =
	| FatSineWithPartials
	| FatSquareWithPartials
	| FatSawtoothWithPartials
	| FatTriangleWithPartials;

/**
 * Omni FM
 */
interface OmniFMCustomOscillatorOptions extends FMBaseOscillatorOptions {
	type: "fmcustom";
	partials: number[];
}

interface OmniFMTypeOscillatorOptions extends FMBaseOscillatorOptions {
	type: "fmsine" | "fmsquare" | "fmsawtooth" | "fmtriangle";
	partialsCount?: number;
}

interface OmniFMPartialsOscillatorOptions extends FMBaseOscillatorOptions {
	type: FMTypeWithPartials;
}

/**
 * Omni AM
 */
interface OmniAMCustomOscillatorOptions extends AMBaseOscillatorOptions {
	type: "amcustom";
	partials: number[];
}

interface OmniAMTypeOscillatorOptions extends AMBaseOscillatorOptions {
	type: "amsine" | "amsquare" | "amsawtooth" | "amtriangle";
	partialsCount?: number;
}

interface OmniAMPartialsOscillatorOptions extends AMBaseOscillatorOptions {
	type: AMTypeWithPartials;
}

/**
 * Omni Fat
 */
interface OmniFatCustomOscillatorOptions extends FatBaseOscillatorOptions {
	type: "fatcustom";
	partials: number[];
}

interface OmniFatTypeOscillatorOptions extends FatBaseOscillatorOptions {
	type: "fatsine" | "fatsquare" | "fatsawtooth" | "fattriangle";
	partialsCount?: number;
}

interface OmniFatPartialsOscillatorOptions extends FatBaseOscillatorOptions {
	type: FatTypeWithPartials;
}

export type OmniOscillatorType =
	| "fatsine"
	| "fatsquare"
	| "fatsawtooth"
	| "fattriangle"
	| "fatcustom"
	| FatTypeWithPartials
	| "fmsine"
	| "fmsquare"
	| "fmsawtooth"
	| "fmtriangle"
	| "fmcustom"
	| FMTypeWithPartials
	| "amsine"
	| "amsquare"
	| "amsawtooth"
	| "amtriangle"
	| "amcustom"
	| AMTypeWithPartials
	| TypeWithPartials
	| OscillatorType
	| "pulse"
	| "pwm";

export type OmniOscillatorOptions =
	| PulseOscillatorOptions
	| PWMOscillatorOptions
	| OmniFatCustomOscillatorOptions
	| OmniFatTypeOscillatorOptions
	| OmniFatPartialsOscillatorOptions
	| OmniFMCustomOscillatorOptions
	| OmniFMTypeOscillatorOptions
	| OmniFMPartialsOscillatorOptions
	| OmniAMCustomOscillatorOptions
	| OmniAMTypeOscillatorOptions
	| OmniAMPartialsOscillatorOptions
	| ToneOscillatorConstructorOptions;

type OmitSourceOptions<T extends BaseOscillatorOptions> = Omit<
	T,
	"frequency" | "detune" | "context"
>;

/**
 * The settable options for the omni oscillator inside of the source which excludes certain attributes that are defined by the parent class
 */
export type OmniOscillatorSynthOptions =
	| OmitSourceOptions<PulseOscillatorOptions>
	| OmitSourceOptions<PWMOscillatorOptions>
	| OmitSourceOptions<OmniFatCustomOscillatorOptions>
	| OmitSourceOptions<OmniFatTypeOscillatorOptions>
	| OmitSourceOptions<OmniFatPartialsOscillatorOptions>
	| OmitSourceOptions<OmniFMCustomOscillatorOptions>
	| OmitSourceOptions<OmniFMTypeOscillatorOptions>
	| OmitSourceOptions<OmniFMPartialsOscillatorOptions>
	| OmitSourceOptions<OmniAMCustomOscillatorOptions>
	| OmitSourceOptions<OmniAMTypeOscillatorOptions>
	| OmitSourceOptions<OmniAMPartialsOscillatorOptions>
	| OmitSourceOptions<ToneCustomOscillatorOptions>
	| OmitSourceOptions<ToneTypeOscillatorOptions>
	| OmitSourceOptions<TonePartialOscillatorOptions>;
