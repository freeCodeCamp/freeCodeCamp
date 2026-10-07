import { TimeBaseUnit, TimeValue } from "./TimeBase.js";
import { TransportTimeClass } from "./TransportTime.js";
import { Seconds, Ticks } from "./Units.js";
/**
 * Ticks is a primitive type for encoding Time values.
 * Ticks can be constructed with or without the `new` keyword. Ticks can be passed
 * into the parameter of any method which takes time as an argument.
 * @example
 * const t = Tone.Ticks("4n"); // a quarter note as ticks
 * @category Unit
 */
export declare class TicksClass extends TransportTimeClass<Ticks> {
    readonly name: string;
    readonly defaultUnits: TimeBaseUnit;
    /**
     * Get the current time in the given units
     */
    protected _now(): Ticks;
    /**
     * Return the value of the beats in the current units
     */
    protected _beatsToUnits(beats: number): Ticks;
    /**
     * Returns the value of a second in the current units
     */
    protected _secondsToUnits(seconds: Seconds): Ticks;
    /**
     * Returns the value of a tick in the current time units
     */
    protected _ticksToUnits(ticks: Ticks): Ticks;
    /**
     * Return the time in ticks
     */
    toTicks(): Ticks;
    /**
     * Return the time in seconds
     */
    toSeconds(): Seconds;
}
/**
 * Convert a time representation to ticks
 * @category Unit
 */
export declare function Ticks(value?: TimeValue, units?: TimeBaseUnit): TicksClass;
