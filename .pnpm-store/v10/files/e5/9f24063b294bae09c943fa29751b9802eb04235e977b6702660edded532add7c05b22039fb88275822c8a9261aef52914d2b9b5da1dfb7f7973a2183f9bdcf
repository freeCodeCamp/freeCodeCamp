import { InputNode, OutputNode } from "../../core/context/ToneAudioNode.js";
import {
	ToneAudioNode,
	ToneAudioNodeOptions,
} from "../../core/context/ToneAudioNode.js";
import { NormalRange, Time } from "../../core/type/Units.js";
import { optionsFromArguments } from "../../core/util/Defaults.js";
import { isArray, isObject, isString } from "../../core/util/TypeCheck.js";
import { connectSignal, Signal } from "../../signal/Signal.js";
import { OfflineContext } from "../../core/context/OfflineContext.js";
import { assert } from "../../core/util/Debug.js";
import { range, timeRange } from "../../core/util/Decorator.js";

type BasicEnvelopeCurve = "linear" | "exponential";
type InternalEnvelopeCurve = BasicEnvelopeCurve | number[];
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
export class Envelope extends ToneAudioNode<EnvelopeOptions> {
	readonly name: string = "Envelope";

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
	@timeRange(0)
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
	@timeRange(0)
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
	@range(0, 1)
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
	@timeRange(0)
	release: Time;

	/**
	 * The automation curve type for the attack
	 */
	private _attackCurve!: InternalEnvelopeCurve;

	/**
	 * The automation curve type for the decay
	 */
	private _decayCurve!: InternalEnvelopeCurve;

	/**
	 * The automation curve type for the release
	 */
	private _releaseCurve!: InternalEnvelopeCurve;

	/**
	 * the signal which is output.
	 */
	protected _sig: Signal<"normalRange"> = new Signal({
		context: this.context,
		value: 0,
	});

	/**
	 * The output signal of the envelope
	 */
	output: OutputNode = this._sig;

	/**
	 * Envelope has no input
	 */
	input: InputNode | undefined = undefined;

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
	constructor(
		attack?: Time,
		decay?: Time,
		sustain?: NormalRange,
		release?: Time
	);
	constructor(options?: Partial<EnvelopeOptions>);
	constructor() {
		const options = optionsFromArguments(
			Envelope.getDefaults(),
			arguments,
			["attack", "decay", "sustain", "release"]
		);
		super(options);

		this.attack = options.attack;
		this.decay = options.decay;
		this.sustain = options.sustain;
		this.release = options.release;
		this.attackCurve = options.attackCurve;
		this.releaseCurve = options.releaseCurve;
		this.decayCurve = options.decayCurve;
	}

	static getDefaults(): EnvelopeOptions {
		return Object.assign(ToneAudioNode.getDefaults(), {
			attack: 0.01,
			attackCurve: "linear" as EnvelopeCurveName,
			decay: 0.1,
			decayCurve: "exponential" as BasicEnvelopeCurve,
			release: 1,
			releaseCurve: "exponential" as EnvelopeCurveName,
			sustain: 0.5,
		});
	}

	/**
	 * Read the current value of the envelope. Useful for
	 * synchronizing visual output to the envelope.
	 */
	get value(): NormalRange {
		return this.getValueAtTime(this.now());
	}

	/**
	 * Get the curve
	 * @param  curve
	 * @param  direction  In/Out
	 * @return The curve name
	 */
	private _getCurve(
		curve: InternalEnvelopeCurve,
		direction: EnvelopeDirection
	): EnvelopeCurve {
		if (isString(curve)) {
			return curve;
		} else {
			// look up the name in the curves array
			let curveName: EnvelopeCurveName;
			for (curveName in EnvelopeCurves) {
				if (EnvelopeCurves[curveName][direction] === curve) {
					return curveName;
				}
			}
			// return the custom curve
			return curve;
		}
	}

