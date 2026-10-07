import { BaseContext } from "../context/BaseContext.js";
import { Tone } from "../Tone.js";
import { isDefined, isObject, isString, isUndef } from "../util/TypeCheck.js";
import {
	BPM,
	Hertz,
	MidiNote,
	Milliseconds,
	Samples,
	Seconds,
	Ticks,
	Time,
} from "./Units.js";

export type TimeValue = Time | TimeBaseClass<any, any>;

/**
 * The units that the TimeBase can accept. extended by other classes
 */
export type TimeBaseUnit =
	| "s"
	| "n"
	| "t"
	| "m"
	| "i"
	| "hz"
	| "tr"
	| "samples"
	| "number";

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
export abstract class TimeBaseClass<
	Type extends number,
	Unit extends string,
> extends Tone {
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
	readonly defaultUnits: Unit = "s" as Unit;

	/**
	 * @param context The context associated with the time value. Used to compute
	 * Transport and context-relative timing.
	 * @param  value  The time value as a number, string or object
	 * @param  units  Unit values
	 */
	constructor(context: BaseContext, value?: TimeValue, units?: Unit) {
		super();

		this._val = value;
		this._units = units;
		this.context = context;
		this._expressions = this._getExpressions();
	}

	/**
	 * All of the time encoding expressions
	 */
	protected _getExpressions(): TimeExpression<Type> {
		return {
			hz: {
				method: (value) => {
					return this._frequencyToUnits(parseFloat(value));
				},
				regexp: /^(\d+(?:\.\d+)?)hz$/i,
			},
			i: {
				method: (value) => {
					return this._ticksToUnits(parseInt(value, 10));
				},
				regexp: /^(\d+)i$/i,
			},
			m: {
				method: (value) => {
					return this._beatsToUnits(
						parseInt(value, 10) * this._getTimeSignature()
					);
				},
				regexp: /^(\d+)m$/i,
			},
			n: {
				method: (value, dot) => {
					const numericValue = parseInt(value, 10);
					const scalar = dot === "." ? 1.5 : 1;
					if (numericValue === 1) {
						return (this._beatsToUnits(this._getTimeSignature()) *
							scalar) as Type;
					} else {
						return (this._beatsToUnits(4 / numericValue) *
							scalar) as Type;
					}
				},
				regexp: /^(\d+)n(\.?)$/i,
			},
			number: {
				method: (value) => {
					return this._expressions[this.defaultUnits].method.call(
						this,
						value
					);
				},
				regexp: /^(\d+(?:\.\d+)?)$/,
			},
			s: {
				method: (value): Type => {
					return this._secondsToUnits(parseFloat(value));
				},
				regexp: /^(\d+(?:\.\d+)?)s$/,
			},
			samples: {
				method: (value) => {
					return (parseInt(value, 10) /
						this.context.sampleRate) as Type;
				},
				regexp: /^(\d+)samples$/,
			},
			t: {
				method: (value) => {
					const numericValue = parseInt(value, 10);
					return this._beatsToUnits(
						8 / (Math.floor(numericValue) * 3)
					);
				},
				regexp: /^(\d+)t$/i,
			},
			tr: {
				method: (m, q, s) => {
					let total = 0;
					if (m && m !== "0") {
						total += this._beatsToUnits(
							this._getTimeSignature() * parseFloat(m)
						);
					}
					if (q && q !== "0") {
						total += this._beatsToUnits(parseFloat(q));
					}
					if (s && s !== "0") {
						total += this._beatsToUnits(parseFloat(s) / 4);
					}
					return total as Type;
				},
				regexp: /^(\d+(?:\.\d+)?):(\d+(?:\.\d+)?):?(\d+(?:\.\d+)?)?$/,
			},
		};
	}

	//-------------------------------------
	// 	VALUE OF
	//-------------------------------------

	/**
	 * Evaluate the time value. Returns the time in seconds.
	 */
	valueOf(): Type {
		if (this._val instanceof TimeBaseClass) {
			this.fromType(this._val);
		}
		if (isUndef(this._val)) {
			return this._noArg();
		} else if (isString(this._val) && isUndef(this._units)) {
			for (const units in this._expressions) {
				if (this._expressions[units].regexp.test(this._val.trim())) {
					this._units = units as Unit;
					break;
				}
			}
		} else if (isObject(this._val)) {
			let total = 0;
			for (const typeName in this._val) {
				if (isDefined(this._val[typeName])) {
					const quantity = this._val[typeName];
					const time =
						// @ts-ignore
						new this.constructor(this.context, typeName).valueOf() *
						quantity;
					total += time;
				}
			}
			return total as Type;
		}
		if (isDefined(this._units)) {
			const expr = this._expressions[this._units];
			const matching = this._val.toString().trim().match(expr.regexp);
			if (matching) {
				return expr.method.apply(this, matching.slice(1));
			} else {
				return expr.method.call(this, this._val);
			}
		} else if (isString(this._val)) {
			return parseFloat(this._val) as Type;
		} else {
			return this._val as Type;
		}
	}

	//-------------------------------------
	// 	UNIT CONVERSIONS
	//-------------------------------------

	/**
	 * Returns the value of a frequency in the current units
	 */
	protected _frequencyToUnits(freq: Hertz): Type {
		return (1 / freq) as Type;
	}

	/**
	 * Return the value of the beats in the current units
	 */
	protected _beatsToUnits(beats: number): Type {
		return ((60 / this._getBpm()) * beats) as Type;
	}

	/**
	 * Returns the value of a second in the current units
	 */
	protected _secondsToUnits(seconds: Seconds): Type {
		return seconds as Type;
	}

	/**
	 * Returns the value of a tick in the current time units
	 */
	protected _ticksToUnits(ticks: Ticks): Type {
		return ((ticks * this._beatsToUnits(1)) / this._getPPQ()) as Type;
	}

	/**
	 * With no arguments, return 'now'
	 */
	protected _noArg(): Type {
		return this._now();
	}

	//-------------------------------------
	// 	TEMPO CONVERSIONS
	//-------------------------------------

	/**
	 * Return the bpm
	 */
	protected _getBpm(): BPM {
		return this.context.transport.bpm.value;
	}

	/**
	 * Return the timeSignature
	 */
	protected _getTimeSignature(): number {
		return this.context.transport.timeSignature as number;
	}

	/**
	 * Return the PPQ or 192 if Transport is not available
	 */
	protected _getPPQ(): number {
		return this.context.transport.PPQ;
	}

	/**
	 * Return the current time in whichever context is relevant
	 */
	protected abstract _now(): Type;

	//-------------------------------------
	// 	CONVERSION INTERFACE
	//-------------------------------------

	/**
	 * Coerce a time type into this units type.
	 * @param type Any time type units
	 */
	fromType(type: TimeBaseClass<any, any>): this {
		this._units = undefined;
		switch (this.defaultUnits) {
			case "s":
				this._val = type.toSeconds();
				break;
			case "i":
				this._val = type.toTicks();
				break;
			case "hz":
				this._val = type.toFrequency();
				break;
			case "midi":
				this._val = type.toMidi();
				break;
		}
		return this;
	}

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
	toFrequency(): Hertz {
		return 1 / this.toSeconds();
	}

	/**
	 * Return the time in samples
	 */
	toSamples(): Samples {
		return this.toSeconds() * this.context.sampleRate;
	}

	/**
	 * Return the time in milliseconds.
	 */
	toMilliseconds(): Milliseconds {
		return this.toSeconds() * 1000;
	}
}
