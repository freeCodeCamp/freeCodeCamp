import { optionsFromArguments } from "../core/util/Defaults.js";
import { ToneAudioNode, } from "../core/context/ToneAudioNode.js";
import { connectSignal } from "./Signal.js";
/**
 * A signal operator has an input and output and modifies the signal.
 */
export class SignalOperator extends ToneAudioNode {
    constructor() {
        super(optionsFromArguments(SignalOperator.getDefaults(), arguments, [
            "context",
        ]));
    }
    connect(destination, outputNum = 0, inputNum = 0) {
        connectSignal(this, destination, outputNum, inputNum);
        return this;
    }
}
//# sourceMappingURL=SignalOperator.js.map