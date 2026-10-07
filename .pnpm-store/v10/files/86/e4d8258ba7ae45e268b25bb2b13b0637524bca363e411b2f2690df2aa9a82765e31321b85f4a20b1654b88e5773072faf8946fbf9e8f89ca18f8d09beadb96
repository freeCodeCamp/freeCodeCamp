import { AmplitudeEnvelope } from "../component/envelope/AmplitudeEnvelope.js";
import { Envelope } from "../component/envelope/Envelope.js";
import { Filter } from "../component/filter/Filter.js";
import { omitFromObject, optionsFromArguments } from "../core/util/Defaults.js";
import { readOnly } from "../core/util/Interface.js";
import { Monophonic } from "../instrument/Monophonic.js";
import { OmniOscillator } from "../source/oscillator/OmniOscillator.js";
import { Source } from "../source/Source.js";
import { FrequencyEnvelope, } from "../component/envelope/FrequencyEnvelope.js";
import { ToneAudioNode, } from "../core/context/ToneAudioNode.js";
/**
 * MonoSynth is composed of one `oscillator`, one `filter`, and two `envelopes`.
 * The amplitude of the Oscillator and the cutoff frequency of the
 * Filter are controlled by Envelopes.
 * <img src="https://docs.google.com/drawings/d/1gaY1DF9_Hzkodqf8JI1Cg2VZfwSElpFQfI94IQwad38/pub?w=924&h=240">
 * @example
 * const synth = new Tone.MonoSynth({
 * 	oscillator: {
 * 		type: "square"
 * 	},
 * 	envelope: {
 * 		attack: 0.1
 * 	}
 * }).toDestination();
 * synth.triggerAttackRelease("C4", "8n");
 * @category Instrument
 */
export class MonoSynth extends Monophonic {
    constructor() {
        const options = optionsFromArguments(MonoSynth.getDefaults(), arguments);
        super(options);
        this.name = "MonoSynth";
        this.oscillator = new OmniOscillator(Object.assign(options.oscillator, {
            context: this.context,
            detune: options.detune,
            onstop: () => this.onsilence(this),
        }));
        this.frequency = this.oscillator.frequency;
        this.detune = this.oscillator.detune;
        this.filter = new Filter(Object.assign(options.filter, { context: this.context }));
        this.filterEnvelope = new FrequencyEnvelope(Object.assign(options.filterEnvelope, { context: this.context }));
        this.envelope = new AmplitudeEnvelope(Object.assign(options.envelope, { context: this.context }));
        // connect the oscillators to the output
        this.oscillator.chain(this.filter, this.envelope, this.output);
        // connect the filter envelope
        this.filterEnvelope.connect(this.filter.frequency);
        readOnly(this, [
            "oscillator",
            "frequency",
            "detune",
            "filter",
            "filterEnvelope",
            "envelope",
        ]);
    }
    static getDefaults() {
        return Object.assign(Monophonic.getDefaults(), {
            envelope: Object.assign(omitFromObject(Envelope.getDefaults(), Object.keys(ToneAudioNode.getDefaults())), {
                attack: 0.005,
                decay: 0.1,
                release: 1,
                sustain: 0.9,
            }),
            filter: Object.assign(omitFromObject(Filter.getDefaults(), Object.keys(ToneAudioNode.getDefaults())), {
                Q: 1,
                rolloff: -12,
                type: "lowpass",
            }),
            filterEnvelope: Object.assign(omitFromObject(FrequencyEnvelope.getDefaults(), Object.keys(ToneAudioNode.getDefaults())), {
                attack: 0.6,
                baseFrequency: 200,
                decay: 0.2,
                exponent: 2,
                octaves: 3,
                release: 2,
                sustain: 0.5,
            }),
            oscillator: Object.assign(omitFromObject(OmniOscillator.getDefaults(), Object.keys(Source.getDefaults())), {
                type: "sawtooth",
            }),
        });
    }
    /**
     * start the attack portion of the envelope
     * @param time the time the attack should start
     * @param velocity the velocity of the note (0-1)
     */
    _triggerEnvelopeAttack(time, velocity = 1) {
        this.envelope.triggerAttack(time, velocity);
        this.filterEnvelope.triggerAttack(time);
        this.oscillator.start(time);
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
        this.filterEnvelope.triggerRelease(time);
        this.oscillator.stop(time + this.toSeconds(this.envelope.release));
    }
    getLevelAtTime(time) {
        time = this.toSeconds(time);
        return this.envelope.getValueAtTime(time);
    }
    dispose() {
        super.dispose();
        this.oscillator.dispose();
        this.envelope.dispose();
        this.filterEnvelope.dispose();
        this.filter.dispose();
        return this;
    }
}
//# sourceMappingURL=MonoSynth.js.map