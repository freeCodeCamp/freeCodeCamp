import { AmplitudeEnvelope } from "../component/envelope/AmplitudeEnvelope.js";
import { NormalRange, Time } from "../core/type/Units.js";
import { RecursivePartial } from "../core/util/Interface.js";
import { Noise, NoiseOptions } from "../source/Noise.js";
import { Instrument, InstrumentOptions } from "./Instrument.js";
import { ToneAudioNodeOptions } from "../core/context/ToneAudioNode.js";
import { EnvelopeOptions } from "../component/envelope/Envelope.js";
export interface NoiseSynthOptions extends InstrumentOptions {
    envelope: Omit<EnvelopeOptions, keyof ToneAudioNodeOptions>;
    noise: Omit<NoiseOptions, keyof ToneAudioNodeOptions>;
}
/**
 * Tone.NoiseSynth is composed of {@link Noise} through an {@link AmplitudeEnvelope}.
 * ```
 * +-------+   +-------------------+
 * | Noise +>--> AmplitudeEnvelope +>--> Output
 * +-------+   +-------------------+
 * ```
 * @example
 * const noiseSynth = new Tone.NoiseSynth().toDestination();
 * noiseSynth.triggerAttackRelease("8n", 0.05);
 * @category Instrument
 */
export declare class NoiseSynth extends Instrument<NoiseSynthOptions> {
    readonly name = "NoiseSynth";
    /**
     * The noise source.
     */
    readonly noise: Noise;
    /**
     * The amplitude envelope.
     */
    readonly envelope: AmplitudeEnvelope;
    constructor(options?: RecursivePartial<NoiseSynthOptions>);
    static getDefaults(): NoiseSynthOptions;
    /**
     * Start the attack portion of the envelopes. Unlike other
     * instruments, Tone.NoiseSynth doesn't have a note.
     * @example
     * const noiseSynth = new Tone.NoiseSynth().toDestination();
     * noiseSynth.triggerAttack();
     */
    triggerAttack(time?: Time, velocity?: NormalRange): this;
    /**
     * Start the release portion of the envelopes.
     */
    triggerRelease(time?: Time): this;
    sync(): this;
    /**
     * Trigger the attack and then the release after the duration.
     * @param duration The amount of time to hold the note for
     * @param time The time the note should start
     * @param velocity The volume of the note (0-1)
     * @example
     * const noiseSynth = new Tone.NoiseSynth().toDestination();
     * // hold the note for 0.5 seconds
     * noiseSynth.triggerAttackRelease(0.5);
     */
    triggerAttackRelease(duration: Time, time?: Time, velocity?: NormalRange): this;
    dispose(): this;
}
