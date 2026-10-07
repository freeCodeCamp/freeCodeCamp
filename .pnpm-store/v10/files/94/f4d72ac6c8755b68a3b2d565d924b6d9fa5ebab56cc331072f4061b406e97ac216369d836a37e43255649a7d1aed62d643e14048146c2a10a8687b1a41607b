import { Signal } from "../signal/Signal.js";
import { Multiply } from "../signal/Multiply.js";
import { Gain } from "../core/context/Gain.js";
import { Envelope } from "../component/envelope/Envelope.js";
import { ToneAudioNode, } from "../core/context/ToneAudioNode.js";
import { Monophonic } from "./Monophonic.js";
import { OmniOscillator } from "../source/oscillator/OmniOscillator.js";
import { Source } from "../source/Source.js";
import { Synth } from "./Synth.js";
import { readOnly } from "../core/util/Interface.js";
import { omitFromObject, optionsFromArguments } from "../core/util/Defaults.js";
/**
 * Base class for both AM and FM synths
 */
export class ModulationSynth extends Monophonic {
    constructor() {
        const options = optionsFromArguments(ModulationSynth.getDefaults(), arguments);
        super(options);
        this.name = "ModulationSynth";
        this._carrier = new Synth({
            context: this.context,
            oscillator: options.oscillator,
            envelope: options.envelope,
            onsilence: () => this.onsilence(this),
            volume: -10,
        });
        this._modulator = new Synth({
            context: this.context,
            oscillator: options.modulation,
            envelope: options.modulationEnvelope,
            volume: -10,
        });
        this.oscillator = this._carrier.oscillator;
        this.envelope = this._carrier.envelope;
        this.modulation = this._modulator.oscillator;
        this.modulationEnvelope = this._modulator.envelope;
        this.frequency = new Signal({
            context: this.context,
            units: "frequency",
        });
        this.detune = new Signal({
            context: this.context,
            value: options.detune,
            units: "cents",
        });
        this.harmonicity = new Multiply({
            context: this.context,
            value: options.harmonicity,
            minValue: 0,
        });
        this._modulationNode = new Gain({
            context: this.context,
            gain: 0,
        });
        readOnly(this, [
            "frequency",
            "harmonicity",
            "oscillator",
            "envelope",
            "modulation",
            "modulationEnvelope",
            "detune",
        ]);
    }
    static getDefaults() {
        return Object.assign(Monophonic.getDefaults(), {
            harmonicity: 3,
            oscillator: Object.assign(omitFromObject(OmniOscillator.getDefaults(), [
                ...Object.keys(Source.getDefaults()),
                "frequency",
                "detune",
            ]), {
                type: "sine",
            }),
            envelope: Object.assign(omitFromObject(Envelope.getDefaults(), Object.keys(ToneAudioNode.getDefaults())), {
                attack: 0.01,
                decay: 0.01,
                sustain: 1,
                release: 0.5,
            }),
            modulation: Object.assign(omitFromObject(OmniOscillator.getDefaults(), [
                ...Object.keys(Source.getDefaults()),
                "frequency",
                "detune",
            ]), {
                type: "square",
            }),
            modulationEnvelope: Object.assign(omitFromObject(Envelope.getDefaults(), Object.keys(ToneAudioNode.getDefaults())), {
                attack: 0.5,
                decay: 0.0,
                sustain: 1,
                release: 0.5,
            }),
        });
    }
    /**
     * Trigger the attack portion of the note
     */
    _triggerEnvelopeAttack(time, velocity) {
        // @ts-ignore
        this._carrier._triggerEnvelopeAttack(time, velocity);
        // @ts-ignore
        this._modulator._triggerEnvelopeAttack(time, velocity);
    }
    /**
     * Trigger the release portion of the note
     */
    _triggerEnvelopeRelease(time) {
        // @ts-ignore
        this._carrier._triggerEnvelopeRelease(time);
        // @ts-ignore
        this._modulator._triggerEnvelopeRelease(time);
        return this;
    }
    getLevelAtTime(time) {
        time = this.toSeconds(time);
        return this.envelope.getValueAtTime(time);
    }
    dispose() {
        super.dispose();
        this._carrier.dispose();
        this._modulator.dispose();
        this.frequency.dispose();
        this.detune.dispose();
        this.harmonicity.dispose();
        this._modulationNode.dispose();
        return this;
    }
}
//# sourceMappingURL=ModulationSynth.js.map