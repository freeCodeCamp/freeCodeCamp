import { ToneAudioNode, ToneAudioNodeOptions } from "../../core/context/ToneAudioNode.js";
import { Positive } from "../../core/type/Units.js";
interface MergeOptions extends ToneAudioNodeOptions {
    channels: Positive;
}
/**
 * Merge brings multiple mono input channels into a single multichannel output channel.
 *
 * @example
 * const merge = new Tone.Merge().toDestination();
 * // routing a sine tone in the left channel
 * const osc = new Tone.Oscillator().connect(merge, 0, 0).start();
 * // and noise in the right channel
 * const noise = new Tone.Noise().connect(merge, 0, 1).start();;
 * @category Component
 */
export declare class Merge extends ToneAudioNode<MergeOptions> {
    readonly name: string;
    /**
     * The merger node for the channels.
     */
    private _merger;
    /**
     * The output is the input channels combined into a single (multichannel) output
     */
    readonly output: ChannelMergerNode;
    /**
     * Multiple input connections combine into a single output.
     */
    readonly input: ChannelMergerNode;
    /**
     * @param channels The number of channels to merge.
     */
    constructor(channels?: Positive);
    constructor(options?: Partial<MergeOptions>);
    static getDefaults(): MergeOptions;
    dispose(): this;
}
export {};
