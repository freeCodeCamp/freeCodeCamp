import { ToneAudioNodeOptions } from "../core/context/ToneAudioNode.js";
import { SignalOperator } from "./SignalOperator.js";
import { WaveShaper } from "./WaveShaper.js";
/**
 * Return the absolute value of an incoming signal.
 *
 * @example
 * return Tone.Offline(() => {
 * 	const abs = new Tone.Abs().toDestination();
 * 	const signal = new Tone.Signal(1);
 * 	signal.rampTo(-1, 0.5);
 * 	signal.connect(abs);
 * }, 0.5, 1);
 * @category Signal
 */
export declare class Abs extends SignalOperator<ToneAudioNodeOptions> {
    readonly name: string;
    /**
     * The node which converts the audio ranges
     */
    private _abs;
    /**
     * The AudioRange input [-1, 1]
     */
    input: WaveShaper;
    /**
     * The output range [0, 1]
     */
    output: WaveShaper;
    /**
     * clean up
     */
    dispose(): this;
}
