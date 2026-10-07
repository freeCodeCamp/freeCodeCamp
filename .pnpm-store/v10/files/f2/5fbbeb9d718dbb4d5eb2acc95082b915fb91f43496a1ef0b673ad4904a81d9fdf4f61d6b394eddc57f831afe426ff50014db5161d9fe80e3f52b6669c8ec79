import { InputNode, OutputNode, ToneAudioNode, ToneAudioNodeOptions } from "../../core/context/ToneAudioNode.js";
import { Analyser } from "./Analyser.js";
export type MeterBaseOptions = ToneAudioNodeOptions;
/**
 * The base class for Metering classes.
 */
export declare class MeterBase<Options extends MeterBaseOptions> extends ToneAudioNode<Options> {
    readonly name: string;
    /**
     * The signal to be analysed
     */
    input: InputNode;
    /**
     * The output is just a pass through of the input
     */
    output: OutputNode;
    /**
     * The analyser node for the incoming signal
     */
    protected _analyser: Analyser;
    constructor(options?: Partial<MeterBaseOptions>);
    dispose(): this;
}
