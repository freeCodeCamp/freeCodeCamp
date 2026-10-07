import { MidSideEffect, } from "../effect/MidSideEffect.js";
import { Signal } from "../signal/Signal.js";
import { Multiply } from "../signal/Multiply.js";
import { Subtract } from "../signal/Subtract.js";
import { optionsFromArguments } from "../core/util/Defaults.js";
import { readOnly } from "../core/util/Interface.js";
import { connect } from "../core/context/ToneAudioNode.js";
/**
 * Applies a width factor to the mid/side seperation.
 * 0 is all mid and 1 is all side.
 * Algorithm found in [kvraudio forums](http://www.kvraudio.com/forum/viewtopic.php?t=212587).
 * ```
 * Mid *= 2*(1-width)<br>
 * Side *= 2*width
 * ```
 * @category Effect
 */
export class StereoWidener extends MidSideEffect {
    constructor() {
        const options = optionsFromArguments(StereoWidener.getDefaults(), arguments, ["width"]);
        super(options);
        this.name = "StereoWidener";
        this.width = new Signal({
            context: this.context,
            value: options.width,
            units: "normalRange",
        });
        readOnly(this, ["width"]);
        this._twoTimesWidthMid = new Multiply({
            context: this.context,
            value: 2,
        });
        this._twoTimesWidthSide = new Multiply({
            context: this.context,
            value: 2,
        });
        this._midMult = new Multiply({ context: this.context });
        this._twoTimesWidthMid.connect(this._midMult.factor);
        this.connectEffectMid(this._midMult);
        this._oneMinusWidth = new Subtract({ context: this.context });
        this._oneMinusWidth.connect(this._twoTimesWidthMid);
        connect(this.context.getConstant(1), this._oneMinusWidth);
        this.width.connect(this._oneMinusWidth.subtrahend);
        this._sideMult = new Multiply({ context: this.context });
        this.width.connect(this._twoTimesWidthSide);
        this._twoTimesWidthSide.connect(this._sideMult.factor);
        this.connectEffectSide(this._sideMult);
    }
    static getDefaults() {
        return Object.assign(MidSideEffect.getDefaults(), {
            width: 0.5,
        });
    }
    dispose() {
        super.dispose();
        this.width.dispose();
        this._midMult.dispose();
        this._sideMult.dispose();
        this._twoTimesWidthMid.dispose();
        this._twoTimesWidthSide.dispose();
        this._oneMinusWidth.dispose();
        return this;
    }
}
//# sourceMappingURL=StereoWidener.js.map