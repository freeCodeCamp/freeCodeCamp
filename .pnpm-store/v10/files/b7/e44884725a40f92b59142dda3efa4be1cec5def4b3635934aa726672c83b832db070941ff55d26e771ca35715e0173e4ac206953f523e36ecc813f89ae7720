import { getContext } from "../Global.js";
import { ftom, mtof } from "./Conversions.js";
import { FrequencyClass } from "./Frequency.js";
/**
 * Midi is a primitive type for encoding Time values.
 * Midi can be constructed with or without the `new` keyword. Midi can be passed
 * into the parameter of any method which takes time as an argument.
 * @category Unit
 */
export class MidiClass extends FrequencyClass {
    constructor() {
        super(...arguments);
        this.name = "MidiClass";
        this.defaultUnits = "midi";
    }
    /**
     * Returns the value of a frequency in the current units
     */
    _frequencyToUnits(freq) {
        return ftom(super._frequencyToUnits(freq));
    }
    /**
     * Returns the value of a tick in the current time units
     */
    _ticksToUnits(ticks) {
        return ftom(super._ticksToUnits(ticks));
    }
    /**
     * Return the value of the beats in the current units
     */
    _beatsToUnits(beats) {
        return ftom(super._beatsToUnits(beats));
    }
    /**
     * Returns the value of a second in the current units
     */
    _secondsToUnits(seconds) {
        return ftom(super._secondsToUnits(seconds));
    }
    /**
     * Return the value of the frequency as a MIDI note
     * @example
     * Tone.Midi(60).toMidi(); // 60
     */
    toMidi() {
        return this.valueOf();
    }
    /**
     * Return the value of the frequency as a MIDI note
     * @example
     * Tone.Midi(60).toFrequency(); // 261.6255653005986
     */
    toFrequency() {
        return mtof(this.toMidi());
    }
    /**
     * Transposes the frequency by the given number of semitones.
     * @return A new transposed MidiClass
     * @example
     * Tone.Midi("A4").transpose(3); // "C5"
     */
    transpose(interval) {
        return new MidiClass(this.context, this.toMidi() + interval);
    }
}
/**
 * Convert a value into a FrequencyClass object.
 * @category Unit
 */
export function Midi(value, units) {
    return new MidiClass(getContext(), value, units);
}
//# sourceMappingURL=Midi.js.map