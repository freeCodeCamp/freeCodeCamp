import { ToneAudioWorklet, } from "../core/worklet/ToneAudioWorklet.js";
import { Effect } from "./Effect.js";
import { Gain } from "../core/context/Gain.js";
import { optionsFromArguments } from "../core/util/Defaults.js";
import { connectSeries } from "../core/context/ToneAudioNode.js";
import { Param } from "../core/context/Param.js";
import { workletName } from "./BitCrusher.worklet.js";
/**
 * BitCrusher down-samples the incoming signal to a different bit depth.
 * Lowering the bit depth of the signal creates distortion. Read more about BitCrushing
 * on [Wikipedia](https://en.wikipedia.org/wiki/Bitcrusher).
 * @example
 * // initialize crusher and route a synth through it
 * const crusher = new Tone.BitCrusher(4).toDestination();
 * const synth = new Tone.Synth().connect(crusher);
 * synth.triggerAttackRelease("C2", 2);
 *
 * @category Effect
 */
export class BitCrusher extends Effect {
    constructor() {
        const options = optionsFromArguments(BitCrusher.getDefaults(), arguments, ["bits"]);
        super(options);
        this.name = "BitCrusher";
        this._bitCrusherWorklet = new BitCrusherWorklet({
            context: this.context,
            bits: options.bits,
        });
        // connect it up
        this.connectEffect(this._bitCrusherWorklet);
        this.bits = this._bitCrusherWorklet.bits;
    }
    static getDefaults() {
        return Object.assign(Effect.getDefaults(), {
            bits: 4,
        });
    }
    dispose() {
        super.dispose();
        this._bitCrusherWorklet.dispose();
        return this;
    }
}
/**
 * Internal class which creates an AudioWorklet to do the bit crushing
 */
class BitCrusherWorklet extends ToneAudioWorklet {
    constructor() {
        const options = optionsFromArguments(BitCrusherWorklet.getDefaults(), arguments);
        super(options);
        this.name = "BitCrusherWorklet";
        this.input = new Gain({ context: this.context });
        this.output = new Gain({ context: this.context });
        this.bits = new Param({
            context: this.context,
            value: options.bits,
            units: "positive",
            minValue: 1,
            maxValue: 16,
            param: this._dummyParam,
            swappable: true,
        });
    }
    static getDefaults() {
        return Object.assign(ToneAudioWorklet.getDefaults(), {
            bits: 12,
        });
    }
    _audioWorkletName() {
        return workletName;
    }
    onReady(node) {
        connectSeries(this.input, node, this.output);
        const bits = node.parameters.get("bits");
        this.bits.setParam(bits);
    }
    dispose() {
        super.dispose();
        this.input.dispose();
        this.output.dispose();
        this.bits.dispose();
        return this;
    }
}
//# sourceMappingURL=BitCrusher.js.map