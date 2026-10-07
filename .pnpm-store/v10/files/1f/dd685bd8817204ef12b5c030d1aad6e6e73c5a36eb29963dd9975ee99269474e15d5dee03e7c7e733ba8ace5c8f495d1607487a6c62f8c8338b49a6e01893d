import {
	ToneAudioNode,
	ToneAudioNodeOptions,
} from "../../core/context/ToneAudioNode.js";
import { Split } from "./Split.js";
import { Add } from "../../signal/Add.js";
import { Multiply } from "../../signal/Multiply.js";
import { Subtract } from "../../signal/Subtract.js";
import { optionsFromArguments } from "../../core/util/Defaults.js";

export type MidSideSplitOptions = ToneAudioNodeOptions;

/**
 * Mid/Side processing separates the the 'mid' signal (which comes out of both the left and the right channel)
 * and the 'side' (which only comes out of the the side channels).
 * ```
 * Mid = (Left+Right)/sqrt(2);   // obtain mid-signal from left and right
 * Side = (Left-Right)/sqrt(2);   // obtain side-signal from left and right
 * ```
 * @category Component
 */
export class MidSideSplit extends ToneAudioNode<MidSideSplitOptions> {
	readonly name: string = "MidSideSplit";

	readonly input: Split;

	/**
	 * There is no output node, use either {@link mid} or {@link side} outputs.
	 */
	readonly output: undefined;
	/**
	 * Split the incoming signal into left and right channels
	 */
	private _split: Split;

	/**
	 * Sums the left and right channels
	 */
	private _midAdd: Add;

	/**
	 * Subtract left and right channels.
	 */
	private _sideSubtract: Subtract;

	/**
	 * The "mid" output. `(Left+Right)/sqrt(2)`
	 */
	readonly mid: ToneAudioNode;

	/**
	 * The "side" output. `(Left-Right)/sqrt(2)`
	 */
	readonly side: ToneAudioNode;

	constructor(options?: Partial<MidSideSplitOptions>);
	constructor() {
		super(optionsFromArguments(MidSideSplit.getDefaults(), arguments));

		this._split = this.input = new Split({
			channels: 2,
			context: this.context,
		});
		this._midAdd = new Add({ context: this.context });
		this.mid = new Multiply({
			context: this.context,
			value: Math.SQRT1_2,
		});
		this._sideSubtract = new Subtract({ context: this.context });
		this.side = new Multiply({
			context: this.context,
			value: Math.SQRT1_2,
		});

		this._split.connect(this._midAdd, 0);
		this._split.connect(this._midAdd.addend, 1);
		this._split.connect(this._sideSubtract, 0);
		this._split.connect(this._sideSubtract.subtrahend, 1);
		this._midAdd.connect(this.mid);
		this._sideSubtract.connect(this.side);
	}

	dispose(): this {
		super.dispose();
		this.mid.dispose();
		this.side.dispose();
		this._midAdd.dispose();
		this._sideSubtract.dispose();
		this._split.dispose();
		return this;
	}
}
