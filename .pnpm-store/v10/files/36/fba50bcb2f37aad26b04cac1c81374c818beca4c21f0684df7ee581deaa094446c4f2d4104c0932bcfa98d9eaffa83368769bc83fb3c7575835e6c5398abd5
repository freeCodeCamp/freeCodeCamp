import { InputNode, OutputNode } from "../../core/context/ToneAudioNode.js";
import { ToneAudioNode, ToneAudioNodeOptions } from "../../core/context/ToneAudioNode.js";
import { NormalRange, Time } from "../../core/type/Units.js";
import { Signal } from "../../signal/Signal.js";
type BasicEnvelopeCurve = "linear" | "exponential";
export type EnvelopeCurve = EnvelopeCurveName | number[];
export interface EnvelopeOptions extends ToneAudioNodeOptions {
    attack: Time;
    decay: Time;
    sustain: NormalRange;
    release: Time;
    attackCurve: EnvelopeCurve;
    releaseCurve: EnvelopeCurve;
    decayCurve: BasicEnvelopeCurve;
}
/**
 * Envelope is an [ADSR](https://en.wikipedia.org/wiki/Synthesizer#ADSR_envelope)
 * envelope generator. Envelope outputs a signal which
 * can be connected to an AudioParam or Tone.Signal.
 * ```
 *           /\
 *          /  \
 *         /    \
 *        /      \
 *       /        \___________
 *      /                     \
 *     /                       \
 *    /                         \
 *   /                           \
 * ```
 * @example
 * return Tone.Offline(() => {
 * 	const env = new Tone.Envelope({
 * 		attack: 0.1,
 * 		decay: 0.2,
 * 		sustain: 0.5,
 * 		release: 0.8,
 * 	}).toDestination();
 * 	env.triggerAttackRelease(0.5);
 * }, 1.5, 1);
 * @category Component
 */
