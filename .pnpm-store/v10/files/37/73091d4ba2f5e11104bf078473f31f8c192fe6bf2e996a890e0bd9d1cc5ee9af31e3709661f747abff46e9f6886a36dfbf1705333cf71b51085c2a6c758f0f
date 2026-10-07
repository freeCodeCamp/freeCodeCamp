import { Signal } from "./Signal.js";
import { optionsFromArguments } from "../core/util/Defaults.js";
import { TransportTimeClass } from "../core/type/TransportTime.js";
import { ToneConstantSource } from "./ToneConstantSource.js";
/**
 * Adds the ability to synchronize the signal to the {@link TransportClass}
 * @category Signal
 */
export class SyncedSignal extends Signal {
    constructor() {
        const options = optionsFromArguments(Signal.getDefaults(), arguments, [
            "value",
            "units",
        ]);
        super(options);
        this.name = "SyncedSignal";
        /**
         * Don't override when something is connected to the input
         */
        this.override = false;
        this._lastVal = options.value;
        this._synced = this.context.transport.scheduleRepeat(this._onTick.bind(this), "1i");
        this._syncedCallback = this._anchorValue.bind(this);
        this.context.transport.on("start", this._syncedCallback);
        this.context.transport.on("pause", this._syncedCallback);
        this.context.transport.on("stop", this._syncedCallback);
        // disconnect the constant source from the output and replace it with another one
        this._constantSource.disconnect();
        this._constantSource.stop(0);
        // create a new one
        this._constantSource = this.output = new ToneConstantSource({
            context: this.context,
            offset: options.value,
            units: options.units,
        }).start(0);
        this.setValueAtTime(options.value, 0);
    }
    /**
     * Callback which is invoked every tick.
     */
    _onTick(time) {
        const val = super.getValueAtTime(this.context.transport.seconds);
        // approximate ramp curves with linear ramps
        if (this._lastVal !== val) {
            this._lastVal = val;
            this._constantSource.offset.setValueAtTime(val, time);
        }
    }
    /**
     * Anchor the value at the start and stop of the Transport
     */
    _anchorValue(time) {
        const val = super.getValueAtTime(this.context.transport.seconds);
        this._lastVal = val;
        this._constantSource.offset.cancelAndHoldAtTime(time);
        this._constantSource.offset.setValueAtTime(val, time);
    }
    getValueAtTime(time) {
        const computedTime = new TransportTimeClass(this.context, time).toSeconds();
        return super.getValueAtTime(computedTime);
    }
    setValueAtTime(value, time) {
        const computedTime = new TransportTimeClass(this.context, time).toSeconds();
        super.setValueAtTime(value, computedTime);
        return this;
    }
    linearRampToValueAtTime(value, time) {
        const computedTime = new TransportTimeClass(this.context, time).toSeconds();
        super.linearRampToValueAtTime(value, computedTime);
        return this;
    }
    exponentialRampToValueAtTime(value, time) {
        const computedTime = new TransportTimeClass(this.context, time).toSeconds();
        super.exponentialRampToValueAtTime(value, computedTime);
        return this;
    }
    setTargetAtTime(value, startTime, timeConstant) {
        const computedTime = new TransportTimeClass(this.context, startTime).toSeconds();
        super.setTargetAtTime(value, computedTime, timeConstant);
        return this;
    }
    cancelScheduledValues(startTime) {
        const computedTime = new TransportTimeClass(this.context, startTime).toSeconds();
        super.cancelScheduledValues(computedTime);
        return this;
    }
    setValueCurveAtTime(values, startTime, duration, scaling) {
        const computedTime = new TransportTimeClass(this.context, startTime).toSeconds();
        duration = this.toSeconds(duration);
        super.setValueCurveAtTime(values, computedTime, duration, scaling);
        return this;
    }
    cancelAndHoldAtTime(time) {
        const computedTime = new TransportTimeClass(this.context, time).toSeconds();
        super.cancelAndHoldAtTime(computedTime);
        return this;
    }
    setRampPoint(time) {
        const computedTime = new TransportTimeClass(this.context, time).toSeconds();
        super.setRampPoint(computedTime);
        return this;
    }
    exponentialRampTo(value, rampTime, startTime) {
        const computedTime = new TransportTimeClass(this.context, startTime).toSeconds();
        super.exponentialRampTo(value, rampTime, computedTime);
        return this;
    }
    linearRampTo(value, rampTime, startTime) {
        const computedTime = new TransportTimeClass(this.context, startTime).toSeconds();
        super.linearRampTo(value, rampTime, computedTime);
        return this;
    }
    targetRampTo(value, rampTime, startTime) {
        const computedTime = new TransportTimeClass(this.context, startTime).toSeconds();
        super.targetRampTo(value, rampTime, computedTime);
        return this;
    }
    dispose() {
        super.dispose();
        this.context.transport.clear(this._synced);
        this.context.transport.off("start", this._syncedCallback);
        this.context.transport.off("pause", this._syncedCallback);
        this.context.transport.off("stop", this._syncedCallback);
        this._constantSource.dispose();
        return this;
    }
}
//# sourceMappingURL=SyncedSignal.js.map