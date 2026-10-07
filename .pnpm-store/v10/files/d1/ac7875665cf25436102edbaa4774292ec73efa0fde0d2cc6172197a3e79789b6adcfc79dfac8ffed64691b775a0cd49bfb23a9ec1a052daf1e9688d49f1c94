import { AbstractParam } from "../core/context/AbstractParam.js";
import { Param } from "../core/context/Param.js";
import {
	InputNode,
	OutputNode,
	ToneAudioNode,
	ToneAudioNodeOptions,
} from "../core/context/ToneAudioNode.js";
import { connect } from "../core/context/ToneAudioNode.js";
import { Time, UnitMap, UnitName } from "../core/type/Units.js";
import { isAudioParam } from "../core/util/AdvancedTypeCheck.js";
import { optionsFromArguments } from "../core/util/Defaults.js";
import { ToneConstantSource } from "./ToneConstantSource.js";

export interface SignalOptions<TypeName extends UnitName>
	extends ToneAudioNodeOptions {
	value: UnitMap[TypeName];
	units: TypeName;
	convert: boolean;
	minValue?: number;
	maxValue?: number;
}

/**
 * A signal is an audio-rate value. Tone.Signal is a core component of the library.
 * Unlike a number, Signals can be scheduled with sample-level accuracy. Tone.Signal
 * has all of the methods available to native Web Audio
 * [AudioParam](http://webaudio.github.io/web-audio-api/#the-audioparam-interface)
 * as well as additional conveniences. Read more about working with signals
 * [here](https://github.com/Tonejs/Tone.js/wiki/Signals).
 *
 * @example
 * const osc = new Tone.Oscillator().toDestination().start();
 * // a scheduleable signal which can be connected to control an AudioParam or another Signal
 * const signal = new Tone.Signal({
 * 	value: "C4",
 * 	units: "frequency"
 * }).connect(osc.frequency);
 * // the scheduled ramp controls the connected signal
 * signal.rampTo("C2", 4, "+0.5");
 * @category Signal
 */
export class Signal<TypeName extends UnitName = "number">
	extends ToneAudioNode<SignalOptions<any>>
	implements AbstractParam<TypeName>
{
	readonly name: string = "Signal";

	/**
	 * Indicates if the value should be overridden on connection.
	 */
	readonly override: boolean = true;

	/**
	 * The constant source node which generates the signal
	 */
	protected _constantSource: ToneConstantSource<TypeName>;
	readonly output: OutputNode;
	protected _param: Param<TypeName>;
	readonly input: InputNode;

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

		this.output = this._constantSource = new ToneConstantSource({
			context: this.context,
			convert: options.convert,
			offset: options.value,
			units: options.units,
			minValue: options.minValue,
			maxValue: options.maxValue,
		});
		this._constantSource.start(0);
		this.input = this._param = this._constantSource.offset;
	}

	static getDefaults(): SignalOptions<any> {
		return Object.assign(ToneAudioNode.getDefaults(), {
			convert: true,
			units: "number" as UnitName,
			value: 0,
		});
	}

	connect(destination: InputNode, outputNum = 0, inputNum = 0): this {
		// start it only when connected to something
		connectSignal(this, destination, outputNum, inputNum);
		return this;
	}

	dispose(): this {
		super.dispose();
		this._param.dispose();
		this._constantSource.dispose();
		return this;
	}

	//-------------------------------------
	// ABSTRACT PARAM INTERFACE
	// just a proxy for the ConstantSourceNode's offset AudioParam
	// all docs are generated from AbstractParam.ts
	//-------------------------------------

	setValueAtTime(value: UnitMap[TypeName], time: Time): this {
		this._param.setValueAtTime(value, time);
		return this;
	}
	getValueAtTime(time: Time): UnitMap[TypeName] {
		return this._param.getValueAtTime(time);
	}
	setRampPoint(time: Time): this {
		this._param.setRampPoint(time);
		return this;
	}
	linearRampToValueAtTime(value: UnitMap[TypeName], time: Time): this {
		this._param.linearRampToValueAtTime(value, time);
		return this;
	}
	exponentialRampToValueAtTime(value: UnitMap[TypeName], time: Time): this {
		this._param.exponentialRampToValueAtTime(value, time);
		return this;
	}
	exponentialRampTo(
		value: UnitMap[TypeName],
		rampTime: Time,
		startTime?: Time
	): this {
		this._param.exponentialRampTo(value, rampTime, startTime);
		return this;
	}
	linearRampTo(
		value: UnitMap[TypeName],
		rampTime: Time,
		startTime?: Time
	): this {
		this._param.linearRampTo(value, rampTime, startTime);
		return this;
	}
	targetRampTo(
		value: UnitMap[TypeName],
		rampTime: Time,
		startTime?: Time
	): this {
		this._param.targetRampTo(value, rampTime, startTime);
		return this;
	}
	exponentialApproachValueAtTime(
		value: UnitMap[TypeName],
		time: Time,
		rampTime: Time
	): this {
		this._param.exponentialApproachValueAtTime(value, time, rampTime);
		return this;
	}
	setTargetAtTime(
		value: UnitMap[TypeName],
		startTime: Time,
		timeConstant: number
	): this {
		this._param.setTargetAtTime(value, startTime, timeConstant);
		return this;
	}
	setValueCurveAtTime(
		values: UnitMap[TypeName][],
		startTime: Time,
		duration: Time,
		scaling?: number
	): this {
		this._param.setValueCurveAtTime(values, startTime, duration, scaling);
		return this;
	}
	cancelScheduledValues(time: Time): this {
		this._param.cancelScheduledValues(time);
		return this;
	}
	cancelAndHoldAtTime(time: Time): this {
		this._param.cancelAndHoldAtTime(time);
		return this;
	}
	rampTo(value: UnitMap[TypeName], rampTime: Time, startTime?: Time): this {
		this._param.rampTo(value, rampTime, startTime);
		return this;
	}

	get value(): UnitMap[TypeName] {
		return this._param.value;
	}
	set value(value: UnitMap[TypeName]) {
		this._param.value = value;
	}

	get convert(): boolean {
		return this._param.convert;
	}
	set convert(convert: boolean) {
		this._param.convert = convert;
	}

	get units(): UnitName {
		return this._param.units;
	}

	get overridden(): boolean {
		return this._param.overridden;
	}
	set overridden(overridden: boolean) {
		this._param.overridden = overridden;
	}

	get maxValue(): number {
		return this._param.maxValue;
	}
	get minValue(): number {
		return this._param.minValue;
	}

	/**
	 * @see {@link Param.apply}.
	 */
	apply(param: Param | AudioParam): this {
		this._param.apply(param);
		return this;
	}
}

/**
 * When connecting from a signal, it's necessary to zero out the node destination
 * node if that node is also a signal. If the destination is not 0, then the values
 * will be summed. This method insures that the output of the destination signal will
 * be the same as the source signal, making the destination signal a pass through node.
 * @param signal The output signal to connect from
 * @param destination the destination to connect to
 * @param outputNum the optional output number
 * @param inputNum the input number
 */
export function connectSignal(
	signal: OutputNode,
	destination: InputNode,
	outputNum?: number,
	inputNum?: number
): void {
	if (
		destination instanceof Param ||
		isAudioParam(destination) ||
		(destination instanceof Signal && destination.override)
	) {
		// cancel changes
		destination.cancelScheduledValues(0);
		// reset the value
		destination.setValueAtTime(0, 0);
		// mark the value as overridden
		if (destination instanceof Signal) {
			destination.overridden = true;
		}
	}
	connect(signal, destination, outputNum, inputNum);
}
