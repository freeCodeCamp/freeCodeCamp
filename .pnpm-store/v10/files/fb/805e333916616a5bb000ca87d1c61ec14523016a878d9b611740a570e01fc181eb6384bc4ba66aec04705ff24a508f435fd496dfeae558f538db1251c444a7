import { Effect, EffectOptions } from "./Effect.js";
import { MidSideSplit } from "../component/channel/MidSideSplit.js";
import { MidSideMerge } from "../component/channel/MidSideMerge.js";
import { OutputNode, ToneAudioNode } from "../core/context/ToneAudioNode.js";

export type MidSideEffectOptions = EffectOptions;

/**
 * Mid/Side processing separates the the 'mid' signal
 * (which comes out of both the left and the right channel)
 * and the 'side' (which only comes out of the the side channels)
 * and effects them separately before being recombined.
 * Applies a Mid/Side seperation and recombination.
 * Algorithm found in [kvraudio forums](http://www.kvraudio.com/forum/viewtopic.php?t=212587).
 * This is a base-class for Mid/Side Effects.
 * @category Effect
 */
export abstract class MidSideEffect<
	Options extends MidSideEffectOptions,
> extends Effect<Options> {
	readonly name: string = "MidSideEffect";

	/**
	 * The mid/side split
	 */
	private _midSideSplit: MidSideSplit;

	/**
	 * The mid/side merge
	 */
	private _midSideMerge: MidSideMerge;

	/**
	 * The mid send. Connect to mid processing
	 */
	protected _midSend: ToneAudioNode;

	/**
	 * The side send. Connect to side processing
	 */
	protected _sideSend: ToneAudioNode;

	/**
	 * The mid return connection
	 */
	protected _midReturn: ToneAudioNode;

	/**
	 * The side return connection
	 */
	protected _sideReturn: ToneAudioNode;

	constructor(options: MidSideEffectOptions) {
		super(options);

		this._midSideMerge = new MidSideMerge({ context: this.context });
		this._midSideSplit = new MidSideSplit({ context: this.context });
		this._midSend = this._midSideSplit.mid;
		this._sideSend = this._midSideSplit.side;
		this._midReturn = this._midSideMerge.mid;
		this._sideReturn = this._midSideMerge.side;

		// the connections
		this.effectSend.connect(this._midSideSplit);
		this._midSideMerge.connect(this.effectReturn);
	}

	/**
	 * Connect the mid chain of the effect
	 */
	protected connectEffectMid(...nodes: OutputNode[]): void {
		this._midSend.chain(...nodes, this._midReturn);
	}

	/**
	 * Connect the side chain of the effect
	 */
	protected connectEffectSide(...nodes: OutputNode[]): void {
		this._sideSend.chain(...nodes, this._sideReturn);
	}

	dispose(): this {
		super.dispose();
		this._midSideSplit.dispose();
		this._midSideMerge.dispose();
		this._midSend.dispose();
		this._sideSend.dispose();
		this._midReturn.dispose();
		this._sideReturn.dispose();
		return this;
	}
}
