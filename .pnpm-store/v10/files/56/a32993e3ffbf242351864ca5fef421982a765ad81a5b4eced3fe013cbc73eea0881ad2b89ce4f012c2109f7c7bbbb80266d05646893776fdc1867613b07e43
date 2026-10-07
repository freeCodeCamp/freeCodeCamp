import { Gain } from "../../core/context/Gain.js";
import { Param } from "../../core/context/Param.js";
import {
	InputNode,
	OutputNode,
	ToneAudioNode,
} from "../../core/context/ToneAudioNode.js";
import {
	Degrees,
	Frequency,
	NormalRange,
	Time,
	UnitName,
} from "../../core/type/Units.js";
import { optionsFromArguments } from "../../core/util/Defaults.js";
import { readOnly } from "../../core/util/Interface.js";
import { BasicPlaybackState } from "../../core/util/StateTimeline.js";
import { AudioToGain } from "../../signal/AudioToGain.js";
import { Scale } from "../../signal/Scale.js";
import { connectSignal, Signal } from "../../signal/Signal.js";
import { Zero } from "../../signal/Zero.js";
import { Oscillator, ToneOscillatorType } from "./Oscillator.js";
import {
	ToneOscillatorConstructorOptions,
	ToneOscillatorOptions,
} from "./OscillatorInterface.js";

export type LFOOptions = {
	min: number;
	max: number;
	amplitude: NormalRange;
	units: UnitName;
} & ToneOscillatorOptions;

/**
 * LFO stands for low frequency oscillator. LFO produces an output signal
 * which can be attached to an AudioParam or Tone.Signal
 * in order to modulate that parameter with an oscillator. The LFO can
 * also be synced to the transport to start/stop and change when the tempo changes.
 * @example
 * return Tone.Offline(() => {
 * 	const lfo = new Tone.LFO("4n", 400, 4000).start().toDestination();
 * }, 0.5, 1);
 * @category Source
 */
export class LFO extends ToneAudioNode<LFOOptions> {
	readonly name: string = "LFO";

	/**
	 * The oscillator.
	 */
	private _oscillator: Oscillator;

	/**
	 * The gain of the output
	 */
	private _amplitudeGain: Gain<"normalRange">;

	/**
	 * The amplitude of the LFO, which controls the output range between
	 * the min and max output. For example if the min is -10 and the max
	 * is 10, setting the amplitude to 0.5 would make the LFO modulate
	 * between -5 and 5.
	 */
	readonly amplitude: Param<"normalRange">;

	/**
	 * The signal which is output when the LFO is stopped
	 */
	private _stoppedSignal: Signal<"audioRange">;

	/**
	 * Just outputs zeros. This is used so that scaled signal is not
	 * optimized to silence.
	 */
	private _zeros: Zero;

	/**
	 * The value that the LFO outputs when it's stopped
	 */
	private _stoppedValue = 0;

	/**
	 * Convert the oscillators audio range to an output between 0-1 so it can be scaled
	 */
	private _a2g: AudioToGain;

	/**
	 * Scales the final output to the min and max value
	 */
	private _scaler: Scale;

	/**
	 * The output of the LFO
	 */
	readonly output: OutputNode;

	/**
	 * There is no input node
	 */
	readonly input: undefined;

	/**
	 * A private placeholder for the units
	 */
	private _units: UnitName = "number";

	/**
	 * If the input value is converted using the {@link units}
	 */
	convert = true;

	/**
	 * The frequency value of the LFO
	 */
	readonly frequency: Signal<"frequency">;

	/**
	 * @param frequency The frequency of the oscillation.
	 * Typically, LFOs will be in the frequency range of 0.1 to 10 hertz.
	 * @param min The minimum output value of the LFO.
	 * @param max The maximum value of the LFO.
	 */
	constructor(frequency?: Frequency, min?: number, max?: number);
	constructor(options?: Partial<LFOOptions>);
	constructor() {
		const options = optionsFromArguments(LFO.getDefaults(), arguments, [
			"frequency",
			"min",
			"max",
		]);
		super(options);

		this._oscillator = new Oscillator(
			options as ToneOscillatorConstructorOptions
		);

		this.frequency = this._oscillator.frequency;

		this._amplitudeGain = new Gain({
			context: this.context,
			gain: options.amplitude,
			units: "normalRange",
		});
		this.amplitude = this._amplitudeGain.gain;
		this._stoppedSignal = new Signal({
			context: this.context,
			units: "audioRange",
			value: 0,
		});
		this._zeros = new Zero({ context: this.context });
		this._a2g = new AudioToGain({ context: this.context });
		this._scaler = this.output = new Scale({
			context: this.context,
			max: options.max,
			min: options.min,
		});

		this.units = options.units;
		this.min = options.min;
		this.max = options.max;

		// connect it up
		this._oscillator.chain(this._amplitudeGain, this._a2g, this._scaler);
		this._zeros.connect(this._a2g);
		this._stoppedSignal.connect(this._a2g);
		readOnly(this, ["amplitude", "frequency"]);
		this.phase = options.phase;
	}

