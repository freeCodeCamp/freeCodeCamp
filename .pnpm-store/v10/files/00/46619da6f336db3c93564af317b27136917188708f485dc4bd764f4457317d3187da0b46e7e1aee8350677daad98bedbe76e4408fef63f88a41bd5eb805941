import { Effect } from "./Effect.js";
import { MidSideSplit } from "../component/channel/MidSideSplit.js";
import { MidSideMerge } from "../component/channel/MidSideMerge.js";
/**
 * Mid/Side processing separates the the 'mid' signal
 * (which comes out of both the left and the right channel)
 * and the 'side' (which only comes out of the the side channels)
 * and effects them separately before being recombined.
 * Applies a Mid/Side seperation and recombination.
 * Algorithm found in [kvraudio forums](http://www.kvraudio.com/forum/viewtopic.php?t=212587).
 * This is a base-class for Mid/Side Effects.
 * @category Effect
 */
export class MidSideEffect extends Effect {
    constructor(options) {
        super(options);
        this.name = "MidSideEffect";
        this._midSideMerge = new MidSideMerge({ context: this.context });
        this._midSideSplit = new MidSideSplit({ context: this.context });
        this._midSend = this._midSideSplit.mid;
        this._sideSend = this._midSideSplit.side;
        this._midReturn = this._midSideMerge.mid;
        this._sideReturn = this._midSideMerge.side;
        // the connections
        this.effectSend.connect(this._midSideSplit);
        this._midSideMerge.connect(this.effectReturn);
    }
    /**
     * Connect the mid chain of the effect
     */
    connectEffectMid(...nodes) {
        this._midSend.chain(...nodes, this._midReturn);
    }
    /**
     * Connect the side chain of the effect
     */
    connectEffectSide(...nodes) {
        this._sideSend.chain(...nodes, this._sideReturn);
    }
    dispose() {
        super.dispose();
        this._midSideSplit.dispose();
        this._midSideMerge.dispose();
        this._midSend.dispose();
        this._sideSend.dispose();
        this._midReturn.dispose();
        this._sideReturn.dispose();
        return this;
    }
}
//# sourceMappingURL=MidSideEffect.js.map