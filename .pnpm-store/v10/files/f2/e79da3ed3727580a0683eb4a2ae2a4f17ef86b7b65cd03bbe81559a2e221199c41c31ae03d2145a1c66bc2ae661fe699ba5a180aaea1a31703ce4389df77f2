import { ToneAudioWorkletOptions } from "../core/worklet/ToneAudioWorklet.js";
import { Effect, EffectOptions } from "./Effect.js";
import { Positive } from "../core/type/Units.js";
import { Param } from "../core/context/Param.js";
export interface BitCrusherOptions extends EffectOptions {
    bits: Positive;
}
/**
 * BitCrusher down-samples the incoming signal to a different bit depth.
 * Lowering the bit depth of the signal creates distortion. Read more about BitCrushing
 * on [Wikipedia](https://en.wikipedia.org/wiki/Bitcrusher).
 * @example
 * // initialize crusher and route a synth through it
 * const crusher = new Tone.BitCrusher(4).toDestination();
 * const synth = new Tone.Synth().connect(crusher);
 * synth.triggerAttackRelease("C2", 2);
 *
 * @category Effect
 */
export declare class BitCrusher extends Effect<BitCrusherOptions> {
    readonly name: string;
    /**
     * The bit depth of the effect
     * @min 1
     * @max 16
     */
    readonly bits: Param<"positive">;
    /**
     * The node which does the bit crushing effect. Runs in an AudioWorklet when possible.
     */
    private _bitCrusherWorklet;
    constructor(bits?: Positive);
    constructor(options?: Partial<BitCrusherWorkletOptions>);
    static getDefaults(): BitCrusherOptions;
    dispose(): this;
}
interface BitCrusherWorkletOptions extends ToneAudioWorkletOptions {
    bits: number;
}
export {};
