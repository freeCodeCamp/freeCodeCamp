import { __decorate } from "tslib";
import { FrequencyClass } from "../core/type/Frequency.js";
import { optionsFromArguments } from "../core/util/Defaults.js";
import { noOp } from "../core/util/Interface.js";
import { Instrument } from "../instrument/Instrument.js";
import { timeRange } from "../core/util/Decorator.js";
/**
 * Abstract base class for other monophonic instruments to extend.
 */
export class Monophonic extends Instrument {
    constructor() {
        const options = optionsFromArguments(Monophonic.getDefaults(), arguments);
        super(options);
        this.portamento = options.portamento;
        this.onsilence = options.onsilence;
    }
    static getDefaults() {
        return Object.assign(Instrument.getDefaults(), {
            detune: 0,
            onsilence: noOp,
            portamento: 0,
        });
    }
    /**
     * Trigger the attack of the note optionally with a given velocity.
     * @param  note The note to trigger.
     * @param  time When the note should start.
     * @param  velocity The velocity determines how "loud" the note will be.
     * @example
     * const synth = new Tone.Synth().toDestination();
     * // trigger the note a half second from now at half velocity
     * synth.triggerAttack("C4", "+0.5", 0.5);
     */
    triggerAttack(note, time, velocity = 1) {
        this.log("triggerAttack", note, time, velocity);
        const seconds = this.toSeconds(time);
        this._triggerEnvelopeAttack(seconds, velocity);
        this.setNote(note, seconds);
        return this;
    }
    /**
     * Trigger the release portion of the envelope.
     * @param  time If no time is given, the release happens immediately.
     * @example
     * const synth = new Tone.Synth().toDestination();
     * synth.triggerAttack("C4");
     * // trigger the release a second from now
     * synth.triggerRelease("+1");
     */
    triggerRelease(time) {
        this.log("triggerRelease", time);
        const seconds = this.toSeconds(time);
        this._triggerEnvelopeRelease(seconds);
        return this;
    }
    /**
     * Set the note at the given time. If no time is given, the note
     * will set immediately.
     * @param note The note to change to.
     * @param  time The time when the note should be set.
     * @example
     * const synth = new Tone.Synth().toDestination();
     * synth.triggerAttack("C4");
     * // change to F#6 in one quarter note from now.
     * synth.setNote("F#6", "+4n");
     */
    setNote(note, time) {
        const computedTime = this.toSeconds(time);
        const computedFrequency = note instanceof FrequencyClass ? note.toFrequency() : note;
        if (this.portamento > 0 && this.getLevelAtTime(computedTime) > 0.05) {
            const portTime = this.toSeconds(this.portamento);
            this.frequency.exponentialRampTo(computedFrequency, portTime, computedTime);
        }
        else {
            this.frequency.setValueAtTime(computedFrequency, computedTime);
        }
        return this;
    }
}
__decorate([
    timeRange(0)
], Monophonic.prototype, "portamento", void 0);
//# sourceMappingURL=Monophonic.js.map