	static getDefaults(): LFOOptions {
		return Object.assign(Oscillator.getDefaults(), {
			amplitude: 1,
			frequency: "4n",
			max: 1,
			min: 0,
			type: "sine",
			units: "number" as UnitName,
		});
	}

	/**
	 * Start the LFO.
	 * @param time The time the LFO will start
	 */
	start(time?: Time): this {
		time = this.toSeconds(time);
		this._stoppedSignal.setValueAtTime(0, time);
		this._oscillator.start(time);
		return this;
	}

	/**
	 * Stop the LFO.
	 * @param  time The time the LFO will stop
	 */
	stop(time?: Time): this {
		time = this.toSeconds(time);
		this._stoppedSignal.setValueAtTime(this._stoppedValue, time);
		this._oscillator.stop(time);
		return this;
	}

	/**
	 * Sync the start/stop/pause to the transport
	 * and the frequency to the bpm of the transport
	 * @example
	 * const lfo = new Tone.LFO("8n");
	 * lfo.sync().start(0);
	 * // the rate of the LFO will always be an eighth note, even as the tempo changes
	 */
	sync(): this {
		this._oscillator.sync();
		this._oscillator.syncFrequency();
		return this;
	}

	/**
	 * unsync the LFO from transport control
	 */
	unsync(): this {
		this._oscillator.unsync();
		this._oscillator.unsyncFrequency();
		return this;
	}

	/**
	 * After the oscillator waveform is updated, reset the `_stoppedSignal` value to match the updated waveform
	 */
	private _setStoppedValue() {
		this._stoppedValue = this._oscillator.getInitialValue();
		this._stoppedSignal.value = this._stoppedValue;
	}

	/**
	 * The minimum output of the LFO.
	 */
	get min(): number {
		return this._toType(this._scaler.min);
	}
	set min(min) {
		min = this._fromType(min);
		this._scaler.min = min;
	}

	/**
	 * The maximum output of the LFO.
	 */
	get max(): number {
		return this._toType(this._scaler.max);
	}
	set max(max) {
		max = this._fromType(max);
		this._scaler.max = max;
	}

	/**
	 * The type of the oscillator.
	 * @see {@link Oscillator.type}
	 */
	get type(): ToneOscillatorType {
		return this._oscillator.type;
	}
	set type(type) {
		this._oscillator.type = type;
		this._setStoppedValue();
	}

	/**
	 * The oscillator's partials array.
	 * @see {@link Oscillator.partials}
	 */
	get partials(): number[] {
		return this._oscillator.partials;
	}
	set partials(partials) {
		this._oscillator.partials = partials;
		this._setStoppedValue();
	}

	/**
	 * The phase of the LFO.
	 */
	get phase(): Degrees {
		return this._oscillator.phase;
	}
	set phase(phase) {
		this._oscillator.phase = phase;
		this._setStoppedValue();
	}

	/**
	 * The output units of the LFO.
	 */
	get units(): UnitName {
		return this._units;
	}
	set units(val) {
		const currentMin = this.min;
		const currentMax = this.max;
		// convert the min and the max
		this._units = val;
		this.min = currentMin;
		this.max = currentMax;
	}

	/**
	 * Returns the playback state of the source, either "started" or "stopped".
	 */
	get state(): BasicPlaybackState {
		return this._oscillator.state;
	}

	/**
	 * @param node the destination to connect to
	 * @param outputNum the optional output number
	 * @param inputNum the input number
	 */
	connect(node: InputNode, outputNum?: number, inputNum?: number): this {
		if (node instanceof Param || node instanceof Signal) {
			this.convert = node.convert;
			this.units = node.units;
		}
		connectSignal(this, node, outputNum, inputNum);
		return this;
	}

	/**
	 * Private methods borrowed from Param
	 */
	// @ts-ignore
	private _fromType = Param.prototype._fromType;
	// @ts-ignore
	private _toType = Param.prototype._toType;
	// @ts-ignore
	private _is = Param.prototype._is;
	// @ts-ignore
	private _clampValue = Param.prototype._clampValue;

	dispose(): this {
		super.dispose();
		this._oscillator.dispose();
		this._stoppedSignal.dispose();
		this._zeros.dispose();
		this._scaler.dispose();
		this._a2g.dispose();
		this._amplitudeGain.dispose();
		this.amplitude.dispose();
		return this;
	}
}
