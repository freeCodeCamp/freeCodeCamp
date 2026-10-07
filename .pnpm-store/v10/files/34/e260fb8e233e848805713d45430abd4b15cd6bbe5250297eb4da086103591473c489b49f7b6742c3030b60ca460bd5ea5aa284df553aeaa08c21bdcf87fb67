export * from "./NoteUnits.js";

import { Note } from "./NoteUnits.js";

/**
 * A number representing a time in seconds
 * @category Unit
 */
export type Seconds = number;

/**
 * A number used to measure the intensity of a sound on a logarithmic scale.
 * @category Unit
 */
export type Decibels = number;

/**
 * A number that is between [0, 1]
 * @category Unit
 */
export type NormalRange = number;

/**
 * A number that is between [-1, 1]
 * @category Unit
 */
export type AudioRange = number;

/**
 * Half-step note increments, i.e. 12 is an octave above the root. and 1 is a half-step up.
 * @category Unit
 */
export type Interval = number;

/**
 * A number representing the multiplication factor applied to a signal
 * @category Unit
 */
export type GainFactor = number;

/**
 * A number greater than or equal to 0.
 * @category Unit
 */
export type Positive = number;

/**
 * Represents a subdivision of a measure.
 * The number represents the subdivision. "t" represents a triplet. A "." add a half.
 * e.g. "4n" is a quarter note, "4t" is a quarter note triplet, and "4n." is a dotted quarter note.
 * @category Unit
 */
export type Subdivision =
	| "1m"
	| "1n"
	| "1n."
	| `${2 | 4 | 8 | 16 | 32 | 64 | 128 | 256}${"n" | "n." | "t"}`
	| "0";
/**
 * A time object has a subdivision as the keys and a number as the values.
 * @example
 * Tone.Time({
 * 	"2n": 1,
 * 	"8n": 3
 * }).valueOf(); // 2n + 8n * 3
 * @category Unit
 */
export type TimeObject = {
	[sub in Subdivision]?: number;
};

/**
 * Time can be described in a number of ways. Read more [Time](https://github.com/Tonejs/Tone.js/wiki/Time).
 * * Numbers, which will be taken literally as the time (in seconds).
 * * Notation, ("4n", "8t") describes time in BPM and time signature relative values.
 * * TransportTime, ("4:3:2") will also provide tempo and time signature relative times in the form BARS:QUARTERS:SIXTEENTHS.
 * * Frequency, ("8hz") is converted to the length of the cycle in seconds.
 * * Now-Relative, ("+1") prefix any of the above with "+" and it will be interpreted as "the current time plus whatever expression follows".
 * * Object, ({"4n" : 3, "8t" : -1}). The resulting time is equal to the sum of all of the keys multiplied by the values in the object.
 * * No Argument, for methods which accept time, no argument will be interpreted as "now" (i.e. the currentTime).
 * @category Unit
 */
export type Time = string | Seconds | TimeObject | Subdivision;

/**
 * Frequency can be described similar to time, except ultimately the
 * values are converted to frequency instead of seconds. A number
 * is taken literally as the value in hertz. Additionally any of the
 * Time encodings can be used. Note names in the form
 * of NOTE OCTAVE (i.e. C4) are also accepted and converted to their
 * frequency value.
 * @category Unit
 */
export type Frequency = Subdivision | Note | string | Hertz;

/**
 *
 * @category Unit
 */
export type TimeSignature = number | number[];

/**
 * TransportTime describes a position along the Transport's timeline. It is
 * similar to Time in that it uses all the same encodings, but TransportTime specifically
 * pertains to the Transport's timeline, which is startable, stoppable, loopable, and seekable.
 * [Read more](https://github.com/Tonejs/Tone.js/wiki/TransportTime)
 * @category Unit
 */
export type TransportTime = Time;

/**
 * Ticks are the basic subunit of the Transport. They are
 * the smallest unit of time that the Transport supports.
 * @category Unit
 */
export type Ticks = number;

/**
 * Beats per minute
 * @category Unit
 */
export type BPM = number;

/**
 * Angle between 0 and 360.
 * @category Unit
 */
export type Degrees = number;

/**
 * Angle between 0 and 2 * PI.
 * @category Unit
 */
export type Radians = number;

/**
 * A colon-separated representation of time in the form of
 * Bars:Beats:Sixteenths.
 * @category Unit
 */
export type BarsBeatsSixteenths = `${number}:${number}:${number}`;
/**
 * Sampling is the reduction of a continuous signal to a discrete signal.
 * Audio is typically sampled 44100 times per second.
 * @category Unit
 */
export type Samples = number;

/**
 * Hertz are a frequency representation defined as one cycle per second.
 * @category Unit
 */
export type Hertz = number;

/**
 * A Cent is 1/100th of a semitone.
 * e.g. a value of 50 cents would be halfway between two intervals.
 * @category Unit
 */
export type Cents = number;

/**
 * One millisecond is a thousandth of a second.
 * @category Unit
 */
export type Milliseconds = number;

/**
 * A value which is a power of 2
 * @category Unit
 */
export type PowerOfTwo = number;

/**
 * Map the unit name to a unit value
 */
export interface UnitMap {
	number: number;
	decibels: Decibels;
	normalRange: NormalRange;
	audioRange: AudioRange;
	gain: GainFactor;
	positive: Positive;
	time: Time;
	frequency: Frequency;
	transportTime: TransportTime;
	ticks: Ticks;
	bpm: BPM;
	degrees: Degrees;
	radians: Radians;
	samples: Samples;
	hertz: Hertz;
	cents: Cents;
}

/**
 * All of the unit types
 * @category Unit
 */
export type Unit = UnitMap[keyof UnitMap];

/**
 * All of the unit names
 * @category Unit
 */
export type UnitName = keyof UnitMap;
