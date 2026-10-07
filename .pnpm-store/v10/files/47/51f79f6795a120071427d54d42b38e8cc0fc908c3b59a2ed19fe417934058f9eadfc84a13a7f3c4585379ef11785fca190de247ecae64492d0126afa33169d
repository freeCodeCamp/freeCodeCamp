import { connect, connectSeries, ToneAudioNode, } from "../core/context/ToneAudioNode.js";
import { CrossFade } from "../component/channel/CrossFade.js";
import { Split } from "../component/channel/Split.js";
import { Gain } from "../core/context/Gain.js";
import { Merge } from "../component/channel/Merge.js";
import { readOnly } from "../core/util/Interface.js";
/**
 * Base class for Stereo effects.
 */
export class StereoEffect extends ToneAudioNode {
    constructor(options) {
        super(options);
        this.name = "StereoEffect";
        this.input = new Gain({ context: this.context });
        // force mono sources to be stereo
        this.input.channelCount = 2;
        this.input.channelCountMode = "explicit";
        this._dryWet = this.output = new CrossFade({
            context: this.context,
            fade: options.wet,
        });
        this.wet = this._dryWet.fade;
        this._split = new Split({ context: this.context, channels: 2 });
        this._merge = new Merge({ context: this.context, channels: 2 });
        // connections
        this.input.connect(this._split);
        // dry wet connections
        this.input.connect(this._dryWet.a);
        this._merge.connect(this._dryWet.b);
        readOnly(this, ["wet"]);
    }
    /**
     * Connect the left part of the effect
     */
    connectEffectLeft(...nodes) {
        this._split.connect(nodes[0], 0, 0);
        connectSeries(...nodes);
        connect(nodes[nodes.length - 1], this._merge, 0, 0);
    }
    /**
     * Connect the right part of the effect
     */
    connectEffectRight(...nodes) {
        this._split.connect(nodes[0], 1, 0);
        connectSeries(...nodes);
        connect(nodes[nodes.length - 1], this._merge, 0, 1);
    }
    static getDefaults() {
        return Object.assign(ToneAudioNode.getDefaults(), {
            wet: 1,
        });
    }
    dispose() {
        super.dispose();
        this._dryWet.dispose();
        this._split.dispose();
        this._merge.dispose();
        return this;
    }
}
//# sourceMappingURL=StereoEffect.js.map