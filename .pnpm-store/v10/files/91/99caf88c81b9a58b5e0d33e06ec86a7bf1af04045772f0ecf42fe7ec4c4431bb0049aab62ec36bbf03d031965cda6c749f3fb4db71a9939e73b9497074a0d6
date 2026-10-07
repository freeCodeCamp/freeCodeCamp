import {
	ToneAudioNode,
	ToneAudioNodeOptions,
} from "../../core/context/ToneAudioNode.js";
import { Merge } from "./Merge.js";
import { Add } from "../../signal/Add.js";
import { Multiply } from "../../signal/Multiply.js";
import { Subtract } from "../../signal/Subtract.js";
import { Gain } from "../../core/context/Gain.js";
import { optionsFromArguments } from "../../core/util/Defaults.js";

export type MidSideMergeOptions = ToneAudioNodeOptions;

/**
 * MidSideMerge merges the mid and side signal after they've been separated by {@link MidSideSplit}
 * ```
 * Mid = (Left+Right)/sqrt(2);   // obtain mid-signal from left and right
 * Side = (Left-Right)/sqrt(2);   // obtain side-signal from left and right
 * ```
 * @category Component
 */
export class MidSideMerge extends ToneAudioNode<MidSideMergeOptions> {
	readonly name: string = "MidSideMerge";

	/**
	 * There is no input, connect sources to either {@link mid} or {@link side} inputs.
	 */
	readonly input: undefined;

	/**
	 * The merged signal
	 */
	readonly output: Merge;

	/**
	 * Merge the incoming signal into left and right channels
	 */
	private _merge: Merge;

	/**
	 * The "mid" input.
	 */
	readonly mid: ToneAudioNode;

	/**
	 * The "side" input.
	 */
	readonly side: ToneAudioNode;

	/**
	 * Recombine the mid/side into Left
	 */
	private _left: Add;

	/**
	 * Recombine the mid/side into Right
	 */
	private _right: Subtract;

	/**
	 * Multiply the right by sqrt(1/2)
	 */
	private _leftMult: Multiply;

	/**
	 * Multiply the left by sqrt(1/2)
	 */
	private _rightMult: Multiply;

	constructor(options?: Partial<MidSideMergeOptions>);
	constructor() {
		super(optionsFromArguments(MidSideMerge.getDefaults(), arguments));
		this.mid = new Gain({ context: this.context });
		this.side = new Gain({ context: this.context });
		this._left = new Add({ context: this.context });
		this._leftMult = new Multiply({
			context: this.context,
			value: Math.SQRT1_2,
		});
		this._right = new Subtract({ context: this.context });
		this._rightMult = new Multiply({
			context: this.context,
			value: Math.SQRT1_2,
		});
		this._merge = this.output = new Merge({ context: this.context });

		this.mid.fan(this._left);
		this.side.connect(this._left.addend);
		this.mid.connect(this._right);
		this.side.connect(this._right.subtrahend);
		this._left.connect(this._leftMult);
		this._right.connect(this._rightMult);
		this._leftMult.connect(this._merge, 0, 0);
		this._rightMult.connect(this._merge, 0, 1);
	}

	dispose(): this {
		super.dispose();
		this.mid.dispose();
		this.side.dispose();
		this._leftMult.dispose();
		this._rightMult.dispose();
		this._left.dispose();
		this._right.dispose();
		return this;
	}
}
