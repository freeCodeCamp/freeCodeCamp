import { Loop, LoopOptions } from "./Loop.js";
import { PatternGenerator, PatternName } from "./PatternGenerator.js";
import { ToneEventCallback } from "./ToneEvent.js";
import { optionsFromArguments } from "../core/util/Defaults.js";
import { Seconds } from "../core/type/Units.js";
import { noOp } from "../core/util/Interface.js";

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
export class Pattern<ValueType> extends Loop<PatternOptions<ValueType>> {
	readonly name: string = "Pattern";

	/**
	 * The pattern generator function
	 */
	private _pattern: Iterator<number>;

	/**
	 * The current index
	 */
	private _index?: number;

	/**
	 * The current value
	 */
	private _value?: ValueType;

	/**
	 * Hold the pattern type
	 */
	private _type: PatternName;

	/**
	 * Hold the values
	 */
	private _values: ValueType[];

	/**
	 * The callback to be invoked at a regular interval
	 */
	callback: (time: Seconds, value?: ValueType) => void;

	/**
	 * @param  callback The callback to invoke with the event.
	 * @param  values The values to arpeggiate over.
	 * @param  pattern  The name of the pattern
	 */
	constructor(
		callback?: ToneEventCallback<ValueType>,
		values?: ValueType[],
		pattern?: PatternName
	);
	constructor(options?: Partial<PatternOptions<ValueType>>);
	constructor() {
		const options = optionsFromArguments(Pattern.getDefaults(), arguments, [
			"callback",
			"values",
			"pattern",
		]);
		super(options);

		this.callback = options.callback;
		this._values = options.values;
		this._pattern = PatternGenerator(
			options.values.length,
			options.pattern
		);
		this._type = options.pattern;
	}

	static getDefaults(): PatternOptions<any> {
		return Object.assign(Loop.getDefaults(), {
			pattern: "up" as const,
			values: [],
			callback: noOp,
		});
	}

	/**
	 * Internal function called when the notes should be called
	 */
	protected _tick(time: Seconds): void {
		const index = this._pattern.next() as IteratorResult<ValueType>;
		this._index = index.value;
		this._value = this._values[index.value];
		this.callback(time, this._value);
	}

	/**
	 * The array of events.
	 */
	get values(): ValueType[] {
		return this._values;
	}
	set values(val) {
		this._values = val;
		// reset the pattern
		this.pattern = this._type;
	}

	/**
	 * The current value of the pattern.
	 */
	get value(): ValueType | undefined {
		return this._value;
	}

	/**
	 * The current index of the pattern.
	 */
	get index(): number | undefined {
		return this._index;
	}

	/**
	 * The pattern type.
	 */
	get pattern(): PatternName {
		return this._type;
	}
	set pattern(pattern) {
		this._type = pattern;
		this._pattern = PatternGenerator(this._values.length, this._type);
	}
}
