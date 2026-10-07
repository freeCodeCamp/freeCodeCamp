import { __awaiter } from "tslib";
import { Merge } from "../component/channel/Merge.js";
import { Gain } from "../core/context/Gain.js";
import { optionsFromArguments } from "../core/util/Defaults.js";
import { Noise } from "../source/Noise.js";
import { Effect } from "./Effect.js";
import { OfflineContext } from "../core/context/OfflineContext.js";
import { noOp } from "../core/util/Interface.js";
import { assertRange } from "../core/util/Debug.js";
/**
 * Simple convolution created with decaying noise.
 * Generates an Impulse Response Buffer
 * with Tone.Offline then feeds the IR into ConvolverNode.
 * The impulse response generation is async, so you have
 * to wait until {@link ready} resolves before it will make a sound.
 *
 * Inspiration from [ReverbGen](https://github.com/adelespinasse/reverbGen).
 * Copyright (c) 2014 Alan deLespinasse Apache 2.0 License.
 *
 * @category Effect
 */
export class Reverb extends Effect {
    constructor() {
        const options = optionsFromArguments(Reverb.getDefaults(), arguments, [
            "decay",
        ]);
        super(options);
        this.name = "Reverb";
        /**
         * Convolver node
         */
        this._convolver = this.context.createConvolver();
        /**
         * Resolves when the reverb buffer is generated. Whenever either {@link decay}
         * or {@link preDelay} are set, you have to wait until {@link ready} resolves
         * before the IR is generated with the latest values.
         */
        this.ready = Promise.resolve();
        const decayTime = this.toSeconds(options.decay);
        assertRange(decayTime, 0.001);
        this._decay = decayTime;
        const preDelayTime = this.toSeconds(options.preDelay);
        assertRange(preDelayTime, 0);
        this._preDelay = preDelayTime;
        this.generate();
        this.connectEffect(this._convolver);
    }
    static getDefaults() {
        return Object.assign(Effect.getDefaults(), {
            decay: 1.5,
            preDelay: 0.01,
        });
    }
    /**
     * The duration of the reverb.
     */
    get decay() {
        return this._decay;
    }
    set decay(time) {
        time = this.toSeconds(time);
        assertRange(time, 0.001);
        this._decay = time;
        this.generate();
    }
    /**
     * The amount of time before the reverb is fully ramped in.
     */
    get preDelay() {
        return this._preDelay;
    }
    set preDelay(time) {
        time = this.toSeconds(time);
        assertRange(time, 0);
        this._preDelay = time;
        this.generate();
    }
    /**
     * Generate the Impulse Response. Returns a promise while the IR is being generated.
     * @return Promise which returns this object.
     */
    generate() {
        return __awaiter(this, void 0, void 0, function* () {
            const previousReady = this.ready;
            // create a noise burst which decays over the duration in each channel
            const context = new OfflineContext(2, this._decay + this._preDelay, this.context.sampleRate);
            const noiseL = new Noise({ context });
            const noiseR = new Noise({ context });
            const merge = new Merge({ context });
            noiseL.connect(merge, 0, 0);
            noiseR.connect(merge, 0, 1);
            const gainNode = new Gain({ context }).toDestination();
            merge.connect(gainNode);
            noiseL.start(0);
            noiseR.start(0);
            // predelay
            gainNode.gain.setValueAtTime(0, 0);
            gainNode.gain.setValueAtTime(1, this._preDelay);
            // decay
            gainNode.gain.exponentialApproachValueAtTime(0, this._preDelay, this.decay);
            // render the buffer
            const renderPromise = context.render();
            this.ready = renderPromise.then(noOp);
            // wait for the previous `ready` to resolve
            yield previousReady;
            // set the buffer
            this._convolver.buffer = (yield renderPromise).get();
            return this;
        });
    }
    dispose() {
        super.dispose();
        this._convolver.disconnect();
        return this;
    }
}
//# sourceMappingURL=Reverb.js.map