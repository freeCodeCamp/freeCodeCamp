import { ToneAudioNode, } from "../../core/context/ToneAudioNode.js";
import { GreaterThan } from "../../signal/GreaterThan.js";
import { Gain } from "../../core/context/Gain.js";
import { Follower } from "../analysis/Follower.js";
import { optionsFromArguments } from "../../core/util/Defaults.js";
import { dbToGain, gainToDb } from "../../core/type/Conversions.js";
/**
 * Gate only passes a signal through when the incoming
 * signal exceeds a specified threshold. It uses {@link Follower} to follow the ampltiude
 * of the incoming signal and compares it to the {@link threshold} value using {@link GreaterThan}.
 *
 * @example
 * const gate = new Tone.Gate(-30, 0.2).toDestination();
 * const mic = new Tone.UserMedia().connect(gate);
 * // the gate will only pass through the incoming
 * // signal when it's louder than -30db
 * @category Component
 */
export class Gate extends ToneAudioNode {
    constructor() {
        const options = optionsFromArguments(Gate.getDefaults(), arguments, [
            "threshold",
            "smoothing",
        ]);
        super(options);
        this.name = "Gate";
        this._follower = new Follower({
            context: this.context,
            smoothing: options.smoothing,
        });
        this._gt = new GreaterThan({
            context: this.context,
            value: dbToGain(options.threshold),
        });
        this.input = new Gain({ context: this.context });
        this._gate = this.output = new Gain({ context: this.context });
        // connections
        this.input.connect(this._gate);
        // the control signal
        this.input.chain(this._follower, this._gt, this._gate.gain);
    }
    static getDefaults() {
        return Object.assign(ToneAudioNode.getDefaults(), {
            smoothing: 0.1,
            threshold: -40,
        });
    }
    /**
     * The threshold of the gate in decibels
     */
    get threshold() {
        return gainToDb(this._gt.value);
    }
    set threshold(thresh) {
        this._gt.value = dbToGain(thresh);
    }
    /**
     * The attack/decay speed of the gate.
     * @see {@link Follower.smoothing}
     */
    get smoothing() {
        return this._follower.smoothing;
    }
    set smoothing(smoothingTime) {
        this._follower.smoothing = smoothingTime;
    }
    dispose() {
        super.dispose();
        this.input.dispose();
        this._follower.dispose();
        this._gt.dispose();
        this._gate.dispose();
        return this;
    }
}
//# sourceMappingURL=Gate.js.map