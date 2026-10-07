import { CrossFade } from "../component/channel/CrossFade.js";
import { Gain } from "../core/context/Gain.js";
import { ToneAudioNode, } from "../core/context/ToneAudioNode.js";
import { readOnly } from "../core/util/Interface.js";
/**
 * Effect is the base class for effects. Connect the effect between
 * the effectSend and effectReturn GainNodes, then control the amount of
 * effect which goes to the output using the wet control.
 */
export class Effect extends ToneAudioNode {
    constructor(options) {
        super(options);
        this.name = "Effect";
        /**
         * the drywet knob to control the amount of effect
         */
        this._dryWet = new CrossFade({ context: this.context });
        /**
         * The wet control is how much of the effected
         * will pass through to the output. 1 = 100% effected
         * signal, 0 = 100% dry signal.
         */
        this.wet = this._dryWet.fade;
        /**
         * connect the effectSend to the input of hte effect
         */
        this.effectSend = new Gain({ context: this.context });
        /**
         * connect the output of the effect to the effectReturn
         */
        this.effectReturn = new Gain({ context: this.context });
        /**
         * The effect input node
         */
        this.input = new Gain({ context: this.context });
        /**
         * The effect output
         */
        this.output = this._dryWet;
        // connections
        this.input.fan(this._dryWet.a, this.effectSend);
        this.effectReturn.connect(this._dryWet.b);
        this.wet.setValueAtTime(options.wet, 0);
        this._internalChannels = [this.effectReturn, this.effectSend];
        readOnly(this, "wet");
    }
    static getDefaults() {
        return Object.assign(ToneAudioNode.getDefaults(), {
            wet: 1,
        });
    }
    /**
     * chains the effect in between the effectSend and effectReturn
     */
    connectEffect(effect) {
        // add it to the internal channels
        this._internalChannels.push(effect);
        this.effectSend.chain(effect, this.effectReturn);
        return this;
    }
    dispose() {
        super.dispose();
        this._dryWet.dispose();
        this.effectSend.dispose();
        this.effectReturn.dispose();
        this.wet.dispose();
        return this;
    }
}
//# sourceMappingURL=Effect.js.map