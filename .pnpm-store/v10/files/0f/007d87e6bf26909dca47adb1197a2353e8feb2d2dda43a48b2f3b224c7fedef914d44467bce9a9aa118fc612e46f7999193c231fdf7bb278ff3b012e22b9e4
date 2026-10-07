import { isAudioNode, isAudioParam } from "../util/AdvancedTypeCheck.js";
import { isDefined } from "../util/TypeCheck.js";
import { Param } from "./Param.js";
import { ToneWithContext, ToneWithContextOptions } from "./ToneWithContext.js";
import { assert, warn } from "../util/Debug.js";

export type InputNode = ToneAudioNode | AudioNode | Param<any> | AudioParam;
export type OutputNode = ToneAudioNode | AudioNode;

interface ChannelProperties {
	channelCount: number;
	channelCountMode: ChannelCountMode;
	channelInterpretation: ChannelInterpretation;
}

/**
 * The possible options for this node
 */
export type ToneAudioNodeOptions = ToneWithContextOptions;

/**
 * ToneAudioNode is the base class for classes which process audio.
 * @category Core
 */
export abstract class ToneAudioNode<
	Options extends ToneAudioNodeOptions = ToneAudioNodeOptions,
> extends ToneWithContext<Options> {
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
	get numberOfInputs(): number {
		if (isDefined(this.input)) {
			if (isAudioParam(this.input) || this.input instanceof Param) {
				return 1;
			} else {
				return this.input.numberOfInputs;
			}
		} else {
			return 0;
		}
	}

	/**
	 * The number of outputs of the AudioNode.
	 * @example
	 * const node = new Tone.Gain();
	 * console.log(node.numberOfOutputs);
	 */
	get numberOfOutputs(): number {
		if (isDefined(this.output)) {
			return this.output.numberOfOutputs;
		} else {
			return 0;
		}
	}

	/**
	 * List all of the node that must be set to match the ChannelProperties
	 */
	protected _internalChannels: OutputNode[] = [];

	//-------------------------------------
	// AUDIO PROPERTIES
	//-------------------------------------

	/**
	 * Used to decide which nodes to get/set properties on
	 */
	private _isAudioNode(node: any): node is AudioNode | ToneAudioNode {
		return (
			isDefined(node) &&
			(node instanceof ToneAudioNode || isAudioNode(node))
		);
	}

	/**
	 * Get all of the audio nodes (either internal or input/output) which together
	 * make up how the class node responds to channel input/output
	 */
	private _getInternalNodes(): OutputNode[] {
		const nodeList = this._internalChannels.slice(0);
		if (this._isAudioNode(this.input)) {
			nodeList.push(this.input);
		}
		if (this._isAudioNode(this.output)) {
			if (this.input !== this.output) {
				nodeList.push(this.output);
			}
		}
		return nodeList;
	}

	/**
	 * Set the audio options for this node such as channelInterpretation
	 * channelCount, etc.
	 * @param options
	 */
	private _setChannelProperties(options: ChannelProperties): void {
		const nodeList = this._getInternalNodes();
		nodeList.forEach((node) => {
			node.channelCount = options.channelCount;
			node.channelCountMode = options.channelCountMode;
			node.channelInterpretation = options.channelInterpretation;
		});
	}

	/**
	 * Get the current audio options for this node such as channelInterpretation
	 * channelCount, etc.
	 */
	private _getChannelProperties(): ChannelProperties {
		const nodeList = this._getInternalNodes();
		assert(
			nodeList.length > 0,
			"ToneAudioNode does not have any internal nodes"
		);
		// use the first node to get properties
		// they should all be the same
		const node = nodeList[0];
		return {
			channelCount: node.channelCount,
			channelCountMode: node.channelCountMode,
			channelInterpretation: node.channelInterpretation,
		};
	}

	/**
	 * channelCount is the number of channels used when up-mixing and down-mixing
	 * connections to any inputs to the node. The default value is 2 except for
	 * specific nodes where its value is specially determined.
	 */
	get channelCount(): number {
		return this._getChannelProperties().channelCount;
	}
	set channelCount(channelCount) {
		const props = this._getChannelProperties();
		// merge it with the other properties
		this._setChannelProperties(Object.assign(props, { channelCount }));
	}

	/**
	 * channelCountMode determines how channels will be counted when up-mixing and
	 * down-mixing connections to any inputs to the node.
	 * The default value is "max". This attribute has no effect for nodes with no inputs.
	 * * "max" - computedNumberOfChannels is the maximum of the number of channels of all connections to an input. In this mode channelCount is ignored.
	 * * "clamped-max" - computedNumberOfChannels is determined as for "max" and then clamped to a maximum value of the given channelCount.
	 * * "explicit" - computedNumberOfChannels is the exact value as specified by the channelCount.
	 */
	get channelCountMode(): ChannelCountMode {
		return this._getChannelProperties().channelCountMode;
	}
	set channelCountMode(channelCountMode) {
		const props = this._getChannelProperties();
		// merge it with the other properties
		this._setChannelProperties(Object.assign(props, { channelCountMode }));
	}

	/**
	 * channelInterpretation determines how individual channels will be treated
	 * when up-mixing and down-mixing connections to any inputs to the node.
	 * The default value is "speakers".
	 */
	get channelInterpretation(): ChannelInterpretation {
		return this._getChannelProperties().channelInterpretation;
	}
	set channelInterpretation(channelInterpretation) {
		const props = this._getChannelProperties();
		// merge it with the other properties
		this._setChannelProperties(
			Object.assign(props, { channelInterpretation })
		);
	}

	//-------------------------------------
	// CONNECTIONS
	//-------------------------------------

	/**
	 * connect the output of a ToneAudioNode to an AudioParam, AudioNode, or ToneAudioNode
	 * @param destination The output to connect to
	 * @param outputNum The output to connect from
	 * @param inputNum The input to connect to
	 */
	connect(destination: InputNode, outputNum = 0, inputNum = 0): this {
		connect(this, destination, outputNum, inputNum);
		return this;
	}

	/**
	 * Connect the output to the context's destination node.
	 * @example
	 * const osc = new Tone.Oscillator("C2").start();
	 * osc.toDestination();
	 */
	toDestination(): this {
		this.connect(this.context.destination);
		return this;
	}

	/**
	 * Connect the output to the context's destination node.
	 * @see {@link toDestination}
	 * @deprecated
	 */
	toMaster(): this {
		warn("toMaster() has been renamed toDestination()");
		return this.toDestination();
	}

	/**
	 * disconnect the output
	 */
	disconnect(destination?: InputNode, outputNum = 0, inputNum = 0): this {
		disconnect(this, destination, outputNum, inputNum);
		return this;
	}

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
	chain(...nodes: InputNode[]): this {
		connectSeries(this, ...nodes);
		return this;
	}

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
	fan(...nodes: InputNode[]): this {
		nodes.forEach((node) => this.connect(node));
		return this;
	}

	/**
	 * Dispose and disconnect
	 */
	dispose(): this {
		super.dispose();
		if (isDefined(this.input)) {
			if (this.input instanceof ToneAudioNode) {
				this.input.dispose();
			} else if (isAudioNode(this.input)) {
				this.input.disconnect();
			}
		}
		if (isDefined(this.output)) {
			if (this.output instanceof ToneAudioNode) {
				this.output.dispose();
			} else if (isAudioNode(this.output)) {
				this.output.disconnect();
			}
		}
		this._internalChannels = [];
		return this;
	}
}

