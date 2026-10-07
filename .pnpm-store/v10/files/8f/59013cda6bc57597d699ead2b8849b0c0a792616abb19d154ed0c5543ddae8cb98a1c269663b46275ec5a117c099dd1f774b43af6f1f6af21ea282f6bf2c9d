import { Gain } from "../../core/context/Gain.js";
import { ToneAudioNode, ToneAudioNodeOptions } from "../../core/context/ToneAudioNode.js";
import { NormalRange } from "../../core/type/Units.js";
import { Signal } from "../../signal/Signal.js";
interface CrossFadeOptions extends ToneAudioNodeOptions {
    fade: NormalRange;
}
/**
 * Tone.Crossfade provides equal power fading between two inputs.
 * More on crossfading technique [here](https://en.wikipedia.org/wiki/Fade_(audio_engineering)#Crossfading).
 * ```
 *                                             +---------+
 *                                            +> input a +>--+
 * +-----------+   +---------------------+     |         |   |
 * | 1s signal +>--> stereoPannerNode  L +>----> gain    |   |
 * +-----------+   |                     |     +---------+   |
 *               +-> pan               R +>-+                |   +--------+
 *               | +---------------------+  |                +---> output +>
 *  +------+     |                          |  +---------+   |   +--------+
 *  | fade +>----+                          | +> input b +>--+
 *  +------+                                |  |         |
 *                                          +--> gain    |
 *                                             +---------+
 * ```
 * @example
 * const crossFade = new Tone.CrossFade().toDestination();
 * // connect two inputs Tone.to a/b
 * const inputA = new Tone.Oscillator(440, "square").connect(crossFade.a).start();
 * const inputB = new Tone.Oscillator(440, "sine").connect(crossFade.b).start();
 * // use the fade to control the mix between the two
 * crossFade.fade.value = 0.5;
 * @category Component
 */
export declare class CrossFade extends ToneAudioNode<CrossFadeOptions> {
    readonly name: string;
    /**
     * The crossfading is done by a StereoPannerNode
     */
    private _panner;
    /**
     * Split the output of the panner node into two values used to control the gains.
     */
    private _split;
    /**
     * Convert the fade value into an audio range value so it can be connected
     * to the panner.pan AudioParam
     */
    private _g2a;
    /**
     * The input which is at full level when fade = 0
     */
    readonly a: Gain;
    /**
     * The input which is at full level when fade = 1
     */
    readonly b: Gain;
    /**
     * The output is a mix between `a` and `b` at the ratio of `fade`
     */
    readonly output: Gain;
    /**
     * CrossFade has no input, you must choose either `a` or `b`
     */
    readonly input: undefined;
    /**
     * The mix between the two inputs. A fade value of 0
     * will output 100% crossFade.a and
     * a value of 1 will output 100% crossFade.b.
     */
    readonly fade: Signal<"normalRange">;
    protected _internalChannels: Gain<"gain">[];
    /**
     * @param fade The initial fade value [0, 1].
     */
    constructor(fade?: NormalRange);
    constructor(options?: Partial<CrossFadeOptions>);
    static getDefaults(): CrossFadeOptions;
    dispose(): this;
}
export {};
