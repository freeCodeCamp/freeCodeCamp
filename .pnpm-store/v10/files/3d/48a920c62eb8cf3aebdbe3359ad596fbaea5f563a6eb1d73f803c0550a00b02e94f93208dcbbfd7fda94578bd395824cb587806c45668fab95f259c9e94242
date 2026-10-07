import { Param } from "../../core/context/Param.js";
import { ToneAudioNode, ToneAudioNodeOptions } from "../../core/context/ToneAudioNode.js";
import { AudioRange } from "../../core/type/Units.js";
interface TonePannerOptions extends ToneAudioNodeOptions {
    pan: AudioRange;
    channelCount: number;
}
/**
 * Panner is an equal power Left/Right Panner. It is a wrapper around the StereoPannerNode.
 * @example
 * return Tone.Offline(() => {
 * // move the input signal from right to left
 * 	const panner = new Tone.Panner(1).toDestination();
 * 	panner.pan.rampTo(-1, 0.5);
 * 	const osc = new Tone.Oscillator(100).connect(panner).start();
 * }, 0.5, 2);
 * @category Component
 */
export declare class Panner extends ToneAudioNode<TonePannerOptions> {
    readonly name: string;
    /**
     * the panner node
     */
    private _panner;
    readonly input: StereoPannerNode;
    readonly output: StereoPannerNode;
    /**
     * The pan control. -1 = hard left, 1 = hard right.
     * @min -1
     * @max 1
     * @example
     * return Tone.Offline(() => {
     * 	// pan hard right
     * 	const panner = new Tone.Panner(1).toDestination();
     * 	// pan hard left
     * 	panner.pan.setValueAtTime(-1, 0.25);
     * 	const osc = new Tone.Oscillator(50, "triangle").connect(panner).start();
     * }, 0.5, 2);
     */
    readonly pan: Param<"audioRange">;
    constructor(options?: Partial<TonePannerOptions>);
    /**
     * @param pan The initial panner value (Defaults to 0 = "center").
     */
    constructor(pan?: AudioRange);
    static getDefaults(): TonePannerOptions;
    dispose(): this;
}
export {};
