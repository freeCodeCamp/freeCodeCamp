import { Loop, LoopOptions } from "./Loop.js";
import { PatternName } from "./PatternGenerator.js";
import { ToneEventCallback } from "./ToneEvent.js";
import { Seconds } from "../core/type/Units.js";
export interface PatternOptions<ValueType> extends LoopOptions {
    pattern: PatternName;
    values: ValueType[];
    callback: (time: Seconds, value?: ValueType) => void;
}
/**
 * Pattern arpeggiates between the given notes
 * in a number of patterns.
 * @example
 * const pattern = new Tone.Pattern((time, note) => {
 * 	// the order of the notes passed in depends on the pattern
 * }, ["C2", "D4", "E5", "A6"], "upDown");
 * @category Event
 */
export declare class Pattern<ValueType> extends Loop<PatternOptions<ValueType>> {
    readonly name: string;
    /**
     * The pattern generator function
     */
    private _pattern;
    /**
     * The current index
     */
    private _index?;
    /**
     * The current value
     */
    private _value?;
    /**
     * Hold the pattern type
     */
    private _type;
    /**
     * Hold the values
     */
    private _values;
    /**
     * The callback to be invoked at a regular interval
     */
    callback: (time: Seconds, value?: ValueType) => void;
    /**
     * @param  callback The callback to invoke with the event.
     * @param  values The values to arpeggiate over.
     * @param  pattern  The name of the pattern
     */
    constructor(callback?: ToneEventCallback<ValueType>, values?: ValueType[], pattern?: PatternName);
    constructor(options?: Partial<PatternOptions<ValueType>>);
    static getDefaults(): PatternOptions<any>;
    /**
     * Internal function called when the notes should be called
     */
    protected _tick(time: Seconds): void;
    /**
     * The array of events.
     */
    get values(): ValueType[];
    set values(val: ValueType[]);
    /**
     * The current value of the pattern.
     */
    get value(): ValueType | undefined;
    /**
     * The current index of the pattern.
     */
    get index(): number | undefined;
    /**
     * The pattern type.
     */
    get pattern(): PatternName;
    set pattern(pattern: PatternName);
}
