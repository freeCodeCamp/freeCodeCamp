import { AmplitudeEnvelope } from "../component/envelope/AmplitudeEnvelope.js";
import { Envelope } from "../component/envelope/Envelope.js";
import { ToneAudioNode, } from "../core/context/ToneAudioNode.js";
import { omitFromObject, optionsFromArguments } from "../core/util/Defaults.js";
import { readOnly } from "../core/util/Interface.js";
import { OmniOscillator } from "../source/oscillator/OmniOscillator.js";
import { Source } from "../source/Source.js";
import { Monophonic } from "./Monophonic.js";
/**
 * Synth is composed simply of a {@link OmniOscillator} routed through an {@link AmplitudeEnvelope}.
 * ```
 * +----------------+   +-------------------+
 * | OmniOscillator +>--> AmplitudeEnvelope +>--> Output
 * +----------------+   +-------------------+
 * ```
 * @example
 * const synth = new Tone.Synth().toDestination();
 * synth.triggerAttackRelease("C4", "8n");
 * @category Instrument
 */
export class Synth extends Monophonic {
    constructor() {
        const options = optionsFromArguments(Synth.getDefaults(), arguments);
        super(options);
        this.name = "Synth";
        this.oscillator = new OmniOscillator(Object.assign({
            context: this.context,
            detune: options.detune,
            onstop: () => this.onsilence(this),
        }, options.oscillator));
        this.frequency = this.oscillator.frequency;
        this.detune = this.oscillator.detune;
        this.envelope = new AmplitudeEnvelope(Object.assign({
            context: this.context,
        }, options.envelope));
        // connect the oscillators to the output
        this.oscillator.chain(this.envelope, this.output);
        readOnly(this, ["oscillator", "frequency", "detune", "envelope"]);
    }
    static getDefaults() {
        return Object.assign(Monophonic.getDefaults(), {
            envelope: Object.assign(omitFromObject(Envelope.getDefaults(), Object.keys(ToneAudioNode.getDefaults())), {
                attack: 0.005,
                decay: 0.1,
                release: 1,
                sustain: 0.3,
            }),
            oscillator: Object.assign(omitFromObject(OmniOscillator.getDefaults(), [
                ...Object.keys(Source.getDefaults()),
                "frequency",
                "detune",
            ]), {
                type: "triangle",
            }),
        });
    }
    /**
     * start the attack portion of the envelope
     * @param time the time the attack should start
     * @param velocity the velocity of the note (0-1)
     */
    _triggerEnvelopeAttack(time, velocity) {
        // the envelopes
        this.envelope.triggerAttack(time, velocity);
        this.oscillator.start(time);
        // if there is no release portion, stop the oscillator
        if (this.envelope.sustain === 0) {
            const computedAttack = this.toSeconds(this.envelope.attack);
            const computedDecay = this.toSeconds(this.envelope.decay);
            this.oscillator.stop(time + computedAttack + computedDecay);
        }
    }
    /**
     * start the release portion of the envelope
     * @param time the time the release should start
     */
    _triggerEnvelopeRelease(time) {
        this.envelope.triggerRelease(time);
        this.oscillator.stop(time + this.toSeconds(this.envelope.release));
    }
    getLevelAtTime(time) {
        time = this.toSeconds(time);
        return this.envelope.getValueAtTime(time);
    }
    /**
     * clean up
     */
    dispose() {
        super.dispose();
        this.oscillator.dispose();
        this.envelope.dispose();
        return this;
    }
}
//# sourceMappingURL=Synth.js.map