import { Param } from "../core/context/Param.js";
import { NormalRange } from "../core/type/Units.js";
import { Effect, EffectOptions } from "./Effect.js";
export interface FeedbackEffectOptions extends EffectOptions {
    /**
     * The feedback from the output back to the input
     * ```
     * +---<--------<---+
     * |                |
     * |  +----------+  |
     * +--> feedback +>-+
     *    +----------+
     * ```
     */
    feedback: NormalRange;
}
/**
 * FeedbackEffect provides a loop between an audio source and its own output.
 * This is a base-class for feedback effects.
 *
 * NOTE: Feedback effects require at least one DelayNode to be in the feedback cycle.
 */
export declare abstract class FeedbackEffect<Options extends FeedbackEffectOptions> extends Effect<Options> {
    readonly name: string;
    /**
     * the gain which controls the feedback
     */
    private _feedbackGain;
    /**
     * The amount of signal which is fed back into the effect input.
     */
    feedback: Param<"normalRange">;
    constructor(options: FeedbackEffectOptions);
    static getDefaults(): FeedbackEffectOptions;
    dispose(): this;
}
