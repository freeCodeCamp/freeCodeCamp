import { ToneAudioNode, ToneAudioNodeOptions } from "../../core/context/ToneAudioNode.js";
interface SplitOptions extends ToneAudioNodeOptions {
    channels: number;
}
/**
 * Split splits an incoming signal into the number of given channels.
 *
 * @example
 * const split = new Tone.Split();
 * // stereoSignal.connect(split);
 * @category Component
 */
export declare class Split extends ToneAudioNode<SplitOptions> {
    readonly name: string;
    /**
     * The splitting node
     */
    private _splitter;
    readonly input: ChannelSplitterNode;
    readonly output: ChannelSplitterNode;
    /**
     * @param channels The number of channels to merge.
     */
    constructor(channels?: number);
    constructor(options?: Partial<SplitOptions>);
    static getDefaults(): SplitOptions;
    dispose(): this;
}
export {};
