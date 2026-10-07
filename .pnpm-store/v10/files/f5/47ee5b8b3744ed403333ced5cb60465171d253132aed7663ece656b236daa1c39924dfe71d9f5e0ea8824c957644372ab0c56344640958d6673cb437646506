import { ToneAudioNodeOptions } from "../core/context/ToneAudioNode.js";
import { SignalOperator } from "./SignalOperator.js";
import { WaveShaper } from "./WaveShaper.js";
/**
 * AudioToGain converts an input in AudioRange [-1,1] to NormalRange [0,1].
 * @see {@link GainToAudio}.
 * @category Signal
 */
export declare class AudioToGain extends SignalOperator<ToneAudioNodeOptions> {
    readonly name: string;
    /**
     * The node which converts the audio ranges
     */
    private _norm;
    /**
     * The AudioRange input [-1, 1]
     */
    input: WaveShaper;
    /**
     * The GainRange output [0, 1]
     */
    output: WaveShaper;
    /**
     * clean up
     */
    dispose(): this;
}
