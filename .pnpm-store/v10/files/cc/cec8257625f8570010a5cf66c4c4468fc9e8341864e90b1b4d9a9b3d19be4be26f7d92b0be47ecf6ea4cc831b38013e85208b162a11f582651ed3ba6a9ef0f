import { optionsFromArguments } from "../core/util/Defaults.js";
import {
	InputNode,
	ToneAudioNode,
	ToneAudioNodeOptions,
} from "../core/context/ToneAudioNode.js";
import { connectSignal } from "./Signal.js";

export type SignalOperatorOptions = ToneAudioNodeOptions;

/**
 * A signal operator has an input and output and modifies the signal.
 */
export abstract class SignalOperator<
	Options extends SignalOperatorOptions,
> extends ToneAudioNode<Options> {
	constructor(options?: Partial<Options>);
	constructor() {
		super(
			optionsFromArguments(SignalOperator.getDefaults(), arguments, [
				"context",
			])
		);
	}

	connect(destination: InputNode, outputNum = 0, inputNum = 0): this {
		connectSignal(this, destination, outputNum, inputNum);
		return this;
	}
}
