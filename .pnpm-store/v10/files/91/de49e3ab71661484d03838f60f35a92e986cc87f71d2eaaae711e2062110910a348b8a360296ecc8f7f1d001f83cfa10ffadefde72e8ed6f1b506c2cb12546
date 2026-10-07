import { BaseContext } from "../context/BaseContext.js";
import { Tone } from "../Tone.js";
import { BPM, Hertz, MidiNote, Milliseconds, Samples, Seconds, Ticks, Time } from "./Units.js";
export type TimeValue = Time | TimeBaseClass<any, any>;
/**
 * The units that the TimeBase can accept. extended by other classes
 */
export type TimeBaseUnit = "s" | "n" | "t" | "m" | "i" | "hz" | "tr" | "samples" | "number";
export interface TypeFunction {
    regexp: RegExp;
    method: (value: string, ...args: string[]) => number;
}
export interface TimeExpression<Type extends number> {
    [key: string]: {
        regexp: RegExp;
        method: (value: string, ...args: string[]) => Type;
    };
}
/**
 * TimeBase is a flexible encoding of time which can be evaluated to and from a string.
 */
export declare abstract class TimeBaseClass<Type extends number, Unit extends string> extends Tone {
    readonly context: BaseContext;
    /**
     * The value of the units
     */
    protected _val?: TimeValue;
    /**
     * The units of time
     */
    protected _units?: Unit;
    /**
     * All of the conversion expressions
     */
    protected _expressions: TimeExpression<Type>;
    /**
     * The default units
     */
    readonly defaultUnits: Unit;
    /**
     * @param context The context associated with the time value. Used to compute
     * Transport and context-relative timing.
     * @param  value  The time value as a number, string or object
     * @param  units  Unit values
     */
    constructor(context: BaseContext, value?: TimeValue, units?: Unit);
    /**
     * All of the time encoding expressions
     */
    protected _getExpressions(): TimeExpression<Type>;
    /**
     * Evaluate the time value. Returns the time in seconds.
     */
    valueOf(): Type;
    /**
     * Returns the value of a frequency in the current units
     */
    protected _frequencyToUnits(freq: Hertz): Type;
    /**
     * Return the value of the beats in the current units
     */
    protected _beatsToUnits(beats: number): Type;
    /**
     * Returns the value of a second in the current units
     */
    protected _secondsToUnits(seconds: Seconds): Type;
    /**
     * Returns the value of a tick in the current time units
     */
    protected _ticksToUnits(ticks: Ticks): Type;
    /**
     * With no arguments, return 'now'
     */
    protected _noArg(): Type;
    /**
     * Return the bpm
     */
    protected _getBpm(): BPM;
    /**
     * Return the timeSignature
     */
    protected _getTimeSignature(): number;
    /**
     * Return the PPQ or 192 if Transport is not available
     */
    protected _getPPQ(): number;
    /**
     * Return the current time in whichever context is relevant
     */
    protected abstract _now(): Type;
    /**
     * Coerce a time type into this units type.
     * @param type Any time type units
     */
    fromType(type: TimeBaseClass<any, any>): this;
    /**
     * Return the value in seconds
     */
    abstract toSeconds(): Seconds;
    /**
     * Return the value as a Midi note
     */
    abstract toMidi(): MidiNote;
    /**
     * Convert the value into ticks
     */
    abstract toTicks(): Ticks;
    /**
     * Return the value in hertz
     */
    toFrequency(): Hertz;
    /**
     * Return the time in samples
     */
    toSamples(): Samples;
    /**
     * Return the time in milliseconds.
     */
    toMilliseconds(): Milliseconds;
}
