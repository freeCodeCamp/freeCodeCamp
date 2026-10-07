/* eslint-disable key-spacing */
import { getContext } from "../Global.js";
import { intervalToFrequencyRatio, mtof } from "./Conversions.js";
import { ftom, getA4, setA4 } from "./Conversions.js";
import { TimeClass } from "./Time.js";
import { TimeBaseUnit, TimeExpression, TimeValue } from "./TimeBase.js";
import {
	Frequency,
	Hertz,
	Interval,
	MidiNote,
	Note,
	Seconds,
	Ticks,
} from "./Units.js";

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
export class FrequencyClass<Type extends number = Hertz> extends TimeClass<
	Type,
	FrequencyUnit
> {
	readonly name: string = "Frequency";

	readonly defaultUnits: FrequencyUnit = "hz";

	/**
	 * The [concert tuning pitch](https://en.wikipedia.org/wiki/Concert_pitch) which is used
	 * to generate all the other pitch values from notes. A4's values in Hertz.
	 */
	static get A4(): Hertz {
		return getA4();
	}
	static set A4(freq: Hertz) {
		setA4(freq);
	}

	//-------------------------------------
	// 	AUGMENT BASE EXPRESSIONS
	//-------------------------------------

	protected _getExpressions(): TimeExpression<Type> {
		return Object.assign({}, super._getExpressions(), {
			midi: {
				regexp: /^(\d+(?:\.\d+)?midi)/,
				method(value): number {
					if (this.defaultUnits === "midi") {
						return value;
					} else {
						return FrequencyClass.mtof(value);
					}
				},
			},
			note: {
				regexp: /^([a-g]{1}(?:b|#|##|x|bb|###|#x|x#|bbb)?)(-?[0-9]+)/i,
				method(pitch, octave): number {
					const index = noteToScaleIndex[pitch.toLowerCase()];
					const noteNumber = index + (parseInt(octave, 10) + 1) * 12;
					if (this.defaultUnits === "midi") {
						return noteNumber;
					} else {
						return FrequencyClass.mtof(noteNumber);
					}
				},
			},
			tr: {
				regexp: /^(\d+(?:\.\d+)?):(\d+(?:\.\d+)?):?(\d+(?:\.\d+)?)?/,
				method(m, q, s): number {
					let total = 1;
					if (m && m !== "0") {
						total *= this._beatsToUnits(
							this._getTimeSignature() * parseFloat(m)
						);
					}
					if (q && q !== "0") {
						total *= this._beatsToUnits(parseFloat(q));
					}
					if (s && s !== "0") {
						total *= this._beatsToUnits(parseFloat(s) / 4);
					}
					return total;
				},
			},
		});
	}

	//-------------------------------------
	// 	EXPRESSIONS
	//-------------------------------------

	/**
	 * Transposes the frequency by the given number of semitones.
	 * @return  A new transposed frequency
	 * @example
	 * Tone.Frequency("A4").transpose(3); // "C5"
	 */
	transpose(interval: Interval): FrequencyClass {
		return new FrequencyClass(
			this.context,
			this.valueOf() * intervalToFrequencyRatio(interval)
		);
	}

	/**
	 * Takes an array of semitone intervals and returns
	 * an array of frequencies transposed by those intervals.
	 * @return  Returns an array of Frequencies
	 * @example
	 * Tone.Frequency("A4").harmonize([0, 3, 7]); // ["A4", "C5", "E5"]
	 */
	harmonize(intervals: Interval[]): FrequencyClass[] {
		return intervals.map((interval) => {
			return this.transpose(interval);
		});
	}

	//-------------------------------------
	// 	UNIT CONVERSIONS
	//-------------------------------------

	/**
	 * Return the value of the frequency as a MIDI note
	 * @example
	 * Tone.Frequency("C4").toMidi(); // 60
	 */
	toMidi(): MidiNote {
		return ftom(this.valueOf());
	}

	/**
	 * Return the value of the frequency in Scientific Pitch Notation
	 * @example
	 * Tone.Frequency(69, "midi").toNote(); // "A4"
	 */
	toNote(): Note {
		const freq = this.toFrequency();
		const log = Math.log2(freq / FrequencyClass.A4);
		let noteNumber = Math.round(12 * log) + 57;
		const octave = Math.floor(noteNumber / 12);
		if (octave < 0) {
			noteNumber += -12 * octave;
		}
		const noteName = scaleIndexToNote[noteNumber % 12];
		return (noteName + octave.toString()) as Note;
	}

	/**
	 * Return the duration of one cycle in seconds.
	 */
	toSeconds(): Seconds {
		return 1 / super.toSeconds();
	}

	/**
	 * Return the duration of one cycle in ticks
	 */
	toTicks(): Ticks {
		const quarterTime = this._beatsToUnits(1);
		const quarters = this.valueOf() / quarterTime;
		return Math.floor(quarters * this._getPPQ());
	}

	//-------------------------------------
	// 	UNIT CONVERSIONS HELPERS
	//-------------------------------------

	/**
	 * With no arguments, return 0
	 */
	protected _noArg(): Type {
		return 0 as Type;
	}

	/**
	 * Returns the value of a frequency in the current units
	 */
	protected _frequencyToUnits(freq: Hertz): Type {
		return freq as Type;
	}

	/**
	 * Returns the value of a tick in the current time units
	 */
	protected _ticksToUnits(ticks: Ticks): Type {
		return (1 / ((ticks * 60) / (this._getBpm() * this._getPPQ()))) as Type;
	}

	/**
	 * Return the value of the beats in the current units
	 */
	protected _beatsToUnits(beats: number): Type {
		return (1 / super._beatsToUnits(beats)) as Type;
	}

	/**
	 * Returns the value of a second in the current units
	 */
	protected _secondsToUnits(seconds: Seconds): Type {
		return (1 / seconds) as Type;
	}

	/**
	 * Convert a MIDI note to frequency value.
	 * @param  midi The midi number to convert.
	 * @return The corresponding frequency value
	 */
	static mtof(midi: MidiNote): Hertz {
		return mtof(midi);
	}

	/**
	 * Convert a frequency value to a MIDI note.
	 * @param frequency The value to frequency value to convert.
	 */
	static ftom(frequency: Hertz): MidiNote {
		return ftom(frequency);
	}
}

//-------------------------------------
// 	FREQUENCY CONVERSIONS
//-------------------------------------

/**
 * Note to scale index.
 * @hidden
 */
const noteToScaleIndex = {
	cbbb: -3,
	cbb: -2,
	cb: -1,
	c: 0,
	"c#": 1,
	cx: 2,
	"c##": 2,
	"c###": 3,
	"cx#": 3,
	"c#x": 3,
	dbbb: -1,
	dbb: 0,
	db: 1,
	d: 2,
	"d#": 3,
	dx: 4,
	"d##": 4,
	"d###": 5,
	"dx#": 5,
	"d#x": 5,
	ebbb: 1,
	ebb: 2,
	eb: 3,
	e: 4,
	"e#": 5,
	ex: 6,
	"e##": 6,
	"e###": 7,
	"ex#": 7,
	"e#x": 7,
	fbbb: 2,
	fbb: 3,
	fb: 4,
	f: 5,
	"f#": 6,
	fx: 7,
	"f##": 7,
	"f###": 8,
	"fx#": 8,
	"f#x": 8,
	gbbb: 4,
	gbb: 5,
	gb: 6,
	g: 7,
	"g#": 8,
	gx: 9,
	"g##": 9,
	"g###": 10,
	"gx#": 10,
	"g#x": 10,
	abbb: 6,
	abb: 7,
	ab: 8,
	a: 9,
	"a#": 10,
	ax: 11,
	"a##": 11,
	"a###": 12,
	"ax#": 12,
	"a#x": 12,
	bbbb: 8,
	bbb: 9,
	bb: 10,
	b: 11,
	"b#": 12,
	bx: 13,
	"b##": 13,
	"b###": 14,
	"bx#": 14,
	"b#x": 14,
};

/**
 * scale index to note (sharps)
 * @hidden
 */
const scaleIndexToNote = [
	"C",
	"C#",
	"D",
	"D#",
	"E",
	"F",
	"F#",
	"G",
	"G#",
	"A",
	"A#",
	"B",
];

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
export function Frequency(
	value?: TimeValue | Frequency,
	units?: FrequencyUnit
): FrequencyClass {
	return new FrequencyClass(getContext(), value, units);
}
