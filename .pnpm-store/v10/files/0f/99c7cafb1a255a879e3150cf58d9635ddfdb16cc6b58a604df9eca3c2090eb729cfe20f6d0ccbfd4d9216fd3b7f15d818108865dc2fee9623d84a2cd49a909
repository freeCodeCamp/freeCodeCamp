import { Gain } from "../core/context/Gain.js";
import { ToneAudioNodeOptions } from "../core/context/ToneAudioNode.js";
import { SignalOperator } from "./SignalOperator.js";
/**
 * Tone.Zero outputs 0's at audio-rate. The reason this has to be
 * it's own class is that many browsers optimize out Tone.Signal
 * with a value of 0 and will not process nodes further down the graph.
 * @category Signal
 */
export declare class Zero extends SignalOperator<ToneAudioNodeOptions> {
    readonly name: string;
    /**
     * The gain node which connects the constant source to the output
     */
    private _gain;
    /**
     * Only outputs 0
     */
    output: Gain<"gain">;
    /**
     * no input node
     */
    input: undefined;
    constructor(options?: Partial<ToneAudioNodeOptions>);
    /**
     * clean up
     */
    dispose(): this;
}
