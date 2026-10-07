import { FrequencyClass } from "../core/type/Frequency.js";
import { Frequency, Positive, Time } from "../core/type/Units.js";
import { RecursivePartial } from "../core/util/Interface.js";
import { Synth, SynthOptions } from "./Synth.js";
export interface MembraneSynthOptions extends SynthOptions {
    pitchDecay: Time;
    octaves: Positive;
}
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
export declare class MembraneSynth extends Synth<MembraneSynthOptions> {
    readonly name: string;
    /**
     * The number of octaves the pitch envelope ramps.
     * @min 0.5
     * @max 8
     */
    octaves: Positive;
    /**
     * The amount of time the frequency envelope takes.
     * @min 0
     * @max 0.5
     */
    pitchDecay: Time;
    /**
     * Portamento is ignored in this synth. use pitch decay instead.
     */
    readonly portamento = 0;
    /**
     * @param options the options available for the synth see defaults
     */
    constructor(options?: RecursivePartial<MembraneSynthOptions>);
    static getDefaults(): MembraneSynthOptions;
    setNote(note: Frequency | FrequencyClass, time?: Time): this;
    dispose(): this;
}
