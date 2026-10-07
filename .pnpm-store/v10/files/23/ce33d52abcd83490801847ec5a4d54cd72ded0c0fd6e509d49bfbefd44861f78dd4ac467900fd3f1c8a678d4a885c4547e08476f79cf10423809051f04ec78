import { ToneAudioNode, } from "../../core/context/ToneAudioNode.js";
import { Merge } from "./Merge.js";
import { Add } from "../../signal/Add.js";
import { Multiply } from "../../signal/Multiply.js";
import { Subtract } from "../../signal/Subtract.js";
import { Gain } from "../../core/context/Gain.js";
import { optionsFromArguments } from "../../core/util/Defaults.js";
/**
 * MidSideMerge merges the mid and side signal after they've been separated by {@link MidSideSplit}
 * ```
 * Mid = (Left+Right)/sqrt(2);   // obtain mid-signal from left and right
 * Side = (Left-Right)/sqrt(2);   // obtain side-signal from left and right
 * ```
 * @category Component
 */
export class MidSideMerge extends ToneAudioNode {
    constructor() {
        super(optionsFromArguments(MidSideMerge.getDefaults(), arguments));
        this.name = "MidSideMerge";
        this.mid = new Gain({ context: this.context });
        this.side = new Gain({ context: this.context });
        this._left = new Add({ context: this.context });
        this._leftMult = new Multiply({
            context: this.context,
            value: Math.SQRT1_2,
        });
        this._right = new Subtract({ context: this.context });
        this._rightMult = new Multiply({
            context: this.context,
            value: Math.SQRT1_2,
        });
        this._merge = this.output = new Merge({ context: this.context });
        this.mid.fan(this._left);
        this.side.connect(this._left.addend);
        this.mid.connect(this._right);
        this.side.connect(this._right.subtrahend);
        this._left.connect(this._leftMult);
        this._right.connect(this._rightMult);
        this._leftMult.connect(this._merge, 0, 0);
        this._rightMult.connect(this._merge, 0, 1);
    }
    dispose() {
        super.dispose();
        this.mid.dispose();
        this.side.dispose();
        this._leftMult.dispose();
        this._rightMult.dispose();
        this._left.dispose();
        this._right.dispose();
        return this;
    }
}
//# sourceMappingURL=MidSideMerge.js.map