import { Param } from "../context/Param.js";
import { optionsFromArguments } from "../util/Defaults.js";
import { readOnly } from "../util/Interface.js";
import { ToneAudioNode } from "./ToneAudioNode.js";
/**
 * Wrapper around Web Audio's native [DelayNode](http://webaudio.github.io/web-audio-api/#the-delaynode-interface).
 * @category Core
 * @example
 * return Tone.Offline(() => {
 * 	const delay = new Tone.Delay(0.1).toDestination();
 * 	// connect the signal to both the delay and the destination
 * 	const pulse = new Tone.PulseOscillator().connect(delay).toDestination();
 * 	// start and stop the pulse
 * 	pulse.start(0).stop(0.01);
 * }, 0.5, 1);
 */
export class Delay extends ToneAudioNode {
    constructor() {
        const options = optionsFromArguments(Delay.getDefaults(), arguments, [
            "delayTime",
            "maxDelay",
        ]);
        super(options);
        this.name = "Delay";
        const maxDelayInSeconds = this.toSeconds(options.maxDelay);
        this._maxDelay = Math.max(maxDelayInSeconds, this.toSeconds(options.delayTime));
        this._delayNode =
            this.input =
                this.output =
                    this.context.createDelay(maxDelayInSeconds);
        this.delayTime = new Param({
            context: this.context,
            param: this._delayNode.delayTime,
            units: "time",
            value: options.delayTime,
            minValue: 0,
            maxValue: this.maxDelay,
        });
        readOnly(this, "delayTime");
    }
    static getDefaults() {
        return Object.assign(ToneAudioNode.getDefaults(), {
            delayTime: 0,
            maxDelay: 1,
        });
    }
    /**
     * The maximum delay time. This cannot be changed after
     * the value is passed into the constructor.
     */
    get maxDelay() {
        return this._maxDelay;
    }
    /**
     * Clean up.
     */
    dispose() {
        super.dispose();
        this._delayNode.disconnect();
        this.delayTime.dispose();
        return this;
    }
}
//# sourceMappingURL=Delay.js.map