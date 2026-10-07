import { InputNode, OutputNode, ToneAudioNode, ToneAudioNodeOptions } from "../../core/context/ToneAudioNode.js";
import { Compressor, CompressorOptions } from "./Compressor.js";
import { RecursivePartial } from "../../core/util/Interface.js";
export interface MidSideCompressorOptions extends ToneAudioNodeOptions {
    mid: Omit<CompressorOptions, keyof ToneAudioNodeOptions>;
    side: Omit<CompressorOptions, keyof ToneAudioNodeOptions>;
}
/**
 * MidSideCompressor applies two different compressors to the {@link mid}
 * and {@link side} signal components of the input.
 * @see {@link MidSideSplit} and {@link MidSideMerge}.
 * @category Component
 */
export declare class MidSideCompressor extends ToneAudioNode<MidSideCompressorOptions> {
    readonly name: string;
    readonly input: InputNode;
    readonly output: OutputNode;
    /**
     * Split the incoming signal into Mid/Side
     */
    private _midSideSplit;
    /**
     * Merge the compressed signal back into a single stream
     */
    private _midSideMerge;
    /**
     * The compression applied to the mid signal
     */
    readonly mid: Compressor;
    /**
     * The compression applied to the side signal
     */
    readonly side: Compressor;
    constructor(options?: RecursivePartial<MidSideCompressorOptions>);
    static getDefaults(): MidSideCompressorOptions;
    dispose(): this;
}
