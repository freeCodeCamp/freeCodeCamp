import { TimeClass } from "./Time.js";
import { TimeBaseUnit, TimeExpression, TimeValue } from "./TimeBase.js";
import { Frequency, Hertz, Interval, MidiNote, Note, Seconds, Ticks } from "./Units.js";
export type FrequencyUnit = TimeBaseUnit | "midi";
/**
 * Frequency is a primitive type for encoding Frequency values.
 * Eventually all time values are evaluated to hertz using the `valueOf` method.
 * @example
 * Tone.Frequency("C3"); // 261
 * Tone.Frequency(38, "midi");
 * Tone.Frequency("C3").transpose(4);
 * @category Unit
 */
export declare class FrequencyClass<Type extends number = Hertz> extends TimeClass<Type, FrequencyUnit> {
    readonly name: string;
    readonly defaultUnits: FrequencyUnit;
    /**
     * The [concert tuning pitch](https://en.wikipedia.org/wiki/Concert_pitch) which is used
     * to generate all the other pitch values from notes. A4's values in Hertz.
     */
    static get A4(): Hertz;
    static set A4(freq: Hertz);
    protected _getExpressions(): TimeExpression<Type>;
    /**
     * Transposes the frequency by the given number of semitones.
     * @return  A new transposed frequency
     * @example
     * Tone.Frequency("A4").transpose(3); // "C5"
     */
    transpose(interval: Interval): FrequencyClass;
    /**
     * Takes an array of semitone intervals and returns
     * an array of frequencies transposed by those intervals.
     * @return  Returns an array of Frequencies
     * @example
     * Tone.Frequency("A4").harmonize([0, 3, 7]); // ["A4", "C5", "E5"]
     */
    harmonize(intervals: Interval[]): FrequencyClass[];
    /**
     * Return the value of the frequency as a MIDI note
     * @example
     * Tone.Frequency("C4").toMidi(); // 60
     */
    toMidi(): MidiNote;
    /**
     * Return the value of the frequency in Scientific Pitch Notation
     * @example
     * Tone.Frequency(69, "midi").toNote(); // "A4"
     */
    toNote(): Note;
    /**
     * Return the duration of one cycle in seconds.
     */
    toSeconds(): Seconds;
    /**
     * Return the duration of one cycle in ticks
     */
    toTicks(): Ticks;
    /**
     * With no arguments, return 0
     */
    protected _noArg(): Type;
    /**
     * Returns the value of a frequency in the current units
     */
    protected _frequencyToUnits(freq: Hertz): Type;
    /**
     * Returns the value of a tick in the current time units
     */
    protected _ticksToUnits(ticks: Ticks): Type;
    /**
     * Return the value of the beats in the current units
     */
    protected _beatsToUnits(beats: number): Type;
    /**
     * Returns the value of a second in the current units
     */
    protected _secondsToUnits(seconds: Seconds): Type;
    /**
     * Convert a MIDI note to frequency value.
     * @param  midi The midi number to convert.
     * @return The corresponding frequency value
     */
    static mtof(midi: MidiNote): Hertz;
    /**
     * Convert a frequency value to a MIDI note.
     * @param frequency The value to frequency value to convert.
     */
    static ftom(frequency: Hertz): MidiNote;
}
/**
 * Convert a value into a FrequencyClass object.
 * @category Unit
 * @example
 * const midi = Tone.Frequency("C3").toMidi();
 * console.log(midi);
 * @example
 * const hertz = Tone.Frequency(38, "midi").toFrequency();
 * console.log(hertz);
 */
export declare function Frequency(value?: TimeValue | Frequency, units?: FrequencyUnit): FrequencyClass;
