import { Seconds, Time } from "../core/type/Units.js";
import { Effect, EffectOptions } from "./Effect.js";
export interface ReverbOptions extends EffectOptions {
    decay: Seconds;
    preDelay: Seconds;
}
/**
 * Simple convolution created with decaying noise.
 * Generates an Impulse Response Buffer
 * with Tone.Offline then feeds the IR into ConvolverNode.
 * The impulse response generation is async, so you have
 * to wait until {@link ready} resolves before it will make a sound.
 *
 * Inspiration from [ReverbGen](https://github.com/adelespinasse/reverbGen).
 * Copyright (c) 2014 Alan deLespinasse Apache 2.0 License.
 *
 * @category Effect
 */
export declare class Reverb extends Effect<ReverbOptions> {
    readonly name: string;
    /**
     * Convolver node
     */
    private _convolver;
    /**
     * The duration of the reverb.
     */
    private _decay;
    /**
     * The amount of time before the reverb is fully ramped in.
     */
    private _preDelay;
    /**
     * Resolves when the reverb buffer is generated. Whenever either {@link decay}
     * or {@link preDelay} are set, you have to wait until {@link ready} resolves
     * before the IR is generated with the latest values.
     */
    ready: Promise<void>;
    /**
     * @param decay The amount of time it will reverberate for.
     */
    constructor(decay?: Seconds);
    constructor(options?: Partial<ReverbOptions>);
    static getDefaults(): ReverbOptions;
    /**
     * The duration of the reverb.
     */
    get decay(): Time;
    set decay(time: Time);
    /**
     * The amount of time before the reverb is fully ramped in.
     */
    get preDelay(): Time;
    set preDelay(time: Time);
    /**
     * Generate the Impulse Response. Returns a promise while the IR is being generated.
     * @return Promise which returns this object.
     */
    generate(): Promise<this>;
    dispose(): this;
}
