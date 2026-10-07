import { Signal, SignalOptions } from "./Signal.js";
import { NormalRange, Time, TransportTime, UnitMap, UnitName } from "../core/type/Units.js";
import { OutputNode } from "../core/context/ToneAudioNode.js";
/**
 * Adds the ability to synchronize the signal to the {@link TransportClass}
 * @category Signal
 */
export declare class SyncedSignal<TypeName extends UnitName = "number"> extends Signal<TypeName> {
    readonly name: string;
    /**
     * Don't override when something is connected to the input
     */
    readonly override = false;
    readonly output: OutputNode;
    /**
     * Keep track of the last value as an optimization.
     */
    private _lastVal;
    /**
     * The ID returned from scheduleRepeat
     */
    private _synced;
    /**
     * Remember the callback value
     */
    private _syncedCallback;
    /**
     * @param value Initial value of the signal
     * @param units The unit name, e.g. "frequency"
     */
    constructor(value?: UnitMap[TypeName], units?: TypeName);
    constructor(options?: Partial<SignalOptions<TypeName>>);
    /**
     * Callback which is invoked every tick.
     */
    private _onTick;
    /**
     * Anchor the value at the start and stop of the Transport
     */
    private _anchorValue;
    getValueAtTime(time: TransportTime): UnitMap[TypeName];
    setValueAtTime(value: UnitMap[TypeName], time: TransportTime): this;
    linearRampToValueAtTime(value: UnitMap[TypeName], time: TransportTime): this;
    exponentialRampToValueAtTime(value: UnitMap[TypeName], time: TransportTime): this;
    setTargetAtTime(value: any, startTime: TransportTime, timeConstant: number): this;
    cancelScheduledValues(startTime: TransportTime): this;
    setValueCurveAtTime(values: UnitMap[TypeName][], startTime: TransportTime, duration: Time, scaling: NormalRange): this;
    cancelAndHoldAtTime(time: TransportTime): this;
    setRampPoint(time: TransportTime): this;
    exponentialRampTo(value: UnitMap[TypeName], rampTime: Time, startTime?: TransportTime): this;
    linearRampTo(value: UnitMap[TypeName], rampTime: Time, startTime?: TransportTime): this;
    targetRampTo(value: UnitMap[TypeName], rampTime: Time, startTime?: TransportTime): this;
    dispose(): this;
}
