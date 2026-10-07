import { Signal, SignalOptions } from "./Signal.js";
import {
	NormalRange,
	Seconds,
	Time,
	TransportTime,
	UnitMap,
	UnitName,
} from "../core/type/Units.js";
import { optionsFromArguments } from "../core/util/Defaults.js";
import { TransportTimeClass } from "../core/type/TransportTime.js";
import { ToneConstantSource } from "./ToneConstantSource.js";
import { OutputNode } from "../core/context/ToneAudioNode.js";
import type { TransportClass } from "../core/clock/Transport.js";

/**
 * Adds the ability to synchronize the signal to the {@link TransportClass}
 * @category Signal
 */
export class SyncedSignal<
	TypeName extends UnitName = "number",
> extends Signal<TypeName> {
	readonly name: string = "SyncedSignal";

	/**
	 * Don't override when something is connected to the input
	 */
	readonly override = false;

	readonly output: OutputNode;

	/**
	 * Keep track of the last value as an optimization.
	 */
	private _lastVal: UnitMap[TypeName];

	/**
	 * The ID returned from scheduleRepeat
	 */
	private _synced: number;

	/**
	 * Remember the callback value
	 */
	private _syncedCallback: () => void;

	/**
	 * @param value Initial value of the signal
	 * @param units The unit name, e.g. "frequency"
	 */
	constructor(value?: UnitMap[TypeName], units?: TypeName);
	constructor(options?: Partial<SignalOptions<TypeName>>);
	constructor() {
		const options = optionsFromArguments(Signal.getDefaults(), arguments, [
			"value",
			"units",
		]) as SignalOptions<TypeName>;
		super(options);

		this._lastVal = options.value;
		this._synced = this.context.transport.scheduleRepeat(
			this._onTick.bind(this),
			"1i"
		);

		this._syncedCallback = this._anchorValue.bind(this);
		this.context.transport.on("start", this._syncedCallback);
		this.context.transport.on("pause", this._syncedCallback);
		this.context.transport.on("stop", this._syncedCallback);

		// disconnect the constant source from the output and replace it with another one
		this._constantSource.disconnect();
		this._constantSource.stop(0);

		// create a new one
		this._constantSource = this.output = new ToneConstantSource<TypeName>({
			context: this.context,
			offset: options.value,
			units: options.units,
		}).start(0);
		this.setValueAtTime(options.value, 0);
	}

	/**
	 * Callback which is invoked every tick.
	 */
	private _onTick(time: Seconds): void {
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
	private _anchorValue(time: Seconds): void {
		const val = super.getValueAtTime(this.context.transport.seconds);
		this._lastVal = val;
		this._constantSource.offset.cancelAndHoldAtTime(time);
		this._constantSource.offset.setValueAtTime(val, time);
	}

	getValueAtTime(time: TransportTime): UnitMap[TypeName] {
		const computedTime = new TransportTimeClass(
			this.context,
			time
		).toSeconds();
		return super.getValueAtTime(computedTime);
	}

	setValueAtTime(value: UnitMap[TypeName], time: TransportTime) {
		const computedTime = new TransportTimeClass(
			this.context,
			time
		).toSeconds();
		super.setValueAtTime(value, computedTime);
		return this;
	}

	linearRampToValueAtTime(value: UnitMap[TypeName], time: TransportTime) {
		const computedTime = new TransportTimeClass(
			this.context,
			time
		).toSeconds();
		super.linearRampToValueAtTime(value, computedTime);
		return this;
	}

	exponentialRampToValueAtTime(
		value: UnitMap[TypeName],
		time: TransportTime
	) {
		const computedTime = new TransportTimeClass(
			this.context,
			time
		).toSeconds();
		super.exponentialRampToValueAtTime(value, computedTime);
		return this;
	}

	setTargetAtTime(
		value,
		startTime: TransportTime,
		timeConstant: number
	): this {
		const computedTime = new TransportTimeClass(
			this.context,
			startTime
		).toSeconds();
		super.setTargetAtTime(value, computedTime, timeConstant);
		return this;
	}

	cancelScheduledValues(startTime: TransportTime): this {
		const computedTime = new TransportTimeClass(
			this.context,
			startTime
		).toSeconds();
		super.cancelScheduledValues(computedTime);
		return this;
	}

	setValueCurveAtTime(
		values: UnitMap[TypeName][],
		startTime: TransportTime,
		duration: Time,
		scaling: NormalRange
	): this {
		const computedTime = new TransportTimeClass(
			this.context,
			startTime
		).toSeconds();
		duration = this.toSeconds(duration);
		super.setValueCurveAtTime(values, computedTime, duration, scaling);
		return this;
	}

	cancelAndHoldAtTime(time: TransportTime): this {
		const computedTime = new TransportTimeClass(
			this.context,
			time
		).toSeconds();
		super.cancelAndHoldAtTime(computedTime);
		return this;
	}

	setRampPoint(time: TransportTime): this {
		const computedTime = new TransportTimeClass(
			this.context,
			time
		).toSeconds();
		super.setRampPoint(computedTime);
		return this;
	}

	exponentialRampTo(
		value: UnitMap[TypeName],
		rampTime: Time,
		startTime?: TransportTime
	): this {
		const computedTime = new TransportTimeClass(
			this.context,
			startTime
		).toSeconds();
		super.exponentialRampTo(value, rampTime, computedTime);
		return this;
	}

	linearRampTo(
		value: UnitMap[TypeName],
		rampTime: Time,
		startTime?: TransportTime
	): this {
		const computedTime = new TransportTimeClass(
			this.context,
			startTime
		).toSeconds();
		super.linearRampTo(value, rampTime, computedTime);
		return this;
	}

	targetRampTo(
		value: UnitMap[TypeName],
		rampTime: Time,
		startTime?: TransportTime
	): this {
		const computedTime = new TransportTimeClass(
			this.context,
			startTime
		).toSeconds();
		super.targetRampTo(value, rampTime, computedTime);
		return this;
	}

	dispose(): this {
		super.dispose();
		this.context.transport.clear(this._synced);
		this.context.transport.off("start", this._syncedCallback);
		this.context.transport.off("pause", this._syncedCallback);
		this.context.transport.off("stop", this._syncedCallback);
		this._constantSource.dispose();
		return this;
	}
}