//-------------------------------------
// CONNECTIONS
//-------------------------------------

/**
 * connect together all of the arguments in series
 * @param nodes
 */
export function connectSeries(...nodes: InputNode[]): void {
	const first = nodes.shift();
	nodes.reduce((prev, current) => {
		if (prev instanceof ToneAudioNode) {
			prev.connect(current);
		} else if (isAudioNode(prev)) {
			connect(prev, current);
		}
		return current;
	}, first);
}

/**
 * Connect two nodes together so that signal flows from the
 * first node to the second. Optionally specify the input and output channels.
 * @param srcNode The source node
 * @param dstNode The destination node
 * @param outputNumber The output channel of the srcNode
 * @param inputNumber The input channel of the dstNode
 */
export function connect(
	srcNode: OutputNode,
	dstNode: InputNode,
	outputNumber = 0,
	inputNumber = 0
): void {
	assert(isDefined(srcNode), "Cannot connect from undefined node");
	assert(isDefined(dstNode), "Cannot connect to undefined node");

	if (dstNode instanceof ToneAudioNode || isAudioNode(dstNode)) {
		assert(
			dstNode.numberOfInputs > 0,
			"Cannot connect to node with no inputs"
		);
	}
	assert(
		srcNode.numberOfOutputs > 0,
		"Cannot connect from node with no outputs"
	);

	// resolve the input of the dstNode
	while (dstNode instanceof ToneAudioNode || dstNode instanceof Param) {
		if (isDefined(dstNode.input)) {
			dstNode = dstNode.input;
		}
	}

	while (srcNode instanceof ToneAudioNode) {
		if (isDefined(srcNode.output)) {
			srcNode = srcNode.output;
		}
	}

	// make the connection
	if (isAudioParam(dstNode)) {
		srcNode.connect(dstNode as AudioParam, outputNumber);
	} else {
		srcNode.connect(dstNode, outputNumber, inputNumber);
	}
}

/**
 * Disconnect a node from all nodes or optionally include a destination node and input/output channels.
 * @param srcNode The source node
 * @param dstNode The destination node
 * @param outputNumber The output channel of the srcNode
 * @param inputNumber The input channel of the dstNode
 */
export function disconnect(
	srcNode: OutputNode,
	dstNode?: InputNode,
	outputNumber = 0,
	inputNumber = 0
): void {
	// resolve the destination node
	if (isDefined(dstNode)) {
		while (dstNode instanceof ToneAudioNode) {
			dstNode = dstNode.input;
		}
	}

	// resolve the src node
	while (!isAudioNode(srcNode)) {
		if (isDefined(srcNode.output)) {
			srcNode = srcNode.output;
		}
	}

	if (isAudioParam(dstNode)) {
		srcNode.disconnect(dstNode, outputNumber);
	} else if (isAudioNode(dstNode)) {
		srcNode.disconnect(dstNode, outputNumber, inputNumber);
	} else {
		srcNode.disconnect();
	}
}

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
export function fanIn(...nodes: OutputNode[]): void {
	const dstNode = nodes.pop();

	if (isDefined(dstNode)) {
		nodes.forEach((node) => connect(node, dstNode));
	}
}
