import { __decorate } from "tslib";
import { FrequencyClass } from "../core/type/Frequency.js";
import { deepMerge, optionsFromArguments } from "../core/util/Defaults.js";
import { readOnly } from "../core/util/Interface.js";
import { Monophonic } from "./Monophonic.js";
import { Synth } from "./Synth.js";
import { range, timeRange } from "../core/util/Decorator.js";
/**
 * MembraneSynth makes kick and tom sounds using a single oscillator
 * with an amplitude envelope and frequency ramp. A Tone.OmniOscillator
 * is routed through a Tone.AmplitudeEnvelope to the output. The drum
 * quality of the sound comes from the frequency envelope applied
 * during MembraneSynth.triggerAttack(note). The frequency envelope
 * starts at <code>note * .octaves</code> and ramps to <code>note</code>
 * over the duration of <code>.pitchDecay</code>.
 * @example
 * const synth = new Tone.MembraneSynth().toDestination();
 * synth.triggerAttackRelease("C2", "8n");
 * @category Instrument
 */
export class MembraneSynth extends Synth {
    constructor() {
        const options = optionsFromArguments(MembraneSynth.getDefaults(), arguments);
        super(options);
        this.name = "MembraneSynth";
        /**
         * Portamento is ignored in this synth. use pitch decay instead.
         */
        this.portamento = 0;
        this.pitchDecay = options.pitchDecay;
        this.octaves = options.octaves;
        readOnly(this, ["oscillator", "envelope"]);
    }
    static getDefaults() {
        return deepMerge(Monophonic.getDefaults(), Synth.getDefaults(), {
            envelope: {
                attack: 0.001,
                attackCurve: "exponential",
                decay: 0.4,
                release: 1.4,
                sustain: 0.01,
            },
            octaves: 10,
            oscillator: {
                type: "sine",
            },
            pitchDecay: 0.05,
        });
    }
    setNote(note, time) {
        const seconds = this.toSeconds(time);
        const hertz = this.toFrequency(note instanceof FrequencyClass ? note.toFrequency() : note);
        const maxNote = hertz * this.octaves;
        this.oscillator.frequency.setValueAtTime(maxNote, seconds);
        this.oscillator.frequency.exponentialRampToValueAtTime(hertz, seconds + this.toSeconds(this.pitchDecay));
        return this;
    }
    dispose() {
        super.dispose();
        return this;
    }
}
__decorate([
    range(0)
], MembraneSynth.prototype, "octaves", void 0);
__decorate([
    timeRange(0)
], MembraneSynth.prototype, "pitchDecay", void 0);
//# sourceMappingURL=MembraneSynth.js.map