import { InputNode, OutputNode, ToneAudioNode, ToneAudioNodeOptions } from "../../core/context/ToneAudioNode.js";
import { NormalRange, PowerOfTwo } from "../../core/type/Units.js";
export type AnalyserType = "fft" | "waveform";
export interface AnalyserOptions extends ToneAudioNodeOptions {
    size: PowerOfTwo;
    type: AnalyserType;
    smoothing: NormalRange;
    channels: number;
}
/**
 * Wrapper around the native Web Audio's [AnalyserNode](http://webaudio.github.io/web-audio-api/#idl-def-AnalyserNode).
 * Extracts FFT or Waveform data from the incoming signal.
 * @category Component
 */
export declare class Analyser extends ToneAudioNode<AnalyserOptions> {
    readonly name: string;
    readonly input: InputNode;
    readonly output: OutputNode;
    /**
     * The analyser node.
     */
    private _analysers;
    /**
     * Input and output are a gain node
     */
    private _gain;
    /**
     * The channel splitter node
     */
    private _split;
    /**
     * The analysis type
     */
    private _type;
    /**
     * The buffer that the FFT data is written to
     */
    private _buffers;
    /**
     * @param type The return type of the analysis, either "fft", or "waveform".
     * @param size The size of the FFT. This must be a power of two in the range 16 to 16384.
     */
    constructor(type?: AnalyserType, size?: number);
    constructor(options?: Partial<AnalyserOptions>);
    static getDefaults(): AnalyserOptions;
    /**
     * Run the analysis given the current settings. If {@link channels} = 1,
     * it will return a Float32Array. If {@link channels} > 1, it will
     * return an array of Float32Arrays where each index in the array
     * represents the analysis done on a channel.
     */
    getValue(): Float32Array | Float32Array[];
    /**
     * The size of analysis. This must be a power of two in the range 16 to 16384.
     */
    get size(): PowerOfTwo;
    set size(size: PowerOfTwo);
    /**
     * The number of channels the analyser does the analysis on. Channel
     * separation is done using {@link Split}
     */
    get channels(): number;
    /**
     * The analysis function returned by analyser.getValue(), either "fft" or "waveform".
     */
    get type(): AnalyserType;
    set type(type: AnalyserType);
    /**
     * 0 represents no time averaging with the last analysis frame.
     */
    get smoothing(): NormalRange;
    set smoothing(val: NormalRange);
    /**
     * Clean up.
     */
    dispose(): this;
}
