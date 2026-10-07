import { Tone } from "../Tone.js";
import { Seconds } from "../type/Units.js";
/**
 * Represents a single value which is gettable and settable in a timed way
 */
export declare class TimelineValue<Type> extends Tone {
    readonly name: string;
    /**
     * The timeline which stores the values
     */
    private _timeline;
    /**
     * Hold the value to return if there is no scheduled values
     */
    private _initialValue;
    /**
     * @param initialValue The value to return if there is no scheduled values
     */
    constructor(initialValue: Type);
    /**
     * Set the value at the given time
     */
    set(value: Type, time: Seconds): this;
    /**
     * Get the value at the given time
     */
    get(time: Seconds): Type;
}
