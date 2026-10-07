import { InputNode, ToneAudioNode, ToneAudioNodeOptions } from "../core/context/ToneAudioNode.js";
export type SignalOperatorOptions = ToneAudioNodeOptions;
/**
 * A signal operator has an input and output and modifies the signal.
 */
export declare abstract class SignalOperator<Options extends SignalOperatorOptions> extends ToneAudioNode<Options> {
    constructor(options?: Partial<Options>);
    connect(destination: InputNode, outputNum?: number, inputNum?: number): this;
}
