import { getContext } from "../Global.js";
import { ftom, mtof } from "./Conversions.js";
import { FrequencyClass, FrequencyUnit } from "./Frequency.js";
import { TimeValue } from "./TimeBase.js";
import { Hertz, Interval, MidiNote, Seconds, Ticks } from "./Units.js";

/**
 * Midi is a primitive type for encoding Time values.
 * Midi can be constructed with or without the `new` keyword. Midi can be passed
 * into the parameter of any method which takes time as an argument.
 * @category Unit
 */
export class MidiClass extends FrequencyClass<MidiNote> {
	readonly name: string = "MidiClass";

	readonly defaultUnits = "midi";

	/**
	 * Returns the value of a frequency in the current units
	 */
	protected _frequencyToUnits(freq: Hertz): MidiNote {
		return ftom(super._frequencyToUnits(freq));
	}

	/**
	 * Returns the value of a tick in the current time units
	 */
	protected _ticksToUnits(ticks: Ticks): MidiNote {
		return ftom(super._ticksToUnits(ticks));
	}

	/**
	 * Return the value of the beats in the current units
	 */
	protected _beatsToUnits(beats: number): MidiNote {
		return ftom(super._beatsToUnits(beats));
	}

	/**
	 * Returns the value of a second in the current units
	 */
	protected _secondsToUnits(seconds: Seconds): MidiNote {
		return ftom(super._secondsToUnits(seconds));
	}

	/**
	 * Return the value of the frequency as a MIDI note
	 * @example
	 * Tone.Midi(60).toMidi(); // 60
	 */
	toMidi(): MidiNote {
		return this.valueOf();
	}

	/**
	 * Return the value of the frequency as a MIDI note
	 * @example
	 * Tone.Midi(60).toFrequency(); // 261.6255653005986
	 */
	toFrequency(): Hertz {
		return mtof(this.toMidi());
	}

	/**
	 * Transposes the frequency by the given number of semitones.
	 * @return A new transposed MidiClass
	 * @example
	 * Tone.Midi("A4").transpose(3); // "C5"
	 */
	transpose(interval: Interval): MidiClass {
		return new MidiClass(this.context, this.toMidi() + interval);
	}
}

/**
 * Convert a value into a FrequencyClass object.
 * @category Unit
 */
export function Midi(value?: TimeValue, units?: FrequencyUnit): MidiClass {
	return new MidiClass(getContext(), value, units);
}
