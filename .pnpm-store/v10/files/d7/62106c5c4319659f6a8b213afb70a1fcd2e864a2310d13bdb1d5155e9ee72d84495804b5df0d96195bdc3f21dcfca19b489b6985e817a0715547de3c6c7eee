import { Effect, EffectOptions } from "./Effect.js";
import { OutputNode, ToneAudioNode } from "../core/context/ToneAudioNode.js";
export type MidSideEffectOptions = EffectOptions;
/**
 * Mid/Side processing separates the the 'mid' signal
 * (which comes out of both the left and the right channel)
 * and the 'side' (which only comes out of the the side channels)
 * and effects them separately before being recombined.
 * Applies a Mid/Side seperation and recombination.
 * Algorithm found in [kvraudio forums](http://www.kvraudio.com/forum/viewtopic.php?t=212587).
 * This is a base-class for Mid/Side Effects.
 * @category Effect
 */
export declare abstract class MidSideEffect<Options extends MidSideEffectOptions> extends Effect<Options> {
    readonly name: string;
    /**
     * The mid/side split
     */
    private _midSideSplit;
    /**
     * The mid/side merge
     */
    private _midSideMerge;
    /**
     * The mid send. Connect to mid processing
     */
    protected _midSend: ToneAudioNode;
    /**
     * The side send. Connect to side processing
     */
    protected _sideSend: ToneAudioNode;
    /**
     * The mid return connection
     */
    protected _midReturn: ToneAudioNode;
    /**
     * The side return connection
     */
    protected _sideReturn: ToneAudioNode;
    constructor(options: MidSideEffectOptions);
    /**
     * Connect the mid chain of the effect
     */
    protected connectEffectMid(...nodes: OutputNode[]): void;
    /**
     * Connect the side chain of the effect
     */
    protected connectEffectSide(...nodes: OutputNode[]): void;
    dispose(): this;
}
