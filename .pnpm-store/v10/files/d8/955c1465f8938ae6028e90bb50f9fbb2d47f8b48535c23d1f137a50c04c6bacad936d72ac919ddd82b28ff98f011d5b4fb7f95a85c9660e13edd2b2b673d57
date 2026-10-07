import { Effect, EffectOptions } from "../effect/Effect.js";
import { Frequency, NormalRange, Time } from "../core/type/Units.js";
import { LFO } from "../source/oscillator/LFO.js";
import { ToneOscillatorType } from "../source/oscillator/OscillatorInterface.js";
import { Signal } from "../signal/Signal.js";
import { Param } from "../core/context/Param.js";
export interface LFOEffectOptions extends EffectOptions {
    frequency: Frequency;
    type: ToneOscillatorType;
    depth: NormalRange;
}
/**
 * Base class for LFO-based effects.
 */
export declare abstract class LFOEffect<Options extends LFOEffectOptions> extends Effect<Options> {
    readonly name: string;
    /**
     * the lfo which drives the filter cutoff
     */
    protected _lfo: LFO;
    /**
     * The range of the filter modulating between the min and max frequency.
     * 0 = no modulation. 1 = full modulation.
     */
    readonly depth: Param<"normalRange">;
    /**
     * How fast the filter modulates between min and max.
     */
    readonly frequency: Signal<"frequency">;
    constructor(options: LFOEffectOptions);
    static getDefaults(): LFOEffectOptions;
    /**
     * Start the effect.
     */
    start(time?: Time): this;
    /**
     * Stop the lfo
     */
    stop(time?: Time): this;
    /**
     * Sync the filter to the transport.
     * @see {@link LFO.sync}
     */
    sync(): this;
    /**
     * Unsync the filter from the transport.
     */
    unsync(): this;
    /**
     * The type of the LFO's oscillator.
     * @see {@link Oscillator.type}
     * @example
     * const autoFilter = new Tone.AutoFilter().start().toDestination();
     * const noise = new Tone.Noise().start().connect(autoFilter);
     * autoFilter.type = "square";
     */
    get type(): ToneOscillatorType;
    set type(type: ToneOscillatorType);
    dispose(): this;
}
