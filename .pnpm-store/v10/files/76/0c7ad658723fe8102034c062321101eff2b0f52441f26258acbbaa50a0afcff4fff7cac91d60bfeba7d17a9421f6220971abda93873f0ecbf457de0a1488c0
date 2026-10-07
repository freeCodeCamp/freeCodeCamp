import { ToneAudioNodeOptions } from "../core/context/ToneAudioNode.js";
import { SignalOperator } from "./SignalOperator.js";
import { WaveShaper } from "./WaveShaper.js";
/**
 * GainToAudio converts an input in NormalRange [0,1] to AudioRange [-1,1].
 * @see {@link AudioToGain}.
 * @category Signal
 */
export declare class GainToAudio extends SignalOperator<ToneAudioNodeOptions> {
    readonly name: string;
    /**
     * The node which converts the audio ranges
     */
    private _norm;
    /**
     * The NormalRange input [0, 1]
     */
    input: WaveShaper;
    /**
     * The AudioRange output [-1, 1]
     */
    output: WaveShaper;
    /**
     * clean up
     */
    dispose(): this;
}
