import { ToneAudioNode, ToneAudioNodeOptions } from "../context/ToneAudioNode.js";
export type ToneAudioWorkletOptions = ToneAudioNodeOptions;
export declare abstract class ToneAudioWorklet<Options extends ToneAudioWorkletOptions> extends ToneAudioNode<Options> {
    readonly name: string;
    /**
     * The processing node
     */
    protected _worklet: AudioWorkletNode;
    /**
     * A dummy gain node to create a dummy audio param from
     */
    private _dummyGain;
    /**
     * A dummy audio param to use when creating Params
     */
    protected _dummyParam: AudioParam;
    /**
     * The constructor options for the node
     */
    protected workletOptions: Partial<AudioWorkletNodeOptions>;
    /**
     * Get the name of the audio worklet
     */
    protected abstract _audioWorkletName(): string;
    /**
     * Invoked when the module is loaded and the node is created
     */
    protected abstract onReady(node: AudioWorkletNode): void;
    /**
     * Callback which is invoked when there is an error in the processing
     */
    onprocessorerror: (e: string) => void;
    constructor(options: Options);
    dispose(): this;
}
