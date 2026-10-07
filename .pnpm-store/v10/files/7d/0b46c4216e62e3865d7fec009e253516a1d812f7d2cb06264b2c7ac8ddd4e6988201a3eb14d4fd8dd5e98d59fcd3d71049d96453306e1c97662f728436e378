import { Signal } from "../../signal/Signal.js";
import { optionsFromArguments } from "../util/Defaults.js";
import { TickParam } from "./TickParam.js";
/**
 * TickSignal extends Tone.Signal, but adds the capability
 * to calculate the number of elapsed ticks. exponential and target curves
 * are approximated with multiple linear ramps.
 *
 * Thank you Bruno Dias, H. Sofia Pinto, and David M. Matos,
 * for your [WAC paper](https://smartech.gatech.edu/bitstream/handle/1853/54588/WAC2016-49.pdf)
 * describing integrating timing functions for tempo calculations.
 */
export class TickSignal extends Signal {
    constructor() {
        const options = optionsFromArguments(TickSignal.getDefaults(), arguments, ["value"]);
        super(options);
        this.name = "TickSignal";
        this.input = this._param = new TickParam({
            context: this.context,
            convert: options.convert,
            multiplier: options.multiplier,
            param: this._constantSource.offset,
            units: options.units,
            value: options.value,
        });
    }
    static getDefaults() {
        return Object.assign(Signal.getDefaults(), {
            multiplier: 1,
            units: "hertz",
            value: 1,
        });
    }
    ticksToTime(ticks, when) {
        return this._param.ticksToTime(ticks, when);
    }
    timeToTicks(duration, when) {
        return this._param.timeToTicks(duration, when);
    }
    getTimeOfTick(tick) {
        return this._param.getTimeOfTick(tick);
    }
    getDurationOfTicks(ticks, time) {
        return this._param.getDurationOfTicks(ticks, time);
    }
    getTicksAtTime(time) {
        return this._param.getTicksAtTime(time);
    }
    /**
     * A multiplier on the bpm value. Useful for setting a PPQ relative to the base frequency value.
     */
    get multiplier() {
        return this._param.multiplier;
    }
    set multiplier(m) {
        this._param.multiplier = m;
    }
    dispose() {
        super.dispose();
        this._param.dispose();
        return this;
    }
}
//# sourceMappingURL=TickSignal.js.map