export declare class Envelope extends ToneAudioNode<EnvelopeOptions> {
    readonly name: string;
    /**
     * When triggerAttack is called, the attack time is the amount of
     * time it takes for the envelope to reach it's maximum value.
     * ```
     *           /\
     *          /X \
     *         /XX  \
     *        /XXX   \
     *       /XXXX    \___________
     *      /XXXXX                \
     *     /XXXXXX                 \
     *    /XXXXXXX                  \
     *   /XXXXXXXX                   \
     * ```
     * @min 0
     * @max 2
     */
    attack: Time;
    /**
     * After the attack portion of the envelope, the value will fall
     * over the duration of the decay time to it's sustain value.
     * ```
     *           /\
     *          / X\
     *         /  XX\
     *        /   XXX\
     *       /    XXXX\___________
     *      /     XXXXX           \
     *     /      XXXXX            \
     *    /       XXXXX             \
     *   /        XXXXX              \
     * ```
     * @min 0
     * @max 2
     */
    decay: Time;
    /**
     * The sustain value is the value
     * which the envelope rests at after triggerAttack is
     * called, but before triggerRelease is invoked.
     * ```
     *           /\
     *          /  \
     *         /    \
     *        /      \
     *       /        \___________
     *      /          XXXXXXXXXXX\
     *     /           XXXXXXXXXXX \
     *    /            XXXXXXXXXXX  \
     *   /             XXXXXXXXXXX   \
     * ```
     */
    sustain: NormalRange;
    /**
     * After triggerRelease is called, the envelope's
     * value will fall to it's miminum value over the
     * duration of the release time.
     * ```
     *           /\
     *          /  \
     *         /    \
     *        /      \
     *       /        \___________
     *      /                    X\
     *     /                     XX\
     *    /                      XXX\
     *   /                       XXXX\
     * ```
     * @min 0
     * @max 5
     */
    release: Time;
    /**
     * The automation curve type for the attack
     */
    private _attackCurve;
    /**
     * The automation curve type for the decay
     */
    private _decayCurve;
    /**
     * The automation curve type for the release
     */
    private _releaseCurve;
    /**
     * the signal which is output.
     */
    protected _sig: Signal<"normalRange">;
    /**
     * The output signal of the envelope
     */
    output: OutputNode;
    /**
     * Envelope has no input
     */
    input: InputNode | undefined;
    /**
     * @param attack The amount of time it takes for the envelope to go from
     *                        0 to it's maximum value.
     * @param decay	The period of time after the attack that it takes for the envelope
     *                      	to fall to the sustain value. Value must be greater than 0.
     * @param sustain	The percent of the maximum value that the envelope rests at until
     *                               	the release is triggered.
     * @param release	The amount of time after the release is triggered it takes to reach 0.
     *                        	Value must be greater than 0.
     */
    constructor(attack?: Time, decay?: Time, sustain?: NormalRange, release?: Time);
    constructor(options?: Partial<EnvelopeOptions>);
    static getDefaults(): EnvelopeOptions;
    /**
     * Read the current value of the envelope. Useful for
     * synchronizing visual output to the envelope.
     */
    get value(): NormalRange;
    /**
     * Get the curve
     * @param  curve
     * @param  direction  In/Out
     * @return The curve name
     */
    private _getCurve;
    /**
     * Assign a the curve to the given name using the direction
     * @param  name
     * @param  direction In/Out
     * @param  curve
     */
    private _setCurve;
    /**
     * The shape of the attack.
     * Can be any of these strings:
     * * "linear"
     * * "exponential"
     * * "sine"
     * * "cosine"
     * * "bounce"
     * * "ripple"
     * * "step"
     *
     * Can also be an array which describes the curve. Values
     * in the array are evenly subdivided and linearly
     * interpolated over the duration of the attack.
     * @example
     * return Tone.Offline(() => {
     * 	const env = new Tone.Envelope(0.4).toDestination();
     * 	env.attackCurve = "linear";
     * 	env.triggerAttack();
     * }, 1, 1);
     */
    get attackCurve(): EnvelopeCurve;
    set attackCurve(curve: EnvelopeCurve);
    /**
     * The shape of the release. See the attack curve types.
     * @example
     * return Tone.Offline(() => {
     * 	const env = new Tone.Envelope({
     * 		release: 0.8
     * 	}).toDestination();
     * 	env.triggerAttack();
     * 	// release curve could also be defined by an array
     * 	env.releaseCurve = [1, 0.3, 0.4, 0.2, 0.7, 0];
     * 	env.triggerRelease(0.2);
     * }, 1, 1);
     */
    get releaseCurve(): EnvelopeCurve;
    set releaseCurve(curve: EnvelopeCurve);
    /**
     * The shape of the decay either "linear" or "exponential"
     * @example
     * return Tone.Offline(() => {
     * 	const env = new Tone.Envelope({
     * 		sustain: 0.1,
     * 		decay: 0.5
     * 	}).toDestination();
     * 	env.decayCurve = "linear";
     * 	env.triggerAttack();
     * }, 1, 1);
     */
    get decayCurve(): EnvelopeCurve;
    set decayCurve(curve: EnvelopeCurve);
    /**
     * Trigger the attack/decay portion of the ADSR envelope.
     * @param  time When the attack should start.
     * @param velocity The velocity of the envelope scales the vales.
     *                             number between 0-1
     * @example
     * const env = new Tone.AmplitudeEnvelope().toDestination();
     * const osc = new Tone.Oscillator().connect(env).start();
     * // trigger the attack 0.5 seconds from now with a velocity of 0.2
     * env.triggerAttack("+0.5", 0.2);
     */
    triggerAttack(time?: Time, velocity?: NormalRange): this;
    /**
     * Triggers the release of the envelope.
     * @param  time When the release portion of the envelope should start.
     * @example
     * const env = new Tone.AmplitudeEnvelope().toDestination();
     * const osc = new Tone.Oscillator({
     * 	type: "sawtooth"
     * }).connect(env).start();
     * env.triggerAttack();
     * // trigger the release half a second after the attack
     * env.triggerRelease("+0.5");
     */
    triggerRelease(time?: Time): this;
    /**
     * Get the scheduled value at the given time. This will
     * return the unconverted (raw) value.
     * @example
     * const env = new Tone.Envelope(0.5, 1, 0.4, 2);
     * env.triggerAttackRelease(2);
     * setInterval(() => console.log(env.getValueAtTime(Tone.now())), 100);
     */
    getValueAtTime(time: Time): NormalRange;
    /**
     * triggerAttackRelease is shorthand for triggerAttack, then waiting
     * some duration, then triggerRelease.
     * @param duration The duration of the sustain.
     * @param time When the attack should be triggered.
     * @param velocity The velocity of the envelope.
     * @example
     * const env = new Tone.AmplitudeEnvelope().toDestination();
     * const osc = new Tone.Oscillator().connect(env).start();
     * // trigger the release 0.5 seconds after the attack
     * env.triggerAttackRelease(0.5);
     */
    triggerAttackRelease(duration: Time, time?: Time, velocity?: NormalRange): this;
    /**
     * Cancels all scheduled envelope changes after the given time.
     */
    cancel(after?: Time): this;
    /**
     * Connect the envelope to a destination node.
     */
    connect(destination: InputNode, outputNumber?: number, inputNumber?: number): this;
    /**
     * Render the envelope curve to an array of the given length.
     * Good for visualizing the envelope curve. Rescales the duration of the
     * envelope to fit the length.
     */
    asArray(length?: number): Promise<Float32Array>;
    dispose(): this;
}
interface EnvelopeCurveObject {
    In: number[];
    Out: number[];
}
interface EnvelopeCurveMap {
    linear: "linear";
    exponential: "exponential";
    bounce: EnvelopeCurveObject;
    cosine: EnvelopeCurveObject;
    sine: EnvelopeCurveObject;
    ripple: EnvelopeCurveObject;
    step: EnvelopeCurveObject;
}
type EnvelopeCurveName = keyof EnvelopeCurveMap;
export {};
