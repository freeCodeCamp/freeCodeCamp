import { CrossFade } from "../component/channel/CrossFade.js";
import { Gain } from "../core/context/Gain.js";
import { ToneAudioNode, ToneAudioNodeOptions } from "../core/context/ToneAudioNode.js";
import { NormalRange } from "../core/type/Units.js";
import { Signal } from "../signal/Signal.js";
export interface EffectOptions extends ToneAudioNodeOptions {
    wet: NormalRange;
}
/**
 * Effect is the base class for effects. Connect the effect between
 * the effectSend and effectReturn GainNodes, then control the amount of
 * effect which goes to the output using the wet control.
 */
export declare abstract class Effect<Options extends EffectOptions> extends ToneAudioNode<Options> {
    readonly name: string;
    /**
     * the drywet knob to control the amount of effect
     */
    private _dryWet;
    /**
     * The wet control is how much of the effected
     * will pass through to the output. 1 = 100% effected
     * signal, 0 = 100% dry signal.
     */
    wet: Signal<"normalRange">;
    /**
     * connect the effectSend to the input of hte effect
     */
    protected effectSend: Gain;
    /**
     * connect the output of the effect to the effectReturn
     */
    protected effectReturn: Gain;
    /**
     * The effect input node
     */
    input: Gain;
    /**
     * The effect output
     */
    output: CrossFade;
    constructor(options: EffectOptions);
    static getDefaults(): EffectOptions;
    /**
     * chains the effect in between the effectSend and effectReturn
     */
    protected connectEffect(effect: ToneAudioNode | AudioNode): this;
    dispose(): this;
}
