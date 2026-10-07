import { Param } from "./Param.js";
import { ToneWithContext, ToneWithContextOptions } from "./ToneWithContext.js";
export type InputNode = ToneAudioNode | AudioNode | Param<any> | AudioParam;
export type OutputNode = ToneAudioNode | AudioNode;
/**
 * The possible options for this node
 */
export type ToneAudioNodeOptions = ToneWithContextOptions;
/**
 * ToneAudioNode is the base class for classes which process audio.
 * @category Core
 */
export declare abstract class ToneAudioNode<Options extends ToneAudioNodeOptions = ToneAudioNodeOptions> extends ToneWithContext<Options> {
    /**
     * The name of the class
     */
    abstract readonly name: string;
    /**
     * The input node or nodes. If the object is a source,
     * it does not have any input and this.input is undefined.
     */
    abstract input: InputNode | undefined;
    /**
     * The output nodes. If the object is a sink,
     * it does not have any output and this.output is undefined.
     */
    abstract output: OutputNode | undefined;
    /**
     * The number of inputs feeding into the AudioNode.
     * For source nodes, this will be 0.
     * @example
     * const node = new Tone.Gain();
     * console.log(node.numberOfInputs);
     */
    get numberOfInputs(): number;
    /**
     * The number of outputs of the AudioNode.
     * @example
     * const node = new Tone.Gain();
     * console.log(node.numberOfOutputs);
     */
    get numberOfOutputs(): number;
    /**
     * List all of the node that must be set to match the ChannelProperties
     */
    protected _internalChannels: OutputNode[];
    /**
     * Used to decide which nodes to get/set properties on
     */
    private _isAudioNode;
    /**
     * Get all of the audio nodes (either internal or input/output) which together
     * make up how the class node responds to channel input/output
     */
    private _getInternalNodes;
    /**
     * Set the audio options for this node such as channelInterpretation
     * channelCount, etc.
     * @param options
     */
    private _setChannelProperties;
    /**
     * Get the current audio options for this node such as channelInterpretation
     * channelCount, etc.
     */
    private _getChannelProperties;
    /**
     * channelCount is the number of channels used when up-mixing and down-mixing
     * connections to any inputs to the node. The default value is 2 except for
     * specific nodes where its value is specially determined.
     */
    get channelCount(): number;
    set channelCount(channelCount: number);
    /**
     * channelCountMode determines how channels will be counted when up-mixing and
     * down-mixing connections to any inputs to the node.
     * The default value is "max". This attribute has no effect for nodes with no inputs.
     * * "max" - computedNumberOfChannels is the maximum of the number of channels of all connections to an input. In this mode channelCount is ignored.
     * * "clamped-max" - computedNumberOfChannels is determined as for "max" and then clamped to a maximum value of the given channelCount.
     * * "explicit" - computedNumberOfChannels is the exact value as specified by the channelCount.
     */
    get channelCountMode(): ChannelCountMode;
    set channelCountMode(channelCountMode: ChannelCountMode);
    /**
     * channelInterpretation determines how individual channels will be treated
     * when up-mixing and down-mixing connections to any inputs to the node.
     * The default value is "speakers".
     */
    get channelInterpretation(): ChannelInterpretation;
    set channelInterpretation(channelInterpretation: ChannelInterpretation);
    /**
     * connect the output of a ToneAudioNode to an AudioParam, AudioNode, or ToneAudioNode
     * @param destination The output to connect to
     * @param outputNum The output to connect from
     * @param inputNum The input to connect to
     */
    connect(destination: InputNode, outputNum?: number, inputNum?: number): this;
    /**
     * Connect the output to the context's destination node.
     * @example
     * const osc = new Tone.Oscillator("C2").start();
     * osc.toDestination();
     */
    toDestination(): this;
    /**
     * Connect the output to the context's destination node.
     * @see {@link toDestination}
     * @deprecated
     */
    toMaster(): this;
    /**
     * disconnect the output
     */
    disconnect(destination?: InputNode, outputNum?: number, inputNum?: number): this;
    /**
     * Connect the output of this node to the rest of the nodes in series.
     * @example
     * const player = new Tone.Player("https://tonejs.github.io/audio/drum-samples/handdrum-loop.mp3");
     * player.autostart = true;
     * const filter = new Tone.AutoFilter(4).start();
     * const distortion = new Tone.Distortion(0.5);
     * // connect the player to the filter, distortion and then to the master output
     * player.chain(filter, distortion, Tone.Destination);
     */
    chain(...nodes: InputNode[]): this;
    /**
     * connect the output of this node to the rest of the nodes in parallel.
     * @example
     * const player = new Tone.Player("https://tonejs.github.io/audio/drum-samples/conga-rhythm.mp3");
     * player.autostart = true;
     * const pitchShift = new Tone.PitchShift(4).toDestination();
     * const filter = new Tone.Filter("G5").toDestination();
     * // connect a node to the pitch shift and filter in parallel
     * player.fan(pitchShift, filter);
     */
    fan(...nodes: InputNode[]): this;
    /**
     * Dispose and disconnect
     */
    dispose(): this;
}
/**
 * connect together all of the arguments in series
 * @param nodes
 */
export declare function connectSeries(...nodes: InputNode[]): void;
/**
 * Connect two nodes together so that signal flows from the
 * first node to the second. Optionally specify the input and output channels.
 * @param srcNode The source node
 * @param dstNode The destination node
 * @param outputNumber The output channel of the srcNode
 * @param inputNumber The input channel of the dstNode
 */
export declare function connect(srcNode: OutputNode, dstNode: InputNode, outputNumber?: number, inputNumber?: number): void;
/**
 * Disconnect a node from all nodes or optionally include a destination node and input/output channels.
 * @param srcNode The source node
 * @param dstNode The destination node
 * @param outputNumber The output channel of the srcNode
 * @param inputNumber The input channel of the dstNode
 */
export declare function disconnect(srcNode: OutputNode, dstNode?: InputNode, outputNumber?: number, inputNumber?: number): void;
/**
 * Connect the output of one or more source nodes to a single destination node
 * @param nodes One or more source nodes followed by one destination node
 * @example
 * const player = new Tone.Player("https://tonejs.github.io/audio/drum-samples/conga-rhythm.mp3");
 * const player1 = new Tone.Player("https://tonejs.github.io/audio/drum-samples/conga-rhythm.mp3");
 * const filter = new Tone.Filter("G5").toDestination();
 * // connect nodes to a common destination
 * Tone.fanIn(player, player1, filter);
 */
export declare function fanIn(...nodes: OutputNode[]): void;
