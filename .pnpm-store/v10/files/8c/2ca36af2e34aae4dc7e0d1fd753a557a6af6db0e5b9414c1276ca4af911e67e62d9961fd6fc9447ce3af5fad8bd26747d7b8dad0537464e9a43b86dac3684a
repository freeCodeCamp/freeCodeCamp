import { Param } from "../../core/context/Param.js";
import { Cents, Frequency, Seconds, Time } from "../../core/type/Units.js";
import { OneShotSource, OneShotSourceOptions } from "../OneShotSource.js";
export interface ToneOscillatorNodeOptions extends OneShotSourceOptions {
    frequency: Frequency;
    detune: Cents;
    type: OscillatorType;
}
/**
 * Wrapper around the native fire-and-forget OscillatorNode.
 * Adds the ability to reschedule the stop method.
 * ***{@link Oscillator} is better for most use-cases***
 * @category Source
 */
export declare class ToneOscillatorNode extends OneShotSource<ToneOscillatorNodeOptions> {
    readonly name: string;
    /**
     * The oscillator
     */
    private _oscillator;
    protected _internalChannels: OscillatorNode[];
    /**
     * The frequency of the oscillator
     */
    readonly frequency: Param<"frequency">;
    /**
     * The detune of the oscillator
     */
    readonly detune: Param<"cents">;
    /**
     * @param  frequency   The frequency value
     * @param  type  The basic oscillator type
     */
    constructor(frequency: Frequency, type: OscillatorType);
    constructor(options?: Partial<ToneOscillatorNodeOptions>);
    static getDefaults(): ToneOscillatorNodeOptions;
    /**
     * Start the oscillator node at the given time
     * @param  time When to start the oscillator
     */
    start(time?: Time): this;
    protected _stopSource(time?: Seconds): void;
    /**
     * Sets an arbitrary custom periodic waveform given a PeriodicWave.
     * @param  periodicWave PeriodicWave should be created with context.createPeriodicWave
     */
    setPeriodicWave(periodicWave: PeriodicWave): this;
    /**
     * The oscillator type. Either 'sine', 'sawtooth', 'square', or 'triangle'
     */
    get type(): OscillatorType;
    set type(type: OscillatorType);
    /**
     * Clean up.
     */
    dispose(): this;
}
