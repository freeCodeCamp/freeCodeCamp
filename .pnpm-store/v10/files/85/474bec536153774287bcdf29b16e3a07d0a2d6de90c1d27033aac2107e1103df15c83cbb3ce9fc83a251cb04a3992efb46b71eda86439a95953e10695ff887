import { StereoEffect, StereoEffectOptions } from "./StereoEffect.js";
import { Signal } from "../signal/Signal.js";
import { Degrees, Frequency, NormalRange, Time } from "../core/type/Units.js";
import { ToneOscillatorType } from "../source/oscillator/OscillatorInterface.js";
export interface TremoloOptions extends StereoEffectOptions {
    frequency: Frequency;
    type: ToneOscillatorType;
    depth: NormalRange;
    spread: Degrees;
}
/**
 * Tremolo modulates the amplitude of an incoming signal using an {@link LFO}.
 * The effect is a stereo effect where the modulation phase is inverted in each channel.
 *
 * @example
 * // create a tremolo and start it's LFO
 * const tremolo = new Tone.Tremolo(9, 0.75).toDestination().start();
 * // route an oscillator through the tremolo and start it
 * const oscillator = new Tone.Oscillator().connect(tremolo).start();
 *
 * @category Effect
 */
export declare class Tremolo extends StereoEffect<TremoloOptions> {
    readonly name: string;
    /**
     * The tremolo LFO in the left channel
     */
    private _lfoL;
    /**
     * The tremolo LFO in the left channel
     */
    private _lfoR;
    /**
     * Where the gain is multiplied
     */
    private _amplitudeL;
    /**
     * Where the gain is multiplied
     */
    private _amplitudeR;
    /**
     * The frequency of the tremolo.
     */
    readonly frequency: Signal<"frequency">;
    /**
     * The depth of the effect. A depth of 0, has no effect
     * on the amplitude, and a depth of 1 makes the amplitude
     * modulate fully between 0 and 1.
     */
    readonly depth: Signal<"normalRange">;
    /**
     * @param frequency The rate of the effect.
     * @param depth The depth of the effect.
     */
    constructor(frequency?: Frequency, depth?: NormalRange);
    constructor(options?: Partial<TremoloOptions>);
    static getDefaults(): TremoloOptions;
    /**
     * Start the tremolo.
     */
    start(time?: Time): this;
    /**
     * Stop the tremolo.
     */
    stop(time?: Time): this;
    /**
     * Sync the effect to the transport.
     */
    sync(): this;
    /**
     * Unsync the filter from the transport
     */
    unsync(): this;
    /**
     * The oscillator type.
     */
    get type(): ToneOscillatorType;
    set type(type: ToneOscillatorType);
    /**
     * Amount of stereo spread. When set to 0, both LFO's will be panned centrally.
     * When set to 180, LFO's will be panned hard left and right respectively.
     */
    get spread(): Degrees;
    set spread(spread: Degrees);
    dispose(): this;
}
