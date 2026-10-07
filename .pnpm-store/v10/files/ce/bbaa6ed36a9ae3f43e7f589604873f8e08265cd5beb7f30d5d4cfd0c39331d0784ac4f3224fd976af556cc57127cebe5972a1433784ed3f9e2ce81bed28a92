import { TimeBaseClass, TimeBaseUnit, TimeExpression, TimeValue } from "./TimeBase.js";
import { BarsBeatsSixteenths, MidiNote, Seconds, Subdivision, Ticks, Time } from "./Units.js";
/**
 * TimeClass is a primitive type for encoding and decoding Time values.
 * TimeClass can be passed into the parameter of any method which takes time as an argument.
 * @param  val    The time value.
 * @param  units  The units of the value.
 * @example
 * const time = Tone.Time("4n"); // a quarter note
 * @category Unit
 */
export declare class TimeClass<Type extends Seconds | Ticks = Seconds, Unit extends string = TimeBaseUnit> extends TimeBaseClass<Type, Unit> {
    readonly name: string;
    protected _getExpressions(): TimeExpression<Type>;
    /**
     * Quantize the time by the given subdivision. Optionally add a
     * percentage which will move the time value towards the ideal
     * quantized value by that percentage.
     * @param  subdiv    The subdivision to quantize to
     * @param  percent  Move the time value towards the quantized value by a percentage.
     * @example
     * Tone.Time(21).quantize(2); // returns 22
     * Tone.Time(0.6).quantize("4n", 0.5); // returns 0.55
     */
    quantize(subdiv: Time, percent?: number): Type;
    /**
     * Convert a Time to Notation. The notation values are will be the
     * closest representation between 1m to 128th note.
     * @return {Notation}
     * @example
     * // if the Transport is at 120bpm:
     * Tone.Time(2).toNotation(); // returns "1m"
     */
    toNotation(): Subdivision;
    /**
     * Return the time encoded as Bars:Beats:Sixteenths.
     */
    toBarsBeatsSixteenths(): BarsBeatsSixteenths;
    /**
     * Return the time in ticks.
     */
    toTicks(): Ticks;
    /**
     * Return the time in seconds.
     */
    toSeconds(): Seconds;
    /**
     * Return the value as a midi note.
     */
    toMidi(): MidiNote;
    protected _now(): Type;
}
/**
 * Create a TimeClass from a time string or number. The time is computed against the
 * global Tone.Context. To use a specific context, use {@link TimeClass}
 * @param value A value which represents time
 * @param units The value's units if they can't be inferred by the value.
 * @category Unit
 * @example
 * const time = Tone.Time("4n").toSeconds();
 * console.log(time);
 * @example
 * const note = Tone.Time(1).toNotation();
 * console.log(note);
 * @example
 * const freq = Tone.Time(0.5).toFrequency();
 * console.log(freq);
 */
export declare function Time(value?: TimeValue, units?: TimeBaseUnit): TimeClass<Seconds>;
