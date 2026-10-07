import { ToneAudioNodeOptions } from "../core/context/ToneAudioNode.js";
import { SignalOperator } from "./SignalOperator.js";
export type WaveShaperMappingFn = (value: number, index?: number) => number;
type WaveShaperMapping = WaveShaperMappingFn | number[] | Float32Array;
interface WaveShaperOptions extends ToneAudioNodeOptions {
    mapping?: WaveShaperMapping;
    length: number;
    curve?: number[] | Float32Array;
}
/**
 * Wraps the native Web Audio API
 * [WaveShaperNode](http://webaudio.github.io/web-audio-api/#the-waveshapernode-interface).
 *
 * @example
 * const osc = new Tone.Oscillator().toDestination().start();
 * // multiply the output of the signal by 2 using the waveshaper's function
 * const timesTwo = new Tone.WaveShaper((val) => val * 2, 2048).connect(osc.frequency);
 * const signal = new Tone.Signal(440).connect(timesTwo);
 * @category Signal
 */
export declare class WaveShaper extends SignalOperator<WaveShaperOptions> {
    readonly name: string;
    /**
     * the waveshaper node
     */
    private _shaper;
    /**
     * The input to the waveshaper node.
     */
    input: WaveShaperNode;
    /**
     * The output from the waveshaper node
     */
    output: WaveShaperNode;
    /**
     * @param mapping The function used to define the values.
     *                The mapping function should take two arguments:
     *                the first is the value at the current position
     *                and the second is the array position.
     *                If the argument is an array, that array will be
     *                set as the wave shaping function. The input
     *                signal is an AudioRange [-1, 1] value and the output
     *                signal can take on any numerical values.
     *
     * @param length The length of the WaveShaperNode buffer.
     */
    constructor(mapping?: WaveShaperMapping, length?: number);
    constructor(options?: Partial<WaveShaperOptions>);
    static getDefaults(): WaveShaperOptions;
    /**
     * Uses a mapping function to set the value of the curve.
     * @param mapping The function used to define the values.
     *                The mapping function take two arguments:
     *                the first is the value at the current position
     *                which goes from -1 to 1 over the number of elements
     *                in the curve array. The second argument is the array position.
     * @example
     * const shaper = new Tone.WaveShaper();
     * // map the input signal from [-1, 1] to [0, 10]
     * shaper.setMap((val, index) => (val + 1) * 5);
     */
    setMap(mapping: WaveShaperMappingFn, length?: number): this;
    /**
     * The array to set as the waveshaper curve. For linear curves
     * array length does not make much difference, but for complex curves
     * longer arrays will provide smoother interpolation.
     */
    get curve(): Float32Array | null;
    set curve(mapping: Float32Array | null);
    /**
     * Specifies what type of oversampling (if any) should be used when
     * applying the shaping curve. Can either be "none", "2x" or "4x".
     */
    get oversample(): OverSampleType;
    set oversample(oversampling: OverSampleType);
    /**
     * Clean up.
     */
    dispose(): this;
}
export {};
