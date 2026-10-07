import { Envelope, EnvelopeOptions } from "../component/envelope/Envelope.js";
import { ToneAudioNodeOptions } from "../core/context/ToneAudioNode.js";
import { Frequency, NormalRange, Positive, Seconds, Time } from "../core/type/Units.js";
import { RecursivePartial } from "../core/util/Interface.js";
import { Signal } from "../signal/Signal.js";
import { Monophonic, MonophonicOptions } from "./Monophonic.js";
export interface MetalSynthOptions extends MonophonicOptions {
    harmonicity: Positive;
    modulationIndex: Positive;
    octaves: number;
    resonance: Frequency;
    envelope: Omit<EnvelopeOptions, keyof ToneAudioNodeOptions>;
}
/**
 * A highly inharmonic and spectrally complex source with a highpass filter
 * and amplitude envelope which is good for making metallophone sounds.
 * Based on CymbalSynth by [@polyrhythmatic](https://github.com/polyrhythmatic).
 * @category Instrument
 */
export declare class MetalSynth extends Monophonic<MetalSynthOptions> {
    readonly name: string;
    /**
     * The frequency of the cymbal
     */
    readonly frequency: Signal<"frequency">;
    /**
     * The detune applied to the oscillators
     */
    readonly detune: Signal<"cents">;
    /**
     * The array of FMOscillators
     */
    private _oscillators;
    /**
     * The frequency multipliers
     */
    private _freqMultipliers;
    /**
     * The gain node for the envelope.
     */
    private _amplitude;
    /**
     * Highpass the output
     */
    private _highpass;
    /**
     * The number of octaves the highpass
     * filter frequency ramps
     */
    private _octaves;
    /**
     * Scale the body envelope for the highpass filter
     */
    private _filterFreqScaler;
    /**
     * The envelope which is connected both to the
     * amplitude and a highpass filter's cutoff frequency.
     * The lower-limit of the filter is controlled by the {@link resonance}
     */
    readonly envelope: Envelope;
    constructor(options?: RecursivePartial<MetalSynthOptions>);
    static getDefaults(): MetalSynthOptions;
    /**
     * Trigger the attack.
     * @param time When the attack should be triggered.
     * @param velocity The velocity that the envelope should be triggered at.
     */
    protected _triggerEnvelopeAttack(time: Seconds, velocity?: NormalRange): this;
    /**
     * Trigger the release of the envelope.
     * @param time When the release should be triggered.
     */
    protected _triggerEnvelopeRelease(time: Seconds): this;
    getLevelAtTime(time: Time): NormalRange;
    /**
     * The modulationIndex of the oscillators which make up the source.
     * see {@link FMOscillator.modulationIndex}
     * @min 1
     * @max 100
     */
    get modulationIndex(): number;
    set modulationIndex(val: number);
    /**
     * The harmonicity of the oscillators which make up the source.
     * see Tone.FMOscillator.harmonicity
     * @min 0.1
     * @max 10
     */
    get harmonicity(): number;
    set harmonicity(val: number);
    /**
     * The lower level of the highpass filter which is attached to the envelope.
     * This value should be between [0, 7000]
     * @min 0
     * @max 7000
     */
    get resonance(): Frequency;
    set resonance(val: Frequency);
    /**
     * The number of octaves above the "resonance" frequency
     * that the filter ramps during the attack/decay envelope
     * @min 0
     * @max 8
     */
    get octaves(): number;
    set octaves(val: number);
    dispose(): this;
}
