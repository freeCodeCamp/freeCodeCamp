import { Decibels, GainFactor, Hertz, Interval, MidiNote, NormalRange } from "./Units.js";
/**
 * Equal power gain scale. Good for cross-fading.
 * @param  percent (0-1)
 */
export declare function equalPowerScale(percent: NormalRange): number;
/**
 * Convert decibels into gain.
 */
export declare function dbToGain(db: Decibels): GainFactor;
/**
 * Convert gain to decibels.
 */
export declare function gainToDb(gain: GainFactor): Decibels;
/**
 * Convert an interval (in semitones) to a frequency ratio.
 * @param interval the number of semitones above the base note
 * @example
 * Tone.intervalToFrequencyRatio(0); // 1
 * Tone.intervalToFrequencyRatio(12); // 2
 * Tone.intervalToFrequencyRatio(-12); // 0.5
 */
export declare function intervalToFrequencyRatio(interval: Interval): number;
export declare function getA4(): Hertz;
export declare function setA4(freq: Hertz): void;
/**
 * Convert a frequency value to a MIDI note.
 * @param frequency The value to frequency value to convert.
 * @example
 * Tone.ftom(440); // returns 69
 */
export declare function ftom(frequency: Hertz): MidiNote;
/**
 * Convert a frequency to a floating point midi value
 */
export declare function ftomf(frequency: Hertz): number;
/**
 * Convert a MIDI note to frequency value.
 * @param  midi The midi number to convert.
 * @return The corresponding frequency value
 * @example
 * Tone.mtof(69); // 440
 */
export declare function mtof(midi: MidiNote): Hertz;
