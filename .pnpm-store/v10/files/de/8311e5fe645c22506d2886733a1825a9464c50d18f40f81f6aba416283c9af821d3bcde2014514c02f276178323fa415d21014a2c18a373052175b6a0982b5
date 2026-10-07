import { Gain } from "../../core/context/Gain.js";
import { OutputNode, ToneAudioNode, ToneAudioNodeOptions } from "../../core/context/ToneAudioNode.js";
export type MonoOptions = ToneAudioNodeOptions;
/**
 * Mono coerces the incoming mono or stereo signal into a mono signal
 * where both left and right channels have the same value. This can be useful
 * for [stereo imaging](https://en.wikipedia.org/wiki/Stereo_imaging).
 * @category Component
 */
export declare class Mono extends ToneAudioNode<MonoOptions> {
    readonly name: string;
    /**
     * merge the signal
     */
    private _merge;
    /**
     * The summed output of the multiple inputs
     */
    readonly output: OutputNode;
    /**
     * The stereo signal to sum to mono
     */
    readonly input: Gain;
    constructor(options?: Partial<MonoOptions>);
    dispose(): this;
}
