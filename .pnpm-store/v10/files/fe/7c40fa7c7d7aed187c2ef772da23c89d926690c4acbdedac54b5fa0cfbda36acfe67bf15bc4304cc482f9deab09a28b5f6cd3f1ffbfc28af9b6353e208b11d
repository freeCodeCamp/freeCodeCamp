import { Param } from "../../core/context/Param.js";
import { InputNode, OutputNode, ToneAudioNode } from "../../core/context/ToneAudioNode.js";
import { Degrees, Frequency, NormalRange, Time, UnitName } from "../../core/type/Units.js";
import { BasicPlaybackState } from "../../core/util/StateTimeline.js";
import { Signal } from "../../signal/Signal.js";
import { ToneOscillatorType } from "./Oscillator.js";
import { ToneOscillatorOptions } from "./OscillatorInterface.js";
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
export declare class LFO extends ToneAudioNode<LFOOptions> {
    readonly name: string;
    /**
     * The oscillator.
     */
    private _oscillator;
    /**
     * The gain of the output
     */
    private _amplitudeGain;
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
    private _stoppedSignal;
    /**
     * Just outputs zeros. This is used so that scaled signal is not
     * optimized to silence.
     */
    private _zeros;
    /**
     * The value that the LFO outputs when it's stopped
     */
    private _stoppedValue;
    /**
     * Convert the oscillators audio range to an output between 0-1 so it can be scaled
     */
    private _a2g;
    /**
     * Scales the final output to the min and max value
     */
    private _scaler;
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
    private _units;
    /**
     * If the input value is converted using the {@link units}
     */
    convert: boolean;
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
    static getDefaults(): LFOOptions;
    /**
     * Start the LFO.
     * @param time The time the LFO will start
     */
    start(time?: Time): this;
    /**
     * Stop the LFO.
     * @param  time The time the LFO will stop
     */
    stop(time?: Time): this;
    /**
     * Sync the start/stop/pause to the transport
     * and the frequency to the bpm of the transport
     * @example
     * const lfo = new Tone.LFO("8n");
     * lfo.sync().start(0);
     * // the rate of the LFO will always be an eighth note, even as the tempo changes
     */
    sync(): this;
    /**
     * unsync the LFO from transport control
     */
    unsync(): this;
    /**
     * After the oscillator waveform is updated, reset the `_stoppedSignal` value to match the updated waveform
     */
    private _setStoppedValue;
    /**
     * The minimum output of the LFO.
     */
    get min(): number;
    set min(min: number);
    /**
     * The maximum output of the LFO.
     */
    get max(): number;
    set max(max: number);
    /**
     * The type of the oscillator.
     * @see {@link Oscillator.type}
     */
    get type(): ToneOscillatorType;
    set type(type: ToneOscillatorType);
    /**
     * The oscillator's partials array.
     * @see {@link Oscillator.partials}
     */
    get partials(): number[];
    set partials(partials: number[]);
    /**
     * The phase of the LFO.
     */
    get phase(): Degrees;
    set phase(phase: Degrees);
    /**
     * The output units of the LFO.
     */
    get units(): UnitName;
    set units(val: UnitName);
    /**
     * Returns the playback state of the source, either "started" or "stopped".
     */
    get state(): BasicPlaybackState;
    /**
     * @param node the destination to connect to
     * @param outputNum the optional output number
     * @param inputNum the input number
     */
    connect(node: InputNode, outputNum?: number, inputNum?: number): this;
    /**
     * Private methods borrowed from Param
     */
    private _fromType;
    private _toType;
    private _is;
    private _clampValue;
    dispose(): this;
}
