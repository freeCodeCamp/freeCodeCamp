import { Effect } from "./Effect.js";
import { optionsFromArguments } from "../core/util/Defaults.js";
import { LFO } from "../source/oscillator/LFO.js";
import { Delay } from "../core/context/Delay.js";
import { readOnly } from "../core/util/Interface.js";
/**
 * A Vibrato effect composed of a Tone.Delay and a Tone.LFO. The LFO
 * modulates the delayTime of the delay, causing the pitch to rise and fall.
 * @category Effect
 */
export class Vibrato extends Effect {
    constructor() {
        const options = optionsFromArguments(Vibrato.getDefaults(), arguments, [
            "frequency",
            "depth",
        ]);
        super(options);
        this.name = "Vibrato";
        this._delayNode = new Delay({
            context: this.context,
            delayTime: 0,
            maxDelay: options.maxDelay,
        });
        this._lfo = new LFO({
            context: this.context,
            type: options.type,
            min: 0,
            max: options.maxDelay,
            frequency: options.frequency,
            phase: -90, // offse the phase so the resting position is in the center
        })
            .start()
            .connect(this._delayNode.delayTime);
        this.frequency = this._lfo.frequency;
        this.depth = this._lfo.amplitude;
        this.depth.value = options.depth;
        readOnly(this, ["frequency", "depth"]);
        this.effectSend.chain(this._delayNode, this.effectReturn);
    }
    static getDefaults() {
        return Object.assign(Effect.getDefaults(), {
            maxDelay: 0.005,
            frequency: 5,
            depth: 0.1,
            type: "sine",
        });
    }
    /**
     * Type of oscillator attached to the Vibrato.
     */
    get type() {
        return this._lfo.type;
    }
    set type(type) {
        this._lfo.type = type;
    }
    dispose() {
        super.dispose();
        this._delayNode.dispose();
        this._lfo.dispose();
        this.frequency.dispose();
        this.depth.dispose();
        return this;
    }
}
//# sourceMappingURL=Vibrato.js.map