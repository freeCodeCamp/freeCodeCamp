import { AmplitudeEnvelope } from "../component/envelope/AmplitudeEnvelope.js";
import { EnvelopeOptions } from "../component/envelope/Envelope.js";
import { ToneAudioNodeOptions } from "../core/context/ToneAudioNode.js";
import { NormalRange, Seconds, Time } from "../core/type/Units.js";
import { RecursivePartial } from "../core/util/Interface.js";
import { Signal } from "../signal/Signal.js";
import { OmniOscillator } from "../source/oscillator/OmniOscillator.js";
import { OmniOscillatorSynthOptions } from "../source/oscillator/OscillatorInterface.js";
import { Monophonic, MonophonicOptions } from "./Monophonic.js";
export interface SynthOptions extends MonophonicOptions {
    oscillator: OmniOscillatorSynthOptions;
    envelope: Omit<EnvelopeOptions, keyof ToneAudioNodeOptions>;
}
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
export declare class Synth<Options extends SynthOptions = SynthOptions> extends Monophonic<Options> {
    readonly name: string;
    /**
     * The oscillator.
     */
    readonly oscillator: OmniOscillator<any>;
    /**
     * The frequency signal
     */
    readonly frequency: Signal<"frequency">;
    /**
     * The detune signal
     */
    readonly detune: Signal<"cents">;
    /**
     * The envelope
     */
    readonly envelope: AmplitudeEnvelope;
    /**
     * @param options the options available for the synth.
     */
    constructor(options?: RecursivePartial<SynthOptions>);
    static getDefaults(): SynthOptions;
    /**
     * start the attack portion of the envelope
     * @param time the time the attack should start
     * @param velocity the velocity of the note (0-1)
     */
    protected _triggerEnvelopeAttack(time: Seconds, velocity: number): void;
    /**
     * start the release portion of the envelope
     * @param time the time the release should start
     */
    protected _triggerEnvelopeRelease(time: Seconds): void;
    getLevelAtTime(time: Time): NormalRange;
    /**
     * clean up
     */
    dispose(): this;
}
