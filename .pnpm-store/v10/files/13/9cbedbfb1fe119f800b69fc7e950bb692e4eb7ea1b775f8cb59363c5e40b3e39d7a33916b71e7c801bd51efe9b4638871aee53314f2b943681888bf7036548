import { gainToDb } from "../../core/type/Conversions.js";
import { optionsFromArguments } from "../../core/util/Defaults.js";
import { MeterBase } from "./MeterBase.js";
import { warn } from "../../core/util/Debug.js";
import { Analyser } from "./Analyser.js";
/**
 * Meter gets the [RMS](https://en.wikipedia.org/wiki/Root_mean_square)
 * of an input signal. It can also get the raw value of the input signal.
 * Setting `normalRange` to `true` will covert the output to a range of
 * 0-1. See an example using a graphical display
 * [here](https://tonejs.github.io/examples/meter).
 * @see {@link DCMeter}.
 *
 * @example
 * const meter = new Tone.Meter();
 * const mic = new Tone.UserMedia();
 * mic.open();
 * // connect mic to the meter
 * mic.connect(meter);
 * // the current level of the mic
 * setInterval(() => console.log(meter.getValue()), 100);
 * @category Component
 */
export class Meter extends MeterBase {
    constructor() {
        const options = optionsFromArguments(Meter.getDefaults(), arguments, [
            "smoothing",
        ]);
        super(options);
        this.name = "Meter";
        this.input =
            this.output =
                this._analyser =
                    new Analyser({
                        context: this.context,
                        size: 256,
                        type: "waveform",
                        channels: options.channelCount,
                    });
        (this.smoothing = options.smoothing),
            (this.normalRange = options.normalRange);
        this._rms = new Array(options.channelCount);
        this._rms.fill(0);
    }
    static getDefaults() {
        return Object.assign(MeterBase.getDefaults(), {
            smoothing: 0.8,
            normalRange: false,
            channelCount: 1,
        });
    }
    /**
     * Use {@link getValue} instead. For the previous getValue behavior, use DCMeter.
     * @deprecated
     */
    getLevel() {
        warn("'getLevel' has been changed to 'getValue'");
        return this.getValue();
    }
    /**
     * Get the current value of the incoming signal.
     * Output is in decibels when {@link normalRange} is `false`.
     * If {@link channels} = 1, then the output is a single number
     * representing the value of the input signal. When {@link channels} > 1,
     * then each channel is returned as a value in a number array.
     */
    getValue() {
        const aValues = this._analyser.getValue();
        const channelValues = this.channels === 1
            ? [aValues]
            : aValues;
        const vals = channelValues.map((values, index) => {
            const totalSquared = values.reduce((total, current) => total + current * current, 0);
            const rms = Math.sqrt(totalSquared / values.length);
            // the rms can only fall at the rate of the smoothing
            // but can jump up instantly
            this._rms[index] = Math.max(rms, this._rms[index] * this.smoothing);
            return this.normalRange
                ? this._rms[index]
                : gainToDb(this._rms[index]);
        });
        if (this.channels === 1) {
            return vals[0];
        }
        else {
            return vals;
        }
    }
    /**
     * The number of channels of analysis.
     */
    get channels() {
        return this._analyser.channels;
    }
    dispose() {
        super.dispose();
        this._analyser.dispose();
        return this;
    }
}
//# sourceMappingURL=Meter.js.map