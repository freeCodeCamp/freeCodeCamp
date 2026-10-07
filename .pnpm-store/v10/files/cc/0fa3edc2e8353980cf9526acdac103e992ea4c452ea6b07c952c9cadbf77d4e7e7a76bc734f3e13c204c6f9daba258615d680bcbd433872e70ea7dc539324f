import { Signal } from "../signal/Signal.js";
import { Multiply } from "../signal/Multiply.js";
import { Gain } from "../core/context/Gain.js";
import { NormalRange, Positive, Seconds, Time } from "../core/type/Units.js";
import { EnvelopeOptions } from "../component/envelope/Envelope.js";
import { ToneAudioNodeOptions } from "../core/context/ToneAudioNode.js";
import { Monophonic } from "./Monophonic.js";
import { OmniOscillator } from "../source/oscillator/OmniOscillator.js";
import { OmniOscillatorSynthOptions } from "../source/oscillator/OscillatorInterface.js";
import { Synth, SynthOptions } from "./Synth.js";
import { AmplitudeEnvelope } from "../component/envelope/AmplitudeEnvelope.js";
import { RecursivePartial } from "../core/util/Interface.js";
export interface ModulationSynthOptions extends SynthOptions {
    harmonicity: Positive;
    modulationEnvelope: Omit<EnvelopeOptions, keyof ToneAudioNodeOptions>;
    modulation: OmniOscillatorSynthOptions;
}
/**
 * Base class for both AM and FM synths
 */
export declare abstract class ModulationSynth<Options extends ModulationSynthOptions> extends Monophonic<Options> {
    readonly name: string;
    /**
     * The carrier voice.
     */
    protected _carrier: Synth;
    /**
     * The modulator voice.
     */
    protected _modulator: Synth;
    /**
     * The carrier's oscillator
     */
    readonly oscillator: OmniOscillator<any>;
    /**
     * The carrier's envelope
     */
    readonly envelope: AmplitudeEnvelope;
    /**
     * The modulator's oscillator which is applied to the amplitude of the oscillator
     */
    readonly modulation: OmniOscillator<any>;
    /**
     * The modulator's envelope
     */
    readonly modulationEnvelope: AmplitudeEnvelope;
    /**
     * The frequency control
     */
    readonly frequency: Signal<"frequency">;
    /**
     * The detune in cents
     */
    readonly detune: Signal<"cents">;
    /**
     * Harmonicity is the ratio between the two voices. A harmonicity of
     * 1 is no change. Harmonicity = 2 means a change of an octave.
     * @example
     * const amSynth = new Tone.AMSynth().toDestination();
     * // pitch the modulator an octave below oscillator
     * amSynth.harmonicity.value = 0.5;
     * amSynth.triggerAttackRelease("C5", "4n");
     */
    readonly harmonicity: Multiply;
    /**
     * The node where the modulation happens
     */
    protected _modulationNode: Gain;
    constructor(options?: RecursivePartial<ModulationSynthOptions>);
    static getDefaults(): ModulationSynthOptions;
    /**
     * Trigger the attack portion of the note
     */
    protected _triggerEnvelopeAttack(time: Seconds, velocity: number): void;
    /**
     * Trigger the release portion of the note
     */
    protected _triggerEnvelopeRelease(time: Seconds): this;
    getLevelAtTime(time: Time): NormalRange;
    dispose(): this;
}