	/**
	 * Assign a the curve to the given name using the direction
	 * @param  name
	 * @param  direction In/Out
	 * @param  curve
	 */
	private _setCurve(
		name: "_attackCurve" | "_decayCurve" | "_releaseCurve",
		direction: EnvelopeDirection,
		curve: EnvelopeCurve
	): void {
		// check if it's a valid type
		if (isString(curve) && Reflect.has(EnvelopeCurves, curve)) {
			const curveDef = EnvelopeCurves[curve];
			if (isObject(curveDef)) {
				if (name !== "_decayCurve") {
					this[name] = curveDef[direction];
				}
			} else {
				this[name] = curveDef;
			}
		} else if (isArray(curve) && name !== "_decayCurve") {
			this[name] = curve;
		} else {
			throw new Error("Envelope: invalid curve: " + curve);
		}
	}

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
	get attackCurve(): EnvelopeCurve {
		return this._getCurve(this._attackCurve, "In");
	}
	set attackCurve(curve) {
		this._setCurve("_attackCurve", "In", curve);
	}

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
	get releaseCurve(): EnvelopeCurve {
		return this._getCurve(this._releaseCurve, "Out");
	}
	set releaseCurve(curve) {
		this._setCurve("_releaseCurve", "Out", curve);
	}

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
	get decayCurve(): EnvelopeCurve {
		return this._getCurve(this._decayCurve, "Out");
	}
	set decayCurve(curve) {
		this._setCurve("_decayCurve", "Out", curve);
	}

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
	triggerAttack(time?: Time, velocity: NormalRange = 1): this {
		this.log("triggerAttack", time, velocity);
		time = this.toSeconds(time);
		const originalAttack = this.toSeconds(this.attack);
		let attack = originalAttack;
		const decay = this.toSeconds(this.decay);
		// check if it's not a complete attack
		const currentValue = this.getValueAtTime(time);
		if (currentValue > 0) {
			// subtract the current value from the attack time
			const attackRate = 1 / attack;
			const remainingDistance = 1 - currentValue;
			// the attack is now the remaining time
			attack = remainingDistance / attackRate;
		}
		// attack
		if (attack < this.sampleTime) {
			this._sig.cancelScheduledValues(time);
			// case where the attack time is 0 should set instantly
			this._sig.setValueAtTime(velocity, time);
		} else if (this._attackCurve === "linear") {
			this._sig.linearRampTo(velocity, attack, time);
		} else if (this._attackCurve === "exponential") {
			this._sig.targetRampTo(velocity, attack, time);
		} else {
			this._sig.cancelAndHoldAtTime(time);
			let curve = this._attackCurve;
			// find the starting position in the curve
			for (let i = 1; i < curve.length; i++) {
				// the starting index is between the two values
				if (curve[i - 1] <= currentValue && currentValue <= curve[i]) {
					curve = this._attackCurve.slice(i);
					// the first index is the current value
					curve[0] = currentValue;
					break;
				}
			}
			this._sig.setValueCurveAtTime(curve, time, attack, velocity);
		}
		// decay
		if (decay && this.sustain < 1) {
			const decayValue = velocity * this.sustain;
			const decayStart = time + attack;
			this.log("decay", decayStart);
			if (this._decayCurve === "linear") {
				this._sig.linearRampToValueAtTime(
					decayValue,
					decay + decayStart
				);
			} else {
				this._sig.exponentialApproachValueAtTime(
					decayValue,
					decayStart,
					decay
				);
			}
		}
		return this;
	}

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
	triggerRelease(time?: Time): this {
		this.log("triggerRelease", time);
		time = this.toSeconds(time);
		const currentValue = this.getValueAtTime(time);
		if (currentValue > 0) {
			const release = this.toSeconds(this.release);
			if (release < this.sampleTime) {
				this._sig.setValueAtTime(0, time);
			} else if (this._releaseCurve === "linear") {
				this._sig.linearRampTo(0, release, time);
			} else if (this._releaseCurve === "exponential") {
				this._sig.targetRampTo(0, release, time);
			} else {
				assert(
					isArray(this._releaseCurve),
					"releaseCurve must be either 'linear', 'exponential' or an array"
				);
				this._sig.cancelAndHoldAtTime(time);
				this._sig.setValueCurveAtTime(
					this._releaseCurve,
					time,
					release,
					currentValue
				);
			}
		}
		return this;
	}

	/**
	 * Get the scheduled value at the given time. This will
	 * return the unconverted (raw) value.
	 * @example
	 * const env = new Tone.Envelope(0.5, 1, 0.4, 2);
	 * env.triggerAttackRelease(2);
	 * setInterval(() => console.log(env.getValueAtTime(Tone.now())), 100);
	 */
	getValueAtTime(time: Time): NormalRange {
		return this._sig.getValueAtTime(time);
	}

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
	triggerAttackRelease(
		duration: Time,
		time?: Time,
		velocity: NormalRange = 1
	): this {
		time = this.toSeconds(time);
		this.triggerAttack(time, velocity);
		this.triggerRelease(time + this.toSeconds(duration));
		return this;
	}

	/**
	 * Cancels all scheduled envelope changes after the given time.
	 */
	cancel(after?: Time): this {
		this._sig.cancelScheduledValues(this.toSeconds(after));
		return this;
	}

