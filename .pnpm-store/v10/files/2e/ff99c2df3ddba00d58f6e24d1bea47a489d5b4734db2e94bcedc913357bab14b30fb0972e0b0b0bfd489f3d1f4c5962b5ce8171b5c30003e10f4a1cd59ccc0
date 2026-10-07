import {
	MidSideEffect,
	MidSideEffectOptions,
} from "../effect/MidSideEffect.js";
import { Signal } from "../signal/Signal.js";
import { Multiply } from "../signal/Multiply.js";
import { Subtract } from "../signal/Subtract.js";
import { NormalRange } from "../core/type/Units.js";
import { optionsFromArguments } from "../core/util/Defaults.js";
import { readOnly } from "../core/util/Interface.js";
import { connect } from "../core/context/ToneAudioNode.js";

export interface StereoWidenerOptions extends MidSideEffectOptions {
	width: NormalRange;
}

/**
 * Applies a width factor to the mid/side seperation.
 * 0 is all mid and 1 is all side.
 * Algorithm found in [kvraudio forums](http://www.kvraudio.com/forum/viewtopic.php?t=212587).
 * ```
 * Mid *= 2*(1-width)<br>
 * Side *= 2*width
 * ```
 * @category Effect
 */
export class StereoWidener extends MidSideEffect<StereoWidenerOptions> {
	readonly name: string = "StereoWidener";

	/**
	 * The width control. 0 = 100% mid. 1 = 100% side. 0.5 = no change.
	 */
	readonly width: Signal<"normalRange">;

	/**
	 * Two times the (1-width) for the mid channel
	 */
	private _twoTimesWidthMid: Multiply;

	/**
	 * Two times the width for the side channel
	 */
	private _twoTimesWidthSide: Multiply;

	/**
	 * Mid multiplier
	 */
	private _midMult: Multiply;

	/**
	 * 1 - width
	 */
	private _oneMinusWidth: Subtract;

	/**
	 * Side multiplier
	 */
	private _sideMult: Multiply;

	/**
	 * @param width The stereo width. A width of 0 is mono and 1 is stereo. 0.5 is no change.
	 */
	constructor(width?: NormalRange);
	constructor(options?: Partial<StereoWidenerOptions>);
	constructor() {
		const options = optionsFromArguments(
			StereoWidener.getDefaults(),
			arguments,
			["width"]
		);
		super(options);

		this.width = new Signal({
			context: this.context,
			value: options.width,
			units: "normalRange",
		});
		readOnly(this, ["width"]);
		this._twoTimesWidthMid = new Multiply({
			context: this.context,
			value: 2,
		});
		this._twoTimesWidthSide = new Multiply({
			context: this.context,
			value: 2,
		});
		this._midMult = new Multiply({ context: this.context });
		this._twoTimesWidthMid.connect(this._midMult.factor);
		this.connectEffectMid(this._midMult);

		this._oneMinusWidth = new Subtract({ context: this.context });
		this._oneMinusWidth.connect(this._twoTimesWidthMid);
		connect(this.context.getConstant(1), this._oneMinusWidth);
		this.width.connect(this._oneMinusWidth.subtrahend);

		this._sideMult = new Multiply({ context: this.context });
		this.width.connect(this._twoTimesWidthSide);
		this._twoTimesWidthSide.connect(this._sideMult.factor);
		this.connectEffectSide(this._sideMult);
	}

	static getDefaults(): StereoWidenerOptions {
		return Object.assign(MidSideEffect.getDefaults(), {
			width: 0.5,
		});
	}

	dispose(): this {
		super.dispose();
		this.width.dispose();
		this._midMult.dispose();
		this._sideMult.dispose();
		this._twoTimesWidthMid.dispose();
		this._twoTimesWidthSide.dispose();
		this._oneMinusWidth.dispose();
		return this;
	}
}