	/**
	 * Connect the envelope to a destination node.
	 */
	connect(destination: InputNode, outputNumber = 0, inputNumber = 0): this {
		connectSignal(this, destination, outputNumber, inputNumber);
		return this;
	}

	/**
	 * Render the envelope curve to an array of the given length.
	 * Good for visualizing the envelope curve. Rescales the duration of the
	 * envelope to fit the length.
	 */
	async asArray(length = 1024): Promise<Float32Array> {
		const duration = length / this.context.sampleRate;
		const context = new OfflineContext(
			1,
			duration,
			this.context.sampleRate
		);
		// normalize the ADSR for the given duration with 20% sustain time
		const attackPortion =
			this.toSeconds(this.attack) + this.toSeconds(this.decay);
		const envelopeDuration = attackPortion + this.toSeconds(this.release);
		const sustainTime = envelopeDuration * 0.1;
		const totalDuration = envelopeDuration + sustainTime;
		// @ts-ignore
		const clone = new this.constructor(
			Object.assign(this.get(), {
				attack:
					(duration * this.toSeconds(this.attack)) / totalDuration,
				decay: (duration * this.toSeconds(this.decay)) / totalDuration,
				release:
					(duration * this.toSeconds(this.release)) / totalDuration,
				context,
			})
		) as Envelope;
		clone._sig.toDestination();
		clone.triggerAttackRelease(
			(duration * (attackPortion + sustainTime)) / totalDuration,
			0
		);
		const buffer = await context.render();
		return buffer.getChannelData(0);
	}

	dispose(): this {
		super.dispose();
		this._sig.dispose();
		return this;
	}
}

interface EnvelopeCurveObject {
	In: number[];
	Out: number[];
}

type EnvelopeDirection = keyof EnvelopeCurveObject;

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

/**
 * Generate some complex envelope curves.
 */
const EnvelopeCurves: EnvelopeCurveMap = (() => {
	const curveLen = 128;

	let i: number;
	let k: number;

	// cosine curve
	const cosineCurve: number[] = [];
	for (i = 0; i < curveLen; i++) {
		cosineCurve[i] = Math.sin((i / (curveLen - 1)) * (Math.PI / 2));
	}

	// ripple curve
	const rippleCurve: number[] = [];
	const rippleCurveFreq = 6.4;
	for (i = 0; i < curveLen - 1; i++) {
		k = i / (curveLen - 1);
		const sineWave =
			Math.sin(k * (Math.PI * 2) * rippleCurveFreq - Math.PI / 2) + 1;
		rippleCurve[i] = sineWave / 10 + k * 0.83;
	}
	rippleCurve[curveLen - 1] = 1;

	// stairs curve
	const stairsCurve: number[] = [];
	const steps = 5;
	for (i = 0; i < curveLen; i++) {
		stairsCurve[i] = Math.ceil((i / (curveLen - 1)) * steps) / steps;
	}

	// in-out easing curve
	const sineCurve: number[] = [];
	for (i = 0; i < curveLen; i++) {
		k = i / (curveLen - 1);
		sineCurve[i] = 0.5 * (1 - Math.cos(Math.PI * k));
	}

	// a bounce curve
	const bounceCurve: number[] = [];
	for (i = 0; i < curveLen; i++) {
		k = i / (curveLen - 1);
		const freq = Math.pow(k, 3) * 4 + 0.2;
		const val = Math.cos(freq * Math.PI * 2 * k);
		bounceCurve[i] = Math.abs(val * (1 - k));
	}

	/**
	 * Invert a value curve to make it work for the release
	 */
	function invertCurve(curve: number[]): number[] {
		const out = new Array(curve.length);
		for (let j = 0; j < curve.length; j++) {
			out[j] = 1 - curve[j];
		}
		return out;
	}

	/**
	 * reverse the curve
	 */
	function reverseCurve(curve: number[]): number[] {
		return curve.slice(0).reverse();
	}

	/**
	 * attack and release curve arrays
	 */
	return {
		bounce: {
			In: invertCurve(bounceCurve),
			Out: bounceCurve,
		},
		cosine: {
			In: cosineCurve,
			Out: reverseCurve(cosineCurve),
		},
		exponential: "exponential" as const,
		linear: "linear" as const,
		ripple: {
			In: rippleCurve,
			Out: invertCurve(rippleCurve),
		},
		sine: {
			In: sineCurve,
			Out: invertCurve(sineCurve),
		},
		step: {
			In: stairsCurve,
			Out: invertCurve(stairsCurve),
		},
	};
})();
